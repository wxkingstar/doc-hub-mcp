<!--
title: 表单
id: 7475195771685584898
fullPath: /tools-and-resources/design-specification/component---data-entry/form
updatedAt: 1742375641000
source: https://open.feishu.cn/document/design-specification/component---data-entry/form
-->
# 表单
允许用户添加或录入一系列的数据，或者配置一系列的选项。


## 使用规则

当用户需要填写、编辑、录入信息等操作时使用。表单使用过程中，需要遵循以下几个原则：
1. 明确告知用户要输入的信息内容
2. 让用户能在上下文中获取信息，帮助用户完成输入
3. 标签简洁、精确
4. 必填项明确标识
5. 具有容错性，通过不同的校验规则和形式进行反馈
6. 精简不必要的输入项
7. 合理分步骤填写表单、相关信息分组填写
8. 局部校验和全局校验相结合
  
  

## 组成要素


:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20b79da85a8b69c508cdc2e003272c3a_j3IyWqHFZD.png"
        alt="图片" style="max-height: 300px;">
:::

1. **字段标题** :  说明该输入框字段的名称。根据实际场景，字段标题字重允许设置 Medium。
1. **已填写字段**: 展示填写信息。
1. **未填写字段** : 展示有提示意义的占位符或者不展示占位符。
1. **禁用字段** : 使用禁用状态，明确展示与其他可填写字段的区分。
1. **帮助文本（可选）**:  补充说明该字段的含义，指引用户正确填写该字段，可添加文字链接。
1. **报错文本** : 对表单报错说明
1. **必填标识（可选）**:  可以用一个红色的 * 字符代表此表单该字段必须填写。
1. **提示标识（可选）**:  帮助或者解释信息的标示，当鼠标悬停时展示补充信息。
1. **按钮** : 对表单的整体操作。按钮与表单左对齐，主要按钮在左侧。
  
  

## 表单类型

### 类型总览

表单主要分为三种类型：基础表单、组合表单、分组表单、分步骤表单。


#### 基础表单
当需要完成一个简单快速的任务，例如输入少量信息即可完成创建。<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d27a0dc7da3bc23cb253cfcde89d11c_7Rx0Efi0Dn.png?height=1216&lazyload=true&maxWidth=600&width=2048)


#### 组合表单

多个表单项组合与其他单个表单项是同一层级关系时，建议使用组合表单。<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f5efa5397393107a6b35d56f84b8b0ad_PbpOo55QNY.png?height=1340&lazyload=true&maxWidth=600&width=2048)


#### 分组表单

单次任务的表单页中需要填写内容众多，且不同内容之中存在一定可分类归纳性。<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d13949cd3786e40367b720c9d08c009_42ZcZFacTv.png?height=1368&lazyload=true&maxWidth=600&width=2048)


#### 分步表单

将用户需要填写和确认的信息按照线性流程组织，利用步骤条告知用户完整流程和进度，常常在最后提交前让用户再次确认信息，并在流程结束给与明确的结果反馈。适用于具有明确的线性逻辑的任务。<br>
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/179796199283918ae5e38f6e048d8dd8_cIPpPTKgXS.png?height=1368&lazyload=true&maxWidth=600&width=2048)
  
  

### 表单元素

表单中包含的组件主要有：[输入框（Input）](http:///ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/input.com)、[下拉选择（Select）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/select)、[级联选择（Cascader）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/cascader)、[单选（Radio）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/radio)、[多选（Checkbox）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/checkbox)、[日期选择器（Datapicker）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/date-picker)、[步进器（Stepper）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/stepper)、[滑块（Slider）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/slider)、[评分（Rate）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/rate)、[开关（Switch）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/switch)、[上传（Upload）](/ssl:ttdoc/tools-and-resources/design-specification/component---data-entry/upload)等。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9416f375b383ff05965e033a2cb2b2d1_s7feroVNkW.png?height=1428&lazyload=true&width=2048)
  
  

### 样式规则

#### 表单标题布局

字段标题有两种布局样式：表单标题在表单上方。表单标题在表单左侧，且标题右对齐。

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
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0cb89267f52453bc12b68cb2f599ccb6_GBqTIGReqX.png?height=612&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1c30ba3c1ddb8ffe96d85411655f3a4b_OV4I1HhyAG.png?height=612&lazyload=true&width=1004)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

在纯表单填写场景中，建议字段标题展示在表单上方。在表单个数较少、表单宽度较短，与页面信息组合，且空间有限时，建议字段标题在输入框左侧，如页面上方筛选项展示。

字段标题展示在表单上方时，字段标题最大宽度与输入框等宽，超出折行处理，最多展示两行，超出两行截断处理。表单之间间距建议 20px、28px。间距 20px 主要应用于 Popover 卡片、对话框的表单场景中，报错文案挤压展示，表单之间间距保持不变。间距 28px 主要应用于页面级别表单填写场景中，报错文案原位展示。

字段标题在表单左侧时，标题右对齐，标题与输入框之间间距建议 16px。表单之间上下间距建议 20px。字段标题最大宽度为输入框的 50%，超出折行处理，超出两行截断处理。



<br>
使用场景示例
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4f9084e7fad5f6f1a13db7f03efb7ac3_qO932XyQyK.png?height=1220&lazyload=true&width=2048)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4517784179b4af61cac6455de5a6985d_WMKTHXcTRR.png?height=1220&lazyload=true&width=2048)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 表单样式布局

表单样式布局主要分为两种类型：单列表单、双列表单。单列表单和双列表单可根据实际场景选择混排使用。

<br>
**单列表单**

单列表单是将表单元素自上而下排列组合而成，横向空间上只排布一个表单元素。用户在阅读信息时，视线更加流畅，浏览效率更高。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30d3b43859c4cbfdae23f4c99251dbb4_BzpBgTmFnd.png?height=800&lazyload=true&maxWidth=600&width=2048)

<br>
**双列表单**

双列表单是将表单元素从左往右，自上而下排列组合而成，横向空间上最多展示两个表单元素。主要用于表单数量较多的场景。节省了纵向的空间，用户在一屏可以快速浏览到更多的表单内容。表单宽度自适应规则根据实际场景定义。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1881a92cf59a6f8c35585ebda351923c_zTsVQr5lNL.png?height=800&lazyload=true&maxWidth=600&width=2048)

<br>
**复杂表单**

联动表单，联动是指几个表单项间存在互动关系，一个元素的运动或变化时，其他的也跟着受影响。
关于单选和多选结构，建议使用选项竖排排版的方式，选项之间间距建议为 8px。如遇特殊情况（选项文本过短、空间较小时），可按需横排排版，选项之间间距建议为 24px。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/72f58f58545743dd18147b818e873996_dlIcVAlO06.png?height=568&lazyload=true&maxWidth=600&width=2048)

<br>
联动表单中，一个字段标题下方可添加多个输入框。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d548646c4e4794cf1f0b188710d3f518_0eHE4f2Iy7.png?height=596&lazyload=true&maxWidth=600&width=2048)

<br>
联动表单中，可添加一组组合表单项。如添加工作经历、教育经历、紧急联系人等场景。
当添加多个项目组时，使用删除 icon。当项目组内可添加多项时，删除 icon 使用「x」图标。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/45add563c7745407c96e0949038e19a6_SoGnovtQPu.png?height=1456&lazyload=true&maxWidth=600&width=2048)


#### 表单信息展示规则

在表单页中组织呈现各表单项时要注意简洁表达，高效准确，避免增加用户录入信息的成本。

**统一规则**


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e5f3d9bc794aa502c3ff37b0381b978c_nvNBiWGjEk.png?height=448&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/678e013455e12ebbf8416c93877b0985_WYEDchybAU.png?height=448&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>一个表单页中针对同一种内容类型的表单项使用相同的组件或表现形式</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>使用不同的组件或表现形式，会增加用户理解成本</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

<br>
**文案规则**


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td> ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae7d52e6bec1516906ae82f43b227817_XzElQG8Clt.png?height=284&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f2575c464c17d3218bcca3cf4d84406_TKLg4C0WO6.png?height=284&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>无相关提示信息建议直接不展示</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>表单内占位符提示避免重复的语言</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 表单样式布局说明

小间距表单：表单标题与分组标题间距 16px。

大间距表单：表单标题与分组标题间距 24px。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8d2c179f2a6ff4c287a677705afbb173_9ZAKq8rtI5.png?height=2320&lazyload=true&maxWidth=800&width=2048)
  

#### 表单尺寸

表单尺寸主要分为三种：小尺寸、中等尺寸（默认尺寸）、大尺寸。

- **小尺寸：** 输入框高度为 28px、按钮高度为 28px。表单中只有输入框、下拉选择、级联选择、步进器组件高度变为 28px，其他组件无变化。

- **中等尺寸（默认尺寸）：** 输入框高度 32px，按钮高度为 32px。

- **大尺寸：** 输入框高度 40px，按钮高度为 40px。表单中只有输入框、下拉选择、级联选择、步进器组件高度变为 40px，其他组件无变化。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d23e3d579d5bd4ede93b2be62737f622_Xc4cXZz4bv.png?height=1616&lazyload=true&width=2048)
  

#### 栅格规范

表单安全边距 Margin 定义为 24px，列宽根据设计宽度自适应，槽 Gutter 宽度一般使用 24px。列数定义为 1、2、 3、4 列，可以将页面分割为 1、2、 3、4 列常用的页面分割形式。


:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f95a692a6c8ab96433dfde39a58888e5_jCjiYpb67a.png?height=1470&lazyload=true&width=2158)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/75aaaa714e282b3e9fc3af2f90b2a9a5_2sW2a8hPG8.png?height=1472&lazyload=true&width=2154)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/12efe7a1fabebf6eac93e0da2bd56c80_csvINokBVA.png?height=1466&lazyload=true&width=2156)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dd4e3322ae0341d842a5fadbb76ec2d3_eFqrNyTtlC.png?height=1472&lazyload=true&width=2156)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 交互规则
#### 校验与报错

表单允许用户输入，但同时也需要帮助用户输入正确的内容。校验是指对用户输入的内容进行合法校验，如果输入内容有误，应该及时告知用户。按照校验的时机进行区分，可以分为即时校验、失焦校验和提交后校验。

根据校验的时机可分为 3 种类型：即时校验、失焦校验、提交后校验。

根据校验的内容可分为 2 种类型：单值校验和组合校验。

<br>
**即时校验**

即时校验，判断用户是否停止键入，若停止键入（键盘停止操作 500 ms 后）则进行校验。常用于检测数据类型，如注册页面密码校验，检测输入是否符合规则。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0747f4f20d8c7d29e4cb1b3e5ee319b8_4hUmU9WujC.png?height=320&lazyload=true&maxWidth=800&width=2048)

<br>
**失焦校验**

失焦校验，仅在输入框失焦时才进行校验。常用于输入验证码、注册等场景。
表单录入场景建议对必填字段操作后再进行失焦校验。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/003271b763c8cd2b60bf245be6292fc1_kD8KcNQQfX.png?height=320&lazyload=true&maxWidth=800&width=2048)

<br>
**提交后校验**

提交后校验，在用户点击提交按钮后才进行校验。点击提交按钮时，有错误的表单报错全部展示在表单下方。（下图中添加类型表单，若添加内容只有一条必填，则报错展示在添加按钮下方。若添加内容每项必填，则报错信息展示在对应输入框下方）

- **原位报错**：报错信息在字段下方直接展示，表单位置不变。主要应用于页面级别表单填写场景中，报错文案原位展示。**适用于大间距表单**。
- **挤压报错**：报错信息展示在字段下方，且表单之间间距保持不变，报错下方的字段均向下挤压。主要应用于 Popover 卡片、对话框的表单场景中，报错文案挤压展示，表单之间间距保持不变。**适用于小间距表单**。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/981cd9ded5eaced8bf69640e9a6706e4_Pgavdvmwnl.png?height=2656&lazyload=true&maxWidth=800&width=2048)

<br>
**单值校验**

单值校验，对单个表单进行校验。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/67b13ca56afb0ad41c9174587aa6d4d2_HWWgg5ixLj.png?height=656&lazyload=true&maxWidth=800&width=2048)

<br>
**组合校验**

组合校验，对一组表单进行校验，报错显示在表单上方、页面标题下方。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/54c3f4e4abea57989b722257a0fbdb0f_ZxziakLDRs.png?height=896&lazyload=true&maxWidth=800&width=2048)


#### 必填与提示

表单一般会带有相关标识来帮助用户正确地填写表单。主要包括必填标识、info 图标两种类型。

**必填**

必填，必填项是由表单元素和星标「 * 」组成的，红色的星号作为醒目的视觉符号需要放置在「字段标题」的后方，告诉用户必须填写此项目。
非必填，字段后面未展示星标「 * 」符号，则用户可选择性填写该表单项。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b9a86a0ccf33226474636c3bce2416a6_ovWxAr1Z0B.png?height=404&lazyload=true&maxWidth=600&width=2048)

<br>
**信息提示**

信息提示，表单的提示一般放置在三个地方：字段标题后面的 info 图标、输入框占位符、输入框下方。
字段标题后面 info 图标使用场景：信息提示较多，主要是对整个字段的解释说明，用户可以控制信息的显示。
输入框占位符使用场景：简单信息提示，直接说明输入的要求。
输入框下方信息提示使用场景：解释信息用途或填写规则，强提示场景。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4853859b2f2f4b2e35fb811c47c58e8c_T3FY3dqePt.png?height=632&lazyload=true&maxWidth=600&width=2048)