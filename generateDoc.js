import * as typedoc from "typedoc";

const sourceLinkTemplate = "https://github.com/ajaxorg/ace/blob/master/{path}#L{line}";

async function main() {
    const appJs = await typedoc.Application.bootstrapWithPlugins({
        sourceLinkExternal: false,
        sourceLinkTemplate: sourceLinkTemplate,
        tsconfig: "tsconfig-js.json",
    });

    const jsProjectReflection = await appJs.convert();

    const app = await typedoc.Application.bootstrapWithPlugins({
        sourceLinkExternal: false,
        sourceLinkTemplate: sourceLinkTemplate,
    });

    const projectReflection = await app.convert();

    if (projectReflection) {
        mergeReflectionSources(jsProjectReflection, projectReflection);
        await app.generateDocs(projectReflection, process.argv[2] || "doc");
    }
}


function mergeReflectionSources(jsProjectReflection, projectReflection) {
    if (!jsProjectReflection || !projectReflection) return;

    Object.values(projectReflection.reflections).forEach(reflection => {
        const jsReflection = Object.values(jsProjectReflection.reflections).find(jsRef =>
            jsRef.kind === reflection.kind && jsRef.name === reflection.name
        );

        if (jsReflection && jsReflection.sources) {
            reflection.sources = jsReflection.sources;
        }
    });
}


main();
