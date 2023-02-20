<template>
  <div>
    <!-- 三级联动的全局组件 因为在main.js中
    注册为全局组件了，因此不需要在引入了可以直接使用 -->
    <TypeNav/>
    <List/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import List from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
  data () {
    return {

    }
  },
  components: {
    List,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
</style>