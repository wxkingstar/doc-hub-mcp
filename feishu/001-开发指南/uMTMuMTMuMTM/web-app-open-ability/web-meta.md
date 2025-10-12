<!--
title: web-meta
id: 7120068482821898241
fullPath: /uYjL24iN/uMTMuMTMuMTM/web-app-open-ability/web-meta
updatedAt: 1692868775000
source: https://open.feishu.cn/document/client-docs/h5/web-app-open-ability/web-meta
-->
# web-meta

web-meta 是网页的元数据，用于定义网页特性。在飞书中运行的网页支持通过 web-meta 定制网页容器的表现，即使该网页不是一个网页应用。本文主要介绍 web-meta 所包含的属性，以及 web-meta 的两种能力：page-meta 和 view-meta。

## 支持说明

web-meta 的 page-meta 和 view-meta 能力，在不同端的支持情况如下表所示。 

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 25%;">支持能力</md-th>
      <md-th style="width: 25%;">Android</md-th>
      <md-th style="width: 25%;">iOS</md-th>
      <md-th style="width: 25%;">PC</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>page-meta</md-td>
      <md-td><md-version>V5.15</md-version></md-td>
      <md-td><md-version>V5.15</md-version></md-td>
      <md-td>**X**</md-td>
  	</md-tr>
    <md-tr>
      <md-td>view-meta</md-td>
      <md-td><md-version>V5.16</md-version></md-td>
      <md-td><md-version>V5.16</md-version></md-td>
      <md-td>**X**</md-td>
  	</md-tr>
  </md-tbody>
</md-table>
:::

## 使用方式

web-meta 配置所包含的属性如下表所示。web-meta 的 page-meta 和 view-meta 能力均通过这些属性进行定义。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性名称</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>name</md-td>
<md-td>String</md-td>
<md-td>web-meta 的数据名，用于标识 web-meta 类型。</md-td>
</md-tr>

<md-tr>
<md-td>content</md-td>
<md-td>String</md-td>
<md-td>web-meta 数据值，用于指定 web-meta 数据。</md-td>
</md-tr>

<md-tr>
<md-td>lk-config</md-td>
<md-td>String</md-td>
<md-td>web-meta 的数据配置，用于指定 web-meta 的配置信息。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### page-meta

page-meta 是定义 web-meta 的方式之一，该方式只作用于当前页面。当网页容器内页面切换时，将重新应用新页面的 page-meta 配置或将其重置为默认状态。page-meta 的定义方式分为两种：通过`<meta>`标签定义，或者通过 URL 参数定义。

#### 

:::note
如果同时使用`meta`标签和 URL 参数定义同一个 name 属性的 meta 数据，则系统优先使用`meta`标签的值。
:::

#### 方式一：通过 \<meta\> 标签定义 page-meta

你可以在 HTML 中编写`<meta>`标签来定义 page-meta。示例代码如下：

```html
<html>
  <head>
    <!-- 在 head 中引入 -->
    <meta name="orientation" content="landscape" lk-config>
    
    <!-- 在 head 中 meta 标签之后引入 jssdk -->
    <script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.23.js"></script>
  </head>
</html>
```

- 在`<head>`中引入，且需要携带一个`lk-config`属性。

- 需要在`<head>`中引入 JSSDK，并且 JSSDK 在所有`<meta>`标签之后，其中引入的 JSSDK 最新版本信息可参见[开发网页应用简介](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)。


#### 方式二：通过 URL 参数定义 page-meta

你可以在 URL 中通过参数的方式定义 page-meta。该方式将会在每次 URL 变化时，重新应用 page-meta 配置或将其重置为默认状态。

:::note
过长的 URL 可能有兼容性问题。因此，如果你的 web-meta 参数很长，建议通过方式一的`meta`标签实现。
:::

1. 确定配置内容（JSON 格式）。

	JSON 格式的 page-meta 中可以配置多个 web-meta 属性，其中，key 是 web-meta 的 name 属性，value 是 web-meta 的 content 属性。

	```json
	{"page-meta":{"orientation":"landscape"}}
	```

2. 对去掉换行的 JSON 内容进行 URLEncode 编码后，使用`lk_meta`作为参数名加入 URL 的参数中。
	
    编码工具可参见 [URL encode工具](https://meyerweb.com/eric/tools/dencoder/)。

    ```
    https://feishu.cn/?lk_meta=%7B%22page-meta%22%3A%7B%22orientation%22%3A%22landscape%22%7D%7D
    ```

### view-meta

view-meta 是定义 web-meta 的方式之一，使用该方式定义的 web-meta 将作为网页容器内所有页面的默认配置。

:::note
- 当一个页面已定义了明确的 page-meta 时，page-meta 的优先级将高于 view-meta 的优先级。

- 通过 window.open 等方式可能会打开一个新的网页容器，此时，前一个容器中的 view-meta 不会在新容器中生效。
:::


view-meta 支持通过 URL 参数定义，即在 URL 中通过参数的方式定义 view-meta。对于一个网页容器而言，只有首次加载的 URL 中的 view-meta 是有效的。

1. 确定配置内容（JSON 格式）。

	JSON 格式的 view-meta 中可以配置多个 web-meta 属性，其中，key 是 web-meta 的 name 属性，value 是 web-meta 的 content 属性。
    
    ```json
    {"view-meta":{"orientation":"landscape"}}
    ```
    
2. 对去掉换行的 JSON 内容进行 URLEncode 编码后，以`lk_meta`作为参数名加入 URL 的参数中。

	编码工具可参见 [URL encode工具](https://meyerweb.com/eric/tools/dencoder/)。
    
    ```
    https://feishu.cn/?lk_meta=%7B%22view-meta%22%3A%7B%22orientation%22%3A%22landscape%22%7D%7D
    ```
