<!--
title: 获取画板缩略图片
id: 7398376458043310083
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard/download_as_image
updatedAt: 1758177352000
source: https://open.feishu.cn/document/docs/board-v1/whiteboard/download_as_image
-->
# 下载画板为图片

获取画板的缩略图片，响应数据为 Content-Type=image/png 的二进制图片流。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=board&version=v1&resource=whiteboard&method=download_as_image)

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
      <md-td>https://open.feishu.cn/open-apis/board/v1/whiteboards/:whiteboard_id/download_as_image</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[10 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="board:whiteboard:node:read" desc="查看画板节点" support_app_types="custom,isv" tags="">查看画板节点</md-perm>
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
	<md-text type="field-name" >whiteboard_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	画板唯一标识。可通过文档接口 [获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list) 获取，`block_type` 为 43 的 block 即为画板，对应的 <code>block.token</code> 就是画板的<code>whiteboard_id</code>。


**示例值**："Ru8nwrWFOhEmaFbEU2VbPRsHcxb"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应



HTTP状态码为 200 时，表示成功

返回文件二进制流



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
  <md-td>参数格式不正确。请检查传入的参数格式</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2890002</md-td>
  <md-td>invalid arg</md-td>
  <md-td>参数无效。请检查传入的参数是否有效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2890003</md-td>
  <md-td>record missing</md-td>
  <md-td>找不到记录。`whiteboard_id` 不存在或图片不存在。请检查</md-td>
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
  <md-td>请求超过接口频率限流值。请稍后再试</md-td>
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




