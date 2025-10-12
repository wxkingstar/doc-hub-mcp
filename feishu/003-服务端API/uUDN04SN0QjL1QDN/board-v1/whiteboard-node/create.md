<!--
title: 创建节点
id: 7545367804831629314
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard-node/create
updatedAt: 1758177362000
source: https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard-node/create
-->
# 创建画板节点

创建画板节点，支持批量创建、创建含父子关系的节点等。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=board&version=v1&resource=whiteboard.node&method=create)

:::html
<md-alert type="tip">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

</md-alert>
:::



## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/board/v1/whiteboards/:whiteboard_id/nodes</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="board:whiteboard:node:create" desc="创建画板节点" support_app_types="custom,isv" tags="">创建画板节点</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >whiteboard_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	画板唯一标识，可通过云文档下的文档接口 [获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list) 获取，`block_type` 为 43 的 block 即为画板，对应的 <code>block.token</code> 就是画板的<code>whiteboard_id</code>

**示例值**："Ru8nwrWFOhEmaFbEU2VbPRsHcxb"

**数据校验规则**：

- 长度范围：`22` ～ `27` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	操作的唯一标识，与接口返回值的 client_token 相对应，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作

**示例值**：fe599b60-450f-46ff-b2ef-9f6675625b9

**数据校验规则**：

- 长度范围：`10` ～ `64` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >nodes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >whiteboard.node\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	子节点数据，不允许传入空数组

**数据校验规则**：

- 长度范围：`1` ～ `3000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	节点 id，用于唯一标识此节点，不能重复，在创建父子节点、关联其它节点做标记使用

**示例值**："o1:1"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	节点图形类型

**示例值**："composite_shape"

**可选值有**：
<md-enum>
<md-enum-item key="image" >图片</md-enum-item>
<md-enum-item key="text_shape" >文本</md-enum-item>
<md-enum-item key="group" >组合</md-enum-item>
<md-enum-item key="composite_shape" >基础图形</md-enum-item>
<md-enum-item key="svg" >svg 图形</md-enum-item>
<md-enum-item key="connector" >连线</md-enum-item>
<md-enum-item key="table" >表格</md-enum-item>
<md-enum-item key="life_line" >对象生命线</md-enum-item>
<md-enum-item key="activation" >控制焦点</md-enum-item>
<md-enum-item key="section" >分区</md-enum-item>
<md-enum-item key="table_uml" >类图</md-enum-item>
<md-enum-item key="table_er" >实体关系图</md-enum-item>
<md-enum-item key="sticky_note" >便签</md-enum-item>
<md-enum-item key="mind_map" >思维导图</md-enum-item>
<md-enum-item key="paint" >画笔</md-enum-item>
<md-enum-item key="combined_fragment" >组合片段</md-enum-item>
<md-enum-item key="mind_map_root" >思维导图根节点属性</md-enum-item>
<md-enum-item key="mind_map_node" >思维导图节点属性</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >parent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	父节点 id，必须是已存在的节点或者在本次创建的节点列表内

**示例值**："n1:1"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形相对画布的 x 轴位置信息（存在父容器时为相对父容器的坐标，父容器为组合图形 group 时，坐标是穿透的），单位为 px

**示例值**：100

**默认值**：`0`

**数据校验规则**：

- 取值范围：`-132070` ～ `132070`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形相对画布的 y 轴位置信息（存在父容器时为相对父容器的坐标，父容器为组合图形 group 时，坐标是穿透的），单位为 px

**示例值**：100

**默认值**：`0`

**数据校验规则**：

- 取值范围：`-132070` ～ `132070`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形旋转角度，单位度

**示例值**：100

**默认值**：`0`

**数据校验规则**：

- 取值范围：`-180` ～ `180`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形高度，单位为 px

**示例值**：100

**数据校验规则**：

- 取值范围：`0` ～ `132070`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形内文字
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字内容

**示例值**："文字内容"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >font_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字字重

**示例值**："regular"

**可选值有**：
<md-enum>
<md-enum-item key="regular" >常规</md-enum-item>
<md-enum-item key="bold" >加粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >font_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字大小，单位 px，默认为 14 px

**示例值**：14
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >horizontal_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平对齐

**示例值**："center"

**可选值有**：
<md-enum>
<md-enum-item key="left" >向左对齐</md-enum-item>
<md-enum-item key="center" >居中对齐</md-enum-item>
<md-enum-item key="right" >向右对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >vertical_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直对齐

**示例值**："mid"

**可选值有**：
<md-enum>
<md-enum-item key="top" >顶部对齐</md-enum-item>
<md-enum-item key="mid" >垂直居中</md-enum-item>
<md-enum-item key="bottom" >底部对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text_background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >line_through</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在删除线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在下划线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否斜体

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字旋转角度，单位度

**示例值**：90

**可选值有**：
<md-enum>
<md-enum-item key="0" >文字旋转角度0度</md-enum-item>
<md-enum-item key="90" >文字旋转角度90度</md-enum-item>
<md-enum-item key="180" >文字旋转角度180度</md-enum-item>
<md-enum-item key="270" >文字旋转角度270度</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`0` ～ `270`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >theme_text_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色主题配色编码值

**示例值**：0

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >theme_text_background_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景颜色主题配色编码值

**示例值**：-1

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fill_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色，16 进制 rbg 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fill_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >border_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框样式

**示例值**："solid"

**可选值有**：
<md-enum>
<md-enum-item key="solid" >实线</md-enum-item>
<md-enum-item key="none" >无边框</md-enum-item>
<md-enum-item key="dash" >虚线</md-enum-item>
<md-enum-item key="dot" >点状虚线</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >border_width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框宽度

**示例值**："narrow"

**可选值有**：
<md-enum>
<md-enum-item key="extra_narrow" >极细</md-enum-item>
<md-enum-item key="narrow" >细</md-enum-item>
<md-enum-item key="medium" >中</md-enum-item>
<md-enum-item key="bold" >粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >border_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >h_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >v_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >border_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >theme_fill_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色主题配色编码值

**示例值**：3

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >theme_border_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色主题配色编码值

**示例值**：4

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >image</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图片
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	图片 token，通过云文档下的素材上传接口 [上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all) 上传图片后返回的 token

**示例值**："EeSHb3qs9oSBXoxvw33bqtOsczb"

**数据校验规则**：

- 长度范围：`22` ～ `27` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >composite_shape</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >composite_shape</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	基础图形属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	基础图形的具体类型

**示例值**："circle"

**可选值有**：
<md-enum>
<md-enum-item key="round_rect2" >全圆角矩形</md-enum-item>
<md-enum-item key="ellipse" >圆形</md-enum-item>
<md-enum-item key="hexagon" >六边形</md-enum-item>
<md-enum-item key="cylinder" >圆柱体</md-enum-item>
<md-enum-item key="parallelogram" >平行四边形</md-enum-item>
<md-enum-item key="trapezoid" >梯形</md-enum-item>
<md-enum-item key="triangle" >三角形</md-enum-item>
<md-enum-item key="round_rect" >圆角矩形</md-enum-item>
<md-enum-item key="step" >步骤</md-enum-item>
<md-enum-item key="diamond" >菱形</md-enum-item>
<md-enum-item key="rect" >基础矩形</md-enum-item>
<md-enum-item key="star" >五角星</md-enum-item>
<md-enum-item key="bubble" >气泡</md-enum-item>
<md-enum-item key="pentagon" >五边形</md-enum-item>
<md-enum-item key="forward_arrow" >单向箭头</md-enum-item>
<md-enum-item key="document_shape" >文档图形</md-enum-item>
<md-enum-item key="condition_shape" >组合片段</md-enum-item>
<md-enum-item key="cloud" >云朵</md-enum-item>
<md-enum-item key="cross" >十字形</md-enum-item>
<md-enum-item key="step2" >步骤图形2</md-enum-item>
<md-enum-item key="predefined_process" >预定义流程</md-enum-item>
<md-enum-item key="delay_shape" >延迟图形</md-enum-item>
<md-enum-item key="off_page_connector" >跨页引用</md-enum-item>
<md-enum-item key="note_shape" >注释图形</md-enum-item>
<md-enum-item key="data_process" >数据处理</md-enum-item>
<md-enum-item key="data_store" >数据存储</md-enum-item>
<md-enum-item key="data_store2" >数据存储2</md-enum-item>
<md-enum-item key="data_store3" >数据存储3</md-enum-item>
<md-enum-item key="star2" >爆炸星型</md-enum-item>
<md-enum-item key="star3" >四角形</md-enum-item>
<md-enum-item key="star4" >六角形</md-enum-item>
<md-enum-item key="actor" >角色小人</md-enum-item>
<md-enum-item key="brace" >花括号</md-enum-item>
<md-enum-item key="condition_shape2" >组合片段2</md-enum-item>
<md-enum-item key="double_arrow" >双向箭头</md-enum-item>
<md-enum-item key="data_flow_round_rect3" >数据处理（正方圆角矩形）</md-enum-item>
<md-enum-item key="rect_bubble" >矩形气泡</md-enum-item>
<md-enum-item key="manual_input" >手动输入图形</md-enum-item>
<md-enum-item key="flow_chart_round_rect" >流程图圆角矩形</md-enum-item>
<md-enum-item key="flow_chart_round_rect2" >流程图全圆角矩形</md-enum-item>
<md-enum-item key="flow_chart_diamond" >流程图判定</md-enum-item>
<md-enum-item key="flow_chart_parallelogram" >流程图数据</md-enum-item>
<md-enum-item key="flow_chart_cylinder" >流程图数据库</md-enum-item>
<md-enum-item key="flow_chart_trapezoid" >流程图手动操作</md-enum-item>
<md-enum-item key="flow_chart_hexagon" >流程图准备</md-enum-item>
<md-enum-item key="data_flow_round_rect" >数据流外部实体</md-enum-item>
<md-enum-item key="data_flow_ellipse" >数据流数据处理</md-enum-item>
<md-enum-item key="backward_arrow" >反向箭头（左箭头）</md-enum-item>
<md-enum-item key="brace_reverse" >反向花括号（左括号）</md-enum-item>
<md-enum-item key="flow_chart_mq" >消息队列</md-enum-item>
<md-enum-item key="horiz_cylinder" >水平方向圆柱体</md-enum-item>
<md-enum-item key="class_interface" >类图，接口</md-enum-item>
<md-enum-item key="classifier" >类图，类目</md-enum-item>
<md-enum-item key="circular_ring" >圆环</md-enum-item>
<md-enum-item key="pie" >扇形</md-enum-item>
<md-enum-item key="right_triangle" >直角三角形</md-enum-item>
<md-enum-item key="octagon" >八边形</md-enum-item>
<md-enum-item key="state_start" >状态图，开始</md-enum-item>
<md-enum-item key="state_end" >状态图，结束</md-enum-item>
<md-enum-item key="state_concurrence" >状态图，并发</md-enum-item>
<md-enum-item key="component_shape" >组件</md-enum-item>
<md-enum-item key="component_shape2" >组件2</md-enum-item>
<md-enum-item key="component_interface" >组件，接口</md-enum-item>
<md-enum-item key="component_required_interface" >组件，需求接口</md-enum-item>
<md-enum-item key="component_assembly" >组件，组装</md-enum-item>
<md-enum-item key="cube" >立方体</md-enum-item>
<md-enum-item key="boundary" >边界</md-enum-item>
<md-enum-item key="control" >控制</md-enum-item>
<md-enum-item key="entity" >实体</md-enum-item>
<md-enum-item key="data_base" >数据库</md-enum-item>
<md-enum-item key="boundary" >边界</md-enum-item>
<md-enum-item key="queue" >队列</md-enum-item>
<md-enum-item key="collection" >集合</md-enum-item>
<md-enum-item key="actor_lifeline" >角色生命线</md-enum-item>
<md-enum-item key="object_lifeline" >对象生命线</md-enum-item>
<md-enum-item key="mind_node_full_round_rect" >思维导图全圆角矩形</md-enum-item>
<md-enum-item key="mind_node_round_rect" >思维导图圆角矩形</md-enum-item>
<md-enum-item key="mind_node_text" >思维导图文本图形</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pie</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >pie</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	饼图属性，type=pie时需要设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >start_radial_line_angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	开始径向边角度，水平向右x轴正方向为0度，顺时针方向角度值递增，单位度

**示例值**：30.0

**数据校验规则**：

- 取值范围：`0.0` ～ `360.0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >central_angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	圆心角角度，角度方向为始径向边逆时针方向，单位度

**示例值**：40.0

**数据校验规则**：

- 取值范围：`0.0` ～ `360.0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >radius</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	半径长度，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`1` ～ `10000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >sector_ratio</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	扇区占比，0为一个圆周线，1为一个圆盘

**示例值**：1

**默认值**：`1`

**数据校验规则**：

- 取值范围：`0` ～ `1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >connector</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >attached_object</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector.attached_object</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形信息，与position参数二选一，同时设置时attached_object生效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的 id

**示例值**："o1:1"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的方向

**示例值**："auto"

**可选值有**：
<md-enum>
<md-enum-item key="auto" >连接方向自动匹配</md-enum-item>
<md-enum-item key="top" >连接图形顶部方向</md-enum-item>
<md-enum-item key="right" >连接图形右边方向</md-enum-item>
<md-enum-item key="bottom" >连接图形底部方向</md-enum-item>
<md-enum-item key="left" >连接图形左边方向</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的相对坐标，0-1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位百分比

**示例值**：0.5

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位百分比

**示例值**：0.5

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点在画布内的坐标，position与attached_object二选一，position与attached_object 同时设置时 attched_object 生效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >arrow_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点箭头样式

**示例值**："line_arrow"

**可选值有**：
<md-enum>
<md-enum-item key="none" >无箭头样式</md-enum-item>
<md-enum-item key="line_arrow" >线型箭头</md-enum-item>
<md-enum-item key="triangle_arrow" >三角形箭头</md-enum-item>
<md-enum-item key="empty_triangle_arrow" >空心三角形箭头</md-enum-item>
<md-enum-item key="circle_arrow" >圆形箭头</md-enum-item>
<md-enum-item key="empty_circle_arrow" >空心圆形箭头</md-enum-item>
<md-enum-item key="diamond_arrow" >菱形箭头</md-enum-item>
<md-enum-item key="empty_diamond_arrow" >空心菱形箭头</md-enum-item>
<md-enum-item key="single_arrow" >单箭头</md-enum-item>
<md-enum-item key="multi_arrow" >多箭头</md-enum-item>
<md-enum-item key="exact_single_arrow" >精确单箭头</md-enum-item>
<md-enum-item key="zero_or_multi_arrow" >零个或多个箭头</md-enum-item>
<md-enum-item key="zero_or_single_arrow" >零个或单个箭头</md-enum-item>
<md-enum-item key="single_or_multi_arrow" >单个或多个箭头</md-enum-item>
<md-enum-item key="x_arrow" >x型箭头</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >attached_object</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector.attached_object</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形信息，与position参数二选一，同时设置时attached_object生效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的 id

**示例值**："o1:1"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的方向

**示例值**："auto"

**可选值有**：
<md-enum>
<md-enum-item key="auto" >连接方向自动匹配</md-enum-item>
<md-enum-item key="top" >连接图形顶部方向</md-enum-item>
<md-enum-item key="right" >连接图形右边方向</md-enum-item>
<md-enum-item key="bottom" >连接图形底部方向</md-enum-item>
<md-enum-item key="left" >连接图形左边方向</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连接图形的相对坐标，0-1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位百分比

**示例值**：0.5

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位百分比

**示例值**：0.5

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点在画布内的坐标，position与attached_object二选一，position与attached_object 同时设置时 attached_object 生效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >arrow_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线端点箭头样式

**示例值**："line_arrow"

**可选值有**：
<md-enum>
<md-enum-item key="none" >无箭头样式</md-enum-item>
<md-enum-item key="line_arrow" >线型箭头</md-enum-item>
<md-enum-item key="triangle_arrow" >三角形箭头</md-enum-item>
<md-enum-item key="empty_triangle_arrow" >空心三角形箭头</md-enum-item>
<md-enum-item key="circle_arrow" >圆形箭头</md-enum-item>
<md-enum-item key="empty_circle_arrow" >空心圆形箭头</md-enum-item>
<md-enum-item key="diamond_arrow" >菱形箭头</md-enum-item>
<md-enum-item key="empty_diamond_arrow" >空心菱形箭头</md-enum-item>
<md-enum-item key="single_arrow" >单箭头</md-enum-item>
<md-enum-item key="multi_arrow" >多箭头</md-enum-item>
<md-enum-item key="exact_single_arrow" >精确单箭头</md-enum-item>
<md-enum-item key="zero_or_multi_arrow" >零个或多个箭头</md-enum-item>
<md-enum-item key="zero_or_single_arrow" >零个或单个箭头</md-enum-item>
<md-enum-item key="single_or_multi_arrow" >单个或多个箭头</md-enum-item>
<md-enum-item key="x_arrow" >x型箭头</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >captions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >connector.caption</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本

**数据校验规则**：

- 长度范围：`0` ～ `1024`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字内容

**示例值**："文字内容"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字字重

**示例值**："regular"

**可选值有**：
<md-enum>
<md-enum-item key="regular" >常规</md-enum-item>
<md-enum-item key="bold" >加粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字大小，单位 px，默认为 14 px

**示例值**：14
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >horizontal_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平对齐

**示例值**："center"

**可选值有**：
<md-enum>
<md-enum-item key="left" >向左对齐</md-enum-item>
<md-enum-item key="center" >居中对齐</md-enum-item>
<md-enum-item key="right" >向右对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >vertical_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直对齐

**示例值**："mid"

**可选值有**：
<md-enum>
<md-enum-item key="top" >顶部对齐</md-enum-item>
<md-enum-item key="mid" >垂直居中</md-enum-item>
<md-enum-item key="bottom" >底部对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >line_through</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在删除线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在下划线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否斜体

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字旋转角度，单位度

**示例值**：90

**可选值有**：
<md-enum>
<md-enum-item key="0" >文字旋转角度0度</md-enum-item>
<md-enum-item key="90" >文字旋转角度90度</md-enum-item>
<md-enum-item key="180" >文字旋转角度180度</md-enum-item>
<md-enum-item key="270" >文字旋转角度270度</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`0` ～ `270`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色主题配色编码值

**示例值**：0

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_background_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景颜色主题配色编码值

**示例值**：-1

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >shape</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线类型

**示例值**："straight"

**可选值有**：
<md-enum>
<md-enum-item key="straight" >直线</md-enum-item>
<md-enum-item key="polyline" >折线</md-enum-item>
<md-enum-item key="curve" >曲线</md-enum-item>
<md-enum-item key="right_angled_polyline" >直角折线</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >turning_points</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	连线转向点

**数据校验规则**：

- 长度范围：`0` ～ `1000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形宽度，单位为 px

**示例值**：100

**数据校验规则**：

- 取值范围：`0` ～ `132070`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >section</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >section</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分区属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分区标题

**示例值**："分区"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >table</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >meta</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table.meta</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	元信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >row_sizes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	行高，单位 px

**示例值**：[10]

**数据校验规则**：

- 长度范围：`1` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >col_sizes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	列宽，单位 px

**示例值**：[10]

**数据校验规则**：

- 长度范围：`1` ～ `1000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	整个表格的样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fill_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色，16 进制 rbg 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fill_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框样式

**示例值**："solid"

**可选值有**：
<md-enum>
<md-enum-item key="solid" >实线</md-enum-item>
<md-enum-item key="none" >无边框</md-enum-item>
<md-enum-item key="dash" >虚线</md-enum-item>
<md-enum-item key="dot" >点状虚线</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框宽度

**示例值**："narrow"

**可选值有**：
<md-enum>
<md-enum-item key="extra_narrow" >极细</md-enum-item>
<md-enum-item key="narrow" >细</md-enum-item>
<md-enum-item key="medium" >中</md-enum-item>
<md-enum-item key="bold" >粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >h_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >v_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_fill_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色主题配色编码值

**示例值**：3

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_border_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色主题配色编码值

**示例值**：4

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	整个表格的文字样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字内容

**示例值**："文字内容"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字字重

**示例值**："regular"

**可选值有**：
<md-enum>
<md-enum-item key="regular" >常规</md-enum-item>
<md-enum-item key="bold" >加粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字大小，单位 px，默认为 14 px

**示例值**：14
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >horizontal_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平对齐

**示例值**："center"

**可选值有**：
<md-enum>
<md-enum-item key="left" >向左对齐</md-enum-item>
<md-enum-item key="center" >居中对齐</md-enum-item>
<md-enum-item key="right" >向右对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >vertical_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直对齐

**示例值**："mid"

**可选值有**：
<md-enum>
<md-enum-item key="top" >顶部对齐</md-enum-item>
<md-enum-item key="mid" >垂直居中</md-enum-item>
<md-enum-item key="bottom" >底部对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >line_through</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在删除线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在下划线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否斜体

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字旋转角度，单位度

**示例值**：90

**可选值有**：
<md-enum>
<md-enum-item key="0" >文字旋转角度0度</md-enum-item>
<md-enum-item key="90" >文字旋转角度90度</md-enum-item>
<md-enum-item key="180" >文字旋转角度180度</md-enum-item>
<md-enum-item key="270" >文字旋转角度270度</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`0` ～ `270`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色主题配色编码值

**示例值**：0

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_background_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景颜色主题配色编码值

**示例值**：-1

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	标题

**示例值**："表格"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table.cell\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单元格列表

**数据校验规则**：

- 长度范围：`0` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >row_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	行下标，从 1 开始

**示例值**：1

**数据校验规则**：

- 取值范围：`1` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >col_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	列下标，从 1 开始

**示例值**：1

**数据校验规则**：

- 取值范围：`1` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >merge_info</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table.cell.merge_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单元格合并信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >row_span</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	从当前行索引起被合并的连续行数

**示例值**：2

**数据校验规则**：

- 取值范围：`1` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >col_span</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	从当前列索引起被合并的连续列数

**示例值**：2

**数据校验规则**：

- 取值范围：`1` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单元格包含的子节点 id

**示例值**：["o1:1"]

**数据校验规则**：

- 长度范围：`0` ～ `3000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单元格内文字
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字内容

**示例值**："文字内容"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字字重

**示例值**："regular"

**可选值有**：
<md-enum>
<md-enum-item key="regular" >常规</md-enum-item>
<md-enum-item key="bold" >加粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >font_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字大小，单位 px，默认为 14 px

**示例值**：14
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >horizontal_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平对齐

**示例值**："center"

**可选值有**：
<md-enum>
<md-enum-item key="left" >向左对齐</md-enum-item>
<md-enum-item key="center" >居中对齐</md-enum-item>
<md-enum-item key="right" >向右对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >vertical_align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直对齐

**示例值**："mid"

**可选值有**：
<md-enum>
<md-enum-item key="top" >顶部对齐</md-enum-item>
<md-enum-item key="mid" >垂直居中</md-enum-item>
<md-enum-item key="bottom" >底部对齐</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >line_through</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在删除线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否存在下划线

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否斜体

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >angle</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字旋转角度，单位度

**示例值**：90

**可选值有**：
<md-enum>
<md-enum-item key="0" >文字旋转角度0度</md-enum-item>
<md-enum-item key="90" >文字旋转角度90度</md-enum-item>
<md-enum-item key="180" >文字旋转角度180度</md-enum-item>
<md-enum-item key="270" >文字旋转角度270度</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`0` ～ `270`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字颜色主题配色编码值

**示例值**：0

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_text_background_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字背景颜色主题配色编码值

**示例值**：-1

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单元格样式，设置后会覆盖表格样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fill_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色，16 进制 rbg 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fill_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框样式

**示例值**："solid"

**可选值有**：
<md-enum>
<md-enum-item key="solid" >实线</md-enum-item>
<md-enum-item key="none" >无边框</md-enum-item>
<md-enum-item key="dash" >虚线</md-enum-item>
<md-enum-item key="dot" >点状虚线</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框宽度

**示例值**："narrow"

**可选值有**：
<md-enum>
<md-enum-item key="extra_narrow" >极细</md-enum-item>
<md-enum-item key="narrow" >细</md-enum-item>
<md-enum-item key="medium" >中</md-enum-item>
<md-enum-item key="bold" >粗</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_opacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框透明度，百分比

**示例值**：50

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >h_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	水平翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >v_flip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	垂直翻折

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >border_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色，16 进制 rgb 值

**示例值**："#6db5a3"

**数据校验规则**：

- 长度范围：`7` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_fill_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	填充颜色主题配色编码值

**示例值**：3

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >theme_border_color_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	边框颜色主题配色编码值

**示例值**：4

**数据校验规则**：

- 取值范围：`-2` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locked</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形是否锁定，锁定后无法编辑图形，默认false

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >z_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图形在兄弟节点中的层级，层级大的会覆盖层级小的

**示例值**：1

**数据校验规则**：

- 取值范围：`0` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >lifeline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >lifeline</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	生命对象属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	生命线长度，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`0` ～ `1000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	生命线类型

**示例值**："actor_lifeline"

**数据校验规则**：

- 长度范围：`0` ～ `1000000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >paint</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >paint</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	画笔属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	画笔类型

**示例值**："marker"

**可选值有**：
<md-enum>
<md-enum-item key="marker" >马克笔</md-enum-item>
<md-enum-item key="highlight" >高亮笔</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >lines</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >point\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	画板线段，由系列坐标点表示

**数据校验规则**：

- 长度范围：`1` ～ `100000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置x坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-1000000000000000000` ～ `1000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	点位置y坐标，单位 px

**示例值**：10

**数据校验规则**：

- 取值范围：`-10000000000000000000` ～ `100000000000000000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	画笔粗细，单位px

**示例值**：7

**数据校验规则**：

- 取值范围：`1` ～ `23`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	画笔颜色

**示例值**："#ffffff"

**数据校验规则**：

- 长度范围：`7` ～ `7` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >svg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >svg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	svg图形属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >svg_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	svg 代码

**示例值**："<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" /></svg>"

**数据校验规则**：

- 长度范围：`1` ～ `10000000000000000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >sticky_note</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >sticky_note</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	便签图形属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户id

**示例值**："12345678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >show_author_info</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否展示用户信息

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mind_map_node</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mind_map_node</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图节点属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >parent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	思维导图节点的父节点，必须为思维导图节点

**示例值**："z1:1"

**数据校验规则**：

- 长度范围：`0` ～ `10000000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图节点图形类型

**示例值**："mind_map_text"

**可选值有**：
<md-enum>
<md-enum-item key="mind_map_text" >思维导图文本节点类型</md-enum-item>
<md-enum-item key="mind_map_full_round_rect" >思维导图全圆角矩形节点类型</md-enum-item>
<md-enum-item key="mind_map_round_rect" >思维导图矩形节点类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >z_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图节点在兄弟节点中的位置index

**示例值**：2

**数据校验规则**：

- 取值范围：`0` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >layout_position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	子节点相对根节点的方向（根节点下的子节点设置才生效）

**示例值**："left"

**可选值有**：
<md-enum>
<md-enum-item key="left" >思维导图节点在根节点左侧</md-enum-item>
<md-enum-item key="right" >思维导图节点在根节点右侧</md-enum-item>
<md-enum-item key="up" >思维导图节点在根节点上方</md-enum-item>
<md-enum-item key="down" >思维导图节点在根节点下方</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	子节点列表

**示例值**：["z2:3"]

**数据校验规则**：

- 长度范围：`0` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mind_map_root</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mind_map_root</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图根节点属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >layout</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图布局方式

**示例值**："left_right"

**可选值有**：
<md-enum>
<md-enum-item key="up_down" >上下布局</md-enum-item>
<md-enum-item key="left_right" >左右布局</md-enum-item>
<md-enum-item key="tree_left" >左树布局</md-enum-item>
<md-enum-item key="tree_right" >右树布局</md-enum-item>
<md-enum-item key="tree_balance" >左右交替平衡树布局</md-enum-item>
<md-enum-item key="vertical_time_line" >垂直时间线布局</md-enum-item>
<md-enum-item key="horizontal_time_line" >水平时间线布局</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图根节点图形类型

**示例值**："mind_map_round_rect"

**可选值有**：
<md-enum>
<md-enum-item key="mind_map_text" >思维导图文本节点类型</md-enum-item>
<md-enum-item key="mind_map_full_round_rect" >思维导图全圆角矩形节点类型</md-enum-item>
<md-enum-item key="mind_map_round_rect" >思维导图矩形节点类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >line_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图图形连接线样式

**示例值**："round_angle"

**可选值有**：
<md-enum>
<md-enum-item key="curve" >曲线</md-enum-item>
<md-enum-item key="right_angle" >直角折线</md-enum-item>
<md-enum-item key="round_angle" >圆角折线</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >up_children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图上布局子节点关系树

**示例值**：["z1:1"]

**数据校验规则**：

- 长度范围：`0` ～ `100000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >down_children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图下布局子节点关系树

**示例值**：["z2:1"]

**数据校验规则**：

- 长度范围：`0` ～ `10000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >left_children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图左布局子节点关系树

**示例值**：["z3:1"]

**数据校验规则**：

- 长度范围：`0` ～ `1000000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >right_children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	思维导图右布局子节点关系树

**示例值**：["z4:1"]

**数据校验规则**：

- 长度范围：`0` ～ `100000`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{"nodes":[{"id":"o1:1",
"type":"composite_shape",
"parent_id":"n1:1",
"x":100,
"y":100,
"angle":100,
"height":100,
"text":{"text":"文字内容",
"font_weight":"regular",
"font_size":14,
"horizontal_align":"center",
"vertical_align":"mid",
"text_color":"#6db5a3",
"text_background_color":"#6db5a3",
"line_through":true,
"underline":true,
"italic":true,
"angle":90,
"theme_text_color_code":0,
"theme_text_background_color_code":-1},
"style":{"fill_color":"#6db5a3",
"fill_opacity":50,
"border_style":"solid",
"border_width":"narrow",
"border_opacity":50,
"h_flip":false,
"v_flip":false,
"border_color":"#6db5a3",
"theme_fill_color_code":3,
"theme_border_color_code":4},
"image":{"token":"EeSHb3qs9oSBXoxvw33bqtOsczb"},
"composite_shape":{"type":"circle",
"pie":{"start_radial_line_angle":30.0,
"central_angle":40.0,
"radius":10,
"sector_ratio":1}},
"connector":{"start":{"attached_object":{"id":"o1:1",
"snap_to":"auto",
"position":{"x":0.5,
"y":0.5}},
"position":{"x":10,
"y":10},
"arrow_style":"line_arrow"},
"end":{"attached_object":{"id":"o1:1",
"snap_to":"auto",
"position":{"x":0.5,
"y":0.5}},
"position":{"x":10,
"y":10},
"arrow_style":"line_arrow"},
"captions":{"data":[{
    "text": "文字内容",
    "font_weight": "regular",
    "font_size": 14,
    "horizontal_align": "center",
    "vertical_align": "mid",
    "text_color": "#6db5a3",
    "text_background_color": "#6db5a3",
    "line_through": true,
    "underline": true,
    "italic": true,
    "angle": 90,
    "theme_text_color_code": 0,
    "theme_text_background_color_code": -1
}]},
"shape":"straight",
"turning_points":[{
    "x": 10,
    "y": 10
}]},
"width":100,
"section":{"title":"分区"},
"table":{"meta":{"row_sizes":[10],
"col_sizes":[10],
"style":{"fill_color":"#6db5a3",
"fill_opacity":50,
"border_style":"solid",
"border_width":"narrow",
"border_opacity":50,
"h_flip":false,
"v_flip":false,
"border_color":"#6db5a3",
"theme_fill_color_code":3,
"theme_border_color_code":4},
"text":{"text":"文字内容",
"font_weight":"regular",
"font_size":14,
"horizontal_align":"center",
"vertical_align":"mid",
"text_color":"#6db5a3",
"text_background_color":"#6db5a3",
"line_through":true,
"underline":true,
"italic":true,
"angle":90,
"theme_text_color_code":0,
"theme_text_background_color_code":-1}},
"title":"表格",
"cells":[{
    "row_index": 1,
    "col_index": 1,
    "merge_info": {
        "row_span": 2,
        "col_span": 2
    },
    "children": [
        "o1:1"
    ],
    "text": {
        "text": "文字内容",
        "font_weight": "regular",
        "font_size": 14,
        "horizontal_align": "center",
        "vertical_align": "mid",
        "text_color": "#6db5a3",
        "text_background_color": "#6db5a3",
        "line_through": true,
        "underline": true,
        "italic": true,
        "angle": 90,
        "theme_text_color_code": 0,
        "theme_text_background_color_code": -1
    },
    "style": {
        "fill_color": "#6db5a3",
        "fill_opacity": 50,
        "border_style": "solid",
        "border_width": "narrow",
        "border_opacity": 50,
        "h_flip": false,
        "v_flip": false,
        "border_color": "#6db5a3",
        "theme_fill_color_code": 3,
        "theme_border_color_code": 4
    }
}]},
"locked":true,
"z_index":1,
"lifeline":{"size":10,
"type":"actor_lifeline"},
"paint":{"type":"marker",
"lines":[{
    "x": 10,
    "y": 10
}],
"width":7,
"color":"#ffffff"},
"svg":{"svg_code":"<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" /></svg>"},
"sticky_note":{"user_id":"12345678",
"show_author_info":true},
"mind_map_node":{"parent_id":"z1:1",
"type":"mind_map_text",
"z_index":2,
"layout_position":"left",
"children":["z2:3"]},
"mind_map_root":{"layout":"left_right",
"type":"mind_map_round_rect",
"line_style":"round_angle",
"up_children":["z1:1"],
"down_children":["z2:1"],
"left_children":["z3:1"],
"right_children":["z4:1"]}}]}
</md-code-json>
:::



## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	所创建的节点 id 列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	操作的唯一标识，更新请求中使用此值表示幂等的进行此次更新
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "ids": [
            "o1:1"
        ],
        "client_token": "fe599b60-450f-46ff-b2ef-9f6675625b97"
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>2890001</md-td>
  <md-td>invalid format</md-td>
  <md-td>参数格式不正确。请检查传入的参数格式，如 json 字符串是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2890002</md-td>
  <md-td>invalid arg</md-td>
  <md-td>参数无效。请检查传入的参数是否有效，如 whiteboard_id 是否正确，可通过云文档下的文档接口[获取文档所有块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)获取正确的`whiteboard_id`</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2890003</md-td>
  <md-td>record missing</md-td>
  <md-td>找不到记录。whiteboard_id 不存在，请检查传入的whiteboard_id是否正确；或通过云文档下的文档接口[获取文档所有块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)确认该画板是否存在</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>2890004</md-td>
  <md-td>auth failed</md-td>
  <md-td>认证失败。请检查 Authorization 参数</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>2890005</md-td>
  <md-td>forbidden</md-td>
  <md-td>请求身份没有当前画板的阅读权限。请参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#78a03ee2)开通权限</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>2890006</md-td>
  <md-td>too many request</md-td>
  <md-td>请求超过接口频率限流值。请降低操作频率，稍后再试</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>2891001</md-td>
  <md-td>server internal error</md-td>
  <md-td>服务运行错误。请重试或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




