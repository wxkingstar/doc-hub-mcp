<!--
title: 面包屑
id: 7477468164940677123
fullPath: /tools-and-resources/design-specification/component---navigation/breadcrumb
updatedAt: 1742375535000
source: https://open.feishu.cn/document/design-specification/component---navigation/breadcrumb
-->
# 面包屑
显示当前页面在系统层级结构中的位置，并能向上返回。

**应用与页面的场景**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dfd27d900a95bbfbcf80608f43a5ace3_BRXC6XQYjS.png?height=1062&lazyload=true&maxWidth=800&width=2048)

<br>
**应用于穿梭框的场景**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8e8d4656af6c91547007654e7dd512e_LA4ILJ4FkZ.png?height=1076&lazyload=true&maxWidth=800&width=2048)
  



  

## 使用规则

- 当系统拥有超过两级以上的层级结构时

- 当需要告知用户『当前所处位置』时

- 当需要向上导航的功能时
  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6369ceef235de968f3a2456c047f2d3d_USk1bN6oVD.png?height=352&lazyload=true&maxWidth=800&width=2048)

1. **文本：** 用于描述该层级的页面名称
1. **省略符：** 当面包屑长度超出，用于隐藏中间段层级
1. **分割符：** 用于分割并表达层级之间嵌套的关系
1. **背景：** 用于承载被隐藏的层级
  
  

## 控件类型

### 类型总览

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/951049f86081f8b7d83340d833f15238_pxXCrDtIU8.png?height=780&lazyload=true&maxWidth=800&width=2048)

> 图示：应用于页面内的面包屑和穿梭框等场景的面包屑
  

### 属性标签

#### 通用样式规则

**尺寸说明**

面包屑中单个层级文本和分割符的间距为 4px，分割符图标尺寸为 16px。
隐藏段落面包屑的背景与主面包屑间的间距为8px，背景中的面包屑与背景左右间距为12px。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ae735ba1bd9f3b28b206490e51ed4f3_Xd1kg2ldyh.png?height=466&lazyload=true&maxWidth=800&width=2048)

<br>
**状态说明**

具体状态如图所示：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce4faca281fa885cf52850a8c911f70f_gzTbuKzpHT.png?height=466&lazyload=true&maxWidth=800&width=2048)

<br>
**超长处理**

- 当路径超过一定宽度，面包屑会自动折叠并使用省略号表示更多信息。
    - 页面场景下，从易读性出发，面包屑宽度应为正文内容部分的二分之一，超长后进行折叠适配。适配原则为，在固定宽度下，判断超长后，从第二层级（包括第二层级）开始折叠，直至在当前宽度可容纳下所有层级内容。极端场景下优先展示第一层级和最后层级。当一行容纳不下上述极端场景，则可折叠面包屑，直至可展示完整。
    - 在选人组件场景下，面包屑宽度应为容器宽度，超长后进行折叠适配。适配原则同上。
- 层级因长度因素发生折叠隐藏后，鼠标悬停在省略号上，展示被折叠路径。
- 折叠后被隐藏的路径出现超长场景，则可在容器气泡中进行折行适配。
- 单个层级中，以中文为例，宽度为162px（可容纳10个中文字符），超出后省略号多余字符，可通过气泡展示完全字段。

<br>
**超长适配示例：**

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/58ec0791569f25317a440dd5f17bb764_h8QStRjTWl.png?height=426&lazyload=true&width=2048)

**单层级文案超出适配示例：** 

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e36340806ea40c62372de970ff00b9b_UzkSbVxhZA.png?height=426&lazyload=true&width=2048)