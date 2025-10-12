---
title: "PerformanceRecorder.startStack"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/performance/PerformanceRecorder/startstack
last_remote_update: 2023-04-18
last_remote_update_timestamp: 1681804226000
---
最后更新于 2023-04-18

# PerformanceRecorder.startStack(Object object)
开始一段同步操作的记录，仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V6.1.0+ | V6.1.0+ | V6.1.0+ | /
网页应用 | **✕** | **✕** | **✕** | /

## 输入
参数是一个对象，由以下属性：
| 名称 | 数据类型 | 必填 | 默认值 | 描述 |
| -- | -- | -- | -- | -- |
| name | string | 是 |  | 同步操作的名称 |
| type | string |是 |  | 同步操作的类别 |
| extra | Object | 否 |  | 同步操作的扩展信息，是形如 `{ a: 1, b: 2, c: 3 }` 的 key-value 对象 |
## 输出
| 名称 | 数据类型 | 描述 |
| -- | -- | -- |
| recordID | number | 标记本次记录开始的 id，用于传给 [PerformanceRecorder.endStack()](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/performance/PerformanceRecorder/endstack) 来完成一次异步操作的记录。<br>在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下时返回值 >= 1，不在时返回 -1。 |
## 示例代码
仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
```javascript
const p = tt.getPerformanceRecorder && tt.getPerformanceRecorder();
// stack 表示有堆栈的，开始记录一段同步操作
const stackID = p && p.startStack({
  // name type extra 均可自定义
  name: 'myIntervalRender',
  type: 'abcd',
  extra: {
    a: 1,
    b: 2,
    c: 3
  }
});
// 用多次同步接口调用来模拟一些很耗时的 JS 逻辑
for (let i = 0; i < 20; i++) {
  tt.getSystemInfoSync();
}
// 完成记录一段同步操作
p && p.endStack(stackID);
```
