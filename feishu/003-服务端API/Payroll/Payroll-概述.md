---
title: "Payroll 概述"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/payroll-v1/overview
last_remote_update: 2025-07-14
last_remote_update_timestamp: 1752482489000
---
最后更新于 2025-07-14

# Payroll OpenAPI概述
## 业务介绍
Payroll 在整个飞书人事中属于薪酬管理的业务板块，为企业提供提供算薪、发薪、个税相关的系统化解决方案，致力于帮助客户提升算/发薪效率，保障算薪数据可信、过程合规、结果准确、发放及时。
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9fa0fe932c7bc3ef7a22bae24ef508f8_kTfPPMTnED.png?lazyload=true&width=3240&height=1550)

## 名词解释
| 名词         | 解释        | 
| --------- | --------------- |
|算薪项 | 算薪项是在薪资管理体系中，用于核算员工薪酬的各项独立标准化项目。这些项目依据企业薪资政策、劳动合同条款及国家 / 地区法律法规设定，涵盖收入、扣除、福利等不同维度，每个项目均需明确计算规则、数据来源及合规依据，以确保薪资核算的准确性、合规性和透明度。|
|算薪日历|在Payroll领域中用于管理周期性算发薪的周期，通常1个日历由多个日历期间组成，每个期间包含了这个算薪期间的一些关键日期信息（名单收集截止日、发薪日、算薪起止日等）。|
|薪资组|根据特定规则将员工分组，以便差异化处理薪资计算、发放和管理的逻辑单元，具有时间轴概念。|
|算薪规则|算薪规则由一组算薪规则项组成，算薪规则项可以直接添加「算薪项目」并配置规则（自动提取、人工导入和公式计算）|
|算薪方案|由算薪规则、算薪日历、算薪规则组成1个算薪方案，描述在什么时候、给哪些人、用什么规则算薪|
|算薪活动|「算薪活动」是「算薪方案」在算薪周期的实例化，通过算薪活动来进行算薪的流程和数据管理。|
|外部数据源|算薪活动除了消费飞书人事一体化数据外用于算薪外，还提供OpenAPI使得客户可以通过API写入算薪数据，用于算薪。|
|填报模板|Payroll除了支持从数据源自动同步数据用于算薪外，也支持客户支持定义模版，数据收集，审批后直接同步算薪。填报模板用于管理需填报项的一些信息。|
|填报活动|填报活动是一个周期的具体填报实例，承载数据收集、核对审批等流程。|
|成本分摊方案|定义了成本分摊的计算逻辑。包括：成本项与算薪项字段映射关系、分摊时数据汇总维度、算薪项指定成本中心归属、规则适用范围等|
|成本分摊报表|基于成本分摊方案，将算薪数据按照财务所需的维度和项目进行统计，生成财务所需的报表，报表的数据明细支持按照维度组合进行汇总。|
|发薪活动|支持发薪专员通过创建发薪活动关联多算薪活动、获取名单数据并提交审批，最终完成薪资发放。|
## 业务流程图
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7d22661020cae52f893c94d8ec21671a_ZxMniTyzLU.png?lazyload=true&width=7821&height=4243)
## API接入流程
Pyyroll API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](https://open.larkoffice.com/document/ukTMukTMukTM/uITNz4iM1MjLyUzM)。
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_rH5qZWWXep.png?lazyload=true&width=2276&height=214)
## 数据模型
### 算薪模型
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7759acbe5299668989f01121d89f7e2a_VH2k5JvaHJ.png?lazyload=true&width=1931&height=1672)
### 发薪&个税模型
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/70e6ae43da4c2109351e11ce6cee6246_8yCb0i51W7.png?lazyload=true&width=3918&height=3988)
### 成本分摊模型
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bc7b00b8678b8a6c63b060932a147e6_0LlfDjq2ci.png?height=2318&lazyload=true&width=2536)
