module.exports = {
  env: {
    browser: true, 
    node: true
    // js가 브라우저, node.js 환경에서 정상적으로 동작하는지를 확인하도록 하는 설정.
  },
  extends: [
    // vue의 코드 검사 규칙(3가지가 있음)
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3

    // js의 코드 검사 규칙
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
    /** babel : ES6 이상의 문법을 구버전에서도 동작할 수 있도록 변경해주는 역할. */
  },
  rules: {
    // 특정 규칙을 변경하는 경우에 사용.
    "vue/html-closing-bracket-newline": ["error",{
        "singleline": "never",
        "multiline": "never",
      }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}