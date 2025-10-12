<!--
title: 执行数据知识问答
id: 7424752773160779780
fullPath: /uAjLw4CM/ukTMukTMukTM/aily-v1/app-knowledge/ask
updatedAt: 1752154964000
source: https://open.feishu.cn/document/aily-v1/data-knowledge/ask
-->
# 执行数据知识问答

执行飞书 Aily 的数据知识问答，返回基于指定数据知识的问答结果{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=aily&version=v1&resource=app.knowledge&method=ask)

:::html
<md-alert type="tip">
- 此接口以Server-sent Events（SSE）方式更新问答结果，需要注意响应体格式
- 使用 `tenant_access_token` 需要在智能伙伴管理后台开启”支持使用应用身份调用 API 和 SDK”
- 使用 `tenant_access_token` 无法对直连模式引入的飞书云文档执行数据知识问答
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
      <md-td>https://open.feishu.cn/open-apis/aily/v1/apps/:app_id/knowledges/ask</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="aily:knowledge:ask" desc="执行智能伙伴数据知识问答" support_app_types="custom" tags="">执行智能伙伴数据知识问答</md-perm>
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
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	飞书 Aily 平台的AppID，通过飞书 Aily 平台创建应用获取

**示例值**："spring_5862e4fea8__c"

**数据校验规则**：

- 长度范围：`1` ～ `255` 字符
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
	<md-text type="field-name" >message</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >aily_knowledge_message</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	输入消息（message包含content参数，当前仅支持纯文本输入）
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
	否
	</md-dt-td>
	<md-dt-td>
	消息内容

**示例值**："推荐一部电影"

**数据校验规则**：

- 长度范围：`1` ～ `65535` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data_asset_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	控制知识问答所依据的数据知识范围，默认值为空，此时不限制数据知识范围

**示例值**：["asset_aadg2b5os5wjg"]

**数据校验规则**：

- 长度范围：`0` ～ `65535`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data_asset_tag_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	控制知识问答所依据的数据知识分类范围，默认值为空，此时不限制数据知识分类范围

**示例值**：["spring_5862e4fea8__c__asset_tag_aadg2b5ql4gbs"]

**数据校验规则**：

- 长度范围：`0` ～ `65535`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "message": {
        "content": "推荐一部电影"
    },
    "data_asset_ids": [
        "asset_aadg2b5os5wjg"
    ],
    "data_asset_tag_ids": [
        "spring_5862e4fea8__c__asset_tag_aadg2b5ql4gbs"
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	响应状态，枚举值

**可选值有**：
<md-enum>
<md-enum-item key="processing" >当前知识问答正在处理中</md-enum-item>
<md-enum-item key="finished" >当前知识问答处理完成</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >finish_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结束类型，枚举值

**可选值有**：
<md-enum>
<md-enum-item key="qa" >执行数据知识问答</md-enum-item>
<md-enum-item key="faq" >执行标准问答对</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >message</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >aily_knowledge_message</md-text>
	</md-dt-td>
	<md-dt-td>
	响应消息
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
	消息内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >process_data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >aily_knowledge_ask_process_data</md-text>
	</md-dt-td>
	<md-dt-td>
	知识问答运行过程结构化数据，status=finished 且 finish_type=qa 时返回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chart_dsls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	有数据分析时，根据数据生成的图表描述，按markdown语义描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chunks</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	召回的知识视图切片的文本数据
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sql_data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	有数据分析时，查询到数据结果，每个元素为 json 序列化后的数据结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >faq_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >aily_knowledge_faq</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配标准问答对结果，status=finished 且 finish_type=faq时返回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >question</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配问题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >answer</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_answer</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否有结果，true 则 代表 message 中的内容是通过配置知识而生成的
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。[2]\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。[2]\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。[3]\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型："},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。[2]\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。[3]\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。[4]\n5. 《真爱至上》 - 导演：理查"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。[2]\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。[3]\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。[4]\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。[5]\n以上电影都值得您一看，希"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"status":"processing"}

data: {"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"status":"processing"}

data: {"finish_type":"qa","has_answer":true,"message":{"content":"根据您的需求，我为您推荐以下电影：\n1. 《让子弹飞》 - 导演：姜文，类型：剧情、喜剧、动作、西部，评分：8.7，播放时间：132分钟，演员表：姜文、葛优、周润发等。观众投票数：559,106。[1]\n2. 《无耻混蛋》 - 导演：昆汀·塔伦蒂诺，类型：剧情、犯罪，评分：8.4，播放时间：153分钟，演员表：布拉德·皮特、梅拉尼·罗兰等。观众投票数：193,762。\n3. 《爱在暹罗》 - 导演：楚克‧萨克瑞科，类型：剧情、爱情、同性、家庭，评分：8.3，播放时间：150分钟，演员表：维特维斯特·海伦亚沃恩酷、马里奥·毛瑞尔等。观众投票数：200,419。\n4. 《V字仇杀队》 - 导演：詹姆斯·麦克特格，类型：剧情、动作、科幻、惊悚，评分：8.8，播放时间：132分钟，演员表：娜塔莉·波特曼、雨果·维文等。观众投票数：360,581。\n5. 《真爱至上》 - 导演：理查德·柯蒂斯，类型：剧情、喜剧、爱情，评分：8.5，播放时间：135分钟，演员表：休·格兰特、科林·费尔斯等。观众投票数：271,406。\n以上电影都值得您一看，希望您能喜欢！\n\n\n**来源**\n1. 电影-豆瓣电影\n\n本答案由 AI 生成，请谨慎参考\n\n"},"process_data":{"chart_dsls":[],"chunks":["[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"让子弹飞\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"姜文\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"剧情,喜剧,动作,西部\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.7\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于97%喜剧片,好于95%剧情片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"132\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2010\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"姜文,葛优,周润发,刘嘉玲,陈坤,张默,姜武,周韵,廖凡,姚橹,邵兵,苗圃,冯小刚,胡军,马珂,白冰,杜奕衡,李静,胡明,危笑,杨奇雨 ,赵铭\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"559106\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"英国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"让子弹飞\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"无耻混蛋 Inglourious Basterds\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"昆汀·塔伦蒂诺\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"剧情,犯罪\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.4\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于87%剧情片,好于94%犯罪片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"153\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2009\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"布拉德·皮特,梅拉尼·罗兰,克里斯托弗·沃尔兹,伊莱·罗斯,迈克尔·法斯宾德,黛安·克鲁格,丹尼尔·布鲁赫,蒂尔·施威格,哥德昂·布克哈德,雅基·伊多,B·J·诺瓦克,奥玛·杜姆,奧古斯特·迪赫,丹尼斯·门诺切特,西尔维斯特·格罗斯,蕾雅·赛杜\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"193762\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"英国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"无耻混蛋\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"Inglourious Basterds\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"爱在暹罗 รักแห่งสยาม\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"楚克‧萨克瑞科\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"剧情,爱情,同性,家庭\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.3\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于92%爱情片,好于94%同性片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"150\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2007\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"维特维斯特·海伦亚沃恩酷,马里奥·毛瑞尔,赖拉·邦雅淑,坎雅·拉坦娜佩琦,Sinjai Hongthai,Aticha Pongsilpipat,Pimpan Buranapim,哲拉予·拉翁马尼,Narinchot Wachirathonniyomkul\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"200419\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"泰国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"爱在暹罗\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"รักแห่งสยาม\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"V字仇杀队 V for Vendetta\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"詹姆斯·麦克特格\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"剧情,动作,科幻,惊悚\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.8\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于96%剧情片,好于98%科幻片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"132\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2005\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"娜塔莉·波特曼,雨果·维文,鲁珀特·格雷夫斯,斯蒂芬·瑞,斯蒂芬·弗雷,伊莫琴·普茨,约翰·赫特,蒂姆·皮戈特-史密斯,罗杰·阿拉姆,约翰·斯坦丁,西妮德·库萨克,娜塔莎·怀特曼,本·迈尔斯\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"360581\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"越南\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"V字仇杀队\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"V for Vendetta\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"真爱至上 Love Actually\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"理查德·柯蒂斯\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"剧情,喜剧,爱情\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.5\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于95%爱情片,好于96%喜剧片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"135\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2003\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"休·格兰特,科林·费尔斯,艾玛·汤普森,凯拉·奈特莉,连姆·尼森,托马斯·布罗迪-桑斯特,比尔·奈伊,马丁·弗瑞曼,劳拉·琳妮,艾伦·瑞克曼,克里斯·马歇尔,罗德里格·桑托罗,罗温·艾金森,比利·鲍伯·松顿,玛汀·麦古基安,安德鲁·林肯,露西娅·莫尼斯,海克·玛卡琪\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"271406\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"泰国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"真爱至上\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"Love Actually\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"谍影重重 The Bourne Identity\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"道格·里曼\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"动作,悬疑,冒险\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.5\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于97%动作片,好于96%悬疑片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"119\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"2002\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"马特·达蒙,弗兰卡·波坦特,克里斯·库珀,克里夫·欧文,朱丽娅·斯蒂尔斯,布莱恩·考克斯,阿德沃尔·阿吉纽依-艾格拜吉,加布里埃尔·曼,沃尔顿·戈金斯,约什·汉密尔顿,Orso Maria Guerrini\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"166842\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"英国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"谍影重重\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"The Bourne Identity\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]","[{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqbi\",\"APIName\":\"full_name\",\"Value\":\"唐伯虎点秋香 唐伯虎點秋香\",\"Desc\":\"电影的全称\",\"Label\":{\"zh_cn\":\"全名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqci\",\"APIName\":\"director\",\"Value\":\"李力持\",\"Desc\":\"电影的导演\",\"Label\":{\"zh_cn\":\"导演\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlqdi\",\"APIName\":\"genre\",\"Value\":\"喜剧,爱情,古装\",\"Desc\":\"电影的类别\",\"Label\":{\"zh_cn\":\"类型\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsai\",\"APIName\":\"rating\",\"Value\":\"8.3\",\"Desc\":\"电影的评分\",\"Label\":{\"zh_cn\":\"评分\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsbi\",\"APIName\":\"better_than\",\"Value\":\"好于93%喜剧片,好于92%爱情片\",\"Desc\":\"优于其他电影的百分比\",\"Label\":{\"zh_cn\":\"好于\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlsci\",\"APIName\":\"play_time\",\"Value\":\"102\",\"Desc\":\"电影的播放时长\",\"Label\":{\"zh_cn\":\"播放时间\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluei\",\"APIName\":\"release_year\",\"Value\":\"1993\",\"Desc\":\"电影首次上映的年份\",\"Label\":{\"zh_cn\":\"首映年份\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlufi\",\"APIName\":\"cast_list\",\"Value\":\"周星驰,巩俐,陈百祥,郑佩佩,朱咪咪,梁家仁,苑琼丹,梁荣忠,黄一山,黄霑,吴镇宇,刘家辉,蓝洁瑛,谷德昭,陈辉虹,李健仁,宣萱,温翠萍\",\"Desc\":\"出演电影的演员列表\",\"Label\":{\"zh_cn\":\"演员表\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlugi\",\"APIName\":\"vote_count\",\"Value\":\"260928\",\"Desc\":\"观众对电影的投票数量\",\"Label\":{\"zh_cn\":\"投票数\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjluhi\",\"APIName\":\"movie_production_country\",\"Value\":\"中国\",\"Desc\":\"电影制作的国家或地区\",\"Label\":{\"zh_cn\":\"电影制作国家\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwii\",\"APIName\":\"chinese_name\",\"Value\":\"唐伯虎点秋香\",\"Desc\":\"电影的中文名称\",\"Label\":{\"zh_cn\":\"中文名\"}},{\"APIID\":\"spring_5862e4fea8__c__datasetField_aadg2bwdjlwji\",\"APIName\":\"english_name\",\"Value\":\"唐伯虎點秋香\",\"Desc\":\"电影的英文名称\",\"Label\":{\"zh_cn\":\"英文名\"}}]"],"sql_data":[]},"status":"finished"}
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
  <md-td>2700001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>请结合文档检查请求参数</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>2700033</md-td>
  <md-td>failed to ask knowledges</md-td>
  <md-td>执行数据知识问答失败，请结合文档检查请求参数</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>2700034</md-td>
  <md-td>ask is forbidden, please contact developer</md-td>
  <md-td>数据知识问答被禁用，请联系客服处理</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>2700035</md-td>
  <md-td>run time too long</md-td>
  <md-td>数据知识问答执行超时，请重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




