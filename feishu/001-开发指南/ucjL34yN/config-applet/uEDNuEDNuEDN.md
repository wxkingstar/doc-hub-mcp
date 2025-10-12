<!--
title: 全局配置
id: 6907569744330801153
fullPath: /uYjL24iN/uEDNuEDNuEDN
updatedAt: 1745302349000
source: https://open.feishu.cn/document/client-docs/gadget/introduction/global-settings
-->
# 全局配置

本文介绍什么是全局配置，并提供小程序支持的全局配置项列表。

## 功能简介

小程序根目录下的 app.json 文件用于对小程序进行全局配置。在该配置文件中，可指定页面文件的路径、全局样式、设置多 tab、设置 PC 小程序各种模式的默认启动页面等。
以下是一个包含了部分常用配置项的 app.json 文件内容：

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index",
    "pages/home/index",
    "pages/help/index"
  ],
  "window": {
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Mini App",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/home/index",
      "text": "主页"
    }, {
      "pagePath": "pages/help/index",
      "text": "帮助"
    }]
  }
}
```

## 全局配置项

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:21%">配置项</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:49%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>entryPagePath</md-td>
<md-td>String</md-td>
<md-td>否</md-td>
<md-td>小程序默认启动页面。</md-td>
</md-tr>

<md-tr>
<md-td>pages</md-td>
<md-td>String[]</md-td>
<md-td>是</md-td>
<md-td>配置页面路径。</md-td>
</md-tr>

<md-tr>
<md-td>window</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>配置默认页面的窗口表现。</md-td>
</md-tr>

<md-tr>
<md-td>tabBar</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>配置底部 tab 的表现。</md-td>
</md-tr>

<md-tr>
<md-td>debug</md-td>
<md-td>Boolean</md-td>
<md-td>否</md-td>
<md-td>配置是否开启 debug 模式</md-td>
</md-tr>

<md-tr>
<md-td>ext</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>提供额外配置参数给小程序使用</md-td>
</md-tr>

<md-tr>
<md-td>darkmode</md-td>
<md-td>Boolean</md-td>
<md-td>否</md-td>
<md-td>设置为 true 时表示小程序支持 DarkMode。</md-td>
</md-tr>

<md-tr>
<md-td>themeLocation</md-td>
<md-td>String</md-td>
<md-td>否</md-td>
<md-td>[深色模式](/ssl:ttdoc/uYjL24iN/uQTM5UjL0ETO14CNxkTN/darkmode)变量配置文件的路径，相对于小程序根目录，darkmode 为 true 时为必填。</md-td>
</md-tr>

<md-tr>
<md-td>useExtendedLib</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>配置需要使用的扩展库。</md-td>
</md-tr>

<md-tr>
<md-td>networkTimeout</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>配置网络类API相关参数，包括 tt.request、tt.downloadFile、tt.uploadFile、tt.connectSocket。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
如果小程序的页面栈的第一个页面不是 app.json 里 pages 里配置的第一个页面（首页），页面左上角会显示 Home 按钮（即返回首页按钮）。PC 小程序仅 window-semi 模式有效。
:::

如果你的小程序支持在 PC 端运行，可以在 ext 里配置 PC 小程序的各种模式默认启动页面。配置完成后，在启动 PC 小程序时如果没设置启动页面，则程序将根据当前的模式，启动 ext 里配置的页面。具体示例如下：

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index",
    "pages/order/index",
    "pages/chat/index"
  ],
  "ext": {
    "defaultPages": {
      "sidebarMode": "pages/order/index",
      "PCMode": "pages/chat/index"
    }
  }
}
```

:::note
如果你的 PC 小程序需要配置默认启动页面，则需要注意 defaultPages 中各模式配置的页面必须在 pages 中定义，否则编译过程会报错。
:::


### entryPagePath

指定小程序启动的默认页面。未配置时默认为 pages 列表的第一项。

```json
{
  "entryPagePath": "pages/index/index"
}
```



### pages

该字段用于配置小程序用到的所有页面路径，配置项的结构为`路径 + 文件名`。

- 配置项的第一个页面路径就是小程序启动展示的第一个页面。

- 需要保证单个页面的 `.json`、`.js`、`.ttml`、`.ttss` 资源都放在每个页面路径的首层。

示例配置：

如果开发目录如下所示。

```
|____app.ttss
|____app.json
|____project.config.json
|____pages
|       |____index
|       |        |____index.js
|       |        |____index.json
|       |        |____index.ttml
|       |        |____index.ttss
|____app.js
```

则相应的 app.json 中配置应如下所示。

```json
{
  "pages":[
    "pages/index/index"
  ]
}
```

### window

该字段用于设置小程序的状态栏、导航栏、标题、窗口背景色。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:10%">类型</md-th>
<md-th style="width:10%">默认值</md-th>
<md-th style="width:25%">描述</md-th>
<md-th style="width:15%">支持平台</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>navigationBarBackgroundColor</md-td>
<md-td>HexColor</md-td>
<md-td>#000000</md-td>
<md-td>导航栏背景颜色。例如：#000000。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>navigationBarTextStyle</md-td>
<md-td>String</md-td>
<md-td>white</md-td>
<md-td>
导航栏标题颜色。取值：
 
- black
- white

</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>navigationBarTitleText</md-td>
<md-td>String</md-td>
<md-td>\-</md-td>
<md-td>导航栏标题文字内容。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>transparentTitle</md-td>
<md-td>String</md-td>
<md-td>none</md-td>
<md-td>
导航栏透明设置。取值：

- always：一直透明
- auto：滑动自适应
- none（默认值）：不透明</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>navigationStyle</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>导航栏样式。取值：

- default：默认样式。
- custom：可自定义导航栏，只保留右上角胶囊状的按钮。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>backgroundColor</md-td>
<md-td>HexColor</md-td>
<md-td>#ffffff</md-td>
<md-td>窗口的背景色。例如：#ffffff。</md-td>
<md-td>iOS,Android,PC(3.14.0+)</md-td>
</md-tr>

<md-tr>
<md-td>backgroundTextStyle</md-td>
<md-td>String</md-td>
<md-td>dark</md-td>
<md-td>下拉 loading 的样式。取值

- dark
- light</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>backgroundColorTop</md-td>
<md-td>String</md-td>
<md-td>#ffffff</md-td>
<md-td>顶部窗口的背景色。例如：#ffffff。</md-td>
<md-td>iOS</md-td>
</md-tr>

<md-tr>
<md-td>backgroundColorBottom</md-td>
<md-td>String</md-td>
<md-td>#ffffff</md-td>
<md-td>底部窗口的背景色。例如：#ffffff。</md-td>
<md-td>iOS</md-td>
</md-tr>

<md-tr>
<md-td>enablePullDownRefresh</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>是否开启下拉刷新。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>onReachBottomDistance</md-td>
<md-td>Number</md-td>
<md-td>50</md-td>
<md-td>页面上拉触底事件触发时，距页面底部距离。单位：px</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>PCMode</md-td>
<md-td>Object</md-td>
<md-td>\-</md-td>
<md-td>PCMode 模式下特定的窗口配置，支持的属性与通用 window 配置属性一致，仅当在 ext 内配置了 defaultPages.PCMode 时生效。</md-td>
<md-td>PC(3.14.0+)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### tabBar

如果小程序是一个多 tab 的应用（客户端窗口的底部或顶部存在 tab 栏可以切换页面），则可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:10%">类型</md-th>
<md-th style="width:10%">是否必填</md-th>
<md-th style="width:10%">默认值</md-th>
<md-th style="width:20%">描述</md-th>
<md-th style="width:15%">支持平台</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>color</md-td>
<md-td>HexColor</md-td>
<md-td>是</md-td>
<md-td>\-</md-td>
<md-td>tab 上的文字默认颜色</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>selectedColor</md-td>
<md-td>HexColor</md-td>
<md-td>是</md-td>
<md-td>\-</md-td>
<md-td>tab 上的文字选中时的颜色。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>backgroundColor</md-td>
<md-td>HexColor</md-td>
<md-td>是</md-td>
<md-td>\-</md-td>
<md-td>tab 的背景色。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>borderStyle</md-td>
<md-td>String</md-td>
<md-td>否</md-td>
<md-td>black</md-td>
<md-td>tabBar 上边框的颜色，仅支持：

- black(#E6E6E6)
- white(#FFFFFF)</md-td>
<md-td>iOS,Android,PC(3.14.0+)</md-td>
</md-tr>

<md-tr>
<md-td>list</md-td>
<md-td>Array</md-td>
<md-td>是</md-td>
<md-td>\-</md-td>
<md-td>tab 的列表。列表中的 tab 至少 2 个, 至多 5 个，且按数组的顺序排序。每个 tab 都是一个对象（Object），Object 中的属性值可参见下文 list 中的 tab 属性表。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>position</md-td>
<md-td>String</md-td>
<md-td>否</md-td>
<md-td>bottom</md-td>
<md-td>tab 栏的位置。可选值：bottom、top。</md-td>
<md-td>PC</md-td>
</md-tr>

<md-tr>
<md-td>PCMode</md-td>
<md-td>Object</md-td>
<md-td>否</md-td>
<md-td>\-</md-td>
<md-td>	PCMode 模式下特定的 tabBar 配置，支持的属性与通用 tabBar 配置属性一致，仅当在 ext 内配置了 defaultPages.PCMode 时生效。</md-td>
<md-td>PC(3.14.0+)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


#### list 中的 tab 属性表

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>pagePath</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>	页面路径，必须先在 pages 中进行定义。</md-td>
</md-tr>

<md-tr>
<md-td>text</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>tab 上的按钮文字。</md-td>
</md-tr>

<md-tr>
<md-td>iconPath</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>图片路径。icon 仅支持 png 格式的图片，大小限制为 40 kb，建议尺寸为 96 px * 96 px，不支持网络图片。</md-td>
</md-tr>

<md-tr>
<md-td>selectedIconPath</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>选中时的图片路径。icon 仅支持 png 格式的图片，大小限制为 40 kb，建议尺寸为 96 px * 96 px，不支持网络图片。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### debug

开启并显示 vConsole 的 debug 模式。在预览场景下可开启该参数用于查看 vconsole 的数据，该参数对线上正式版本的小程序无效。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/11cb873f99a8f9a544002dc71c7026d7_g4UHr2ES21.png?height=1166&lazyload=true&maxWidth=260&width=564)

### ext

小程序的扩展配置字段，目前可用的字段为 defaultPages，参数说明如下表。

#### defaultPages 参数说明

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>sidebarMode</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>小窗口模式默认展示的页面。小窗口模式包括：

- sidebar-semi：在聊天的侧边栏打开小窗口。

- window-semi：独立小窗口打开。飞书从 V3.33 版本开始支持此模式。</md-td>
</md-tr>

<md-tr>
<md-td>PCMode</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>大窗口模式默认展示的页面。大窗口模式包括：

- appCenter：工作台中打开。

- feed：feed 模式打开。

- navApplication：导航栏模式打开。

- window：独立大窗口打开。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### useExtendedLib

配置需要使用的拓展库，目前只支持[ChartSpace 图表组件库](/ssl:ttdoc/uYjL24iN/uUTM5UjL1ETO14SNxkTN/extension/visualization/chartspace) 。配置后，系统会将扩展库最新版本的 npm 包内置到小程序中。详细配置如下所示：

```json
{
  "useExtendedLib": {
    "chartSpace": true
  }
}
```
在使用自定义组件的页面 JSON 中增加自定义组件配置。

```json
{
  "usingComponents": {
    "chart-space": "/lark-chartspace/index"
  }
}
```

### networkTimeout

配置网络类 API 的相关参数，可配置参数如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>request</md-td>
<md-td>long</md-td>
<md-td>否</md-td>
<md-td>自定义 tt.request 的 timeout 时间，可设置范围为 (0,60000), 默认值 60000, 单位：毫秒。</md-td>
</md-tr>

<md-tr>
<md-td>uploadFile</md-td>
<md-td>long</md-td>
<md-td>否</md-td>
<md-td>自定义 tt.uploadFile 的 timeout 时间，可设置范围为 (0,60000), 默认值 60000, 单位：毫秒。</md-td>
</md-tr>

<md-tr>
<md-td>downloadFile</md-td>
<md-td>long</md-td>
<md-td>否</md-td>
<md-td>自定义 tt.downloadFile 的 timeout 时间，可设置范围为 (0,60000), 默认值 60000, 单位：毫秒。</md-td>
</md-tr>

<md-tr>
<md-td>connectSocket</md-td>
<md-td>long</md-td>
<md-td>否</md-td>
<md-td>自定义 tt.connectSocket 的 timeout 时间，可设置范围为 (0,60000), 默认值 60000, 单位：毫秒。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

networkTimeout 设置对小程序全局生效，无法只对某个页面生效，也无法只对某次 API 调用生效。app.json 配置示例如下：

```json
"networkTimeout": {  
  "request": 10000,
  "connectSocket": 10000,
  "uploadFile": 10000,
  "downloadFile": 10000
 }
```
