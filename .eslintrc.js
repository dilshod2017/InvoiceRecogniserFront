module.exports = {
    root:true,
    parser:'@typescript-eslint/parser',
    parserOptions : {
        project:'./tsconfig/eslint.json'
    },
    plugins:[
        '@typescript-eslint'
    ],
    extends:[
        "eslint:recomended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules:{
        "@typescript-eslint/camelcase":['on'],
        'quotes':['error','double'],
        '@typescript-eslint/no-unused-vars':['warm', {'args':'none'}]
    }
}
