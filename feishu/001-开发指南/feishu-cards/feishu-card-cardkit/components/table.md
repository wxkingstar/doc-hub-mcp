<!--
title: 表格
id: 7488180028434923521
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/table
updatedAt: 1749785865000
source: https://open.feishu.cn/document/feishu-cards/feishu-card-cardkit/components/table
-->
# 表格


卡片搭建工具中的表格组件支持在表格中添加普通文本、富文本、选项标签、数字、人员列表、日期类型的内容。本文档介绍如何在搭建工具中使用新版卡片的表格组件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/73128131732c775982199eb61c08fd8d_jYjiX4RrP1.png?height=790&lazyload=true&maxWidth=600&width=1920)

## 注意事项

- 单张卡片最多支持放置五个表格组件。若卡片配置了多语言，则单个语言最多支持放置五个表格组件。
- 当单元格内剩余空间无法完整展示内容时，末尾将省略。在客户端，用户可通过光标悬浮或点击的方式查看被省略的内容。

## 参考案例

卡片搭建工具案例库中提供了[表格组件案例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBnf2k8UwqF)，你可直接前往卡片搭建工具试一试。

## 组件配置

### 属性


:::html

<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 20%;">配置项</md-dt-th>
<md-dt-th style="width: 70%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>列设置</md-dt-td>
<md-dt-td>在此处添加表格的列。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>展示名称</md-dt-td>
<md-dt-td>列的标题。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>Key</md-dt-td>
<md-dt-td>列的键名。在行数据中，需要在每一行指定列的键名。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>字段类型</md-dt-td>
<md-dt-td>列数据的类型。支持以下类型。不同类型的字段，对行数据类型的要求不同。行数据示例参考下文。
 -   文本：普通文本数据类型
- 选项：选项标签。标签中的文本内容不可过长，否则可能会导致 PC 端或移动端内容显示不完整
- 数字：数字类型。默认在单元格中右对齐展示，支持进一步选择数字格式
- 日期：日期类型。飞书 v7.6 及之后版本支持
- 富文本：富文本类型。飞书 v7.14 及之后版本支持。支持进一步选择是否为 [lark_md 格式（飞书 v7.10 及之后版本支持）](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)
- 人员：人员列表类型。为用户名称+头像样式</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>列宽度</md-dt-td>
<md-dt-td>列的宽度。支持按以下维度调整：
 -   自适应：自适应列中的内容
- 百分比：当前列占表格整体宽度的百分比。取值范围是 [1%,100%]
- 固定宽度：自定义表格的列宽度，如 120px。取值范围是 [80px,600px] 的整数</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>水平对齐</md-dt-td>
<md-dt-td>列内数据水平对齐方式。支持配置：
 -   左对齐
- 居中对齐
- 右对齐</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>垂直对齐</md-dt-td>
<md-dt-td>列内数据垂直对齐方式。支持配置：
 -   顶部对齐
- 中间对齐
- 底部对齐</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>行数据来源</md-dt-td>
<md-dt-td>选择行数据的来源。支持配置：
 -   指定：直接在搭建工具中填入行数据。参考下文了解如何填写行数据
- 变量：传入行变量</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>组件 ID</md-dt-td>
<md-dt-td>组件在卡片内的唯一标识，用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/feishu-card-resource-overview#791c8e74)对组件进行增删改时指定组件。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::


### 行数据说明

行数据为一个 JSON 数组，每一行数据为一个对象，包含多个键值对，其中 key 为自定义的列的键名，value 为该行该列具体的内容，value 的数据类型由 **字段类型** 属性决定。你可参考[表格组件案例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBnf2k8UwqF)了解如何填入行数据。
```json
[ // 行数据
  { // 第一行数据示例
    "customer_name": "飞书科技", // 在表格的第一行中，为键名为 customer_name 的列传入普通文本类型的数据 "飞书科技"。
    "customer_date": 1699341315000, // 在表格的第一行中，为键名为 customer_date 的列传入 Unix 标准毫秒级时间戳。
    "customer_scale": [
      {
        "text": "S2",
        "color": "blue"
      }
    ],
    "customer_arr": 168,
    "customer_poc": [
      "ou_14a32f1a02e64944cf19207aa43abcef",
      "ou_e393cf9c22e6e617a4332210d2aabcef"
    ],
    "customer_link": "[飞书科技](https://open.larkoffice.com/?lang=zh-CN)",
    "company_image": "![image.png](img_v3_02cc_bf88cdee-6650-4b39-987c-f8e87c3227fg)"
  }
]
```

下表列出字段类型对应的 value 的格式和示例值。

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 10%;">列设置-字段类型</md-dt-th>
<md-dt-th style="width: 30%;">描述</md-dt-th>
<md-dt-th>行数据格式</md-dt-th>
<md-dt-th>行数据示例</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>文本</md-dt-td>
<md-dt-td>不带格式的普通文本。</md-dt-td>
<md-dt-td>
```json
"name":"plain text"  // 不填或为空时展示空单元格，非字符串类型转换为字符串展示
```
</md-dt-td>
<md-dt-td>
```json
"business_domain_name": "飞书卡片"
```
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>选项</md-dt-td>
<md-dt-td>支持使用 color 参数自定义标签颜色。color 枚举值及展示效果如下所示。默认值为 blue。
  
**注意**：标签中的文本内容不可过长，否则可能会导致 PC 端或移动端内容显示不完整。如果文本过长，可使用 text 或者 lark_md 类型。
  
  ![图片名称](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/305c4f7e298f40083f743f4034c577c0_Q1ZsWRaq8X.png?height=494&lazyload=true&maxWidth=300&width=1722)</md-dt-td>
<md-dt-td>
```json
// 支持仅展示一个默认样式的标签
"name":"option"

// 支持展示多个自定义样式的标签
"name":[
{
"text":"option 1",
"color":"red"
},
{
"text":"option 2",
"color":"green"
}
]```
</md-dt-td>
<md-dt-td>
```json
"customer_scale": [
  {
    "text": "S2",
    "color": "green"
  }
]
```
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>数字</md-dt-td>
<md-dt-td>默认在单元格中右对齐展示，支持进一步选择数字格式。</md-dt-td>
<md-dt-td>
```json
"name":NUMBER
```
</md-dt-td>
<md-dt-td>
```json
"customer_arr": 26.57774928467545
```
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>日期</md-dt-td>
<md-dt-td>需输入 Unix 标准毫秒级时间戳，飞书客户端将按用户本地时区展示日期时间。支持进一步选择日期格式。</md-dt-td>
<md-dt-td>
```json
name":NUMBER
```
</md-dt-td>
<md-dt-td>
```json
"customer_date": 1606101072000  // 毫秒级时间戳
```
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>富文本</md-dt-td>
<md-dt-td>富文本语法可参考[富文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/markdown)。飞书 v7.14 及之后版本支持。支持进一步选择是否为 [lark_md 格式（飞书 v7.10 及之后版本支持）](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)</md-dt-td>
<md-dt-td>
```json
"name":"markdown text"  // 不填或为空时展示空单元格，非字符串类型转换为字符串展示
```
</md-dt-td>
<md-dt-td>
```json
"company_image": "![image.png](img_v3_02cc_bf88cdee-6650-4b39-987c-f8e87c3227fg)"
```
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>人员</md-dt-td>
<md-dt-td>人员列表。为用户名称+头像样式。支持传入用户 ID 指定人员，用户 ID 类型可以是 user_id、open_id、union_id和 lark_id。了解更多 ID 相关信息，参考[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
  

**提示**：当用户 ID 无效时，将展示“未知用户”样式。</md-dt-td>
<md-dt-td>
```json
"name": [
  "user_id_1",
  "user_id_2",
…
] //展示多人员

或

"name": "user_id" //展示单人员```
</md-dt-td>
<md-dt-td>
```json
"customer_name": "ou_c99c5f35d542efc7ee492afe11af19ef"
```
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::


### 样式

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">配置项</md-dt-th>
<md-dt-th style="width: 70%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>表头设置</md-dt-td>
<md-dt-td>设置表格的首行样式。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>背景色</md-dt-td>
<md-dt-td>支持将背景色设为灰色。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>文字加粗</md-dt-td>
<md-dt-td>支持为表头的文字加粗。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>表头最大行数</md-dt-td>
<md-dt-td>表头文本的行数。支持大于等于 1 的整数。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>其它设置</md-dt-td>
<md-dt-td>对表格的其它设置。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>每页展示行数</md-dt-td>
<md-dt-td>设置卡片内最多展示多少行数据。超出数据需翻页显示。支持 [1,10] 整数。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>表格行高</md-dt-td>
<md-dt-td>表格的行高。单元格高度如无法展示一整行内容，则上下裁剪内容。支持配置：
-   低（32px）
- 中（54px）
- 高（88px）
- 自定义：自定义行高，单位为像素，如 40px。取值范围是 [32,124]</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>外边距</md-dt-td>
<md-dt-td>为整个组件配置外边距。支持配置上、下、左、右四个方向的外边距，取值范围为 [-99,99]px。具体操作如下图：
-   一键配置：
    
  
	![20250401150603_rec_.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/439554a4cca19734865bee049fabeaf4_O9IKN3JFBM.gif?height=738&lazyload=true&maxWidth=600&width=1558)
- 为不同方向分别配置外边距：

  
	![20250401150709_rec_.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8d196ee2986d02595ca34556b4960efd_5sCSTXn0Kw.gif?height=784&lazyload=true&maxWidth=600&width=1566)</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::


### 变量

在表格组件中，你可为表格的行数据绑定变量，而不直接指定数据。本小节介绍如何为表格绑定变量。


**绑定变量**

1. 在表格属性中完成列的设置后，你可在 **行数据来源** 配置项中，选择 **变量**。
    
    搭建工具将自动生成一个行变量 `table_raw_array_1`。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d49e4803f9903972d599b5c232bc8ce2_LRRE0ohqSc.png?height=750&lazyload=true&maxWidth=600&width=1567)
1. 点击 `table_raw_array_1` 变量，在变量弹窗中，你可参考下表修改变量名称、描述和模拟数据。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f8faab9f9a8be1c72f317af31e51e6a_B9aGkPPzDt.png?height=741&lazyload=true&maxWidth=600&width=1560)
     
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 20%;">配置项</md-th>
<md-th style="width: 40%;">描述</md-th>
<md-th style="width: 30%;">示例</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>类型</md-td>
<md-td>变量的类型。在表格组件的 **行数据来源** 配置项中，你仅能使用 **表格行数据** 类型变量。</md-td>
<md-td>表格行数据</md-td>
</md-tr>
<md-tr>
<md-td>变量名称</md-td>
<md-td>一般为字母或字母与下划线的组合。在之后发送卡片时，你需要为该变量名（key）赋值（value）。</md-td>
<md-td>`table_raw_array_1`</md-td>
</md-tr>
<md-tr>
<md-td>变量描述</md-td>
<md-td>此处可补充解释该变量的用法。可不填。</md-td>
<md-td>表格生成的变量</md-td>
</md-tr>
<md-tr>
<md-td>模拟数据</md-td>
<md-td>表格行数据的模拟数据不可为空且必须符合格式要求。</md-td>
<md-td>参考上文 **行数据说明** 填写模拟数据。</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

**为变量赋值**

添加好变量后，在发送卡片时，即可通过请求体的 `template_variable` 字段为变量赋值。`template_variable` 字段是卡片绑定的变量列表，格式为 `{key:value}`。详情参考[为卡片变量赋值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/configure-card-variables#a6abb723)。



## 常见问题

### 表格组件中，将变量设置为空，表格仍然显示？

表格组件不支持通过设置变量为空来隐藏表格整个组件。若想要实现该需求，你可在[富文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/markdown)组件中绑定变量，为变量传入表格的 Markdown 语法来选择是否展示表格。


### 如何删除表格中的行？

在卡片搭建工具中，你需通过删除完整的一个行数据，来删除表格中的行。详情参考下图：



![20250610212356_rec_-convert.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d109acf68dd8b8fa00bd6a1bd00be2d9_Io3f4bpstE.gif?lazyload=true&width=1914&height=796)
