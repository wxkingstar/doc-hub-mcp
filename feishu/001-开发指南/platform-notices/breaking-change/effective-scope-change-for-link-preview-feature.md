<!--
title: 自建应用链接预览功能生效范围变更
id: 7460401227005247489
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/effective-scope-change-for-link-preview-feature
updatedAt: 1737017967000
source: https://open.feishu.cn/document/platform-notices/breaking-change/effective-scope-change-for-link-preview-feature
-->
# 自建应用链接预览生效范围变更
### 变更事项
为了降低链接预览功能被恶意使用的风险，减少影响范围，我们将链接预览功能的生效范围从“**对租户内所有用户生效**”调整为“**仅对应用可见范围内的用户生效**”


是否跟随客户端版本：不跟版<br> 
生效时间：
- 2025-01-17（对未开启链接预览能力的应用）
- 2025-03-01（对存量已开启链接预览功能的应用）<br> 

### 潜在影响
若你的应用开启并使用了链接预览功能，请尽快将应用的可用范围同步调整至你希望生效的范围，否则应用可用范围外的用户收到相关链接时将不会渲染预览效果


### 解决方案
将应用的可用范围调整至你希望生效链接预览的范围，如特定用户、部门或全租户。<br>

若你未能及时确认并调整，生效时间到期后，超出应用可用范围外的用户的链接预览体验将降级。<br>
我们预计在 **2025年1月17日** 完成升级，请于 **2025年3月1日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如有疑问或需协助，请联系[客服支持](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。