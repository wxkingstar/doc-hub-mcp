---
title: "getSystemInfo"
source_url: https://open.feishu.cn/document/client-docs/block/api/device/getsysteminfo
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872120000
---
最后更新于 2022-07-15

# getSystemInfo

获取环境、设备相关信息。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，无额外扩展属性。

## 输出

success 函数返回对象参数扩展属性：

| **名称**           | **数据类型**           | **描述**     |
| ---------------- | ---------------- | ---------- | 
| platform         | 枚举 | 平台信息包括'pc' \| 'mobile' \| 'android' \| 'ios', 其中，pc & mobile 适用于网页环境，android & ios 适用于移动端 Native 环境      | 1.0.0 |
| host | string   | 宿主标识      | 1.0.0 |
| blockitVersion | string   | block基础库版本      | 1.0.0 |
| packageVersion | string   | block包版本      | 1.7.0 |
| screenWidth | number   | 设备屏幕宽度      | 1.0.0 |
| screenHeight | number   | 设备屏幕高度      | 1.0.0 |
| windowWidth | number   | 宿主窗口宽度      | 1.0.0 |
| windowHeight | number   | 宿主窗口高度      | 1.0.0 |
| pixelRatio | number           | 设备像素比      | 1.0.0 |
| fontSizeSetting | number           | 宿主字体大小      | 1.0.0 |
| language         | string           | 语言，如：zh_CN | 1.0.0 |
| brand         | string           | 手机品牌。网页环境默认值为 PC | 1.0.0 |
| model         | string           | 手机型号。网页环境默认值为 PC | 1.0.0 |
| theme |'dark' \| 'light'|表示当前系统的主题模式，`dark` 表示当前系统处于暗色模式，`light` 表示当前系统处于亮色模式。**开启 Dark Mode 之后才会返回该字段**|1.4.0|

## 示例代码

### 调用示例
```json
{
  "sourceData":{
  	"tab": "api",
  	"item": "getSystemInfo"
  },
    "openDetail": 1, 
    "title": "getSystemInfo", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "getSystemInfo",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
```

```js
tt.getSystemInfo({
  success (res) {
    console.log('getSystemInfo 调用成功', res);
  },
  fail (res) {
    console.log('getSystemInfo 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('getSystemInfo 调用结束', res.errMsg);
  } 
});
```

### 返回示例

```json
{
  errMsg: "getSystemInfo:ok",
  platform: 'pc',
  host: 'docs_block',
  language: 'zh_CN',
  blockitVersion: '1.7.0',
  packageVersion: '1.1.0',
  screenWidth: 1000,
  screenHeight: 700,
  windowWidth: 800,
  windowHeight: 500,
  brand: 'PC',
  model: 'PC',
  theme: 'light',
  pixelRatio: 2,
  fontSizeSetting: 12,
}
```
