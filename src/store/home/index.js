import {reqCategory,reqMockBannerList,reqFloorList} from '@/api'
// home 模块的小仓库
// state: 仓库 存储数据的地方

const state = {
    // state 中默认初始值别瞎写【根据接口返回值初始化】
    categoryList: [],
    bannerList: [],
    floorList: []
};
// mutations: 修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,value) {
        state.categoryList = value;
    },
    BANNERLIST(state,value) {
        state.bannerList = value;
    },
    FLOORLIST(state,value) {
        state.floorList = value
    }
};
// action: 处理action ，可以书写自己的业务逻辑，也可以处理异步。 
const actions = {
    // 这里可以书写业务逻辑 但是不能修改state
    // 通过api里面的接口函数向服务器发请求，获取服务器数据
    // async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
    async categoryList(context) {
        let result = await reqCategory();
        if(result.code === 200) {
            context.commit("CATEGORYLIST",result.data);
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}) {
        let result = await reqMockBannerList();
        if(result.code == 200) {
            commit('BANNERLIST',result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}) {
        let result = await reqFloorList();
        if(result.code === 200) {
            // 提交mutation
            commit('FLOORLIST',result.data)
        }
    },
};
// 可以理解为计算属性，让组件获取仓库的数据更加方便
const getters = {};

export default {
    namespaced:true,
    state,mutations,actions,getters
}