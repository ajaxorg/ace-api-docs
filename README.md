# Ace documentation generator

requires node >= 8

```
node generateAnnotations.js AceDirName/lib/ace/src
```

Creates `classes.json` file in directory `generated`.
There will be warnings in `generated\annotations.log` for duplicated classes\methods implementations from different files.  

Apply `classes.json` file to declaration with command

```
node generateNewDts.js ace.d.ts
```

There will be some information in `generated\declarations.log` that you could use for improving declaration file. (Missing events, methods, constructors)

The final step will generate output documentation with TypeDoc.
You will need to change `generateDoc.js` with your settings. Main parameters described in `https://typedoc.org/api/`

Important! Change `acegitlink` parameter with used Ace release link - for example: `https://github.com/ajaxorg/ace/tree/v1.4.2/`  

```
node generateDoc.js doc
```

First parameter - output directory for documentation

Also log file will be created in `generated` dir with name `documentation.log`



```
node generateAnnotations.js ace/lib/ace
node generateNewDts.js ace.d.ts
node generateDoc.js doc
```