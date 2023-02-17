<template>
       <!-- 头部 -->
       <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                           <!-- 声明式导航必须有 to属性 -->
                           <router-link to="/login">登录</router-link>
                           <router-link class="register" to="/register">免费注册</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyWork"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="search">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
// import { routes } from '@/router/router.config'
export default {
  data () {
    return {
        keyWork: '',
    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    search() {
        // 编程式路由跳转 传递参数 需要再 router.config 中配置占位符  :xxx
        // 第一种： 路由传递参数
        // this.$router.push('/search/' + this.keyWork + '?k=' + this.keyWork.toUpperCase())
        // 第二种 模板字符串
        //this.$router.push(`/search/${this.keyWork}?k=${this.keyWork.toUpperCase()}`)
        // 第三种 对象写法 第三种写法 学要在router中 配置 name属性 例如 search
        this.$router.push({
            name: 'search',
            params: {
                keyword: this.keyWork || undefined
            },
            query: {
                k: this.keyWork.toUpperCase()
            }
        })
        // 注意 对象写法 path参数和 params 不能一起使用 只能是 name参数和 params一起使用
        // 如果不传params参数 必须在 ：router 后面加上问号 router?
        // 如果传参是空的字符串 需要用 undefined解决
        // 路由中 传递props数据
        // 可以 有三种写法

    }
  },
}

</script>
<style scoped lang='less'>

.header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }

</style>