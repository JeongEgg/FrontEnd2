<template>
  <li>{{ name }}?!</li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: red !important; 
    // App.vue의 태그를 다른 컴포넌트에서 제어하게 됨. 
    //-> scoped를 사용하여 스타일이 다른 컴포넌트에 영향을 미치지 않도록 함.
  }
</style>