<!--
title: 登录
id: 6989248828927950849
fullPath: /uAjLw4CM/uYjL24iN/block/guide/open-ability/block-login
updatedAt: 1657871906000
source: https://open.feishu.cn/document/client-docs/block/basic-ability/block-login
-->
# 小组件登录

小组件 (Block) 登录与小程序登录流程一致，通过登录接口 [tt.login](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/api/user/login) 获取 code，随后在应用后端服务中调用登录校验API [code2session](/ssl:ttdoc/uYjL24iN/ukjM04SOyQjL5IDN) 验证 code 合法性，获取用户身份。

详细流程请参考[小程序登录](/ssl:ttdoc/uYjL24iN/uETO5QjLxkTO04SM5kDN)。