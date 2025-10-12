<!--
title: 针对「批量获取用户信息」和「批量获取部门信息」接口新增单次最大数量限制50
id: 7255604996884348930
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/maximum-number-limit-for-batch-obtain-information-interfaces
updatedAt: 1689329258000
source: https://open.feishu.cn/document/platform-notices/breaking-change/maximum-number-limit-for-batch-obtain-information-interfaces
-->
# 针对「批量获取用户信息」和「批量获取部门信息」接口新增单次最大数量限制50
### 变更事项

为了提升「批量获取用户信息」和「批量获取部门信息」接口的性能和稳定性，针对接口新增单次最大请求数量50的限制。

预计生效时间：2023-08-02 10:00<br>

### 相关接口
* [批量获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch)
* [批量获取部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/batch)


### 潜在影响
若你的应用使用了「批量获取用户信息」和「批量获取部门信息」这两个OpenAPI接口，请尽快确认参数入参数量是否符合限制要求。<br>
若你未能及时确认并调整，接口入参限制生效后，可能会导致接口调用报错。<br>

### 解决方案
如果「批量获取用户信息」和「批量获取部门信息」接口调用数量无限制或超过限制，请限制单次调用50个ID并采用分批调用的方式适配。

### 联系方式
如需适配协助，请联系技术支持