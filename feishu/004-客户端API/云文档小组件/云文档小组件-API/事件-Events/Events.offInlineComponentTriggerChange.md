---
title: "Events.offInlineComponentTriggerChange"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/事件-Events/Events_offinlineComponentTriggerChange
last_remote_update: 2025-12-04
last_remote_update_timestamp: 1764855801000
---
最后更新于 2025-12-04

# Events.offInlineComponentTriggerChange
> 使用场景为[云文档 Button 实现数据绑定方案](https://open.larkoffice.com/document/uAjLw4CM/uYjL24iN/docs-add-on/featured-case-studies/cloud-document-button-implements-data-binding-solution?lang=zh-CN)
> 
取消监听文档中Action为 OpenDocVerse 的 Button 交互的变化，该方法为异步调用

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**                                                               | **是否必填** | **描述**  |
| ------- | ---------------------------------------------------------------------- | -------- | ------- |
| handler | InlineComponentTriggerChangeHandler                                                  | 是        | Button 交互事件监听器 |

### InlineComponentTriggerChangeHandler

```js
type InlineComponentTriggerChangeHandler = (event: InlineComponentTriggerChange) => void;
```

### InlineComponentTriggerChange

| **名称**  | **数据类型**       | **是否必填** | **描述**  |
| ------- | -------------- | -------- | ------- |
| type | InlineComponentTriggerType | 是        | 事件触发的类型 |
| value | any | 是        | 业务自定义数据 |

### InlineComponentTriggerType

| **名称**  | **数据类型**       | **是否必填** | **描述**  |
| ------- | -------------- | -------- | ------- |
| Click | string | 否        | click |
| Enter | string | 否        | enter |
| Leave | string | 否        | leave |
| CardShow | string | 否        | cardShow |
| CardHide | string | 否        | cardHide |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();

const inlineComponentTriggerChangeHandle = (event: InlineComponentTriggerChange) => {
        console.log('debug', event);
    };
useEffect(() => {
    docMiniApp.Events.onInlineComponentTriggerChange(inlineComponentTriggerChangeHandle);
    return () => {
        docMiniApp.Events.offInlineComponentTriggerChange(inlineComponentTriggerChangeHandle);
    };
});
```

### 返回示例

无
