<!--
title: 设置导航栏颜色
id: 7246348078575484956
fullPath: /uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/set-navigation-bar-color
updatedAt: 1692868837000
source: https://open.feishu.cn/document/develop-web-apps/web-app-open-ability/set-navigation-bar-color
-->
# 设置导航栏颜色

该能力通过以下参数设置导航栏的颜色。

- 通过 navFgColor 参数设置导航栏前景颜色。

- 通过 navBgColor 参数设置导航栏背景颜色。


## 设置前景颜色

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

设置导航栏颜色基于 web-meta 实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力和使用方式。

- 如果不配置该参数，则显示导航栏默认前景色。 
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
                固定值：navFgColor
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
                期望设定的导航栏前景颜色值，包括按钮、标题的颜色。仅支持以下可选值：


- `FFFFFFFF`、`FFFFFF`、`#FFFFFFFF`、`#FFFFFF`：白色

- `FF000000`、`000000`、`#FF000000`、`#000000`：黑色

使用说明：
              
- 若适配深色外观模式，则使用格式：`浅色模式色值,深色模式色值`，使用示例：`FF000000,FFFFFFFF`

- 若仅一个颜色值，则导航栏前景色不随外观模式变化。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


### 示例配置

#### 示例一：通过 \<meta\> 标签定义 page-mete

该配置方式仅针对当前页面生效，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="navFgColor" content="FF000000,FFFFFFFF" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

#### 示例二：通过 URL 参数定义 page-meta

该配置方式仅针对当前页面生效。

```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22navFgColor%22%3A%22FF000000%2CFFFFFFFF%22%7D%7D
```

#### 示例三：通过 URL 参数定义 view-meta

该配置方式针对整个应用生效。

```
https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22navFgColor%22%3A%22FF000000%2CFFFFFFFF%22%7D%7D
```


## 设置背景颜色

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

设置导航栏颜色基于 web-meta 实现，参数配置如下表所示。

:::note
- 使用前，请先了解 [web-meta](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta) 能力和使用方式。

- 如果不配置该参数，则显示导航栏默认背景色。 
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
                固定值：navBgColor
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
                期望设定的导航栏背景颜色值，有效值为十六进制颜色。

- **格式**：`AARRGGBB`、`RRGGBB`、`#AARRGGBB`、`#RRGGBB`
              
- **示例值**：`FF1456F0`、`1456F0`、`#FF1456F0`、`#1456F0`
              
使用说明：
              
- 若适配深色外观模式，则使用格式：`浅色模式色值,深色模式色值`，使用示例：`FF1456F0,FF000000`

- 若仅一个颜色值，则导航栏背景色不随外观模式变化。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


### 示例配置

#### 示例一：通过 \<meta\> 标签定义 page-mete

该配置方式仅针对当前页面生效，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="navBgColor" content="FF1456F0,FF000000" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

#### 示例二：通过 URL 参数定义 page-meta

该配置方式仅针对当前页面生效。

```
https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22navBgColor%22%3A%22FF1456F0%2CFF000000%22%7D%7D
```

#### 示例三：通过 URL 参数定义 view-meta

该配置方式针对整个应用生效。

```
https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22navBgColor%22%3A%22FF1456F0%2CFF000000%22%7D%7D
```