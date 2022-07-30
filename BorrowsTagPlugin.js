var Components = require("typedoc/dist/lib/output/components").ContextAwareRendererComponent;
var Events = require("typedoc/dist/lib/output/events");
var Path = require("path");

class BorrowsTagPlugin extends Components {
    initialize() {
        this.listenTo(this.owner, Events.RendererEvent.BEGIN, this.onBeginRendererEvent);
        this.logs = '';
    }

    onBeginRendererEvent(context) {
        var _this = this;
        var project = context.project;
        for (var key in project.reflections) {
            var reflection = project.reflections[key];
            if (reflection.comment && reflection.comment.tags && reflection.comment.tags.length > 0) {
                reflection.comment.tags.forEach(function (tag) {
                    if (tag.tagName == "borrows") {
                        var commentReflection = project.findReflectionByName(tag.text.replace(/\n+/, ''));
                        if (commentReflection) {
                            var comment = (commentReflection.comment || (commentReflection.signatures && commentReflection.signatures.length > 0 && commentReflection.signatures[0].comment));
                            if (comment) {
                                if (commentReflection.url) {
                                    if (_this.urlPrefix.test(commentReflection.url)) {
                                        tag.text = '<a href="' + commentReflection.url + '">' + tag.text + '</a>';
                                    }
                                    else {
                                        const relative = Path.relative(Path.dirname("globals.html"), Path.dirname(commentReflection.url));
                                        tag.text = '<a href="../' + Path.join(relative, Path.basename(commentReflection.url)).replace(/\\/g, '/') + '">' + tag.text + '</a>';
                                    }
                                }
                                reflection.comment.copyFrom(comment);
                                reflection.comment.tags.push(tag);
                            }
                        }
                    }
                });
            }
        }
    }

}

BorrowsTagPlugin.prototype.componentName = "borrowstag";

exports.BorrowsTagPlugin = BorrowsTagPlugin;