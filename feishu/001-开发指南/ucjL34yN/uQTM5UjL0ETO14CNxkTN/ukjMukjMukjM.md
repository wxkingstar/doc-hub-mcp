<!--
title: 小程序目录结构
id: 6907569524100775937
fullPath: /uYjL24iN/ukjMukjMukjM
updatedAt: 1692947480000
source: https://open.feishu.cn/document/client-docs/gadget/introduction/directory-structure
-->
# 小程序目录结构

小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。
一个简单的目录结构如下示例。

```
├── app.js
├── app.json
├── app.ttss
├── project.config.json
└── pages
```

其中的 pages 可以根据实际情况进行灵活配置。

## 目录组成

一个小程序根目录包含以下文件。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">文件</md-th>
<md-th style="width:25%">是否必须</md-th>
<md-th style="width:50%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>app.js</md-td>
<md-td>是</md-td>
<md-td>小程序入口逻辑。</md-td>
</md-tr>

<md-tr>
<md-td>app.json</md-td>
<md-td>是</md-td>
<md-td>小程序公共设置。例如：所有页面路径等。</md-td>
</md-tr>

<md-tr>
<md-td>app.ttss</md-td>
<md-td>是</md-td>
<md-td>小程序公共样式。</md-td>
</md-tr>

<md-tr>
<md-td>project.config.json</md-td>
<md-td>是</md-td>
<md-td>小程序项目配置文件，详情参见[项目配置](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration)。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

小程序每个页面也有对应的目录结构。具体结构如下示例：
```
├── pages
│   │── home
│   │   ├── home.ttml
│   │   ├── home.js
│   │   ├── home.json
│   │   └── home.ttss
│   └── user
│       ├── user.ttml
│       └── user.js
├── app.js
├── app.json
├── app.ttss
└── project.config.json
```

每个小程序的页面都可以由以下四个文件组成。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">文件</md-th>
<md-th style="width:25%">是否必须</md-th>
<md-th style="width:50%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>*.js</md-td>
<md-td>是</md-td>
<md-td>	页面逻辑。</md-td>
</md-tr>

<md-tr>
<md-td>*.json</md-td>
<md-td>否</md-td>
<md-td>页面配置。</md-td>
</md-tr>

<md-tr>
<md-td>*.ttss</md-td>
<md-td>否</md-td>
<md-td>页面样式表。</md-td>
</md-tr>

<md-tr>
<md-td>*.ttml</md-td>
<md-td>是</md-td>
<md-td>页面结构。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
为了使你减少业务代码中的配置项，描述页面的四个文件必须具有相同的路径与文件名。
:::

## 上传文件说明

在项目目录中，`*.js`、`*.json`、`*.ttml`、`*.ttss` 等文件会被上传到服务器进行编译（其中 ttml 和 ttss 文件仅针对在 app.json 中配置了的页面）。这些文件上传后经过编译生成其他文件，因此上传之后无法直接访问到。

