<!--
title: 分片上传文件-预上传
id: 6979562676003815452
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_prepare
updatedAt: 1735881801000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/upload/multipart-upload-file-/upload_prepare
-->
# 分片上传文件-预上传

发送初始化请求，以获取上传事务 ID 和分片策略，为[上传分片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_part)做准备。平台固定以 4MB 的大小对文件进行分片。了解完整的上传文件流程，参考[上传文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/multipart-upload-file-/introduction)。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=file&method=upload_prepare)

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

## 注意事项

上传事务 ID 和上传进度在 24 小时内有效。请及时保存和恢复上传。

## 使用限制

- 该接口不支持并发调用，且调用频率上限为 5 QPS，10000 次/天。否则会返回 1061045 错误码，可通过稍后重试解决。
- 上传文件的大小限制因飞书版本而异，详情参考[文件上传、在线预览的大小及格式要求](https://www.feishu.cn/hc/zh-CN/articles/360049067549-%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0-%E5%9C%A8%E7%BA%BF%E9%A2%84%E8%A7%88%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%8F%8A%E6%A0%BC%E5%BC%8F%E8%A6%81%E6%B1%82)。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/files/upload_prepare</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
            <md-perm name="drive:file:upload" desc="上传文件" support_app_types="custom,isv" tags="">上传文件</md-perm>
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

::: note
更多云文档接口权限问题，参考[常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。
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
	<md-text type="field-name" >file_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文件的名称

**示例值**："test.txt"

**数据校验规则**：

- 最大长度：`250` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	上传点的类型。取固定值 explorer，表示将文件上传至云空间中。

**示例值**："explorer"

**可选值有**：
<md-enum>
<md-enum-item key="explorer" >云空间</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_node</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云空间中文件夹的 token。了解如何获取文件夹 token，参考[文件夹概述](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview)。

**示例值**："fldbcO1UuPz8VwnpPx5a92abcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文件的大小，单位为字节。

**示例值**：1024

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "file_name": "test.txt",
    "parent_type": "explorer",
    "parent_node": "fldbcO1UuPz8VwnpPx5a92abcef",
    "size": 1024
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
	<md-text type="field-name" >upload_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分片上传事务 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >block_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	分片大小策略
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >block_num</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	分片的数量
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
        "upload_id": "7111211691345512356",
        "block_size": 4194304,
        "block_num": 1
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
  <md-td>200</md-td>
  <md-td>1061001</md-td>
  <md-td>internal error.</md-td>
  <md-td>服务内部错误，包括超时、错误码没处理等。

**注意**：
上传文件接口不支持直接将文件上传至知识库，请先将文件上传至文件夹后再移动至知识库。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061002</md-td>
  <md-td>params error.</md-td>
  <md-td>请检查请求参数是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1061004</md-td>
  <md-td>forbidden.</md-td>
  <md-td>当前调用身份没有文件或文件夹的阅读或编辑等权限。请参考以下方式解决：

- 若上传素材，请确保当前调用身份具有目标云文档的编辑权限
- 若上传文件，请确保当前调用身份具有文件夹的编辑权限
- 若对文件或文件夹进行增删改等操作，请确保调用身份具有足够文档权限：
    - 对于新建文件接口，调用身份需要有目标文件夹的编辑权限
    - 对于复制文件接口，调用身份需要有文件的阅读或编辑权限、并且具有目标文件夹的编辑权限
    - 对于移动文件接口，调用身份需要有被移动文件的可管理权限、被移动文件所在位置的编辑权限、目标位置的编辑权限
    - 对于删除文件接口，调用身份需要具有以下两种权限之一：
        - 该应用或用户是文件所有者并且具有该文件所在父文件夹的编辑权限
        - 该应用或用户并非文件所有者，但是该文件所在父文件夹的所有者或者拥有该父文件夹的所有权限（full access）

了解开通权限步骤，参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1061022</md-td>
  <md-td>file version conflict.</md-td>
  <md-td>文件版本号冲突。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061043</md-td>
  <md-td>file size beyond limit.</md-td>
  <md-td>请检查文件大小以避免超出限制。详情参考飞书帮助中心[云盘文件上传大小限制](https://www.feishu.cn/hc/zh-CN/articles/360049067549)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061044</md-td>
  <md-td>parent node not exist.</md-td>
  <md-td>`parent_node` 不存在。请确认上传点 token 是否有误：
- 对于上传文件接口，请参考[文件夹 token 获取方式](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview#-717d325)确认是否填写了正确的文件夹 token
- 对于上传素材接口，请参考[上传点类型和上传点 token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction#cc82be3c) 确认 `parent_node` 是否填写正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061109</md-td>
  <md-td>file name cqc not passed.</md-td>
  <md-td>请确保上传的文件和文件名合规。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061101</md-td>
  <md-td>file quota exceeded.</md-td>
  <md-td>租户容量超限，请确保租户有足够容量进行上传。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061061</md-td>
  <md-td>user quota exceeded.</md-td>
  <md-td>个人容量超限，请确保个人有足够容量进行上传。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1061073</md-td>
  <md-td>no scope auth.</md-td>
  <md-td>没有申请接口权限。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1064230</md-td>
  <md-td>locked for data migration</md-td>
  <md-td>数据迁移中，暂时无法上传。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062507</md-td>
  <md-td>parent node out of sibling num.</md-td>
  <md-td>云空间目录下挂载数量超过限制（单层**1500**限制 ）。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




