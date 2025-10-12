---
title: "View.Action.showChooseContact"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.showChooseContact
---
最后更新于 2025-07-31

# View.Action.showChooseContact
展示联系人选择器，用户选择之后将结果返回，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

联系人选择器的配置选项
| **名称**         | **数据类型** | **是否必填** | **描述**       |
| -------------- | -------- | -------- | ------------ |
| title          | string   | 否        | 联系人选择器的标题    |
| description    | string   | 否        | 联系人选择器的描述    |
| multiSelect    | boolean  | 否        | 是否支持选择多个联系人  |
| maxSelectedNum | number   | 否        | 支持最多选择多少个联系人 |

## 输出

联系人选择器的返回结果

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
type | string | 是 | 联系人选择器结果类型，可选值：  
  - confirm：确认  
  - cancel：取消
chats | object[] | 是 | 已选择的联系人
∟id | string | 是 | 联系人的 id
∟name | string | 是 | 联系人的名称
∟avatar | string | 是 | 联系人的头像

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const res = await DocMiniApp.View.Action.showChooseContact({
    title: '选择联系人',
    multiSelect: true,
    maxSelectedNum: 10,
});
console.log('debug', res);
```

### 返回示例

```json
{
    "type": "confirm",
    "contacts": [
        {
            "id": "联系人的 id",
            "name": "联系人的名称"
        }
    ]
}
```
