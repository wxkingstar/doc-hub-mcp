<!--
title: 悬浮按钮
id: 7475195771685568514
fullPath: /tools-and-resources/design-specification/component---data-entry/button/button_float
updatedAt: 1742375578000
source: https://open.feishu.cn/document/design-specification/component---data-entry/button/button_float
-->
# 悬浮按钮
悬浮按钮通常会固定在特定位置，即便屏幕滚动，其位置也始终保持不变。
主要存在两类用途：其一，用于执行最为重要或最为常见的行动操作。其二，快速定位到当前场景的某个特定位置。

常见的场景包括“新建”、“帮助/客服”、“回到顶部”、“跳转 xx 消息/评论”等等。

  

## 组成要素

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7f1a7972a403636c14893e1299035605_XbyqzCmfHL.png"
        alt="图片" style="max-height: 250px;">
:::

1. **表意图标** ： 仅当图标含义易识别时才使用图形，增强按钮的识别性。（悬浮按钮场景中通常必选）
1. **背景容器** ： 用于承载这个按钮的容器背景，容器边框
1. **文本标签** ： 动词或短语描述按钮操作的文本


:::html
<md-alert>悬浮按钮中“仅图标”类型较为常见，鼠标移过必须有操作提示。</md-alert>
:::


  
  

## 易混淆变体区分

> 通过表格形式说明主要对象易混淆变体的区分方法（场景/样式），重点是通过这部分能清晰理解和易混变体间的区分方法，避错。

### 悬浮按钮和全圆角

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
      <md-th style="width: 30%;">类型</md-th>
      <md-th style="width: 70%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>**悬浮按钮**<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d7abf51ce5f36df4351b0ff02a0b3baa_Ox9goIKNvd.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
固定在页面中某个位置，滚动内容/容器时位置不发生变化。<br><br>**样式：**<br>
高程高于常规内容，带有阴影。（圆角和全圆角按钮相同）</md-td>
    </md-tr>
    <md-tr>
      <md-td>**全圆角按钮**<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8991afadc7355539ffbcc69c990ecfe3_taSMTNBees.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
产品营销点位或仅限官网使用场景。<br><br>**样式：**<br>
无阴影，与页面常规内容同一高程，尺寸&交互和 BasicButton 一致</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 主要悬浮和次要悬浮

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 8%;">优先级</md-th>
      <md-th style="width: 22%;">类型</md-th>
      <md-th style="width: 70%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>**高**</md-td>
      <md-td>**主要悬浮按钮**<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/298a07539f7acb4141ea590b7203797f_uhO0QyjkK5.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
着重突显屏幕或模块中最为关键或极度想要吸引用户的操作，使其悬浮于所有其他元素之上，且始终处于模块的右下方。 <br><br>**常见操作：**<br>
“新建”</md-td>
    </md-tr>
    <md-tr>
      <md-td>**低**</md-td>
      <md-td>**次要悬浮按钮**<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7a6e7fda955374b18a2ca25ba0583e3f_FMl7pMyFBZ.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
通常作为快速定位或次级全局型功能（客服等）跳转。<br><br>**常见操作：**<br>
“返回顶部”、“跳转 xxx”、“帮助中心”</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


:::html
<md-alert>判断运用主要或次要核心原则在于：在场景中是否具备强烈意愿引起用户注意力。</md-alert>
:::

  
  

## 最佳实践

### 组件细节说明


:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 20%;">尺寸</md-th>
      <md-th style="width: 80%;">使用场景</md-th>
    </md-tr>
    <md-tr>
      <md-td>**Large**<br>
高度：48px</md-td>
      <md-td>页面信息及结构较为简易（通常呈 List 形式），通过大尺寸设计来吸引用户的注意力，比如话题群-新建话题、VC 列表滚动等场景。（通常在飞书客户端使用）<br>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9af4957bf65bb6d613fa26fb06e0d467_JRoVewlC00.png" alt="图片" style="max-width: 500px;">
        </md-td>
    </md-tr>
    <md-tr>
      <md-td>**Medium**<br>
高度：40px</md-td>
      <md-td>>原有尺寸，未收集到该点位具体场景<br>
        </md-td>
    </md-tr>
    <md-tr>
      <md-td>**Small**<br>
高度：36px</md-td>
      <md-td>当信息密度较高或同时存在多个悬浮按钮时，为了防止对信息内容造成干扰，通常会采用小尺寸。（通常出现在文档、aPaaS 等网页场景中）<br>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/916e9613c7000cc7aebdf8eaa4e7ef85_HwvrexiBeZ.png" alt="图片" style="max-width: 500px;">
        </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 交互/行为

#### 悬浮按钮的菜单模式

以下两种菜单形式可供选择，以展示悬浮按钮并将其作为同类操作的聚合。 由 Hover 触发悬浮按钮的 Tooltips 说明，Click 触发展开菜单。


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
     <md-th>1.仅有一个悬浮按钮，子项少，且能用图标清晰表达
     </md-th>
     <md-th>2.有多个按钮，或多个子项、不能用图标清晰表达</md-th>
    </md-tr>
     <md-tr>
     <md-td>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ca2387519dfc4af7ac3319c9ed40e43_N6D21AHBW9.png?height=800&lazyload=true&width=1600)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/94f2bd5c775a112de1556ab3e524272c_rHbupjsrjx.png?height=800&lazyload=true&width=1600)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



  

#### 典型用法：“一键返回顶部/底部”的操作按钮

在长页面浏览或文档与资料阅读等页面详情内容冗长的情况下，一键返回顶部/底部按钮能够显著节省用户的时间和精力，增强导航的便利性。Icon 推荐使用：`icon_down-bottom_outline（推荐）`

:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c3495f57e16bfef37b4267a3eafdfcb9_re8kHUkiwO.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/48ae4be9b688da0a2332e4d0205b28ce_uabc8GUeqM.png?height=400&lazyload=true&width=840)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


  

### 布局

#### 全局型悬浮按钮位置在屏幕右下角

全局型的悬浮按钮位置往往在屏幕右下角，距下方和右侧屏幕边缘间距相同，具体间距根据实际场景定义（符合 4N 规则）。多个悬浮按钮并存时建议采用垂直布局。
:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/828ce2dd33e3c63c74ca7f142a36ddde_3ncx0I5AOd.png"
        alt="图片" style="max-height: 240px;">
:::


  

### 内容

#### 清晰易懂的图标

悬浮按钮中的图标应清晰易懂，复杂度低，鼠标悬停时应显示对应的文本提示。

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/58868fdba729a9dc65803e0dbffc7e0d_ysocRqhwSx.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7c837f918874800f8e7730a0cce745a4_iENue3dljw.png?height=400&lazyload=true&width=840)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：**<br>用户在看到该按钮时能够快速理解其作用，并且能准确地预测点击按钮后的结果 </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：**<br>图标表意不明显，且缺失文本提示说明 </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 特殊场景

#### 消息样式

部分场景中会借助“悬浮按钮”扩展文案提供功能信息，较为常见的是 IM 消息列表场景。

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 10%;">层级</md-th>
      <md-th style="width: 45%;">示意</md-th>
       <md-th style="width: 45%;">使用场景</md-th>
    </md-tr>
    <md-tr>
      <md-td>Secondary</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0426f2178f7cfaefedacc99d731c7837_QV0K52iyAx.png?height=230&lazyload=true&width=1200)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7b9c0ddb674a27aa5bff0ca514f145a_nWbDYuike5.png?height=600&lazyload=true&width=840)</md-td>
    </md-tr>
    <md-tr>
      <md-td>Primary</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/17416fa5be5a5b993b646f42b98dd8fc_gFrJO6G1jm.png?height=230&lazyload=true&width=1200)</md-td>
      <md-td>同上</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
                                                                                                 
  

#### 官网样式

全局型的悬浮按钮，仅通过图标无法清晰表意时可以使用带有文字说明的扩展形式。为保障文字显示效果，使用圆角矩形式的悬浮按钮。（通常是官网场景）


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/38b119e5c6a845208de60495246fe533_XyhZ48NJgS.png?height=630&lazyload=true&width=1280)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e71f21c74517ff2a489d885e8a858cc2_Ullhfrwn73.png?height=630&lazyload=true&width=1280)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>使用圆角矩形展示文字，文字不会被遮挡，且形状稳定</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>使用圆形带文字的悬浮按钮，文字边缘不均匀，会让用户产生不稳定感。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
