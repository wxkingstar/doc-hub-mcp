<!--
title: 常驻提示
id: 7477479883707154433
fullPath: /tools-and-resources/design-specification/component----feedback/notice
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component----feedback/notice
-->
# 常驻提示

展现需要用户关注的信息。


## 使用规则

- **何时使用**：显示需要用户关注的信息时使用
- **关闭规则**：非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭
- **层级规则**：1、站点级别 2、页面级别 3、模块级别

**同类对比：**

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
      <md-th style="width: 20%;">组件</md-th>
      <md-th style="width: 20%;">反馈强度</md-th>
      <md-th style="width: 60%;">用户操作</md-th>
    </md-tr>
    <md-tr>
      <md-td>常驻提示 Notice</md-td>
      <md-td>**`中等`**</md-td>
      <md-td>提示会一直保留，直到被用户主动关闭或者解决问题才会消失 </md-td>
    </md-tr>
    <md-tr>
      <md-td>弹窗 Dialog</md-td>
      <md-td>**`最高优先级`**</md-td>
      <md-td>对话框会阻断页面其他操作，直到用户执行对话框操作或者退出对话框，才会消失</md-td>
    </md-tr>
    <md-tr>
      <md-td>全局提示Toast</md-td>
      <md-td>**`轻量`**</md-td>
      <md-td>不影响用户操作，常规情况下自动消失</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da73ba4a018c28c798e93cdd8c2b85ba_9Ixsk69w10.png?height=560&lazyload=true&maxWidth=800&width=2048)

1. **图标：** 帮助用户快速识别提示的属性类别，起到强调作用
1. **标题：** 标题文本，长文本提示建议增加标题
1. **正文信息：**
    1. 传达一段清晰且明确的信息，不阻碍用户操作的同时吸引用户注意力
    1. 文字链接：与文本混排的链接，点击可跳转
1. **文字按钮：** 常驻提示的操作，主要为文字按钮
1. **关闭按钮：** 用户主动关闭，关闭后不影响其他操作

  
  

## 组件类型

按语义分为四种类型，分别是普通提示 Info、成功提示 Success、错误提示 Error、警告提示 Warning。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/89ce42cf298822b1458579ed3919bcdf_0JAUU4WYQa.png?height=612&lazyload=true&maxWidth=800&width=2048)

- **普通提示**：建议展示背景条件、规范要求、当前状态等客观内容。
- **成功提示**：展示完成操作后的成功状态。
- **错误提示**：展示报错信息，同时满足多个报错条件时建议合并信息组整体报错。
- **警告提示**：展示可能会导致某种后果的警示性信息。
  
  

## 组件应用

### 交互说明

常驻提示是一种非阻断的信息提示，不打断用户的当前操作，一般停留在页面某个位置（顶部优先），始终展示，不会自动消失，用户可以点击关闭。
  

### 操作类型

**文字按钮：** 提供操作项，数量建议不超过2个。

**关闭按钮：** 建议用于普通信息提示场景，关闭后不影响页面操作，关闭按钮始终在最右侧。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/80cf59cf2ae25b4bfda9f5e05a7c228e_mtPLjEMquQ.png?height=612&lazyload=true&maxWidth=800&width=2048)

:::html
<md-alert>注：链接按钮为正文的附加属性，与文字信息混排，组成完整的一段文案，点击链接按钮跳转至对应的页面</md-alert>
:::

  

### 自定义Icon

icon支持自定义，纯色icon的颜色绑定Info、Success、Error、Warning四种类型。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e32cdcd540c2cc36c593875a77c3a26_VbqNAc276G.png?height=720&lazyload=true&maxWidth=800&width=2060)

### 位置说明

#### 站点级别

用于承载整个网站相关的信息。例如：服务器维护通知、与服务器断开连接、公告提示等。 处于整个页面上方（Header 上方），并且
**将页面内容往下推**。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/09834c85fa80c6ec4d9085e1e03c077f_n1WFCFOGOx.png?height=486&lazyload=true&maxWidth=800&width=2048)

#### 页面级别

与当前页面相关联的信息，处于顶部栏、一级标题下方，内容信息上方。例如：网络问题需要重新连接的提示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/be9417b60579da920e85529d2f34598b_YBBU3DhJNT.png?height=644&lazyload=true&maxWidth=800&width=2048)

#### 模块级别

描述模块中与某一部分关联的信息，紧邻相关元素或组件。例如：表单内的信息提示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cd81e99f76a09853da7bef71251c207a_Fqn3t37USr.png?height=892&lazyload=true&maxWidth=800&width=2048)

#### 多个常驻提示展示

页面内有多条不同类信息需要提示时，可同时展示，根据出现的时间前后依次展示。建议最多不超过两条。使用时需要注意信息层级，克制使用，满足顶层设计原则。

**同一弹出位置：** 例如服务器维护通知、与服务器断开连接、公告提示等多种信息类型的Notice在同一位置同时展示时，使用堆叠的方式依次展示，间距可自定义

**不同弹出位置：** 页面内针对不同主体的提示同时展示时，展示位置采用就近原则在主体附近弹出。
  

### 自适应说明

#### 组件宽度

- 非通栏，与内容模块等宽（100%width ）
- 通栏，通常应用在页面级别和系统级别

#### 组件高度

- 非浮层的静态展示形式，会占据页面纵向空间
- 高度自动撑开，最多建议不超过4行

#### 文本信息

- 文本信息跟随Notice宽度自适应
- 文本信息可以折行展示，建议不超过4行 
- 文本信息可以通过“...”方式进行省略，hover“...”展示Tooltip 

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d2ec7b0ec049144a57db35ead1ca24c2_lon2RV33nH.png?height=372&lazyload=true&maxWidth=800&width=2048)

- 文本信息在中文语境下展示一行，在多语言场景中，若无法一行展示则文本信息自动折行

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2f89440d318d53118d0c2e11fe174f8_GOS5bVuZRP.png?height=404&lazyload=true&maxWidth=800&width=2048)

- 为保证舒适高效的阅读体验，建议限制文案的展示宽度，可自定义文本内容的最大宽度


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/08185d5dd8cc6dbbf71ed6ab0979e050_cXOz7qPc3K.png?height=640&lazyload=true&width=2048) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ffbe6da12ab53b1f24d5f27d56bfda7_r7f0S23Ejc.png?height=640&lazyload=true&width=2048)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>可自定义文本信息宽度维持在一个舒适的阅读宽度，或者文本信息宽度跟随内容宽度，保持视觉上的对齐。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>页面较宽时，文字信息适应Notice宽度撑开展示，阅读路径较长，降低阅读效率和体验。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

#### 标题信息

- 文本较长时建议增加标题，帮助用户快速获取信息
- 标题字数建议控制在20字以内，允许折行

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/89d9ea023f2d9c0fc870c23a204245ab_f2vb1ivSD3.png?height=336&lazyload=true&maxWidth=800&width=2048)

#### 文字按钮

**与文本一行展示**：文本信息为单行情况下，默认右对齐。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6b53a7d4e23912e719afbe7d96f128be_ft27X0bJgh.png?height=376&lazyload=true&maxWidth=800&width=2048)

**单独一行展示：**

- 当单行文本信息右侧空间不足时

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2d620c730e62fd7920b8e3d71fb8fbae_AztEjnc4FC.png?height=292&lazyload=true&maxWidth=800&width=2048)

- 文本信息超过一行时

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/188e4336367c85efd6debf031b11d2c9_uTg9SmHgjn.png?height=336&lazyload=true&maxWidth=800&width=2048)

- 有标题时

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/db62804bdb1d97a9514daf26264149a9_3eDHDGDzhU.png?height=344&lazyload=true&maxWidth=800&width=2048)

#### 关闭按钮

- 横向：关闭按钮始终与第一行文本、提示Icon在同一水平线
- 纵向：关闭按钮纵向空间不与其他元素重叠

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2e156ad3ce1a486ceec90a3b77d56bf6_yC6D1U0Je1.png?height=456&lazyload=true&maxWidth=800&width=2048)
  

### 对齐方式

#### 默认

- 默认文本左对齐，单行情况下，文字按钮默认右对齐
- 多行或有标题时，标题和文字按钮独占一行展示，标题、文字按钮与文本左对齐

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/44023a3a70cbe0c7dbed9e6d96f23fc2_WGmMOXFfBY.png?height=516&lazyload=true&maxWidth=800&width=2048)

**文字按钮跟随文本**

单行情况下，当宽度较宽、文字按钮与文本距离较远时，避免视觉分散，操作按钮可跟随文本。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9384bb149f53017ebebfe8ae99300bb8_YesF9Fs8kh.png?height=360&lazyload=true&maxWidth=800&width=2048)

#### 居中

- 当页面排版以居中对齐为主时，信息需要被聚焦在中间，采用居中更符合用户的阅览路径
- 居中时不支持增加标题，也不支持文本信息折行
- 居中时文字按钮跟随文本，关闭按钮始终保持右对齐

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/65c1de3a4bf5670bf4d8aede4458a726_qPNe4mRODH.png?height=360&lazyload=true&maxWidth=800&width=2048)
  

### 使用建议

**合理使用对齐方式**


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9be493276bd096b6bb800b2b82053f9d_D3fr6D1CDi.png?height=640&lazyload=true&width=2008)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dfb5101adc9edf7d143b38ba8ce0db59_DoWNE9Lw7W.png?height=640&lazyload=true&width=2008)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>当内容均左对齐，且Notice宽度和内容等宽，Notice文本使用左对齐。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>上图Notice的文本居中对齐的方式与内容主体左对齐的阅读视线不一致。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

<br>
**规范使用文字按钮、文字链**


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d1d847aa50d3db3f1906b6eadae16ff2_dAJ2AADecE.png?height=320&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f2fa04a6bc43c03dd847d77dfd8852ee_uHYAjRXWeo.png?height=320&lazyload=true&width=1004) </md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**文字按钮：** <br>文字按钮的文案需清楚传达用户按下按钮时系统将执行的操作，通过点击文字按钮触发需要执行的操作。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**文字链：** <br>用于跳转另一页面，和普通文本信息混排。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

<br>
**标题不能单独使用**


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fce37cc60ae12be1308043b86bb1b598_kuHJ3W1udU.png?height=320&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/19135fe72f80cef6c796d2e8a5816f82_U6JfAITGeu.png?height=320&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>当仅需要显示一类文本信息时，可用文本来展示。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>避免标题单独使用。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
