---
title: "Interaction.applyTransaction"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/interaction/Interaction.applyTransaction
---
最后更新于 2025-07-31

# Interaction.applyTransaction
获取当前小应用的 Interaction 数据, 作为一个事务批量operations，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

获取当前小应用的 Interaction 数据, 作为一个事务批量operations
| **参数**     | **类型**                                                                                  | **必选** | **释义**           |
| ---------- | --------------------------------------------------------------------------------------- | ------ | ---------------- |
| operations | [InteractionOperation](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/InteractionOperation)[] | 是      | Interaction 变更操作 |

## 输出

异步返回一个InteractionData 对象

## 示例代码

### 调用示例

```js
const [data, updateData] = useState<any>();
useEffect(() => {
  const handler = (data = {}) => updateData(data);
  DocMiniApp.Interaction.getData().then(handler);
  DocMiniApp.Interaction.onDataChange(handler);
  return () => {
    DocMiniApp.Interaction.offDataChange(handler);
  };
}, []);

const handleAddItem = useCallback(async () => {
  const result = await DocMiniApp.Interaction.applyTransaction([{
    p: ['test'],
    action: {
      oi: 2
    }
  }]);
  console.log('debug', result);
}, []);
return (
  AddItem</Button>

)
```

### 返回示例

```json
{"test":2}
```
