# @agrc/eslint-config

AGRC's default [React-specific](https://reactjs.org) [ESLint](http://eslint.org/) configuration

## Usage

`npm install --save-dev @agrc/eslint-config`

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@agrc"
  }
}
```

## Development

1. From root of this project: `npm link`
1. From root of test project: `npm i --no-save eslint-plugin-react eslint-plugin-react-hooks` (This is due to a bug in eslint that prevent these deps from working in eslint via the symlink folder.)
1. From root of test project: `npm link @agrc/eslint-config`

Note: If you update any dependencies of this project, make sure to run `npm link` again so that it can install/update them in the symlink folder.

Be aware that anytime you run `npm install` in your test project the symlink created by `npm link @agrc/eslint-config` will be wiped out and you will have to rerun it. This is a [known bug in npm](https://github.com/npm/npm/issues/17287#issuecomment-400833982) and it appears that it is slated to be fixed in `npm@7`.
