---
title: "View.Action.showPopup"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.showPopup
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960400000
---
最后更新于 2025-07-31

# View.Action.showPopup
展示自定义的 Popup 窗口，窗口内容通过 app.json 的 contributes.popup[key] 指定的页面来渲染，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 正文小组件 | PC | 演示模式

## 输入

| **名称** | **数据类型**      | **是否必填** | **描述**                                                      |
| ------ | ------------- | -------- | ----------------------------------------------------------- |
| key    | string        | 否        | 指定要渲染的 popup 页面，这个 key 需要在 app.json 的 contributes.popup 中声明 |
| style  | CSSProperties | 否        | popup 容器样式                                                  |
| data   | any           | 否        | 传递数据，Popup 页面可以通过 DocMiniApp.Bridge.getInitData 获取          |

## 输出

| **名称** | **数据类型**                      | **是否必填** | **描述**                                                                                                                               |
| ------ | ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| source | 'user-action' \| 'api-invoke' | 否        | popup 关闭的来源，是由 用户关闭 还是 开发者调用接口关闭<br>【用户关闭】指的是用户点击空白处自动关闭 Popup<br>【开发者调用接口关闭】指的是开发者在 popup 中调用 DocMiniApp.View.Action.hidePopup 接口 |
| data   | any                           | 是        | popup 关闭后回调的数据，指向开发者调用 hidePopup 传入的参数。如果 source 是 user-action，那么 data 会是 null。                                                      |

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const result = await DocMiniApp.View.Action.showPopup({
  style: {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.55)',
  }
});
```

### 返回示例

```json
{
    "source": "user-action",
    "data": null
}
```
