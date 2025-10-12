<!--
title: 获取应用使用概览
id: 6995148762798178332
fullPath: /uAjLw4CM/ukTMukTMukTM/application-v6/application-app_usage/overview
updatedAt: 1721719962000
source: https://open.feishu.cn/document/server-docs/application-v6/app-usage/overview
-->
# 获取应用使用概览

查看应用在某一天/某一周/某一个月的使用数据，可以查看租户整体对应用的使用情况，也可以分部门查看。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=application&version=v6&resource=application.app_usage&method=overview)

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
2. 一般每天早上10点产出前一天的数据
3. 已经支持的指标包括：应用的活跃用户数、累计用户数、新增用户数、访问页面数、打开次数
4. 数据从飞书4.10版本开始统计，使用飞书版本4.10及以下版本的用户数据不会被统计到
5. 按照部门查看数据时，会展示当前部门以及其子部门的整体使用情况
6. 调用频控为100次/分
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
      <md-td>https://open.feishu.cn/open-apis/application/v6/applications/:app_id/app_usage/overview</md-td>
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
            <md-perm name="application:application.app_usage_stats.overview:readonly" desc="获取员工使用应用的概览数据" support_app_types="custom" tags="">获取员工使用应用的概览数据</md-perm>
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
	目标应用 ID

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
	查询日期，格式为yyyy-mm-dd，若cycle_type为1，date可以为任何自然日；若cycle_type为2，则输入的date必须为周一； 若cycle_type为3，则输入的date必须为每月1号

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
	活跃周期的统计类型

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
	查询的部门id，获取方法可参考[部门ID概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)
-  若部门id为空，则返回当前租户的使用数据；若填写部门id，则返回当前部门的使用数据（包含子部门的用户）； 
-  若路径参数中department_id_type为空或者为open_department_id，则此处应该填写部门的 open_department_id；若路径参数中department_id_type为department_id，则此处应该填写部门的 department_id。

**示例值**："od-4e6ac4d14bcd5071a37a39de902c7141"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >ability</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	能力类型，按能力类型进行筛选，返回对应能力的活跃数据

**示例值**："app"

**可选值有**：
<md-enum>
<md-enum-item key="app" >返回应用整体的数据，指标值包括：uv：活跃用户数，total_users：累计用户数，new_users：新增用户数，pv：在应用（小程序或网页）中访问的页面数，lifecycle：打开应用（小程序或网页）的次数</md-enum-item>
<md-enum-item key="mp" >返回小程序能力的数据，指标值包括：uv（小程序活跃用户数）、pv（用户在小程序中的访问页面数）、lifecycle（小程序的打开次数）</md-enum-item>
<md-enum-item key="h5" >返回网页能力的数据，指标值包括：uv（网页应用活跃用户数）、pv（用户在网页应用中的访问页面数）、lifecycle（网页应用的打开次数）</md-enum-item>
<md-enum-item key="bot" >返回机器人能力的数据，指标值包括：uv（机器人的活跃用户数）</md-enum-item>
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
    "date": "2021-07-26",
    "cycle_type": 1,
    "department_id": "od-bb009b4df5431400dc31d3bc8a37e069",
    "ability": "app"
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
	员工使用应用概览数据
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
                "metric_name": "uv",
                "metric_value": 0
            },
            {
                "metric_name": "total_users",
                "metric_value": 2
            },
            {
                "metric_name": "new_users",
                "metric_value": 0
            },
            {
                "metric_name": "pv",
                "metric_value": 0
            },
            {
                "metric_name": "lifecycle",
                "metric_value": 0
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
  <md-td>400</md-td>
  <md-td>211005</md-td>
  <md-td>invalid app id</md-td>
  <md-td>检查 app id</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211006</md-td>
  <md-td>invalid department id</md-td>
  <md-td>检查 department id</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211007</md-td>
  <md-td>invalid date format</md-td>
  <md-td>检查 date 字段的格式是否符合"2021-07-01"</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211008</md-td>
  <md-td>invalid ability</md-td>
  <md-td>检查 ability 取值是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211009</md-td>
  <md-td>invalid cycle type</md-td>
  <md-td>检查 cycle_type 取值是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>211010</md-td>
  <md-td>invalid date range</md-td>
  <md-td>检查 date 的取值范围是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>211011</md-td>
  <md-td>data not found</md-td>
  <md-td>数据不存在。可能是该应用在目标查询日期范围内没有数据。请检查请求参数</md-td>
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
      <md-td>小程序应用活跃用户数</md-td>
      <md-td>-   打开小程序的唯一用户数，按用户ID去重</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>

    </md-tr>
         <md-tr>
      <md-td>网页应用活跃用户数</md-td>
      <md-td>-   打开网页应用的唯一用户数，按用户ID去重
-   只统计飞书内webview容器部分的数据，不包含三方浏览器容器的内容</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>

    </md-tr>
         <md-tr>
      <md-td>机器人应用活跃用户数</md-td>
      <md-td>-   满足以下条件之一就算作机器人的活跃用户：

    -   机器人消息已读
    -   主动给机器人发消息

-   单个统计周期内按照用户ID合并去重；</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>


    </md-tr>


     <md-tr>
      <md-td>应用活跃用户数</md-td>
      <md-td>-   满足以下条件之一就算作应用的活跃用户：

    -   打开小程序
    -   打开h5
    -   给机器人发消息
    -   阅读机器人消息

-   单个统计时间周期内按 用户ID去重计数，以上所有条件合并去重</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据</md-td>


    </md-tr>

     <md-tr>
      <md-td>应用累计用户数</md-td>
      <md-td>- 历史上所有使用过应用的用户数</md-td>
      <md-td>-   由于累计用户数与时间周期无关，所以只支持截止到某一天的累计用户数

    -   即cycle_type只能为1
- 只支持查看应用粒度的累计用户数，不支持区分小程序网页和机器人。

    -	即 ability 只能为 app
-   注：累计用户数会包含离职人员的统计，所以可能会出现累计用户数大于租户成员数的情况</md-td>


    </md-tr>
    <md-tr>
      <md-td>应用新增用户数</md-td>
      <md-td>- 统计周期内首次访问的唯一用户数</md-td>
      <md-td>-   支持查看某一天/某一周/某一个月的数据

 - 只支持查看应用粒度的累计用户数，不支持区分小程序网页和机器人。

    -	即 ability 只能为 app
      </md-td>


    </md-tr>
 <md-tr>
      <md-td>应用打开次数</md-td>
      <md-td>- 在飞书客户端内打开应用（小程序或网页）的次数</md-td>
      <md-td>
 - 当ability为app、h5、mp时返回具体数据，当ability为bot时返回为空。
 - 注：当用户主动退出应用或切换至其他应用超 5min 后记为一次打开
      </md-td>
    </md-tr>
 <md-tr>
      <md-td>页面访问数</md-td>
      <md-td>- 在应用（小程序或网页）中访问的页面次数</md-td>
      <md-td>
 - 当ability为app、h5、mp时返回具体数据，当ability为bot时返回为空。
 - 注：若应用使用过程中切换到其他应用，再切换回飞书打开此应用时，pv会增加
      </md-td>
    </md-tr>

</md-tbody>
</md-table>
:::


