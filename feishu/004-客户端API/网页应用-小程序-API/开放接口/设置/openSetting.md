---
title: "openSetting"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/setting/opensetting
---
最后更新于 2025-01-21

# openSetting(Object object)

打开设置页面，展示用户设置（包括授予和拒绝）过的[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)，并返回用户设置过的授权结果。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
authSetting | object | 展示用户设置（包括授予和拒绝）过的权限  
**Notice**：PC 端：暂不支持
&emsp;∟&nbsp;[scope.userInfo](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了获取用户信息权限
&emsp;∟&nbsp;[scope.userLocation](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了地理位置权限
&emsp;∟&nbsp;[scope.record](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了麦克风权限
&emsp;∟&nbsp;[scope.clipboard](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了剪贴板权限
&emsp;∟&nbsp;[scope.writePhotosAlbum](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了保存到相册权限
&emsp;∟&nbsp;[scope.bluetooth](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM) | boolean | 是否授予了蓝牙权限

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
         [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
          预览网页应用

</div> 

```js
tt.openSetting({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`openSetting fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "authSetting": {
        "scope.clipboard": true,
        "scope.userInfo": true
    },
    "errMsg": "openSetting:ok"
}
```
