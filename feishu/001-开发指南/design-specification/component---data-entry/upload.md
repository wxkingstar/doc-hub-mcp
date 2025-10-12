<!--
title: 上传
id: 7475195771685814274
fullPath: /tools-and-resources/design-specification/component---data-entry/upload
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-entry/upload
-->
# 上传
引导用户选择并上传文件，并且对文件进行校验、预览，或对上传结果更改、撤销的组件。



## 使用规则

当用户需要将一个或者多个本地文件发布到远程服务器上，可通过使用上传组件完成操作。
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/50b8dd70ec628611762d1671f16d24ce_9L9x52WKJo.png?height=404&lazyload=true&maxWidth=800&width=2048)

1. **上传触发区域** 通常为上传文件的按钮或拖拽区域。
1. **辅助说明文本（可选）** 补充说明对上传附件格式、大小等要求。
1. **附件** 展示已选择的附件文件。
  
  

## 控件类型

### 类型总览

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/004f68b7fc025bd09e140b86510df40e_ZlIWFKCoty.png?height=1180&lazyload=true&maxWidth=800&width=2048)

常用的上传组件通常可分为选择上传、拖拽上传、图片墙上传三种。
上传校验：
- 上传前校验：通常指文件类型、数量、文件大小的限制
- 上传后校验：字符是否符合要求、文档是否重复、网络错误等
  

### 选择上传

通常用于表单场景，通过固定的上传按钮触发操作。初始态一般包括标题、上传按钮和辅助说明。

**上传前：** 点击上传按钮，调出系统的文件选择对话框，自动禁用文件类型、大小不符合需求的文件。当选择的文件个数达到上限时，禁用其他文件。

**上传中：** 针对某些特殊文件类型或超大文件，可能需要先读取文件。可多次点击按钮进行上传。

**上传完成**：当对上传文件数量达到最大限制时，自动禁用上传文件的按钮。

**特殊场景**：在只允许上传一个附件的场景中，若需要在上传完成后隐藏上传按钮，则需要增加【更换文件】按钮，帮助用户快速更改文件

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4884b41b619fc62d4678c3a84422f371_Asr3caiAVX.png?height=2456&lazyload=true&width=2048)
  

### 拖拽上传

拖拽区域通常为页面或弹窗的固定区域，支持点击上传按钮或直接拖拽文件到指定区域两种方式。

**上传前：** 拖拽文件，热区为整个拖拽框。点击文字按钮调出系统的文件选择对话框。

**上传中：** 同时上传多个文件时，无错误的文件直接上传。超出限制的文件数量：默认上传系统读取到的前 N 个文件。

**上传后：** 若已达到最大上传数量，上传按钮失效，需要删除已上传附件后才再次可用。当上传按钮失效，又再次拖拽文件至上传区域，建议通过弹窗报错提示数量达上限。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7c3502154a87df4ecf4ad73f651988de_k82WHHaUKE.png?height=2456&lazyload=true&width=2048)
  

### 图片墙上传

通常用于表单录入场景中，仅支持图片格式文件的上传组件。

**上传前：** 点击上传，调出系统的文件选择对话框，自动禁用文件类型、大小不符合需求的文件。

**上传中：** 上传的图片需要居中显示在图片框中，等级压缩占满图片框的宽度或者高度，填充视窗。

**上传完成：** 上传数量达到最大限度时，隐藏上传按钮。根据需要可控制最多展示的图片数量，超出部分收纳在【+N】中，hover 弹出气泡卡片展示完整信息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f6fa76051f4f79e104fcfa7ae4a77293_7gdNLIupTo.png?height=1640&lazyload=true&width=2048)
  

### 特殊上传场景

#### 拖拽区域隐藏

当拖拽区域在常规状态下无上传提示（例如富文本编辑器），用户需要手动拖拽附件到指定区域才会显示提示。 若需要报错，建议使用弹窗提示（例如拖拽上传后提示附件过大）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2024dd57dc4e1dfa2a885aca7dcf1a57_Iq7ooHmvpF.png?height=3148&lazyload=true&maxWidth=600&width=2048)


#### 导入功能

B 端的导入流程通常较复杂，可能包含「需要依据模板上传」、「上传后需要进行数据校验」等功能。因此弹窗可包含「下载模板」及数据校验错误提示、下载标注错误数据的文件等操作。这里仅提供最基础的规则，在设计时可考虑根据实际场景丰富内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7c3502154a87df4ecf4ad73f651988de_hA9IqxdWUg.png?height=2456&lazyload=true&width=2048)


#### 异步上传

当同时需要上传多个文件/文件夹（多见于文档管理类的场景），且上传时间可能超过 3 秒时，可以使用异步上传。

拖拽或点击上传后，页面右下角出现上传面板，按上传顺序罗列内容，面板可折叠展开。

上传过程中，页面其他操作不阻断。点击关闭面板，需要出现二次确认弹窗，让用户确认是否取消上传。

上传完成后，文件内容反馈在页面指定模块（如文件列表中），面板不消失，用户点击关闭后消失。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8f4ffc16f83f07e6e82cb0c5bcf1b2d6_QzR4t8XsXg.png?height=2632&lazyload=true&width=3360)
  
  

## 通用样式规则

### 附件类型 & 状态说明

#### 无预览附件

常用附件类型图标可自定义匹配逻辑，若无法检测文件类型，则使用 unknown 图标

**尺寸说明：**
- 无预览的附件高度提供 Small 与 Normal 两种尺寸。通常建议使用常规尺寸来展示附件列表，可结合场景判断是否需要选择小尺寸（如在长表单中可上传很多附件的情况、或富文本编辑器中附件展示空间较小的情况）

**按钮说明：**
- 附件的操作按钮个数、上传成功图标均支持配置，按钮数量不建议超过 4 个。通常建议附件中配置图标按钮，而文字按钮（如更换文件）展示在附件下方
- 可定义常规情况下隐藏，hover 时显示按钮
- 点击附件上操作按钮以外的区域，也可触发附件的预览操作
- 下载、删除操作通常建议使用 toast 反馈，可基于需求自定义

**文字说明：**
- 附件名称建议最多不超过两行展示，超出部分使用「…」省略，若 hover 显示按钮后遮盖文字区域，遵循同样的省略方式
- 上传失败原因建议一行展示，最多展示两行，若超出需要考虑优化文案
- 文案规则：泛指文件类型时可以使用首字母缩略语。 用作名称（PNG）时使用大写，用作扩展名（.png）时使用小写

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e0f525cec776cd87a3b6818189b49a7b_UJK5ZEZNbx.png?height=1108&lazyload=true&width=2048)

**组合使用建议：**
- 通常建议附件单行展示，若需要考虑更高的信息密度，则可支持双列展示或配置小尺寸附件
- 在表单中使用上传组件时，建议附件宽度与表单内容等宽。当表单为多列时，建议上传组件与单个字段等宽

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/97680567842bc36a34144b102c789950_eKY9cLYwzK.png?height=996&lazyload=true&width=2048)


#### 有预览附件

仅图片格式的附件可使用图片墙的上传组件。支持上传多种格式附件、且需要支持预览时，可使用下图右侧的附件样式。

附件的操作按钮类型可基于使用需求进行配置。也可定义常规情况下隐藏，hover 时显示按钮。

附件名称建议一行展示，当 hover 显示按钮后遮盖文字区域，文字省略部分用「…」展示。上传失败原因建议展示一行，最多展示两行，若超出需要考虑优化文案。

点击附件上操作按钮以外的区域，也可触发附件的预览操作。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4963c7c2ccd36ca81368e980fde7ad56_zOPUM9R1Jl.png?height=1504&lazyload=true&width=2048)

#### 其他附件类型

其他附件类型还包括链接类型及超大预览附件，主要出现在云文档的上传场景，暂不在规范里进行细节定义。若需要使用可参考以下样式。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b4ccabd39707da24b1386e84e20c82c_STgpk0c3Lv.png?height=1008&lazyload=true&width=2000)
  

### 尺寸说明

无预览附件提供高度为 40px 与 60px 两种尺寸，附件宽度根据需求自定义。

图片附件提供默认大小 80px，支持自定义大小。

拖拽区域大小提供默认大小 552*156px（适用于弹窗中），在具体需求中可根据上下间距 4N，左右 padding 40px 的规则进行自定义，辅助说明文本支持最多展示两行。

拖拽区域文字描述左右极限 padding 为 12px。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b6d94a0bef5740d756a7be14311a9a33_kGBVed4Ng1.png?height=1380&lazyload=true&width=2048)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b81020dc22d2fc5f2868c12de5676c06_GrdSYnD7jc.png?height=532&lazyload=true&width=2048)