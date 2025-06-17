var typedoc = require('typedoc');
const {fixAceInternalReferences} = require("./filterModules");

async function main() {
    const app = await typedoc.Application.bootstrapWithPlugins({
        sourceLinkExternal: false,
        sourceLinkTemplate: "https://github.com/ajaxorg/ace/tree/" + process.env.ACE_VERSION + "/{path}#L{line}",
    });

    const projectReflection = await app.convert();

    fixAceInternalReferences(projectReflection);

    if (projectReflection) {
        await app.generateDocs(projectReflection, process.argv[2] || "doc");
    }
}

main();
