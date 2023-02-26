// search 模块的小仓库
// state: 仓库 存储数据的地方
const state = {
   b: 2
};
// mutations: 修改state的唯一手段
const mutations = {
   
};
// action: 处理action ，可以书写自己的业务逻辑，也可以处理异步。 
const actions = {
    // 这里可以书写业务逻辑 但是不能修改state
  
};
// 可以理解为计算属性，让组件获取仓库的数据更加方便
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}