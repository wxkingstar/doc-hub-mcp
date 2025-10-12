---
title: "addTabBarItem"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/tab-bar/addtabbaritem
---
最后更新于 2025-01-21

# 	addTabBarItem(Object object)

增加tab bar（小程序底部tab栏）的目标item

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.1.0+ | V5.1.0+ | V5.1.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
index | number | 是 |  | tab索引  
**示例值**：0，1，2
pagePath | string | 是 |  | tab路径  
**示例值**：'pages/index/index'
text | string | 是 |  | tab展示文案，可以为“”但是不能为`null`
light | object[] | 是 |  | 日间模式数据
&emsp;  
                    ∟  
                &nbsp;  
                    iconPath | string | 是 |  | 日间模式tab非选中图片，图片cdn地址以及本地打包图片资源
&emsp;  
                    ∟  
                &nbsp;  
                    selectedIconPath | string | 是 |  | 日间模式tab选中图片，图片cdn地址以及本地打包图片资源
dark | object[] | 是 |  | 夜间模式数据
&emsp;  
                    ∟  
                &nbsp;  
                    iconPath | string | 是 |  | 夜间模式tab非选中图片，图片cdn地址以及本地打包图片资源
&emsp;  
                    ∟  
                &nbsp;  
                    selectedIconPath | string | 是 |  | 夜间模式tab选中图片，图片cdn地址以及本地打包图片资源

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.addTabBarItem({
    index: 1, 
    pagePath:"pages/index/index", 
    text: "text", 
    light: {
      iconPath: "xx", 
      selectedIconPath: "xx" 
    },
    dark: {
      iconPath: "xx", 
      selectedIconPath: "xx" 
    },
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`addTabBarItem fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
	"errMsg":"addTabBarItem:ok"
}
```

## 错误码
`fail`返回对象中会包含[errCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码，具体错误码列表参见：

错误码 | 错误信息 |描述
--|--|--|--|--
|`-10001` | fatal error : no request  |api业务中的model为空|
| `-10002` | no page path |api业务中的添加tab的page path为空                |
| `-10003 `| no page text                                | api业务中的添加tab的page text为空                |
| `-10004 `| no page lightIcon                           |api业务中的添加tab的light icon model为空         |
| `-10005` | no page lightIcon iconPath                  |api业务中的添加tab的light icon path为空          |
| `-10006` | no page lightIcon selectedIconPath          |api业务中的添加tab的light icon selected path为空 |
| `-10007` | no page darkIcon                            |api业务中的添加tab的dark icon model为空          |
| `-10008` | no page darkIcon iconPath                   |api业务中的添加tab的dark icon path为空           |
| `-10009` | no page darkIcon selectedIconPath           |api业务中的添加tab的dark icon selected path为空  |
| `-10010` | at most 5 tabs should be remained           |已有最多5个tab，无法添加                          |
| `-10011` | index is invalid                            |添加index索引无效（为负数或者大于现有tab数量）             |
| `-10012` | this tab already exists                     |添加tab的pagePath已经存在                      |
| `-10013` | no tab                                      |本身无tab时，不能添加                            |
| `-20001` | no current tab controller                   |Tab fragment为空                          |
| `-20002` | no current app view proxy                   | Tab fragment的activity为空                 |
|` -20003` | only support in gadget                      |不是小程序形态 |
| `-20004` | no tab host                                 | Tab host初始化错误|                          
| `-20005` | add target tab fail, cannot find target tab| 添加tabwidget时发生错误|

## 已知问题

- iOS 侧在 [V5.15.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 之前的版本使用此 api 添加按钮后，标题的样式未与 app.json 中的 tabBar 配置同步，可在 success 回调中，使用 [setTabBarStyle](https://open.feishu.cn/document/uYjL24iN/uITN04iM1QjLyUDN) 重新设置标题样式。
