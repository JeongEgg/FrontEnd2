// https://v2.ko.vuejs.org/v2/guide/instance.html
<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    }
  },
  beforeCreate() { /* 컴포넌트의 생성전이기 때문에 사용되가 떨어점. */
    // 데이터가 생성되기 전에 실행됨
    console.log('Before Create!', this.count)
  },
  created() { 
    /* 컴포넌트를 초기화하는 과정에서, 
       컴포넌트가 생성된 직후에 해당 함수의 내용이 실행될 수 있도록 하는 훅. */
    console.log('Created!', this.count)
  },
  beforeMount() {
    console.log('Before Mount!')
    console.log(document.querySelector('h1'))
  },
  mounted() {
    /* 컴포넌트가 화면에 나타난 이후에 실행됨. */
    console.log('Mounted!')
    console.log(document.querySelector('h1'))
  }
}
</script>