---
title: "showMoreItemPanel"
source_url: https://open.feishu.cn/document/web-app/gadget-api/interface/navigation/showmoreitempanel
---
最后更新于 2025-01-21

# showMoreItemPanel

唤起原生“更多”菜单面板，并按需隐藏部分菜单项。

![IMG_0537.PNG](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8e9118e29ff8ccebed4b6ffbaec198f7_SV3VMk4mRK.PNG?height=2532&lazyload=true&maxWidth=400&width=1170)

![iPad](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/941a03e0e7f5a026954249a920cf907c_KGaf5LG0Pb.png?height=708&lazyload=true&maxWidth=400&width=1138)
**Notice**：注意事项：
1. 普通网页和网页应用的原生“更多”菜单面板内的项目数量和内容并不相同。
1. 移动端和 iPad 的原生“更多”菜单面板内的项目数量和内容也不相同。
1. 移动端主导航上的网页不支持调用。
1. 需要保证 jssdk 版本满足 V1.5.29+。
1. trailing , top 有一个不填，都会默认从右上角按钮弹出（右上角没有按钮则紧贴状态栏底部弹出）。
1. 弹窗箭头方向：iPad 上传入 trailing, top 参数时，会自动选择最能完整展示菜单的方向。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **X** | **X** | **X** | /
网页应用 | V7.20.0+ | V7.20.0+ | **X** | 预览

## 输入

继承[标准对象输入](https://open.larkoffice.com/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 描述
--- | --- | --- | ---
hideMenuItems | Array\<String\> | 否 | 需要隐藏的菜单项 id 列表，不填此参数或数组长度为0：显示所有默认可见的菜单项
trailing | number | 否 | 更多菜单弹出时，箭头起点位置相对于窗口右边缘的距离。  
* 仅 V7.32 起，在 iPad 有效。  
* 有效取值范围 [0, windowWidth]，超出最大（小）值时自动纠正到最大（小）值。  
> windowWidth 指当前应用窗口宽度。
top | number | 否 | 更多菜单弹出时，箭头起点位置相对于窗口上边缘的距离。  
* 仅 V7.32 起，在 iPad 有效。  
* 有效取值范围 [safeAreaInset, windowHeight]，超出最大（小）值时自动纠正到最大（小）值。  
> safeAreaInset 指当前应用窗口内的顶部安全距离，windowWidth 指当前应用窗口高度。

支持隐藏的菜单项及对应ID：
按钮名称              | 预定义ID            | 备注               |
| ----------------- | ---------------- | ---------------- |
| 发送至会话             | sendToChat       |  -                |
| 在主窗口打开            | openInMainScene  | 仅 iPad 分屏模式下可见     |
| 智能伙伴（飞飞）          | chatAI           | 仅开通智能伙伴功能灰度的用户可见 |
| 分享至微信             | shareViaOtherApp | iPad 不可见          |
| 添加到导航栏            | addNavigator     | -                 |
| 浮窗                | floating         | iPad 不可见          |
| 添加到工作台常用 / 从工作台常用移除 | commonApp        | 仅网页应用可见          |
| 添加到桌面             | shortcut         |  -                |
| 机器人 / 查看消息        | bot              | 仅开启了机器人能力的网页应用可见 |
| 复制链接              | copyLink         |  -                |
| 刷新                | refresh          |  -                |
| 浏览器打开             | openInBrowser    |  -                |
| 查找页面内容            | search           | 仅 iOS 可见           |
| 关于                | about            | 仅网页应用可见          |
| 反馈                | feedback         | 仅网页应用可见          |
| 翻译                | translate        |  -                |
| 剪存为云文档            | clippingDoc      |  -                |
| 调整文字大小            | textSize         | iPad 不可见       |

## 输出

继承[标准对象输出](https://open.larkoffice.com/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.showMoreItemPanel({
    // 隐藏“浏览器打开”菜单项
    hideMenuItems:["openInBrowser"],
    trailing: 48,
    top: 10,
    success(res) {
        console.log("success");
    },
    fail(err) {
        console.log(`${JSON.stringify(err)}`);
    }                    
});
```
`success`返回对象示例：
```js
{
    "errMsg": "showMoreItemPanel:ok"
}
```
