---
title: "updateMenuItem"
source_url: https://open.feishu.cn/document/client-docs/block/api/host-api/workplace-api/block-menu-item/updatemenuitem
last_remote_update: 2023-08-28
last_remote_update_timestamp: 1693188746000
---
最后更新于 2023-08-28

# updateMenuItem

## tt.updateMenuItem(Object param)

更新工作台小组件菜单项。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **属性**   | **类型** | **默认值** | **必填** | **说明**   |
| -------- | ------ | ------- | ------ | -------- |
| menuItem | object | -      | 是      | 菜单项的描述数据 |

menuItem 对象参数说明：

| **属性**  | **类型**        | **默认值** | **必填** | **说明**       |
| ------- | ------------- | ------- | ------ | ------------ |
| key     | string        | -      | 是      | 菜单项的唯一标示     |
| iconUrl | string        | -      | 否      | 菜单项的图标的链接地址  |
| name    | i18n<string> | -      | 否      | 菜单项的名称，支持国际化 |

更新菜单项时，传入的 menuItem 对象会和之前的 menuItem 对象做合并操作。

## 输出

各 callback 返回对象参数均无额外扩展属性。

## 示例

### 代码示例
```json
{
  	"tab": "api",
  	"item": "updateMenuItem"
  }
```

```js
tt.updateMenuItem({
  menuItem: {
    key: 'custom_key',
    iconUrl: 'https://sf3-cn.feishucdn.com/obj/lark.avatar/241f10011243cbcf0ee4f',
    name: {
      zh_cn: '设置'，
      en_us: 'setting',
      ja_jp: 'セットアップ'
    }      
  },
  success (res) {
    console.log('updateMenuItem 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('updateMenuItem 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('updateMenuItem 调用结束', res.errMsg);
  }
});
```

### **success** **函数返回对象示例**

```json
{
  "errMsg": "updateMenuItem:ok"
}
```

## Tip

暂无。
