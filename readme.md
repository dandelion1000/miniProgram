```
在需要引入组件的wxml，详情参考index.json和componet下的组件
Error: Component is not found in path "components/custom-component" (using by "pages/index/index")
该问题是由于路由配置不对的问题，有两种方式：
```json
{
  "usingComponents": {
    "my-component": "../component/custom-component"
  }
}
```

```
{
  "usingComponents": {
    "my-component": "/pages/component/custom-component" //全路径方式
  }
}
```
```
> 云函数部分

关于云函数，首先按官网文档进行配置

https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/getting-started.html

![图片](https://coding-net-production-pp-ci.codehub.cn/114afa8a-9259-4e73-9f48-a5f59fdce2f9.png)

注意一点：只要云函数被改动，一定得随时上传并部署。

