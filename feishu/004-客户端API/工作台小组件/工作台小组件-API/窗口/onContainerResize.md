---
title: "onContainerResize"
source_url: https://open.feishu.cn/document/client-docs/block/api/window/oncontainerresize
---
最后更新于 2022-07-15

# onContainerResize

监听容器尺寸变化。

## 输入

| **属性**   | **类型** |**必填**| **说明**              |
| -------- | ------ | ------------------- | -------- |
| callback    | function | 是| 当容器尺寸变化时的回调函数  |          

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
width | number | 宽度，单位 px
height | number | 高度，单位 px

## 示例代码
### 调用示例
```json
{
  "sourceData":{
          "tab": "api",
          "item": "onContainerResize"
  },
    "openDetail": 1, 
    "title": "onContainerResize", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_608288f1f7c000146b4eabc1%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "onContainerResize",
            "isNew": true
        },
                  "blockID": "mock-block"
    }
}
```

```js
tt.onContainerResize(({ width, height}) => {
  console.log('容器尺寸变化 width = ', width, ' height = ', height);
});
```

### 回调函数返回对象示例
```json
{
  "width": 545,
  "height": 50
}
```
