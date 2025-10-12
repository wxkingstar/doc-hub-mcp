---
title: "getSystemInfoSync"
source_url: https://open.feishu.cn/document/client-docs/block/api/device/getsysteminfosync
---
最后更新于 2022-07-15

# getSystemInfoSync

同步获取环境、设备相关信息。
**Notice**：这是一个同步方法。

## 输入

详情请参考[getSystemInfo](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/device/getsysteminfo)。

## 输出
返回值为 object 类型，其属性与异步方法的 success 返回对象参数的扩展属性相同。
函数同步返回对象参数扩展属性：

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
```json
{
  "sourceData":{
  	"tab": "api",
  	"item": "getSystemInfoSync"
  },
    "openDetail": 1, 
    "title": "getSystemInfoSync", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "getSystemInfoSync",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
```

### 调用示例
```json
{
  		"tab": "api",
  		"item": "getSystemInfoSync"
  }
```

```js
try {
    var res = tt.getSystemInfoSync();
    console.log(`语言环境 ${res.language}`);
} catch (error) {
    console.log(`获取系统信息失败`);
}
```

### 返回示例

```json
{
  errMsg: "getSystemInfoSync:ok",
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
