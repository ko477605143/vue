<template>
  <div>
    <h1>params参数 {{$route.params.keyword }}</h1>
    <h1>query参数 {{$route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: 'search',
  // 路由组件可以传递props参数  需要再router中 加入 props： true 属性
  props: ['keyword'],
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
</style>