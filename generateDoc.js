var acegitlink = require("./AceGitLinkPlugin").AceGitLinkPlugin;
var borrowsTag = require("./BorrowsTagPlugin").BorrowsTagPlugin;
var typedoc = require('typedoc');
const fs = require("fs");
var options = JSON.parse(fs.readFileSync("generator-options.json", "utf8").toString());

var settings = {
    "name": options["title"],
    "readme": options["readme"],
    "entryPoints": options["entryPoints"]
};

var app = new typedoc.Application();
app.bootstrap(settings);
app.options.setCompilerOptions(options["entryPoints"], {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": false,
    "ignoreCompilerErrors": true
})
app.options.addDeclaration({name: 'acegitlink'});
app.converter.addComponent('acegitlink', acegitlink);
app.renderer.addComponent('borrowstag', borrowsTag);
var gitLink = options["gitLink"];
if (gitLink.charAt(gitLink.length - 1) !== '/') gitLink += '/';
gitLink += process.env.ACE_VERSION + "/";

app.options.setValue("acegitlink", gitLink);
var projectReflection = app.convert();

app.generateDocs(projectReflection, process.argv[2]);