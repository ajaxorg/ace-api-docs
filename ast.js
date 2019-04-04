"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
function generateDocumentation(fileNames, options) {
    var program = ts.createProgram(fileNames, options);
    // Get the checker, we will use it to find more about classes
    var checker = program.getTypeChecker();
    var indent = 0;
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        //if (!sourceFile.isDeclarationFile) {
        ts.forEachChild(sourceFile, print);
        //}
    }

    function print(node) {
        var symbol = checker.getSymbolAtLocation(node.name);
        if (symbol) {
            var type = ' - ' + checker.typeToString(checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration));
        }
        else {
            var type = '';
        }
            if (node.text)
                var token = ': ' + node.text;
            else
                var token = '';

            var jsDoc = '';
            let currentLine = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()).line + 1;
            console.log(new Array(indent + 1).join(' ') + ts.SyntaxKind[node.kind] + '(' + node.kind + ')' + token + type + ': ' + currentLine);
            indent++;
            ts.forEachChild(node, print);
            indent--;
        }
    }
generateDocumentation(process.argv.slice(2), {
    target: ts.ScriptTarget.ES5, module: ts.ModuleKind.CommonJS, allowJs: true, declaration: true, lib: [], types: []
});
