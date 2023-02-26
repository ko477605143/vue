// 对于axios 进行二次封装
// 引入axios
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// nprogress: start 进度条开始 done： 进度条结束

// 1、利用axios对象的方法 create，创建一个axios实例
// 2、 request 就是axios
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});
// 上次config参数没写 找了两天 头疼
// 请求拦截器：在发请求之前，请求拦截器可以检车到，可以在请求发出之前做一些事情
requests.interceptors.request.use(config => {
    // config: 配置对象 对象中有个属性很重要 headers请求头
    // 进度条开始动
    nprogress.start();
    return config;
});
//响应拦截器：请求数据返回会执行
requests.interceptors.response.use(res => {
    //res:实质就是项目中发请求、服务器返回的数据
    //进度条结束
    nprogress.done();
    return res.data;
}, (err) => {
    //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
    // alert(err.message);
    // //终止Promise链
    // return new Promise();
});


// 对外暴露
export default requests;
