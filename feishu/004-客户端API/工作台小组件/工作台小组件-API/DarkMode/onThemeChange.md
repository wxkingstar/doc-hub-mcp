---
title: "onThemeChange"
source_url: https://open.feishu.cn/document/client-docs/block/api/darkmode/onthemechange
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872318000
---
最后更新于 2022-07-15

# onThemeChange

监听系统主题变化。
**Notice**：由于 Android 系统主题的刷新机制会导致整个页面重新创建，在 Android 设备上并不能通过此接口实时监听到系统主题变化。为达到最佳的适配效果，请在 Block 初次加载时，调用 [tt.getSystemInfo](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/device/getsysteminfo) 接口对 theme 进行处理。

## 输入

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
callback | function | 是 | 当主题变化时的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
theme | string | 表示当前系统的主题模式，开启 Dark Mode 之后才会返回该字段  
  -  `dark`：当前系统处于暗色模式  
  -  `light`：当前系统处于亮色模式

## 示例代码

```js
tt.onThemeChange(({ theme }) => {
  console.log('onThemeChange', theme);
});
```
回调函数返回对象示例：
```json
{
  "theme": "dark"
}
```
