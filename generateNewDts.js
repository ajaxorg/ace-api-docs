"use strict";

Object.defineProperty(exports, "__esModule", {value: true});
var ts = require("typescript");
var fs = require("fs");
const EOL = '\n';
var logs = '';
var edits = [];
var foundClassName = '';
var dir = "generated";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function createLanguageServiceHost(options) {
    return {
        files: {},
        addFile(fileName, text) {
            this.files[fileName] = ts.ScriptSnapshot.fromString(text);
        },
        "getCompilationSettings": function () {
            return options;
        },
        "getScriptFileNames": function () {
            return Object.keys(this.files);
        },
        "getScriptVersion": function (_fileName) {
            return "0";
        },
        "getScriptSnapshot": function (fileName) {
            if (this.files[fileName])
                return this.files[fileName];
            if (!fs.existsSync(fileName)) {
                return undefined;
            }
            return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
        },
        "getCurrentDirectory": function () {
            return process.cwd();
        },
        "getDefaultLibFileName": options => ts.getDefaultLibFilePath(options),
        fileExists: ts.sys.fileExists,
        readFile: ts.sys.readFile,
        readDirectory: ts.sys.readDirectory,
        directoryExists: ts.sys.directoryExists,
        getDirectories: ts.sys.getDirectories,
    };

}

function createDefaultFormatCodeSettings() {
    return {
        baseIndentSize: 0,
        indentSize: 4,
        tabSize: 4,
        indentStyle: ts.IndentStyle.Smart,
        newLineCharacter: EOL,
        convertTabsToSpaces: true,
        insertSpaceAfterCommaDelimiter: true,
        insertSpaceAfterSemicolonInForStatements: true,
        insertSpaceBeforeAndAfterBinaryOperators: true,
        insertSpaceAfterConstructor: false,
        insertSpaceAfterKeywordsInControlFlowStatements: true,
        insertSpaceAfterFunctionKeywordForAnonymousFunctions: false,
        insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
        insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
        insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: false,
        insertSpaceAfterTypeAssertion: false,
        insertSpaceBeforeFunctionParenthesis: false,
        placeOpenBraceOnNewLineForFunctions: false,
        placeOpenBraceOnNewLineForControlBlocks: false,
        insertSpaceBeforeTypeAnnotation: false
    };
}

function createLanguageService(filename, text, options) {
    var host = createLanguageServiceHost(options);
    host.addFile(filename, text);
    return ts.createLanguageService(host);
}

function formatDts(filename, text, options) {
    
    const languageService = createLanguageService(filename, text, options);
    let formatEdits = languageService.getFormattingEditsForDocument(filename, createDefaultFormatCodeSettings());
    formatEdits
        .sort((a, b) => a.span.start - b.span.start)
        .reverse()
        .forEach(edit => {
            const head = text.slice(0, edit.span.start);
            const tail = text.slice(edit.span.start + edit.span.length);
            text = `${head}${edit.newText}${tail}`;
        });
    
    return text;
}

/**
 * This method would correct non-existent types inherited from jsDoc
 * @param {string} filename
 * @param {string} text
 * @param options
 * @return {string}
 */
function correctDeclaration(filename, text, options) {
    delete options.lib;
    delete options.types;
    const languageService = createLanguageService(filename, text, options);
    let semanticDiagnostics = languageService.getSemanticDiagnostics(filename);
    semanticDiagnostics
        .sort((a, b) => a.start - b.start)
        .reverse()
        .forEach(edit => {
            if (text[edit.start - 1] === '.') {
                const boundaryIndex = findPreviousBoundary(text, edit.start);
                const head = text.slice(0, boundaryIndex + 1);
                const tail = text.slice(edit.start + edit.length);
                text = `${head}any${tail}`;
            }
        });
    return text;
}

function findPreviousBoundary(text, startIndex) {
    for (let i = startIndex - 1; i >= 0; i--) {
        if (text[i] === '\n' || text[i] === ':') {
            return i;
        }
    }
    return -1;
}

function generateDocumentation(fileNames, options) {

    function print(node) {
        if (node.parent && (ts.isInterfaceDeclaration(node.parent) || ts.isClassDeclaration(node.parent))
            && ts.isIdentifier(node) && !node.parent.jsDoc) {
            let foundClass = findClassName(node.escapedText);
            foundClassName = node.escapedText;
            if (foundClass) {
                edits.push({
                    pos: node.parent.pos,
                    text: EOL + jsDocPrettify(foundClass)
                });
            }
            else {
                let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                classes[foundClassName] = {
                    line: currentLine,
                    jsDoc: [],
                    sourceName: fileNames[0].match(/ace\.d\.ts/)[0],
                    described: true
                };
            }
        }
        else {
            if (ts.isConstructorDeclaration(node)) {
                let foundConstructor = findConstructorName();
                if (foundConstructor) {
                    edits.push({
                        pos: node.pos,
                        text: EOL + jsDocPrettify(foundConstructor)
                    });
                }
                else {
                    let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line + 1;
                    classes[foundClassName]["construct"] = {
                        line: currentLine,
                        jsDoc: [],
                        sourceName: fileNames[0].match(/ace\.d\.ts/)[0],
                        described: true
                    };
                }
            }
            else {
                if (node.parent && (ts.isMethodSignature(node.parent) || ts.isMethodDeclaration(node.parent))
                    && ts.isParameter(node) && node.type && node.type.literal) {
                    let foundEvent = eventResolver(node.type.literal.text);
                    if (foundEvent) {
                        edits.push({
                            pos: node.parent.pos,
                            text: EOL + jsDocPrettify(foundEvent)
                        });
                    }
                    else {
                        let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line + 1;
                        classes[foundClassName][node.type.literal.text + "_event"] = {
                            line: currentLine,
                            jsDoc: [],
                            sourceName: fileNames[0].match(/ace\.d\.ts/)[0],
                            described: true
                        };
                    }
                }
                else {
                    if (node.parent && (ts.isMethodSignature(node.parent) || ts.isMethodDeclaration(node.parent))
                        && ts.isIdentifier(node)) {
                        let foundMethod = methodResolver(node.escapedText);
                        if (foundMethod) {
                            edits.push({
                                pos: node.parent.pos,
                                text: EOL + jsDocPrettify(foundMethod)
                            });
                        }
                        else {
                            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.getStart()).line
                                + 1;
                            classes[foundClassName][node.escapedText] = {
                                line: currentLine,
                                jsDoc: [],
                                sourceName: fileNames[0].match(/ace\.d\.ts/)[0],
                                described: true
                            };
                        }
                    }
                    else {
                        if (node.parent && node.parent.parent && (ts.isInterfaceDeclaration(node.parent.parent)
                            || ts.isClassDeclaration(node.parent.parent)) && (ts.isPropertySignature(node.parent)
                            || ts.isPropertyDeclaration(node.parent)) && ts.isIdentifier(node)) {
                            let foundProperty = propertyResolver(node.escapedText);
                            if (foundProperty) {
                                edits.push({
                                    pos: node.parent.pos,
                                    text: EOL + jsDocPrettify(foundProperty)
                                });
                            }
                            else {
                                if (foundClassName) {
                                    let currentLine = ts.getLineAndCharacterOfPosition(
                                        sourceFile, node.parent.getStart()).line + 1;
                                    classes[foundClassName][node.escapedText + "_prop"] = {
                                        line: currentLine,
                                        jsDoc: [],
                                        sourceName: fileNames[0].match(/ace\.d\.ts/)[0],
                                        described: true
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
        ts.forEachChild(node, print);
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
        if (classes[foundClassName]) {
            if (classes[foundClassName][propName + "_prop"]) {
                classes[foundClassName][propName + "_prop"].described = true;
                return classes[foundClassName][propName + "_prop"];
            }
            if (classes[foundClassName][propName]) { 
                //In case of MethodSignature in code and PropertyDeclaration in d.ts we will return method's jsDoc's
                classes[foundClassName][propName].described = true;
                return classes[foundClassName][propName];
            }
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

function jsDocPrettify(aceObject) {
    let jsDoc = '';
    if (aceObject && aceObject.jsDoc) {
        for (var k = 0; k < aceObject.jsDoc.length; k++) {
            jsDoc = jsDoc + aceObject.jsDoc[k] + EOL;
        }
    }
    jsDoc = jsDoc.replace(/\s{2,}/g, EOL + ' ');
    return jsDoc;
}

function implicitlyCreateClasses(content, withJsDoc) {
    for (var className in classes) {
        if (!classes[className].described) {
            let regExp = new RegExp('namespace Ace\\s*{\\s*' + EOL, 'g');
            let match = regExp.exec(content);
            if (regExp.lastIndex != 0) {
                let jsDoc = '';
                if (withJsDoc) {
                    jsDoc = jsDocPrettify(classes[className]);
                }
                edits.push({
                    pos: regExp.lastIndex,
                    text: jsDoc + "export class " + className + " {" + EOL + "}" + EOL + EOL
                });
            }

            logs = logs + "No such class name '" + className + "' in declaration file. Implicitly created." + EOL;
        }
    }
}

function implictlyCreateLowLevelDeclarations(content, withJsDoc) {
    for (var className in classes) {
        for (var method in classes[className]) {
            let regExp, match;
            //this would ignore all internal methods started with $
            if (method !== 'jsDoc' && !/^\$/.test(method) && classes[className][method] === Object(
                classes[className][method])) {
                if (!classes[className][method].described) {
                    switch (true) {
                        case /_prop/.test(method):
                            let propName = method.match(/([\w$]*)_prop/)[1];
                            regExp = new RegExp('(class|interface) ' + className + ' [^{]*', 'gm');
                            match = regExp.exec(content);
                            if (regExp.lastIndex != 0) {
                                let type;
                                if (classes[className][method].params) {
                                    type = classes[className][method].params["return"];
                                }
                                else {
                                    type = "any";
                                }
                                let jsDoc = '';
                                if (withJsDoc) {
                                    jsDoc = jsDocPrettify(classes[className][method]);
                                }
                                edits.push({
                                    pos: regExp.lastIndex + 2,
                                    text: jsDoc + "" + propName + ": " + type + ";" + EOL
                                });
                            }
                            logs = logs + "No such property name '" + propName + "' in declaration file. Class: "
                                + className + ". Implicitly created." + EOL;
                            break;
                        case /_event/.test(method):
                            let eventName = method.match(/([\w$]*)_event/)[1];
                            regExp = new RegExp('(class|interface) ' + className + ' [^{]*', 'gm');
                            match = regExp.exec(content);
                            if (regExp.lastIndex != 0) {
                                let allParams = [];
                                if (classes[className][method].params) {
                                    for (let prop in classes[className][method].params) {
                                        allParams.push(prop + ": " + classes[className][method].params[prop]);
                                    }
                                }
                                let callbackExpr;
                                if (allParams.length > 0) {
                                    callbackExpr = ", callback: (" + allParams.join(', ') + ") => void";
                                }
                                else {
                                    callbackExpr = "";
                                }
                                let jsDoc = '';
                                if (withJsDoc) {
                                    jsDoc = jsDocPrettify(classes[className][method]);
                                }
                                edits.push({
                                    pos: regExp.lastIndex + 2,
                                    text: jsDoc + "on(name: '" + eventName + "'" + callbackExpr + "): void" + ";" + EOL
                                });
                            }
                            logs = logs + "No such event name '" + eventName + "' in declaration file. Class: "
                                + className + ". Implicitly created." + EOL;
                            break;
                        case (method === "construct"):
                            regExp = new RegExp('(class|interface) ' + className + ' [^{]*', 'gm');
                            match = regExp.exec(content);
                            if (regExp.lastIndex != 0) {
                                let allParams = [];
                                let returnType = '';
                                if (classes[className][method].params) {
                                    for (let prop in classes[className][method].params) {
                                        let paramType;
                                        let questionMark;
                                        if (classes[className][method].params[prop][classes[className][method].params[prop].length
                                        - 1] == "?") {
                                            paramType = classes[className][method].params[prop].substring(
                                                0, classes[className][method].params[prop].length - 1);
                                            questionMark = '?';
                                        }
                                        else {
                                            paramType = classes[className][method].params[prop];
                                            questionMark = '';
                                        }
                                        if (prop == 'return') {
                                            returnType = questionMark + ": " + paramType;
                                        }
                                        else {
                                            allParams.push(prop + questionMark + ": " + paramType);
                                        }
                                    }
                                }
                                let jsDoc = '';
                                if (withJsDoc) {
                                    jsDoc = jsDocPrettify(classes[className][method]);
                                }
                                edits.push({
                                    pos: regExp.lastIndex + 2,
                                    text: jsDoc + "constructor(" + allParams.join(', ') + ")" + returnType + ";" + EOL
                                });
                            }
                            logs = logs + "No constructor in declaration file. Class: " + className
                                + ". Implicitly created." + EOL;
                            break;
                        default:
                            regExp = new RegExp('(class|interface) ' + className + ' [^{]*', 'gm');
                            match = regExp.exec(content);
                            if (regExp.lastIndex != 0) {
                                let allParams = [];
                                let returnType = '';
                                if (classes[className][method].params) {
                                    for (let prop in classes[className][method].params) {
                                        let paramType;
                                        let questionMark;
                                        if (classes[className][method].params[prop][classes[className][method].params[prop].length
                                        - 1] == "?") {
                                            paramType = classes[className][method].params[prop].substring(
                                                0, classes[className][method].params[prop].length - 1);
                                            questionMark = '?';
                                        }
                                        else {
                                            paramType = classes[className][method].params[prop];
                                            questionMark = '';
                                        }
                                        if (prop == 'return') {
                                            returnType = questionMark + ": " + paramType;
                                        }
                                        else {
                                            allParams.push(prop + questionMark + ": " + paramType);
                                        }
                                    }
                                }
                                let jsDoc = '';
                                if (withJsDoc) {
                                    jsDoc = jsDocPrettify(classes[className][method]);
                                }
                                edits.push({
                                    pos: regExp.lastIndex + 2,
                                    text: jsDoc + method + "(" + allParams.join(', ') + ")" + returnType + ";" + EOL
                                });
                            }

                            logs = logs + "No such method name '" + method + "' in declaration file. Class: "
                                + className + ". Implicitly created." + EOL;
                            break;
                    }
                }
            }
        }
    }
    fs.writeFileSync(dir + "/declarations.log", logs);
}

function applyEditsToFile(filename, format, correct) {
    var start = fs.readFileSync(filename, "utf8");
    var end = "";
    edits
        .sort((a, b) => b.pos - a.pos)
        .forEach(edit => {
            end = edit.text + start.slice(edit.pos) + end;
            start = start.slice(0, edit.pos);
        });
    end = start + end;
    if (format) {
        end = formatDts(filename, end, options);
    }
    if (correct) {
        end = correctDeclaration(filename, end, options);
    }
    fs.writeFileSync(filename, end);
    return end;
}

function processDeclaration(fileName, content, withJsDoc) {
    edits = [];
    implicitlyCreateClasses(content, withJsDoc);
    content = applyEditsToFile(fileName);
    edits = [];
    implictlyCreateLowLevelDeclarations(content, withJsDoc);
    applyEditsToFile(fileName, true, true);
}

fs.copyFileSync(process.argv[2], dir + "/ace.d.ts");
var data = fs.readFileSync(dir + "/classes.json", "utf8");
var classes = JSON.parse(data.toString());
var options = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    declaration: true,
    lib: [],
    "types": []
};
generateDocumentation([dir + "/ace.d.ts"], options, false);

fs.writeFileSync(dir + "/classes.json", JSON.stringify(classes, undefined, 4));

var content = applyEditsToFile(dir + "/ace.d.ts");
processDeclaration(dir + "/ace.d.ts", content, true);

fs.copyFileSync(process.argv[2], dir + "/ace-without-comments.d.ts");
content = fs.readFileSync(dir + "/ace-without-comments.d.ts", "utf8");
processDeclaration(dir + "/ace-without-comments.d.ts", content, false);
