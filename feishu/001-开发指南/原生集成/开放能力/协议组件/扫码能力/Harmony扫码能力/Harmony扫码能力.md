---
title: "Harmony扫码能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/harmony-qrcode
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# kaqrcode - 二维码能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| kaqrcode | 能力组件 | 1.1.2 | 7.32.0 |

## 功能简介
提供扫码能力

### 更新日志
- 新增接口 IQrCode，提供 startScan、handleResult、registerResultHandler、scanFromImage 四个方法，支持扫码、结果处理、结果处理器注册及图片二维码识别功能

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IQrCode } from '@ohos/kaqrcode_api'

export class KARuntimeManager {
  private qrCode?: IQrCode;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.qrCode = runtime.getQrCode();
    this.qrCode?.startScan(
      getContext(this),
      1001,
      { scanTypes: [scanBarcode.ScanType.QR_CODE] },
      (result) => {
        console.info('扫码结果：' + result.originalValue);
        return true;
      },
      (error) => {
        console.error('扫码失败：' + error.message);
      }
    );
  }
}
```

## INTERFACE
### IQrCode
提供扫码能力

```ets
interface IQrCode {
  startScan(
    context: Context,
    componentId?: number,
    options?: scanBarcode.ScanOptions,
    handler?: (result: scanBarcode.ScanResult) => boolean,
    onError?: (error: BusinessError) => void
  ): void // 打开扫码页面

handleResult(result: string, componentId?: number): void // 扫码结果处理

registerResultHandler(handler: (result: string, componentId?: number) => boolean): void // KA无法使用用户态注入，手动注册扫码结果处理

scanFromImage(
    inputImageUri: string,
    options?: scanBarcode.ScanOptions
  ): Promise<scanBarcode.ScanResult[] | undefined> // 图片二维码识别
}
```

#### 方法列表
#### `startScan(context: Context, componentId?: number, options?: scanBarcode.ScanOptions, handler?: (result: scanBarcode.ScanResult) => boolean, onError?: (error: BusinessError) => void): void`
打开扫码页面

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | - |
| componentId | number | 否 | 当前页面的 componentId |
| options | scanBarcode.ScanOptions | 否 | 扫码需要配置的参数 |
| handler | (result: scanBarcode.ScanResult) => boolean | 否 | 扫码成功数据处理 |
| onError | (error: BusinessError) => void | 否 | 扫码错误处理 |

#### `handleResult(result: string, componentId?: number): void`
扫码结果处理

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| result | string | 是 | 扫码结果 |
| componentId | number | 否 | - |

#### `registerResultHandler(handler: (result: string, componentId?: number) => boolean): void`
KA无法使用用户态注入，手动注册扫码结果处理

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| handler | (result: string, componentId?: number) => boolean | 是 | - |

#### `scanFromImage(inputImageUri: string, options?: scanBarcode.ScanOptions): Promise<scanBarcode.ScanResult[] | undefined>`
图片二维码识别

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| inputImageUri | string | 是 | 图片路径 |
| options | scanBarcode.ScanOptions | 否 | 识别参数配置 |

**返回值**：Promise<scanBarcode.ScanResult[] | undefined>
