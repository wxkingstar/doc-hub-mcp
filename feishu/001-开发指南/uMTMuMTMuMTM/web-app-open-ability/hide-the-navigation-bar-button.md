<!--
title: 隐藏导航栏按钮
id: 7246348078575517724
fullPath: /uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/hide-the-navigation-bar-button
updatedAt: 1692868849000
source: https://open.feishu.cn/document/develop-web-apps/web-app-open-ability/hide-the-navigation-bar-button
-->
# 隐藏导航栏按钮

该能力支持隐藏页面顶部左右两侧的导航栏按钮。

- showNavLBarBtn 参数用于隐藏左侧导航按钮。


	![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/371efce4111838ff7930a912e47a4f40_5VSVFOOp1w.PNG?height=2532&lazyload=true&maxWidth=300&width=1170)

- showNavRBarBtn 参数用于隐藏右侧导航按钮。

	![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca1a1ed9f9678dc8a7daf05aea94da6f_b6Hx3iSC9D.PNG?height=2532&lazyload=true&maxWidth=300&width=1170)



## 隐藏左侧导航按钮


### 注意事项

隐藏左侧导航按钮的能力仅针对主页生效。如果进入次级页面，则会恢复显示，避免使用者误认为网页应用无法后退或关闭。

### 支持说明

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


### 使用方式

隐藏左侧导航按钮基于 web-meta 实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力与使用方式。

- 如果不配置该参数，则默认显示左侧导航按钮。
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
                固定值：showNavLBarBtn
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
                期望设定的左侧导航按钮效果。

可选值：
              
- `true`: 显示左侧导航按钮。

- `false`: 隐藏主页的左侧导航按钮。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


### 示例配置

:::note
隐藏左侧导航按钮的能力仅针对主页生效，因此 page-meta 与 view-meta URL 方式效果一致，均仅针对主页生效。
:::

#### 示例一：通过 \<meta\> 标签定义 page-meta

引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="showNavLBarBtn" content="false" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

#### 示例二：通过 URL 参数定义 page-meta


```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22showNavLBarBtn%22%3A%22false%22%7D%7D
```

#### 示例三：通过 URL 参数定义 view-meta


```
https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22showNavLBarBtn%22%3A%22false%22%7D%7D
```


## 隐藏右侧导航按钮


### 支持说明

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


### 使用方式

隐藏右侧导航按钮基于 web-meta 实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力与使用方式。

- 如果不配置该参数，则默认显示右侧导航按钮。
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
                固定值：showNavRBarBtn
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
                期望设定的右侧导航按钮效果。

可选值：

- `true`: 显示右侧导航按钮。

- `false`: 隐藏右侧导航按钮。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


### 示例配置

#### 示例一：通过 \<meta\> 标签定义 page-meta

该配置方式仅针对当前页面生效，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。


:::warning
加载 Web 页面会先经 URL 导航再解析渲染，因此网页应用默认会显示导航按钮，此时，`<meta>`标签方式隐藏主页的导航按钮会闪烁出现，请自主评估是否影响用户体验。
:::

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="showNavRBarBtn" content="false" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

#### 示例二：通过 URL 参数定义 page-meta

该配置方式仅针对当前页面生效。

```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22showNavRBarBtn%22%3A%22false%22%7D%7D
```

#### 示例三：通过 URL 参数定义 view-meta

该配置方式针对整个应用生效。

```
https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22showNavRBarBtn%22%3A%22false%22%7D%7D
```