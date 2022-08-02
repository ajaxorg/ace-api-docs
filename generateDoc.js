var acegitlink = require("./AceGitLinkPlugin").AceGitLinkPlugin;
var borrowsTag = require("./BorrowsTagPlugin").BorrowsTagPlugin;
var typedoc = require('typedoc');
var entryPoints = ["generated/ace.d.ts"];

var settings = {
    "name": "Ace Documentation",
    "readme": "ace/Readme.md",
    "tsconfig": "tsconfig.json",
    "entryPoints": entryPoints
};

var app = new typedoc.Application();
app.bootstrap(settings);
app.options.setCompilerOptions(entryPoints, {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": false,
    "ignoreCompilerErrors": true,
})
app.options.addDeclaration({name: 'acegitlink'});
app.converter.addComponent('acegitlink', acegitlink);
app.renderer.addComponent('borrowstag', borrowsTag);
app.options.setValue("acegitlink", "https://github.com/ajaxorg/ace/tree/v1.4.2/");
var projectReflection = app.convert();

app.generateDocs(projectReflection, process.argv[2]);