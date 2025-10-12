---
title: "removeMenuItem"
source_url: https://open.feishu.cn/document/client-docs/block/api/host-api/workplace-api/block-menu-item/removemenuitem
---
最后更新于 2023-08-28

# removeMenuItem

## tt.removeMenuItem(Object param)

删除工作台小组件菜单项。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **属性** | **类型** | **默认值** | **必填** | **说明**   |
| ------ | ------ | ------- | ------ | -------- |
| key    | string | -      | 是      | 菜单项的唯一标示 |

## 输出

各 callback 返回对象参数均无额外扩展属性。

## 示例

### 代码示例
```json
{
  	"tab": "api",
  	"item": "removeMenuItem"
  }
```

```js
tt.removeMenuItem({
  key: 'custom_key',
  success (res) {
    console.log('removeMenuItem 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('removeMenuItem 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('removeMenuItem 调用结束', res.errMsg);
  }
});
```

### **success** **函数返回对象示例**

```json
{
  "errMsg": "removeMenuItem:ok"
}
```

## Tip

暂无。
