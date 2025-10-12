---
title: "chooseLocation"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/location/chooselocation
last_remote_update: 2025-09-02
last_remote_update_timestamp: 1756779762000
---
最后更新于 2025-09-02

# chooseLocation(Object object)

打开地图选择位置。
**Notice**：注意事项：
- 调用前需要用户授权 `scope.userLocation`。了解如何授权，可查看[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。
- 该 API 还需要用户在手机系统中给飞书客户端授予地理位置权限，位置精度和调用耗时会因设备而异。
- 因系统地图框架问题，该API在iOS 12不支持

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-location%2Fchoose-location)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
name | string | 位置名称
address | string | 详细地址（可能为空）
latitude | number | 纬度，浮点数，范围为-90~90，负数表示南纬。
longitude | number | 经度，浮点数，范围为-180~180，负数表示西经。
type | string | 坐标系类型。可能值：  
- `wgs84`：wgs84 坐标系。  
- `gcj02`：gcj02 坐标系。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-location%2Fchoose-location)
          预览网页应用

</div> 
```js
tt.chooseLocation({
    "type": "gcj02",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`chooseLocation fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "longitude": "121.46181435590088",
    "name": "瑞金南路",
    "address": "瑞金南路",
    "latitude": "31.20728911127632",
    "errMsg": "chooseLocation:ok"
}
```
