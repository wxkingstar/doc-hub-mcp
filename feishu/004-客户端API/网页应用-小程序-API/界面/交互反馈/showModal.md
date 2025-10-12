---
title: "showModal"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showmodal
---
最后更新于 2025-01-21

# showModal(Object object)

showModal(Object object) 用于显示模态弹窗。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fmodal%2Fmodal)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 否 | \- | 弹窗的标题。最多可显示两行。  
**Notice**：**注意**：  
- `title`和`content`不可同时为空。  
- 显示效果在各端有差异，请你根据实际内容自行调试各端的显示效果。
content | string | 否 | \- | 弹窗的内容。  
**Notice**：**注意**：  
- `title`和`content`不可同时为空。  
- 显示效果在各端有差异，请你根据实际内容自行调试各端的显示效果。
confirmText | string | 否 | OK | **确定** 按钮的文案，中文按照 2 个字符计算。  
**Notice**：飞书 [V7.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)版本以前，最大长度为`8`个字符
cancelText | string | 否 | Cancel | **取消** 按钮的文案，中文按照 2 个字符计算。  
**Notice**：飞书 [V7.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)版本以前，最大长度为`8`个字符
showCancel | boolean | 否 | true | 是否显示 **取消** 按钮。取值：  
- true：显示  
- false：不显示

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
confirm | boolean | 是否点击了 **确定** 按钮。
cancel | boolean | 是否点击了 **取消** 按钮。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fmodal%2Fmodal)
          预览网页应用

</div> 

```js
tt.showModal({
    "title": "请求获得定位权限",
    "content": "获得你的地理位置能够更好的为你推荐本地信息",
    "confirmText": "授予权限",
    "cancelText": "取消",
    "showCancel": true,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`showModal fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "showModal:ok",
    "confirm": true,
    "cancel": false
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
