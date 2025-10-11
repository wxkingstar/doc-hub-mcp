---
title: "关闭 Wi-Fi 模块"
doc_id: 45982
category_id: 100627
source_url: https://developer.work.weixin.qq.com/document/path/45982
---
[[toc]]

<!-- import stopWifi from @wecom/jssdk -->

## 旧版jweixin调用
### 示例代码
```javascript
wx.stopWifi({
 success: function(res) {
 console.log(res.errMsg)
 }
})
```
