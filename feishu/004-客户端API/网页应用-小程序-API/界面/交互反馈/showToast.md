---
title: "showToast"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showtoast
---
最后更新于 2025-01-21

# showToast(Object object)

showToast(Object object) 用于显示灰色背景（PC 端为彩色背景）的消息提示。

## 注意事项

多次弹出 `toast/loading` 时，后一个会立刻覆盖前一个。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Ftoast%2Ftoast)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 是 | \- | 消息内容。最多显示 2 行，示例值：添加购物车成功  
**Notice**：V7.11 版本以前且平台为移动端时  
- 当显示图标时，title 最多可显示 7 个中文字符。  
- 当不显示图标时，title 最多可显示 2 行。
duration | number | 否 | 1500 | 提示框停留的时间。单位：ms
icon | string | 否 | success | 图标的类型。可选值：  
- `success`：成功  
- `loading`：加载中  
- `none`：不显示图标（PC 端暂不支持）  
- `error`：错误（仅 PC 端有效）  
- `info`：提示（仅 PC 端有效）  
- `warning`：警告（仅 PC 端有效）
mask | boolean | 否 | false | 是否显示透明蒙层，防止触摸穿透。取值：  
- true：显示  
- false：不显示  
**Notice**：**注意**：  
- Android/iOS 端：飞书 [V2.5.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- PC/Harmony 端：暂不支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Ftoast%2Ftoast)
          预览网页应用

</div> 

```js
tt.showToast({
    "title": "添加购物车成功",
    "duration": 3000,
    "icon": "success",
    "mask": false,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`showToast fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
  errMsg: "showToast:ok"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
