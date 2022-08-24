# Ace documentation generator

requires node >= 8

```bash
node generateAnnotations.js AceDirName/ace/src
```

Creates `classes.json` file in directory `generated`.
There will be warnings in `generated\annotations.log` for duplicated classes\methods implementations from different files.  

Apply `classes.json` file to declaration with command

```bash
node generateNewDts.js ace.d.ts
```

There will be some information in `generated\declarations.log` that you could use for improving declaration file. (Missing events, methods, constructors)

The final step will generate output documentation with TypeDoc.
You will need to change `generator-options.json` with your settings. 

Important! Set `ACE_VERSION` variable which is used with `gitLink` parameter to constuct Ace release link - for example: `https://github.com/ajaxorg/ace/tree/v1.4.2/`  

```bash
export ACE_VERSION="v$(node -p 'require("../package.json").version')"
node generateDoc.js doc
```

First parameter - output directory for documentation

Also log file will be created in `generated` dir with name `documentation.log`



```bash
export ACE_VERSION="v$(node -p 'require("ace/package.json").version')"
node generateAnnotations.js ace/src
node generateNewDts.js ace.d.ts
node generateDoc.js doc
```