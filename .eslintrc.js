module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        'vue/setup-compiler-macros': true // vue3写法的校验，会导致一些vue一些预设的方法提示报错，不需要重新import, 例如'defineProps' is not defined
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "parser": "vue-eslint-parser",
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        // 关闭组件名校验
        'vue/multi-word-component-names': "off" ,
        // 关闭组件多个根节点校验
        "vue/no-multiple-template-root": "off",
    }
};
