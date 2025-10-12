<!--
title: 用户反馈
id: 7040060177420861443
fullPath: /tools-and-resources/userfeedback
updatedAt: 1690424659000
source: https://open.feishu.cn/document/develop-process/operations-analysis/userfeedback
-->
# 用户反馈

飞书开放平台为企业自建应用提供了反馈入口，通过接收来自飞书客户端的用户反馈，使应用管理员可以及时发现应用存在的问题以及有价值的用户建议，是提升应用质量的重要途径。

## 功能简介

:::note
企业自建应用和商店应用均支持用户反馈功能。
:::

以网页应用为例，当用户在飞书客户端使用应用时，如果遇到功能 Bug、操作体验不佳或者对操作逻辑产生疑问，则可以通过右上角的反馈渠道，提交故障反馈或者产品建议，后续由应用管理员接收并处理用户反馈。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/47fa9b7be6ec2520c2330ff7daaa3b70_x9D1jw5AWt.png?height=1618&lazyload=true&maxWidth=700&width=2870)


## 功能特性

- 固定反馈入口，按需快捷反馈
    
    对于使用者来说，通过一个反馈入口，即可提交所有应用的反馈意见。无论是哪个应用，用户都能根据自己的需要来反馈问题寻求帮助，业务运转更流畅。

- 收集用户声音，降低运营成本
    
    对于开发者来说，这一功能提供了一个稳定的用户反馈收集渠道。开发者可以查看用户反馈的具体内容以及收集情况的变化趋势，应用运营更高效。

- 关联日志工具，轻松定位问题
    
    反馈功能与日志检索功能紧密关联。在开发者后台的用户反馈面板中，开发者只需点击对应的日志信息，就能轻松查看用户反馈故障前后的日志情况，无需多余沟通便可快速定位问题。

## 企业自建应用

企业自建应用仅支持 **反馈列表** 模式，该模式是指应用收到的用户反馈均会展示在开发者后台的用户反馈列表中，应用管理员需要在列表中排查并处理反馈。

### 处理用户反馈

当收到用户反馈后，应用开发者需要前往应用管理页面查看并处理用户反馈。

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c6214dda928c8d8287e195b1108bc47_5WCL4NXwoS.png?height=1278&lazyload=true&maxWidth=600&width=2882)

3. 查看并处理故障反馈。
    
    1. 在 **故障反馈** 页面查看收到的反馈，你可以设置反馈时间、故障类型等过滤条件进行检索。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5488cf63e655dfb0633251dcc5e80f3_GaiFAvkhf5.png?height=1092&lazyload=true&maxWidth=600&width=2316)

    2. 在具体的反馈中，通过 **服务端日志**、**客户端日志** 入口，排查故障原因。
        
       
        日志数据将在应用的 **运营监控** > **日志检索** 功能中查看，该功能的介绍参见[日志检索](/ssl:ttdoc/tools-and-resources/open-api-log-query)。
        
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f4a1caf83d0c2c90a50e96858483cda_jvPjVqBRZV.png?height=430&lazyload=true&maxWidth=600&width=2258)

    3. 选中反馈左侧的复选框，根据实际处理情况，将反馈标记为处理中、已处理或者已关闭。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a06ab6549d8f52c878caa02ae9ebbeb5_m2sL4Al8LQ.png?height=1014&lazyload=true&maxWidth=600&width=2274)

4. 查看并处理产品建议。
    
    1. 在 **产品建议** 页面查看收到的建议，你可以设置反馈时间、处理状态等过滤条件进行检索。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/086d5877031f092b084053543c5d741b_aVHRyYdHk9.png?height=1060&lazyload=true&maxWidth=600&width=2300)

    2. 选中建议左侧的复选框，根据实际处理情况，将建议标记为处理中、已处理或者已关闭。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c3fa82d426f4a0e7a23c61673f333d5_94CBONgLvj.png?height=1062&lazyload=true&maxWidth=600&width=2270)


### 查看反馈数据趋势

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c6214dda928c8d8287e195b1108bc47_9yNnnJjWGl.png?height=1278&lazyload=true&maxWidth=600&width=2882)

3. 在 **反馈统计** 页签，可查看指定时间段、指定反馈类型、指定处理状态的数据统计趋势。
    
:::note
在页面右侧点击 **导出数据**，可将用户反馈数据导出至本地。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fc2be478c9b6a18ebedc4c9b8dc2af2e_dY7UltgBfM.png?height=1230&lazyload=true&maxWidth=600&width=2272)


### 设置反馈的推送规则

通过设置用户反馈的推送规则，可以实现定时向指定成员发送用户反馈的数据统计信息，便于处理人及时接收故障反馈或产品建议、及时处理高频用户反馈。

1. 登录[开发者后台](https://open.feishu.cn/app)，找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。

3. 点击 **反馈统计** 页签，在页签底部找到 **推送规则** 区域。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/34a5a771bc8271bfec7cd582f53c50a9_kOVwK4KomL.png?height=1244&lazyload=true&maxWidth=600&width=2882)

    平台提供了四种推送规则，你可以查看 **推送类型**、**告警推送设置** 列的信息，以确认规则内容。
    
    - 仅当打开规则左侧的开关时，规则生效。
    
    - 在 **操作** 列点击 **编辑**，可调整 **推送接收人**。其中：
        
        - 在编辑 **推送类型** 为 **新增反馈** 的规则时，还需要设置 **新增反馈类型**。
            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ebe341518710339ca8d1a599aaba7e8b_4kMYWJ0neh.png?height=1230&lazyload=true&maxWidth=600&width=2310)

        - 在编辑 **推送类型** 为 **自定义** 的规则时，还需要设置 **推送规则**。
            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/246c5fe98b54abe4e4e9738808c6ca96_3TiiJy1dEn.png?height=1212&lazyload=true&maxWidth=600&width=2270)

    - 在 **操作** 列点击预览，可查看用户反馈的消息通知示例效果。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/262a765150c4725f66a43e27c04a7828_1eTdqalNvn.png?height=1132&lazyload=true&maxWidth=600&width=2292)


## 商店应用

### 选择反馈处理模式

商店应用支持选择反馈处理模式，如果你管理的是商店应用，则可以为该应用选择反馈处理模式。

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定的商店应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。

3. 在页面顶部，选择反馈处理模式。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/11c8fa5e102da9d8b33750abef08ce44_htWmJaN3sv.png?height=1278&lazyload=true&maxWidth=600&width=2882)

    可选择模式说明：
    
    - **反馈列表** 模式：应用收到的用户反馈均会展示在开发者后台的用户反馈列表中，应用管理员需要在列表中排查并处理反馈。
    
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4683c30cea7d6ab7ab794d569718cff6_2xTdzak9D0.png?height=1270&lazyload=true&maxWidth=600&width=2882)

    - **飞书服务台** 模式：应用收到用户反馈后，飞书服务台会将对应的用户以及应用内预设的服务台管理员拉进一个共同群组，在群组内由管理员和用户实时沟通并处理反馈。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/825746fdc015773892d7b3fcedc45641_pe0cXWBicN.png?height=1264&lazyload=true&maxWidth=600&width=2882)


### 在服务台处理用户反馈

:::note
该操作适用于处理模式为 **飞书服务台** 的商店应用。
:::

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定的商店应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。

3. 在 **服务台管理员** 区域点击 **添加管理员**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c58be33d1308a4ad1b976d7f5f70e795_4oOgddn9jx.png?height=1270&lazyload=true&maxWidth=600&width=2882)

4. 从应用协作人员中选择成员添加为管理员，并点击 **确认**。
    
    添加成功后，在页面列表会展示管理员信息。
    
:::note
在右侧点击 **进入飞书服务台**，可前往服务台查看服务台处理用户反馈的历史记录。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d6f4f0fb1ae3ca48aa62946c77490a53_UP6G3m9Bll.png?height=512&lazyload=true&maxWidth=600&width=2294)

后续当用户在飞书客户端的应用内提交反馈时，飞书服务台将会自动拉起群组进行实时沟通。
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7916e353fb5f2be18a1e8fce7bd08e69_h6PnCu6e22.png?height=1518&lazyload=true&maxWidth=600&width=2034)


### 在反馈列表中处理用户反馈

:::note
该操作适用于处理模式为 **反馈列表** 的商店应用。
:::

当收到用户反馈后，应用开发者需要前往应用管理页面查看并处理用户反馈。

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c6214dda928c8d8287e195b1108bc47_aZKKcDrWkn.png?height=1278&lazyload=true&maxWidth=600&width=2882)

3. 查看并处理故障反馈。
    
    1. 在 **故障反馈** 页面查看收到的反馈，你可以设置反馈时间、故障类型等过滤条件进行检索。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5488cf63e655dfb0633251dcc5e80f3_e4xSkM5JBk.png?height=1092&lazyload=true&maxWidth=600&width=2316)

    2. 在具体的反馈中，通过 **服务端日志**、**客户端日志** 入口，排查故障原因。
        
        
        日志数据将在应用的 **运营监控** > **日志检索** 功能中查看，该功能的介绍参见[日志检索](/ssl:ttdoc/tools-and-resources/open-api-log-query)。
        
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f4a1caf83d0c2c90a50e96858483cda_S171iOrtl5.png?height=430&lazyload=true&maxWidth=600&width=2258)

    3. 选中反馈左侧的复选框，根据实际处理情况，将反馈标记为处理中、已处理或者已关闭。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a06ab6549d8f52c878caa02ae9ebbeb5_1u7WRtKv2z.png?height=1014&lazyload=true&maxWidth=600&width=2274)

4. 查看并处理产品建议。
    
    1. 在 **产品建议** 页面查看收到的建议，你可以设置反馈时间、处理状态等过滤条件进行检索。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/086d5877031f092b084053543c5d741b_rAe9LB8FUf.png?height=1060&lazyload=true&maxWidth=600&width=2300)

    2. 选中建议左侧的复选框，根据实际处理情况，将建议标记为处理中、已处理或者已关闭。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c3fa82d426f4a0e7a23c61673f333d5_2tqazqhzhd.png?height=1062&lazyload=true&maxWidth=600&width=2270)


### 查看反馈数据趋势

:::note
该操作适用于处理模式为 **反馈列表** 的商店应用。
:::

1. 登录[开发者后台](https://open.feishu.cn/app)。找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c6214dda928c8d8287e195b1108bc47_bHgu2fAhmm.png?height=1278&lazyload=true&maxWidth=600&width=2882)

3. 在 **反馈统计** 页签，可查看指定时间段、指定反馈类型、指定处理状态的数据统计趋势。
    
:::note
在页面右侧点击 **导出数据**，可将用户反馈数据导出至本地。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fc2be478c9b6a18ebedc4c9b8dc2af2e_2E6wycBsSK.png?height=1230&lazyload=true&maxWidth=600&width=2272)


### 设置反馈的推送规则

:::note
该操作适用于处理模式为 **反馈列表** 的商店应用。
:::

通过设置用户反馈的推送规则，可以实现定时向指定成员发送用户反馈的数据统计信息，便于处理人及时接收故障反馈或产品建议、及时处理高频用户反馈。

1. 登录[开发者后台](https://open.feishu.cn/app)，找到指定应用并进入应用详情页。

2. 在左侧导航栏，选择 **运营监控** > **应用质量看板** > **用户反馈**。

3. 点击 **反馈统计** 页签，在页签底部找到 **推送规则** 区域。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/34a5a771bc8271bfec7cd582f53c50a9_zaMNUlYOJh.png?height=1244&lazyload=true&maxWidth=600&width=2882)

    平台提供了四种推送规则，你可以查看 **推送类型**、**告警推送设置** 列的信息，以确认规则内容。
    
    - 仅当打开规则左侧的开关时，规则生效。
    
    - 在 **操作** 列点击 **编辑**，可调整 **推送接收人**。其中：
        
        - 在编辑 **推送类型** 为 **新增反馈** 的规则时，还需要设置 **新增反馈类型**。
            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ebe341518710339ca8d1a599aaba7e8b_kuHtEdcrqx.png?height=1230&lazyload=true&maxWidth=600&width=2310)

        - 在编辑 **推送类型** 为 **自定义** 的规则时，还需要设置 **推送规则**。
            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/246c5fe98b54abe4e4e9738808c6ca96_xYQX2BjcV7.png?height=1212&lazyload=true&maxWidth=600&width=2270)

    - 在 **操作** 列点击预览，可查看用户反馈的消息通知示例效果。
       
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/262a765150c4725f66a43e27c04a7828_LF3OVFonlj.png?height=1132&lazyload=true&maxWidth=600&width=2292)


## 常见问题

### 应用的使用者如何提交用户反馈？

以一个简单的网页应用为例，介绍应用的使用者如何提交反馈。

#### 桌面端

1. 登录飞书客户端。

2. 在工作台打开指定的网页应用。

3. 在应用右上角的更多图标内，点击 **反馈**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9e3b8c6ca0638698240c40f46976a412_TzubVex0Gb.png?height=1122&lazyload=true&maxWidth=600&width=2878)

4. 在反馈对话框，根据实际情况自行选择 **故障反馈** 或 **产品建议**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/719ae6658132e89cfb03c0b80b8d6898_vBbbpQRdy2.png?height=1606&lazyload=true&maxWidth=600&width=2870)

    - 如果选择 **故障反馈**，则需要填写故障的类型、时间、描述、截图以及是否同意上传应用运行日志，并点击 **提交**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/04ac058da953ef630c818b500de153bc_FkjdCtzln4.png?height=1578&lazyload=true&maxWidth=600&width=2848)

    - 如果选择 **产品建议**，则需要填写建议内容与截图，并点击 **提交**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/01e0924f67cd8fb1ecf22df50e51b9fe_bXEJqIr1tW.png?height=1596&lazyload=true&maxWidth=600&width=2874)


#### 移动端

1. 登录飞书客户端。

2. 在工作台打开指定的网页应用。

3. 点击页面右上角的更多按钮，并选择 **反馈**。
    
    操作流程如下图所示，你可以根据实际情况选择 **故障反馈** 或者 **产品建议**。
    
    - 选择 **故障反馈**，则需要填写故障的类型、时间、描述、截图以及是否同意上传应用运行日志，并点击 **提交**。
    
    - 选择 **产品建议**，则需要填写建议内容与截图，并点击 **提交**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/82b0be6f2fb12711ebde5fd7dc9012f9_bXSNsLpMdY.png?height=919&lazyload=true&maxWidth=800&width=1640)