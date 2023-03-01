// 先引入mock
import Mock from 'mockjs';
// 把json数据格式引入进来 JSON 数据格式默认对外暴露
// webpack 默认对外暴露的资源 图片、json数据
import banner from './banner.json';
import floor from './floor.json';

// mock数据 : 
/**
 * 第一个参数 请求地址
 * 第二个参数： 请求数据
 */
Mock.mock(
    '/mock/banner',
    {code:200 ,data:banner} // 模拟首页的轮播图数据
)

Mock.mock(
    '/mock/floor',
    {code:200 ,data:floor} // 模拟楼层的轮播图数据
)

