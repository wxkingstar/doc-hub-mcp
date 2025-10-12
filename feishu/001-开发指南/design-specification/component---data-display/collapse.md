<!--
title: 折叠面板
id: 7477479883707351041
fullPath: /tools-and-resources/design-specification/component---data-display/collapse
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/collapse
-->
# 折叠面板
折叠面板用于折叠或展开相关内容。


## 使用规则

何时使用：当信息展示的区域有限，且部分内容可隐藏时，可通过折叠面板收纳内容区域。


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
<md-table style="width: 600px;">
  <md-tbody>
     <md-tr>
      <md-th style="width: 10%;">优/缺点</md-th>
      <md-th style="width: 70%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>优点</md-td>
      <md-td>渐进展开信息的显示方式，使用户专注于关键信息的同时有效节省页面可视面积</md-td>
    </md-tr>
    <md-tr>
      <md-td>缺点</md-td>
      <md-td>增加交互成本。容易被用户忽略隐藏内容</md-td>
    </md-tr>
    <md-tr>
      <md-td>建议</md-td>
      <md-td>对于空间有限或内容复杂的场景，例如表单、信息详情等，可考虑使用折叠面板</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb04053a8171e26d82740acded748811_twEb3GJZ4H.png?height=778&lazyload=true&maxWidth=800&width=2048)

1. **标题信息**：被折叠内容的主要信息
1. **折叠状态**：通常用「箭头」图标表示折叠或展开状态
1. **展开面板**：展开后的详情内容
1. **分割线（可选）：** 根据场景配置
1. **背景（可选）：** 根据场景配置
  
  

## 控件类型

### 类型总览


:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 10%;">触发方式</md-th>
      <md-th>箭头触发 (通用组件)</md-th>
      <md-th>文字触发</md-th>
      <md-th>图标触发</md-th>
      <md-th>热区触发</md-th>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>**场景示意**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f240cf3d3830512f5a601c1a50e02d86_l97EBrNj4G.png?height=1080&lazyload=true&width=834)</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c97b69fd90373d173d9872ca634f8f3b_hoUSUawlBm.png?height=1080&lazyload=true&width=834)</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8d08d2f32dfe740cc35df5ee58111760_eaD5gnMupT.png?height=1736&lazyload=true&width=974)</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/71c0f5b49a83fd6ebaf446185afbc1c0_UsifnvgIfh.png?height=994&lazyload=true&width=1260)</md-td>
    </md-tr>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>**类型说明**</md-td>
      <md-td>
- 提供 2 种箭头样式（线性&面性）
- 常用于卡片、表单、列表等内容数据复杂区域
  </md-td>
      <md-td>
对于大段落文本或内容模块支持【展开/收起】，以便于页面空间利用与内容最大化展示。</md-td>
      <md-td>
- 将可折叠组件与按钮结合使用，为按钮配置折叠能力。</md-td>
    <md-td>
- 不借助图标或按钮，通过定义区域热区触发折叠
- 热区的定义可自定，不作统一限制
- 需要符合用户既有且普遍认知，不作为推荐使用</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 折叠面板（组件）

#### 线性箭头折叠

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/65538fe7e9b54b941fd92c7bffff70f5_NP35PIKDyA.png?height=864&lazyload=true&maxWidth=800&width=2048)

**位置说明：** 通常位于容器右侧，边距需遵循所在模块的整体布局与对齐方式。

**状态说明：** 箭头向上表示内容展开，箭头向下表示内容折叠。有加载态、禁用态。

**图标说明：** 建议尺寸 16*16px。颜色默认为 N600。

**文本说明：** 标题行字体不做限制，支持自定义内容。



#### 面性箭头折叠

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/965fb4aafc909689febd7066edc9ef79_ZK5kKWHT0T.png?height=864&lazyload=true&maxWidth=800&width=2048)

**位置说明：** 通常位于标题左侧，默认间距为 8px 。位于表单、列表中时需遵循相关组件规范。

**状态说明：** 箭头向下表示内容展开，箭头向右表示内容折叠，有加载态、禁用态。

**图标说明：** 建议尺寸 10*10px。颜色默认为 N600。

**文本说明：** 标题行字体不做限制，支持自定义内容。


#### 使用示例

根据具体场景灵活选择箭头类型。通常在表格、表单、列表等内容较复杂场景中，建议使用面形箭头。当标题旁有其他元素，或面性箭头不适用场景时，建议使用线性箭头。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f594315b0ee22fbc3747a4f9472ddb6_XKnYuLkfat.png?height=1696&lazyload=true&maxWidth=800&width=2392)
  


### 通用样式规则

#### 样式说明

根据具体场景，可附带分割线（1px-N900*15%）、背景（N100），帮助更清晰地分组划分。
折叠面板的高度一般遵循所有组件的规则（如表格、列表）。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c490d7fa7fb6c11d2c68b88548f3e493_IRIeFrWLhg.png?height=946&lazyload=true&maxWidth=800&width=2048)

#### 内容说明

**展开内容**：支持多种格式（如文本段落、表格、图片等），当内容及形式较复杂时，可通过加 N50 灰底背景承载信息，以保证信息清晰度和界面美观度。

**对齐方式**：建议与标题或箭头保持左对齐。


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/56d92e07c299f1c806f49f9af603455a_5nkTqTljm1.png?height=1380&lazyload=true&width=800)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/79a84c5f7ba9edf0b19c130cb4e8b762_IE4Cu4x2sz.png?height=2722&lazyload=true&width=1600)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>展开内容与头部标题左对齐</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**避免：** <br>与箭头左对齐，优先遵循界面整体的布局与对齐方式</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 交互说明

图标热区需遵循图标按钮组件的状态。
在表格或列表中，通常为整行热区，具体状态遵循相应的组件规范。
当图标位于文本旁，且无更多操作时，建议设置整行或区域热区。

:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
      <md-th style="width: 40%;">说明</md-th>
      <md-th style="width: 60%;">图示</md-th>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>图标热区<br>Hover-N900*10%<br>Pressed-N900*20%</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/978623d4c32af7aaad1d3963844487f3_jjVcOCX45Z.png?height=464&lazyload=true&width=2048)</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>整行热区（依据实际场景定义状态）<br>
- hover - N900*8%（常用于嵌套表格）
- select - B500*8%（常用于嵌套表格）
- 折叠面板无背景时，hover 至整行热区时仅鼠标变为手指<br>Hover-N900*10%<br>Pressed-N900*20%</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/788f0d3c606bc2e58fc12c4a7a0fcd17_FrJdQYi2Q7.png?height=668&lazyload=true&width=2048)</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>区域热区Hover 至区域热区时鼠标变为手指，热区尺寸可自定义</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3aa8ce92f4092e4bb9c52e5bd118796_PElw1TC0ER.png?height=300&lazyload=true&width=2048)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



**动态展示与相关参数**


:::html
<md-table style="width: 600px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/40ad007093b17af172b245793dc7311f_BXxAQMDUNu.gif?height=652&lazyload=true&width=476)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1de2112f2e263e282a9aacb5c120d45d_vQ2Cd61tCv.gif?height=612&lazyload=true&width=460)</md-td>
    </md-tr>
    <md-tr>
      <md-td>右侧箭头</md-td>
      <md-td>左侧箭头</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 嵌套说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/56e8f757ae894e80691d1e94356107ea_8XzuR3mlyT.png?height=482&lazyload=true&maxWidth=800&width=2048)

当折叠面板需要层级嵌套时，建议使用面性箭头折叠（子级图标与父级文本对齐）。不建议使用多级嵌套，这样会造成内容层级过于复杂。
  

### 特殊规则说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/78fcdc22d7fc9a9188b2f76fdd7c20d5_AsDNO3uoaW.png?height=794&lazyload=true&maxWidth=800&width=2048)

**基础**：默认可以同时展开多个内容区域。

**手风琴**：只允许单个内容区域展开。当需要用户聚焦于一个关键信息的详情时，可采用手风琴折叠面板（仅展开当前选择项，同时将已展开项收起）。
  

### 折叠

对于大段落文本或内容模块支持【展开/收起】，以便于页面空间利用与内容最大化展示。

#### 样式一

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/addba3d292352c5d7722fabeddd3b8a3_t4BxfGjXzt.png?height=866&lazyload=true&maxWidth=800&width=2048)

**使用场景：** 

用于大段落文本的折叠场景，具体折叠行数可自定。通常建议 3 或 5 行。
  

**位置说明：**

文本折叠时【展开+ 箭头】支持位于文本容器右下方和左下方。文本展开时【收起+ 箭头】单独一行，与文本容器间距 4px。（通常是多端文字收起展开时，触发项放左下方）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eca3c30c679239a08b14316ea266b3fa_4wMuNVRTZc.png?height=1532&lazyload=true&maxWidth=800&width=2048)
  

**样式说明：**

支持文字字号 14px 和 12px 两种正文/辅助文本，图标大小也对应改变尺寸。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/77f6f59dfb37f30234f1681b03910482_KLDzx4xQ5i.png?height=568&lazyload=true&width=2048)

**交互说明：**

默认支持 Default、Hover、Pressed、Focus 四种状态。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0e42f70410c279cbd32f05aa7925be13_ZxdyiAkdmm.png?height=958&lazyload=true&width=2048)

**其他说明：**

文案默认用【展开/收起】。默认支持【收起】能力，可根据实际场景判断是否提供该能力。