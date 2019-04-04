"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var ts = require("typescript");
var fs = require("fs");
var logs = '';
var edits = [];
var foundClassName = '';
var dir = "generated";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function generateDocumentation(fileNames, options) {

    function print(node) {
        if (node.parent && (ts.isInterfaceDeclaration(node.parent) || ts.isClassDeclaration(node.parent)) && ts.isIdentifier(node) && !node.parent.jsDoc) {
            let foundClass = findClassName(node.escapedText);
            foundClassName = node.escapedText;
            if (foundClass) {
                edits.push({pos: node.parent.pos, text: "\r\n" + jsDocPrettify(foundClass)});
            } else {
                let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                classes[foundClassName] = {
                    line: currentLine,
                    jsDoc: [],
                    sourceName: fileNames[0].match(/ace\.d\.ts/)[0]
                }
            }
        } else {
            if (ts.isConstructorDeclaration(node)) {
                let foundConstructor = findConstructorName();
                if (foundConstructor) {
                    edits.push({pos: node.pos, text: "\r\n" + jsDocPrettify(foundConstructor)});
                } else {
                    let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line + 1;
                    classes[foundClassName]["construct"] = {
                        line: currentLine,
                        jsDoc: [],
                        sourceName: fileNames[0].match(/ace\.d\.ts/)[0]
                    }
                }
            } else {
                if (node.parent && (ts.isMethodSignature(node.parent) || ts.isMethodDeclaration(node.parent)) && ts.isParameter(node) && node.type && node.type.literal) {
                    let foundEvent = eventResolver(node.type.literal.text);
                    if (foundEvent) {
                        edits.push({pos: node.parent.pos, text: "\r\n" + jsDocPrettify(foundEvent)});
                    } else {
                        let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                        classes[foundClassName][node.type.literal.text + "_event"] = {
                            line: currentLine,
                            jsDoc: [],
                            sourceName: fileNames[0].match(/ace\.d\.ts/)[0]
                        }
                    }
                } else {
                    if (node.parent && (ts.isMethodSignature(node.parent) || ts.isMethodDeclaration(node.parent)) && ts.isIdentifier(node)) {
                        let foundMethod = methodResolver(node.escapedText);
                        if (foundMethod) {
                            edits.push({pos: node.parent.pos, text: "\r\n" + jsDocPrettify(foundMethod)});
                        } else {
                            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                            classes[foundClassName][node.escapedText] = {
                                line: currentLine,
                                jsDoc: [],
                                sourceName: fileNames[0].match(/ace\.d\.ts/)[0]
                            }
                        }
                    } else {
                        if (node.parent && node.parent.parent && (ts.isInterfaceDeclaration(node.parent.parent) || ts.isClassDeclaration(node.parent.parent)) && (ts.isPropertySignature(node.parent) || ts.isPropertyDeclaration(node.parent)) && ts.isIdentifier(node)) {
                            let foundProperty = propertyResolver(node.escapedText);
                            if (foundProperty) {
                                edits.push({pos: node.parent.pos, text: "\r\n" + jsDocPrettify(foundProperty)});
                            } else {
                                if (foundClassName) {
                                    let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                                    classes[foundClassName][node.escapedText + "_prop"] = {
                                        line: currentLine,
                                        jsDoc: [],
                                        sourceName: fileNames[0].match(/ace\.d\.ts/)[0]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ts.forEachChild(node, print);
    }

    function jsDocPrettify(aceObject) {
        let jsDoc = '';
        if (aceObject.jsDoc) {
            for (var k = 0; k < aceObject.jsDoc.length; k++) {
                jsDoc = jsDoc + aceObject.jsDoc[k] + "\r\n";
            }
        }
        return jsDoc;
    }

    function methodResolver(methodName) {
        if (classes[foundClassName] && classes[foundClassName][methodName]) {
            classes[foundClassName][methodName].described = true;
            return classes[foundClassName][methodName];
        }
    }

    function eventResolver(eventName) {
        if (classes[foundClassName] && classes[foundClassName][eventName + "_event"]) {
            classes[foundClassName][eventName + "_event"].described = true;
            return classes[foundClassName][eventName + "_event"];
        }
    }

    function propertyResolver(propName) {
        if (classes[foundClassName] && classes[foundClassName][propName + "_prop"]) {
            classes[foundClassName][propName + "_prop"].described = true;
            return classes[foundClassName][propName + "_prop"];
        }
    }

    function findClassName(identifierName) {
        for (var className in classes) {
            if (className == identifierName) {
                classes[identifierName].described = true;
                return classes[className];
            }
        }
    }

    function findConstructorName() {
        if (classes[foundClassName] && classes[foundClassName]["construct"]) {
            classes[foundClassName]["construct"].described = true;
            return classes[foundClassName]["construct"];
        }
    }

    var program = ts.createProgram(fileNames, options);
    var checker = program.getTypeChecker();

    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        ts.forEachChild(sourceFile, print);
    }
}

function createDiagnosticForDeclarationFile() {
    for (var className in classes) {
        if (!classes[className].described) {
            logs = logs + "No such class name '" + className + "' in declaration file\r\n"
        }
        for (var method in classes[className]) {
            if (method !== 'jsDoc' && classes[className][method] === Object(classes[className][method])) {
                if (!classes[className][method].described) {
                    switch (true) {
                        case /_prop/.test(method):
                            let propName = method.match(/([\w]*)_prop/)[1];
                            logs = logs + "No such property name '" + propName + "' in declaration file. Class: " + className + "\r\n";
                            break;
                        case /_event/.test(method):
                            let eventName = method.match(/([\w]*)_event/)[1];
                            logs = logs + "No such event name '" + eventName + "' in declaration file. Class: " + className + "\r\n";
                            break;
                        case (method === "construct"):
                            logs = logs + "No constructor in declaration file. Class: " + className + "\r\n";
                            break;
                        default:
                            logs = logs + "No such method name '" + method + "' in declaration file. Class: " + className + "\r\n";
                            break;
                    }
                }
            }
        }
    }
    fs.writeFileSync(dir + "/declarations.log", logs);
}

fs.copyFileSync(process.argv[2], dir + "/ace.d.ts");
var data = fs.readFileSync(dir + "/classes.json", "utf8");
var classes = JSON.parse(data.toString());
generateDocumentation([dir + "/ace.d.ts"], {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    declaration: true,
    lib: [],
    "types": []
}, false);

var contents = fs.readFileSync(dir + "/ace.d.ts", "utf8");
var start = contents;
var end = "";
edits
    .sort((a, b) => b.pos - a.pos)
    .forEach(edit => {
        end = edit.text + start.slice(edit.pos) + end;
        start = start.slice(0, edit.pos)
    });
end = start + end;
fs.writeFileSync(dir + "/ace.d.ts", end);
fs.writeFileSync(dir + "/classes.json", JSON.stringify(classes, undefined, 4));
createDiagnosticForDeclarationFile();

