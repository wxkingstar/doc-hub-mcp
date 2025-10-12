<!--
title: 简介
id: 7238495946996482051
fullPath: /home/quick-access-to-base/department-personnel-management-based-on-web-app/overview
updatedAt: 1693989436000
source: https://open.feishu.cn/document/home/department-personnel-management-based-on-web-app/overview
-->
# 简介

本文介绍如何快速开发一个网页应用，该应用基于飞书开放平台的 OpenAPI 和应用[免登](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-3)功能，实现一个人员部门管理的 [网页应用](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。通过该教程，您可以了解开发网页应用的流程，以及如何实现应用的免登流程。

## 操作流程

本文涉及的操作流程如下图所示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e498ed496b10f4a66bcd9c9f5540562c_VZVqLmfCLP.png?height=208&lazyload=true&width=492)

## 实现效果

通过运行代码示例，访问部门人员管理应用。

:::html
<md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f5a27e7894c38ac3d4ea52e47bbd6c96_Obq360md91.mp4" poster="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cb6f74809ff8d43d52a4b990f5d893ab_rCx1ki1VHF.jpeg?lazyload=true&width=3438&height=1536" width="80%"/>
:::

## 使用到的 OpenAPI 列表

:::html
<md-table>

<md-thead>

<tr>

<md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>


</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
  
<md-text type="field-name" >[自建应用获取 app_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal) 

   `POST` open-apis/auth/v3/app_access_token/internal
  
  </md-text>

</md-td>
  
<md-td>
	无

</md-td>
  
<md-td>

	无

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/access_token/create)</md-text>
   
`POST` open-apis/authen/v1/access_token

</md-td>

<md-td>
	
  	无

</md-td>

<md-td>

<md-tag type="token-app">app_access_token</md-tag>

</md-td>

</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[获取登录用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get) </md-text>
  
`GET` open-apis/authen/v1/user_info

</md-td>

<md-td>

<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
<md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>

</md-td>

<md-td>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>