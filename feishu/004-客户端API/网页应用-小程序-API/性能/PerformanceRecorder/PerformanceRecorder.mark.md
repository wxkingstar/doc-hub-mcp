---
title: "PerformanceRecorder.mark"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/performance/PerformanceRecorder/mark
---
最后更新于 2023-04-18

# PerformanceRecorder.mark(Object object)
记录一个时间点，仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V6.1.0+ | V6.1.0+ | V6.1.0+ | /
网页应用 | **✕** | **✕** | **✕** | /

## 输入
参数是一个对象，由以下属性：
| 名称 | 数据类型 | 必填 | 默认值 | 描述 |
| -- | -- | -- | -- | -- |
| name | string | 是 |  | 时间点的名称 |
| type | string |是 |  | 时间点的类别 |
| extra | Object | 否 |  | 时间点的扩展信息，是形如 `{ a: 1, b: 2, c: 3 }` 的 key-value 对象 |
| start | number | 否 | 调用方法时的时间戳 | 时间点的时间戳 |

## 输出
无
## 示例代码
仅在 [性能分析模式](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis) 下生效。
```javascript
const p = tt.getPerformanceRecorder && tt.getPerformanceRecorder();
// 调用 marker 接口，记录一个时间点
p && p.mark({
  // 时间点的 name，可以自定义
  name: 'T',
  // 时间点的 type，可以自定义
  type: 'ijkl',
  // 时间点的扩展信息，可以自定义
  extra: {
    g: 7,
    h: 8,
    i: 9
  }
})
```
