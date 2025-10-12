<!--
title: 分栏
id: 7453075757222871042
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/containers/column-set
updatedAt: 1750681806000
source: https://open.feishu.cn/document/feishu-cards/card-json-v2-components/containers/column-set
-->
# 分栏组件
分栏组件提供卡片内布局的能力，并提供对齐方式、容器宽度、交互方式等属性。你可以使用分栏组件横向排布多个列容器，在列容器内自由组合图文内容，搭建出如数据表、商品或文章列表、差旅信息等图文并茂、交互友好的卡片。

本文档介绍分栏组件的 JSON 2.0 结构，要查看历史 JSON 1.0 结构，参考[分栏](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/column-set)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab0828f3677f4eaab0582cf8a13780ca_6dNbyUvuxR.png?height=691&lazyload=true&maxWidth=300&width=630)

## 注意事项

分栏组件最多支持嵌套五层组件。建议你避免在分栏中嵌套多层组件。多层嵌套会压缩内容的展示空间，影响卡片的展示效果。

## 应用场景

- 分栏的使用场景非常广泛，在卡片中适当使用分栏，可以使信息排布更合理、主次更分明。常见场景如下所示。推荐你直接前往卡片搭建工具，查看[分栏示例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEj6y7tTLV)。

    - **数据报表推送：** 使用分栏可以快速构建整齐、自适应屏幕的多列数据表，解决了传统报表构建时繁琐的排版过程，以及无法自适应各类屏幕的样式问题。
    - **图文混排**：分栏灵活的横纵列排版能力，使你可以快速构建理想的图文卡片。有效降低手动调整图文排版的耗时。
    - **表单收集**：表单容器中内嵌分栏组件，将相关字段放在同一列，可有效提升内容的逻辑性和可读性。
- 分栏中还可配置点击链接、变量，推荐你直接前往卡片搭建工具，查看[分栏配置链接案例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEj6y7tTLV)。

## 嵌套规则

分栏组件由分栏本身的属性（column_set）和列容器（column）组成。一个分栏组件中内可以添加多个列容器，每个列容器中可内嵌多个组件。

[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)支持内嵌除表单容器（form）和表格组件（table）外的其它所有组件。

整体的嵌套关系如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b253ea6e463d2841c8295b26873c3f7_8BnIr3afv7.png?height=722&lazyload=true&maxWidth=600&width=1942)

列容器中再嵌套分栏的层级关系如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2b6909f3881bc78965466cc736d5ec6_FKkeg0UCcT.png?height=584&lazyload=true&maxWidth=600&width=2034)

## 组件属性

### JSON 结构

分栏组件的完整 JSON 2.0 结构如下所示：

```JSON
{
    "schema": "2.0",
    "body": {
        "elements": [
            {
                "tag": "column_set", // 分栏的标签。
                "element_id": "custom_id", // 操作组件的唯一标识。用于在调用组件相关接口中指定组件。需开发者自定义。
                "margin": "4px", // 分栏的外边距，默认值 "0"，支持范围 [-99,99]px。
                "horizontal_spacing": "large", // 分栏内组件之间的间距，可选值："small"(4px)、"medium"(8px)、"large"(12px)、"extra_large"(16px)或[0,99]px。默认 8px。
                "horizontal_align": "left", // 分栏内组件水平对齐的方式，可选值："left"、"center"、"right"，默认值为 "left"。
                "flex_mode": "none", // 移动端和 PC 端的窄屏幕下，各列的自适应方式。默认值 none。
                "background_style": "default", // 分栏的背景色样式。默认值 default。
                "action": { // 在此处设置点击分栏时的交互配置。
                    "multi_url": {
                        "url": "https://open.feishu.cn",
                        "pc_url": "https://open.feishu.com",
                        "ios_url": "https://developer.apple.com/",
                        "android_url": "https://developer.android.com/"
                    }
                },
                "columns": [
                    // 列配置
                    {
                        "tag": "column",
                        "element_id": "custom_id", // 操作组件的唯一标识。用于在调用组件相关接口中指定组件。需开发者自定义。
                        "background_style": "default", // 列的背景色样式。默认值 default。
                        "width": "auto", // 列的宽度。默认值 auto。
                        "weight": 1, // 当 width 取值 weighted 时生效，表示当前列的宽度占比。
                        "horizontal_spacing": "large", // 列内组件之间的间距，可选值："small"(4px)、"medium"(8px)、"large"(12px)、"extra_large"(16px)或[0,99]px。默认 8px。
                        "horizontal_align": "left", // 列内组件水平对齐的方式，可选值："left"、"center"、"right"，默认值为 "left"。
                        "vertical_align": "center", // 列内组件的垂直对齐方式，可选值："top"、"center"、"bottom"，默认值为 "top"。
                        "vertical_spacing": "4px", // 列内子组件纵向间距。默认值 default（8px）。
                        "direction": "vertical", // 列的排列方向。可选值："vertical"（垂直排列）、"horizontal"（水平排列）。默认为 "vertical"。
                        "padding": "8px", // 列的内边距。默认值 0px。支持范围 [0,99]px。
                        "margin": "4px", // 列的外边距，默认值 0px。支持范围 [-99,99]px。
                        "action": {
                            // 在此处设置点击列时的交互配置。
                            "multi_url": {
                                "url": "https://www.baidu.com",
                                "pc_url": "https://www.baidu.com",
                                "ios_url": "https://www.google.com",
                                "android_url": "https://www.apple.com.cn"
                            }
                        },
                        "elements": [] // 列容器内嵌的组件，不支持内嵌表格和表单容器。
                    }
                ]
            }
        ]
    }
}
```

### 分栏字段说明

分栏（column_set）各属性字段说明如下表所示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">名称</md-th>
      <md-th style="width: 10%;">必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 10%;">默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>组件的标签。分栏组件的固定值为 column_set。</md-td>
    </md-tr>
    <md-tr>
      <md-td>element_id</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>操作组件的唯一标识。JSON 2.0 新增属性。用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/create)中指定组件。在同一张卡片内，该字段的值全局唯一。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td>
    </md-tr>
    <md-tr>
      <md-td>horizontal_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>8px</md-td>
      
      <md-td>分栏内组件的水平间距，可选值：
- small：小间距，4px
- medium：中等间距，8px
- large：大间距，12px
- extra_large：超大间距，16px
- 具体数值，如 20px。取值范围为 [0,99]px</md-td>
    </md-tr>
    <md-tr>
      <md-td>horizontal_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>left</md-td>
      <md-td>分栏内组件在水平方向上的对齐方式。可取值：
- left：左对齐
- center：居中对齐
- right：右对齐</md-td>
    </md-tr>
    

    
    <md-tr>
      <md-td>margin</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      <md-td>分栏的外边距。值的取值范围为 [-99,99]px。可选值：
- 单值，如 "10px"，表示分栏的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示分栏的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示分栏的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。</md-td>
    </md-tr>
    <md-tr>
      <md-td>flex_mode</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>none</md-td>
      
      <md-td>移动端和 PC 端的窄屏幕下，各列的自适应方式。取值：
- none：不做布局上的自适应，在窄屏幕下按比例压缩列宽度
- stretch：列布局变为行布局，且每列（行）宽度强制拉伸为 100%，所有列自适应为上下堆叠排布
- flow：列流式排布（自动换行），当一行展示不下一列时，自动换至下一行展示
- bisect：两列等分布局
- trisect：三列等分布局</md-td>
    </md-tr>
    <md-tr>
      <md-td>background_style</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      
      <md-td>分栏的背景色样式。可取值：
- default：默认的白底样式，客户端深色主题下为黑底样式
- 卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
        
**注意**：当存在分栏的嵌套时，上层分栏的颜色覆盖下层分栏的颜色。</md-td>
    </md-tr>
    
    <md-tr>
      <md-td>action</md-td>
      <md-td>否</md-td>
      <md-td>Action</md-td>
      <md-td>/</md-td>
      
      <md-td>设置点击分栏时的交互配置。当前仅支持跳转交互。如果布局容器内有交互组件，则优先响应交互组件定义的交互。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ multi_url</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      
      <md-td>配置各个端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>兜底的跳转链接。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>Android 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>iOS 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>PC 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    
    <md-tr>
      <md-td>columns</md-td>
      <md-td>是</md-td>
      <md-td>column[]</md-td>
      <md-td>空</md-td>
      
      <md-td>分栏中列的配置。详情参考下文。</md-td>
    </md-tr>
    
  </md-tbody>
</md-table>

:::
### 列字段说明

分栏中列（column）的各属性字段说明如下表所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">名称</md-th>
      <md-th style="width: 10%;">必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 10%;">默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>列的标签，固定取值为 `column`。</md-td>
    </md-tr>
  <md-tr>
      <md-td>element_id</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>操作组件的唯一标识。JSON 2.0 新增属性。用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/create)中指定组件。在同一张卡片内，该字段的值全局唯一。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td></md-tr>
    <md-tr>
      <md-td>background_style</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      
      <md-td>列的背景色样式。可取值：
- default：默认的白底样式，客户端深色主题下为黑底样式
- 卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)</md-td>
    </md-tr>
    <md-tr>
      <md-td>width</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>auto</md-td>
      
      <md-td>列宽度。仅 `flex_mode` 为 `none` 时，生效此属性。取值：
- auto：列宽度与列内元素宽度一致
- weighted：列宽度按 `weight` 参数定义的权重分布
- 具体数值，如 100px。取值范围为 [16,600]px。V7.4 及以上版本支持该枚举</md-td>
    </md-tr>
    <md-tr>
      <md-td>weight</md-td>
      <md-td>否</md-td>
      <md-td>Number</md-td>
      <md-td>1</md-td>
      
      <md-td>当 `width` 字段取值为 `weighted` 时生效，表示当前列的宽度占比。取值范围为 1 ~ 5 之间的整数。</md-td>
    </md-tr>
    
     <md-tr>
      <md-td>horizontal_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>8px</md-td>
      
      <md-td>列内组件的水平间距，可选值：
- small：小间距，4px
- medium：中等间距，8px
- large：大间距，12px
- extra_large：超大间距，16px
- 具体数值，如 20px。取值范围为 [0,99]px</md-td>
    </md-tr>
    
    
  <md-tr>
      <md-td>horizontal_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>left</md-td>
      <md-td>列内组件在水平方向上的对齐方式。可取值：
- left：左对齐
- center：居中对齐
- right：右对齐</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>vertical_align</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>top</md-td>
      
      <md-td>列内组件在垂直方向上的对齐方式。可取值：
- top：上对齐
- center：居中对齐
- bottom：下对齐</md-td>
    </md-tr>
    <md-tr>
      <md-td>vertical_spacing</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>8px</md-td>
      
      <md-td>列内组件的纵向间距。可选值：
- small：小间距，4px
- medium：中等间距，8px
- large：大间距，12px
- extra_large：超大间距，16px
- 具体数值，如 20px。取值范围为 [0,99]px</md-td>
    </md-tr>
    
    
     <md-tr>
      <md-td>direction</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>vertical</md-td>
      
      <md-td>列的排列方向。可选值：
- vertical：垂直排列
- horizontal：水平排列</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      
      <md-td>列的内边距。值的取值范围为 [0,99]px。可选值：
- 单值，如 "10px"，表示列的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示列的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示列的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。</md-td>
    </md-tr>
    
    
  
    <md-tr>
      <md-td>margin</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      <md-td>列的外边距。值的取值范围为 [-99,99]px。可选值：
- 单值，如 "10px"，表示容器的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示容器的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示容器的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>elements</md-td>
      <md-td>否</md-td>
      <md-td>Element 或 ColumnSet[]</md-td>
      <md-td>空</md-td>
      <md-td>列中内嵌的组件。可内嵌组件参考上文嵌套关系。</md-td>
    </md-tr>
    <md-tr>
      <md-td>action</md-td>
      <md-td>否</md-td>
      <md-td>Action</md-td>
      <md-td>/</md-td>
      
      <md-td>设置点击列时的交互配置。当前仅支持跳转交互。如果布局容器内有交互组件，则优先响应交互组件定义的交互。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ multi_url</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      
      <md-td>配置各个端的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>兜底的链接地址。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>Android 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>iOS 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      
      <md-td>PC 端的链接地址。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 示例代码

以下 JSON 2.0 结构的示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab0828f3677f4eaab0582cf8a13780ca_6dNbyUvuxR.png?height=691&lazyload=true&maxWidth=300&width=630)

```json
{
    "schema": "2.0",
    "body": {
      "elements": [
        {
                "tag": "markdown",
                "content": ":YouAreTheBest:**个人效率总览** ",
                "text_align": "left",
                "text_size": "heading"
            },
            {
                "tag": "column_set",
                "flex_mode": "bisect",
                "horizontal_spacing": "",
                "horizontal_align": "center",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "top",
                        "vertical_spacing": "8px",
                        "direction": "horizontal",
                        "elements": [
                            {
                                "tag": "column_set",
                                "flex_mode": "none",
                                "horizontal_spacing": "8px",
                                "horizontal_align": "left",
                                "columns": [
                                    {
                                        "tag": "column",
                                        "width": "weighted",
                                        "vertical_align": "top",
                                        "vertical_spacing": "8px",
                                        "background_style": "grey",
                                        "padding": "8px",
                                        "elements": [
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "已审批单量",
                                                                    "text_size": "normal",
                                                                    "text_align": "center",
                                                                    "text_color": "grey"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "29 单",
                                                                    "text_size": "heading",
                                                                    "text_align": "center",
                                                                    "text_color": "default"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "markdown",
                                                "content": "<text_tag color='blue'>高于部门 86%</text_tag>",
                                                "text_align": "center",
                                                "text_size": "normal"
                                            }
                                        ],
                                        "weight": 1
                                    }
                                ],
                                "margin": "0px 0px 0px 0px"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "top",
                        "vertical_spacing": "8px",
                        "elements": [
                            {
                                "tag": "column_set",
                                "flex_mode": "none",
                                "horizontal_spacing": "8px",
                                "horizontal_align": "left",
                                "columns": [
                                    {
                                        "tag": "column",
                                        "width": "weighted",
                                        "vertical_align": "top",
                                        "vertical_spacing": "8px",
                                        "background_style": "grey",
                                        "padding": "8px",
                                        "elements": [
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "审批平均耗时",
                                                                    "text_size": "normal",
                                                                    "text_align": "center",
                                                                    "text_color": "grey"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "0.9 小时",
                                                                    "text_size": "heading",
                                                                    "text_align": "center",
                                                                    "text_color": "default"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "markdown",
                                                "content": "<text_tag color='orange'>落后部门 61%</text_tag>",
                                                "text_align": "center",
                                                "text_size": "normal"
                                            }
                                        ],
                                        "weight": 1
                                    }
                                ],
                                "margin": "0px 0px 0px 0px"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "top",
                        "vertical_spacing": "8px",
                        "elements": [
                            {
                                "tag": "column_set",
                                "flex_mode": "none",
                                "horizontal_spacing": "8px",
                                "horizontal_align": "left",
                                "columns": [
                                    {
                                        "tag": "column",
                                        "width": "weighted",
                                        "vertical_align": "top",
                                        "vertical_spacing": "8px",
                                        "background_style": "grey",
                                        "padding": "8px",
                                        "elements": [
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "代批率",
                                                                    "text_size": "normal",
                                                                    "text_align": "center",
                                                                    "text_color": "grey"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "column_set",
                                                "flex_mode": "none",
                                                "horizontal_spacing": "default",
                                                "background_style": "default",
                                                "columns": [
                                                    {
                                                        "tag": "column",
                                                        "elements": [
                                                            {
                                                                "tag": "div",
                                                                "text": {
                                                                    "tag": "plain_text",
                                                                    "content": "0%",
                                                                    "text_size": "heading",
                                                                    "text_align": "center",
                                                                    "text_color": "default"
                                                                }
                                                            }
                                                        ],
                                                        "width": "weighted",
                                                        "weight": 1
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "markdown",
                                                "content": "<text_tag color='green'>领先部门 100%</text_tag>",
                                                "text_align": "center",
                                                "text_size": "normal"
                                            }
                                        ],
                                        "weight": 1
                                    }
                                ],
                                "margin": "0px 0px 0px 0px"
                            }
                        ],
                        "weight": 1
                    }
                ],
                "margin": "16px 0px 0px 0px"
            },
            {
                "tag": "markdown",
                "content": ":STRIVE: **待优化的任务类型**",
                "text_align": "left",
                "text_size": "heading"
            },
            {
                "tag": "column_set",
                "flex_mode": "none",
                "horizontal_spacing": "8px",
                "horizontal_align": "left",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<text_tag color='red'>1</text_tag> 加班申请",
                                "text_align": "left",
                                "text_size": "normal"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "8px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<font color='grey'>低于部门</font> <font color='red'>95% </font><font color='grey'>的审批人</font> ",
                                "text_align": "right",
                                "text_size": "notation"
                            }
                        ],
                        "weight": 1
                    }
                ],
                "margin": "16px 0px 0px 0px"
            },
            {
                "tag": "column_set",
                "flex_mode": "none",
                "horizontal_spacing": "8px",
                "horizontal_align": "left",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<text_tag color='red'>2</text_tag> 休假申请",
                                "text_align": "left",
                                "text_size": "normal"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<font color='grey'>低于部门</font> <font color='red'>55% </font><font color='grey'>的审批人</font> ",
                                "text_align": "right",
                                "text_size": "notation"
                            }
                        ],
                        "weight": 1
                    }
                ],
                "margin": "16px 0px 0px 0px"
            },
            {
                "tag": "markdown",
                "content": ":CheckMark:**效率高的任务类型**",
                "text_align": "left",
                "text_size": "heading"
            },
            {
                "tag": "column_set",
                "flex_mode": "none",
                "horizontal_spacing": "8px",
                "horizontal_align": "left",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<text_tag color='green'>1</text_tag> 数据权限申请",
                                "text_align": "left",
                                "text_size": "normal"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<font color='grey'>高于部门</font> <font color='green'>68% </font><font color='grey'>的审批人</font> ",
                                "text_align": "right",
                                "text_size": "notation"
                            }
                        ],
                        "weight": 1
                    }
                ],
                "margin": "16px 0px 0px 0px"
            },
            {
                "tag": "column_set",
                "flex_mode": "none",
                "horizontal_spacing": "8px",
                "horizontal_align": "left",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<text_tag color='green'>2</text_tag> BOT推送消息",
                                "text_align": "left",
                                "text_size": "normal"
                            }
                        ],
                        "weight": 1
                    },
                    {
                        "tag": "column",
                        "width": "weighted",
                        "vertical_align": "center",
                        "vertical_spacing": "4px",
                        "elements": [
                            {
                                "tag": "markdown",
                                "content": "<font color='grey'>高于部门</font> <font color='green'>56% </font><font color='grey'>的审批人</font> ",
                                "text_align": "right",
                                "text_size": "notation"
                            }
                        ],
                        "weight": 1
                    }
                ],
                "margin": "16px 0px 0px 0px"
            }
        ]
    },
    "i18n_header": {
        "zh_cn": {
            "title": {
                "tag": "plain_text",
                "content": "我的近期审批效率"
            },
            "subtitle": {
                "tag": "plain_text",
                "content": "日期范围：2024.03.01 至 2024.03.31"
            },
            "template": "orange",
            "icon": {
                "tag": "standard_icon",
                "token": "approval_colorful"
            }
        }
    }
}
```