<!--
title: 分页
id: 7477468164940693507
fullPath: /tools-and-resources/design-specification/component---navigation/pagination
updatedAt: 1742375535000
source: https://open.feishu.cn/document/design-specification/component---navigation/pagination
-->
# 分页
分页用于将内容分为多个页面，可快速定位或者切换页码浏览内容。

  

## 使用原则

- 当需要展示大量信息导致滚动区域过长不方便查看，或加载/渲染所有数据将花费很长时间时使用。
- 如页面中全为列表信息或其他原因不适合用分页，推荐使用懒加载方式。
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/198e391a79b194e45aad135391932c2d_eVxvHy9nXQ.png?height=296&lazyload=true&maxWidth=800&width=2048)

1. **数据总量** : 显示数据总的数量。
1. **翻页** : 点击左翻页，页面数据和页码均回到上一页。点击右翻页，页面数据和页码均回到下一页。
1. **页码区** : 当前页面所在页码高亮显示，点击页码切换页码数据。
1. **每页展示数量设置区** : 设置每页展示数据量，一般常见的有 10 条/页、20 条/页、50 条/页、100 条/页，可根据实际场景配置。
1. **快速跳转区（可选）** : 用户可输入页码数字，快速跳转页面。
  
  

## 控件类型

### 类型总览

分页主要分为两种类型：普通分页、小型分页。

普通分页建议用于页面级页码切换。小型分页建议用于弹窗换页或需要轻量显示的区域。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68e7e1b09207348610f060135db49e9e_t3OVV7lFMB.png?height=392&lazyload=true&maxWidth=800&width=2048)
  

### 普通分页

#### 使用场景

用于页面级页码切换，如页面级表格。页码建议放在表格右下方，和表格右对齐。场景示例如下

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cf91dc6075ead5c56f2e715cd14635a0_jvXIZJNhjK.png?height=1168&lazyload=true&maxWidth=800&width=2048)


#### 通用规则样式

**尺寸说明**

**翻页尺寸**：固定为 28*28px

**数字页码**：最小尺寸 28*28px，内部左右间距 4px。页码数字超出 3 位数自适应处理

**快捷设置区**：每页显示条目数可按照需求进行配置，建议搭配组合为 10/20/30/40 或 10/20/50/100 条/页，可根据实际场景自由搭配

**跳转至 xx 页面**：最小宽度为 48px，内部左右间距 8px，内容自适应

**翻页、更多、下拉图标大小** 均为 16*16px

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a84008d9b1d146025446b32d75d1366_q2G6gHgyPf.png?height=712&lazyload=true&maxWidth=800&width=2048)

<br>
**交互说明**

**页码基础交互**

页码只有 1 页时，正常显示页码，并且跳转页码功能禁用

页码最大值，显示最后 1 个页码+更多。页码位数过多，页码框按照自适应规则

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/73e7b41e5e42c00824f51dab6380c168_g95Dy4PFSj.png?height=600&lazyload=true&maxWidth=800&width=2880)

**翻页交互说明**

- hover「…」icon，对应 icon 变为跳转 icon

- 点击跳转 icon，会跳至「当前选中页码 + 5」的页数，如当前页码在第 1 页，点击后面「...」，即跳转至第 6 页

- 页码数量过多，默认展示前 5 页+「…」icon+最后一页

- 点击「…」 icon 前面一页，则该页前后两页均显示出来，第 1 页和最后一页始终保留，如点击第 5 页，页码则切换成「第 1 页+更多 icon+ 第 3、4、5、6、7 页+更多 icon +最后一页」

- 点击最后一页，展示出最后一页前四页

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6dcef2b798b513004e2328e5f07b713_5empgVziDC.png?height=1138&lazyload=true&maxWidth=800&width=2880)

<br>
**页码快速跳转区交互**

- 页码快速跳转框遵循输入框交互规则

- 如输入值超过最大页数，则直接跳转到最后一页，清空输入框数字

- 如输入值为 0 ，则跳转至第一页

- 输入数字后，回车即可触发跳转，并且页码切换到输入的页码数

- 输入数字后，切换页码，则清空输入的数字

- 输入数字之后，单击页面空白处结束操作，会保留数字

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eede83df6bdc736c1406c3d0db30b4c7_SL0llZ5HcX.png?height=656&lazyload=true&maxWidth=800&width=2880)
  

### 小型分页

#### 使用场景

用于小模块性场景，如卡片、弹窗内等等，且页码数量较少场景。场景示例如下

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d73da3eb9c336cdbf2500bf114f4743a_VqG7UZiaiU.png?height=2536&lazyload=true&maxWidth=800&width=4096)


#### 通用规则样式

**尺寸说明**

- 翻页尺寸：固定为 24*24px

- 数字页码：最小尺寸 24*24px，内部左右间距 2px。页码数字自适应处理

- 页码之间间距为 4px

- 翻页和更多图标大小为 16*16px

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bc42c9c5ef31072b4f4793adfa68ae4b_hABIkX8gmv.png?height=384&lazyload=true&maxWidth=800&width=2048)

<br>
**交互说明**

**页码基础交互**

- 页码只有 1 页时，也显示页码，并且跳转页码功能禁用

- 页码最大值，显示 5 个页码+更多+最后一页

- 页码位数过多，按照自适应规则

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8e82cffd0469fcb5212c2679677c5a1a_1xPTONIZ0f.png?height=496&lazyload=true&maxWidth=800&width=2048)

<br>
**翻页交互说明**

- 点击跳转 icon，会跳至「当前选中页码 + 5」的页数，如当前页码在第 1 页，点击后面「...」，即跳转至第 6 页

- 页码数量过多，默认展示前 5 页+「…」icon+最后一页

- 点击「…」 icon 前面一页，则该页前后两页均显示出来，第 1 页和最后一页始终保留，如点击第 5 页，页码则切换成「第 1 页+更多 icon+ 第 3、4、5、6、7 页+更多 icon +最后一页」

- 点击最后一页，展示出最后一页前四页

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a8a5a29644274a043be85385b6581d8d_lXyAPPnF83.png?height=1040&lazyload=true&maxWidth=800&width=2880)
  