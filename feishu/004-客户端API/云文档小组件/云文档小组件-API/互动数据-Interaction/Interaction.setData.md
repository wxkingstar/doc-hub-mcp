---
title: "Interaction.setData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/interaction/Interaction.setData
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960342000
---
最后更新于 2025-07-31

# Interaction.setData
修改当前云文档小组件的 Interaction 数据，该方法为异步调用。
## 主要事项
建议使用applyTransaction

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**     | **数据类型**                                                                                                                                                | **是否必填** | **描述**             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| changesets | [InteractionChangeset](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/InteractionChangeset) | 是        | 要变更的Interaction 数据 |

## 输出

变更后的Interaction数据
| **名称**          | **数据类型**        | **是否必填** | **描述**        |
| --------------- | --------------- | -------- | ------------- |
| InteractionData | InteractionData | 是        | 变更后的Record 数据 |

## 示例代码

### 调用示例

- remove 类型，将某个路径下的数据删除
```js
const newData =await DocMiniApp.Interaction.setData(
    {
      type: 'remove',
      data: {
        path: [],
      }
    }
  );
console.log('debug', newData);//{}
```
- replace 类型，将某个路径下的数据替换成新数据
```js
const newData = await DocMiniApp.Interaction.setData(
    {
      type: 'replace',
      data: {
        path: [], 
        value: { a:2 }
      }
    }
  );
console.log('debug', newData);//{ a:2 }
```
- move 类型，将数组路径下的数据移动到另一个位置
```js
await DocMiniApp.Interaction.setData(
    {
      type: 'move',
      data: {
        path: [a,0],
		targetIndex: 1,
      }
    }
  );
```
