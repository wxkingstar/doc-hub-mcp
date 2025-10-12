---
title: "showLoading"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showloading
---
最后更新于 2025-01-21

# showLoading(Object object)

showLoading(Object object) 用于显示灰色背景的 loading 提示框。

## 注意事项

- 该提示框不会主动隐藏。
- `loading` 的实现基于 `toast`，等同于 `icon` 为 `loading`，`duration` 为 `24` 小时的 `toast`。

多次弹出 `toast/loading` 时，后一个会立刻覆盖前一个。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ftoast%2Ftoast)
网页应用 | **✓** | **✓** | **✓** | V7.35.0+ | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 是 | \- | 消息内容。最多显示两行，示例值：加载中  
**Notice**：V7.11 版本以前且平台为移动端时，title 最多可显示 7 个中文字符。
mask | boolean | 否 | false | 是否显示透明蒙层，防止触摸穿透。取值：  
- true：显示  
- false：不显示  
**Notice**：**注意**：PC/Harmony 端暂不支持该字段的功能。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ftoast%2Ftoast)

</div> 

```js
tt.showLoading({
    "title": "加载中",
    "mask": false,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`showLoading fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "showLoading:ok"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
