# Vue.js 정리

[https://ko.vuejs.org/guide/introduction.html](https://ko.vuejs.org/guide/introduction.html)


## CDN, Codepen


## Vue CLI, Vetur

#### CLI
[https://cli.vuejs.org/guide/creating-a-project.html](https://cli.vuejs.org/guide/creating-a-project.html)

```terminal
npm i -g @vue/cli
```

#### vue 프로젝트 생성

```terminal
vue create vue3-test
```
1. [Vue 3] 선택
1. Use NPM

#### 프로젝트 실행
```terminal
npm run serve
```

- serve : npm에서의 dev와 동일함
- build : 제품화 과정에서 적용
- lint : vue.js 코드를 특정한 규칙에 맞게 작성되었는지 확인하기 위함.
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

#### Vetur : vue.js 파일을 읽을 때, 하이라이트 효과를 넣어주는 라이브러리


## Vue3 Webpack Template

이전에 다루었던 webpack의 프로젝트를 vue3 로컬 프로젝트에 클론하기
```terminal
npx degit JeongEgg/FrontEnd/webpack-template-basic vue3-webpack-template