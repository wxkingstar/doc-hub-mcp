---
title: "onMenuItemTap"
source_url: https://open.feishu.cn/document/client-docs/block/api/host-api/workplace-api/block-menu-item/onmenuitemtap
---
最后更新于 2023-08-28

# onMenuItemTap

## tt.onMenuItemTap(function fn)

监听工作台小组件菜单的用户点击。

## 输入

**function fn(Object param)**

| **属性**    | **类型**        | **说明**       |
| --------- | ------------- | ------------ |
| menuItem  | object        | 点击的菜单项的描述数据  |
|  ∟ key    | string        | 菜单项的唯一标示     |
| ∟ iconUrl | string        | 菜单项的图标的链接地址  |
| ∟ name    | i18n<string> | 菜单项的名称，支持国际化 |

## 示例

### 代码示例
```json
{
  	"tab": "api",
  	"item": "onMenuItemTap"
  }
```

```js
tt.onMenuItemTap(({ key, name, iconUrl }) => {
  console.log('菜单项', key, '被点击');
})
```

### **fn 函数返回对象示例**

```json
{
  "key": "custom_key",
  "iconUrl": "https://sf3-cn.feishucdn.com/obj/lark.avatar/241f10011243cbcf0ee4f",
  "name": {
     "zh_cn": "设置"，
     "en_us": "setting",
     "ja_jp": "セットアップ"
  }
}
```

## Tip

暂无。
