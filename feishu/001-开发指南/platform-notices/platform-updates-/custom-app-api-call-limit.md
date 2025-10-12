<!--
title: 自建应用 API 调用量上限调整说明
id: 7411452464157818883
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/platform-updates-/custom-app-api-call-limit
updatedAt: 1730798859000
source: https://open.feishu.cn/document/platform-notices/platform-updates-/custom-app-api-call-limit
-->
# 自建应用 API 调用量上限调整说明

开放平台为提升服务稳定性与用户体验，将对飞书基础免费版的企业自建应用 API 调用总量上限进行调整。

## 调整内容

飞书基础免费版内，单租户下所有企业自建应用的 API 调用总量上限调整为 **10,000 次/月**，该上限在每个自然月的 1 号刷新。

:::note
**说明**：
- 基础免费版内，未认证企业和认证企业的自建应用 API 调用总量上限均为 10,000 次/月。
- 除基础免费版之外的其他飞书版本，不限制企业自建应用的 API 调用量。了解飞书各版本参见[版本对比](https://www.feishu.cn/service)。
:::

## 生效范围

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">维度</md-th>
<md-th style="width:80%">生效范围</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>**[飞书版本](https://www.feishu.cn/service)**</md-td>
<md-td>基础免费版 </md-td>
</md-tr>

<md-tr>
<md-td>**[应用类型](/ssl:ttdoc/home/app-types-introduction/overview)**</md-td>
<md-td>企业自建应用</md-td>
</md-tr>
  
<md-tr>
<md-td>**[OpenAPI](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)**</md-td>
<md-td>除下表 **不计算调用量的 OpenAPI** 之外的其他 OpenAPI 均计算 API 调用量</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

例如，某一企业所用的飞书版本为基础免费版（API 调用量上限为 10,000 次/月），其中自建应用 A 本月调用 API 300 次、自建应用 B 本月调用 API 1,000 次，则该企业的自建应用 API 调用总量为 1,300 次，当月剩余调用量 8,700 次。

### 不计入调用量的 OpenAPI

以下业务 API 不计入企业内自建应用每月的 API 调用量，即使企业 API 调用量已用尽也可继续调用这些 API。例如，企业 API 调用量剩余 9,000 次，某一自建应用调用通讯录的[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)接口 100 次，此时企业 API 调用量剩余仍为 9,000 次。

- [认证及授权](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/passport-v1/session/usum)
- [事件订阅](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-v1/outbound_ip/list)
- [通讯录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/resources)
- [飞书人事标准版](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/ehr/ehr-v1/employee/list)
- [飞书人事企业版](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/overview)
- [招聘](/ssl:ttdoc/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/recruitment-development-guide)
- [绩效](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/performance-v1/semester/list)
- [智能门禁](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/acs-v1/development-guide)
- [飞书应用引擎](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/apaas-v1/application-function/invoke)
- [AI 能力](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/ai/optical_char_recognition-v1/image/basic_recognize)
- [飞书智能伙伴创建平台](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/aily-v1/aily_session/create)

:::note
**说明**：如果以上业务 API 存在历史版本，调用历史版本 API 也不会占用企业的 API 调用量。
:::

你可以参考 API 文档所在目录，确认 API 所属的业务。例如，[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create) API 属于通讯录。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b7157a4e4572ac1a07ce5ac2080be423_Qn7blVJXvX.png?height=946&lazyload=true&maxWidth=600&width=2866)

你也可以查阅 [API 列表](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)，通过 **计入收费用量** 列字段，查看 API 是否计算调用量。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/61980d739e4eb544e21988a81459907d_oAsF5MHqc2.png?height=486&lazyload=true&maxWidth=600&width=1742)

## 生效时间

**2024 年 11 月 13 日起**

- 飞书基础免费版内，单租户下所有企业自建应用的 API 调用总量上限调整为 **10,000 次/月**，但允许超量调用 OpenAPI。
- 所有飞书版本开始支持通过[管理后台](https://www.feishu.cn/admin) > **费用中心** > **权益数据** 页面查看 **API 调用次数**。

**2024 年 12 月 3 日起**

飞书基础免费版的企业自建应用，在当月超过 API 调用量上限后，将无法继续调用计算调用量的 OpenAPI，继续调用将会失败，并返回 `99991403` 错误码。

## 获取调用量数据

### 查看 API 调用量

企业管理员可登录[管理后台](https://www.feishu.cn/admin)，在 **费用中心** > **权益数据** 页面查看 **API 调用次数**。

:::note
**说明**：所有飞书版本均可查看 API 调用次数的已用量，其中，飞书基础免费版的 API 调用次数总量显示为 **10,000**，其他飞书版本显示为 **不限**。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff6f7f40593fcaeb59668c063de00176_DZZoXwAOhA.png?height=1408&lazyload=true&maxWidth=600&width=2882)

### 超量预警通知

当企业内所有自建应用的 API 调用总量达到上限的 90%、100% 时，开放平台会向企业管理员以及自建应用的开发者推送预警通知。其中：

- 企业管理员登录[管理后台](https://www.feishu.cn/admin)时，在首页的 **权益预警** 区域可查看 API 调用量信息。

- 开放平台会通过飞书客户端发送卡片消息通知：

	- 达到调用量上限的 90% 时，卡片消息通知示例如下。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b498fabc88ab25f2a01fce04b798f95e_TAxGOt9d48.png?height=1018&lazyload=true&maxWidth=600&width=2354)

	- 达到调用量上限的 100% 时，卡片消息通知示例如下。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce92bb2c20bd8855ec1e64c28406d785_sP33QI71ZC.png?height=952&lazyload=true&maxWidth=600&width=2360)



## 提高调用量上限

当企业的 API 调用量达到上限时，企业内的自建应用将无法调用 API（注：不计算调用量的 API 仍可正常调用）。继续调用 API 将失败，并返回以下报错信息：

- HTTP 状态码：`429`
- 错误码：`99991403`
- 错误信息：`This month's API call quota has been exceeded`

你可以联系企业管理员升级飞书版本，升级版本后将不限制 API 调用量。飞书版本介绍与升级入口，参见[版本对比](https://www.feishu.cn/service)，如有疑问可[联系客服](https://applink.feishu.cn/client/web_url/open?width=400&height=600&mode=window&url=https%3A%2F%2Fwww.feishu.cn%2Focic%3Fsource%3D1%26channel_id%3D36)。

## 常见问题

### 调用 API 失败，返回 4xx/5xx 错误码，是否占用企业的 API 调用量？

不占用。

### 当开放平台调整 OpenAPI 计入调用量的规则后，是否立即生效？

否。当月调整 API 调用量规则在次月生效。

### 群组中添加的自定义机器人以 webhook 方式发送消息是否会占用 API 调用量？

不会。群组内添加的[自定义机器人](/ssl:ttdoc/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)以 webhook 方式向群组内推送消息不会计入 API 调用量。