<!--
title: 下载妙记音视频文件
id: 7289369210564345884
fullPath: /uAjLw4CM/ukTMukTMukTM/minutes-v1/minute-media/get
updatedAt: 1750217053000
source: https://open.feishu.cn/document/minutes-v1/minute-media/get
-->
# 下载妙记音视频文件

获取妙记的音视频文件{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=minutes&version=v1&resource=minute.media&method=get)

:::html
<md-alert type="tip">
通过接口获取妙记音视频文件的下载链接（有效期1天），以进行批量下载
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
      <md-td>https://open.feishu.cn/open-apis/minutes/v1/minutes/:minute_token/media</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[5 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="minutes:minute:download" desc="导出妙记文件" support_app_types="custom,isv" tags="">导出妙记文件</md-perm>
            <md-perm name="minutes:minutes.media:export" desc="下载妙记的音视频文件" support_app_types="custom,isv" tags="">下载妙记的音视频文件</md-perm>
            <md-alert type="tip" icon="none">
              “导出妙记文件”权限不再开放，已添加权限的应用不受影响，新应用请使用“下载妙记的音视频文件”权限。
            </md-alert>
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
	<md-text type="field-name" >minute_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	妙记唯一标识。可从妙记的 URL 链接中获取，一般为最后一串字符：https://sample.feishu.cn/minutes/==obcnq3b9jl72l83w4f14xxxx==


**示例值**："obcnq3b9jl72l83w4f149w9c"

**数据校验规则**：

- 长度范围：`24` ～ `24` 字符
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
	<md-text type="field-name" >download_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	妙记音视频文件下载链接
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
        "download_url": "https://internal-api-drive-stream.feishu-boe.cn/space/api/box/stream/download/authcode/?code=xxx"
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
  <md-td>2091001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>检查参数是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>2091002</md-td>
  <md-td>resource not found</md-td>
  <md-td>无法找到对应妙记，检查Token是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2091003</md-td>
  <md-td>minute not ready , try later</md-td>
  <md-td>检查妙记是否转写完成</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2091004</md-td>
  <md-td>resource deleted</md-td>
  <md-td>检查妙记是否已被删除</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>2091005</md-td>
  <md-td>permission deny</md-td>
  <md-td>检查是否有该篇妙记的阅读权限</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>2091006</md-td>
  <md-td>service internal error</md-td>
  <md-td>服务器出错，请稍后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




