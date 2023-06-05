/* eslint-env node */
module.exports = {
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    extends: ['webpractik', 'next', 'next/core-web-vitals'],
    rules: {
        'max-len': 'off',
        'lodash/import-scope': 'off',
    },
};
