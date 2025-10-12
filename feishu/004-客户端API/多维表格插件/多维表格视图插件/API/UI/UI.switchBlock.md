---
title: "UI.switchBlock"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/ui/ui_switchblock
last_remote_update: 2023-12-26
last_remote_update_timestamp: 1703572835000
---
最后更新于 2023-12-26

# ui.switchBlock
切换当前选中的表格

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
switchBlock(tableId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
tableId | string | 是 | 需要切换的数据表id

## 输出
Promise布尔值。
## 示例代码
### 调用示例

```js
const res = await bitable.ui.switchBlock('tbl7pHAfewssa8bw')
```

### 返回示例
res:
```js
true
```
