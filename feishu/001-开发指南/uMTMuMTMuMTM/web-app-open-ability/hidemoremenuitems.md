<!--
title: 配置更多菜单中的功能
id: 7148753452922273795
fullPath: /uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/hidemoremenuitems
updatedAt: 1750674897000
source: https://open.feishu.cn/document/client-docs/h5/web-app-open-ability/hidemoremenuitems
-->
# 配置更多菜单中的功能

在网页更多菜单面板中，支持配置部分功能入口的启停状态，即是否置灰功能按钮。例如，屏蔽更多菜单转发及复制链接功能。


![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/0bd284e04808eb22df5bad638ead8469_xZ6f9lMgrv.PNG?height=2436&lazyload=true&maxWidth=300&width=1125)

## 支持说明

当前能力在不同飞书客户端的版本支持情况。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">是否需要鉴权</md-th>
      <md-th style="width: 20%;">Android</md-th>
       <md-th style="width: 20%;">iOS</md-th>
      <md-th style="width: 20%;">PC</md-th>
      <md-th style="width: 20%;">预览效果</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>


    <md-tr>
      <md-td>不需要</md-td>
      <md-td><md-version>V5.27</md-version></md-td>
      <md-td><md-version>V5.27</md-version></md-td>
      <md-td>**X**</md-td>
     <md-td><md-preview-app type="webApp" disable="true" fontSize="14">预览</md-preview-app></md-td> 
</md-tr>  
</md-tbody>
</md-table>
:::

## 注意事项

目前仅支持页面级别的配置，每次重新加载页面都会读取最新的配置并应用。

## 使用方式

配置更多菜单中的功能基于 web-meta 能力实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力与使用方式。

- 如果不通过 web-meta配置该功能，则应用在默认情况下展示所有菜单项。

- 如果你希望在网页未加载完成之前就配置某些菜单不可用，请使用web-meta 的 page-meta URL 方式进行配置。 
:::

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">
                名称
            </md-th>
            <md-th style="width: 15%;">
                数据类型
            </md-th>
            <md-th style="width: 15%;">
                必填
            </md-th>
            <md-th style="width: 45%;">
                描述
            </md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                name
            </md-td>
            <md-td>
                String
            </md-td>
            <md-td>
                是
            </md-td>
            <md-td>
                固定值：hideMenuItems
            </md-td>
        </md-tr>
    </md-tbody>
  	<md-tbody>
        <md-tr>
            <md-td>
                content
            </md-td>
            <md-td>
                String
            </md-td>
            <md-td>
                是
            </md-td>
            <md-td>
期望屏蔽菜单界面功能入口的唯一标识。详情可参见下文 **支持置灰的菜单功能项** 表。
              
格式示例："sendToChat,shareViaOtherApp"。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

**支持置灰的菜单功能项**

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 30%;">
                菜单项标识
            </md-th>
            <md-th style="width: 30%;">
                菜单项名称
            </md-th>
            <md-th style="width: 40%;">
                菜单项功能描述
            </md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                sendToChat
            </md-td>
            <md-td>
                发送至会话
            </md-td>
            <md-td>
                分享当前网页到会话。
            </md-td>
        </md-tr>
    </md-tbody>
  	<md-tbody>
        <md-tr>
            <md-td>
                shareViaOtherApp
            </md-td>
            <md-td>
                微信
            </md-td>
            <md-td>
                分享网页链接至微信等三方应用。
            </md-td>
        </md-tr>
    </md-tbody>
  	<md-tbody>
        <md-tr>
            <md-td>
                copyLink
            </md-td>
            <md-td>
                复制链接
            </md-td>
            <md-td>
                复制当前页面链接到系统剪贴板。
            </md-td>
        </md-tr>
    </md-tbody>
  	<md-tbody>
        <md-tr>
            <md-td>
                openInBrowser
            </md-td>
            <md-td>
                浏览器打开
            </md-td>
            <md-td>
                在外部浏览器中打开当前页面。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

## 示例配置

基于 web-meta 能力的不同定义方式，示例配置如下。

### 示例一：通过 \<meta\> 标签定义 page-meta

该配置方式仅针对当前页面生效，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="hideMenuItems" content="sendToChat,shareViaOtherApp" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

### 示例二：通过 URL 参数定义 page-meta

该配置方式仅针对当前页面生效。

```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22hideMenuItems%22%3A%22sendToChat%2CcopyLink%22%7D%7D
```

:::note
该功能暂不支持通过 web-meta 的 view-meta URL 方式实现。
:::
