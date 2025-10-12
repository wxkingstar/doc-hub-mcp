<!--
title: 卡片
id: 7477479883707187201
fullPath: /tools-and-resources/design-specification/component---data-display/card
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/card
-->
# 卡片
用于组织信息及操作的容器，通常也作为详细信息的入口。


## 使用规则

何时使用：需要组织信息、划分内容模块时，建议使用卡片将同维度信息聚合，使用户更易于扫描和获取关键信息。


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
      <md-th style="width: 15%;">优/缺点</md-th>
      <md-th style="width: 85%;">说明</md-th>
    </md-tr>
     <md-tr>
      <md-td>**优点**</md-td>
      <md-td>
- 卡片本质是为了更好的聚合同类信息，在划分不同维度内容的同时，保持界面统一性。
- 通过投影、背景等，让卡片与页面之间产生视觉空间感，区分层级。
- 相较于扁平的信息展现方式，卡片式的交互感知更强。</md-td>
    </md-tr>
    <md-tr>
      <md-td>**缺点**</md-td>
      <md-td>-   盲目使用卡片设计，会使得阅读低效和屏幕空间浪费。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f866822e59ebd172fa4349aa2c1ec3f_25VqT7c2fd.png?height=800&lazyload=true&width=2048)

1. **卡片容器（必选）** 承载内容的容器，其大小取决于内容元素所需要的空间。
1. **卡片样式（可选）** 卡片的背景、圆角、描边、投影。
1. **卡片内容（可选）** 卡片承载的文本、图片、分割线、按钮、其他组件。
  
  

## 通用样式说明

### 背景

- 卡片背景色与页面背景色需要有足够的对比度，使它们在视觉上能够彼此分离；也可通过投影增加空间感，或使用描边分隔。

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b9384b42109f1bd213030c439fc2bb34_Gi9nThgclO.png?height=644&lazyload=true&width=500)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e82d3f986fa40fd8afb903c61bd4fa90_2wKAqLjnLJ.png?height=644&lazyload=true&width=500)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>与背景色有足够对比度、通过投影增加空间层级感</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>卡片色与背景色不宜太过接近、没有投影缩减了空间层级感，与背景融为一体。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 圆角

通常而言卡片占据越面积越大，使用越大的圆角，来保持整体视觉的平衡与一致；圆角的选择需符合传达的风格调性。在同一界面中建议不要使用超过 2 种圆角类型。
    
    
### 投影
:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr style="vertical-align:top;">
      <md-th style="width: 10%;">投影类型</md-th>
      <md-th style="width: 18%;">常用场景</md-th>
      <md-th style="width: 18%;">建议样式</md-th>
      <md-th style="width: 24%;">投影类型</md-th>
      <md-th style="width: 26%;">场景示例</md-th>
    </md-tr>
     <md-tr style="vertical-align:top;">
      <md-td>无投影</md-td>
      <md-td>多个小卡片或嵌套卡片使用场景</md-td>
      <md-td>通过描边、背景划分层级</md-td>
      <md-td>/</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d40f54bcfa5305c0d0f4c6b8a90b2dcd_r4oXJSHVNV.png?height=826&lazyload=true&width=1280)</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>小投影</md-td>
      <md-td>应用卡片、功能入口、消息提示等</md-td>
      <md-td>投影</md-td>
      <md-td>Shadow-S-down（S1）<br>
Shadow-M-down（S2）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b983ae2f6cd84843ee72ce1641782402_SEi6We5AqF.png?height=801&lazyload=true&width=1280)
      
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe41fc346afb2e00338922f9ec50e1e1_lqQxIx1KwI.png?height=693&lazyload=true&width=1280)</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>大投影</md-td>
      <md-td>Bannner、邀请卡片等大面积卡片</md-td>
      <md-td>投影</md-td>
      <md-td>Shadow-L-down（S3）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a9d053a2026dcece4a25a5767f23387_pNLz2nwHsr.png?height=801&lazyload=true&width=1280)
      
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52ff7eacce4e97d374224996e586da30_6JRzCR1EjM.png?height=549&lazyload=true&width=486)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 描边

- 描边通常用于协调界面层级关系、同高程的信息模块划分，描边也可以辅助投影强化区分效果
- 描边参数：color - N300；border - 1px（inside 内描边）
  

### 使用示例

针对不同的页面背景，列举了以下几种建议的卡片样式，具体使用请根据实际场景选择：



|                    | **页面背景色 N00**                                                                                                                                                                                                                                              | **页面背景色 N100**                                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **卡片背景 N00**       | （不推荐）                                                                                                                                                                                                                                                      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/33bfdac46f6d9f5c68d2155c04c02443_DCED6Rr5hW.png?height=656&lazyload=true&width=808) |
| **卡片背景 N100**      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/15ac1e6f38462e4d8a32444447c7ac2f_AJ0Y0gdfGZ.png?height=656&lazyload=true&width=808) | （不推荐）                                                                                                                                                                                                                                                      |
| **描边+卡片背景 N00**    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/883183624ce074528216392ec5fa3c5f_nkx9P5J4Yg.png?height=656&lazyload=true&width=808) | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5045907df7ed3d184fc24f03506c9ede_xGznOwy4n7.png?height=656&lazyload=true&width=808) |
| **投影+卡片背景 N00**    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/be0551d242d55a78835ea3f4c539c933_LKuIFuxBj9.png?height=808&lazyload=true&width=808) | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/43dfbbb68f4467ebc18e226a473ba58d_XI1u81Sluk.png?height=808&lazyload=true&width=808) |
| **描边+卡片背景 N00+投影** | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3130af110ce75e6d9f125f34563f4db3_uT8piu3aKf.png?height=808&lazyload=true&width=808) | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fc8a23a94fda8e5ff48931c872537d27_GCdKxzuMuH.png?height=808&lazyload=true&width=808) |
  
  

## 内容说明

### 信息可配置

- 卡片中的信息支持文本、图标、图片等多种格式，具体使用情况可配置。
- 文本通常包含标题、正文、辅助信息等，支持加粗、斜体、数字、emoji 等。
    - 标题建议字号：16/14px - Medium，N900，尽量单行，完整展示
    - 正文建议字号：14px - Regular，N900，尽量完整展示
    - 辅助文本建议字号：12/14px - Regular， N600
- 对于信息的层级，标题通常在卡片的顶部，并利用排版来强调重要内容。
- 内容区可按场景进行自定义配置
- 常见组合：图片/icon/头像 + 文字等。


:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>组成要素</md-td>
     <md-td>示例</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe1fd9cefd650f5fd8c8ed673e221288_51K0ALMu5Z.png?height=240&lazyload=true&width=500)<br>1.自定义标题<br>2.自定义内容</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f3d75c05004182b8b5c7a898e717fd8d_XoS3olmjjT.png?height=693&lazyload=true&width=1024)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

### 操作可配置

- 卡片的操作区域通常包括：卡片整体、按钮；卡片是屏幕上比较大型的触控区域。
- 操作项（文字、图标、主次要按钮）通常在卡片的底部或右侧。


:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>组成要素</md-td>
     <md-td>示例</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4b8703c984b41b9216703a852831fbe5_NnoVrS7muu.png?height=205&lazyload=true&width=500)<br>自定义区域</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3579c65f77618b78cca50cf73779a557_jiOLIMeUcy.png?height=858&lazyload=true&width=2052)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

### 其它组件

卡片内容中还支持加入通用 UI 组件，如：列表、时间轴、步骤条、多选复选框、标签、头像等。
内容滚动：高于卡片高度的内容会被截断，但可支持在卡片内滚动浏览。

:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>组成要素</md-td>
     <md-td>示例</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0134651443a4c5d2bf82a318a993f56a_3LFE0Bsdhy.png?height=205&lazyload=true&width=500)<br>自定义区域</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7db7a85a0b010851f3cb5ae75a4f471d_qXI4ZteHqZ.png?height=600&lazyload=true&width=500)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

### 间距说明

间距整体遵循 4N 原则，元素（组件）关系越亲密，间距越小，同层级的元素（组件）间距保持一致；通用组件则遵循对应规范，这里不再赘述。

- 标题与内容的间距为 12 px
- 单个内容模块中不同元素组的间距建议为 8 px-16px；常见组合：图片/icon/头像 + 文字等；遵循4N原则可按场景进行自定义配置
- 对齐方式：文本左对齐，图片、操作右对齐；文本与图片及操作的最小间距为 12px
- 卡片整体内容与卡片容器，上下左右的边距建议为 12 px


:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
     <md-td>间距说明</md-td>
     <md-td>示例</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe1fd9cefd650f5fd8c8ed673e221288_bgQnfaH7mk.png?height=240&lazyload=true&width=500)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/33387b314c21d622345b3e658cf97b85_PBYb2jGJym.png?height=281&lazyload=true&width=1024)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

- 卡片与卡片的间距：带投影的卡片之间建议为 16px，不带投影的卡片之间建议为 12px

### 交互说明

拖拽手势允许用户移动卡片并重新排序。如飞书应用中心将新增的应用设置功能，拾取应用卡片，并拖拽到相应位置，调整应用展示的顺序。

提示：移动卡片时，请增加此卡片高度，并且不应该碰撞或移动其他卡片。拖起时，透明度为95%，同时阴影为Shadow-L-down 加重选择视觉效果。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ac27266703ab3019cecb641620dea60c_rMXRpfjz9O.png?height=630&lazyload=true&maxWidth=800&width=1146)


:::html
<md-table>
  <md-tbody>
    <md-tr>
      <md-th style="width: 19%;"></md-th>
      <md-th style="width: 27%;">Normal</md-th>
      <md-th style="width: 27%;">Hover& Pressed</md-th>
      <md-th style="width: 27%;">拖拽态</md-th>
    </md-tr>
    <md-tr style="vertical-align:top;">
     <md-td>**Normal普遍状态**</md-td>
     <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e44fbc463d8cbb977c585a24c8753c9_YallZOtyAd.png?height=292&lazyload=true&width=626)
      <br>Border N300</md-td>
     <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e44fbc463d8cbb977c585a24c8753c9_4zilNoMTTK.png?height=292&lazyload=true&width=626)
      <br>Border N300，Shadow-M-down</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0cc7a3f525206cc0f9386af17e79aafd_4LkAx6qlqD.png?height=520&lazyload=true&width=1324)
      <br>背景N00, 透明度95%， Border N300，Shadow-L-down</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
     <md-td>
- **Normal**
- **特殊状态**
- **有投影时**</md-td>
     <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3197c63ef8764dab52a35d00717dc8e8_Uybny8GLuo.png?height=227&lazyload=true&width=561)
      <br>Border N300，Shadow-S-down </md-td>
     <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce160fd9a7c3f9f8d8ccf2d483b5ef60_lvEAgTdXWx.png?height=241&lazyload=true&width=556)
      <br>Border N300，Shadow- L-down </md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0cc7a3f525206cc0f9386af17e79aafd_VkSBNprMIO.png?height=520&lazyload=true&width=1324)
      <br>背景N00, 透明度95%， Border N300，
Shadow-L-down</md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
     <md-td>
- **Normal**
- **特殊状态**
- **无投影时**
       （在无投影时，可使用蓝色外框进行和背景的区分，通常用于适用于多个卡片并排情况，加重选择状态）</md-td>
     <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/23480c0da4f7e4708ee027cbd7b7cb0f_0ThkL8LTkk.png?height=229&lazyload=true&width=530)
      <br>Border N300</md-td>
     <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae78f969cda3785c36a75692266b3721_ilC5tgJCdY.png?height=240&lazyload=true&width=548)
      <br>Border B500</md-td>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/db49421a1cea984dea96becf277a0a6e_UqzUeqUibn.png?height=430&lazyload=true&width=1122)
      <br>背景N00, 透明度95%， Border B500，
Shadow-L-down</md-td>
    </md-tr>
    
  </md-tbody>
</md-table>
:::
