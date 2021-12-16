# @wuxh/commitlint-config

## usage

### install

```bash
npm i husky commitlint @wuxh/commitlint-config -D
```

### Edit `.commitlintrc`

```json
{
  "extends": "@wuxh/commitlint-config"
}
```

#### test config

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose
```

### Add Hooks

> see more [husky documentation](https://typicode.github.io/husky/#/?id=automatic-recommended)

```bash
npx husky install && npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

#### test hook

```bash
git commit -m "chore: xxx"
```
