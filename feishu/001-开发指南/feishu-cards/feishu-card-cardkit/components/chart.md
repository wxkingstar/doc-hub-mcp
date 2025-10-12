<!--
title: 图表
id: 7487804894023319553
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/chart
updatedAt: 1750854992000
source: https://open.feishu.cn/document/feishu-cards/feishu-card-cardkit/components/chart
-->
# 图表

卡片搭建工具中的图表组件基于 [VChart](https://www.visactor.io/) 的图表定义，支持折线图、面积图、柱状图、饼图、词云等多种数据呈现方式，帮助你可视化各类信息，提高信息沟通效率。本文档介绍如何在搭建工具中使用新版卡片的图表组件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/96c3853b0423569e465cd9106f167bad_uDjZt75bUe.png?height=784&lazyload=true&maxWidth=600&width=1911)

## 注意事项

- 单张卡片建议最多放置五个图表组件。
- 图表组件暂不支持 JavaScript 语法。
- 移动端暂不支持以下 VChart 相关属性，若在图表组件中指定以下 VChart 属性，图表将在移动端加载失败：
    - [纹理属性（barChart.bar.style.texture）](https://www.visactor.io/vchart/option/barChart#bar.style.texture)
    - [圆锥渐变属性](https://www.visactor.io/vchart/guide/tutorial_docs/Chart_Concepts/Series/Mark)，即 gradient 设为 `conical`
    - [形状词云基于 grid 像素布局](https://www.visactor.io/vchart/option/wordCloudChart#wordCloudConfig.layoutMode)，即 `wordCloudChart.wordCloudConfig.layoutMode` 设为 `grid`
    - [extensionMark 图片的 repeat 属性](https://www.visactor.io/vchart/option/barChart-extensionMark-image#style.repeatX)（extensionMark-image.style.repeatX 或 extensionMark-image.style.repeatY）
    - [图元背景（barChart.bar.style.background）不支持 svg](https://www.visactor.io/vchart/option/barChart#bar.style.background)
- 为提升图表在不同终端的展示效果、优化终端用户体验，平台对你传入的图表定义（chart_spec）默认追加了[媒体查询](https://www.visactor.io/vchart/guide/tutorial_docs/Self-adaption/Media_Query)配置。若你希望自行控制图表的自适应展示逻辑，可在图表定义（chart_spec）中设置 `"media":[]` 以禁用默认追加的配置。
## 参考案例

- 卡片搭建工具案例库对于不同类型的图表，均提供了参考案例：[折线图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBExnVIk72I)、[面积图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEeXKwS89P)、[柱状图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEt2riStuD)、[条形图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfD6tTua3B)、[环图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKi6Z4moG)、[饼图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKjdTIxmL)、[组合图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKFn38wkc)、[漏斗图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKKICSsSm)、[散点图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKWqDoOUj)、[雷达图](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKTulc2bx)、[条形进度](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKb35pHoe)、[环形进度](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKGNGvOUv)、[词云](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqRfKnZCC6oP)。
- 卡片搭建工具案例库中也提供了[图表定义绑定变量案例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEedi2vzUM)，你可直接前往卡片搭建工具试一试。

## 组件配置

### 属性

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">配置项</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>图表定义</md-td>
      <md-td>基于 VChart 的图表定义，支持折线图、面积图、柱状图、条形图等 13 种图表。数据结构与 VChart 的 `spec` 参数内数据结构一致。要查看各类图表属性的详细说明，参考 VChart [教程文档](https://www.visactor.io/vchart/guide/tutorial_docs/Chart_Types/chart_types)与[配置文档](https://www.visactor.io/vchart/option/barChart)。要为图表定义绑定变量，参考下文 **变量** 一节。
        
        
        
</md-td>
    </md-tr>
    
    
    
    <md-tr>
      <md-td>高度</md-td>
      <md-td>图表的高度。支持配置：
-   自适应：根据宽高比自动计算，此选项支持配置图表的宽高比，默认为 PC 端 16:9；移动端 1:1。支持配置以下比例：
    - 1:1
    - 2:1
    - 4:3
    - 16:9
- 自定义：自定义图表高度，取值范围：[1,999]px</md-td>
    </md-tr>
    <md-tr>
      <md-td>图表主题</md-td>
      <md-td>图表的主题样式。当图表内存在多个颜色时，可使用该字段调整颜色样式。若你在 `chart_spec` 字段中声明了样式类属性，该字段无效。
-   brand：默认样式，与飞书客户端主题样式一致。
- rainbow：同色系彩虹色。
- complementary：互补色。
- converse：反差色。
- primary：主色。</md-td>
    </md-tr>
    <md-tr>
      <md-td>是否可在独立窗口查看</md-td>
      <md-td>开启后：
        
-   PC 端：用户可点击图表组件右上角的 **独立窗口查看** 按钮，在独立飞书窗口查看
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9e20dc8139514fc232a051617c10e37a_P1A1Y3vwtd.png?height=527&lazyload=true&maxWidth=300&width=845)
        
        
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/725ddf03a9d88eb8e9467b57584e3ce5_GEN3nflT39.png?height=845&lazyload=true&maxWidth=300&width=1536)
- 移动端：用户可点击图表，全屏查看</md-td>
    </md-tr>
    <md-tr>
      <md-td>组件 ID</md-td>
      <md-td>组件在卡片内的唯一标识，用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/feishu-card-resource-overview#791c8e74)对组件进行增删改时指定组件。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td>
    </md-tr>
    
  </md-tbody>
</md-table>
:::

### 样式

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">配置项</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>外边距</md-td>
      <md-td>为整个组件配置外边距。支持配置上、下、左、右四个方向的外边距，取值范围为 [-99,99]px。具体操作如下图：
-  一键配置：
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7d871e607650a2a473af899e537f43ae_cyZ5qgK6Vg.gif?height=736&lazyload=true&maxWidth=600&width=1554)
     
- 为不同方向分别配置外边距：
       
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fa696a9269d364a058c77468d31c4300_lJscrD21w9.gif?height=740&lazyload=true&maxWidth=600&width=1562)
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 变量

在图表组件中，你可选择为图表的定义绑定变量，而不直接指定数据。你可点击此[图表案例 Demo](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEedi2vzUM)，前往卡片搭建工具查看绑定变量示例。本小节介绍如何为图表定义绑定变量。

**添加变量**

1. 在图表组件的图表定义配置项中，点击 **绑定变量**。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f7383cb540bebdde2215f3d26b4675d_JyRCr8oiu8.png?height=740&lazyload=true&maxWidth=600&width=1543)
1. 在 **选择变量** 拉下选项中，点击 **新建变量**，参考下表填写内容。

    :::html
    <md-table>
      <md-thead>
        <md-tr>
          <md-th style="width: 10%;">配置项</md-th>
          <md-th style="width: 40%;">描述</md-th>
          <md-th style="width: 30%;">示例</md-th>
        </md-tr>
      </md-thead>
      <md-tbody>
        <md-tr>
          <md-td>类型</md-td>
          <md-td>变量的类型。在图表组件中，你仅能使用 <strong>对象</strong> 类型变量。</md-td>
          <md-td>对象</md-td>
        </md-tr>
        <md-tr>
          <md-td>变量名称</md-td>
          <md-td>一般为字母或字母与下划线的组合。在之后发送卡片时，你需要为该变量名（key）赋值（value）。</md-td>
          <md-td><code>chart</code></md-td>
        </md-tr>
        <md-tr>
          <md-td>变量描述</md-td>
          <md-td>此处可补充解释该变量的用法。可不填。</md-td>
          <md-td>图表的定义数据</md-td>
        </md-tr>
        <md-tr>
          <md-td>模拟数据</md-td>
          <md-td>图表定义的模拟数据。数据结构与 VChart 的 spec 参数内数据结构一致。要查看各类图表属性的详细说明，参考 VChart [教程文档](https://www.visactor.io/vchart/guide/tutorial_docs/Chart_Types/chart_types)与[配置文档](https://www.visactor.io/vchart/option/barChart)。</md-td>
          <md-td>点击此[图表案例 Demo](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBEedi2vzUM)，前往卡片搭建工具查看不同类型图对应的不同模拟数据。</md-td>
        </md-tr>
      </md-tbody>
    </md-table>
    :::
    

**为变量赋值**

添加好变量后，在发送卡片时，即可通过请求体的 `template_variable` 字段为变量赋值。`template_variable` 字段是卡片绑定的变量列表，格式为 `{key:value}`，其中的 `key` 即为你定义的变量名称。详情参考[为卡片变量赋值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/configure-card-variables#a6abb723)。
