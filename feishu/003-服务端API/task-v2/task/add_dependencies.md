<!--
title: 添加依赖
id: 7277445986133458947
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/task/add_dependencies
updatedAt: 1694419127000
source: https://open.feishu.cn/document/task-v2/task/add_dependencies
-->
# 添加依赖

为一个任务添加一个或多个依赖。可以添加任务的前置依赖和后置依赖。存在依赖关系的任务如果在同一个清单，可以通过清单的甘特图来展示其依赖关系。

本接口也可以用于修改一个现有依赖的类型（前置改为后置或者后置改为前置）。

注意：添加的依赖的`task_guid`不能重复，也不能添加当前任务为自己的依赖。尝试添加一个已经存在的依赖会被自动忽略。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=task&version=v2&resource=task&method=add_dependencies)

:::html
<md-alert type="tip">
添加任务依赖需要调用身份拥有当前任务的编辑权限和所有被添加为依赖的任务的编辑权限。
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
      <md-td>https://open.feishu.cn/open-apis/task/v2/tasks/:task_guid/add_dependencies</md-td>
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
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="task:task:write" desc="查看、创建、更新、删除任务" support_app_types="custom,isv" tags="">查看、创建、更新、删除任务</md-perm>
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
	<md-text type="field-name" >task_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务GUID

**示例值**："93b7bd05-35e6-4371-b3c9-6b7cbd7100c0"
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
	<md-text type="field-name" >dependencies</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_dependency\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要添加的依赖

**数据校验规则**：

- 长度范围：`1` ～ `50`
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
	依赖类型

**示例值**："next"

**可选值有**：
<md-enum>
<md-enum-item key="prev" >前置依赖</md-enum-item>
<md-enum-item key="next" >后置依赖</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >task_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	依赖任务的GUID

**示例值**："93b7bd05-35e6-4371-b3c9-6b7cbd7100c0"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "dependencies": [
        {
            "type": "next",
            "task_guid": "93b7bd05-35e6-4371-b3c9-6b7cbd7100c0"
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >dependencies</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_dependency\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	被添加后任务的所有依赖
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
	依赖类型

**可选值有**：
<md-enum>
<md-enum-item key="prev" >前置依赖</md-enum-item>
<md-enum-item key="next" >后置依赖</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	依赖任务的GUID
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
        "dependencies": [
            {
                "type": "next",
                "task_guid": "93b7bd05-35e6-4371-b3c9-6b7cbd7100c0"
            }
        ]
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
  <md-td>1470400</md-td>
  <md-td>请求参数有误，如依赖类型是非法的类型等。</md-td>
  <md-td>具体错误原因参考返回的错误信息。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1470403</md-td>
  <md-td>缺少任务的编辑权限</md-td>
  <md-td>调用身份需要拥有添加依赖的任务和被添加为依赖的任务的编辑权限。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1470404</md-td>
  <md-td>要添加依赖的任务不存在或已删除。</md-td>
  <md-td>确认要添加依赖的任务和被添加为依赖的任务均存在或未被删除。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1470500</md-td>
  <md-td>服务器错误。</md-td>
  <md-td>服务器内部错误。服务器内部错误。若多次重试调用后持续出错可以联系支持。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




