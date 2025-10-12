---
title: "onLocationChangeError"
source_url: https://open.feishu.cn/document/web-app/gadget-api/location/onlocationchangeerror
---
最后更新于 2025-09-02

# onLocationChangeError

监听持续定位接口返回失败时触发。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | V7.35.0+ | 预览
网页应用 | V5.21.0+ | V5.21.0+ | **X** | V7.35.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
errno | number | 返回错误类型  
**可选值** :   
- `1700002` : 网络异常  
- `1700004` : 定位失败  
- `1700006` : 请检查定位服务和定位权限状态
errString | string | 返回错误信息  
**可选值** :   
- `Network error` : 网络异常  
- `Unable to access location` : 定位失败  
- `Please check the status of location services and access to location` : 请检查定位服务和定位权限状态

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
    预览小程序
    预览网页应用

</div> 

```js
const callback = (res) => {
        console.log(res);
};
tt.onLocationChangeError(callback);
```
