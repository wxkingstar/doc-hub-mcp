---
title: "Bridge.getContainerRect"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/bridge/Bridge.getContainerRect
---
最后更新于 2025-07-31

# Bridge.getContainerRect
获取宿主容器的 Rect 信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回宿主容器的 Rect 信息
| **名称**        | **数据类型**      | **是否必填** | **描述**            |
| ------------- | ------------- | -------- | ----------------- |
| containerRect | ContainerRect | 是        | 容器的矩形信息（相对于文档左上角） |
|  ∟x           | number        | 是        | 矩形的 x 坐标          |
|  ∟y           | number        | 是        | 矩形的 y 坐标          |
|  ∟width       | number        | 是        | 矩形的宽度             |
|  ∟height      | number        | 是        | 矩形的高度             |

## 示例代码

### 调用示例

```js
const rect = await DocMiniApp.Bridge.getContainerRect();
console.log('debug', rect);
```

### 返回示例

```json
{
    "x": 159.5,
    "y": 191.25,
    "width": 816,
    "height": 100
}
```
