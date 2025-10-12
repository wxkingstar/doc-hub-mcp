---
title: "getWifiStatus"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/wi-fi/getwifistatus
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737432828000
---
最后更新于 2025-01-21

# getWifiStatus(Object object)

调用 getWifiStatus(Object object) 可以请求获取 Wi-Fi 开关状态。
**Notice**：Wi-Fi 的打开状态并不代表一定连接了 Wi-Fi。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fwifilist%2Fwifilist)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
status | string | Wi-Fi 状态类型。可能值：  
- `on`：开  
- `off`：关

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fwifilist%2Fwifilist)
          预览网页应用

</div> 

```js
tt.getWifiStatus({
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getWifiStatus fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "getWifiStatus:ok",
    "status": "on"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
