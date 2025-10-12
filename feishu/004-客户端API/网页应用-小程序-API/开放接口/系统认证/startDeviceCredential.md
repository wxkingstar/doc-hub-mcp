---
title: "startDeviceCredential"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/system-authentication/startdevicecredential
---
最后更新于 2025-02-19

# startDeviceCredential(Object object)

打开系统解锁界面

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.37.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fdevice-authentication%2Fdevice-authentication)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.37.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
authContent | string | 是 |  | 验证描述，即识别过程中显示在界面上的对话框提示内容  
**示例值**：解锁界面

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fdevice-authentication%2Fdevice-authentication)
          预览网页应用

</div> 

```js
tt.startDeviceCredential({
    authContent: "解锁界面",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`startDeviceCredential fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "startDeviceCredential:ok"
}
```

## 错误码
`fail`返回对象中会包含[errCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码，具体错误码列表参见：
错误码 | 错误信息
--|--|--|--|--
`40000` | 用户未设置锁屏密码
`40002` | 解锁失败
`40003` | authContent 字段不能为空
