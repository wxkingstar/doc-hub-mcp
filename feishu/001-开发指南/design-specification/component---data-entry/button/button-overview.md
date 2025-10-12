<!--
title: 按钮概述
id: 7475195771685453826
fullPath: /tools-and-resources/design-specification/component---data-entry/button/button-overview
updatedAt: 1742375557000
source: https://open.feishu.cn/document/design-specification/component---data-entry/button/button-overview
-->
# 按钮
按钮用于执行用户在交互流程中触发指令、提交更改或完成的即时操作。


## 按钮类型

汇总飞书内现有各按钮相关类型与样式。
### 基础类型
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
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a11f2c083f799135e3f71f01f0313ea2_zu2A4T6UPS.png?height=400&lazyload=true&width=840)<br>[基础按钮 Button_Basic](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_basic)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e35d6fa7ca97179573169d0ceb58b031_oSZokByeBH.png?height=400&lazyload=true&width=840)<br>[文字按钮 Button_Text ](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_text)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/043798039e624dd84f5cd5dc2939f06a_3XUrAUIM4w.png?height=400&lazyload=true&width=840)<br>[链接按钮 Button_Link ](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_text)</md-td>
    </md-tr>
    <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a53e1c307b71749544ef6bde1537cf4_rz71wLCkTK.png?height=400&lazyload=true&width=840)<br>[图标按钮 Button_Icon](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_icon)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/728206d4b7e709aa96eaf4b05e507ed3_zugfP5gkh9.png?height=400&lazyload=true&width=840)<br>[悬浮按钮 Button_Float](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_float)</md-td>
     <md-td></md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


  
  
  
  
### 按钮组类型
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d11cbb58f01632dd2bb6d948c5595c52_NLPcSDVQBg.png?height=400&lazyload=true&width=840)<br>[分裂按钮 Button_Split ](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_splitbutton_menu)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7eb9dda8e97a98d90dbca1ce538b835f_yOHB584lKi.png?height=400&lazyload=true&width=840)<br>[菜单按钮 Button_Menu ](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_splitbutton_menu)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2aab2722ed02026a1423461024f2514_U0s2aiQuJB.png?height=400&lazyload=true&width=840)<br>按钮组 ButtonGroup</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

 
  
  
### 特殊类型
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ddd51f216e67a8407038785f2716fc4f_K7yoEuJlUA.png?height=400&lazyload=true&width=840)<br>[Button_Toggle 切换按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button-overview#341aeb36:~:text=%E7%89%B9%E6%AE%8A%E7%B1%BB%E5%9E%8B-,%E7%8A%B6%E6%80%81%E5%88%87%E6%8D%A2%E6%8C%89%E9%92%AE,-%E5%B8%B8%E8%A7%81%E7%B1%BB%E5%9E%8B)</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cdf469268591604c8fcf70a602355461_ModfRhs33B.png?height=400&lazyload=true&width=840)<br>[Button_Round 全圆角按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_round)</md-td>
     <md-td></md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


  
  

## 组件相关模式/场景

> 非组件细分变体，偏场景应用或组件组合说明

### 交互状态

:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f48b69ec414cfefc510aa710aa6dcb1_3XoqvbJkuH.png?height=630&lazyload=true&width=1280)<br>**1. 默认态** (Default / Normal)<br>启用的按钮默认状态</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/69f661e2614771ef93fadf6d4b0c9475_kWOVIaYWYw.png?height=630&lazyload=true&width=1280)<br>**2. 悬停态** (Hover)<br>光标悬停在按钮，提供反馈状态</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f69709fed1e578e8653d77de6fbca20f_G8xq1XYmue.png?height=630&lazyload=true&width=1280)<br>**3. 按下态** (Active / Press)<br>按压态表示用户点击</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f845c69666a6cbf3ba521f98d3637962_6rMxK6JZbK.png?height=630&lazyload=true&width=1280)<br>**4. 选中态** (Select)<br>按钮被选中（通常在容器面板打开或筛选条件选中场景）</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aef23c1097bd6d0fbacc76c2e9d7f9b9_P9lcPVnsuE.png?height=630&lazyload=true&width=1280)<br>**5. 聚焦态** (Focus-visible)<br>仅用户使用键盘或语音等输入方法，传达聚焦状态。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d714ced03595759b23d67306d10fefdb_GqCzQ14z9b.png?height=630&lazyload=true&width=1280)<br>**6. 加载** (Loading)<br>系统/操作获取数据时向用户传达加载状态。</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/334d112bb2603959fee1e64d6ad9d8b5_ysp2wh2j43.png?height=630&lazyload=true&width=1280)<br>**7. 禁用** (Disabled)<br>按钮无法进行交互，禁用状态无需满足无障碍对比度。</md-td>
      <md-td></md-td>
      <md-td></md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

 
### 内容

#### 按钮常见文案

按钮标签应尽量简短明了，清晰描述按钮执行的操作。同类型产品或场景内优先使用统一的行为文案。

<br>
**新建、 创建、添加**

:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
      <md-th style="width: 30%;">操作</md-th>
      <md-th style="width: 70%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>**新建**<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/16e4b026a06d901b7ce84778404189dc_mawGpyiOF4.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>- **目标场景**：<br>用户开始一个全新的项目或任务时，强调初始状态为空，然后用户在初始状态上进行补充或完善。<br>
- **常见示例**：<br>“新建画布”、“新建文档”、“新建多维表格”、“新建任务”等。<br>
- **操作结果**：<br>得到初始状态，需继续进行完整对象/内容操作。</md-td>
    </md-tr>
    <md-tr>
      <md-td>**添加**<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/78786855846b15aaa7e67752c2077c7d_BRjPquzyGd.png?height=400&lazyload=true&width=840)  </md-td>
      <md-td>- **目标场景**：<br>将现有对象插入到列表、集合或系统等已有内容中，通常有后缀“添加 xxx”。<br>
- **常见示例**：<br>“添加联系人/人员/好友”、“添加标签页”、“添加评论”、“添加图片”<br>
- **操作结果**：<br>目标主体增加一部分内容。</md-td>
    </md-tr>
    <md-tr>
      <md-td>**创建** `低频使用`<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fdfa304b60039b4ef3f28ffa42467e2_op6VEkF1ov.png?height=444&lazyload=true&width=840) </md-td>
      <md-td>- **目标场景**：<br>
	- 侧重于从无到有地构建一个完整的对象/事物集合，涉及到一系列操作组合。和“新建”相比，对象更加复杂。<br>
	- “创建”也经常作为“新建”触发后操作流程中的完成动作。当用户完成必要的设置、内容输入操作后，点击“创建”按钮完成实际成果转化。
- **常见示例**：<br>（流程完成时的）“创建”、创建团队”、“创建群组”<br>
- **操作结果**：<br>流程完成或复杂流程集合开始。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 

  

#### 按钮中的图标

>仅当图标含义易识别时才使用图标，增强按钮的识别性（大部分场景不需要图标）。
- **图标在左：** 用于强调按钮的功能，使用图标增加功能具象表意，辅助用户快速了解当前按钮功能含义
- **图标在右：**
    - Button_Split、Button_Menu、ExpandableText 等固定组件用法，将箭头图标放置文字右侧
    - read more 等暗示用户点击跳转，采用固定“向右箭头”图标放置于右侧
    - 跳转外部链接，使用“新开窗口”`icon_window-new_outlined` 放置于右侧

为防止用户困惑，请尽可能减少按钮左右同时出现图标。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/121e19ee4725c230b0065e24e7e7695d_glx6wSbg1F.png?height=1200&lazyload=true&width=2560)
  
  

### 适配

#### 国际化场景中文案超长

多语言场景下，按钮文案过长时优先精简文案，请勿出现按钮内文字换行或省略情况。
按钮文案需遵循名词字母大写、句子仅首字母大写的规则。

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
    <md-td style="margin-left: auto; margin-right: auto !improtant;">![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f233c96d1f42c511b5bc6573c6dbb2c8_0TYg37bIPE.png?height=660&lazyload=true&maxWidth=394&width=2048)</md-td>
    <md-td style="margin-left: auto; margin-right: auto !improtant;">![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3cfe57475b36952f1044811fff193fdd_j9CwjmdOOK.png?height=578&lazyload=true&maxWidth=370&width=2048)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/02b1e847e75ab882badaecf2a1db2fb6_Th6sBQUkhG.png?height=20&lazyload=true&width=800)<br>**正确**
-   文案在 button 中展示完整。
- 在气泡卡片等场景使用按钮组合时，可对按钮进行换行适配（非按钮文本换行）。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_MDUp6gTpLx.png?height=20&lazyload=true&width=800)<br>**避免**<br>避免使用省略号，不能安全展示文案，可读性差。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


  

#### 当有限空间需放置较多按钮时

在页面空间有限但需要放置多个按钮时，可以考虑以下几种处理方式：
1. 采用下拉菜单或折叠面板方式：
	-  将多个按钮整合到一个下拉菜单中，可选用“更多”、“分裂按钮”或“菜单按钮”承载（具体区分可见：[分裂按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_splitbutton_menu)）
	- 采用折叠面板形式收纳按钮，将按钮放置于折叠面板中，默认情况下折叠显示一部分，用户点击展开显示所有按钮。（受限场景，相对较少使用）
1. 隐藏按钮文本文案节约空间。使用通用性表意图标添加 Tooltips 代替常驻的文本标签，节约页面空间
1. 优化布局。结合产品功能将该组按钮进行合理换行

>实际场景中，1 和 2 往往组合使用。先收起按钮或先隐藏文本根据场景判断。
  
 

### 无障碍

飞书设计系统中的按钮文字颜色和背景颜色对比度已达到 4.5 : 1，满足无障碍设计要求，禁用按钮无需满足无障碍对比度要求。

按钮应该支持以下键盘交互：
- `Tab`：焦点落在（非禁用）按钮上
- `Enter 回车` 或 `Space 空格` 激活按钮操作

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2bc566f92dea0bfaf154a7f8c64defb5_e5YQjzNVQP.png"
        alt="图片" style="max-height: 300px;">
:::
  
  

### 特殊类型

#### 状态切换按钮

**常见类型**

切换按钮允许用户在“选中态”、“未选中态”两种状态之间进行切换。例如表格数据过滤、窗口容器开关等场景。

基础按钮、文字按钮、图标按钮可以具有切换行为。
>按钮选中后相关内容或功能即时生效，选中态文案可展示被选中或进行中任务的状态反馈，可自行定义再次点击逻辑，可取消操作，也可仅做状态展示。

>常见的切换按钮选中态使用飞书设计系统提供的 Selected 类型即可。选中态下进行鼠标悬停等操作交互直接在当前状态上叠加。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f3500ea2e21a31cbbf569a2b1cbbe6c9_9bliUBKFEn.png?height=1462&lazyload=true&width=2560)

<br>
**特殊类型**

在当前按钮类型上进行选中态变化视觉吸引力不足，也可以通过调整选中前后按钮文案，或根据下方常见规律调整增强选中前后的样式对比。

按钮交互细节（hover、pressed 等）遵循按钮生效前情况。

:::html
<md-table style="width: 1000px;">
  <md-tbody>
     <md-tr>
      <md-th style="width: 30%;">类型</md-th>
      <md-th style="width: 30%;">选用样式</md-th>
      <md-th style="width: 40%;">场景示例</md-th>
    </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td >1.  **选中前功能强引导，选中后状态弱展示** <br> 
> 功能模块优先级较高，选中前需对用户进行强引导，选中后无需引导用户持续关注。</md-td>
      <md-td>**默认态**：按钮样式引导力强，通常为面性按钮。<br>**已选状态**：使用视觉引导力弱化的按钮样式，通常为线性按钮	</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/56c929aa638fac6ec32fe60d445553f7_oybmA4PJ2B.png?height=1042&lazyload=true&width=2560) <br>订阅/关注
      </md-td>
    </md-tr>
     <md-tr style="vertical-align: top;">
      <md-td >2.  **选中前功能一般引导，选中后状态一般展示**<br> 
> 功能入口多，选中前采用一般展示按钮样式。选中后仅作为状态展示告知用户。</md-td>
      <md-td>默认态和选中态样式基本相同，仅进行文案调整</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c61507ab56aaa30a1e13b72d3e6c2b99_fdEQGAoLKO.png?height=808&lazyload=true&width=2560)<br>会议列表功能<br><br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cc6bbb349e6f9e1d1733f1e00cc32f25_eicby4lUS4.png?height=774&lazyload=true&width=2560)
<br>多维表格分享
      </md-td>
    </md-tr>
     <md-tr style="vertical-align: top;">
      <md-td >3.  **选中前功能弱引导，选中后状态相对强展示**<br> 
> 功能模块选项多且优先级比重相同，需用户对当前功能进行主观判断，可对该组按钮进行弱引导处理。选中后需反馈用户并引起关注。</md-td>
      <md-td>**默认态**：<br>按钮视觉相对弱化，通常为灰色次级按钮或灰色图标按钮。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/379f2c812a10460228e9105385271f91_OfnJAVW13B.png?height=1200&lazyload=true&width=2560)<br>关注/收藏/置顶<br><br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2770bc00727fa8a48593f299c9821a17_qfDSkTFXgi.png?height=808&lazyload=true&width=2560)
<br>富文本工具栏<br><br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5518eb8c6005325b06378fa70b26383b_EgbJnDLUD7.png?height=1742&lazyload=true&width=2560)<br>会议日程状态<br><br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/972f246cbd99da69e57ebf3e397ed4fa_VfrCr3CgnD.png?height=1000&lazyload=true&width=2560)<br>表格筛选
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

:::html
<md-alert>**为何强引导中有些采用主按钮，而有些却使用次级按钮？**
  
按钮的类型依据场景来选定，就像在某个场景中全是同类列表（每个列表均配有一个按钮），若采用主按钮，会引发视觉干扰，故而选择次级按钮，这样选中后展现的样式可能更微弱。再比如在某个卡片场景里没有同类按钮，仅有这一个按钮，因此无需担忧视觉干扰，选用主按钮极为恰当，选中后展示可适当减弱视觉效果。弱引导的情况也是如此。</md-alert>
:::

#### 全圆角按钮

“Button_Basic 基础按钮” 提供设置形状为 round 的配置能力，该类按钮即为[全圆角按钮](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/button/button_round)。常规操作链路中避免使用，并关注链路上下流程中的一致性。

  