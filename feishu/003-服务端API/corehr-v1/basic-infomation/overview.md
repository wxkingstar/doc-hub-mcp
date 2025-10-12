<!--
title: 基础数据概述
id: 7457127265846476802
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/basic-infomation/overview
updatedAt: 1736253798000
source: https://open.feishu.cn/document/corehr-v1/basic-infomation/overview
-->
# 基础数据概述


基础数据主要向开发者提供飞书人事系统基础字段以及静态数据信息。
## 相关概念和对象

基础数据主要分为两部分接口，为开发者提供不同能力。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5785dfe9882401c0fd062d79553b582d_5IH3TKvr2g.png?height=528&lazyload=true&width=1896)

### 元数据相关接口

元数据相关接口为获取飞书人事对象列表以及具体字段（如下图）的方式，通过元数据相关接口可以实现字段的查询，修改枚举等工作。详细方式参见[如何通过 OpenAPI 维护自定义字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/how-to)。同时飞书人事大部分的对象都是基于元数据搭建的，因此该接口会返回所有租户内部对象的信息，不仅仅是人员档案配置的信息。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/750dad59883c6e2c1ebcde9c4871d3c4_HnLUPEbdS0.png?height=2486&lazyload=true&width=3762)
### 其他基础数据相关接口

除了元数据之外目前系统开发了一些基础数据的查询能力。