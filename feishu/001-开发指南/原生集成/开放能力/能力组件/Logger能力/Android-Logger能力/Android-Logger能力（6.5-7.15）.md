---
title: "Android Logger能力（6.5-7.15）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/logger-capability/android-logger-capability/android-logger
last_remote_update: 2024-10-18
last_remote_update_timestamp: 1729233561000
---
最后更新于 2024-10-18

# Android Logger能力（6.5-7.15）
组件类型 | 最低飞书版本 | 生效基线       |
| ---- | ------ | ---------- |
| 能力组件 | 6.5    | 2.2.3及以上版本 |

## 组件说明

通过调用飞书的打印日志 API，开发者可以指定日志的级别、内容和其他相关信息。
此外，飞书还支持日志回捞功能，开发者可以通过相应的API检索和获取之前记录的日志信息。这样可以方便地进行日志分析、故障排查和性能优化等工作。

## API 列表

### ICoreApi 协议

#### ILogger getLogger()

##### 接口说明

| 兼容飞书版本 | 说明          | 生效版本  |
| ------ | ----------- | ----- |
| 6.5    | 调用飞书的打印日志能力 | 1.0.9 |

##### 数据结构

```javascript
public interface ILogger {
        void v(String tag, String msg);

void d(String tag, String msg);

void i(String tag, String msg);

void w(String tag, String msg);

void e(String tag, String msg, Throwable throwable);
}
```

## 接入说明

通过原生集成工具，选择 2.2.3 及以上基线，并启用 **core-component-api** 组件

## 更新日志

| 版本号   | Release Note                |
| ----- | --------------------------- |
| 1.0.9 | 新功能：能力开放
