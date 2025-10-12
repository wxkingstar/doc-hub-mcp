<!--
title: 标签
id: 7477479883707252737
fullPath: /tools-and-resources/design-specification/component---data-display/tag
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/tag
-->
# 标签

标签是对人物、事项进行分类、标记的元素组件，用于标记内容的属性、维度或状态。


## 使用规则

使用简洁的语言，尽量避免晦涩难懂的词汇，保证易读性。
  

## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ee139f7b023dd87ac38b7f3ee173d620_65hoYvU9X2.png?height=173&lazyload=true&width=1026)

1. **文本：** 用于描述标记内容的属性、维度或状态
1. **容器背景：** 用于承载这个标签的容器背景
1. **可交互图标：** 用于引导简单交互，例如删除标签
1. **状态图标：** 用于表示当前状态的展示图标
1. **头像：** 用于展示被标记人员对象
  
  

## 组件类型

### 类型总览

类型分为属性标签，状态标签，选项标签，头像标签。各标签类型如下图所示

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6cebeb63a732821ace212f890b9bd620_eDlrrw12Ih.png?height=242&lazyload=true&width=1024)
  

### 属性标签

#### 使用方式

属性标签用于描述事物、提供辅助信息，以帮助用户快速的识别。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/755985c40f5556028299ecdfdf699c99_tHpLi5kCAH.png?height=261&lazyload=true&width=1026)

#### 注意事项

- 标签会增加视觉噪音，当界面元素较多时，请有节制的使用
- 标签颜色意义可根据需求自由拟定
- 标签可以单个或成组使用

标签中icon，文字，关闭按钮都是可选配项（不可仅配置关闭按钮）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcfc563360343f397b622db3df49af5a_3Nn0IOU0PM.png?height=96&lazyload=true&width=1024)

#### 颜色配置

默认根据色板提供 13 种标签配色。标签颜色所代表的具体含义根据需求拟定

特殊标签颜色不做定义。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cc5d0a8db91c59818c372d0796918834_v7PeJT5RlU.png?height=403&lazyload=true&width=1024)

#### 透明度配置

每一种颜色可配置透明和不透明的标签底色。常规情况下使用带有透明度的底色。在背景为非常规界面的情况下（如非 bg，hover等常规背景）可以使用不透明的标签底色。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3815bfd7a4317e2ffd139bc838a0f4e0_L4u0leo7HR.png?height=191&lazyload=true&width=1024)

#### 标签状态

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b713f60e6bb1a48dc70b3b3099a5bc1f_5CSPFQR8Z7.png?height=153&lazyload=true&width=1024)

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
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c3ab994191b239953da6e8ef398ed079_F65FBtZlAr.png?height=261&lazyload=true&width=502) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/383a0a5b06c8de5e1fde7c3e67c8582c_aU9K8gZPtd.png?height=261&lazyload=true&width=502)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>用于描述部门性质</md-td>
      <md-td><br>**避免：** <br>当标签代表物件本身时应该使用选项标签</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a583cca877853d64a942b4de8d0fcd17_d7xfybtP0Z.png?height=261&lazyload=true&width=502)</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3435da874b7a2d47ad9b20b68358b4f_ohLVKdhwoM.png?height=261&lazyload=true&width=502)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>不透明背景色标签用于非常规界面背景下</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>不透明色标签不能用于常规背景下，颜色效果不佳</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 位置说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/74a5ca98aea793f5212f80b7f9f325df_b9xtZu9d4T.png?height=261&lazyload=true&width=1026)
  

### 选项标签

#### 使用方式

选项标签用于表示事物本身。标签颜色对比度较高，饱和度较低，不建议在系统层面建立标签颜色意义（如警示，正面，负面）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6bf884d50180ed07384de2b27c526930_k0g0FILGlp.png?height=113&lazyload=true&width=1026)

#### 样式配置

提供 4 种尺寸。
标签中 icon，文字，关闭按钮都是可选配项（不可仅配置关闭按钮）。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cf67134cfd9a2140909ef601a990d525_LUdWNGblsZ.png?height=395&lazyload=true&width=1024)

#### 状态说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1df0a2dc208ca01a0b6506335446dc93_eyfWH49lIb.png?height=602&lazyload=true&width=1024)

#### 颜色配置

默认根据色板提供 12 种标签配色。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20dbc78988704cafc2179166825d2c8d_pJGh9a5FFn.png?height=397&lazyload=true&width=995)

#### 标签状态

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b713f60e6bb1a48dc70b3b3099a5bc1f_5MxqGpSfpv.png?height=153&lazyload=true&width=1024)

#### 使用示例


:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/383a0a5b06c8de5e1fde7c3e67c8582c_f2p99p4Xoh.png?height=261&lazyload=true&width=502)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c3ab994191b239953da6e8ef398ed079_PiPNH1vEBE.png?height=261&lazyload=true&width=502)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>用于表示物件本身</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>与属性标签混合使用</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 位置说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8aac909ce8b49ce7d83d737705993c2c_IB8Csai0ym.png?height=933&lazyload=true&maxWidth=600&width=1026)
  

### 状态标签

#### 使用场景

常用于展示事件的进度或发展状态，常用场景：列表、详情、流程、表单。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68882e865e92699ea9418b822c37bc88_TSxyPgmO7h.png?height=1120&lazyload=true&maxWidth=600&width=1026)

#### 颜色配置

**强状态与弱状态：**

具体色值提供了 6 种颜色，颜色与语义相关联，可根据具体场景选择使用。

<br>
**彩色标签：** （同属性标签保持一致）
矩形类标签提供了 12 种颜色，1 种特殊颜色，颜色与语义相关联，可根据具体场景选择使用。

<br>
**颜色：**

- 蓝色标签：过程中的状态，如：进行中、审批中。

- 绿色标签：正向状态，如：通过、成功、已完成。

- 红色标签：需要重点注意或具有临时性的状态，如：失败、错误、已驳回、勿扰、请假。

- 橙色标签：待操作的状态，如：待处理、待启用。

- 灰色标签：负向状态，如：未开始、未启用、未注册、未读、取消。

- 其他颜色标签：区分上述标签或自定义标签选择使用。


#### 缺省规则

尽可能保持内容完整。若标签的展示空间有限，请根据实际场景，针对标签内容进行省略。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cb02abd2bad634462c01353e3ac5b30b_kV4JzuRcu1.png?height=255&lazyload=true&width=1027)

#### 文本说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b01ec9c2866927074e8ffe2c17f983e2_c9Ht9U9pT4.png?height=285&lazyload=true&width=1024)

#### 位置说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1d7d4578e08010d4da12dc4cdcfa99e9_YaQxwCjDWV.png?height=458&lazyload=true&width=1024)
  

### 头像标签

#### 使用场景

常用于展示人员姓名、照片。常用场景：表单、选择器。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2f439361e91e637203e1dbc6c691518f_4GREhQhyTP.png?height=1054&lazyload=true&width=2994)
  

#### 尺寸说明

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55de707e75801cc4060597c661e14f3d_QYgCShTmMl.png?height=139&lazyload=true&width=1024)

#### 状态说明

头像标签分为「普通头像标签」和「带移除操作的头像标签」两类。
带移除操作的头像标签有 2 个热区，有不同的悬浮态和点击态，禁用态

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f7c03d6c00956f851be20b33c7aeea6_E3F39kkn05.png?height=268&lazyload=true&width=1024)

#### 颜色配置

- 头像标签建议使用灰色或者浅蓝色，可根据需求选择底色。
- 普通/悬浮/点击状态： 清除 [ X ] 和底色 token 呈对应关系。
- 当使用非照片作为头像时，Icon的颜色应与底色呈对应关系。
- 灰色标签的应用和彩色标签不同，如需增加不同底色标签需遵照彩色标签规则，如下图所示：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/158d1b4dd876d5e2d74f6d87b78b7c35_u8ydIHyHx2.png?height=451&lazyload=true&width=1024)

#### 缺省规则

仅用于描述姓名，单行展示内容，尽可能保持内容完整。
若标签的展示空间有限，请根据实际场景，针对标签内容进行省略。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/69511c18b6e7b4678449c503b5d6347a_74yZpXOk4f.png?height=106&lazyload=true&width=1024)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d0b6e4f26b99c789240fddaaabe2d4b_vts6qAYM5P.png?height=461&lazyload=true&width=1024)
  

#### 位置说明

水平位置：建议标签与其左右相邻的元素保持 8px 的间距。

垂直位置：当标签多行展示时，标签行间距为 8px 的间距。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1784b7292f5a6a0705469ded0c914c71_yu1VVhDbGi.png?height=448&lazyload=true&width=1024)

#### 使用示例

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/62228c7517d893a5004553a57f40e378_V7iQJpEcNX.png?height=148&lazyload=true&width=500)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52a874dab44a6c5ab8072326fb35ea1b_IBYnfWkoKC.png?height=144&lazyload=true&width=500)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**正确：** <br>用符号「-」表层级关系，用「（）」表说明关系</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>用错误的符号分割，Tag中嵌套Tag</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
