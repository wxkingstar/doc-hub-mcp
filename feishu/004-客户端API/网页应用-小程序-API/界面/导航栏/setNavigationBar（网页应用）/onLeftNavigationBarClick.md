---
title: "onLeftNavigationBarClick"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/navigation/a/onleftnavigationbarclick
last_remote_update: 2022-05-18
last_remote_update_timestamp: 1652861664000
---
最后更新于 2022-05-18

# onLeftNavigationBarClick(function callback)
监听导航栏左侧点击事件
**Notice**：注意事项：
- 必须使用 [setNavigationBar](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/setnavigationbar) 设置导航栏左侧按钮后，才有效。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **X** | **X** | **X** | /
网页应用 | V5.3.0+ | V5.3.0+ | V5.3.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
id | string | 对应自定义导航栏 item 的 id

## 示例代码

```js
tt.setNavigationBar({
    left:{
        items: [
            // 显示文本
            {id: "left_one", text: "left_xxx"}
        ]            
    } ,
    success(res) {
        console.log("success");
    },
    fail(res) {
        console.log(`${JSON.stringify(res)}`);
    }                 

});

tt.onLeftNavigationBarClick(ev => {
    alert(`你点击了左上角id 为 ${ev.id} 的按钮`)
})
```

回调函数返回对象示例：
```json
{
    "id": "left_one",
}
```
