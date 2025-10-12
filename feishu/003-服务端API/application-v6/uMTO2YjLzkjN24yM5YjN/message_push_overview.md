<!--
title: 获取消息推送概览
id: 7036626399368953884
fullPath: /uAjLw4CM/ukTMukTMukTM/application-v6/application-app_usage/message_push_overview
updatedAt: 1724405849000
source: https://open.feishu.cn/document/server-docs/application-v6/app-usage/message_push_overview
-->
# 获取消息推送概览

目标：查看应用在某一天/某一周/某一个月的机器人消息推送数据，可以根据部门做筛选{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=application&version=v6&resource=application.app_usage&method=message_push_overview)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">
1. 仅支持企业版/旗舰版租户使用
2. 一般每天早上10点产出两天前的数据。
3. 已经支持的指标包括：消息推送给用户的次数、消息触达的人数、消息1小时阅读量、消息12小时阅读量
4. 按照部门查看数据时，会展示当前部门以及其子部门的整体使用情况
5. 调用频控为100次/分
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
      <md-td>https://open.feishu.cn/open-apis/application/v6/applications/:app_id/app_usage/message_push_overview</md-td>
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
            <md-perm name="application:application.app_message_stats.overview:readonly" desc="获取机器人发送消息的概览数据" support_app_types="custom" tags="">获取机器人发送消息的概览数据</md-perm>
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
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	目标应用ID，支持自建应用

**示例值**："cli_9f115af860f7901b"
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
	<md-text type="field-name" >department_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	调用中使用的部门ID的类型

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >以自定义department_id来标识部门</md-enum-item>
<md-enum-item key="open_department_id" >以open_department_id来标识部门</md-enum-item>
</md-enum>

**默认值**：`open_department_id`
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
	<md-text type="field-name" >date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询日期，若cycle_type为week，则输入的date必须为周一； 若cycle_type为month，则输入的date必须为每月1号

**示例值**："2021-07-08"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >cycle_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	枚举值：day，week，month；week指自然周，返回当前日期所在周的数据；不满一周则从周一到当前日期算。month指自然月，返回当前日期所在月的数据。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >日活，指自然日，返回当前日期所在日的数据</md-enum-item>
<md-enum-item key="2" >周活，指自然周，返回当前日期所在周的数据。若到查询时当周还没结束，则返回周一到当前日期的数值。例如在2021/7/15 查询2021/7/5 这一周的数据，则代表的是2021/7/5 ~ 2021/7/11。但若是在2021/7/8 查询2021/7/5 这一周的数据，则返回的是2021/7/5 ~ 2021/7/7 的数据</md-enum-item>
<md-enum-item key="3" >月活，指自然月，返回当前日期所在月的数据。若不满一个月则返回当月1日到截止日期前的数据。例如在2021/8/15 查询 7月的数据，则代表2021/7/1~2021/7/31。 若在2021/8/15 查询8月的数据，则代表2021/8/1~2021/8/14的数据</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	需要查询的部门id，获取方法可参考[部门ID概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)
-  若部门id为空，则返回当前租户的使用数据；若填写部门id，则返回当前部门的使用数据（包含子部门的用户）； 
-  若路径参数中department_id_type为空或者为open_department_id，则此处应该填写部门的 open_department_id；若路径参数中department_id_type为department_id，则此处应该填写部门的 department_id。返回当前部门的使用数据； 若不填写，则返回当前租户的使用数据

**示例值**："od-4e6ac4d14bcd5071a37a39de902c7141"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "cycle_type": "1",
    "date": "2021-11-18",
    "department_id": "od-bb009b4df5431400dc31d3bc8a37e069"
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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >application.app_usage\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	消息推送情况，指标值包括：send_msg_count：消息推送数、send_user_count：消息触达人数、read_in_1h_count：消息1h阅读量、read_in_12h_count：消息12h阅读量

**注意**：将一条消息推送至群聊，该消息的推送数等于群聊人数。例如群聊内有 5 个人：

- 如果将 1 条消息推送至群聊后，消息推送数（send_msg_count）为 5、消息触达人数（send_user_count）为 5。
- 如果将 2 条消息推送至群聊后，消息推送数（send_msg_count）为 10、消息触达人数（send_user_count）为 5。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >metric_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	指标名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >metric_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	指标值
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
    "data": {
        "items": [
            {
                "metric_name": "send_msg_count",
                "metric_value": 7
            },
            {
                "metric_name": "send_user_count",
                "metric_value": 7
            },
            {
                "metric_name": "read_in_1h_count",
                "metric_value": 20
            },
            {
                "metric_name": "read_in_12h_count",
                "metric_value": 20
            }
        ]
    },
    "msg": "success"
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
  <md-td>403</md-td>
  <md-td>211004</md-td>
  <md-td>no authority for quota limit</md-td>
  <md-td>检查是否是企业版/旗舰版租户</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>211010</md-td>
  <md-td>invalid date range</md-td>
  <md-td>检查 date 的取值范围是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>211011</md-td>
  <md-td>data not found</md-td>
  <md-td>数据不存在。可能是该应用在目标查询日期范围内没有数据。请检查请求参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211007</md-td>
  <md-td>invalid date format</md-td>
  <md-td>检查 date 字段的格式是否符合"2021-07-01"</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211005</md-td>
  <md-td>invalid app id</md-td>
  <md-td>检查 app id</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

## 附录-统计指标说明
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 18%;">指标</md-th>
      <md-th style="width: 15%;">指标定义</md-th>
       <md-th style="width: 15%;">备注</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td>消息推送数</md-td>
      <md-td>-   统计周期内，消息推送给用户的次数。</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>
    
    </md-tr>
         <md-tr>
      <md-td>消息触达人数</md-td>
      <md-td>-   统计周期内，消息触达的人数</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>
    
    </md-tr>
         <md-tr>
      <md-td>消息1h阅读量</md-td>
      <md-td>-  统计周期内，sum(某一条消息1h内的已读用户数)</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>
           
           
    </md-tr>
    
  
     <md-tr>
      <md-td>消息12h阅读量</md-td>
      <md-td>-   统计周期内，sum(某一条消息12h内的已读用户数)</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>
           
           
    </md-tr>
        
</md-tbody>
</md-table>
:::


