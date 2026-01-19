---
title: "Harmony Logger 能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/harmony-logger-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_logger_api - Harmony Logger能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_logger_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
日志打印能力

### 更新日志
- 首次发布，提供 verbose、debug、info、warn、error 五级日志打印接口

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyLogger } from '@ohos/alchemy_logger_api'

export class KARuntimeManager {
  private alchemyLogger?: IAlchemyLogger;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyLogger = runtime.getAlchemyLogger();
    this.alchemyLogger?.info('KARuntimeManager', 'test');
    this.alchemyLogger?.warn('KARuntimeManager', 'warning message');
    this.alchemyLogger?.error('KARuntimeManager', 'error occurred', new Error('demo error'));
    // 其他方法省略...
  }
}
```

## INTERFACE
### IAlchemyLogger
日志打印能力

```ets
interface IAlchemyLogger {
  verb(tag: string, message: string): void // 打印 verbose 日志。注意该级别日志在正式包中可能被移除
  debug(tag: string, message: string): void // 打印 debug 日志。注意该级别日志在正式包中可能被移除
  info(tag: string, message: string): void // 打印 info 日志
  warn(tag: string, message: string): void // 打印 warn 日志
  error(tag: string, message: string, error?: Error): void // 打印 error 日志
}
```

#### 方法列表
#### `verb(tag: string, message: string): void`
打印 verbose 日志。注意该级别日志在正式包中可能被移除

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | string | 是 | 日志标签 |
| message | string | 是 | 日志内容 |

#### `debug(tag: string, message: string): void`
打印 debug 日志。注意该级别日志在正式包中可能被移除

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | string | 是 | 日志标签 |
| message | string | 是 | 日志内容 |

#### `info(tag: string, message: string): void`
打印 info 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | string | 是 | 日志标签 |
| message | string | 是 | 日志内容 |

#### `warn(tag: string, message: string): void`
打印 warn 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | string | 是 | 日志标签 |
| message | string | 是 | 日志内容 |

#### `error(tag: string, message: string, error?: Error): void`
打印 error 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | string | 是 | 日志标签 |
| message | string | 是 | 日志内容 |
| error | Error | 否 | 异常。可以为 null |
