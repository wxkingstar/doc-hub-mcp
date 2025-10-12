<!--
title: 输入框
id: 7475195771685781506
fullPath: /tools-and-resources/design-specification/component---data-entry/input
updatedAt: 1742375641000
source: https://open.feishu.cn/document/design-specification/component---data-entry/input
-->
# 输入框
页面中引导用户录入信息的组件，它们通常出现在表单和对话框中。输入框通过鼠标或键盘输入内容，是最基础的表单输入组件之一。

## 使用规则

当用户需要完成填写、筛选、查询、搜索等功能时，可使用输入框组件。
- 为所需的信息提供最佳的输入框样式，帮助用户以正确的格式输入信息并避免错误，使整个过程尽可能地简单和高效
    - 基础输入框仅在特殊场景下使用，如空间极度受限且输入框数量很少时
    - 输入内容仅为数字，且有明确的数值范围时，使用数字输入框
    - 需要明确输入类型或需要额外的控制操作的可使用带图标输入框
    - 有固定组合或计量单位的，需使用带属性输入框
    - 需要录入的信息强关联但不固定时，可以使用组合输入框
    - 长文本输入框需要根据其场景选择多行输入框或文字域
- 标签应该简洁、简短。清晰并具有描述性。用于帮助用户快速进行阅读，了解所需要输入的信息。
    - 顶标签输入框是大多数情况下的最佳选择，因为输入效率最高
    - 在高度受限时且需要输入的信息较多时可以使用水平右对齐标签
    - 若输入框的录入信息和相邻的输入框属于同一属性或内容时，可以由一个标签或标题指示。例如：输入组（多语言输入）
    - 空间极度有限且输入框≤2 时，可以不使用标签而使用占位符文本去说明输入框所需输入类型。（例如弹窗标题可以说明输入框的输入类型的情况下，输入框可以不用标签文本）
  
  


## 组成要素
:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8fde28dcd0fd3f0c207b18128d1f5c26_4nADbI5xzP.png"
        alt="图片" style="max-height: 200px;">
:::
1. **容器：** 可交互的输入区域，有多种形态
1. **占位符文本：** 是对所需信息的描述或示例，在用户提供信息后，用输入文本代替。必要时提供输入格式字段，保证信息录入的一致性（如 mm/dd/yyyy）
1. **标签区域：** 在表单中组合使用。显示字段标题，在绝大多数场景下，标签文本都是必要的
    1. 详情图标：label 额外的信息说明，Hover 显示详情
    1. 必填标识：六角星样式「 * 」，提示输入框文本为必填。如页面中所有输入项都为必填，则无需
1. **输入文本：** 文本输入区域
    1. 前缀图标：支持配置「搜索」等表意类的前缀图标元素
    1. 后缀内容：可配置【清除】按钮，支持清除整个输入文本字段，有输入文本时 hover 显示，常用于输入内容为临时性输入或选择类输入框时，如搜索、密码输入框、下拉选择。后缀区域也可配置【字符计数器】或【拖拽元素】，将在相应的输入框类型中展开介绍
1. **辅助或验证文本：** 提供额外的上下文或验证信息控件类型，最多支持 2 行。始终可见或仅在激活状态下可见
  
  

## 组件类型

### 类型总览

图示：依次为基础输入框、数字输入框、带图标输入框、带属性输入、组合输入框、长文本输入框。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e4cb07d08dd1b223adad34180a46fa53_S8icO445vO.png?height=1002&lazyload=true&maxWidth=800&width=2048)
  

### 基础输入框

#### 使用场景

最常用的输入框，仅支持基本的信息录入，没有附加功能。

#### 状态说明

输入框有 Normal、Hover、Activated、Inputting、Input complete、Disable、Error 七个状态，所有的状态都有明确区分，当输入字段达到输入框的右边缘时，超出区域的文本会自动向左滚动。
- Error 状态下的 hover，鼠标指针变化，描边颜色不变，点击则进入 Activated 态
- Disabled 状态下的 hover，鼠标指针变化，鼠标+禁用

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2cd13633e5eb3ea5c20aff38d58e98e4_033E2J8ArS.png?height=692&lazyload=true&maxWidth=800&width=2048)


#### 差异化样式规则 - 无边界输入框

- **使用场景：** 作为输入能力纳入到组件中时（Profile 中的状态编辑、Email 写邮件收件人和主题）

- **差异点：** 容器无描边，无底色，仅提供基础输入能力

- **差异化原因：** 需要输入能力时纳入到组件


#### 差异化样式规则 - 密码输入框

- **使用场景：** 输入类型为密码时，如登录，注册。
- **差异点：** 输入内容默认以 * 代替，有清除的按钮
- **差异化原因：** 需要隐藏密码

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/98a05a5f2709f905ccd0338856268533_lINZ5tvyXV.png?height=272&lazyload=true&maxWidth=800&width=2048)


#### 尺寸说明

输入框高度有 28px，32px，40px 三个尺寸，原则上不对宽度做限制，但建议输入框最小宽度 240px，最大宽度 600px。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe4ffec1c3aed15f70d33127a1781d83_l8p0dw9ctP.png?height=472&lazyload=true&maxWidth=800&width=2048)
  

### 数字输入框

通过鼠标或键盘，输入范围内的数值。

#### 使用场景

输入内容 **仅为数字，且有明确的数值范围时使用**，数值可以为负数单位数值根据具体场景定义。

例：年假只有 7 天，可申请的数值区间为 1-7。


#### 状态说明

数字输入框有 Default、Hover Input、Hover button、Inputting、Input Complete、Error 、Disable、Readonly 8 个状态。

若数值区间有负数值时，Normal 态的上调节按钮为正常态，若数值区间为正数值时，Normal 态上调节为 Disable 态。
数字输入框仅可输入数值，若输入其他字段则报错，报错文案为“输入类型错误”。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3cfc56116bfc6ec1ef6c4e046d9c69bf_dI2ZaT64P9.png?height=664&lazyload=true&width=2048)


#### 使用示例

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
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/af5c28e03ff58765e8689039f3dd61d1_10IjK9LPBG.png?height=284&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f1374281592331ef94f3ee415d62846_PD1r6lEf7J.png?height=284&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>需要申请数值通常有明确的数值区间</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>随机生成的编号没有固定的数值区间且单位数值难以定义。 </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
                                                                   

#### 尺寸说明

数字增减器宽度为 32px，不随输入框的宽度变化。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3a1e93c824ae5fe06bef36cfe6270b0_yGy1OY79QY.png?height=254&lazyload=true&maxWidth=800&width=2048)
  

### 带图标输入框

#### 使用场景

需要结合图标来明确文本字段所需的输入类型，或者提供额外的控制时使用。

**头部图标：** 语义型图标，用于描述文本字段所需的输入类型，辅助录入信息内容，如搜索、用户名、密码等。头部图标只允许 1 个。

**尾部图标：** 引导操作类图标，提供额外的控制，可以有多个。如清除、显示/选择等。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bbfe8c0c1d037602bb69fe2f4f080778_TMd6vxURq6.png?height=272&lazyload=true&maxWidth=800&width=2048)


#### 状态说明

输入框容器状态与基础输入框一致。语义型或信息提示类图标无状态变化，有操作的图标状态变化跟随按钮 Button 的相关规则。
由于清除按钮为面状图标，交互变化较为特殊。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63e7df726e081f41681f669c165bd8f2_jgchDVOOxI.png?height=272&lazyload=true&maxWidth=800&width=2048)


#### 尺寸说明

icon 距离输入框边距为 12px，icon 与文字间距为 8px
多个 icon 之间间距为 8px

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a4b66c3137295221ad2cd91f26ba0b1a_S8q9OlqPOg.png?height=224&lazyload=true&maxWidth=800&width=2048)
  

### 带属性输入框

#### 使用场景

用于配置一些固定内容且属性是计量单位的输入。如网址、百分比等。
属性通过前缀后缀去显示，前缀 / 后缀又分为「固定前缀 / 后缀」和「可切换前缀 / 后缀」，文本框可以同时拥有前缀和后缀。


#### 状态说明

- **固定前缀 / 后缀**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f96957766bbe91bf82b596fbd0553785_ZwNxwCP7Qf.png?height=704&lazyload=true&maxWidth=800&width=2048)
- **可切换前缀 / 后缀**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84f195c459b0bea0b146e81fd377f222_Nq9W1dPvgu.png?height=704&lazyload=true&maxWidth=800&width=2048)


#### 差异化样式规则 - 标签输入框

- **使用场景：** 当同一标题下的输入框，需要输入的内容相同但有不同属性时使用。如多语言输入框。

- **差异点：** 以标签样式展示其属性，标签居右，没有最小宽度限制。标签输入框有图标时，与标签间距 12px。

- **差异化原因：** 输入内容相同但属性不同，例如多语言输入框，**输入文本的语言属性不同但是输入内容是一样**，文本属性而不是输入框单位属性。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ed520cb43d4db205de1f3ebdb85a4bdb_fJMlAHi90D.png?height=496&lazyload=true&maxWidth=800&width=2048)





#### 使用示例（正反案例）


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe48910864c3b5f93fb2aca73e49570e_5U9WGtziMI.png?height=284&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a7aa29c9a8f09213ccac12762eb11b1_nJ6ylm42mK.png?height=284&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>￥、€、$都是的货币符号，都属于计量单位，且货币符号+数字也是固定的组合内容</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>电话号码的组合是固定的内容，但是不属于计量单位。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/19ae12262272ef986a65e3a88864f2c1_vsXnrrwheY.png?height=668&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ae50b4a67c6cb8c6e29892e4693e827_3pZbWmOn03.png?height=668&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>同一标题的输入框，需要键入多个语言的内容时，使用多语言输入框</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>单个输入框键入的语言不影响输入框类型</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
                                                                                

#### 尺寸说明

前缀 / 后缀最小宽度 70px，最大宽度 300px。超出区域的...显示。
输入区域宽度最小 120px，且输入区域宽度必须≥前缀 / 后缀。
前缀在文本框中左对齐，后缀在文本框中右对齐。前缀 / 后缀宽度固定，不随输入框的宽度变化。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce33bb92376461ac1a8364d451d29bbd_zqF5fSIjQF.png?height=254&lazyload=true&maxWidth=800&width=2048)
  

### 组合输入框

#### 使用场景

不同类别的输入框组合而成，用于预配置一些强关联内容的输入。支持多个输入框组合


#### 状态说明

组合输入框需除 Error、Disable 态统一变化之外，其他状态为独立变化。
- 例：组合输入框下输入的同时 hover 另外一边时，进入 hover 态。点击则进度点击区域的激活态。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0a48dbe36763f3f8ce80a54b25955e9d_PJyEutfOpf.png?height=704&lazyload=true&maxWidth=800&width=2048)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fa591ca0d19e18e2fed4a968452d69e7_u05zaNQWEd.png?height=704&lazyload=true&maxWidth=800&width=2048)


#### 差异化样式规则 - 单字符组合输入框

- **使用场景：** 录入的信息需要单个字段分开输入，并且有特定的结构时。常用于验证码输入。

- **差异点：** 由单个独立的输入框组成，可以添加“-”划分数据结构。

<br>
**交互行为**
- 单个输入框输入完成会自动激活下一个输入框，且前一个输入框保持激活状态
- 全部都输入完成才是完成态
- 编辑和删除可以必须递进删除。需要从最后一个输入框向前删除后修改。无法单独修改中间的某一个输入（线上逻辑）
- 报错：
    - 提交时校验报错，所有的输入框均为 error 状态
    - 需要支持填写错误后，默认清空并激活第一个输入框，同时提示错误原因
- 仅支持数字输入，并支持数字加密

**尺寸与样式**
- 输入框的组合数量支持配置，默认 6 个
- 对齐方式：左对齐或填满容器
    - 当需要宽度填满容器时，优先考虑调整连接符左右间距
    - 极端情况下可调整每个 input 宽度以适应容器

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bacbfea268254267a2ce21a9806bcf1f_FvPahKy8dF.png?height=892&lazyload=true&maxWidth=800&width=2048)

#### 使用示例（正反案例）


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6dd0fc70c92b764650d8aad5cdf453df_JDiPVL4x3Y.png?height=456&lazyload=true&width=1004)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/444237036f150269d2f633bf18a00990_9b7NR0VKbT.png?height=456&lazyload=true&width=1004)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>左右内容关联但是相互独立的</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>固定内容 / 计量单位应使用属性输入框 </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
                                                                                                                                                              

#### 尺寸说明

前缀 / 后缀最小宽度 70px，最大宽度 300px。左边距 12px，单字符属性居中对齐。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dbe1a6690d34dff56743b4fdf11e4cc7_WwcXPnOKBk.png?height=254&lazyload=true&maxWidth=800&width=2048)
  

### 长文本输入框

#### 使用场景

在表单输入中，信息较长时需通过长文本输入框承载。如：介绍、评价等。点击右下角可拖拽输入框高度，当光标到达字段底部时垂直滚动。文本域用于空间受限时使用。

多行输入框一次显示所有用户输入，将溢出的文本换行。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/942f0ea85a7f8972a435cc0aa942f7aa_eWabTCg8K7.png?height=384&lazyload=true&maxWidth=800&width=2048)


#### 状态说明

**多行输入框：** 输入高度随文字内容高度动态增加

**文本域：** 文本域可拖拽高度（右下角有可拖拽小标），当输入字段达到输入框的底部边缘时，超出区域的文本会自动向上滚动。

**字符计数器：** 前面的字数随着输入的数值数同步变化，超出限制的字符报错，可配置保留超出字符或直接截断。文字过多时字符计数器会覆盖输入内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c7f0258dd668b9f134384ae46ac7d29_gJHADVAU7z.png?height=1104&lazyload=true&maxWidth=800&width=2048)


#### 尺寸说明

- 多行输入框：高度自适应，初始为基础单行输入框，随输入的字符数量高度向下动态变化。

- 文本域：高度支持自定义，推荐高度 92px，超出部分可滑动查看内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1d22fb42b7dff324d423c1b85dedb064_rDrrCe6Ok6.png?height=360&lazyload=true&maxWidth=800&width=2048)


