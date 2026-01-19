---
title: "Harmony扫码能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/harmony_qrcode/harmony-qrcode-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony扫码能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| kaqrcode | 能力组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供扫码能力

### 更新日志
- 移除 registerResultHandler 方法，仅保留 startScan、handleResult、scanFromImage 三个核心接口

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

#### `scanFromImage(inputImageUri: string, options?: scanBarcode.ScanOptions): Promise<scanBarcode.ScanResult[] | undefined>`
图片二维码识别

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| inputImageUri | string | 是 | 图片路径 |
| options | scanBarcode.ScanOptions | 否 | 识别参数配置 |

**返回值**：Promise<scanBarcode.ScanResult[] | undefined>
