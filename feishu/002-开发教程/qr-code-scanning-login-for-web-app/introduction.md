<!--
title: 简介
id: 7103422385130831875
fullPath: /home/qr-code-scanning-login-for-web-app/introduction
updatedAt: 1708487254000
source: https://open.feishu.cn/document/qr-code-scanning-login-for-web-app/introduction
-->
# 简介

二维码扫码登录时，当用户完成扫码操作并授权登录后，开发者可以在应用中获取用户在飞书的身份信息，然后使用该身份信息完成登录的操作。本教程指导你如何快速接入二维码扫码登录，并实现获取用户身份信息。

## 流程简介

网页应用登录是基于 [OAuth 2.0](https://oauth.net/2/) 标准协议实现的，通过飞书账号授权登录第三方应用的能力。

鉴权流程如下：


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8846c127e31fe14571b9071fab60ad7f_v36LIxVw5M.png?height=715&lazyload=true&maxWidth=700&width=1353)

## 实现效果

本教程最终实现效果如下，在网页应用内扫码登录后，应用可以获取到用户相关信息。

![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/be40cf7703e94a529214d46b2f91405c~tplv-goo7wpa0wc-image.image?height=1200&lazyload=true&maxWidth=700&width=1600)

