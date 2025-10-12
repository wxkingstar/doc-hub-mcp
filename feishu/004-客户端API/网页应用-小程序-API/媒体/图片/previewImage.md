---
title: "previewImage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/image/previewimage
---
最后更新于 2025-08-01

# previewImage

调用 previewImage(Object object) 预览一组图片。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
urls | string[] | 是 | \- | 图片地址列表。使用说明：  
- 支持本地和网络 url。  
- 支持设置一个或多个图片。示例值：["https://example.com/05b68b58.png","https://example.com/p1QpEy0jkK.png"]  
- 各端支持的图片格式有所差异，具体可参考：  
	- PC 端：png、jpg、jpeg、gif、bmp、webp  
	- iOS 端：png、jpg、jpeg、gif  
	- Android 端：png、jpg、jpeg、gif、webp
header | object | 否 | \- | 请求头（Header），对传入的网络 url 生效。示例值：{"csrf-token": "1234"}  
**Notice**：**注意**：  
- PC 端：飞书 [V3.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- Android/iOS 端：飞书 [V3.3.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。
current | string | 否 | urls[0]的内容 | 默认显示的图片地址。示例值：https://example.com/05b68b58.png
shouldShowSaveOption | boolean | 否 | true | 是否显示图片存储功能。各端显示方式差异说明：            
- PC 端：是否显示 **下载**。  
- Android/iOS 端：在预览页长按后，是否显示 **保存图片** 选项。  
**Notice**：**注意**：  
- Android、iOS、PC端：飞书 [V6.7.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- Harmony 端：飞书 [V7.47.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
          预览网页应用

</div> 

```js
tt.previewImage({
    urls: [
        "https://sf3-scmcdn2-cn.feishucdn.com/ee/lark/open/web/static/app-banner.05b68b58.png",
        "https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/33e4ae2ff215314046c51ee1d3008d89_p1QpEy0jkK.png"
    ],
    current: "https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/33e4ae2ff215314046c51ee1d3008d89_p1QpEy0jkK.png",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`previewImage fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "previewImage:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
