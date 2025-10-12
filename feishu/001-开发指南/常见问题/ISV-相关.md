---
title: "ISV 相关"
source_url: https://open.feishu.cn/document/faq/questions-related-to-isv
last_remote_update: 2024-07-19
last_remote_update_timestamp: 1721355376000
---
最后更新于 2024-07-19

# ISV相关
**1. 可以删除灰度企业吗？**

答：可以“移除灰度企业”，具体参考[《移除灰度企业》文档](https://open.feishu.cn/document/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN#%E7%A7%BB%E9%99%A4%E7%81%B0%E5%BA%A6%E4%BC%81%E4%B8%9A)。
<br>
<br>
**2. 已修改应用名，为什么不生效呢？**

答：在应用全量发布之后，应用名会相应修改。生效时间或有一定延迟，请稍作等待。
<br>
<br>
**3. ==app_ticket==的有效期是多久？**

答：
  1. ==app_ticket==有效期 3 小时。请注意回调中的 ts 时间戳不是有效期起始计算时间，只是回调发送时间；
  2. 你可以[主动触发](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_ticket_resend)返回新的 ==app_ticket==。主动触发后，需要等待最长 2 分钟，即可收到新的 ==app_ticket==；
  3. 开放平台会在你的==app_ticket==过期之前，将新的 ==app_ticket== 推送给你。
  4. 若有多个在有效期内的==app_ticket==，则都可使用。 
<br>
<br>

**4. 为什么在后台申请发布失败？**

答：检查开发者后台-应用发布-上线清单是否全部完成，没有完成则没法发布。
<br>
<br>
**5. 为什么设置灰度企业之后没有立即在对应的企业的工作台看到对应的应用？**

答：和测试企业不一样，灰度企业是走完整流程的，需要到[应用中心](https://app.feishu.cn/)中找到该应用，并完成安装后才能在工作台看到并使用
