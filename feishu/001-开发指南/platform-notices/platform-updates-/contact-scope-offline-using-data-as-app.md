<!--
title: 通讯录「以应用身份读取通讯录」、「以用户身份访问通讯录」权限点下线
id: 7252595834440286211
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/platform-updates-/contact-scope-offline-using-data-as-app
updatedAt: 1688630645000
source: https://open.feishu.cn/document/platform-notices/platform-updates-/contact-scope-offline-using-data-as-app
-->
# 通讯录「以应用身份读取通讯录」、「以用户身份访问通讯录」权限点下线

亲爱的开发者，你好！

我们将于**7月27日**停止「以应用身份读取通讯录」、「以用户身份访问通讯录」两个权限点的申请，对于已经获得了此权限点的应用不受影响。


## 下线原因
「以应用身份读取通讯录」、「以用户身份访问通讯录」是通讯录一些基础接口的必备权限点，但获取此权限的同时也获得了成员的「性别」、「部门」、「职务」等敏感字段的读取权限，有导致成员的信息泄露的风险。


## 下线后的解决方案
原「以应用身份读取通讯录」、「以用户身份访问通讯录」权限点控制的接口，可申请新权限——「获取通讯录基本信息」。接口的字段权限，请以具体的接口文档中的说明为准，详见下图：


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b6518d6348cb8619c565b2057151a9b6_WvHRIaIvmi.png?lazyload=true&width=1280&height=676)

