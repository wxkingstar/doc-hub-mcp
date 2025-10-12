<!--
title: H5 SDK 的部分历史域名即将下线
id: 7316195182503526428
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/scheduled-sunsetting-of-selected-legacy-h5-sdk-domains
updatedAt: 1732589781000
source: https://open.feishu.cn/document/platform-notices/breaking-change/scheduled-sunsetting-of-selected-legacy-h5-sdk-domains
-->
# H5 SDK 的部分历史域名即将下线

## 变更事项

为了提升服务安全性，我们将下线 H5 SDK 使用的部分历史 CDN 域名。下线后，引用这些历史域名的网页应用 H5 SDK 将会受到影响 ，应用内无法调用 H5 SDK 内的方法。
  
**受影响的历史域名列表**：

s0.bytecdn.cn

s0.pstatp.com

s0z.pstatp.com

s1.pstatp.com

s2.pstatp.com

s3.bytecdn.cn

s3.pstatp.com

s3a.bytecdn.cn

s3b.bytecdn.cn

s3a.pstatp.com

s3b.pstatp.com

s4.pstatp.com

s6.pstatp.com

s9.pstatp.com



是否跟版：不跟版

预计生效版本：-

历史域名预计下线时间：**2024-01-25**

## 解决方案

为不影响业务的正常运行，请注意检查你的网页应用是否引用了上述域名，并尽快将相关域名替换为最新版本的 H5 SDK 域名。
- [**网页应用 H5 SDK**](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)：

```JS
<script
    type= "text/javascript"
    src= "https://lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js"
></script> 
```
- [**网页组件**](/ssl:ttdoc/uYjL24iN/uUDO3YjL1gzN24SN4cjN)：

```JS
<script src="https://lf1-cdn-tos.bytegoofy.com/goofy/locl/lark/external_js_sdk/h5-js-sdk-1.2.12.js"></script>
```
  
若你未能及时确认并调整，域名下线后，相关场景的业务将无法正常运行。 <br>
开放平台预计将于 **2024年1月25日** 完成相关历史域名的下线。请于 **2024年1月25日前** 确认以上信息，并根据情况做好相应适配。<br>
如需适配协助，请联系技术支持。