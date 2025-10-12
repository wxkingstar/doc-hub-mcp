---
title: "setTabBarItem"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/tab-bar/settabbaritem
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430987000
---
最后更新于 2025-01-21

# 	setTabBarItem(Object object)

动态设置 tabBar（小程序底部tab栏） 某一项的内容

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Findex%3FshowTabBarPage%3Dtrue)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
index | number | 是 |  | tabBar 的哪一项，从左边算起  
**最小值**：`0`
text | string | 否 |  | tab 上的按钮文字  
**示例值**：'text'
iconPath | string | 否 |  | 图片路径，icon 大小限制为 40kb，建议尺寸为 96px * 96px，当 postion 为 top 时，此参数无效，不支持网络图片  
**示例值**：'/path/to/iconPath'
selectedIconPath | string | 否 |  | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 96px * 96px ，当 postion 为 top 时，此参数无效  
**示例值**：'/path/to/selectedIconPath'

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Findex%3FshowTabBarPage%3Dtrue)

</div> 

```js
tt.setTabBarItem({
    index: 0,
    text: "text",
    iconPath: "./image/icon_API.png",
    selectedIconPath: "./image/icon_API.png",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`setTabBarItem fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "setTabBarItem:ok"
}
```
