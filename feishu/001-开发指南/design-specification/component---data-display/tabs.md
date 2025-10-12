<!--
title: 标签页
id: 7477479883707105281
fullPath: /tools-and-resources/design-specification/component---data-display/tabs
updatedAt: 1742375642000
source: https://open.feishu.cn/document/design-specification/component---data-display/tabs
-->
# 标签页

标签页是将平级信息做模块化分类处理，并可相互之间快速切换查看的组件。


## 使用规则

- 需要对平级的区域进行收纳和展现时使用
- 需要在相关的内容组之间或是在相同层次结构中导航时使用

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/33d44e64464c261f0e3499f9b8b9aef5_aylLEq21Cn.png?height=491&lazyload=true&width=1024)
  
  

## 组成要素

1. **容器背景：** 用于承载这个按钮的容器背景
1. **标签页标题：** 精简准确的文案（必要时可附带图标），表达此标签页中的内容。需要明确区分选中态和未选中态
1. **选中态指示器（可选）：** 高亮展示当前已选的标签页，有效区分页面模块
1. **分割线（可选）：** 区分标签页与下方内容
1. **徽标（可选）：** 当功能模块更新、信息状态为未读、人员在线协同、信息量变化且无需告知具体数量或性质时，使用点状徽标突出状态，吸引用户注意
1. **翻页按钮（可选）：** ：当页面空间不足时，部分标签会出现溢出容器的情况，通过滑动按钮左右或上下滑动显示剩余标签
1. **新增&关闭按钮（可选）：** 在支持定制标签页的场景下，可以通过新增和关闭按钮进行标签页的删减
  
  

## 控件类型

### 类型总览

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/312a9220d37360ffb5e12b1cd0a180e1_hGYwscREYY.png?height=316&lazyload=true&width=1024)
  

### 一级标签页（线条式）

默认的标签页样式。建议在同一页面中仅使用一组一级页签。

#### 状态

Selected/Normal/Hover/Disabled

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0d6d7d010f67cd53bc61d968792fb05c_Be225A3lW6.png?height=195&lazyload=true&width=1024)

#### 尺寸

按照标签页标题字号，分为三种默认尺寸：**大尺寸 16px**、**中尺寸 14px**、**小尺寸 12px**

可以根据标签页层级进行字号异化。也可以根据标签页个数及标题文案长短进行间距异化，满足 4N 原则即可

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a67428480ea97e06c3c6c84f342a875a_UQzkv98Mog.png?height=638&lazyload=true&width=2048)

#### 热区

热区为标题上侧到选中态指示器下侧，宽度与标题文案同宽。间距不在热区内。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d762d8ebcd2bcc78f586682008047233_u5L85yj2JC.png?height=128&lazyload=true&width=1024)

#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b0ad56c1ea6213c3f13b6a14ba75c3c9_GgrExyDXkO.png?height=1426&lazyload=true&width=4060)

#### 超长处理

若标签页宽度超出容器：
- 设置滚动页签，将剩余页签放在翻页中
- 剩余标签页收入“更多”中，Hover 展开下拉菜单进行选择

**页签滚动**
- 页签交互形式：Icon button点击向后整体翻页,可滑动翻页
- 页签滚动样式：多用于tab-line样式中

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dda222fcfe2b3b57d47979748da37a2e_Sg9Lb92q1L.gif?height=770&lazyload=true&width=1670)

**页签替换**

将【更多】中的选中页签替换到 tab 选项末尾选项。当点击其他任意非末尾选项时，列表的选项重制回到最初。当更多中Tabs的文本较长时，将替换原有标签中对应宽度数量的Tabs。

页签替换样式：多用于Tab-line和和Tab-capsule样式中。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1710afc637658afd403a2c929adeaa97_x9K6Iv9tYs.gif?height=1166&lazyload=true&width=1778)

#### 限定最大宽度


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
      <md-td>限制最大宽度（默认240px）</md-td>
      <md-td>不限制最大宽度 </md-td>
    </md-tr>
    <md-tr style="vertical-align:top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d2c5a69b3fae26deed63a73be66c2e2_IUQSPAOkDv.png?height=814&lazyload=true&width=1416)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fbc783842bf0e9e889e99a828ffb109b_cdbqIJwYPP.png?height=598&lazyload=true&width=1224)</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_3hYp5rFRao.png?height=20&lazyload=true&width=800)<br>**推荐：** <br>
- 优点：信息露出足够
- 缺点：信息展示又现实</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_EWbyDet7Zc.png?height=20&lazyload=true&width=800)<br>**避免：** <br>
- 优点：信息展示完全
- 缺点：影响整体布局</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


#### 分割线

当默认标签页配合分割线使用时，选中态指示器下侧与分割线重合。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f715d287dfa91c72fbd3631d5cf53c4_c9NygCesJe.png?height=225&lazyload=true&width=1024)

徽标使用规则

当标签页中有新内容，或者需要提示特殊状态时，可以使用徽标进行提醒。

徽标不占据单个一级标签页的宽度。选中态指示器宽度不包括徽标。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4a2456bdf98fff5edb6f9024c7cd9cbd_eiiwlGKedx.png?height=232&lazyload=true&width=1024)
  

### 次级标签页（选项式）

用于较小的内容区域。同一个页面中可有多个次级标签页。可与一级标签页配合使用。

#### 状态

**Selected：** 文字 Regular B500，背景 B100

**Normal：** 文字 Regular N900，背景 N900 10%

**Hover：** 文字 Regular B500，背景 N900 10%

**Disabled：** 文字 Regular N500，背景 N900 10%

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9e046deff17ae4cada90c504258de944_Yivx2CAath.png?height=157&lazyload=true&width=1024)

#### 尺寸

按照标题字号，分为两种默认尺寸：**中尺寸 14px**、**小尺寸 12px**

通常单个标签宽度跟随文案长度自适应，自适应后宽度小于最小宽度则使用最小宽度

可以根据标签页层级进行字号异化。也可以根据标签页个数及标题文案长短进行间距异化，满足4N原则即可

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab54ccf67f13a207dfe9d4f03827280_lGWa4A828S.png?height=255&lazyload=true&width=1024)

#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b2018910c8d8528db7459fb5846c1c8e_ZXFDmTZmjo.png?height=3608&lazyload=true&maxWidth=600&width=2924)

#### 超长处理

若标签页宽度超出容器：
- 设置滚动页签，将剩余页签放在翻页中
- 剩余标签页收入“更多”中，Hover 展开下拉菜单进行选择

**页签滚动**

页签交互形式：Icon button点击向后整体翻页,可滑动翻页。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63e1d4af29584e63962d578783edd9f7_FtLGhJjPJl.png?height=279&lazyload=true&width=1024)

**页签替换**

将【更多】中的选中页签替换到 tab 选项末尾选项。 当点击其他任意非末尾选项时，列表的选项重制回到最初。当更多中Tabs的文本较长时，将替换原有标签中对应宽度数量的Tabs。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/73ec4647fb204a0aa01ac0ce76cffc47_1fIHjENncp.png?height=270&lazyload=true&width=1024)
  

### 卡片标签页

用于可添加和关闭标签页的场景。

卡片标签页此处仅作示意，可根据实际使用场景增加交互操作、改变视觉样式。

#### 页签新增和删除

- 页签新增：点击添加后将新的页签增加到列表中，列表可翻页。如有超出则出现滚动翻页按钮。
- 页签删除：删除当前选项后，默认选中上一个选项。
- 页签样式：仅用于Tab- card中，可采用false-close隐藏删除。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/42af8f756072fa4b822095f1b37b258b_3C50SmKNc1.gif?height=948&lazyload=true&width=1672)
  

#### 使用场景

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2a0d75b563bc6b9535d9602bbb277cd9_u178EsZfLy.png?height=1622&lazyload=true&width=3142)

**页签使用层级建议**

当前页签共有三种样式：一级页签：Tab-line、二级页签：Tab-capsule、特殊页签：Tab-card
- 建议在同一页面中仅使用一组一级页签，如有必要需采用 large 层级高于 medium 的形式。同一页面中使用多组页签时，一级页签的层级应始终高于二级页签。同一个页面中可有多个次级标签页。
- 特殊页签有较强的业务属性，当作为包裹容器使用时层级应低于一级页签，当作为全局切换时使用层级可高于一级页签。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5316dee50e2d9adcdbd454b1130abab5_a3DCIE0Ftm.png?height=345&lazyload=true&width=1024)