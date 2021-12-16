# @wuxh/commitzen-config

## usage

### install

```bash
npm i commitizen cz-customizable @wuxh/commitzen-config -D
```

### Edit `package.json`

```json
{
  "scripts": {
    "commit": "git-commit"
  },
  "config": {
    "cz-customizable": {
      "config": "node_modules/@wuxh/commitzen-config"
    }
  }
}
```
