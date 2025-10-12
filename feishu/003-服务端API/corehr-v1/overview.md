<!--
title: 飞书人事概述
id: 7407271999612420124
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/overview
updatedAt: 1744011041000
source: https://open.feishu.cn/document/corehr-v1/overview
-->
# 业务介绍

![1.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/955e99d306014b15a6df3c92d78624e2_nBsc6v1h0R.png?height=738&lazyload=true&width=1423)

飞书人事是一款便捷高效的人事管理应用，提升组织能力，助力组织排兵布阵
- 清晰地呈现组织架构和汇报关系，完整地记录组织与人才的全生命周期信息
- 提供简洁高效流程引擎，自动化管理入转调离流程，告别线下审批与沟通
- 通过便捷易用的移动端体验，为管理者随时随地提供团队的数据洞察，辅助用人决策


![2.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1eb862a63b3b5b9e9a80e27903ea39fe_m9f0nOx8Dy.png?height=528&lazyload=true&width=1670)

围绕以上飞书人事的业务功能，我们提供了一系列安全、可靠的API，方便你调用或订阅来开发定制化功能，以满足你所在企业的个性化管理诉求，例如：
- 获取待入职信息，帮助新员工制作工卡
- 获取人员信息变更，同步到下游系统做消费
- 自研 OA 系统新建新公司主体，通过创建公司主体接口数据写入飞书人事
> 我们会对开放接口保持高频更新，如想获取最新信息可查看[更新日志](https://open.larkoffice.com/changelog?bizScope=CoreHRBusiness)

# 接入流程

> 基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](https://open.larkoffice.com/document/ukTMukTMukTM/uITNz4iM1MjLyUzM)。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_sFPuOdZ61V.png?height=214&lazyload=true&width=2276)


|          | 步骤           | 操作方法        |
| --------- | --------------- | -------   |
| 1 | 创建应用 | 根据应用的使用场景选择[创建企业自建应用](https://open.larkoffice.com/document/home/introduction-to-custom-app-development/self-built-application-development-process)或[创建应用商店应用](https://open.larkoffice.com/document/isv-guides/publish-your-app/step5-develop-store-application) |
| 2 | 申请权限 | 根据需要调用的接口文档中描述的「权限要求」到开发者后台[申请应用权限](https://open.larkoffice.com/document/server-docs/application-scope/introduction) |
| 3 | 调用API | 目前大多数接口仅支持tenant_access_token的访问凭证，具体参见接口文档中的「请求头」-Authorization字段的描述 |
| 4 | 接口测试 | 你可以在 [API 调试台](https://open.feishu.cn/api-explorer?from=guide)中快速调试这些 API ，使用方法参见[API 调试台使用指南](https://open.larkoffice.com/document/tools-and-resources/api-explorer-guide) |
| 5 | 事件订阅 | 需要到开发者后台配置事件回调地址,确保回调地址公网可访问。可参考[事件订阅概述](https://open.larkoffice.com/document/server-docs/event-subscription-guide/overview) |
| 6 | 日志检索 | 当调用接口返回失败时，从返回的header部分获取 X-Tt-Logid: 20220501181xxx8035096193288FA。再到应用管理后台，用服务端[日志检索](https://open.larkoffice.com/document/tools-and-resources/log-query-of-apps/open-api-log-query)|

# 资源介绍

飞书人事开放平台能力，按层次划分为三部分
- 基础数据，包含基础常量、组织数据增删改、自定义对象/字段增上改、系统设置等能力，通过这些API 可以生产组织/人员相关的数据供上下游消费。
- 数据变更，包含入职流程流转、发起异动、发起离职、兼职/外派、组织架构调整等能力，通过这些API可以完成组织/人员相关的状态数据变更
- 数据消费，提供个人信息、雇佣信息、部门列表、异动记录等组织/员工数据的查询API 以及数据变更事件。



![3.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6c7b110560527e7d20ed1d10646c5e1b_Rf8ZnKSbH1.png?height=2860&lazyload=true&width=4128)

## 数据模型
人员领域：


![4.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca830eab4b1eac75c7874350a5b83315_6EiUoneFq5.png?height=2030&lazyload=true&width=2724)


组织领域：


![5.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2a3bfd6894e49f332e7b94039762b34_n2rHzbPqnc.png?height=2002&lazyload=true&width=5342)

| 资源 | 定义          |
| --------- | --------------- |
| 员工 | 企业员工的所有信息，包含个人信息，雇佣信息，任职信息，雇佣信息为员工最新状态信息，任职信息包含员工在职期间所有的任职记录|
| 组织 | 企业内部的结构和管理体系，可添加新的组织建立父子层级关系。组织包含很多实体：部门 - 公司 - 地点 - 成本中心 - 自定义组织 - 组织调整 - 编制规划 |
| 岗职 | 职位等级是用户属性字段。企业可根据组织架构实际情况来自定义管理职级信息。职务、职级、序列、职等、岗位 |
| 入职 | 员工在接受offer 后，正式加入公司的过程。这一过程通常包括多个步骤，确保新员工能够顺利融入组织。包括入职流程和入职信息完善 |
| 试用期 | 新员工在正式成为公司正式员工之前的一段评估期。试用期通常用于评估员工的工作表现和适应能力 |
| 异动 | 员工在组织内的各种人事变动。这些变动可以涉及：职位变动、部门调用、薪酬调整、工作地点变更 |
| 离职 | 员工与公司结束雇佣关系的过程。离职可以是自愿的（如辞职、退休）或非自愿的（如解雇、裁员） |
| 合同 | 合同是指雇主与员工之间达成的法律协议，明确双方的权利和义务 |
| 电子签 | 通过线上方式进行的签署协议或合同的过程，包含电子签模板和文件，具有法律效应 |
| 枚举常量 | 集合了各接口中用到的汇报关系、雇员类型、合同协议类型等枚举 |
| 基础数据 | 提供元数据、地理库、国籍、银行、货币等基础数据能力 |

# 常见问题

| 问题         | 解决方案          |
| --------- | --------------- |
|接口报错："TenantID xxx not found. Please cheeck if the tenant has activated this app" | 未开通飞书人事企业版 |
| 人员、入职都有自定义字段，如何传参？      | 参考 [自定义字段使用说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom-fields-guide)|
| 不同国家的姓名规则如何填写 | 参考 [飞书人事姓名填写规则](https://bytedance.larkoffice.com/wiki/Am1Zwgjj0imm8OkfICucBqRDnbh) |
| 不同国家的地址规则如何填写 | 参考[飞书人事地址填写规则](https://bytedance.larkoffice.com/wiki/GoL4wAKAXis3OWku72YcEjTxnKe?sheet=0sMjoP) |
