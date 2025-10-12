---
title: "getImageInfo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/image/getimageinfo
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683836000
---
最后更新于 2025-04-15

# getImageInfo

调用 getImageInfo(Object object) 获取图片信息。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.4.0+ | V2.4.0+ | V2.4.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
src | string | 是 | \- | 图片的路径。支持网络路径和小程序文件系统（用户目录、临时目录、包目录）下的路径，其中小程序文件系统详情可参见[文件系统概述](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/file-system)。  
示例值：https://example.com/p1QpEy0jkK.png  
**Notice**：**注意**：  
- Harmony 端：当前仅支持本地图片

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
width | number | 图片原始宽度，单位：px。不考虑旋转。
height | number | 图片原始高度，单位：px。不考虑旋转。
path | string | 图片的本地路径。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
          预览网页应用

</div> 

```js
tt.getImageInfo({
  src: "https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/33e4ae2ff215314046c51ee1d3008d89_p1QpEy0jkK.png",
  success(res) {
    console.log(res);
  },
  fail (res) {
    console.log(`getImageInfo fail`);
  }
})
```

`success`返回对象示例：

```json
{
  "width": 1640,
  "height": 1296,
  "errMsg": "getImageInfo:ok",
  "path": "ttfile://temp/1637490835010.png"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
