<!--
title: 打开日历（支持定义视图和日期）
id: 6986995291975516164
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-calender/open-a-calendar-and-support-to-define-view-and-date
updatedAt: 1651824938000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-calender/open-a-calendar-and-support-to-define-view-and-date
-->
# 打开日历（支持定义视图和日期）
::: note 
从飞书 3.40.0 版本开始支持。
:::

## 使用场景
打开日历tab，并支持定义跳转到具体视图和具体日期。

## 协议
[https://applink.feishu.cn/client/calendar/view](https://applink.feishu.cn/client/calendar/view)

##  参数


| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|type | 否         | 视图类型，枚举值包括：<br> `day`：日视图 <br>`three_day`：三日视图，仅移动端支持<br> `week`：周视图，仅PC端支持 <br>  `month`：月视图<br> `meeting`：会议室视图，仅PC端支持 <br> `list`：列表视图，仅移动端支持| 
|date|否         |日期，{unixTime}格式|


## 使用示例
#### 1. 以“周视图”打开日历

[https://applink.feishu.cn/client/calendar/view?type=week](https://applink.feishu.cn/client/calendar/view?type=week)
#### 2. 以“会议室视图”打开日历

[https://applink.feishu.cn/client/calendar/view?type=meeting](https://applink.feishu.cn/client/calendar/view?type=meeting)

#### 3. 打开某日期日历并显示“日视图”

[https://applink.feishu.cn/client/calendar/view?date=1581999948&type=day](https://applink.feishu.cn/client/calendar/view?date=1581999948&type=day)

