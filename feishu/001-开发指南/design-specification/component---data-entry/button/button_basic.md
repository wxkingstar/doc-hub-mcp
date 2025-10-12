<!--
title: 基础按钮
id: 7475195771685502978
fullPath: /tools-and-resources/design-specification/component---data-entry/button/button_basic
updatedAt: 1742375557000
source: https://open.feishu.cn/document/design-specification/component---data-entry/button/button_basic
-->
# 基础按钮
## 组成要素

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d3799a9b701d9c5a7299d03d183b7f24_UfZbNUQwk0.png"
        alt="图片" style="max-width: 600px;">
:::

1. **文本标签** ：动词或短语描述按钮操作的文本，不换行
1. **背景容器** ：用于承载这个按钮的容器背景，容器边框
1. **表意图标（可选）** ：仅当图标含义易识别时才使用图形，增强按钮的识别性。
> “仅图标”类型实际使用较少，通常作为“文字+图标”次要按钮的自适应场景使用，鼠标移过必须有操作提示。
  

## 变体区分
:::html
<md-alert>若要决定使用哪种按钮类型，需考虑操作的**优先级**，以及按钮在场景上下文中应具有何种**视觉重点**，然后结合下方示例来确定选用。</md-alert>
:::
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
从基础按钮在页面场景中的优先级，可以分为以下 5 类变体。
:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 8%;">优先级</md-th>
      <md-th style="width: 27%;">类型</md-th>
      <md-th style="width: 65%;">说明</md-th>
    </md-tr>
    <md-tr>
      <md-td>**最高**</md-td>
      <md-td>**主要按钮** Primary
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/074c027deafff3c2628ff58f53d4e805_shClQzEyE6.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
用于承载主要行动点，模块中优先级最高的操作。通常同一模块不会出现多个主要按钮。<br><br>**常见操作：**<br>
“创建”、“新建”、“保存”、“确定”、“发起会议”</md-td>
    </md-tr>
    <md-tr>
      <md-td>**较高**</md-td>
      <md-td>**主要危险按钮** Primary-Danger
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/08bc6ccbcff8c66d96faab1c05296894_oPIsRIS8au.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
优先级高，系统或模块中最危险操作，通常是删除的二次确认。（不和主要按钮同时出现）<br><br>**常见操作：**<br>
“退出/退出登录”、“删除”</md-td>
    </md-tr>
    <md-tr>
      <md-td>**中**</md-td>
      <md-td>**蓝色** **次要按钮** Secondary-Primary
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/346209a4484500edb571a9df9df27581_LJDQf4djy7.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
具有一定优先级，用于相对突出按钮的操作。<br><br>**常见操作：**<br>
“提交”、“去学习“、“完成”、“发起会议”</md-td>
    </md-tr>
    <md-tr>
      <md-td>**较低**</md-td>
      <md-td>**次要危险按钮** Secondary-Danger
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20f812919a6faaf1443fc609153d4313_MAH9D110Kw.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
通常与主要按钮、次要按钮搭配使用，表示危险操作语义。<br><br>**常见操作：**<br>
“删除”、“拒绝”、“停用”</md-td>
    </md-tr>
    <md-tr>
      <md-td>**最低**</md-td>
      <md-td>**次要按钮** Secondary-Default
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eee8079b5c83f794ca1a87c8fec60268_96TKf1ygzl.png?height=400&lazyload=true&width=840)</md-td>
      <md-td>**目标场景：**<br>
用于非主要操作，没有主次且无需强调的场景，优先级低于上述按钮。<br><br>**常见操作：**<br>
“取消”、“关闭”、“返回”、“我知道了”、“编辑”</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
  
  

## 最佳实践

### 组件细节说明

#### 尺寸与间距

:::html
<md-table>
  <md-tbody>
     <md-tr>
      <md-th style="width: 20%;">尺寸</md-th>
      <md-th style="width: 80%;">使用场景</md-th>
    </md-tr>
    <md-tr>
      <md-td>**超大按钮 ExtraLarge**<br>高度：48px</md-td>
      <md-td>极少使用，仅在系统大版本升级提示、付费引导弹窗使用</md-td>
    </md-tr>
    <md-tr>
      <md-td>**大按钮 Large**<br>高度：40px</md-td>
      <md-td>通常使用于产品登录注册页面或 VC 视频面板中，信息少、足够聚焦。<br><img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a8c4ce6513201617e75834688eed581c_He8Es0s7KV.png"
        alt="图片" style="max-height: 200px;"> </md-td>
    </md-tr>
    <md-tr>
      <md-td>**中按钮 Medium**<br>高度：32px<br>`最常见尺寸`</md-td>
      <md-td>用于页面 header、弹窗抽屉等面板容器 footer 点位的操作。 （按钮组中）两按钮间距通常为 12 px。<br><img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c9bbb0bf67600f9ae6322ba39bc7f40b_LFWpDmH1If.png"
        alt="图片" style="max-height: 200px;"> </md-td>
    </md-tr>
    <md-tr>
      <md-td>**小按钮 Small**<br>高度：28px</md-td>
      <md-td>常见于列表或与内容内联编辑的操作，例如文档评论“发送”按钮。 （按钮组中）两按钮间距通常为 8px。<br><img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce5873199ea580893f885cd3993a2bc3_dmjdARLzMP.png"
        alt="图片" style="max-height: 200px;"> </md-td>
    </md-tr>
    <md-tr>
      <md-td>**超小按钮 ExtraSmall**<br>高度：24px</md-td>
      <md-td>相对少见，往往是在空间非常有限的场景临时使用，例如妙计编辑内容。 （按钮组中）两按钮间距通常为 8px。<br><img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8fa4e89d6375caf36c4a4e61235bafdb_HbmmHD9R8B.png"
        alt="图片" style="max-height: 200px;"> </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

#### 布局

#### 同一区域仅使用一个主要按钮

在一个页面或模块内建议仅包含一个主要按钮。 主要按钮代表着该区域内最为关键的操作，若在同一区域放置多个主要按钮，会分散用户的注意力，导致用户产生困惑。

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7eef07a4c55c39bdf5643f549da29996_w1dVOETHTQ.png?height=630&lazyload=true&width=1280)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/81d168afb53b896ac6f99994aa3f6749_5udA816ZYk.png?height=630&lazyload=true&width=1280)</md-td>
    </md-tr> 
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_Jpk4z9Z2CA.png?height=20&lazyload=true&width=800)<br>**正确：** <br>
1.  根据重要程度搭配次要按钮使用
1. 无明显优先级场景下，全部使用次级按钮</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_AoTuPG2Fg4.png?height=20&lazyload=true&width=800)<br>**避免：** <br>
多个主要按钮在同一模块/区域，分散用户注意力或对后续操作混淆。                                             </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 在按钮组合应用时，避免蓝色面性、蓝色线性以及灰色线性这三种按钮样式同时出现。

当场景中存在 3 个层级的基础按钮组合使用时，务必使二级和三级层级按钮的层级视觉保持一致，这样能够有效减少样式的繁杂程度，提升页面的视觉美观度。
同时当场景中只有主次两个操作时，使用主要按钮与灰色次要按钮搭配方式视觉效果更佳。

:::html
<md-table style="width: 800px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/713ecb0443fc8a7f38f17a2347cfe2f8_a0GKjxMKUG.png?height=630&lazyload=true&width=1280)<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe47f7fd4a74d9c66f26d5f08076d799_QvqNOkkXuc.png?height=630&lazyload=true&width=1280)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9ee3e0a2d7d0d2f853a29866173ab913_FjmebRxXbK.png?height=630&lazyload=true&width=1280)<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ab5ed4c2234f136a89dbcc0036d174e_ofaFpXTvbo.png?height=630&lazyload=true&width=1280)</md-td>
    </md-tr> 
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_Jpk4z9Z2CA.png?height=20&lazyload=true&width=800)<br>**正确：** <br>
1. 操作只有两个层级，使用主要按钮和灰色次级按钮组合使用，减少样式吸引
1. 非必要情况下，将次级操作层级拍平，避免使用过多按钮样式</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_AoTuPG2Fg4.png?height=20&lazyload=true&width=800)<br>**避免：** <br>
1. 只有两个层级依旧使用主要按钮、蓝色次要按钮组合使用，增加样式吸引
1. 为区分明显层级组合使用三种样式按钮，样式过多                                            </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 通栏或自定义按钮宽度场景（Block Button）

当按钮放置在卡片或对话框等容器中，且按钮需传达核心操作时，使用按钮 Block 属性可以自定义按钮宽度撑满空间（按钮宽度与文案宽度无关）。

:::html
<md-table style="width: 400px;">
  <md-tbody>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e46153f3f776bd4aa58c6f96fb3af6ca_VbAxip1pz6.png?height=630&lazyload=true&width=1280)<br>通栏示例</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  
 

### 内容

#### 图标位置应遵循既定规则

>仅当图标含义易识别时才使用图形，增强按钮的识别性（大部分场景不需要图标）。
- **图标在左：** 用于强调按钮的功能，使用图标增加功能具象表意，辅助用户快速了解当前按钮功能含义
- **图标在右：** Button_Split、Button_Menu 等固定组件用法，将箭头图标放置文字右侧
- **仅图标：** 通常在密集的环境或空间有限时使用仅图标的变体
>（阿拉伯语等从右往左语言文本产品场景例外）

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/825021707a12c768d6e6a89c9b544b37_h3c68LTr8P.png"
        alt="图片" style="max-height: 200px;">
:::

同一组按钮内需考虑是否包含图标元素的一致性。（若部分按钮难以找到适用表意的图标，可以考虑将整组按钮的图标元素全部不显示)
  

#### 使用统一的按钮文案

按钮文案是反映操作结果的最主要的因素，文案尽量保持清晰简短，同类型业务或场景内优先使用统一的操作文案。为减少用户理解与一致，动作文案使用可参考 。

  

#### 使用符合场景的按钮文案

务必选择与按钮样式（语义）相匹配的文案，例如危险警示按钮上严禁使用“确定”“提交”等正向文案。

:::html
<md-table style="width: 800px;">
  <md-tbody>  
     <md-tr style="vertical-align: top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/02b0144de616c1f7a3f7e3dabf6af4b8_ancHHlCY1c.png?height=424&lazyload=true&width=960)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/783b6c7708b2348581a479a67bd059ee_FIlCtCXAfR.png?height=472&lazyload=true&width=1280)<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7601da1844000c11353524de85f98799_p488e3eeVE.png?height=472&lazyload=true&width=1280)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_vd34EO0eQ9.png?height=20&lazyload=true&width=800)<br>**正确：** <br>危险按钮上使用“删除”直接指明操作动作结果。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_CNhTFQAvd7.png?height=20&lazyload=true&width=800)<br>**避免：** <br>危险按钮上使用“确定”等正向/积极文案；非危险按钮上使用“删除”等负向文案。 </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

  

### 特殊场景

#### “成功”语义按钮

除上述“危险按钮”外，部分业务场景中还存在其他语义状态按钮，例如“成功”状态，优先级与“危险按钮”类似，向用户暗示积极正向的操作或状态。


:::html
<md-table style="width: 600px;">
  <md-tbody>
     <md-tr>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 80%;">使用场景</md-th>
    </md-tr>
    <md-tr>
      <md-td>成功 / success</md-td>
      <md-td>加入、接受、通过/成功等正向场景![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/decbee8d1a062706ac1de541c0f9059d_gCCiZ3IC7F.png?height=372&lazyload=true&width=1280)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


  
#### 去除底色的次要按钮

**浅灰色（非纯白）可选隐藏次要按钮底色**
:::html
<md-table>
  <md-tbody>
    <md-tr style="vertical-align:top;">
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c28ec4b3765830349679f6f470e11ca3_tpUYnZyRvE.png?lazyload=true&width=2016&height=1776)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/494d0b1e22ee82f5f34e6aeb0a3d95c9_PyPHkG3gUx.png?height=1210&lazyload=true&width=1846)</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4d77f6959a517e78c59a15c744d470fe_TzalieMvqg.png?lazyload=true&width=988&height=692)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_vd34EO0eQ9.png?height=20&lazyload=true&width=800)<br>**正确：** <br>描边线条和背景色对比明显</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_CNhTFQAvd7.png?height=20&lazyload=true&width=800)<br>**避免：** <br>描边与背景色对比弱，几乎不可见（背景色与按钮描边颜色对比度低于 1.2 请勿使用）</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_CNhTFQAvd7.png?height=20&lazyload=true&width=800)<br>**避免：** <br>堆叠在内容高程上方的按钮，必须使用带底色的按钮，避免透底情况。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

<br>
**代码方法示意：**

```
 <Button style={{ background: 'var(--udtoken-btn-ghost-bg)' }}>default </Button>
```
  

#### 减少同组按钮中样式种类

当多个基础按钮（包含分裂按钮与菜单按钮）被置于同一按钮组内时，为降低多种样式引发的视觉问题，建议按钮样式（包括按钮的图标风格）不要超过两种。若超过 2 种，请勿将其放置在同一类按钮组中。

:::html
<md-table style="width: 800px;">
  <md-tbody>  
     <md-tr style="vertical-align: top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e908487dd5d0c26feccb5c0911a43c6_Is9YvwUqNL.png?height=630&lazyload=true&width=1280)<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/824c3fdb24fb8498ea4896d3a38e93e1_qYcrsI5k3M.png?height=630&lazyload=true&width=1280)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c12ee93db3844b39adaab982bb5799c_MrITz72inQ.png?height=630&lazyload=true&width=1280)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_vd34EO0eQ9.png?height=20&lazyload=true&width=800)<br>**正确：** <br>将第三种样式移出当前按钮组，以其他按钮形式使用保障同类按钮组样式少于 3 种。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_CNhTFQAvd7.png?height=20&lazyload=true&width=800)<br>**避免：** <br>多种样式存在于同一按钮组中，视角样式过多。 </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
