---
title: "部门更新接口支持清空「部门负责人」与「部门HRBP」"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/department-supervisor-and-department-hrbp-data-clearance
---
最后更新于 2023-07-18

# 部门更新接口支持清空「部门负责人」与「部门HRBP」
### 变更事项

当前通讯录v3版本下有两个更新部门的接口，在更新指定字段时，有如下表现
- [修改部门部分信息](http://open.feishu.cn/document/server-docs/contact-v3/department/patch)：leaders、department_hrbps传空数组，无法清空数据
- [更新部门全部信息](http://open.feishu.cn/document/server-docs/contact-v3/department/update)：leaders传空数组，无法清空数据

为了满足用户期望清空部门负责人、部门HRBP的诉求，并符合接口操作规范，我们将支持以上两个接口在leaders、department_hrbps传入空数组时，把已有的值清空

是否跟版：不跟版 

预计生效时间：2023-08-03 

### 潜在影响
若你的应用使用了通讯录v3版本的以上两个更新接口，但并没有适配字段会被清空的逻辑，在调用接口的时候leaders、department_hrbps这两个字段的数据可能会被清空

### 解决方案
对通讯录更新部门信息接口的调用方式进行调整，如果不希望清空，调用以上两个接口时，不要在leaders、department_hrbps传入空数组

**如何识别我使用的接口是否是v3版本？**

例如，通讯录OpenAPI [创建用户](http://open.feishu.cn/document/server-docs/contact-v3/user/create) 的HTTP请求地址为 <https://open.feishu.cn/open-apis/contact/v3/users>，其中的v3即标识v3版本。

### 联系方式
如需协助解决，可联系应用的开发人员或你使用的应用搭建平台。
