<!--
title: 样式
id: 7462709322368942084
fullPath: /tools-and-resources/design-specification/design-language/style
updatedAt: 1739784708000
source: https://open.feishu.cn/document/design-specification/design-language/style
-->
# 样式
系统样式是指系统的视觉风格，它由颜色、圆角、投影、排版等视觉元素共同构成，统一系统的样式风格，能最大程度地提高产品的一致性、整体感，帮助建立完整的、有别于其他产品的视觉形象。
  

## 圆角

适当的圆角样式能使界面看起来柔和友好，拉近用户与产品的距离。
通常情况下，圆角的使用遵循面积越大的组件使用越大的圆角，来保持整体视觉的平衡与一致。而在一些需要聚焦的情况下，我们通过打破这样的规则，来引起用户的视觉注意。

### 常用圆角分类


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
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>**圆角类型**</md-td>
      <md-td>**图示**</md-td>
      <md-td>**圆角 Radius**</md-td>
      <md-td>**说明**</md-td>
      <md-td>**Web 组件**</md-td>
      <md-td>**Mobile 组件@1x**</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**Radius-XS**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7c740e8473f170233fd47080cd9ca2d_i0ftdNh4Mc.png?height=320&lazyload=true&width=240)</md-td>
      <md-td>4px</md-td>
      <md-td>适用于标签、复选框等原子组件</md-td>
      <md-td>
        - 复选框<br>
- 标签 Tag / Basic<br>
- 卡片内信息组 Section card<br>
- Doc 表格外框</md-td>
      <md-td>
- 矩形标签<br>
- 菜单item</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**Radius-S**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/60c219d4473a8e6778687bbe50818525_QxHDpeQa6F.png?height=320&lazyload=true&width=240)</md-td>
      <md-td>6px</md-td>
      <md-td>适用于按钮、输入框、全局提示等小型组件</md-td>
      <md-td>
- 矩形按钮<br>
- 文字 / 图标按钮的 hover 背景色块 / Basic<br>
- 输入框<br>
- 下拉选择（含基础选择、级联选择、树选择）<br>
- 下拉菜单<br>
- 常驻提示<br>
- 临时提示</md-td>
      <md-td>
- 矩形按钮<br>
- 文字 图标按钮的 hover 背景色<br>
- 输入框<br>
- 矩形头像<br>
- 筛选器filter<br>
- 输入框 Input<br>
- 步进器 Stepper</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**Radius-M**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f782fc13672126d42f205a25c60d5289_4U4XgkLaXx.png?height=320&lazyload=true&width=240)</md-td>
      <md-td>8px</md-td>
      <md-td>适用于工具栏等承载小型组件卡片容器组件</md-td>
      <md-td>
- 开放平台官网-左侧导航 tab 选中态<br>
- 应用卡片<br>
- 对话框<br>
- 弹窗<br>
- 穿梭框<br>
- 气泡卡片<br>
- 上传卡片<br>
- 用户引导气泡卡片<br>
- 系统文本型文字提示 Tooltips / Light</md-td>
      <md-td>
- 对话框Dialog<br>
- 菜单面板<br>
- 卡片 Card<br>
- 用户引导气泡卡片<br>
- 表情面板<br>
- 临时提示（多行）</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**Radius-L**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86d75589ae3c8f88355f9e4e93686be8_DK3LJT0xGU.png?height=320&lazyload=true&width=240)</md-td>
      <md-td>10px</md-td>
      <md-td>适用于承载较复杂内容的大卡片容器组件</md-td>
      <md-td>
- 全屏模态页面<br>
- 列表list</md-td>
      <md-td>
- 卡片 Card<br>
- 全屏模态页</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**Radius-XL**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7038fb25ccd519ae61f59ed9e48d0b9f_0XjF8vsHKr.png?height=320&lazyload=true&width=240) </md-td>
      <md-td>全圆角</md-td>
      <md-td>适用于需要聚焦、提升用户点击率或关注度的组件</md-td>
      <md-td>
- 全圆角按钮、悬浮按钮<br>
- 圆形头像<br>
- 徽标 Badge<br>
- 单选框 Radio<br>
- 开关 Switch<br>
- 滑杆 Slider<br>
- 人员标签 Tag / Avatar</md-td>
      <md-td>
- 临时提示（单行）<br>
- 单选框<br>
- 复选框<br>
- 全圆角标签<br>
- 开关<br>
- 徽标<br>
- 圆形头像<br>
- 全圆角按钮、悬浮按钮<br>
- 滑杆 Slider</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


## 投影

### 简介

投影是用来塑造元素间的高程关系与信息层级的，能帮助用户更好地理解产品的结构与内容，提升界面的品质感。结合我们的品牌风格，投影整体是比较轻量的。投影、描边、色块都能起到划分信息模块和层级的作用，在设计时，需要根据页面层级判断是否增加描边或分割线，如仅使用投影即够区分，则可不增加描边或分割线。投影如需叠加使用，可根据页面效果选用不同参数投影。
投影主要受到高程、光源的影响。
  

### 光源对投影方向的影响

在物理世界中，光源会对投影的方向与大小产生影响。这个原理应用到 UI 空间层级划分中时，结合系统整体轻量的设计风格，光源被假定为高度不变的自然光，影响仅作用于投影的方向，即仅对 x，y 的值产生影响。我们的常用方向大致分为 4 类：
- **投影向下（y 值为正数）** ：主要应用于顶部导航栏、常规卡片与组件等
- **投影向上（y 值为负数）** ：主要应用于底部导航或工具栏等
- **投影向右（x 值为正数）** ：主要应用于左侧导航栏、左侧侧拉窗等
- **投影向左（x 值为负数）** ：主要应用于右侧导航栏、右侧侧拉窗等

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f0e29340163d53c926426ede89dfc877_hM1RlQQlNE.png?height=1458&lazyload=true&width=3600)
  

### 投影参数

**PC端投影**

**shadow-down**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9169167bb6f1a9df9417c35801ae0314_CRKZSfrQGs.png?height=816&lazyload=true&width=2270)
**色值**
- #1F2327
**数值**

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1<br>1 级投影 </md-td>
      <md-td>S2<br>2 级投影</md-td>
      <md-td>S3<br>3 级投影</md-td>
      <md-td>S4<br>4 级投影</md-td>
      <md-td>S5<br>5 级投影</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：1px<br>Blur：2px<br>Spread：-2<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：2px<br>Blur：4px<br>Spread：-4<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：3px<br>Blur：6px<br>Spread：-6<br>transparency：5%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：-8<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：12px<br>Spread：-10<br>transparency：6%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：4px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：0<br>transparency：3%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：12px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：24px<br>Spread：0<br>transparency：4%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：8px<br>Spread：2<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：16px<br>Spread：4<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：18px<br>Spread：6<br>transparency：3%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：24px<br>Spread：8<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：10px<br>Blur：36px<br>Spread：10<br>transparency：4%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 
**shadow-left**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c322a78eba5bac499a17fca17482dea2_1FlrAvZt6X.png?height=816&lazyload=true&width=2270)
**色值**
- #1F2327
**数值**
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：-1px<br>Y：0px<br>Blur：2px<br>Spread：-2<br>transparency：2%</md-td>
      <md-td>X：-2px<br>Y：0px<br>Blur：4px<br>Spread：-4<br>transparency：2%</md-td>
      <md-td>X：-3px<br>Y：0px<br>Blur：6px<br>Spread：-6<br>transparency：5%</md-td>
      <md-td>X：-4px<br>Y：0px<br>Blur：8px<br>Spread：-8<br>transparency：6%</md-td>
      <md-td>X：-6px<br>Y：0px<br>Blur：12px<br>Spread：-10<br>transparency：6%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：-2px<br>Y：0px<br>Blur：4px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：-4px<br>Y：0px<br>Blur：8px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：-4px<br>Y：0px<br>Blur：8px<br>Spread：0<br>transparency：3%</md-td>
      <md-td>X：-6px<br>Y：0px<br>Blur：12px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：-8px<br>Y：0px<br>Blur：24px<br>Spread：0<br>transparency：4%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：-2px<br>Y：0px<br>Blur：8px<br>Spread：2<br>transparency：2%</md-td>
      <md-td>X：-4px<br>Y：0px<br>Blur：16px<br>Spread：4<br>transparency：2%</md-td>
      <md-td>X：-6px<br>Y：0px<br>Blur：18px<br>Spread：6<br>transparency：3%</md-td>
      <md-td>X：-8px<br>Y：0px<br>Blur：24px<br>Spread：8<br>transparency：4%</md-td>
      <md-td>X：-10px<br>Y：0px<br>Blur：36px<br>Spread：10<br>transparency：4%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
**shadow-right**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d4886103ad65f798e6e65ba9e2128237_9dftshQS8n.png?height=816&lazyload=true&width=2270)
**色值**
- #1F2327
**数值**
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：1px<br>Y：0px<br>Blur：2px<br>Spread：-2<br>transparency：2%</md-td>
      <md-td>X：2px<br>Y：0px<br>Blur：4px<br>Spread：-4<br>transparency：2%</md-td>
      <md-td>X：3px<br>Y：0px<br>Blur：6px<br>Spread：-6<br>transparency：5%</md-td>
      <md-td>X：4px<br>Y：0px<br>Blur：8px<br>Spread：-8<br>transparency：6%</md-td>
      <md-td>X：6px<br>Y：0px<br>Blur：12px<br>Spread：-10<br>transparency：6%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：2px<br>Y：0px<br>Blur：4px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：4px<br>Y：0px<br>Blur：8px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：4px<br>Y：0px<br>Blur：8px<br>Spread：0<br>transparency：3%</md-td>
      <md-td>X：6px<br>Y：0px<br>Blur：12px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：8px<br>Y：0px<br>Blur：24px<br>Spread：0<br>transparency：4%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：2px<br>Y：0px<br>Blur：8px<br>Spread：2<br>transparency：2%</md-td>
      <md-td>X：4px<br>Y：0px<br>Blur：16px<br>Spread：4<br>transparency：2%</md-td>
      <md-td>X：6px<br>Y：0px<br>Blur：18px<br>Spread：6<br>transparency：3%</md-td>
      <md-td>X：8px<br>Y：0px<br>Blur：24px<br>Spread：8<br>transparency：4%</md-td>
      <md-td>X：10px<br>Y：0px<br>Blur：36px<br>Spread：10<br>transparency：4%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-up**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/64a51af03852ef85b2bf232ec77521b5_j3Mo0Bksor.png?height=816&lazyload=true&width=2270)
**色值**
- #1F2327
**数值**

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：-1px<br>Blur：2px<br>Spread：-2<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-2px<br>Blur：4px<br>Spread：-4<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-3px<br>Blur：6px<br>Spread：-6<br>transparency：5%</md-td>
      <md-td>X：0px<br>Y：-4px<br>Blur：8px<br>Spread：-8<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：-6px<br>Blur：12px<br>Spread：-10<br>transparency：6%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：-2px<br>Blur：4px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-4px<br>Blur：8px<br>Spread：0<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-4px<br>Blur：8px<br>Spread：0<br>transparency：3%</md-td>
      <md-td>X：0px<br>Y：-6px<br>Blur：12px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：-8px<br>Blur：24px<br>Spread：0<br>transparency：4%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：-2px<br>Blur：8px<br>Spread：2<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-4px<br>Blur：16px<br>Spread：4<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：-6px<br>Blur：18px<br>Spread：6<br>transparency：3%</md-td>
      <md-td>X：0px<br>Y：-8px<br>Blur：24px<br>Spread：8<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：-10px<br>Blur：36px<br>Spread：10<br>transparency：4%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-down-pri**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/706f7b29893075c22f074da68c4d98b8_Q5BE0L4uwj.png?height=816&lazyload=true&width=2270)
**色值**
- #245BDB
  
**数值**
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：1px<br>Blur：2px<br>Spread：-2<br>transparency：12%</md-td>
      <md-td>X：0px<br>Y：2px<br>Blur：4px<br>Spread：-4<br>transparency：12%</md-td>
      <md-td>X：0px<br>Y：3px<br>Blur：6px<br>Spread：-6<br>transparency：14%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：-4<br>transparency：16%</md-td>
      <md-td>X：0px<br>Y：10px<br>Blur：12px<br>Spread：-10<br>transparency：18%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：4px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：0<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>Spread：0<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：12px<br>Spread：0<br>transparency：8%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：24px<br>Spread：0<br>transparency：10%</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：8px<br>Spread：2<br>transparency：2%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：16px<br>Spread：4<br>transparency：3%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：18px<br>Spread：6<br>transparency：4%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：24px<br>Spread：8<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：10px<br>Blur：36px<br>Spread：10<br>transparency：6%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
  
  

**移动端投影**

**shadow-down**
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：2px<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：2px<br>Blur：6px<br>transparency：8%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>transparency：9%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：16px<br>transparency：10%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：36px<br>transparency：16%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-up**
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：-2px<br>Blur：2px<br>transparency：6%</md-td>
      <md-td>X：0px<br>Y：-2px<br>Blur：6px<br>transparency：8%</md-td>
      <md-td>X：0px<br>Y：-4px<br>Blur：8px<br>transparency：9%</md-td>
      <md-td>X：0px<br>Y：-6px<br>Blur：16px<br>transparency：10%</md-td>
      <md-td>X：0px<br>Y：-8px<br>Blur：36px<br>transparency：16%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-left**

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：-2px<br>Y：0px<br>Blur：2px<br>transparency：6%</md-td>
      <md-td>X：-2px<br>Y：0px<br>Blur：6px<br>transparency：8%</md-td>
      <md-td>X：-4px<br>Y：0px<br>Blur：8px<br>transparency：9%</md-td>
      <md-td>X：-6px<br>Y：0px<br>Blur：16px<br>transparency：10%</md-td>
      <md-td>X：-8px<br>Y：0px<br>Blur：36px<br>transparency：16%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-right**

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：2px<br>Y：0px<br>Blur：2px<br>transparency：6%</md-td>
      <md-td>X：2px<br>Y：0px<br>Blur：6px<br>transparency：8%</md-td>
      <md-td>X：4px<br>Y：0px<br>Blur：8px<br>transparency：9%</md-td>
      <md-td>X：6px<br>Y：0px<br>Blur：16px<br>transparency：10%</md-td>
      <md-td>X：8px<br>Y：0px<br>Blur：36px<br>transparency：16%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**shadow-down-pri**

**色值**
- #245BDB

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-td>S1</md-td>
      <md-td>S2</md-td>
      <md-td>S3</md-td>
      <md-td>S4</md-td>
      <md-td>S5</md-td>
    </md-tr>
    <md-tr>
      <md-td>X：0px<br>Y：2px<br>Blur：4px<br>transparency：12%</md-td>
      <md-td>X：0px<br>Y：2px<br>Blur：6px<br>transparency：16%</md-td>
      <md-td>X：0px<br>Y：4px<br>Blur：8px<br>transparency：18%</md-td>
      <md-td>X：0px<br>Y：6px<br>Blur：16px<br>transparency：20%</md-td>
      <md-td>X：0px<br>Y：8px<br>Blur：36px<br>transparency：24%</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
  
<br> 

## 分割线 & 描边

分割线与描边是用于协调界面层级关系的，通常用于同一高程的信息模块划分。
在一些不同高程的划分时，描边也可以辅助投影，强化视觉上的区分效果。

### 常用参数分类

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">描边</md-th>
      <md-th style="width: 27%;">可交互控件描边</md-th>
      <md-th style="width: 27%;">卡片描边</md-th>
      <md-th style="width: 27%;">Feed 分割线 & 设置页分割线 & 列表分割线</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td>**颜色**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e1bf26ae146471cc668984bc1350ebad_FtnzWbdOOG.png?height=100&lazyload=true&width=200) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/00b832d8f5e0cd4675d630366a156cc2_suQJgH2Esf.png?height=100&lazyload=true&width=200)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc6125aedfbe25f863bb21a1926009ca_Ez2stqD7WC.png?height=100&lazyload=true&width=200)</md-td>
    </md-tr>
    <md-tr>
      <md-td>**色值**</md-td>
      <md-td>#d0d3d6</md-td>
      <md-td>#dee0e3</md-td>
      <md-td>#1f2329, 15%</md-td>
    </md-tr>
    <md-tr>
      <md-td>**border**</md-td>
      <md-td>1px</md-td>
      <md-td>1px</md-td>
      <md-td>1px&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.5px</md-td>
    </md-tr>
    <md-tr>
      <md-td>**设备**</md-td>
      <md-td>Web<br>Mobile @1x<br>Desktop</md-td>
      <md-td>Web<br>Mobile @1x<br>Desktop</md-td>
      <md-td>Web&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile @1x<br>Desktop</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 背景色

背景色与描边一样，是用于协调界面层级关系，对同一个高程中的信息模块进行划分。

### 常用背景色分类


:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">参数</md-th>
      <md-th style="width: 22.5%;">示例</md-th>
      <md-th style="width: 22.5%%;"></md-th>
      <md-th style="width: 22.5%%;"></md-th>
      <md-th style="width: 22.5%%;"></md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**参数**</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8671e1e74c94cba52eba5327c0d191d8_QFIpb5S3Bc.png?height=120&lazyload=true&width=240)<br>#EFF0F1</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/60d47d7ecaf3809e693f6e0bacab2b66_e6bCIcvE8g.png?height=120&lazyload=true&width=240)<br>#F2F3F5</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dab6a5082ac797821d3baf12530c7ba1_jzB80dm3cN.png?height=120&lazyload=true&width=240)<br>#F5F6F7</md-td>
       <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fff3c3050a3d19a77973752f96d00e5e_M33bssw9Uh.png?height=120&lazyload=true&width=240)<br>rgba：#000000 55%</md-td>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**场景**</md-td>
      <md-td>**Web**<br>
- 输入框 disable 态时的背景色<br>
- 下拉选框中选项 hover 时的背景色</md-td>
      <md-td>**Web**<br>
- 产品详情页背景色<br>
- 表单中分组栏的背景色

<br> **Mobile**<br>
- 设置页背景<br>
- 气泡背景     

<br> **Desktop**<br>
- 栏背景<br>
- 气泡背景<br>
- 卡片背景
      </md-td>
      <md-td>**Web**<br>
- 弹窗中的数据组的背景色<br>
- 审批流中数据组的背景色</md-td>
      <md-td>**Web**<br>
- 弹窗 / 浮层下的遮罩
      
<br>      **Mobile**<br>
- 弹窗 / 浮层下的遮罩
        
<br>        **Desktop**<br>
- 弹窗 / 浮层下的遮罩
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 场景示例


![水印图.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/070657bf5d52bc4c6e0555646d8bada4_hqOG9fosfe.png?lazyload=true&width=2509&height=4096)