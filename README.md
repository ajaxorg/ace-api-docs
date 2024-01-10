# Ace documentation generator

requires node >= 16

Important! Set `ACE_VERSION` variable which is used with `gitLink` parameter to constuct Ace release link - for example: `https://github.com/ajaxorg/ace/tree/v1.4.2/`  

```bash
export ACE_VERSION="v$(node -p 'require("../package.json").version')"
node generateDoc.js doc
```

First parameter - output directory for documentation
