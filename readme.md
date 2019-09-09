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