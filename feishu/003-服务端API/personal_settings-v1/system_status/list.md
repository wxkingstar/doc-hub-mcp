<!--
title: 获取系统状态
id: 7161608966368755715
fullPath: /uAjLw4CM/ukTMukTMukTM/personal_settings-v1/system_status/list
updatedAt: 1689134249000
source: https://open.feishu.cn/document/server-docs/personal_settings-v1/system_status/list
-->
# 获取系统状态

获取租户下所有系统状态。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=personal_settings&version=v1&resource=system_status&method=list)

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
      <md-td>https://open.feishu.cn/open-apis/personal_settings/v1/system_statuses</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            <md-perm name="personal_settings:status:system_status_update" desc="获取与更新系统状态" support_app_types="custom" tags="">获取与更新系统状态</md-perm>
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
</md-tbody>
</md-table>
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
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小

**示例值**：50

**默认值**：`50`

**数据校验规则**：

- 取值范围：`1` ～ `50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhUPhXQDvtrQ==
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-type" >system_status\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	租户系统状态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >system_status_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	系统状态ID
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
	系统状态名称，名称字符数要在1到20范围内。不同系统状态的title不能重复。

 **注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >i18n_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >system_status_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	系统状态国际化名称，名称字符数要在1到20范围内。不同系统状态之间i18n_title中任何一种title都不能重复。

 **注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >icon_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图标

[**了解icon_key可选值**](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/personal_settings-v1/system_status/overview)

**可选值有**：
<md-enum>
<md-enum-item key="GeneralDoNotDisturb" >GeneralDoNotDisturb</md-enum-item>
<md-enum-item key="GeneralInMeetingBusy" >GeneralInMeetingBusy</md-enum-item>
<md-enum-item key="Coffee" >Coffee</md-enum-item>
<md-enum-item key="GeneralBusinessTrip" >GeneralBusinessTrip</md-enum-item>
<md-enum-item key="GeneralWorkFromHome" >GeneralWorkFromHome</md-enum-item>
<md-enum-item key="StatusEnjoyLife" >StatusEnjoyLife</md-enum-item>
<md-enum-item key="GeneralTravellingCar" >GeneralTravellingCar</md-enum-item>
<md-enum-item key="StatusBus" >StatusBus</md-enum-item>
<md-enum-item key="StatusInFlight" >StatusInFlight</md-enum-item>
<md-enum-item key="Typing" >Typing</md-enum-item>
<md-enum-item key="EatingFood" >EatingFood</md-enum-item>
<md-enum-item key="SICK" >SICK</md-enum-item>
<md-enum-item key="GeneralSun" >GeneralSun</md-enum-item>
<md-enum-item key="GeneralMoonRest" >GeneralMoonRest</md-enum-item>
<md-enum-item key="StatusReading" >StatusReading</md-enum-item>
<md-enum-item key="Status_PrivateMessage" >Status_PrivateMessage</md-enum-item>
<md-enum-item key="StatusFlashOfInspiration" >StatusFlashOfInspiration</md-enum-item>
<md-enum-item key="GeneralVacation" >GeneralVacation</md-enum-item>
</md-enum>
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
	颜色

**可选值有**：
<md-enum>
<md-enum-item key="BLUE" >蓝色</md-enum-item>
<md-enum-item key="GRAY" >灰色</md-enum-item>
<md-enum-item key="INDIGO" >靛青色</md-enum-item>
<md-enum-item key="WATHET" >浅蓝色</md-enum-item>
<md-enum-item key="GREEN" >绿色</md-enum-item>
<md-enum-item key="TURQUOISE" >绿松石色</md-enum-item>
<md-enum-item key="YELLOW" >黄色</md-enum-item>
<md-enum-item key="LIME" >酸橙色</md-enum-item>
<md-enum-item key="RED" >红色</md-enum-item>
<md-enum-item key="ORANGE" >橙色</md-enum-item>
<md-enum-item key="PURPLE" >紫色</md-enum-item>
<md-enum-item key="VIOLET" >紫罗兰色</md-enum-item>
<md-enum-item key="CARMINE" >胭脂红色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >priority</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	优先级，数值越小，客户端展示的优先级越高。不同系统状态的优先级不能一样。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sync_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >system_status_sync_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	同步设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_open_by_default</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否默认开启
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	同步设置名称，名称字符数要在1到30范围内。

**注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >i18n_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >system_status_sync_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	同步设置国际化名称，名称字符数要在1到30范围内。

**注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >explain</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	同步设置解释文案，解释字符数要在1到60范围内。

**注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >i18n_explain</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >system_status_sync_i18n_explain</md-text>
	</md-dt-td>
	<md-dt-td>
	同步设置国际化解释文案，解释字符数要在1到60范围内。

**注意：** 
- 1中文=2英文=2其他语言字符=2字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
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
        "items": [
            {
                "system_status_id": "7101214603622940633",
                "title": "出差",
                "i18n_title": {
                    "zh_cn": "出差",
                    "en_us": "On business trip",
                    "ja_jp": "出張中"
                },
                "icon_key": "GeneralBusinessTrip",
                "color": "BLUE",
                "priority": 1,
                "sync_setting": {
                    "is_open_by_default": true,
                    "title": "出差期间自动开启",
                    "i18n_title": {
                        "zh_cn": "出差期间自动开启",
                        "en_us": "Auto display Business Trip",
                        "ja_jp": "出張中に自動的にオンにする"
                    },
                    "explain": "出差审批通过后，将自动开启并优先展示该状态。",
                    "i18n_explain": {
                        "zh_cn": "出差审批通过后，该状态将自动开启并优先展示",
                        "en_us": "Auto-display after travel request is approved.",
                        "ja_jp": "申請が承認されると、このステータスが優先的に表示されます"
                    }
                }
            }
        ],
        "page_token": "GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhUPhXQDvtrQ==",
        "has_more": true
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
  <md-td>2005001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，请根据接口返回的错误信息并参考文档检查输入参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2005007</md-td>
  <md-td>Tenant does not have permission to api.</md-td>
  <md-td>租户没有访问api权限。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




