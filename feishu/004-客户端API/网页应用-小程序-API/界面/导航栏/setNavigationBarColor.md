---
title: "setNavigationBarColor"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/navigation/setnavigationbarcolor
---
最后更新于 2025-04-24

# setNavigationBarColor(Object object)

设置导航栏颜色。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.7.0+ | V3.7.0+ | V3.7.0+ | V7.35.0+ | 预览
网页应用 | V6.3.0+ | V6.3.0+ | **X** | V7.41.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
backgroundColor | string | 是 |  | 背景颜色值，有效值为十六进制颜色  
**示例值**：`#ffffff`
frontColor | string | 是 |  | 前景颜色值，包括按钮、标题的颜色  
**示例值**：`#000000`  
**可选值**：  
- `#ffffff`：白色  
- `#000000`：黑色

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.setNavigationBarColor({
    "frontColor": "#ffffff",
    "backgroundColor": "#ff0000",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`setNavigationBarColor fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "setNavigationBarColor:ok"
}
```
