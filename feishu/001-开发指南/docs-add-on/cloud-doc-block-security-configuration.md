<!--
title: 安全配置
id: 7225881256558706691
fullPath: /uAjLw4CM/uYjL24iN/docs-add-on/08-cloud-doc-block-security-configuration/cloud-doc-block-security-configuration
updatedAt: 1737366577000
source: https://open.feishu.cn/document/client-docs/docs-add-on/cloud-doc-block-security-configuration
-->
# 安全配置

## 背景说明

出于**提供更好的数据安全保障**，新版云文档小组件提供安全配置能力，包括 [CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)和 **API权限管理** 部分。应用需要申请资源访问权限，并经过开放平台或租户管理员审核后，才能使用权限绑定的开放能力。简单来说，API 权限决定了应用能使用哪些飞书的开放能力。
## 配置方法

### [CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP) 请求访问限制配置

1. CSP 能力开启后会对非域名白名单的请求做拦截，会导致小组件不可使用，打开云文档控制台会报如下错误。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da1176d8298a84075f154960314291a2_qzKaJLq7hU.png?height=184&lazyload=true&maxWidth=600&width=3580)

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cefb9a7666cbf8b8d63dc2dbcc9e96cb_Y2VCdMRnVN.png?height=202&lazyload=true&maxWidth=600&width=3582)

2. 需要去开发者后台-安全设置-服务器域名白名单，添加服务器域名白名单，然后发布新版本，审核通过即可。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bd08c2732fa96392e7e1cee714227626_x6ucaLirh4.jpeg?height=2124&lazyload=true&maxWidth=600&width=3762)
  
### 云文档小组件 API 权限约束配置引导

需要在开发者后台，权限管理，选择云文档目录，选择 **创建及编辑新版文档（docx:document）** 和 **查看新版文档（docx:document:readonly）** 两个权限点位，开通权限，并发布提交审核。未开通上述权限点位的应用，API 将不可调用。API 与权限点位的对应关系说明，参考：[API 概览](/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/05-api-doc)

点击 **开通权限**，在右侧弹出的界面内选择 **用户身份权限 user_access_token**，再开通权限。
	
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5c61c3068f42ef461dfc13cf8a8ed272_hA7caw8qGh.png?height=1550&lazyload=true&maxWidth=600&width=2882)