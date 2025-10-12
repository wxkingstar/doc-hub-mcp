---
title: "setNavigationBarTitle"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/navigation/setnavigationbartitle
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431183000
---
最后更新于 2025-01-21

# setNavigationBarTitle(Object object)
设置导航栏标题。 
**Notice**：如果当前页面不存在导航栏，不会返回`fail`

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fset-navigation-bar-title%2Fset-navigation-bar-title)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 是 |  | 导航栏标题

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fset-navigation-bar-title%2Fset-navigation-bar-title)

</div> 

```js
tt.setNavigationBarTitle({
    "title": "newTitle",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`setNavigationBarTitle fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "setNavigationBarTitle:ok"
}
```
