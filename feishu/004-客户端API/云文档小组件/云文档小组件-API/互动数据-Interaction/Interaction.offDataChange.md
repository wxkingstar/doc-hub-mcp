---
title: "Interaction.offDataChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/interaction/Interaction.offDataChange
---
最后更新于 2025-07-31

# Interaction.offDataChange
取消云文档小组件的 Interaction 数据变化监听，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

Interaction 数据变化监听器
| **名称**  | **数据类型**                 | **是否必填** | **描述**              |
| ------- | ------------------------ | -------- | ------------------- |
| handler | InteractionChangeHandler | 是        | Interaction 数据变化监听器 |

### InteractionChangeHandler

```js
type InteractionChangeHandler = (interactionData: InteractionData) => void;
```
| **名称**          | **数据类型**        | **是否必填** | **描述**            |
| --------------- | --------------- | -------- | ----------------- |
| interactionData | InteractionData | 是        | 变更的Interaction 数据 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();

const interactionDataChangehandler = (interactionData: any) => {
        //对data做处理
   };
useEffect(() => {
    DocMiniApp.Interaction.onDataChange(interactionDataChangehandler);
    return () => {
        DocMiniApp.Interaction.offDataChange(interactionDataChangehandler);    
    };
});
```
