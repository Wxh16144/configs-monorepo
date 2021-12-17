# @wuxh/stylelint-config-basic

> 个性化 stylelint-config

## usage

```bash
npm i stylelint @wuxh/stylelint-config-basic -D
```

### `.stylelintrc`

```json
{
  "extends": "@wuxh/stylelint-config-basic"
}
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "stylelint \"**/*.css\""
  }
}
```

### Add VSCode setting

> [VSCode Extensions stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": ["css"]
}
```

### lint Less

```bash
npm i postcss-less -D
```

package.json

```diff
{
  "scripts": {
-    "lint": "stylelint \"**/*.css\""
+    "lint": "stylelint \"**/*.{css,less}\""
  }
}
```

.vscode/setting.json

```diff
{
- "stylelint.validate": ["css"]
+ "stylelint.validate": ["css", "less"]
}
```

### lint Scss

```bash
npm i postcss-scss -D
```

package.json

```diff
{
  "scripts": {
-    "lint": "stylelint \"**/*.css\""
+    "lint": "stylelint \"**/*.{css,scss}\""
  }
}
```

.vscode/setting.json

```diff
{
- "stylelint.validate": ["css"]
+ "stylelint.validate": ["css", "scss"]
}
```

### lint Stylus

```bash
npm i postcss-styl stylelint-plugin-stylus -D
```

package.json

```diff
{
  "scripts": {
-    "lint": "stylelint \"**/*.css\""
+    "lint": "stylelint \"**/*.{css,styl,stylus}\""
  }
}
```

.vscode/setting.json

```diff
{
- "stylelint.validate": ["stylus"]
+ "stylelint.customSyntax": "stylelint-plugin-stylus/custom-syntax",
+ "stylelint.validate": ["css", "stylus"]
}
```
