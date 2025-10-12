<!--
title: 打开工作台
id: 7215517409113243651
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-a-workplace
updatedAt: 1681981985000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-a-workplace
-->
# 打开工作台
::: note 
从飞书 6.1.0 版本开始支持。
:::
## 使用场景
打开工作台（定制工作台）或打开网页工作台的特定页面。

## 协议
[https://applink.feishu.cn/client/workplace/open](https://applink.feishu.cn/client/workplace/open)

##  参数

| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|**id** |    否      | 工作台 ID。仅定制工作台支持该字段，默认工作台不识别该字段<br>**如何获取 ID**：可前往 **[飞书管理后台](https://feishu.cn/admin) > 工作台 > 定制工作台**，点击指定工作台的 设置 进入设置页面；鼠标连续点击三次顶部的 **设置** 字样即可出现 ID，复制 ID 即可 | 
|**path** | 否 | 访问网页工作台某个具体页面。<br> path 参数将替换网页工作台 URL 的 path 部分。支持在 path 参数后携带自定义查询参数。 | 
|**path_android** | 否 | 访问 Android 端网页工作台某个具体页面。Android 端会优先使用该参数，如果该参数不存在，则会使用 path 参数 | 
|**path_ios** | 否 | 访问 iOS 端网页工作台某个具体页面。iOS 端会优先使用该参数，如果该参数不存在，则会使用 path 参数 | 
|**path_pc** | 否 | 访问 PC 端网页工作台某个具体页面。PC 端会优先使用该参数，如果该参数不存在，则会使用 path 参数 | 

:::html
<md-alert type="tip">
path 参数补充说明：：
- 仅**定制工作台 > 网页工作台**支持 path 参数。
- path 参数必须结合id参数一起使用。
- 链接中不支持井号（#），否则会导致最终的 URL 结构异常。
- 如果不需要填具体的 path 参数但需要自定义 Query 参数，推荐使用`path=`的写法。详情可参考使用示例4。
</md-alert>
:::

## 使用示例
- #### 打开工作台
`https://applink.feishu.cn/client/workplace/open`
  
- #### 打开指定的定制工作台
`https://applink.feishu.cn/client/workplace/open?id=1234567890`
  
- #### 打开网页工作台的一个页面，path 是 /a/b，参数是 xxd=123
`https://applink.feishu.cn/client/workplace/open?id=1234567890&path=/a/b&xxd=123`
  
- #### 打开网页工作台的一个页面，参数是 from=123
`https://applink.feishu.cn/client/workplace/open?id=1234567890&path=&from=123`
