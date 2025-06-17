const {ReferenceType} = require("typedoc");

function fixAceInternalReferences(projectReflection) {
    const ace = Object.values(projectReflection.reflections).find((el) => {
        return el.name === "ace";
    });

    if (!ace) {
        console.log("Could not find ace reflection");
        return;
    }

    const aceInternalReferences = findAceInternalReferences(projectReflection);

    const symbolMapping = createReferencedSymbolMapping(aceInternalReferences, ace);

    replaceReferences(aceInternalReferences, symbolMapping, projectReflection);

}

function findAceInternalReferences(projectReflection) {
    const references = [];

    Object.values(projectReflection.reflections).forEach(reflection => {
        if (reflection.type) {
            findAndCollectReferences(reflection.type, references);
        }
    });

    return references;
}

function isAceInternalReference(type) {
    return type.type === 'reference' && type._target && type._target.packagePath === 'ace-internal.d.ts';
}

function createReferencedSymbolMapping(references, ace) {
    const mapping = new Map();

    const aceSymbols = new Map();

    function collectAceSymbols(reflection) {
        if (reflection.children) {
            reflection.children.forEach(child => {
                aceSymbols.set(child.name, child);
                collectAceSymbols(child);
            });
        }
    }

    collectAceSymbols(ace);

    references.forEach(ref => {
        const symbolName = ref.name;
        const aceSymbol = aceSymbols.get(symbolName);

        if (aceSymbol) {
            mapping.set(ref._target, aceSymbol);
        }
    });

    return mapping;
}

function findAndCollectReferences(type, references) {
    if (!type) return;

    if (isAceInternalReference(type)) {
        references.push(type);
    }

    if (type.type === 'union' && type.types) {
        type.types.forEach(unionType => {
            findAndCollectReferences(unionType, references);
        });
    }
    else if (type.type === 'intersection' && type.types) {
        type.types.forEach(intersectionType => {
            findAndCollectReferences(intersectionType, references);
        });
    }
    else if (type.type === 'array' && type.elementType) {
        findAndCollectReferences(type.elementType, references);
    }
    else if (type.type === 'tuple' && type.elements) {
        type.elements.forEach(element => {
            findAndCollectReferences(element, references);
        });
    }
    else if (type.type === 'reference' && type.typeArguments) {
        type.typeArguments.forEach(typeArg => {
            findAndCollectReferences(typeArg, references);
        });
    }
    else if (type.type === 'conditional') {
        if (type.checkType) findAndCollectReferences(type.checkType, references);
        if (type.extendsType) findAndCollectReferences(type.extendsType, references);
        if (type.trueType) findAndCollectReferences(type.trueType, references);
        if (type.falseType) findAndCollectReferences(type.falseType, references);
    }
    else if (type.type === 'indexedAccess') {
        if (type.objectType) findAndCollectReferences(type.objectType, references);
        if (type.indexType) findAndCollectReferences(type.indexType, references);
    }
}

function replaceReferences(references, symbolMapping, projectReflection) {
    Object.values(projectReflection.reflections).forEach(reflection => {
        if (reflection.type) {
            reflection.type = replaceReferencesInType(reflection.type, symbolMapping, projectReflection);
        }
    });
}

function replaceReferencesInType(type, symbolMapping, projectReflection) {
    if (!type) return type;

    if (isAceInternalReference(type)) {
        const aceSymbol = symbolMapping.get(type._target);
        if (aceSymbol) {
            return ReferenceType.createResolvedReference(type.name, aceSymbol, projectReflection);
        }
    }

    if (type.type === 'union' && type.types) {
        type.types = type.types.map(unionType => replaceReferencesInType(unionType, symbolMapping, projectReflection));
    }
    else if (type.type === 'intersection' && type.types) {
        type.types = type.types.map(
            intersectionType => replaceReferencesInType(intersectionType, symbolMapping, projectReflection));
    }
    else if (type.type === 'array' && type.elementType) {
        type.elementType = replaceReferencesInType(type.elementType, symbolMapping, projectReflection);
    }
    else if (type.type === 'tuple' && type.elements) {
        type.elements = type.elements.map(
            element => replaceReferencesInType(element, symbolMapping, projectReflection));
    }
    else if (type.type === 'reference' && type.typeArguments) {
        type.typeArguments = type.typeArguments.map(
            typeArg => replaceReferencesInType(typeArg, symbolMapping, projectReflection));
    }
    else if (type.type === 'conditional') {
        if (type.checkType) type.checkType = replaceReferencesInType(type.checkType, symbolMapping, projectReflection);
        if (type.extendsType) type.extendsType = replaceReferencesInType(
            type.extendsType, symbolMapping, projectReflection);
        if (type.trueType) type.trueType = replaceReferencesInType(type.trueType, symbolMapping, projectReflection);
        if (type.falseType) type.falseType = replaceReferencesInType(type.falseType, symbolMapping, projectReflection);
    }
    else if (type.type === 'indexedAccess') {
        if (type.objectType) type.objectType = replaceReferencesInType(
            type.objectType, symbolMapping, projectReflection);
        if (type.indexType) type.indexType = replaceReferencesInType(type.indexType, symbolMapping, projectReflection);
    }

    return type;
}

exports.fixAceInternalReferences = fixAceInternalReferences;