<!--
title: 代码自动热重载
id: 7244488553757605889
fullPath: /uYjL24iN/uEzMzUjLxMzM14SMzMTN/development-assistant/hot-module-replacement
updatedAt: 1686837445000
source: https://open.feishu.cn/document/tools-and-sdks/development-tools/development-assistant/hot-module-replacement
-->
# 代码自动热重载
## 开启代码自动热重载
点击开发者工具右上角`详情` ，然后开启`启用代码自动热重载`开关

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86c23f86a35f5469c847cc9061b68e32_ODgP6f0gCS.png?height=1332&lazyload=true&width=812)

## 代码自动热重载效果

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/47891eb5d353f2772463899e2b4bfe79_n87fwrs7Ec.png?height=1578&lazyload=true&width=2742)

热重载开启后，会根据开发者修改的内容差异进行不同的模拟器更新逻辑：
- 修改当前页面 JS 会触发热重载，更新当前页面。
- 修改其他内容会触发增量更新，应用重新加载。

## 风险
当页面 JS 更新时，小程序如果存在部分有状态的存储数据，会存在不一致情况。