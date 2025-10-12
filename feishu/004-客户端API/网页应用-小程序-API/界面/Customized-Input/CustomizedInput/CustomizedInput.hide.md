---
title: "CustomizedInput.hide"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/customized-input/customizedinput/hide
---
最后更新于 2025-07-04

# CustomizedInput.hide()

隐藏输入框

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.47.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入
无

## 输出
无

## 示例代码
**Notice**：展示输入框的代码参考：[customizedInput.show](https://open.feishu.cn/document/uYjL24iN/uADN1EjLwQTNx4CM0UTM/customizedinput/show)

```js
//customizedInput通过tt.getCustomizedInput()方法获取，需要和show方法公用同一个实例
customizedInput.customizedInput.hide({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`customizedInput.hide fail: ${JSON.stringify(res)}`);
    }
});
```
