<!--
title: 如何解决 99991679 错误
id: 7451865320539570177
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-resolve-error-99991679
updatedAt: 1736734871000
source: https://open.feishu.cn/document/faq/trouble-shooting/how-to-resolve-error-99991679
-->
# 如何解决 99991679 错误

## 报错原因

调用 OpenAPI 遇到 99991679 报错，表示当前使用的 user access token 未获得所需的用户授权，因此无法以用户身份调用正在请求的 OpenAPI。
  
**报错示例**：

```JSON
{
        "code": 99991679,
        "msg": "Unauthorized. You do not have permission to perform the requested operation on the resource. Please request user re-authorization and try again. required one of these privileges: [sheets:spreadsheet, drive:drive, sheets:spreadsheet:write_only].应用未获取所需的用户授权：[sheets:spreadsheet, drive:drive, sheets:spreadsheet:write_only],
        "error": {
                "permission_violations": [{
                                "subject": "sheets:spreadsheet",
                                "type": "action_privilege_required"
                        },
                        {
                                "type": "action_privilege_required",
                                "subject": "drive:drive"
                        },
                        {
                                "type": "action_privilege_required",
                                "subject": "sheets:spreadsheet:write_only"
                        }
                ],
                "log_id": "2024110416232661C50BC902DF30E6C183",
                "troubleshooter": "排查建议查看(Troubleshooting suggestions): https://open.feishu.cn/search?from=openapi&log_id=2024110416232661C50BC902DF30E61234&code=99991679&method_id=7088555130824867868"
        }
}
```
  

## 解决方案

解决该问题，你需要申请开通调用 OpenAPI 所需权限，并重新发起用户授权流程来获取新的 user access token。


**步骤 1：确认应用是否在开发者后台中开通了对应权限**

进入[开发者后台](https://open.feishu.cn/app)的 **权限管理** 页面，查看 msg 中对应的用户身份权限是否为 **已开通** 状态。如果未开通，则需要申请开通权限，参考 [申请 API 权限](https://open.larkoffice.com/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。

:::note
若 msg 中提到了多个权限，仅需确保任何一个权限为已开通状态即可。
:::

例如：根据上文中的报错示例，你需要检查 `sheets:spreadsheet`, `drive:drive`, `sheets:spreadsheet:write_only` 这三个 **用户身份权限** 中任何一个是否为已开通状态。

**步骤 2：重新发起用户授权，确保用户已授予对应的权限**

开发者在开通应用权限后，需要在获取用户 user access token 的过程中传入缺少的用户权限。
例如：根据上文中报错示例，你需要传入 `sheets:spreadsheet`, `drive:drive`, `sheets:spreadsheet:write_only` 这三个权限中的任何一个权限。

请根据你的应用形态参考对应的接入流程：
| **应用形态**      | **接入指引** |  **注意事项**                  |
| ------------- | ------------------ | ----------------- |
| 浏览器中打开的网页应用     | [浏览器应用接入指南](/ssl:ttdoc/common-capabilities/sso/web-application-end-user-consent/guide)  | 在调用 [获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code) 时 **scope** 参数必须传入需要用户授权的权限列表。<br> ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c8dcaccf0c705e4cf55230268f1cddc6_uMlIdj5VjU.png?height=710&lazyload=true&maxWidth=350&width=1826)  |
| 飞书客户端内打开的网页应用 | [飞书客户端内网页应用接入指南](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/webapp-incremental-authorization-access-guide) | 在调用 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) 时 **scopeList** 参数必须传入需要用户授权的权限列表。<br> ![img_v3_02hs_5cd3150d-690f-4e32-8922-f45f5cdd9a7g.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c47e502bda671dbd785d8f18ee9fef8e_XornCDS5A2.png?height=310&lazyload=true&maxWidth=350&width=1808)|
| 小程序           | [小程序接入指南](/ssl:ttdoc/uYjL24iN/ukzMzUjL5MzM14SOzMTN/gadget-incremental-authorization-access-guide)    | 在调用 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) 时 **scopeList** 参数必须传入需要用户授权的权限列表。<br> ![img_v3_02hs_5cd3150d-690f-4e32-8922-f45f5cdd9a7g.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c47e502bda671dbd785d8f18ee9fef8e_XornCDS5A2.png?height=310&lazyload=true&maxWidth=350&width=1808) |


