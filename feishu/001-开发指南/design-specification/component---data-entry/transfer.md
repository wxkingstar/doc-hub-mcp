<!--
title: 穿梭框
id: 7475195771685552130
fullPath: /tools-and-resources/design-specification/component---data-entry/transfer
updatedAt: 1742375641000
source: https://open.feishu.cn/document/design-specification/component---data-entry/transfer
-->
# 穿梭框
穿梭框指双栏选择框，左侧栏为全部选项，右侧栏展示已选项，用直观的方式在两栏中移动被选中内容，完成选择行为。
穿梭框通常在批量选择、展示批量选项时使用。


## 组成要素

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7cd6a7b3475d4a0110175cec7a0a5ca5_15c4dZUjJl.png?height=800&lazyload=true&maxWidth=600&width=1440)

1. **左侧栏：** 用于展示全部选项
1. **右侧栏：** 用于展示已选择项
1. **可选区：** 展示可选项，可进行选择，可配置多种展示样式，或自定义选项样式
1. **已选区：** 展示已选择的选项，可进行清除，可配置多种展示样式，或自定义选项样式
1. **搜索框（可选）：** 用于搜索全部选项
1. **可选项标题（可选）：** 用于展示所有选项的标题，字段可自定义
1. **已经选项标题（可选）：** 用于展示所有已选项的标题，字段可自定义
1. **自定义区域（可选）：** 区域可自定义，通常用于 breadcrumb 或 辅助说明文字
  

## 模块类型

### 选项区

**可配置选项样式：** 选项样式在组件中提供以下常用选项配置项。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b860c1ae36d436b71f02b79801656fc_CwWvYkRJvJ.png?height=640&lazyload=true&maxWidth=600&width=1080)
1. Checkbox：必选项
1. 选项标题：必选项
1. 辅助文字：可选项
1. 头像、图标：可选项
1. 标签：可选项
1. 自定义选区：可选项，通常用于添加按钮，Icon 等信息帮助说明选项

<br>
**选区支持树结构：** <br>
树结构选项支持以上选项样式进行配置 （组件交互参考树结构组件，不在此展开）

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6d4b813f944fa168ba86c276bc7b621_rRY47LGRSs.png?height=800&lazyload=true&maxWidth=600&width=1440)
  
**选项区结构自定义**<br>
设计中可以根据需要，对选项区进行结构上的自定义，分组的样式可根据需求自定义，示例如下：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/49ef2e51ab21f23e1b4de8effb88c85f_0jniDCjRNe.png?height=800&lazyload=true&maxWidth=600&width=1440)
  

### 已选区

**可配置已选样式：** 已选样式在组件中提供以下常用配置项

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4f7c32ac09befe3daade6ced0ac0edea_EyWiS54nsc.png?height=640&lazyload=true&maxWidth=600&width=1080)
1. 选项标题：必选项
1. 关闭按钮：必选项
1. 辅助文字：可选项
1. 头像、图标：可选项
1. 标签：可选项
1. 拖拽 Icon：可选项，当选项支持拖拽时配置
  
**已选区对应选项区树结构**

已选择区域暂不支持树结构展示选项，建议以平铺选项的方式展示已选项：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6d4b813f944fa168ba86c276bc7b621_kqAAA07XKk.png?height=800&lazyload=true&width=1440)
  
**已选区结构自定义**<br>
设计中可以根据需要，对已选区进行结构上的自定义，分组的样式可根据需求自定义，示例如下：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/11f7c534586b4a5820954d9549e13925_8fJ7OhW8FJ.png?height=800&lazyload=true&width=1440)
  

### 选项标题

选项标题为可选模块，由 Checkbox 和标题组成。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d087595c22a0e6f8a4036ffcfd366fe9_1iXwakNfhx.png?height=224&lazyload=true&width=1712)

**Checkbox** **（可选）** ：用于选择全部展示项

**默认标题字段：** 默认为 “全部选项（{已选数量}/{全部数量}）”

**自定义标题字段：** 支持自定义标题的字段为任意字段。
  

### 已选项标题

选项标题为可选模块，由标题组成和清除按钮组成。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/605b263971b403695a1e44138d5dc2e8_Qqmk6WfaNK.png?height=224&lazyload=true&width=1200)

**默认标题字段：** 默认为 “已选（{已选数量}）”

**清空按钮：** 点击清空按钮清空所有已选项。

**自定义字标题段：** 支持自定义标题的字段为任意字段。
  

### 搜索（可配）

模块整体可配，搜索框接入输入框组件，详见输入框组件，不在此赘述。
  

### 自定义选区（可配）

**常用样式：** 模块整体可配，常用样式包括面包屑和辅助说明文字等

**示例：**


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
<md-table>
  <md-tbody>
     <md-tr>
     <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/845380e39fc8aaef03814fbd1a51d07a_Gl4e4J5GH3.png?height=800&lazyload=true&width=1440)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a23ae9fe16c69021417e8508a8f519d9_YWN1rCFd07.png?height=800&lazyload=true&width=1440)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/81f016361dace4801bf9cbe20d4635d5_lvSerVqyBR.png?height=800&lazyload=true&width=1440)</md-td>
    </md-tr>
    <md-tr>
      <md-td>自定义区域</md-td>
      <md-td>示例 1</md-td>
      <md-td>示例 2</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



## 交互说明

### 选项区

**选择：** 点击整个选项或 Checkbox 进行选择。

**取消选择：** 已选情况下点击整个选项或 Checkbox 取消选择。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cb39990033dfd9d33460b105b431c640_yHAMsmQY8R.png?height=998&lazyload=true&maxWidth=800&width=1200)


### 已选区

**取消选择：** 点击关闭按钮进行取消选择

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cb075ec795f95ab9cc99d8fa225efb54_f69QtuTlnD.png?height=832&lazyload=true&width=1200)


### 拖拽

对于可拖拽的已选项，点击拖拽按钮进行拖拽操作

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/272bec862c1b3c4a399d82571383265e_iS71s4a4v8.png?height=800&lazyload=true&width=2160)


### 滚动

搜索框，标题区及自定义区在滚动过程中会固定在顶部。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86c85f0c6a1be7078b4fcfb9548d91f8_er8ALodvGV.png?height=800&lazyload=true&width=1440)


### 搜索

**结果展示：** 搜索结果以平铺的方式展示（数结构同）

**标题计数：** 标题默认为 “全部选项（搜索结果中的已选数量/搜索结果的全部数量）”

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7531ab331ad05c9152aa884ac50ccf6f_G5MBvY0dRB.png?height=800&lazyload=true&width=1520)


## 尺寸及适配规则

### 穿梭款尺寸适配

穿梭框组件整体高度和宽度可进行自由调整：
最大最小尺寸仅建议，根据实际情景适配：
- 建议最小宽度 544px，最大宽度 960px
- 建议最小高度 240px

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e9ac13c95069e12491d3583339522151_k1UJxcCjxh.png?height=800&lazyload=true&width=1440)


### 选项、标题折行规则

**选项折行**
- Checkbox 与头像区域置顶，保持左侧上侧固定间距
- 内容区域根据信息行数自适应高度，可单独定义主要信息区域次要信息区的限制行数。行数根据需要定义

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55ace81c5dc5b4907e7f40fc4db4d68e_e2C3UXrBhL.png?height=640&lazyload=true&width=1080)


### 标题折行

选项区标题和已选区标题支持文字折行为 2 行。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2d551d2d6eec30eef236d28e37d26982_OUYyoNtWG3.png?height=640&lazyload=true&width=1080)


### 自定义区域适配

自定义区域可传入自定义内容，整体高度可自定义，自定义模块边距规则遵循下图：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9c54bf8219997151cffde21846854ca6_JB9f5YrBL2.png?height=800&lazyload=true&width=1440)