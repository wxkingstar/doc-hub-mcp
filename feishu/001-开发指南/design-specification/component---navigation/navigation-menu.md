<!--
title: 导航菜单
id: 7477468164940595203
fullPath: /tools-and-resources/design-specification/component---navigation/navigation-menu
updatedAt: 1742375535000
source: https://open.feishu.cn/document/design-specification/component---navigation/navigation-menu
-->
# 导航菜单
为页面和功能提供导航的菜单列表。

  

## 使用规则

导航菜单为用户提供导航指引，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航两种类型，顶部导航提供全局性的分类标签，侧边导航支持提供多级结构来收纳网站的分类架构。
  
  

## 组成要素

### 可选配置

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f70fdce0b5a094f0b5136828e4d95ee2_D4tIowBpaX.png?height=3220&lazyload=true&maxWidth=800&width=2048)

1. **品牌标识（可选）：** 通常位于顶部导航栏左侧、侧边导航栏顶部，通常还承载了home键功能，点击后返回首页，常用于web端
1. **一级导航：** 用于导航一级页面/功能，侧边导航栏中以列表项形式呈现，支持收纳二、三级导航，顶部导航栏中以tab形式呈现，超出数量限制支持收起到“更多”
    1. **图标：** 导航item的表意图标，可根据自身品牌风格自定义（顶部导航无需展示）
    1. **文本：** 导航item的文字描述
    1. **下拉箭头（可选）：** 导航item包含次级导航时需展示下拉箭头，交互方式同dropdown
    1. **字符徽标（可选）：** 用于提示当前分类内新消息数量
1. **二级导航（可选）：** 用于导航二级页面/功能，支持收纳三级导航，可配置相关操作
1. **三级导航（可选）：** 用于导航二级页面/功能，可配置相关操作，常规网站侧边导航建议使用二级结构，最多不超过三级
1. **相关操作（可选）：** 导航item所支持的相关操作，可根据需求配置，最多不超过两个
1. **查看更多（可选）：** 展开次级导航时，建议数量不超过5个，如果次级导航数量过多，可在列表底部使用展开/收起按钮查看更多列表项
1. **展开/收起（可选）：** 用于在web端展开或收起侧边导航栏，收起后的侧边导航默认只展示一级导航图标，hover向右侧展开二、三级导航菜单
1. **树选择（可选）：** 用于展示树状关系的侧边导航
1. **选中态指示器（可选）：** 用于提示选中状态
  

### 类型总览

自上而下依次为顶部水平导航（web）、侧边导航（web）、无边界侧边导航（web）、侧边导航（desktop）、侧边树导航（desktop）。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a4c08292a2b5060ce49a66d396208e83_A13rynrIQZ.png?height=3574&lazyload=true&maxWidth=800&width=2048)
  
  

## 顶部水平导航（Web）

### 使用场景

顶部水平导航常驻顶部，为网站提供全局性的分类导航，支持用户在各页面/功能之间快速跳转。
  


### 布局规则

#### 功能区域定义

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9cbdb3400b8a4a4fc950106d1f83186a_qC0RmL67PU.png?height=500&lazyload=true&maxWidth=800&width=2880)

导航栏从左至右可分为三个区域：
- 最左侧为品牌区域，左对齐，用于承载品牌元素，品牌常驻，点击可返回首页
- 品牌区域右侧为一级导航区域，左对齐，用于承载网站的一级导航分类标签，默认全部展示
- 最右侧为产品功能区域，右对齐，用于承载搜索、快捷入口、个人中心等全局性操作，各线可根据需求自主配置


#### 自适应规则

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6d015abe21590445c932294e03065aa_1BspDfCQsF.png?height=1556&lazyload=true&maxWidth=800&width=2880)

- 默认完整展示，宽度 1440px，作为设计尺寸
- 一级导航与功能区的最小间距为 40px，当间距小于 40px，只露出前三个导航分类（数量可配），其余收进“更多”按钮，点击更多，可查看和选中其他分类
- “更多”按钮与右侧功能区的最小间距为 40px，继续缩小浏览器宽度，导航不做进一步自适应
  

### 尺寸说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fa4e5a720bde235f0c0fd089af61168d_IKetfunZ3z.png?height=1144&lazyload=true&maxWidth=800&width=2048)

**导航栏**
- 导航栏定高 56px，左右边距 24px
- 品牌区与导航区固定间距 40px，导航区与产品功能区最小间距 40px

<br>
**分类标签**
- 分类标签字号 16pt，上下居中展示，间距 32px
- 选中态指示器与标签文本等宽，底对齐，高 3px


  

### 交互说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc01d4f8307104abaa4e3da860243b0_Xk4kHDNgex.png?height=1126&lazyload=true&maxWidth=800&width=2048)

- 产品 LOGO 支持点击，点击跳转网站首页
- 分类标签依从页签 Tabs 组件 Hover 展示状态变化，点击切换分类
- 点击更多向下展开 Dropdown 菜单，交互依从下拉菜单 Dropdown，菜单项需展示选中状态（同 Tab），收在“更多”中的分类被选中时，更多按钮需展示选中状态
  

### 状态/颜色/热区说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2eb66d02cf39161f4a0c6bcf289616a0_Fo8kbJxxVs.png?height=886&lazyload=true&maxWidth=800&width=2048)




  
  

## 侧边导航（Web）

### 使用场景

侧边导航常驻页面左侧，为当前页面/功能提供导航。侧边导航具备展开和收起两种模态，可根据需求配置是否支持收起。
  

### 布局规则

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/959492c97c8e066e2ef1575171b6b077_ZlHg0WoZq1.png?height=1552&lazyload=true&maxWidth=800&width=2048)

导航栏从上至下可分为三个区域：
- 顶部为品牌区域，常驻置顶，用于承载品牌元素，点击可返回首页
- 中部为导航区域，顶对齐，用于承载当前页面的导航分类标签，次级导航默认收起
- 底部为操作区域（可选），底对齐，用于承载导航的展开/收起操作，可根据需求自行配置
  


### 尺寸说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7f370ed4b5b1863e5c8cd59e41a05598_Y5f1CILgfh.png?height=1614&lazyload=true&maxWidth=800&width=2880)

**导航栏**
- 容器：默认状态定宽 240px，收起状态定宽 64px，高度自适应
- 品牌区域：高 64px（建议值），顶对齐
- 菜单列表：高度自适应，顶对齐，与品牌区域间距 8px（建议值）
- 操作区：高 48px，底对齐，收起按钮左对齐

<br>
**菜单选项**
- 容器：宽 240px，高 48px
- 一级导航：左边距 24px，选项图标 20 * 20px，图标与文本间距 8px，右边距 20px，箭头图标 16x16
- 二级导航：左边距 52px，右边距 20px，箭头图标 16 * 16px
- 三级导航：左边距 80px，右边距 20px
- 选项操作：右对齐，右边距 16px，按钮尺寸 24 * 24px，间距 8px

<br>
**级联菜单**
- 容器：宽度 200px，高度根据列表数量自适应，最大高度=导航栏菜单展示区域高度，超出可滚动展示，列表上下Padding 8px
- 菜单项：左右边距各 20px，高 48px，右侧箭头尺寸 16 * 16px
- 选项操作：右对齐，右边距 16px，按钮尺寸 24 * 24px，间距 8px
  


### 交互说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/28fad6871da6f05915c08cc454e1417d_Z2M3mD0hdV.png?height=1578&lazyload=true&maxWidth=800&width=2880)

**默认状态：**
- 进入页面时，默认选中首个选项，如果有次级选项，默认选中次级选项中的首个选项
- 折叠选项，点击展开次级菜单，再次点击收起菜单
- 非折叠选项，点击后选中选项，切换为 Active 状态
- 非折叠选项右侧可配置相关操作，以图标按钮形式呈现
    - 最多展示两个，右对齐，Hover 时展示
- 次级选项默认最多展示 5个，超出数量可点击“查看更多”展开全部
    - 查看更多展开后状态变为“收起”，点击可收起展开选项
- 选项列表高度超出导航容器高度时，当鼠标 Hover 导航栏区域时，右侧展示滚动条
- 点击左下角“收起”按钮，可将导航栏切换到收起状态，同时按钮状态切换为“展开”

<br>
**收起状态：**
- 进入页面时，默认选中首个选项，如果有次级选项，默认选中次级选项中的首个选项
- Hover 折叠选项，展开级联菜单
- Hover 非折叠选项，显示 Tooltips，点击可选中选项
- 递进菜单选项右侧支持配置相关操作（逻辑同默认状态选项）
- 点击底部“展开”按钮，导航栏切换为默认状态，同时按钮状态切换为“收起”
  

### 状态/颜色/热区说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a57a912ee4b43fd7c60950ed9ad8894e_AOUrl5McOT.png?height=516&lazyload=true&maxWidth=800&width=2880)


  

### 差异化样式 - 无背景侧边导航（Web）

- **使用场景：** 突出内容区域视觉层级。
- **差异点：** 导航容器无底色（使用页面背景色作为底色）。Hover、Active 状态右侧增加圆角。导航栏不支持收起。
- **差异化原因：** 弱化层级关系，选项右侧边缘需要柔化处理，导航栏视觉层级较弱，收起后影响识别。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ad486179d18d9dcc62c420206b497dc_kA3MmZt1AT.png?height=2106&lazyload=true&maxWidth=800&width=2880)
  
  

## 侧边导航（Desktop）

### 使用场景

为客户端内功能/页面提供导航的菜单列表，通常设置于页面左侧。
  

### 布局规则

通常用于左右布局的页面结构，以菜单列表形式呈现，常驻内容区左侧为当前功能/页面提供二级导航。
对导航栏的布局方式有所不同，因此组件仅对导航菜单部分进行规范。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d5f0483568e2abb5d2e943dc9e00fe1_X4uLNg43WF.png?height=1290&lazyload=true&maxWidth=800&width=2048)
  

### 尺寸说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/deca3561e8d558ea95937459faeec0ad_U4Z1ZGgp1a.png?height=1150&lazyload=true&maxWidth=800&width=2048)

- 导航菜单默认（最小）宽度 220px，支持用户手动向右拖拽（可配），拖拽最大宽度 440px
- 菜单选项高度 40px，选项图标尺寸 20*20px，左边距 16px，文本 14pt，文本左边距 8px/右边距 16px
- 文字徽标文本 12pt，与菜单文本展示域间距 12px，右边距 16px
- 菜单项右侧可配置 1-2个相关操作，操作按钮尺寸 24*24px，间距 8px，右边距 12px
  

### 交互说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3004852cb22c5319013fbe794bfebc0c_wGJ4v016a0.png?height=1150&lazyload=true&maxWidth=800&width=2048)
- 进入页面时，默认选中首个选项
- Hover状态展示选项相关操作，点击可选中选项
- 菜单列表高度超过容器高度时，Hover 容器区域展示滚动条，只支持上下滚动
  

### 状态/颜色/热区说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/81b42fdbfac78efbacbb9dbc18b62d42_bw8YVbCVib.png?height=400&lazyload=true&maxWidth=800&width=2048)



**菜单项**
- Default
    - 文本：14pt，Regular，N900（@neutral-color-12）
    - 徽标：14pt，Regular，N500（@neutral-color-6）
    - 背景：菜单项无底色，依从导航菜单容器底色，默认N0（@neutral-color-1）
- Hover
    - 文本：14pt，Regular，N900（@neutral-color-12）
    - 背景：N900*10%（@neutral-color-12 * 10%）
    - 操作按钮：N600（@neutral-color-8）
- Active
    - 文本：14pt，Medium，B500（@primary-color-6）
    - 背景：N900*5%（@neutral-color-12 * 5%）
    - 选中指示器：B500（@primary-color-6）
- 热区
    - 选项整体，操作按钮热区独立
  

### 差异化样式 - 侧边树导航（Desktop）


**使用场景：** 用于数据存在多级关系时，需要展示树结构的侧边导航。

**差异点：** 增加树选择结构，交互方式可参考树选择。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/21018aa663b845efe7c140c8e45c97aa_UttXiLEpgL.png?height=846&lazyload=true&maxWidth=800&width=2880)
- 菜单项无底色，依从导航菜单容器底色，默认 N0（@neutral-color-1）
- 左侧选中指示器支持可配
- 树结构最多支持展示 4 层
  
  

## 多语言适配

### 基础逻辑

- 导航信息如有其他场景可以完整展示（如详情页），可使用...截断，否则需要完整展示
- 极限情况下，中文、东亚语系最多展示一行，拉丁语系最多展示两行
  

### 顶部水平导航

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e852334763cb138d0c0f58fccaf09597_cL2KweHFIv.png?height=1188&lazyload=true&maxWidth=800&width=2048)

- Tab 标签文本，原则上应当尽量精简。多语言或极限情况下，水平导航分类标签的最大展示宽度为 320px，超出使用...截断
- 菜单定宽 200px，菜单项文本保持左右边距，最多展示两行，超出截断
- Hover 状态，菜单项展示相关操作时，文本展示区域与操作按钮保持间距，宽度自适应
  

### 侧边导航

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2abece9ab27dfacd6cf932c317e8c78_jtYmeeAAbY.png?height=1336&lazyload=true&maxWidth=800&width=2880)

- 定宽菜单栏（如 Web 端侧边导航），菜单项文本保持左右边距，最多展示两行，超出截断
- 非定宽菜单栏（如 Desktop 端侧边导航），菜单项文本保持左右边距，最多展示一行，超出截断，菜单项宽度变化时，文本展示区域跟随菜单宽度自适应
- Hover 状态，菜单项展示相关操作时，文本展示区域与操作按钮保持间距，宽度自适应