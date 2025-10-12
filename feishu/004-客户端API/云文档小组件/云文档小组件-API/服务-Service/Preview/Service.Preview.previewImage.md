---
title: "Service.Preview.previewImage"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Preview/Service.Preview.previewImage
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960554000
---
最后更新于 2025-07-31

# Service.Preview.previewImage
传入图片信息，唤起图片查看器，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端（6.0后可用） | 演示模式

## 输入

| **名称**      | **数据类型**            | **是否必填** | **描述**      |
| ----------- | ------------------- | -------- | ----------- |
| imageInfo   | PreivewImageInfo    | 是        | /           |
|  ∟imageList | PreviewImageItem[] | 是        | 图片数组        |
|   ∟src      | string              | 是        | 图片的地址       |
|   ∟width    | number              | 是        | 图片宽度        |
|   ∟height   | number              | 是        | 图片高度        |
|   ∟scale    | number              | 否        | 图片缩放值       |
|  ∟index     | index               | 否        | 图片数组的预览起始索引 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.Preview.previewImage({
    imageList: [
        {
            src: '',
            width: 100,
            height: 100
        }
    ]
});
```

### 返回示例

无
