<!--
title: 身份验证相关
id: 6907569743420227586
fullPath: /ugTN1YjL4UTN24CO1UjN/uMzN1YjLzcTN24yM3UjN
updatedAt: 1701337635000
source: https://open.feishu.cn/document/faq/client-side-generic-questions/questions-on-authentication
-->
# 身份验证相关问题
**1. 小程序的code可以在服务端使用吗？**

答：小程序的 code（通过 [login](/ssl:ttdoc/uYjL24iN/uYzMuYzMuYzM) 获得）不可以在服务端接口（如[获取登录用户身份](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/access_token)）里使用。

<br>
**2. 如何通过飞书，实现应用免登？**

答：请见[参考文档](/ssl:ttdoc/ukTMukTMukTM/uETOwYjLxkDM24SM5AjN)，查看如何实现应用免登。

<br>
**3. 通过飞书进行应用免登的时候，出现登录失败怎么办？**

答：如果提示的信息是“请求非法”，请**检查对应的重定向地址正确，并确认其配置在应用的重定向 URL 选项里**。如果提示的信息是“无应用权限”，建议**检查对应的用户有没有使用该应用的权限**。

