var typedoc = require('typedoc');

async function main() {
    const app = await typedoc.Application.bootstrapWithPlugins();
    var gitLink = "https://github.com/ajaxorg/ace/tree/" + process.env.ACE_VERSION + "/{path}#{line}";
    app.options.setValue("sourceLinkTemplate", gitLink);

    const projectReflection = await app.convert();

    if (projectReflection) {
        await app.generateDocs(projectReflection, process.argv[2] || "doc");
    }
}

main();
