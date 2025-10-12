---
title: "onWindowResize"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/window/onwindowresize
---
最后更新于 2025-01-21

# onWindowResize(function callback)

监听窗口尺寸变化事件
**Notice**：使用同一回调函数多次调用，会注册多次该事件，回调会被执行多次。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | V3.13.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
size | object | 窗口大小
&emsp;  
                    ∟  
                &nbsp;  
                    windowWidth | number | 变化后的窗口宽度，单位px
&emsp;  
                    ∟  
                &nbsp;  
                    windowHeight | number | 变化后的窗口高度，单位px

## 示例代码

```js
tt.onWindowResize(function(res) {
    console.log(JSON.stringify(res));
});
```

回调函数返回对象示例：
```json
{
    "size": {
        "windowHeight": 768,
        "windowWidth": 507
    }
}
```
