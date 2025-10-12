---
title: "PerformanceRecorder.startParallel"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/performance/PerformanceRecorder/startparallel
last_remote_update: 2023-04-18
last_remote_update_timestamp: 1681804184000
---
最后更新于 2023-04-18

# PerformanceRecorder.startParallel(Object object)
开始一段异步操作的记录，仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V6.1.0+ | V6.1.0+ | V6.1.0+ | /
网页应用 | **✕** | **✕** | **✕** | /

## 输入
参数是一个对象，由以下属性：
| 名称 | 数据类型 | 必填 | 默认值 | 描述 |
| -- | -- | -- | -- | -- |
| name | string | 是 |  | 异步操作的名称 |
| type | string |是 |  | 异步操作的类别 |
| extra | Object | 否 |  | 异步操作的扩展信息，是形如 `{ a: 1, b: 2, c: 3 }` 的 key-value 对象 |

## 输出
| 名称 | 数据类型 | 描述 |
| -- | -- | -- |
| recordID | number | 标记本次记录开始的 id，用于传给 [PerformanceRecorder.endParallel()](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/performance/PerformanceRecorder/endparallel) 来完成一次异步操作的记录。<br>在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下时返回值 >= 1，不在时返回 -1。 |
## 示例代码
仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
```javascript
const p = tt.getPerformanceRecorder && tt.getPerformanceRecorder();
// parallel 表示可并行的，开始一段可以和其他异步逻辑并行的异步操作的记录
const parallelID = p && p.startParallel({
  name: 'myIntervalSetData',
  type: 'efgh',
  extra: {
    d: 4,
    e: 5,
    f: 6
  }
})
this.setData({
  list: new Array(40).fill(0).map((item) => {
    return {
      a: randomString(2),
      b: randomString(18),
      c: randomString(40),
      d: randomString(30)
    }
  })
}, () => {
  // 完成一段异步操作的记录
  p && p.endParallel(parallelID)
});
```
