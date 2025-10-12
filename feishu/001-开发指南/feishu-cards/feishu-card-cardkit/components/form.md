<!--
title: 表单容器
id: 7487804894023335937
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/form
updatedAt: 1747732955000
source: https://open.feishu.cn/document/feishu-cards/feishu-card-cardkit/components/form
-->
# 表单容器

卡片搭建工具中的表单容器支持内嵌多个交互组件，如输入框、下拉选择组件等，允许用户在卡片中录入一批表单数据后，通过点击一次表单容器中预置的 **提交** 按钮，将这一批本地缓存的表单内容一次回调至开发者的服务端，实现异步提交多个表单项数据的效果。本文档介绍如何在搭建工具中使用新版卡片的表单容器。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9c38386e01e983bda637146618cc5f0b_yaNqalcSqI.png?height=784&lazyload=true&maxWidth=600&width=1910)

## 参考案例

卡片搭建工具案例库中提供使用表单容器的案例，你可直接前往[卡片搭建工具](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBZKqVZHLLe)试一试。

## 注意事项

容器类组件最多支持嵌套五层组件。请避免在表单容器中嵌套多层组件。多层嵌套会压缩内容的展示空间，影响卡片的展示效果。

## 组件配置

### 属性

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>表单标识</md-td>
      <md-td>表单容器的唯一标识，用于识别用户提交的数据属于哪个表单容器。在同一张卡片内，该字段的值全局唯一。</md-td>
    </md-tr>
    <md-tr>
      <md-td>组件 ID</md-td>
      <md-td>组件在卡片内的唯一标识，用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/feishu-card-resource-overview#791c8e74)对组件进行增删改时指定组件。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 样式
:::html

<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>布局方式</md-td>
      <md-td>支持以下两种布局方式：
-   **垂直布局**：表单内的组件按照从上到下依次排列。适合内容结构简单、需要明确分层的场景。
- **流式布局**：表单内的组件将根据表单的宽度自动调整位置和大小，重新水平或垂直排列。适合需要适应不同屏幕尺寸的场景。</md-td>
    </md-tr>
    <md-tr>
      <md-td>垂直间距</md-td>
      <md-td>表单容器内组件在垂直方向上的间隔。</md-td>
    </md-tr>
    <md-tr>
      <md-td>水平对齐</md-td>
      <md-td>表单容器内组件在水平方向上的对齐方式。支持配置：
        
-   左对齐
- 居中对齐
- 右对齐</md-td>
    </md-tr>
    <md-tr>
      <md-td>垂直对齐</md-td>
      <md-td>表单容器内组件在垂直方向上的对齐方式。支持配置：
-   上对齐
- 居中对齐
- 下对齐</md-td>
    </md-tr>
    <md-tr>
      <md-td>内外边距</md-td>
      <md-td>表单容器内部（内边距）与外部（外边距）的空白区域大小。支持配置上、下、左、右四个方向的内外边距，取值范围为 [-99,99]px。操作示例参考下图：
        
      
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0a53ac0ca6cffa5c5f903e49c0b52a0d_HG4F0MqCci.gif?height=724&lazyload=true&maxWidth=600&width=1890)
      
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 变量

在表单容器中，你可选择为表单标识绑定变量，而不直接指定数据。本小节介绍如何为表单标识绑定变量。

**添加变量**
1. 在表单容器的表单标识内容输入框中，点击如下图所示的变量图标或输入 `{` 添加变量。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/542be521dc415a62c04db196082d7748_Iaz19bwbDU.png?height=735&lazyload=true&maxWidth=600&width=1906)
    
1. 在变量下拉选项中，点击 **新建变量**，在 **添加变量** 弹窗中，参考下表填写内容。
    
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th style="width: 30%;">描述</md-th>
      <md-th style="width: 30%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>类型</md-td>
      <md-td>变量的类型。在表单容器中，你仅能使用 **普通文本** 类型变量。</md-td>
      <md-td>普通文本</md-td>
    </md-tr>
    <md-tr>
      <md-td>变量名称</md-td>
      <md-td>一般为字母或字母与下划线的组合。在之后发送卡片时，你需要为该变量名（key）赋值（value）。</md-td>
      <md-td>`form_id`</md-td>
    </md-tr>
    <md-tr>
      <md-td>变量描述</md-td>
      <md-td>此处可补充解释该变量的用法。可不填。</md-td>
      <md-td>用于识别用户提交的数据属于哪个表单容器。</md-td>
    </md-tr>
    <md-tr>
      <md-td>模拟数据</md-td>
      <md-td>推荐你添加模拟数据，在工具内直接预览组件绑定变量后的数据展示效果。</md-td>
      <md-td>project_form</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
**为变量赋值**

添加好变量后，在发送卡片时，即可通过请求体的 `template_variable` 字段为变量赋值。`template_variable` 字段是卡片绑定的变量列表，格式为 `{key:value}`，其中的 `key` 即为你定义的变量名称。详情参考[为卡片变量赋值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/configure-card-variables#a6abb723)。

## 内嵌组件额外属性

表单容器支持嵌套除表格和表单容器以外的所有组件。内嵌在表单容器中的**交互**组件，新增表单项标识、是否必填属性。详细说明如下表所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>表单项标识</md-td>
      <md-td>表单容器内组件的唯一标识，用于识别用户提交的数据属于哪个组件，在单张卡片内不可重复。搭建工具默认为表单容器内的所有交互组件预置标识。</md-td>
    </md-tr>
    <md-tr>
      <md-td>是否必填</md-td>
      <md-td>在表单容器内，该交互组件是否为必填。开启后，当用户点击表单容器的“提交”按钮时，若未填写该组件，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。默认关闭。</md-td>
    </md-tr>
  </md-tbody>
</md-table>  
:::

另外，内嵌在表单容器中的按钮组件，支持设置为“提交”按钮或“重置”按钮，其中：


- **设置为“提交”按钮**：用户点击后，将提交所有已填写的表单项内容。至少需有一个按钮被设置为“提交”按钮。了解用户点击按钮后通过回调将数据发送至开发者服务端的逻辑与示例代码，你可参考教程[开发卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)。
- **设置为“重置”按钮**：用户点击后，将重置所有表单组件的输入值为初始值
要查看按钮的属性等配置项，参考[按钮](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/button)。
    


## 回调结构

当用户点击表单容器的提交按钮时，你在开发者后台配置的请求地址将会收到如下所示的回调数据。如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，回调数据的结构如下所示。更多参数说明可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。

```json
{
    "schema": "2.0", // 回调的版本
    "header": { // 回调基本信息
        "event_id": "f7984f25108f8137722bb63c*****", // 回调的唯一标识
        "token": "066zT6pS4QCbgj5Do145GfDbbag*****", // 应用的 Verification Token
        "create_time": "1603977298000000", // 	回调发送的时间，接近回调发生的时间
        "event_type": "card.action.trigger", // 回调类型卡片交互场景中，固定为 "card.action.trigger"
        "tenant_key": "2df73991750*****", // 应用归属的 tenant key，即租户唯一标识
        "app_id": "cli_a5fb0ae6a4******" // 应用的 App ID
    },
    "event": { // 回调的详细信息
        "operator": { // 	回调触发者信息
            "tenant_key": "2df73991750*****", // 回调触发者的 tenant key，即租户唯一标识
            "user_id": "867*****", // 回调触发者的 user ID当应用开启“获取用户 user ID”权限后，该参数返回
            "open_id": "ou_3c14f3a59eaf2825dbe25359f15*****" // 	回调触发者的 Open ID
        },
        "token": "c-295ee57216a5dc9de90fefd0aadb4b1d7d******", // 更新卡片用的凭证，有效期为 30 分钟，最多可更新 2 次
        "action": { // 用户操作交互组件回传的数据
            "value": { // 表单容器中的按钮组件上开发者添加的自定义的回传参数
                "key": "value"
            },
            "tag": "button", // 表单组件中按钮组件的标签
            "timezone": "Asia/Shanghai", // 用户当前所在地区的时区。当用户操作日期选择器、时间选择器、或日期时间选择器时返回
            "form_value": { // 表单容器内用户提交的数据。以下为示例数据：
                "DatePicker_bpqdq5puvn4": "2024-04-01 +0800", // 表单容器内日期选择器组件的 name 和 value。name 即搭建工具中的组件 ID，可自定义
                "DateTimePicker_ihz2d7a74i": "2024-04-29 07:07 +0800", // 表单容器内日期时间选择器组件的自定义 name 和 value
                "Input_lf4fmxwfrd9": "1234", // 表单容器内输入框组件的 name 和 value
                "PersonSelect_2ejys7ype7m": "ou_3c14f3a59eaf2825dbe25359f1595b00", // 表单容器内人员选择-单选组件的 name 和 value
                "Select_a2d5b7l3zd": "1", // 表单容器内下拉选择-单选组件的 name 和 value
                "TimePicker_7ecsf6xkqsq": "00:00 +0800" // 表单容器内时间选择器组件的 name 和 value
            },
            "name": "Button_lvkepfu3" // 表单组件中按钮组件的 name
        },
        "host": "im_message", // 卡片展示场景
        "context": { //  卡片展示场景相关信息
            "open_message_id": "om_574d639e4a44e4dd646eaf628e2*****", // 卡片所在的消息 ID
            "open_chat_id": "oc_e4d2605ca917e695f54f11aaf56*****" // 卡片所在的会话 ID
        }
    }
}
```

## 常见问题

本小节介绍在使用表单容器时常见的问题。了解更多，参考[飞书卡片常见问题](/ssl:ttdoc/ugTN1YjL4UTN24CO1UjN/uczN1YjL3cTN24yN3UjN)。

### 表单容器中组件的 `name` 属性对应搭建工具中的哪个配置？

对应搭建工具中的 **表单项标识** 配置项。内嵌在表单容器中的**交互**组件，新增表单项标识（name）属性，该属性必填，且单张卡片内必须唯一，不可重复。

### 表单容器内嵌套循环容器，且循环容器内嵌可交互组件后，预览报错？

如下图，表单容器中内嵌循环容器，且循环容器中内嵌了输入框组件，点击 **向我发送预览** 后报错。这可能是因为在表单容器中，交互组件的 **表单项标识** 在单张卡片重复了。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/31f3da63d45498a66e900e72b66b0eb6_Hx6gNktEnP.png?height=551&lazyload=true&maxWidth=600&width=1505)

你需为输入框组件的 **表单项标识** 设置不重复的子变量。参考以下步骤解决。或直接前往卡片搭建工具使用[表单容器内嵌循环容器案例](https://open.larkoffice.com/cardkit?catalogId=10015&templateId=AAqBZKqVZHLLe)。
1. 选中交互组件（此处以 **输入框** 组件为例），在右侧 **表单项标识** 配置项处，点击变量按钮。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a1a31e592551e310d5b8811bda645df7_6ljs9QAkjn.png?height=728&lazyload=true&maxWidth=600&width=1562)
    
1. 点击 **+添加子变量**，在[循环容器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/recycling-container)自动生成的变量中，添加一个子变量。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9bfa2b6ffcd455d974e88e741ab447f6_VzY8GydxRH.png?height=730&lazyload=true&maxWidth=600&width=1565)
    
1. 在编辑变量 弹窗中，点击 **+添加子变量**，为输入框的表单项标识设置一个变量。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5cd2ede8b0b21085f3e968d38bf69d37_3VoxI4yy4Q.png?height=783&lazyload=true&maxWidth=400&width=784)
    
1. 参考下表为设置变量结构和模拟数据。
     
     
     
:::html

<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th style="width: 40%;">描述</md-th>
      <md-th>示例值</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td><strong>变量类型</strong></md-td>
      <md-td>为交互组件的表单项标识绑定的变量的类型。固定取值为 <strong>文本</strong> 即可。</md-td>
      <md-td>文本</md-td>
    </md-tr>
    <md-tr>
      <md-td><strong>变量名称</strong></md-td>
      <md-td>一般为字母或字母与下划线的组合。在之后发送卡片时，你需要为该变量名（key）赋值（value）。</md-td>
      <md-td><code>input_name</code></md-td>
    </md-tr>
    <md-tr>
      <md-td><strong>变量描述</strong></md-td>
      <md-td>此处可补充解释该变量的用法或说明。可不填。</md-td>
      <md-td>输入框的表单项标识变量</md-td>
    </md-tr>
    <md-tr>
      <md-td><strong>模拟数据</strong></md-td>
      <md-td>为循环容器绑定的对象数组变量的子变量传入模拟数据。
        
  <strong>注意</strong>：由于交互组件的 <strong>表单项标识</strong> 在单张卡片不可重复，你必须为变量传入模拟数据，且数据不可重复。否则点击 <strong>向我发送预览</strong> 后将报错。</md-td>
      <md-td>
```json
[
  {
    "input_name": "input1"
  },
  {
    "input_name": "input2"
  },
  {
    "input_name": "input3"
  }
]
```
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


