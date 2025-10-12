---
title: "showActionSheet"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showactionsheet
---
最后更新于 2025-01-21

# showActionSheet(Object object)

showActionSheet(Object object) 用于显示操作菜单。
- 在 iOS 内实现该接口功能时，会自动加入 **取消** 选项。
- 在 Android 3.37 及之后的版本内实现该接口功能时，会自动加入 **取消** 选项。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Faction-sheet%2Faction-sheet)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
itemList | string[] | 是 | \- | 菜单的选项，最多支持 6 个选项。格式为 `["xxx", "yyy"]`，其中 `xxx`、`yyy` 是选项的文案内容。每个选项的文案长度限制说明如下：  
- Android 没有限制，超过长度的文案会显示为`...`。  
- iOS 每个选项最多 1 行，每行约 18 个汉字。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
tapIndex | number | 用户点击次序，从`0`开始计数。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Faction-sheet%2Faction-sheet)
          预览网页应用

</div> 

```js
tt.showActionSheet({
    "itemList": [
        "item1",
        "item2",
        "item3",
        "item4"
    ],
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`showActionSheet fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "showActionSheet:ok",
    "tapIndex": 1
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
