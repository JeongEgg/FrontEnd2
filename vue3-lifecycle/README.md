## Vue3 Webpack Template

- src 및 vue, js 파일 생성
- 프로젝트에 vue 설치

```terminal
npm i vue@3
```

- vue에 대한 패키지 설치
```terminal
npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
```

- webpack.config.js에서 resolve, vue-loader에 대한 rules, vue-style-loader, 플러그인 설정 추가하기.
- assets 경로에서 이미지에 대한 파일들 관리.
- components 경로에서는 vue 파일들을 관리.
- 이미지를 vue 파일에 연결하여 가져와서 사용하기 위한 패키지 설치.
```terminal
npm i -D file-loader
```
- webpack.config.js 파일에 vue에서 이미지 파일을 읽기 위한 설정 추가

## Vue3 Webpack Template - ESLint 구성

### vue 프로젝트에 ESLint 설치
[https://eslint.vuejs.org/user-guide/](https://eslint.vuejs.org/user-guide/)

### ESLint 검사 규칙에 대한 문서
[https://eslint.vuejs.org/rules/html-closing-bracket-newline.html](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)

### ESLint Rule에 대한 문서
[https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/)
```terminal
npm i -D eslint eslint-plugin-vue babel-eslint
```