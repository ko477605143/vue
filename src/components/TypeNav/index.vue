<!-- 三级联动组件 -->
<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <!-- <h1>{{ categoryList }}</h1> -->
        <div class="container">
            <div @mouseleave="leave" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <!-- 三级联东 -->
                    <div class="sort" v-show="show">
                        <!-- 利用事件委派+编程式导航实现路由的跳转与传递参数 -->
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId"
                                :class="{cur: current === index}">
                                <h3 @mouseenter="change(index)">
                                    <a :data-categoryName="c1.categoryName"
                                        :data-cate1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                    <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                                </h3>
                                <!-- 通过JS实现动态行内样式，进行二级、三级分类的显示与隐藏(display:none|block切换的) -->
                                <div class="item-list clearfix"
                                    :style="{display: current  === index ? 'block': 'none'}">
                                    <!--二级分类-->
                                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dl>
                                            <dt>
                                                <a :data-categoryName="c2.categoryName"
                                                    :data-cate2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                                <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->

                                            </dt>
                                            <dd>
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryChild">
                                                    <a :data-categoryName="c3.categoryName"
                                                        :data-cate3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                    <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->

                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    // 这种引入方式，是把lodash全部功能引入
    // 最好的引入方式：按需引入
    // throttle回调函数最好别用箭头函数
    import _ from 'lodash/throttle';
    // console.log(_)
    import {
        mapState
    } from 'vuex';
    export default {
        name: 'TypeNav',
        data() {
            return {
                // 存储用户鼠标移上哪一个一级分类
                current: -1,
                show: true,
            }
        },
        // 组件挂载完毕，可以向服务器发请求
        mounted() {
            
            // 当组件挂载完毕
            // 如果是/search路由组件
            if (this.$route.path == '/search') {
                this.show = false;
            }
        },
        computed: {
            ...mapState({
                // 对象写法 右侧需要一个函数，当使用这个计算属性的时候
                // 右侧函数会立即执行一次，注入一个state 起始就是大仓库中的数据
                categoryList: state => state.home.categoryList
            })
        },
        methods: {
            // 鼠标进入 修改响应式current属性
            // change(index) {
            //     console.log(index)
            //     // 鼠标移上数据的索引
            //     // 正常请求 （用户缓慢操作） 鼠标进入每一个h3 都会触发鼠标进入事件
            //     // 非正常情况（用户操作过快） 本来都应该触发的鼠标事件只有部分触发了
            //     // 由于用户行为过快，导致浏览器反应不过来且当前回调函数有一些大量数据，就会出现浏览器卡顿事件
            //     this.current = index;
            // },
            // 节流
            change: _(function (index) {
                this.current = index;
            }, 50),
            leave() {
                this.current = -1;
                if (this.$route.path == '/search') {
                    this.show = false;
                }
            },
            // 进行路由跳转的方法（事件委派）
            goSearch(event) {
                // 获取触发当前事件的子节点
                let eve = event.target
                // 获取当前触发这个事件的节点 ，需要电邮data-categoryname这样的节点 一定是a标签
                // 节点有一个dataset属性，可以获取节点自定义属性和属性值
                // 
                // console.log(eve)
                // console.log(eve.dataset)
                let {
                    categoryname,
                    cate1id,
                    cate2id,
                    cate3id
                } = eve.dataset;
                // 如果标签身上有categoryname属性 那他一定是a标签
                if (categoryname) {
                    // 一级分类 、二级分类、三级分类的a标签
                    // 整理理由跳转的参数
                    let location = {
                        name: 'search',
                    }
                    let query = {
                        categoryName: categoryname
                    }
                    if (cate1id) {
                        query.categoryId = cate1id;
                    } else if (cate2id) {
                        query.categoryId = cate2id;
                    } else {
                        query.categoryId = cate3id;
                    }
         
                    if(this.$route.params) {
                        location.params = this.$route.params;
                    }
                    // 整理完参数
                    location.query = query;
                    // console.log(query)
                    // // 路由跳转
                    this.$router.push(location);
                    // 如果路由跳转的时候，带有param参数 
                    // 捎带给他传递过去
                }
                // this.$router.push('/search')
            },
            // 最好的方式是编程式导航 + 事件委派
            // 如果单纯利用事件委派 存在一些问题
            /**
             * 1: 点击的一定是a标签才跳转【如何确定点击的是a标签】
             * 2：要区分一级分类、二级分类、三级分类的a标签 
             * 【category1Id|category2Id|category2Id】
             * 解决：
             * 1、 把子节点中的a标签，加上自定义弧形data—categoryName ，其余子节点是没有的
             * 如何判断点击的是不是a标签呢 使用event事件对象
             */
            enterShow() {
                this.show = true;
            }
        }
    }
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }

                    .cur {
                        background: burlywood;
                    }

                }
            }
            // 过度动画的样式（进入|开始）
            .sort-enter{
                height: 0px;
                // transform: rotate(0deg);
            }
            // 过度动画的结束状态
            .sort-enter-to{
                height: 461px;
                // transform: rotate(180deg) // 旋转
            }
            // 定义动画时间 速率
            .sort-enter-active{
                transition: all .5s linear;
            }
            
        }
    }
</style>