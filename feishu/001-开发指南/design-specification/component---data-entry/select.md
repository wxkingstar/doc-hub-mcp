<!--
title: 选择器
id: 7475195771685634050
fullPath: /tools-and-resources/design-specification/component---data-entry/select
updatedAt: 1742375641000
source: https://open.feishu.cn/document/design-specification/component---data-entry/select
-->
# 选择器
用户选择元素的组件，可配合输入框、按钮、标签等使用。


## 使用规则

当用户需要针对多个选项进行选择时，用此组件可以收纳操作元素。点击触发区域，出现下拉菜单。在下拉菜单中进行单选或多选。
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/939f465bd25ed101f6ae931a8c8b5fc1_xiD3ZsfPdG.png?height=592&lazyload=true&maxWidth=800&width=2048)

1. **标题文本（可选）** : 在表单中组合使用。显示字段所需的标签内容，在绝大多数场景下，标题文本都是必要的
1. **触发区域 :**  通常选择框的区域即为下拉选择的触发区域，选择框中展示对所需内容的文本描述或示例。选择完成后显示已选选项。必要时也可对选项信息进行搜索
1. **下拉列表 :** 用于承载备选选项内容
1. **列表内容 :** 用于展示备选选项，受实际场景影响，备选选项可能包含辅助说明文本、标签、头像、Icon、复选框等内容，必要时可对备选选项进行分组。选项较多时需要滚动条
  
  

## 控件类型

### 类型总览

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/99465a12e64f9a25717ddaed7f9a713b_dVQMEwzMkO.png?height=1520&lazyload=true&maxWidth=800&width=2048)
  

### 基础选择

#### 使用场景

- **单选：** 通过点击选择框区域触发下拉列表，点击任意备选项后立即同步结果。点击下拉选框外的区域或选择完成后，下拉列表收起

- **多选：** 通过点击选择框区域触发下拉列表，点击任意备选项作为最终结果。点击下拉选框外的区域或下拉箭头时，下拉列表收起


#### 状态与交互说明

**通用规则**

- 菜单展开后默认激活第一个选项，支持 `enter` 键选中选项，键盘方向键切换选项
- 单选选择器二次激活下拉列表时，选择框中的已选项失焦不可点击，所选内容透明度变为 50%。若不更改选项直接收起下拉列表，则选择框保持之前的已选项
- 根据实际场景需求，可以对下拉选项设置默认值，支持回填。例如系统设置或默认筛选值
- 错误提示文本在表单 Form 中与下拉选择 Select 组合使用，校验逻辑和文案可自行定义

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcb7fb731d60191de5c4850025766744_78v7HB7gBW.png?height=2574&lazyload=true&maxWidth=800&width=2048)


##### 清除（可选）

- 选择完成后，当鼠标 Hover 至选择框区域，清除按钮出现，可快速清除选择框内全部内容（选项与搜索输入内容）
- 当选项内容较多，清除按钮向左挤压选项内容区域
- 对于触发区域无输入能力、下拉选择仅用于选项切换的场景，默认值不能清除，不出现清除按钮

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/982783c39635520c2014642a6dbb8bca_4soMLvHoih.png?height=272&lazyload=true&maxWidth=800&width=2048)


##### 搜索 （可选）

- 推荐下拉选择支持搜索与模糊搜索，可以根据场景定制
- 输入搜索内容字段达到输入框的右边缘时，超出区域的文本会自动向左滚动，左侧保留 Padding
- 当选择框内有搜索录入内容时，选择框区域出现清除按钮，点击可清除选择框内的所有内容
- **多选：** 搜索过程中进行选择，输入的文字不被清除，搜索结果保留。搜索过程中删除某个选中项，输入的文字不被清除，搜索结果保留

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f98f4119f33a53e37a2ca3fbe799061_xJEYJ7ccg8.png?height=992&lazyload=true&maxWidth=800&width=2048)


##### 选项详情（可选）

**选项图标：** 在较少数情况下，需要针对选项进行说明，可在选择框右侧区域增加 Info Icon。

根据具体场景设置鼠标 Hover 或点击说明图标的交互：若展开内容为简短的文字说明，建议使用 Tooltips 组件。若展开内容包含操作，建议使用 Popover 组件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a1d03c817ae95c1b7857f44b07052ba_vO3tqXTMgl.png?height=316&lazyload=true&maxWidth=800&width=2048)


##### 扩展菜单（可选）

**搜索时创建条目**
- 搜索过程中对于不在菜单中的字段可直接点击新建，新建选项自动填充进下拉菜单及选择框内
- 建议用于选项属性仅有名称的场景
- 选项名称很长时，菜单中的新建文字通过「…」省略，不可折行

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6df3472a0acc0d61c69f744eac1e1b64_aILnfDlyg8.png?height=678&lazyload=true&maxWidth=800&width=2048)

**主动创建条目**
- 新建选项字段在菜单中常驻，点击后触发 Popover 或 Dialog 编辑选项内容，编辑完成后新建选项自动填充进下拉菜单及选择框内
- 建议用于选项属性较为复杂的场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d8d78072c077ffaa08d5bc5682824f02_34XsXh2P7J.png?height=756&lazyload=true&maxWidth=800&width=2048)
  

#### 通用样式规则

##### 样式与尺寸说明

**选择框**
- 提供 S/M/L 三种尺寸大小
- 基础选择框遵循 Input 组件规范：原则上不对宽度做限制，但建议输入框最小宽度 240px，最大宽度 600px
- 多选在选择项过多内容时，选择框可自动变高承载选项，推荐最高为 188px（可根据实际场景调整），超出鼠标 Hover 时显示滚动
- 若选择框高度固定，超出选择框显示部分仅保留超出部分的数字

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/240e5547321b87861f9414baba4df919_14UD8LT2kO.png?height=472&lazyload=true&maxWidth=800&width=2048)

**下拉列表样式**
- 当列表内容为复合内容，列表项 Disable 时的样式为整个条目 50% 透明度

**下拉列表尺寸**
- 优先考虑：选择框与下拉列表等宽
- 宽度：推荐最小宽度 120px，最大宽度 420px
- 高度：通常推荐最大高度 246px。对于选项平铺且数据量较大的下拉选择（如：手机号码前缀的备选值约 230 个），可考虑触底或触顶的菜单高度，保证 16px 的安全距离

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bc7b9880da70f6aed15bb0ceb9823f10_aGylgBkHGb.png?height=1138&lazyload=true&maxWidth=800&width=2048)

**文字省略规则**
- 当文本内容过长时优先考虑横向拓展下拉列表宽度
- 基础单选与多选的下拉列表选项正文均建议单行展示，多语言场景建议最多两行（此时勾选 Icon 与内容中心对齐），超出部分省略，建议鼠标移入时使用 Tooltips 组件展示全部内容
- 多选时的选项标签不支持折行，一行至少展示一个标签，无法显示完整时超出部分省略

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d9fda6cfd0b7e803e6288e323bd59212_oPyDUj7Hu2.png?height=770&lazyload=true&maxWidth=800&width=2048)


##### 位置说明

下拉菜单的优先向下弹出，与选择框左对齐
当底部空间不足时，下拉选框从顶部呼出，与选择框左对齐
当左侧空间不足时，下拉选框与选择框右对齐

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e1fe8d9466be4fde67357e0d000a35bb_IEZR7fSx8K.png?height=1048&lazyload=true&maxWidth=800&width=2048)
  

### 复杂内容选择

#### 使用场景

根据实际场景需求，下拉选择选项的内容可能为纯文本、包含辅助说明文本、包含头像、Tag、Icon 等元素、或选项可成组。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63ebf94083c605e0a0fcd8a1c9aae00e_MDcfDbuBWE.png?height=1164&lazyload=true&maxWidth=800&width=2048)


#### 通用样式规则

下拉选择单行最小高度为 32px。内容复杂时，建议每个选项保证上下 4px 间距适应选项高度。
下拉列表包含标题时，标题建议单行展示，多语言场景建议最多两行，超出部分省略，鼠标移入时使用 Tooltips 组件展示全部内容。
当描述性文本内容过长时，建议最多显示三行内容，超出内容省略。根据实际场景判断是否需要 Hover 时弹出 Tooltips 显示完整内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/45677f2a54db06fe43a79e547dc5df35_zlB5nEmznN.png?height=872&lazyload=true&maxWidth=800&width=2048)
  

### 差异化选择框

#### 使用场景

**下划线选择框：** 通常应用于具有分割线的列表、表格场景，或者空间受限的、较为复杂的筛选场景。

**无边界选择框**：通常应用于对内容的筛选、排序、主题切换等，该场景下触发区域通常不支持输入与搜索。不建议使用多选类型。


#### 通用样式与交互规则

**下划线选择框**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f5a558273eb7ca2597e69620ac5158d0_deyu3QxiwV.png?height=1844&lazyload=true&maxWidth=800&width=2048)

**无边界选择框**

通常会对下拉选项设置默认值，仅用于选项的切换，例如系统设置或默认筛选值。

不支持在触发区域输入与搜索，Hover 不会出现清除按钮。选项过多的场景搜索功能可考虑迁移至下拉列表内，参照筛选组件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/afba93c792fb650af65f19850ebcc0df_PFV8O6HPrZ.png?height=1264&lazyload=true&maxWidth=800&width=2048)