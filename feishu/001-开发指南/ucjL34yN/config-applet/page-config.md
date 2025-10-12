<!--
title: 页面配置
id: 7268483764655996930
fullPath: /uYjL24iN/ucjL34yN/config-applet/page-config
updatedAt: 1692949703000
source: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/config-applet/page-config
-->
# 页面配置

本文介绍什么是页面配置，并提供小程序支持的页面配置项列表。

## 功能简介

每一个小程序页面均可使用同名的`.json`文件对本页面的窗口表现进行配置，页面的配置项会覆盖[全局配置项](/ssl:ttdoc/uYjL24iN/uEDNuEDNuEDN)（根目录 app.json 文件） 的 `window` 中相同的配置项，页面配置文件位置与 pages 目录定义的文件位置相同。

```
├── button.js
├── button.json
├── button.ttml
└── button.ttss
```
其中的 button.json 配置示例如下：

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "App",
  "backgroundColor": "#333333",
  "backgroundTextStyle": "light"
}
```

## 页面配置项

:::note
在页面配置中，只能设置根目录 app.json 文件中 `window` 对应的配置项来确定本页面的窗口表现。因此页面配置中无需填写 `window` 属性。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">属性</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">默认值</md-th>
<md-th style="width:35%">描述</md-th>
<md-th style="width:15%">支持平台</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>navigationBarBackgroundColor	</md-td>
<md-td>HexColor</md-td>
<md-td>#000000</md-td>
<md-td>导航栏背景颜色。取值示例：#000000。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>navigationBarTextStyle</md-td>
<md-td>String</md-td>
<md-td>white</md-td>
<md-td>导航栏标题颜色。取值：
- black
- white</md-td>
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
<md-td>backgroundColor</md-td>
<md-td>HexColor</md-td>
<md-td>#ffffff</md-td>
<md-td>窗口的背景色。取值示例：#ffffff。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>backgroundTextStyle</md-td>
<md-td>String</md-td>
<md-td>dark</md-td>
<md-td>下拉 loading 的样式。取值：
- dark
- light</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>enablePullDownRefresh</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>是否开启下拉刷新。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>usingComponents</md-td>
<md-td>Object</md-td>
<md-td>\-</md-td>
<md-td>页面自定义组件配置。具体使用方式可参见[自定义组件](/ssl:ttdoc/uYjL24iN/ugTOugTOugTO)。</md-td>
<md-td>iOS,Android,PC</md-td>
</md-tr>

<md-tr>
<md-td>disableScroll</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>取值为 true 时，页面整体不能上下滚动。该配置项只在 page.json 中有效，无法在 app.json 中设置该项。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>

<md-tr>
<md-td>disableSwipeBack</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>是否禁止页面右滑手势返回。目前不支持在 app.json、小程序首页配置该项。</md-td>
<md-td>Android</md-td>
</md-tr>

<md-tr>
<md-td>onReachBottomDistance</md-td>
<md-td>Number</md-td>
<md-td>50</md-td>
<md-td>页面上拉触底事件触发时距页面底部距离，单位：px。</md-td>
<md-td>iOS,Android</md-td>
</md-tr>
  
<md-tr>
<md-td>transparentTitle</md-td>
<md-td>String</md-td>
<md-td>none</md-td>
<md-td>导航栏透明设置。取值：

- always：一直透明。
- auto：滑动自适应。
- none（默认值）：不透明。</md-td>
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

</md-tbody>
</md-table>
:::