---
title: "setTabBarStyle"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/tab-bar/settabbarstyle
---
最后更新于 2025-01-21

# setTabBarStyle(Object object)

动态设置 tabBar（小程序底部tab栏） 的整体样式

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Findex%3FshowTabBarPage%3Dtrue)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
color | string | 是 |  | tab 上的文字默认颜色，6 位 HexColor 例如"#ff3377"  
**示例值**：'#FF0000'
selectedColor | string | 是 |  | tab 上的文字选中时的颜色，6 位 HexColor 例如"#ff3377"  
**示例值**：'#00FF00'
backgroundColor | string | 是 |  | tab 的背景色，6 位 HexColor 例如"#ff3377"  
**示例值**：'#0000FF'
borderStyle | string | 是 | white | tabBar上边框的颜色， 仅支持 black/white  
**示例值**：'white'  
**可选值**：  
- `white`：白  
- `black`：黑
borderColor | string | 是 |  | tabBar上边框的颜色,优先级高于borderStyle。适用4.3及以后版本。  
**示例值**：'#00FF00'  
**Notice**：- 飞书[V4.3.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- PC 端：暂不支持  
- 开发者工具模拟器：暂不支持

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Findex%3FshowTabBarPage%3Dtrue)

</div> 

```js
tt.setTabBarStyle({
    color: "#FF0000",
    selectedColor: "#00FF00",
    backgroundColor: "#0000FF",
    borderStyle: "white",
    borderColor: "#00FF00",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`setTabBarStyle fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "setTabBarStyle:ok"
}
```
