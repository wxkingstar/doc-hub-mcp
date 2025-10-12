---
title: "getSetting"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/setting/getsetting
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430486000
---
最后更新于 2025-01-21

# getSetting(Object object)

getSetting(Object object) 用于获取用户已设置（包括授予和拒绝）的权限。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | HarmonyOS | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
authSetting | object | 展示用户已设置（包括授予和拒绝）的权限。关于 authSetting 数据结构说明，可参见 [AuthSetting](https://open.feishu.cn/document/uYjL24iN/uYzMx4iNzEjL2MTM)。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.userInfo | boolean | 是否授予了用户权限。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.userLocation | boolean | 是否授予了地理位置权限。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.record | boolean | 是否授予了麦克风权限。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.clipboard | boolean | 是否授予了剪贴板权限。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.writePhotosAlbum | boolean | 是否授予了保存到相册权限。
&emsp;  
                    ∟  
                &nbsp;  
                    scope.bluetooth | boolean | 是否授予了蓝牙权限。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
         [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
          预览网页应用

</div> 

```js
tt.getSetting({ 
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
    "errMsg": "getSetting:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
