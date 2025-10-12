<!--
title: 滑动输入条
id: 7475195771685650434
fullPath: /tools-and-resources/design-specification/component---data-entry/slider
updatedAt: 1742375641000
source: https://open.feishu.cn/document/design-specification/component---data-entry/slider
-->
# 滑动输入条
在固定的数值范围内通过滑动滑块来设置数值。


## 使用规则

- 适用于模糊数值的输入场景，例如设置音量和亮度、或图像滤镜等。
- 当数值小于四个时，不要使用滑块，可以使用单选按钮来选择数值。
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1489041fe525089e5c2e69ed06304460_lZGjfsHUiE.png?height=696&lazyload=true&maxWidth=600&width=2048)
1. **滑轨：** 滑块滑动范围，滑块经过的部分和未经过的部分需要有明显的视觉区分，可点击来设置数值
1. **滑块：** 用户表示当前所选数值，可拖曳来设置数值
1. **节点：** 常用的数据节点，点击后可快速定位
1. **文字提示**：即时反馈，告知用户当前所处数值
  
  

## 设计说明

用户可通过拖曳滑块或点击滑杆来选择数值。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4beb69cadc15a6fb95779e679af7531b_6P6OejfZLA.png?height=522&lazyload=true&maxWidth=600&width=2048)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9cc491e225b7b596d0224a054c7258db_8gzSzMldcQ.png?height=654&lazyload=true&maxWidth=600&width=2048)
  
  

## 变体

### 双滑块

用于设置范围数值。

**交互说明：**

右侧滑块可被滑到左侧，左侧滑块也可被滑到右侧。
点击滑轨，距离较近的滑块定位到点击处。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/01ee3711a5f71514137a4ca8a14e37f5_QiQzYjBbSy.png?height=464&lazyload=true&maxWidth=600&width=2048)
  

### 竖向滑块

竖向单滑块多用于音量调节场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8604db4e04fd660d29c4627db7d0fc53_MuP6rR4XWB.png?height=480&lazyload=true&maxWidth=600&width=2048)
  

### 带节点的滑块

需要向用户展示关键值的位置时，可选择带节点的滑块。
点击节点或节点文案，滑块直接定位到节点处。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/600cdff12e520485eeceb43de295eac0_nl3s6njl0n.png?height=386&lazyload=true&maxWidth=600&width=2048)
  
  

## 使用场景

**配合输入框使用：**
用于需要输入确切的数值的场景。
滑块位置与输入框重的数值联动：滑动滑块改变数值时，输入框中的数值也需要随之变化。输入框中的数值改变时，滑块也会滑到相应的位置。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3b77994adce0ea4003ed7503ebbe9e97_LgLmeIXiuB.png?height=224&lazyload=true&maxWidth=600&width=2048)

**配合数值或 Icon 使用：**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7eaa5feb09fd181323a69c374f889db3_b7T2gjbMjB.png?height=312&lazyload=true&maxWidth=600&width=2048)