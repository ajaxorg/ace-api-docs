var ConverterComponent = require("typedoc/dist/lib/converter/components").ConverterComponent;
var Converter = require("typedoc/dist/lib/converter").Converter;
var fs = require("fs");
var modelTypes = require("typedoc/dist/lib/models/types");
var modelReflections = require("typedoc/dist/lib/models/reflections/index");

class AceGitLinkPlugin extends ConverterComponent {
    initialize() {
        this.listenTo(this.owner, Converter.EVENT_BEGIN, this.onBegin);
        this.logs = '';
    }

    onBegin() {
        // read options parameter
        var options = this.application.options;
        var urlPrefix = options.getValue('acegitlink');
        if (urlPrefix) {
            this.urlPrefix = urlPrefix;
        }
        try {
            // register handler
            this.listenTo(this.owner, Converter.EVENT_RESOLVE_BEGIN, this.onBeginResolve);
            this.listenTo(this.owner, Converter.EVENT_RESOLVE_END, this.onEndResolve);
        }
        catch (e) {
            console.error('typedoc-plugin-sourcefile-url: ' + e.message);
        }
    }

    onBeginResolve(context) {
        var project = context.project;
        for (var key in project.reflections) {
            var reflection = project.reflections[key];
            if (reflection.kind === 4096 && reflection.parent && reflection.parent.kind === 2048 && reflection.parent.parent && reflection.parent.parent.kind === 128) {
                if (!reflection.comment) {
                    removeReflection(project, reflection.parent);
                    this.logs = this.logs + "Warning: ignoring method without comment: " + reflection.name + ". Class: " + reflection.parent.parent.name + "\r\n";
                }
            }
        }
    };

    onEndResolve(context) {
        var _this = this;
        var project = context.project;
        if (_this.urlPrefix) {
            var data = fs.readFileSync("generated/classes.json", "utf8");
            var classes = JSON.parse(data.toString());
            for (var key in project.reflections) {
                var reflection = project.reflections[key];
                if (reflection.sources) {
                    reflection.sources.forEach(function (source) {
                        if (source.file) {
                            var obj = getSourceUrlFromFile(classes, reflection);
                            if (obj) {
                                if (obj.log) {
                                    source.url = _this.urlPrefix + obj.source + "#L" + obj.line;
                                    source.fileName = obj.source;
                                    source.line = obj.line;
                                    _this.logs = _this.logs + obj.log;
                                } else {
                                    source.url = _this.urlPrefix + obj.source + "#L" + obj.line;
                                    source.fileName = obj.source;
                                    source.line = obj.line;
                                }
                            } else {
                                if (reflection.inheritedFrom || reflection.implementationOf) {
                                    let condition = (reflection.inheritedFrom) ? "inheritedFrom" : "implementationOf";
                                    var objInh = getSourceUrlFromFile(classes, reflection[condition].reflection);
                                    if (objInh) {
                                        source.url = _this.urlPrefix + objInh.source + "#L" + objInh.line;
                                        source.fileName = objInh.source;
                                        source.line = objInh.line;
                                    }
                                } else {
                                    source.fileName = undefined;
                                    source.line = '';
                                }
                            }
                        }
                    });
                }
            }
            fs.writeFileSync("generated/documentation.log", this.logs + _this.logs);
        }
    };

}

function getSourceUrlFromFile(aceObjects, reflection) {
    var pattern = /ace\/src(.)*/i;

    if (reflection.kindString === "Interface" || reflection.kindString === "Class") {
        var source = aceObjects[reflection.name];
        if (source && source.sourceName) {
            if (source.described) {
                return {
                    "source": (source.sourceName.match(pattern)) ? source.sourceName.match(pattern)[0] : source.sourceName,
                    "line": source.line
                };
            } else {
                return {
                    "source": (source.sourceName.match(pattern)) ? source.sourceName.match(pattern)[0] : source.sourceName,
                    "line": source.line,
                    log: "No described class in classes.json: " + reflection.name + "\r\n"
                };
            }

        }
    } else if (reflection.kindString === "Call signature" && reflection.parent && reflection.parent.kindString === "Method" && (reflection.parent.parent.kindString === "Interface" || reflection.parent.parent.kindString === "Class")) {
        if (aceObjects[reflection.parent.parent.name]) {
            var parentSource = aceObjects[reflection.parent.parent.name][reflection.name];
            if (parentSource && parentSource.sourceName) {
                if (parentSource.described) {
                    return {
                        "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                        "line": parentSource.line
                    };
                } else {
                    if (!reflection.inheritedFrom && !reflection.implementationOf) {
                        return {
                            "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                            "line": parentSource.line,
                            log: "No described method in classes.json: " + reflection.name + ". Class:" + reflection.parent.parent.name + "\r\n"
                        };
                    }
                }
            }
        }
    } else if (reflection.kindString === "Event" && reflection.parent && reflection.parent.kindString === "Event" && (reflection.parent.parent.kindString === "Interface" || reflection.parent.parent.kindString === "Class")) {
        if (aceObjects[reflection.parent.parent.name]) {
            if (reflection.parameters && reflection.parameters.length > 0 && reflection.parameters[0].name === "name") {
                var eventName = reflection.parameters[0].type.value + '_event';
                var parentSource = aceObjects[reflection.parent.parent.name][eventName];
                if (parentSource && parentSource.sourceName) {
                    if (parentSource.described) {
                        return {
                            "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                            "line": parentSource.line
                        };
                    } else {
                        if (!reflection.inheritedFrom && !reflection.implementationOf) {
                            return {
                                "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                                "line": parentSource.line,
                                log: "No described event in classes.json: " + eventName + ". Class:" + reflection.parent.parent.name + "\r\n"
                            };
                        }
                    }
                }
            }
        }
    } else if (reflection.kindString === "Constructor signature" && reflection.parent && reflection.parent.kindString === "Constructor" && (reflection.parent.parent.kindString === "Interface" || reflection.parent.parent.kindString === "Class")) {
        if (aceObjects[reflection.parent.parent.name]) {
            var parentSource = aceObjects[reflection.parent.parent.name]["construct"];
            if (parentSource && parentSource.sourceName) {
                if (parentSource.described) {
                    return {
                        "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                        "line": parentSource.line
                    };
                } else {
                    if (!reflection.inheritedFrom && !reflection.implementationOf) {
                        return {
                            "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                            "line": parentSource.line,
                            log: "No constructor in classes.json: " + reflection.name + ". Class:" + reflection.parent.parent.name + "\r\n"
                        };
                    }
                }
            }
        }
    } else if (reflection.kindString === "Property" && reflection.parent && (reflection.parent.kindString === "Interface" || reflection.parent.kindString === "Class")) {
        if (aceObjects[reflection.parent.name]) {
            var parentSource = aceObjects[reflection.parent.name][reflection.name + "_prop"];
            if (parentSource && parentSource.sourceName) {
                if (parentSource.described) {
                    return {
                        "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                        "line": parentSource.line
                    };
                } else {
                    if (!reflection.inheritedFrom && !reflection.implementationOf) {
                        return {
                            "source": (parentSource.sourceName.match(pattern)) ? parentSource.sourceName.match(pattern)[0] : parentSource.sourceName,
                            "line": parentSource.line,
                            log: "No described property in classes.json: " + reflection.name + ". Class:" + reflection.parent.name + "\r\n"
                        };
                    }
                }
            }
        }
    }

}

function removeReflection(project, reflection) {
    reflection.traverse(function (child) {
        return removeReflection(project, child);
    });
    var parent = reflection.parent;
    parent.traverse(function (child, property) {
        if (child === reflection) {
            switch (property) {
                case modelReflections.TraverseProperty.Children:
                    if (parent.children) {
                        var index = parent.children.indexOf(reflection);
                        if (index !== -1) {
                            parent.children.splice(index, 1);
                        }
                    }
                    break;
                case modelReflections.TraverseProperty.GetSignature:
                    delete parent.getSignature;
                    break;
                case modelReflections.TraverseProperty.IndexSignature:
                    delete parent.indexSignature;
                    break;
                case modelReflections.TraverseProperty.Parameters:
                    if (reflection.parent.parameters) {
                        var index = reflection.parent.parameters.indexOf(reflection);
                        if (index !== -1) {
                            reflection.parent.parameters.splice(index, 1);
                        }
                    }
                    break;
                case modelReflections.TraverseProperty.SetSignature:
                    delete parent.setSignature;
                    break;
                case modelReflections.TraverseProperty.Signatures:
                    if (parent.signatures) {
                        var index = parent.signatures.indexOf(reflection);
                        if (index !== -1) {
                            parent.signatures.splice(index, 1);
                        }
                    }
                    break;
                case modelReflections.TraverseProperty.TypeLiteral:
                    parent.type = new modelTypes.IntrinsicType('Object');
                    break;
                case modelReflections.TraverseProperty.TypeParameter:
                    if (parent.typeParameters) {
                        var index = parent.typeParameters.indexOf(reflection);
                        if (index !== -1) {
                            parent.typeParameters.splice(index, 1);
                        }
                    }
                    break;
            }
        }
    });
    var id = reflection.id;
    delete project.reflections[id];
    for (var key in project.symbolMapping) {
        if (project.symbolMapping.hasOwnProperty(key) && project.symbolMapping[key] === id) {
            delete project.symbolMapping[key];
        }
    }
};

AceGitLinkPlugin.prototype.componentName = "acegitlink";

exports.AceGitLinkPlugin = AceGitLinkPlugin;