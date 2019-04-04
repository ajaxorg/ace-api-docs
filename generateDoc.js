var acegitlink = require("./AceGitLinkPlugin").AceGitLinkPlugin;
var typedoc = require('typedoc');

var settings = {
    "name": "Ace Documentation",
    "readme": "ace/Readme.md",
    "includeDeclarations": true,
    "excludeExternals": true,
    "mode": "file"
};

var app = new typedoc.Application(settings);
app.options.addDeclaration({name: 'acegitlink'});
app.converter.addComponent('acegitlink', acegitlink);
app.options.setValue("acegitlink", "https://github.com/ajaxorg/ace/tree/v1.4.2/");
app.generateDocs(["generated/ace.d.ts"], process.argv[2]);