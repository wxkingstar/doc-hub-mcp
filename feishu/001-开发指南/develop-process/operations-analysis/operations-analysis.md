<!--
title: 运营分析
id: 7020725217254817796
fullPath: /tools-and-resources/operations-analysis/operations-analysis
updatedAt: 1712904891000
source: https://open.feishu.cn/document/develop-process/operations-analysis/operations-analysis
-->
# 运营分析

运营分析是开发者后台提供的应用质量看板中的一项功能。应用的所有者、管理员或者运营角色可以通过查看运营分析看板，获取应用的使用数据。看板数据每日定时更新并可视化呈现应用的关键指标，帮助管理员高效管理应用。

## 前提条件

- 你需要确保已选购支持运营分析的飞书版本。
   
   [飞书版本](https://www.feishu.cn/service)支持运营分析能力的情况如下：
   
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6617690bd968ca840379270efeb95061_xAAxz0rEnW.png?height=153&lazyload=true&maxWidth=750&width=873)

- 已开发企业自建应用，且用户身份是该应用的所有者、管理员或者运营。相关操作参见[企业自建应用的开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process)。
   
:::note
开发者后台自 2021 年 07 月 15 日开始统计应用的运营分析数据。
:::

## 功能简介

应用的运营分析看板包括 **应用分析**、**功能分析** 两个子模块，你可以分别查看应用的整体数据表现或某一特定功能的数据表现。

- 应用分析：用于查看应用整体的活跃情况，指标包括应用的活跃用户数、新增活跃用户数、累计活跃用户数。

- 功能分析：用于查看应用能力的具体指标，指标包括小程序、网页应用以及机器人能力相关的活跃用户数以及使用数据。

## 查看应用分析

1. 登录[开发者后台](https://open.feishu.cn/app)。

2. 在 **企业自建应用** 页签，找到指定应用并进入应用详情页。

3. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **运营分析**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bce12f6d37a22759a6c537c98a6b4d2b_KXrPzLHbul.png?height=1302&lazyload=true&maxWidth=600&width=2872)

4. 在 **应用分析** 页面，查看以下数据看板。
    
    说明：
    
    - 数据看板每日 10:00 左右更新前一日数据。
    
    - 仅展示线上已开启的应用能力的统计数据。
    
    - 各项统计指标的详细说明可参见[统计指标说明](#统计指标说明)。
    
    看板介绍：
    
    - **应用分析** 看板：选择指定日期查看 **应用活跃用户数**、**应用新增活跃用户数**、**应用累计活跃用户数**，各条数据指标包含较前一日的增减比。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/93899e8747cb848bff82954489163f5a_rEF5dQDmiV.png?height=784&lazyload=true&maxWidth=600&width=2366)

    - **应用数据** 看板：查看指定时间段内 **应用活跃用户数**、**应用新增活跃用户数**、**应用累计活跃用户数** 的数据趋势图。
        
        
        在页面右侧点击 **导出数据**，可将应用数据导出至本地。
        
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff482848037716e2eaa5b2c31b5532fd_tGBamXmo8e.png?height=1290&lazyload=true&maxWidth=600&width=2344)


## 查看功能分析

1. 登录[开发者后台](https://open.feishu.cn/app)。

2. 在 **企业自建应用** 页签，找到指定应用并进入应用详情页。

3. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **运营分析**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bce12f6d37a22759a6c537c98a6b4d2b_93XkDTaL9f.png?height=1302&lazyload=true&maxWidth=600&width=2872)

4. 在 **功能分析** 页面，查看以下数据看板。
    
    说明：
    
    - 数据看板每日 10:00 左右更新截至两日前的数据。
    
    - 仅展示线上已开启的应用能力的统计数据，未开启的能力则没有数据。
    
    - 各项统计指标的详细说明可参见[统计指标说明](#统计指标说明)。
    
    看板介绍：
    
    - **功能分析** 看板：选择指定日期，以及指定应用能力，查看功能使用情况。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fdff0abbf1253eddd195d7a203985baf_oxhpTmkX5L.png?height=836&lazyload=true&maxWidth=600&width=2350)

    - **应用数据** 看板：查看指定时间段内，指定应用能力的使用数据趋势图。
      
      
      在页面右侧点击 **导出数据**，可将应用数据导出至本地。
      
      
      ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/47132a3e7570d3ee2eeaca5a84c391ac_SEuud4XCFF.png?height=1286&lazyload=true&maxWidth=600&width=2314)


## 统计指标说明

运营分析看板中支持查看的统计指标详细说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">指标</md-th>
<md-th style="width:70%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>应用活跃用户数</md-td>
<md-td>

满足以下操作之一的用户，即视为应用的活跃用户：

- 打开小程序。
- 打开 H5。
- 给机器人发消息。
- 阅读机器人消息。

单个统计时间周期内按用户 ID 去重计数，以上所有条件合并去重。

</md-td>
</md-tr>

<md-tr>
<md-td>应用新增活跃用户数</md-td>
<md-td>在统计周期内，首次访问应用的唯一用户数。</md-td>
</md-tr>

<md-tr>
<md-td>应用累计活跃用户数</md-td>
<md-td>历史所有使用过应用的唯一用户数。</md-td>
</md-tr>

<md-tr>
<md-td>小程序活跃用户数</md-td>
<md-td>在统计周期内，打开小程序的唯一用户数，按用户 ID 去重。</md-td>
</md-tr>

<md-tr>
<md-td>网页活跃用户数</md-td>
<md-td>

在统计周期内，打开网页应用的唯一用户数，按用户 ID 去重。

只统计飞书内 webview 容器部分的数据，不包含三方浏览器容器的内容。

</md-td>
</md-tr>


<md-tr>
<md-td>机器人活跃用户数</md-td>
<md-td>

满足以下操作之一的用户，即视为机器人的活跃用户：

- 已读机器人消息。
- 主动给机器人发消息。

单个统计周期内按照用户 ID 合并去重。

</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


## 常见问题

### 我是企业管理员，能否查看企业内已安装应用的所有数据？

答：管理后台提供了所有应用的数据看板，详情参见[管理员如何查看应用数用数据](https://www.feishu.cn/hc/zh-CN/articles/436290455066-%E7%AE%A1%E7%90%86%E5%91%98%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8%E6%95%B0%E6%8D%AE)。

### 我想查看应用在不同部门的使用情况应该怎么办？

答：通过调用[获取应用概览接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application-app_usage/overview)进行查询。

### 我的企业有自己的数据平台，是否可以把应用使用数据集成进来？

答：通过调用[获取应用概览接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application-app_usage/overview)可以获取应用的活跃数据，并集成到企业自己的数据平台中。