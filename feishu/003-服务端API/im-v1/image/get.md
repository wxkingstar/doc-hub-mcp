<!--
title: 下载图片
id: 6946222929790582812
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get
updatedAt: 1735820030000
source: https://open.feishu.cn/document/server-docs/im-v1/image/get
-->
# 下载图片

通过已上传图片的 Key 值下载图片。
{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=image&method=get)

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

## 前提条件

应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用限制

- 只能下载由当前机器人上传的图片，且上传时图片类型为 **用于发送消息**。**用于设置头像** 的图片暂不支持下载。
- 该接口仅适用于通过图片的 Key 下载图片。如果你需要下载用户发送消息内的资源文件，可使用[获取消息中的资源文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-resource/get)接口。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/images/:image_key</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            
      </md-th>
      <md-td>
            无
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
	<md-text type="field-name" >image_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图片的 Key，通过[上传图片](	/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口上传图片后，在返回结果中获取。

**示例值**："img_8d5181ca-0aed-40f0-b0d1-b1452132afbg"
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
  <md-td>234001</md-td>
  <md-td>Invalid request param.</md-td>
  <md-td>请求参数无效，请根据接口文档描述检查请求参数是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>234002</md-td>
  <md-td>Unauthorized.</md-td>
  <md-td>接口鉴权失败，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234005</md-td>
  <md-td>Image has been deleted</md-td>
  <md-td>资源不存在。请检查传入的资源信息是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234007</md-td>
  <md-td>App does not enable bot feature.</md-td>
  <md-td>应用没有启用机器人能力。启用方式参见[如何启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234008</md-td>
  <md-td>The app is not the resource sender</md-td>
  <md-td>当前应用不是资源的所有者，无法进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234041</md-td>
  <md-td>Tenant master key has been deleted, please contact the tenant administrator.</md-td>
  <md-td>租户加密密钥被删除，被加密的数据无法操作，请联系租户管理员。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234042</md-td>
  <md-td>Hybrid deployment tenant storage error, such as full storage space, please contact tenant administrator.</md-td>
  <md-td>租户的自定义存储发生错误，如存储空间已满等。请联系租户管理员或[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


