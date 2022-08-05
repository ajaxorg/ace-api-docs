"use strict";
var ts = require("typescript");
var fs = require("fs");
var propObjects = {};
var options = JSON.parse(fs.readFileSync("generator-options.json", "utf8").toString());

var excludeClasses = options["exclude"]["classes"];
var excludeMethods = options["exclude"]["methods"];

function createCompilerHost(options) {
    return {
        getSourceFile: getSourceFile,
        getDefaultLibFileName: function () {
            return ts.getDefaultLibFileName(options)
        },
        writeFile: function (fileName, content) {
            return ts.sys.writeFile(fileName, content);
        },
        getCurrentDirectory: function () {
            return ts.sys.getCurrentDirectory();
        },
        getDirectories: function (path) {
            return ts.sys.getDirectories(path);
        },
        getCanonicalFileName: function (fileName) {
            return ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase();
        },
        getNewLine: function () {
            return ts.sys.newLine;
        },
        useCaseSensitiveFileNames: function () {
            return ts.sys.useCaseSensitiveFileNames;
        },
        fileExists: fileExists,
        readFile: readFile,
        directoryExists: function (path) {
            return ts.sys.directoryExists(path);
        }
    };

    function fileExists(fileName) {
        return ts.sys.fileExists(fileName);
    }

    function readFile(fileName) {
        return ts.sys.readFile(fileName);
    }

    function getSourceFile(fileName, languageVersion, onError) {
        var sourceText = ts.sys.readFile(fileName);
        return sourceText !== undefined ? ts.createSourceFile(
            fileName, sourceText, languageVersion, false, ts.ScriptKind.TS) : undefined;
    }
}

function checkValidName(name) {
    let firstLetter = name[0].toLocaleUpperCase();
    return name.toLocaleUpperCase() != name && firstLetter == name[0] && firstLetter != '_' && firstLetter != '$'
        && !excludeClasses.includes(name);
}

var logs = '';

/** Generate documentation for all classes in a set of .js files */
function generateAnnotations(path, options, output = {}) {
    add(path[0]);

    function add(path) {
        try {
            var stat = fs.statSync(path);
        } catch (e) {
            return;
        }
        if (stat.isFile() && /\.js$/.test(path)) {
            var fileArr = [];
            fileArr.push(path);
            if (/_test/.test(path) || /vim/.test(path) || /highlight_rules/.test(path)) return;
            var docs = generateDocumentation(fileArr, options);
            //prefer Classes with jsDoc
            for (var a in docs) {
                if (output[a] && output[a].jsDoc && Array(output[a].jsDoc) && output[a].jsDoc.length > 0) {
                    delete docs[a].jsDoc;
                    delete docs[a].sourceName;
                    delete docs[a].line;
                    delete docs[a].construct;
                }
            }
            output = mergeGeneratedObjects(output, docs);

            console.log(path + " finished\r\n");
        }
        else if (stat.isDirectory()) {
            var files = fs.readdirSync(path).sort();
            files.forEach(function (name) {
                add(path + "/" + name)
            });
        }
    }

    var dir = "generated";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + "/classes.json", JSON.stringify(output, undefined, 4));
    fs.writeFileSync(dir + "/annotations.log", logs);
}

function mergeGeneratedObjects() {
    for (var i = 1; i < arguments.length; i++) for (var a in arguments[i]) {
        if (!arguments[0][a]) {
            arguments[0][a] = {};
        }
        for (var b in arguments[i][a]) {
            arguments[0][a][b] = arguments[i][a][b];
        }
    }

    return arguments[0];
}

function generateDocumentation(fileNames, options, identifiers = []) {
    // Build a program using the set of root file names in fileNames
    var host = createCompilerHost(options);
    var program = ts.createProgram(fileNames, options, host);
    // Get the checker, we will use it to find more about classes
    var checker = program.getTypeChecker();
    var output = {};

    // Visit every sourceFile in the program
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        if (!sourceFile.isDeclarationFile) {
            // Walk the tree to search for classes
            ts.forEachChild(sourceFile, visit);
            ts.createPrinter()
        }
    }

    return output;

    /** visit nodes finding classes with methods/events/constructors*/
    function visit(node) {
        var docs = [];
        if (ts.isPropertyAssignment(node) && node.parent && ts.isObjectLiteralExpression(node.parent)
            && node.parent.parent && ts.isCallExpression(node.parent.parent)) {
            findNames(node.parent.parent);
            if (identifiers.indexOf('defineOptions') !== -1) {
                var symbol = checker.getSymbolAtLocation(node.name);
                if (symbol) {
                    let type = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
                    var typeString = checker.typeToString(type);
                    if (typeString !== "string") {
                        let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line + 1;
                        identifiers.splice(identifiers.indexOf('require'), 1);
                        identifiers.splice(identifiers.indexOf('config'), 1);
                        identifiers.splice(identifiers.indexOf('defineOptions'), 1);
                        let className = identifiers[0] + 'Options';
                        let propertyName = findName(node).escapedText + '_prop';
                        let params = {"return": "any"};
                        //TODO: maybe there is a method to get normal type without initialValue check
                        for (let i = 0; i < type.properties.length; i++) {
                            if (type.properties[i].escapedName == 'initialValue') {
                                params["return"] = checker.typeToString(type.properties[i].type);
                            }
                        }

                        if (node.jsDoc) {
                            let jsDoc = [];
                            for (var k = 0; k < node.jsDoc.length; k++) {
                                let jsDocText = node.jsDoc[k].getFullText();
                                jsDoc.push(jsDocText);
                            }
                            docs = jsDoc;
                        }
                        if (!output[className]) {
                            output[className] = {};
                        }
                        if (!output[className].hasOwnProperty(propertyName)) {
                            output[className][propertyName] = {
                                line: currentLine,
                                jsDoc: docs,
                                sourceName: fileNames[0],
                                params: params
                            }
                        }
                        else {
                            logs = logs + "Duplicate property '" + propertyName + "' determinator. Class: " + className
                                + ". Filename: " + fileNames[0] + ":" + currentLine + ". First implementation: "
                                + output[className][propertyName].sourceName + ":"
                                + output[className][propertyName].line + "\r\n";
                        }
                    }
                }
                identifiers.length = 0;
            }
        }
        else if (ts.isVariableStatement(node) || ts.isFunctionDeclaration(node)) {
            let className = findName(node).escapedText;
            if (checkValidName(className) === true) {
                findNames(node);
                if (identifiers.indexOf('require') == -1) {
                    let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line + 1;
                    let construct;
                    let events = {};
                    if (node.jsDoc) {
                        let jsDoc = [];
                        for (var k = 0; k < node.jsDoc.length; k++) {
                            let jsDocText = node.jsDoc[k].getFullText();
                            if (/@constructor/.test(jsDocText)) {
                                let params = getParametersFromJsDoc(node.jsDoc[k]);
                                construct = {
                                    line: currentLine,
                                    jsDoc: [jsDocText],
                                    sourceName: fileNames[0],
                                    params: params
                                }
                            }
                            else if (/@event/.test(jsDocText)) {
                                let eventName = jsDocText.match(/@event ([\w]*)/)[1] + "_event";
                                let eventLine = ts.getLineAndCharacterOfPosition(
                                    sourceFile, node.jsDoc[k].getStart()).line + 1;
                                let params = getParametersFromJsDoc(node.jsDoc[k]);
                                events[eventName] = {
                                    line: eventLine,
                                    jsDoc: [jsDocText],
                                    sourceName: fileNames[0],
                                    params: params
                                }
                            }
                            else {
                                jsDoc.push(jsDocText);
                            }
                        }
                        docs = jsDoc;
                    }
                    var comment = transformCommentToJsDoc(node);
                    if (comment) {
                        docs.push(comment);
                    }

                    getPropertiesOfClass(node);

                    output[className] = {
                        line: currentLine,
                        jsDoc: docs,
                        sourceName: fileNames[0],
                        construct: construct
                    };

                    if (Object.keys(events).length !== 0 && events.constructor === Object) {
                        output[className] = mergeGeneratedObjects(output[className], events);
                    }
                    if (Object.keys(propObjects).length !== 0 && propObjects.constructor === Object) {
                        output[className] = mergeGeneratedObjects(output[className], propObjects);
                    }

                }
            }
        }
        else if (ts.isFunctionExpression(node) && node.parent && node.parent.parent && ts.isBinaryExpression(
            node.parent) && (ts.isExpressionStatement(node.parent.parent) || ts.isBinaryExpression(
            node.parent.parent))) {
            let functionName = findName(node.parent).escapedText;
            let secondFunctionName;
            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.parent.getStart()).line + 1;
            let expStatNode;
            if (ts.isBinaryExpression(node.parent.parent)) {
                expStatNode = node.parent.parent.parent;
                secondFunctionName = findName(expStatNode).escapedText;
            }
            else {
                expStatNode = node.parent.parent;
            }


            let findNode = expStatNode;
            do {
                findNode = findNode.parent;
            } while (findNode && !ts.isSourceFile(findNode) && !ts.isCallExpression(findNode)
            && !ts.isFunctionDeclaration(findNode));

            if (findNode && !ts.isSourceFile(findNode) && findName(findNode).escapedText !== "define") {
                findNames(findNode);
                identifiers.splice(identifiers.indexOf('call'), 1);
                while (identifiers.indexOf('prototype') !== -1) {
                    identifiers.splice(identifiers.indexOf('prototype'), 1);
                }
                let events = {};

                let params = getParametersFromNode(node);
                if (expStatNode.jsDoc) {
                    let jsDoc = [];
                    for (var k = 0; k < expStatNode.jsDoc.length; k++) {
                        let jsDocText = expStatNode.jsDoc[k].getFullText();
                        if (/@event/.test(jsDocText)) {
                            let eventName = jsDocText.match(/@event ([\w]*)/)[1] + "_event";
                            let eventLine = ts.getLineAndCharacterOfPosition(
                                sourceFile, expStatNode.jsDoc[k].getStart()).line + 1;
                            let params = getParametersFromJsDoc(expStatNode.jsDoc[k]);
                            events[eventName] = {
                                line: eventLine,
                                jsDoc: [jsDocText],
                                sourceName: fileNames[0],
                                params: params
                            }
                        }
                        else {
                            jsDoc.push(jsDocText);
                            if (Object.keys(params).length > 0) {
                                for (let prop in params) {
                                    if (params[prop] == 'any' || params[prop] == '{}') {
                                        let paramTypeFromJsDoc = getParameterTypeFromJsDoc(expStatNode.jsDoc[k], prop);
                                        if (paramTypeFromJsDoc) {
                                            params[prop] = paramTypeFromJsDoc;
                                        }
                                    }
                                }

                            }
                        }
                    }
                    docs = jsDoc;
                }

                var comment = transformCommentToJsDoc(expStatNode);
                if (comment) {
                    docs.push(comment);
                }

                var className;
                if (ts.isFunctionDeclaration(findNode)) {
                    className = identifiers[0];
                }
                else {
                    className = identifiers[identifiers.length - 1];
                }

                if (className && checkValidName(className) === true) {
                    if (!output[className]) {
                        output[className] = {};
                    }
                    if (!output[className].hasOwnProperty(functionName)) {
                        output[className][functionName] = {
                            line: currentLine,
                            jsDoc: docs,
                            sourceName: fileNames[0],
                            params: params
                        }
                    }
                    else {
                        logs = logs + "Duplicate function '" + functionName + "' determinator. Class: " + className
                            + ". Filename: " + fileNames[0] + ":" + currentLine + ". First implementation: "
                            + output[className][functionName].sourceName + ":" + output[className][functionName].line
                            + "\r\n";
                    }
                    if (secondFunctionName) {
                        if (!output[className].hasOwnProperty(secondFunctionName)
                            || output[className][secondFunctionName] == undefined) {
                            output[className][secondFunctionName] = {
                                line: currentLine,
                                jsDoc: docs,
                                sourceName: fileNames[0],
                                params: params
                            }
                        }
                        else {
                            logs = logs + "Duplicate function '" + secondFunctionName + "' determinator. Class: "
                                + className + ". Filename: " + fileNames[0] + ":" + currentLine
                                + ". First implementation: " + output[className][secondFunctionName].sourceName + ":"
                                + output[className][secondFunctionName].line + "\r\n";
                        }
                    }

                    if (Object.keys(events).length !== 0 && events.constructor === Object) {
                        output[className] = mergeGeneratedObjects(output[className], events);
                    }
                }
                identifiers.length = 0;
            }
        }
        else if (ts.isPropertyAccessExpression(node) && node.parent && node.parent.parent && ts.isBinaryExpression(
            node.parent) && ts.isExpressionStatement(node.parent.parent)) {
            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.parent.getStart()).line + 1;

            ts.forEachChild(node, findNames);
            if (identifiers.length == 2 || identifiers.length == 3) {
                if (identifiers.indexOf('prototype') !== -1) identifiers.splice(identifiers.indexOf('prototype'), 1);
                let className = identifiers[0];
                let functionName = identifiers[identifiers.length - 1];
                if (checkValidName(className) === true && functionName != 'prototype' && (ts.isFunctionExpression(
                    node.parent.right) || (ts.isBinaryExpression(node.parent.right) && ts.isFunctionExpression(
                    node.parent.right.right)))) {
                    let events = {};
                    let functionNode;
                    if (ts.isFunctionExpression(node.parent.right)) {
                        functionNode = node.parent.right;
                    }
                    else {
                        functionNode = node.parent.right.right;
                    }

                    let params = getParametersFromNode(functionNode);
                    if (node.parent.parent.jsDoc) {
                        let jsDoc = [];
                        for (var k = 0; k < node.parent.parent.jsDoc.length; k++) {
                            let jsDocText = node.parent.parent.jsDoc[k].getFullText();
                            if (/@event/.test(jsDocText)) {
                                let eventName = jsDocText.match(/@event ([\w]*)/)[1] + "_event";
                                let eventLine = ts.getLineAndCharacterOfPosition(
                                    sourceFile, node.parent.parent.jsDoc[k].getStart()).line + 1;
                                let params = getParametersFromJsDoc(node.parent.parent.jsDoc[k]);
                                events[eventName] = {
                                    line: eventLine,
                                    jsDoc: [jsDocText],
                                    sourceName: fileNames[0],
                                    params: params
                                }
                            }
                            else {
                                jsDoc.push(jsDocText);
                                if (Object.keys(params).length > 0) {
                                    for (let prop in params) {
                                        if (params[prop] == 'any' || params[prop] == '{}') {
                                            let paramTypeFromJsDoc = getParameterTypeFromJsDoc(
                                                node.parent.parent.jsDoc[k], prop);
                                            if (paramTypeFromJsDoc) {
                                                params[prop] = paramTypeFromJsDoc;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        docs = jsDoc;
                    }

                    var comment = transformCommentToJsDoc(node.parent.parent);
                    if (comment) {
                        docs.push(comment);
                    }
                    if (!output[className]) {
                        output[className] = {};
                    }

                    if (!output[className].hasOwnProperty(functionName)) {
                        output[className][functionName] = {
                            line: currentLine,
                            jsDoc: docs,
                            sourceName: fileNames[0],
                            params: params
                        }
                    }
                    else {
                        logs = logs + "Duplicate function '" + functionName + "' determinator. Class: " + className
                            + ". Filename: " + fileNames[0] + ":" + currentLine + ". First implementation: "
                            + output[className][functionName].sourceName + ":" + output[className][functionName].line
                            + "\r\n";
                    }

                    identifiers.length = 0;
                    if (Object.keys(events).length !== 0 && events.constructor === Object) {
                        output[className] = mergeGeneratedObjects(output[className], events);
                    }
                }
            }
        }
        propObjects = {};
        ts.forEachChild(node, visit);
        identifiers.length = 0;

    }

    function getPropertiesOfClass(node) {
        if (ts.isIdentifier(node) && node.parent && node.parent.expression && node.parent.expression.kind === 100
            && ts.isPropertyAccessExpression(node.parent) && node.parent.parent && ts.isBinaryExpression(
                node.parent.parent) && ts.isExpressionStatement(node.parent.parent.parent)) {
            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.parent.parent.parent.getStart()).line
                + 1;
            let params = {"return": "any"};
            let type = checker.typeToString(
                checker.getBaseTypeOfLiteralType(checker.getTypeAtLocation(node.parent.parent)));
            let name = node.escapedText + "_prop";
            if (type) {
                params["return"] = type;
            }
            let docs = [];
            if (node.parent.parent.parent.jsDoc) {
                let jsDoc = [];
                for (var k = 0; k < node.parent.parent.parent.jsDoc.length; k++) {
                    let jsDocText = node.parent.parent.parent.jsDoc[k].getFullText();
                    jsDoc.push(jsDocText);
                }
                docs = jsDoc;
            }
            propObjects[name] = {
                line: currentLine,
                jsDoc: docs,
                sourceName: fileNames[0],
                params: params
            }
        }
        else {
            ts.forEachChild(node, getPropertiesOfClass);
        }
    }

    function transformCommentToJsDoc(node) {

        let party = ts.getLeadingCommentRanges(sourceFile.getFullText(), node.getFullStart());
        if (party) {
            var al = sourceFile.getFullText().substring(party[0].pos, party[0].end);
            if (al && !/^\/\*\*/g.test(al) && !/Copyright/g.test(al)) {
                var comment;
                if (/^\/\*/g.test(al)) {
                    comment = al.replace(/^[/][*]/g, '/**');
                    comment = comment.replace(/[*][/]$/g, '**/');
                }
                else if (/^[/][/]/g.test(al)) {
                    comment = al.replace(/^[/][/]/g, '/**');
                    comment = comment + '**/';
                }
                return comment;
            }
        }
    }

    function getParametersFromNode(node) {
        let signature = checker.getSignatureFromDeclaration(node);
        let returnType = checker.getReturnTypeOfSignature(signature);
        let params = {
            return: checker.typeToString(returnType)
        };
        if (node.parameters && node.parameters.length > 0) {
            for (let i = 0; i < node.parameters.length; i++) {
                params[node.parameters[i].name.escapedText] = checker.typeToString(
                    checker.getTypeAtLocation(node.parameters[i]));
            }
        }
        return params;
    }

    function getParameterTypeFromJsDoc(jsDocNode, paramName) {
        if (jsDocNode.tags && jsDocNode.tags.length > 0) {
            for (var i = 0; i < jsDocNode.tags.length; i++) {
                if ((jsDocNode.tags[i].tagName.escapedText === 'param' && jsDocNode.tags[i].name.escapedText
                    === paramName) || ((jsDocNode.tags[i].tagName.escapedText === 'return'
                    || jsDocNode.tags[i].tagName.escapedText === 'returns') && paramName === 'return')) {
                    if (jsDocNode.tags[i].typeExpression) {
                        let optional = "";
                        if (jsDocNode.tags[i].isBracketed === true) {
                            optional = "?";
                        }

                        var paramType = jsDocNode.tags[i].typeExpression.getFullText();
                        return paramType.substring(1, paramType.length - 1) + optional;
                    }
                }
            }
        }
    }

    function getParametersFromJsDoc(jsDocNode) {
        let params = {};
        if (jsDocNode.tags && jsDocNode.tags.length > 0) {
            for (var i = 0; i < jsDocNode.tags.length; i++) {
                if ((jsDocNode.tags[i].tagName.escapedText === 'param') || (jsDocNode.tags[i].tagName.escapedText
                    === 'return' || jsDocNode.tags[i].tagName.escapedText === 'returns')) {
                    if (jsDocNode.tags[i].typeExpression) {
                        let name = '';
                        if (jsDocNode.tags[i].name) {
                            name = jsDocNode.tags[i].name.escapedText;
                        }
                        else {
                            name = "return";
                        }
                        let optional = "";
                        if (jsDocNode.tags[i].isBracketed === true) {
                            optional = "?";
                        }
                        var paramType = jsDocNode.tags[i].typeExpression.getFullText();
                        params[name] = paramType.substring(1, paramType.length - 1) + optional;
                    }
                }
            }
        }
        return params;
    }

    function findName(node) {
        if (ts.isIdentifier(node)) {
            return node;
        }
        else {
            var result = ts.forEachChild(node, findName);
            if (result) return result;
        }

    }

    function findNames(node) {
        if (ts.isIdentifier(node)) {
            identifiers.push(node.escapedText);
        }
        else {
            ts.forEachChild(node, findNames);
        }
    }

}

generateAnnotations(process.argv.slice(2), {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    lib: [],
    types: []
});
