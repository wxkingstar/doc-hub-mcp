<!--
title: 添加跟随气泡
id: 7377650885165268995
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/push_follow_up
updatedAt: 1726300643000
source: https://open.feishu.cn/document/im-v1/message/push_follow_up
-->
# 添加跟随气泡

调用该接口在最新一条消息下方添加气泡样式的内容，当消息接收者点击气泡或者新消息到达后，气泡消失。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message&method=push_follow_up)

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

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/05f992f251e9949661370b6c73aa6eda_DseiZlt09t.png?height=278&maxWidth=450&width=1383)

## 前提条件

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 跟随气泡的效果在飞书客户端 v7.20 及以上版本生效。
- 仅支持在当前机器人与用户单聊的消息上添加跟随气泡，且消息需要符合：

    - 消息是机器人发送的。
    - 消息是会话内最新的消息。
    - 消息发送后未超过 600 秒。

## 注意事项

添加跟随气泡后，会话内的用户点击气泡会自动转换为该用户发送的一条消息，你可以为应用订阅[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，接收用户发送的消息并判断是否为跟随气泡的内容。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id/push_follow_up</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	机器人发送的消息 ID。ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**示例值**："om_3210a18894e206715a4359115f4cf2f5"
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
	<md-text type="field-name" >follow_ups</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >follow_up\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	跟随气泡列表。

**数据校验规则**：

- 长度范围：`1` ～ `3`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	气泡的内容。

**示例值**："你好"

**数据校验规则**：

- 长度范围：`1` ～ `200` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >i18n_contents</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_content\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	气泡的多语言内容。

**数据校验规则**：

- 长度范围：`0` ～ `50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	`language` 参数对应的内容。

**示例值**："hello"

**数据校验规则**：

- 长度范围：`1` ～ `200` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	语言类型。

**示例值**："en_us"

**可选值有**：
<md-enum>
<md-enum-item key="en_us" >英文</md-enum-item>
<md-enum-item key="zh_cn" >简体中文</md-enum-item>
<md-enum-item key="zh_hk" >繁体中文-香港</md-enum-item>
<md-enum-item key="zh_tw" >繁体中文-台湾</md-enum-item>
<md-enum-item key="ja_jp" >日语</md-enum-item>
<md-enum-item key="id_id" >印尼语</md-enum-item>
<md-enum-item key="vi_vn" >越南语</md-enum-item>
<md-enum-item key="th_th" >泰语</md-enum-item>
<md-enum-item key="pt_br" >葡萄牙语</md-enum-item>
<md-enum-item key="es_es" >西班牙语</md-enum-item>
<md-enum-item key="ko_kr" >韩语</md-enum-item>
<md-enum-item key="de_de" >德语</md-enum-item>
<md-enum-item key="fr_fr" >法语</md-enum-item>
<md-enum-item key="it_it" >意大利语</md-enum-item>
<md-enum-item key="ru_ru" >俄语</md-enum-item>
<md-enum-item key="ms_my" >马来语</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "follow_ups": [
        {
            "content": "你好",
            "i18n_contents": [
                {
                    "content": "hello",
                    "language": "en_us"
                }
            ]
        }
    ]
}
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


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
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
  <md-td>230001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，可根据接口实际返回的错误信息，并参考接口文档内容，检查输入参数是否填写错误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230002</md-td>
  <md-td>expired message.</md-td>
  <md-td>消息已过期。已发送超过 600 秒的消息无法再添加跟随气泡。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230003</md-td>
  <md-td>only support p2p chat.</md-td>
  <md-td>仅支持在当前机器人与用户单聊的消息上添加跟随气泡。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230004</md-td>
  <md-td>invisible message.</md-td>
  <md-td>所操作的消息对当前机器人不可见，无法执行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230005</md-td>
  <md-td>user is not visible to bot.</md-td>
  <md-td>当前机器人对用户不可见，无法执行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230006</md-td>
  <md-td>only support latest message.</md-td>
  <md-td>仅支持在会话中的最新一条消息上添加跟随气泡。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230007</md-td>
  <md-td>invalid follow up.</md-td>
  <md-td>气泡内容无效。你可以根据文档提供的参数描述，传入正确的气泡内容。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230008</md-td>
  <md-td>follow up already exist.</md-td>
  <md-td>指定消息已添加跟随气泡，无法执行本次操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


