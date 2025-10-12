---
title: "offContainerResize"
source_url: https://open.feishu.cn/document/client-docs/block/api/window/offcontainerresize
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872135000
---
最后更新于 2022-07-15

# offContainerResize

取消监听容器尺寸变化。
**Notice**：为防止多次注册事件监听导致一次事件多次回调，建议每次调用 onContainerResize 方法监听事件之前，先调用 offContainerResize 方法，关闭之前的事件监听。

## 输入
| **名称**   | **数据类型** |**是否必填**|**默认值**| **描述**              |
| -------- | ------ | ------------------- | -------- |----|
| callback    | function | 是|-- |当容器尺寸变化监听取消时的回调函数  |          

## 示例代码
```js
const fn = (res) => {
  console.log('取消监听');
};

tt.offContainerResize(fn);
```
