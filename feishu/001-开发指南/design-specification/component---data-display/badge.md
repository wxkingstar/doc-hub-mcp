<!--
title: 徽标
id: 7477479883707334657
fullPath: /tools-and-resources/design-specification/component---data-display/badge
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/badge
-->
# 徽标
红点、数字或文字，用于告诉用户待处理的事物或者更新数。


## 使用规则

- 当有新消息、功能模块和应用等有更新升级，或者需要提示特殊状态时，可以使用徽标进行提醒
- 非常驻徽标会在用户查看过相应的更新内容后自动消失，当内容或状态再次更新时则出现
- 按照规范中定义的通用颜色来传达含义，便于快速识别其状态类型或重要级别，如无必要，请勿随意新增徽标颜色或图标图标，加重用户的理解负担
- 徽标本质上是展示消息数或状态，避免与标签混淆使用
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ffb2f48ad6abeb8afd74af981bea5a7_kfVSWPiI67.png?height=141&lazyload=true&maxWidth=800&width=1024)
1. **容器背景** : 用于承载徽标容器的背景色，其颜色的选用需要符合语义及状态
1. **字符** : 用于告知信息数量、状态类型，可以是数字、中文或英文
1. **图标** : 用直观易懂的图标，提示其特殊状态
  
  

## 控件类型

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca2bd222204830047384e94465c72968_RJC4U8VRCD.png?height=147&lazyload=true&maxWidth=800&width=1024)

### 点状徽标

当功能模块更新、信息状态为未读、人员在线协同、信息量变化且无需告知具体数量或性质时，使用点状徽标突出状态，吸引用户注意。例如：未读邮件、应用更新、实时协同。


#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dd77c0936b05b2842f993b3ec9e58b16_kj7Pm7IiQw.png?height=258&lazyload=true&maxWidth=800&width=1024)

#### 通用样式规则

**颜色说明**

徽标的通用色彩定义 4 种，分别代表不同含义及适用场景，多色样式仅适用于具有协同功能的场景。
- **红色：** 表示未处理、模块内容更新、新消息、未读强提示，常用于 feed 流新消息提示、邮件未读等
- **灰色：** 表示未读弱提示，常用于会话盒子等弱提示类的消息通知
- **绿色：** 表示被提及人已读状态，常用于展示和区分被提及者的阅读状态
- **蓝色：** 表示新应用、应用可更新，常用于提示有新安装的应用、应用可更新
- **多色：** 共 39 种颜色，表示人员实时协同，用于文档、邮件协同时的人员展示

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8b8ccd4aeb69aa0fdb6c7133fff2be64_VSgSwCc6sM.png?height=864&lazyload=true&maxWidth=800&width=1024)

<br>
**尺寸说明**

提供以下3种尺寸，可根据场景选用：
- **6*6px：** 建议在较小尺寸的文字、图标上，或气泡卡片等空间有限的小场景中使用
- **8*8px：** 位于列表、图标、feed 流、应用更新等场景中
- **10*10px：** 建议在头像上时使用（根据头像尺寸选择合适尺寸）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe1ffe71e39dc6dd50587632b085356d_KizwYqG9Zp.png?height=442&lazyload=true&maxWidth=800&width=1024)

<br>
**样式说明**

提供以下3种样式，可根据场景选用：
- **仅填充：** 适用于大部分普通场景
- **仅内描边：** 当需要与填充样式徽标作状态区分，且不与其他元素有遮挡、重叠等关系时建议用该样式
- **填充 + 描边：** 仅限用于文档、邮件中的协同徽标，表示区别身份的作用

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/128b4695bd02098ee4aafd72e50ceea5_UJw7u5zJVz.png?height=474&lazyload=true&maxWidth=800&width=1024)

<br>
**位置说明**

**与头像组合位置**
- 头像右上角：以头像中心为圆心，找到右上角 45° 相交处为徽标中心点
- 头像右下角：以头像中心为圆心，找到右下角 45° 相交处为徽标中心点 (适用于协同功能)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/325a547f154287ce453d40c7a601ca70_fmxjRQskOw.png?height=146&lazyload=true&maxWidth=800&width=1024)

**与文字组合位置**
- 文字右侧：徽标位于文本右侧，距离为 2px ，且与文本容器顶部对齐

**与图标组合位置**

以容器的对角线与右上角相交处为中心点，标记该徽标的位置。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e18a8d7e4328c9605d01c2f0d5ca01be_JfDOnaQuYO.png?height=280&lazyload=true&maxWidth=800&width=1024)

徽标与文字：8*8px 点状徽标建议与文本的间距为 4px 

当徽标位于列表中的位置建议参考列表规范。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b674853c83d900bf703c1030e573a048_BtLCiQQO34.png?height=307&lazyload=true&maxWidth=800&width=1024)
  

### 字符徽标

内容的信息量发生变化，且需要明确告知新增数量时，建议使用带数字的徽标，如：99、999 等。
模块、应用中有内容更新，且需要强调状态的性质或类型时，建议使用带文字的徽标，如：New 等。
需要告知未读数量或总数，且信息及视觉层级较弱时，建议使用纯数字的徽标。

#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/327dfe53826fb09218631ee54f3512ec_mgpxdT2eNL.png?height=424&lazyload=true&maxWidth=800&width=1026)
  

<br>
**颜色说明**

- **红色背景：** 表示重要、推新、未读数强提示，常用于强提示类的消息通知。
- **灰色背景：** 表示未读数弱提示，常用于弱提示类的消息通知。
- **灰色纯字符：**
	- Font color：N600 表示未读、待办存量的弱提示，常用于不需要主动关注的数据列表（常用于Light mode）。
	- Font color：N00 在Dark mode，或深色背景下的的纯数字徽标。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/56e0dd76070f8e87cc3db3ec6cfd1440_bs3m2ni2cu.png?height=380&lazyload=true&maxWidth=800&width=1024)

<br>
**尺寸说明**

**带背景字符徽标**
- 单字符：仅适用于 1 个字符（如 1 - 9 场景下的单个数字），使用 14*14px 的正圆形，字号 10px，Medium。
- 多字符：适用于 2 个或 2 个以上的字符，徽标高度 14px，文本间距背景容器左右为 4px ，字号 10px ，Medium，徽标宽度根据字符自适应。
- 极限：适用于超过 999 的数量的徽标，用「···」展示。

**纯数字字符徽标**

由于列表高度不同，建议使用列表正文 -1 Level 的字号，具体场景由实际场景决定，建议不小于12px。

<br>
**位置说明**

**带背景字符徽标**
- 单字符：仅 1 个字符（如数字 1-9 ），使用 14*14px 的正圆形
- 多字符：2 个及以上字符 (数字、汉字、字母)，使用高度为 16px 的全圆角矩形。字符与容器的左右间距为 4px，容器宽度随字符自适应。英文字符的单词注意首字母大写
- 极限：数量超过 999 时，用图标「···」展示

**头像右上角：**

宽度增加时往左侧延伸

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d006dbcdcac329e583c9351279f66763_OMAEZa6UIW.png?height=209&lazyload=true&maxWidth=800&width=1024)

**图标右上角**

宽度增加时往左侧延伸

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/24f7c4ba7efbfe8b6c3c414bcf822452_KIcXF9fZZc.png?height=182&lazyload=true&maxWidth=800&width=1024)

**文字右上角位置**

优先选择将徽标中心与文字顶部置于同一条水平线上，将徽标向右移动，直至最左侧距离文字最右侧 2px。

在实际情况中右侧位置受限时（如固定宽度的tab ），徽标圆心与文字右上角重合，宽度增加时往左侧延伸

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a5640ff3b4012d529eeecab0b66fabb_fjcJAKIvKh.png?height=269&lazyload=true&maxWidth=800&width=1024)

<br>
**纯数字字符徽标**

具体位置根据场景自定义，需遵循所在组件的规范要求 (如列表规范)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9dee2e4347ce8981bcc336f157c585bf_ukQgmZ816K.png?height=232&lazyload=true&maxWidth=800&width=1024)
  

### 图标徽标

在某些功能场景中，也可使用带图标的徽标作为特殊状态提示，如：勿扰模式、feed 流中的话题。
注意：徽标中的图标需要选择具备通用性 (普遍共识) 和具象性 (表意直观) 的图形，如无必要，建议不要滥用图标徽标，避免加大用户的理解成本。

#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0325f5a4bc16d475af7783692f3d29be_SyKOZSgghP.png?height=605&lazyload=true&maxWidth=800&width=1024)

#### 通用样式规则

**尺寸说明**

以 32px、36px、40px 宽度的头像为列，图标徽标尺寸为统一为 14*14px

具体尺寸可根据场景自行定义，也可以以一个尺寸为基准，进行等比缩放，并遵循 4N 原则

原则上图标徽标尺寸不小于14*14px

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fc6d8446ab6305eb03d39992298c704_wWla6E5AOS.png?height=280&lazyload=true&maxWidth=800&width=1024)

<br>
**位置说明**

**图标右上角的位置** : 

用与形状相交的对角线作为中心点

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f3897cb229fdd10814cc361306cb779f_KyIohcdpJC.png?height=125&lazyload=true&maxWidth=800&width=1024)


**图标右下角的位置**: 

用与形状相交的对角线作为中心点

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aa441d5043f2bdc5dff0c294c5cce31f_p6UC2XZumG.png?height=130&lazyload=true&maxWidth=800&width=1024)

**角标徽标** 

通常出现在列表、卡片上，强调和突出其特殊状态，其主要作用是标记，或吸引用户的注意力，提示用户关注该事物或事件。例如：消息卡片加急、会话稍后处理、Wiki 封面。


#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ddbd03ddacfdfa812a3cfeafc1fbac58_W81P3jhHvE.png?height=406&lazyload=true&maxWidth=800&width=1024)


#### 通用样式规则

**形状说明**

角标徽标的形状大致有三角形、矩形、旗帜形、异形，根据不同的场景和承载物灵活巧妙地设计

可以搭配图标或文字表达含义，注意清晰直观、言简意赅

**颜色说明**

原则：色彩的选用不作严格限制，但需要注意：调用色彩库且需要注意色彩语义、与功能或内容相关、与背景明显区分、与产品风格调性相符。

**位置说明**

原则：置于容易引起用户注意的位置，注意避免对关键信息有遮挡或覆盖。

参考：根据人们“Z”型浏览习惯，确保状态的可见性与可读性。