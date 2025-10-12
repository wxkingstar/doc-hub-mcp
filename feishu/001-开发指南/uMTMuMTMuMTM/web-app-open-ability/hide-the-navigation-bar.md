<!--
title: 隐藏导航栏
id: 7246348078575501340
fullPath: /uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/hide-the-navigation-bar
updatedAt: 1723540911000
source: https://open.feishu.cn/document/develop-web-apps/web-app-open-ability/hide-the-navigation-bar
-->
# 隐藏导航栏

该能力用于控制是否在页面顶部隐藏导航栏，顶部状态栏不在控制范围内，遵循系统默认表现，iOS状态栏与内容视图重叠，Android状态栏在内容视图上方。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/651461bc3aae92e348408135026b88f8_UokRZlIiHS.PNG?height=2532&lazyload=true&maxWidth=300&width=1170)

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
      <md-td><md-version>V6.3</md-version></md-td>
      <md-td><md-version>V6.3</md-version></md-td>
      <md-td>**X**</md-td>
     <md-td><md-preview-app type="webApp" disable="true" fontSize="14">预览</md-preview-app></md-td> 
</md-tr>  
</md-tbody>
</md-table>
:::


## 使用方式

是否隐藏导航栏的功能基于 web-meta 实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力与使用方式。

- 如果不通过 web-meta 配置该功能，则默认显示导航栏。

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
                固定值：showNavBar
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
                期望设定的导航栏效果。

**可选值**：
- `true`: 显示导航栏。
              
- `false`: 隐藏导航栏。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


## 示例配置

### 示例一：通过 \<meta\> 标签定义 page-meta

该配置方式仅针对当前页面生效，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="showNavBar" content="false" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

### 示例二：通过 URL 参数定义 page-meta

该配置方式仅针对当前页面生效。

```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22showNavBar%22%3A%22false%22%7D%7D
```

### 示例三：通过 URL 参数定义 view-meta

该配置方式针对整个应用生效。

```
https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22showNavBar%22%3A%22false%22%7D%7D
```