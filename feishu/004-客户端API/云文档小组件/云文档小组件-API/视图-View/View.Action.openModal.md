---
title: "View.Action.openModal"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.openModal
---
最后更新于 2025-07-31

# View.Action.openModal
展示自定义的 modal 窗口，窗口内容通过 app.json 的 `contributes.modal[key]` 指定的页面来渲染，该方法为异步调用

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 正文小组件 | PC | \-

## 输入

| **名称** | **数据类型** | **是否必填** | **描述**                                                                 |
| ------ | -------- | -------- | ---------------------------------------------------------------------- |
| key    | string   | 否        | 指定要渲染的 modal 页面，这个 key 需要在 app.json 的 contributes.modal 中声明。默认为 'view' |
| title  | string   | 否        | 指定 modal 的标题，如果不指定则用小应用的名称                                             |
| width  | number   | 否        | 指定 modal 的宽度，如果不指定则会使用一个固定宽度                                           |
| data   | any      | 否        | 传递数据，Modal 页面可以通过 DocMiniApp.Bridge.getInitData 获取                     |

## 输出

| **名称** | **数据类型**                      | **是否必填** | **描述**                                                                                                                                  |
| ------ | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| source | 'user-action' \| 'api-invoke' | 否        | modal 关闭的来源，是由 用户关闭 还是 开发者调用接口关闭<br>【用户关闭】指的是用户点击 Modal 右上角的关闭按钮<br>【开发者调用接口关闭】指的是开发者在 modal 中调用 DocMiniApp.View.Action.closeModal 接口 |
| data   | any                           | 是        | modal 关闭后回调的数据，指向开发者调用 closeModal 传入的参数。如果 source 是 user-action，那么 data 会是 null。                                                        |

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const res = await DocMiniApp.View.Action.openModal({
    key: 'view',
    title: 'title', 
    width: 350,
    data: {},
});
console.log('debug', res);
```

### 返回示例

```json
{
    "source": "user-action",
    "data": null
}
```
