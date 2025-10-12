<!--
title: 空状态
id: 7477479883707203585
fullPath: /tools-and-resources/design-specification/component---data-display/empty
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/empty
-->
# 空状态

  
对内容、结果为空，或是整个动作完成的即时反馈。
  
  

## 使用规则

  
在初始态、空数据状态、结果为空、错误态（无权限、404、500、租户停用、链接失效等）等状态下，利用示意图和文字描述，及时反馈为空信息给用户。
  
如有解决方案或引导方法，应在明显位置提供。
  
在整个较为复杂的交互动作完成后，给予用户的反馈。
  

## 空状态反馈组件


### 组成要素

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/35aec62a25d450dd280d8156f208d968_HqjihXfXxV.png?lazyload=true&width=1280&height=446)
1. **插画：** 为空的情感化配图
1. **标题（可选）：** 精简概要，短语、断句表达功能
1. **描述：** 对其功能、内容的简单解释（如果整个空状态仅需插图，也可以省略该项）。任何空状态下都需要有相关场景的描述，包括 loading 和 正反馈
1. **按钮（可选）：** 行动按钮，建议优先使用「面性按钮」，如果同时存在主、次按钮，主要行动按钮在右侧
  
  

### 使用规则

  
- 目前在UD组件中，空状态组件中包含大量的插画，我们在选用插画时应该符合空状态组件尺寸规范，根据场景和界面功能来选取插画，不可随意选取插画填充至页面。
  
- 从产品体验的角度来，空状态大体可以由以下三类情况触发：
    - 产品初体验，第一次看到某个功能（正反馈）
    - 成功完成目标任务 （正反馈）
    - 出错、失败、无结果 （缺省态负反馈/中性反馈）
  
- 空状态反馈场景下，**插画有介绍/解释产品功能的作用，带有一定的场景性**，引导用户进行下一步操作(一般是启用或开通新功能)。建议使用**近景特写、画面信息少**的插画，不建议使用场景复杂、元素较多的插画。此场景通常带有「行动性指令」文案的CTA按钮，插画不可抢占CTA主行动按钮的视觉焦点。
- ### 插画示例

  
  
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
<md-th style="width: 8%;"></md-th>
<md-th style="width: 20%;">负反馈</md-th>
<md-th style="width: 20%;">中性反馈</md-th>
<md-th style="width: 20%;">正反馈</md-th>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>**插画场景**</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20c4cb0fda39d240d72671dc2be48694_kJIQIGRn7n.png?height=387&lazyload=true&width=1280)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d6f5b1c2b836228dea957297a9cd1f9c_hvYt9E82J3.png?height=641&lazyload=true&width=1280)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63b92dfaf96b35dedaf1f1612df0358d_OsZhpvr1vA.png?height=518&lazyload=true&width=1280)</md-td>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>**特征**</md-td>
<md-td>中性色为主、突出错误、一般会带有警示、报错元素</md-td>
<md-td>灰色块面居多，用色中性，不会太绚丽</md-td>
<md-td>绚丽、愉悦的配色</md-td>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>**使用说明**</md-td>
<md-td>出现错误、故障等因素打断用户进行目标操作，可以使用负反馈插画。运用插画在这种情况下可以减少用户的挫败感和负面情绪，提升产品体验。选用插画时，应符合简单易懂，与页面内容和文案相对应的特点。**突出错误** (可能存在红色警告元素或红叉等)。</md-td>
<md-td>当搜索、筛选等结果为空、权限不够、未选中列表中的项、详情为空(或没有预览)等，可使用中性反馈。空的页面对于用户来说过于冷漠及不友好，可用中性反馈插画**引导用户**或者**说明状况**。</md-td>
<md-td>- 场景默认为空时，需用图片示意，且传达正向情感。
- 引导用户进行下一步操作。一般是启用或开通新功能。
- 用户成功完成某个操作或动作后可使用正反馈空状态，加强用户的参与感，使产品与用户的对话更加有人情味。此时插画也可作为作占位符或品宣使用。
- 用于页面以及模块容器中的加载状态，即时告知用户他的请求正在处理中。</md-td>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>**场景示例**</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0e124cc155a21abadb8e1d0d62126e3c_pQG1iKwXhy.png?lazyload=true&width=3609&height=2196)
</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b3c754c1cf9afad7103d6d9361ee1047_JzMfy6KMUZ.png?lazyload=true&width=4804&height=2816)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a0e086422745a1753f0d21ec37ed1b82_5AaJNrp81C.png?lazyload=true&width=3609&height=2196)
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fc8eaeb0bc774cac5d02a0eed97ce778_zx0qKFI5dX.png?lazyload=true&width=3609&height=2196)
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b72af3cdf7a9fa79cd567584ef9504f_OIQHaRCGGM.png?lazyload=true&width=3609&height=2196)
  
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d24dbbb4aae3c0ca28992c9b06a2a1f3_nFpSzc5JoZ.png?lazyload=true&width=1280&height=778)</md-td>
</md-tr>
</md-tbody>
</md-table>
:::
  
  
  

#### 负反馈使用场景

  
页面加载失败，打断用户进行目标操作，使用负反馈插画。
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f89a5b46e28ef5066ee804f4dcf5f0c4_9sM51SorGy.png?lazyload=true&width=3609&height=2196)
  

#### 中性反馈使用场景

  
当搜索、筛选等结果为空、权限不够、未选中列表中的项、详情为空(或没有预览)等，可使用中性反馈。空的页面对于用户来说过于冷漠及不友好，可用中性反馈插画**引导用户**或者**说明状况**。
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b5f08bf5a930624aac47d5a7165ca57c_hmV7ynJdJM.png?lazyload=true&width=1280&height=778)  
  

#### 正反馈反馈使用场景


  
- 用户成功完成某个操作或动作后可使用正反馈空状态，加强用户的参与感，使产品与用户的对话更加有人情味。此时插画也可作为作占位符或品宣使用。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5a1e07e098cd9e6246227f1fdbad9cf8_BORkMHA2Vc.png?lazyload=true&width=1280&height=778)

- 场景默认为空时，需用图片示意，且传达正向情感。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/784dcbe6b03a34e4fd3fd1e4d3eb1739_lcxmAx7CsU.png?lazyload=true&width=1280&height=778)

- 引导用户进行下一步操作。一般是启用或开通新功能 
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/21ff01e5bfbff57f84841725d1484442_bQ86GDNOtN.png?lazyload=true&width=1280&height=778)  
  
- 用于页面以及模块容器中的加载状态，即时告知用户他的请求正在处理中。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d24dbbb4aae3c0ca28992c9b06a2a1f3_mjxJC7x5cw.png?lazyload=true&width=1280&height=778)
  

#### 行为引导组合展示

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6c55802a296472798ee9e8552b333dba_jEQi6lMIwP.png?lazyload=true&width=803&height=1280)
  

### 设计元素

  
- 插画：客户端内尺寸120 * 120px，60px * 60px。网页端内尺寸150 * 150px，120px * 120px，60px * 60px
- 标题：建议文案简短单行，使用短语或词组
- 描述：建议文案控制在一句话，完整句子需使用。建议最大宽度为插画的200%，即 250px。 如果只需要一行，优先使用副标题描述
- 主要按钮
- 次要按钮
- 按钮排列顺序：优先同行左右展示按钮，当按钮一行排列不下时候，执行二行并列排列
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/312fa4c0d6eba283514c452630ffd374_vMYCZC87zU.png?lazyload=true&width=2440&height=4294)
  
**插画三端尺寸适配**
  
:::html
<md-table>
<md-tbody>
<md-tr>
<md-th style="width: 10%;"></md-th>
<md-th style="width: 15%;">Mobile</md-th>
<md-th style="width: 30%;">PC</md-th>
<md-th style="width: 30%;">Web</md-th>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>示例</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7feba0e26007e55021692eaed532e046_e0dQcZrtqz.png?lazyload=true&width=750&height=1624)</md-td>
<md-td>

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b5f08bf5a930624aac47d5a7165ca57c_RodIl3b8d7.png?lazyload=true&width=1280&height=778)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/311d1122908fc737045b37d51544f778_dYa92sKb3a.png?lazyload=true&width=1280&height=800)</md-td>
</md-tr>
<md-tr style="vertical-align:top;">
<md-td>尺寸建议</md-td>
<md-td>100 * 100px</md-td>
<md-td>120 * 120px</md-td>
<md-td>150 * 150px</md-td>
</md-tr>
</md-tbody>
</md-table>
:::
  
**特殊场景**
  
空状态用于小卡片等极小场景中，插画的大小需要等比缩小插图尺寸为 60 px，文字与间距自行调整不做固定，间距需满足 4N 原则。
  

### 位置说明

  

#### 客户端内

  
  
**卡片内居中：** 对于有固定窗口、卡片大小的客户端，使用卡片内部居中。
  
**全页面内居中：** 对没有固定卡片容器的场景，使用客户端内的总高居中。
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8665772ba4eb0b096948cb27eb70c952_6GN3piQyie.png?lazyload=true&width=8192&height=2710)

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e6e1be6cbe7da1f1906ab453dffb33c_nLk9iLhdRC.png?lazyload=true&width=8192&height=2710)
  
**复合场景：** 一个场景内使用到多个空状态，以最复杂的构成项的图片顶对齐为准。如下图：
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1522f80eb3e5564c2db61df2a17be467_MhSOCTb8ZY.png?lazyload=true&width=8192&height=2710)
  

#### 网页端内

  
**常态情况：**
  
对于有模块范围、非信息流的网页，如下图有固定卡片样式的空白区域内，建议使用原生客户端的位置则：整体空状态保持上下居中。如下图：
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a885567d07b4f11dc8a46c2e562bca4c_fZjHMLxEG3.png?lazyload=true&width=1280&height=517)
  
**复合场景：**
  
一个场景内使用到多个空状态，以最复杂的构成项的图片顶对齐为准。如下图：
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8974459447fe06976ea398b29ec042be_3LJ7nAAO1V.png?lazyload=true&width=1280&height=468)
  

## 初始化组件

  

### 使用规则

  
初始化空状态-组合场景下，**插画有详细介绍/解释产品功能的作用，带有一定的场景性和引导性**，引导用户启用或开通新功能。建议使用**中景(如有人物一般为半身)、画面信息适中**的插画，此场景通常带有「行动性指令」文案的CTA按钮，插画不可抢占CTA主行动按钮的视觉焦点。
  

### 说明引导类初始化

  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d1c846ca255348c76d7362fcc853b3f7_675tLTnypp.png?lazyload=true&width=1280&height=476)
  

#### 组成要素

  
1. **初始化插画（必选）** 为空的情感化配图，最好对与产品功能有所相关，用于说明动作或目标效果
1. **主标题（可选）** 说明页面的核心功能
1. **副标题（可选）** 对功能点进行拆解说明
1. **文案说明 （必选）** 精简概要，短语、断句表达功能
1. **按钮（可选）** 行动按钮，用于引导用户操作或帮助解决问题

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a5e045971d8c4d5b08aaec67213b860a_U4J8s69owB.png?lazyload=true&width=8000&height=3600)  

#### 场景示例

  
邮件首次开启引导页面
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/629afda3df9ca10ad2d737aa6d3f9768_hMBzgNQrqf.png?lazyload=true&width=8000&height=3600)
  
**设计元素（尺寸、间距、字号、字色）**
- 插画：尺寸350*350px
- 主标题：字号24px，Semibold，N900，建议文案简短单行，使用短语或词组
- 副标题：字号14px，Meduim，N900，建议文案简短单行，使用短语或词组
- 内容说明：字号14px，Regular，N900，建议文案简短单行（可双行），建议文案控制在一句话，完整句子需使用。
- 主要引导按钮：按钮高度40px
- 次要引导按钮：按钮高度40px
- 按钮排列顺序：左右展示按钮，主要引导按钮在最左侧为最高优先级，后侧依次按照优先级层级排列，建议最多2个按钮
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/70e8c7b8fd75ed24a007397d8b0d35b2_BTMneGldhn.png?lazyload=true&width=1280&height=704)
  

#### 插画示例

  
  
:::html
<md-table style="width: 800px;">
<md-tbody>
<md-tr>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/731233e22af036e7a72e99b1fcb2cc4b_E9s47R7OQu.png?lazyload=true&width=701&height=701)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a58705ebf321a17f350fae1914caa25_lX2WwCORub.png?lazyload=true&width=701&height=701)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f1eb7fcf25995ed0cd5195119de0514_BMZoYs57AU.png?lazyload=true&width=701&height=701)</md-td>
</md-tr>
<md-tr>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3ec88316f7c7c9a8751717403017cac5_40UFovacd9.png?lazyload=true&width=701&height=701)</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6c9c21a4b348485ab48d219d1c61e761_kZYxOVHlDn.png?lazyload=true&width=701&height=701)</md-td>
<md-td></md-td>
</md-tr>
</md-tbody>
</md-table>
:::
  
  
  
  

### 行为引导类初始化


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57096c4becb99e1d327abce460a14a0b_xTlXqKqRed.png?lazyload=true&width=1280&height=461)
  

#### 组成要素

  
1. **初始化插画（必选）** 为空的情感化配图，最好对与产品功能有所相关，用于说明动作或目标效果
1. **功能操作** 页面核心功能，操作项
    1. **卡片式入口** 复杂功能分流页，通过卡片入口进行分类
    1. **表单填写** 核心流程填单页，让填写信息更有仪式感
  

#### 场景示例

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/65745b0c17a19107162af4713bab0b7d_WIU846ffwn.png?lazyload=true&width=8192&height=2710)
  

#### 页面类

  
**设计元素（尺寸、间距、字号、字色）**
- 插画：350*350px
- 自定义模块：最大宽度为350px，最大高度为350px
- 布局：整体模块上下居中，插图和内容布局支持左右更替
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d97e4128816086bbc0af0c9e2360a1d7_VylYn8Zbio.png?lazyload=true&width=5120&height=3304)


  

#### 弹窗类

  
**设计元素（尺寸、间距、字号、字色）**
- 插画：250*250px
- 自定义模块：最大宽度为375px，最大高度为375px
- 布局：整体模块上下居中，插图和内容布局支持左右更替
  

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/742bcfd7a0a888bf39754963bf93c0ea_fk7qeXhKzR.png?lazyload=true&width=5120&height=3332)
  

#### 插画三端尺寸适配

  
:::html
<md-table>
<md-tbody>
<md-tr>
<md-th style="width: 10%;">类型</md-th>
<md-th style="width: 30%;">PC</md-th>
<md-th style="width: 25%;">Mobile</md-th>
<md-th style="width: 30%;">适配方式指导</md-th>
</md-tr>
<md-tr style="vertical-align: top;">
<md-td>弹窗类</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5622aa7787c8c33d9c861f503f04f65c_iuvJh00YZ8.png?lazyload=true&width=3986&height=2416)
- 插画尺寸 250*250 px
- 弹窗尺寸840*560 px</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84ed22ffa01dac9720a83d78fd766811_sbp0H7HGEi.png?lazyload=true&width=750&height=1624)
- 插画尺寸 250*250 px
- 界面尺寸375*812 px</md-td>
<md-td>
- 弹窗下插画和操作模块左右布局插画为250*250 px
- 移动端下插画和操作模块上下布局插画为 250*250 px</md-td>
</md-tr>
<md-tr style="vertical-align: top;">
<md-td>页面类</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/77d3b19f04733a34b486a589e12c4c49_xDCxwiMMUL.png?lazyload=true&width=5126&height=2796)
- 插画尺寸 350*350 px
- 页面尺寸 1200*700 px</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/38c943344d1d1c50ef6acec121c9e669_GGF7HbRJnI.png?lazyload=true&width=750&height=1624)
- 插画尺寸 250*250 px
- 界面尺寸 375*812 px</md-td>
<md-td>
- 页面中插画和操作模块左右布局插画为350*350 px
- 移动端下插画和操作模块上下布局插画为250*250 px</md-td>
</md-tr>
<md-tr style="vertical-align: top;">
<md-td>登录注册类</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/493b28ea9bc968c7d799577b8adbeecd_UgV5pMraRV.png?lazyload=true&width=1280&height=837)
- 插画尺寸 250*250 px
- 页面尺寸1200*700 px</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6374e67fe1314de62dee9f7c88d876f6_WC7Rv0uyR7.png?lazyload=true&width=750&height=1624)
- 插画尺寸 250*250 px
- 界面尺寸375*812 px</md-td>*
* <md-td>- 登录注册页面中插画和操作模块左右布局插画为 250*250 px
- 移动端下插画和操作模块上下布局插画为 250*250 px</md-td>
</md-tr>
</md-tbody>
</md-table>
:::