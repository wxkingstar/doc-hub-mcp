<!--
title: 全圆角按钮
id: 7475195771685470210
fullPath: /tools-and-resources/design-specification/component---data-entry/button/button_round
updatedAt: 1742375620000
source: https://open.feishu.cn/document/design-specification/component---data-entry/button/button_round
-->
# 全圆角按钮
Button_Round 全圆角按钮是一种特殊按钮样式，基于产品的营销目标和需求，仅以下 3 类营销场景可以使用全圆角按钮，以促进用户转化和产品收益增值。

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 15%;">场景类型</md-th>
      <md-th style="width: 65%;">说明</md-th>
      <md-th style="width: 20%;">上线示例</md-th>
    </md-tr>
    <md-tr>
      <md-td>**产品活动营销**</md-td>
      <md-td>策划性质的活动，使用促销、节日活动等方式吸引用户。（例如：具时效性的促销活动、节日特惠）</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/94dd1093825c8c0593610e4e9972dde4_8ny0HBVeOP.png?height=1800&lazyload=true&width=3200)</md-td>
    </md-tr>
    <md-tr>
      <md-td>**产品销售官网**</md-td>
      <md-td>官网产品展示与促进销售（例如：产品功能介绍页、价格对比方案、行业成功案例、产品咨询、产品推广等内容。）</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/87eabb4d6285eca75b7b7414adf48d28_jR1M7nPdkH.png?height=1800&lazyload=true&width=3200)</md-td>
    </md-tr>
    </md-tr>
    <md-tr>
      <md-td>**社区/内容运营**</md-td>
      <md-td>以内容创作为核心的长期运营，提升用户活跃度和粘性。（例如：知识型文章/视频、线上线下互动活动）</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ef4b03de9d7c1ed417e51d6aaa9e868_qbRh4ebYGL.png?height=1800&lazyload=true&width=3200)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

:::html
<md-alert>**非以下类型的营销场景请勿使用全圆角按钮**</md-alert>
:::



## 组成要素
:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1ec6dfb04c04bfeec606f10c02b57a2c_WELfsOQOmX.png"
        alt="图片" style="max-width: 600px;">
:::

按钮样式容器为全圆角边框，基础属性与 [Button_Basic 普通按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_basic) 保持一致。
 
 

## 易混淆变体区分

:::html
<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid #D5D5D6;
        }
        
        td {
            border: 1px solid #EAEAEA;
            padding: 0px;
        }
    </style>
</head>
</html>
:::

:::html
<md-alert>为确保流程一致性与操作直观，**常规操作应避免使用全圆角按钮**，可能造成视觉误导，让用户误以为有特殊功能或重要性，影响使用体验。</md-alert>
:::

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 30%;">类型 </md-th>
      <md-th style="width: 70%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>**Button_Round 全圆角按钮**<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2fd3fe00cfadcf556a25d49d6de893d2_hwNVzzJRa7.png?height=630&lazyload=true&width=1280)  </md-td>
      <md-td>**目标场景**：<br>仅在营销类场景上使用，用于促进用户转化和产品收益增值的营销目标。<br><br>**样式：**<br>容器外形有全圆角边框。</md-td>
    </md-tr>
    <md-tr>
      <md-td>**[Button_Basic 基础按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_basic)**<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/10e1944e393133524fe13eafcd7aecc4_O7OhCVd19R.png?height=630&lazyload=true&width=1280) </md-td>
      <md-td>**目标场景**：<br>用于常规操作，如主流程命令、页面引导操作、辅助命令和页面非引导操作。<br><br>**样式：**<br>容器外形有小圆角边框。</md-td>
    </md-tr>
    <md-tr>
      <md-td>**[Button_Float 悬浮按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_float)**<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30acfb1ce0440f97651ad756d7aadf3b_5L049wwpRO.png?height=630&lazyload=true&width=1280)  </md-td>
      <md-td>**目标场景**：<br>固定在页面中某个位置，滚动内容/容器时位置不发生变化。<br><br>**样式：**<br>容器外形有全圆角边框，带有阴影和图标或文本。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



## 最佳实践

全圆角按钮的“交互”和“适配”设计规范，请遵循 [Button_Basic 基础按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_basic)


**仅在营销场景中使用，常规操作的链路流程中请使用普通按钮**

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cc81184695e1f6bf6556437221b5b574_Y5hKyoVu8b.png?height=800&lazyload=true&width=1680)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a3cb3d338bbc48acf50184ba4badd9f9_yjxea6PGP4.png?height=800&lazyload=true&width=1680)  </md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>仅在营销场景点位上使用全圆角按钮，以促进用户转化和产品收益增值。典型文案包括：“免费试用”、“立即体验”等。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>
1. 避免在常规操作链路（如登录流程、付费流程）中使用全圆角按钮，可能导致样式混乱或视觉误导。
1. 关注跨页面流程中按钮样式，避免样式混用。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
