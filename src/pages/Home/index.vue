<template>
  <div>
    <!-- 三级联动的全局组件 因为在main.js中
    注册为全局组件了，因此不需要在引入了可以直接使用 -->
    <TypeNav/>
    <List/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="f in floorList" :key="f.id" :floor="f"/>
    <Brand/>
    <!-- <button @click="add">点击我加1</button>
    <button>仓库的数据 {{count }}</button>
    <button @click="jian">点击我减1</button> -->
  </div>
</template>

<script>
import List from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import { mapState } from 'vuex'

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
    // 派发action
    this.$store.dispatch('home/getFloorList')
  },
  methods: {
   
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}

</script>
<style scoped lang='less'>
</style>