<!--
title: 素材概述
id: 6979562676003782684
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction
updatedAt: 1749436509000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/media/introduction
-->
#  素材概述
本文档介绍云空间中素材相关能力的基础概念、相关接口和 extra 参数说明等。

## 基础概念

素材指在文档、电子表格、多维表格等中用到的资源素材，如文档中的图片、视频或文件等。每个素材都有唯一的 token 作为标识。

## 素材 token 获取方式

飞书开放平台支持在在线文档、电子表格、多维表格中上传和下载素材。在不同的云文档中，素材 token 的获取方式不同。具体方式如下所示：
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 20%;">素材所在文档类型</md-th>  
      <md-th style="width: 50%;">素材 token 获取方式</md-th>  
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>
        在线文档
      </md-td>  
      <md-td>
通过[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)接口获取指定文件块（File Block）或图片块（Image Block）等，其中的 token 参数即为素材 token。
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td>
        电子表格
      </md-td>  
      <md-td>
通过[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)接口获取指定附件的 `fileToken` 参数，即为素材的 token。
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td>
        多维表格
      </md-td>  
      <md-td>
通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取指定附件的 `file_token`参数，即为素材的 token。
      </md-td> 
    </md-tr>  
  </md-tbody> 
</md-table>
:::

## 上传素材说明

上传素材指将本地环境的各类文件上传至云文档中。飞书开放平台支持在在线文档、电子表格、多维表格中上传素材。


  :::html
  <md-alert type="warn">
上传素材相关接口不支持并发调用，且调用频率上限为 5 QPS，10000 次/天。否则会返回 1061045 错误码，可通过稍后重试解决。  </md-alert>
  :::
### 上传点类型和上传点 token

要将指定素材上传到指定云文档中，你需先确定上传点的类型（`parent_type`）和上传点的 token（`parent_node`），再调用上传接口。下表列出不同上传场景对应的上传点类型和上传点 token 说明。

:::note
要在知识库文档中上传图片或文件，你需先调用[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取当前知识库文档的实际 token，再根据下列上传场景，确定上传点 token 的值。
:::

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">上传场景</md-th>
      <md-th style="width: 20%;">上传点类型（parent_type）</md-th>
      <md-th>上传点 token （parent_node）</md-th>
      <md-th>token 示例值</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>在新版文档中上传图片</md-td>
      <md-td>docx_image</md-td>
     
      <md-td>
        传入新版文档块的唯一标识 `block_id`，表示将图片素材上传到新版文档的指定[图片块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block#a6f35866)中。了解在文档中插入图片的完整步骤，参考[文档常见问题-如何插入图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#1908ddf0)。 </md-td> <md-td> doxcnXgNGAtaAraIRVeCfmabcef</md-td>
      
    </md-tr>
    <md-tr>
      <md-td>在新版文档中上传文件</md-td>
      <md-td>docx_file</md-td>
      <md-td>
        传入新版文档块的唯一标识 `block_id`，表示将文件素材上传到新版文档的指定[文件块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block#2b183663)中。了解在文档中插入文件的完整步骤，参考[文档常见问题-如何插入文件/附件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#891c2784)。 
      </md-td><md-td> doxcnXgNGAtaAraIRVeCfmabcef</md-td>
    </md-tr>
    <md-tr>
      <md-td>在电子表格中上传图片</md-td>
      <md-td>sheet_image</md-td>
      <md-td>
        传入电子表格的唯一标识 `spreadsheet_token`，表示将图片素材上传到指定电子表格中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。图片完成上传后，你可继续使用[写入图片](/ssl:ttdoc/ukTMukTMukTM/uUDNxYjL1QTM24SN0EjN)等接口将图片写入电子表格具体位置。
      </md-td><md-td> MRLOWBf6J47ZUjmwYRsN8uabcef</md-td>
    </md-tr>
    <md-tr>
      <md-td>在电子表格中上传文件</md-td>
      <md-td>sheet_file</md-td>
      <md-td>
        传入电子表格的唯一标识 `spreadsheet_token`，表示将文件素材上传到指定电子表格中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。 
      </md-td><md-td> MRLOWBf6J47ZUjmwYRsN8uabcef</md-td>
    </md-tr>
    <md-tr>
      <md-td>在多维表格中上传图片</md-td>
      <md-td>bitable_image</md-td>
      <md-td>
        传入多维表格的唯一标识 `app_token`，表示将图片素材上传到指定多维表格中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。 了解在多维表格中插入图片的完整步骤，参考[多维表格常见问题-如何在多维表格中上传附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/faq)。
      </md-td> <md-td> Pc9OpwAV4nLdU7lTy71t6Kabcef</md-td>
    </md-tr>
    <md-tr>
      <md-td>在多维表格中上传文件</md-td>
      <md-td>bitable_file</md-td>
      <md-td>
        传入多维表格的唯一标识 `app_token`，表示将文件素材上传到指定多维表格中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。了解在多维表格中插入附件的完整步骤，参考[多维表格常见问题-如何在多维表格中上传附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/faq)。
      </md-td><md-td> Pc9OpwAV4nLdU7lTy71t6Kabcef</md-td>
    </md-tr>
    <md-tr>
      <md-td>上传素材至云空间</md-td>
      <md-td>ccm_import_open</md-td>
      <md-td>
        无需填写，该场景用于导入文件，详情参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。
      </md-td><md-td> /</md-td>
    </md-tr>
    <md-tr>
      <md-td>在旧版文档中上传图片（旧版文档已下线，已不推荐使用）</md-td>
      <md-td>doc_image</md-td>
      <md-td>
        传入旧版文档的唯一标识 `doc_token`，表示将图片素材上传到指定旧版文档中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。 
      </md-td>  <md-td>2olt0Ts4Mds7j7iqzdwrqEabcef</md-td> 
    </md-tr>
    <md-tr>
      <md-td>在旧版文档中上传文件（旧版文档已下线，已不推荐使用）</md-td>
      <md-td>doc_file</md-td>
      <md-td>
        传入旧版文档的唯一标识 `doc_token`，表示将文件素材上传到指定旧版文档中，[点击了解如何获取云文档 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。 
      </md-td> <md-td>2olt0Ts4Mds7j7iqzdwrqEabcef</md-td> 
    </md-tr>
  </md-tbody>
</md-table>
:::

### 接口说明

飞书开放平台提供了多个上传素材接口。你需根据上传素材的大小，选择合适的方式：
- 若当前网络连接稳定且素材大小不超过 20 MB，直接调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)；
- 若当前网络连接不稳定，或素材大小超过 20 MB，你需依次调用以下分片上传素材接口，对素材定长分片上传，减少单次带宽使用，提高上传成功率。该上传方式支持开发者依据分片上传进度展示整体素材的上传进度，且支持一天内恢复上传。
  1. [分片上传素材-预上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)
     
     发送初始化请求，以获取上传事务 ID 和分片策略，为上传素材分片做准备。平台固定以 4MB 的大小对素材进行分片。
     
     
  2. [分片上传素材-上传分片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_part)
     
     根据预上传接口返回的上传事务 ID 和分片策略上传对应的素材分片。
     
     
  3. [分片上传素材-完成上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_finish)
    
     调用上传分片接口将分片全部上传完毕后，你可调用本接口触发完成上传。

## extra 参数说明

对于以下上传与下载素材场景，你需要填写 extra 参数。
  :::html
  <md-alert type="warn">
- extra 参数类型为字符串，对象类型需要转成字符串作为入参。
如果是直接通过 URL 进行访问，需要对字符串进行 URL 编码，将其放置在 URL 查询中。
- API 调试台页面填写的 extra 参数无需编码转义。</md-alert>
  :::


### 上传素材至云文档


在以下上传场景中，需通过 extra 参数传入素材所在云文档的 token。extra 参数的格式为 `"{\"drive_route_token\":\"素材所在云文档的 token\"}"`。以下示例值未转义，实际使用中请注意转义。

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 15%;">上传场景</md-dt-th>
<md-dt-th style="width: 30%;">extra 参数值示例（未转义）</md-dt-th>
<md-dt-th style="width: 40%;">云文档 token 获取方式</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr>
<md-dt-td>在文档中上传图片</md-dt-td>
<md-dt-td>{"drive_route_token":"doxcnXgNGAtaAraIRVeCfmabcef"}</md-dt-td>
<md-dt-td>参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)获取 token，即文档的 `document_id`。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>在文档中上传文件</md-dt-td>
<md-dt-td>{"drive_route_token":"doxcnXgNGAtaAraIRVeCfmabcef"}</md-dt-td>
<md-dt-td>参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)获取 token，即文档的 `document_id`。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>在电子表格中上传图片</md-dt-td>
<md-dt-td>{"drive_route_token":"MRLOWBf6J47ZUjmwYRsN8uabcef"}</md-dt-td>
<md-dt-td>参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)获取 token，即电子表格的 `spreadsheetToken`。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>在电子表格中上传文件</md-dt-td>
<md-dt-td>{"drive_route_token":"MRLOWBf6J47ZUjmwYRsN8uabcef"}</md-dt-td>
<md-dt-td>参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)获取 token，即电子表格的 `spreadsheetToken`。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>在多维表格中上传图片</md-dt-td>
<md-dt-td>{"drive_route_token":"Pc9OpwAV4nLdU7lTy71t6Kabcef"}</md-dt-td>
<md-dt-td>参考[多维表格概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)获取多维表格的 token。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>在多维表格中上传文件</md-dt-td>
<md-dt-td>{"drive_route_token":"Pc9OpwAV4nLdU7lTy71t6Kabcef"}</md-dt-td>
<md-dt-td>参考[多维表格概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)获取多维表格的 token。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::



### 上传素材至云空间

上传素材至云空间的场景通常与导入文件场景关联，详情参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。在该场景下，上传点类型（`parent_type`）为 `ccm_import_open`，上传点 token（`parent_node`）无需填写。`extra` 参数需要填入 json 序列化后的字符串。填写示例如下所示。


-   将本地文件扩展名为 txt 的文件导入为新版文档：
    ```json
    "{ "obj_type": "docx","file_extension": "txt"}"
    ```

-   将本地文件扩展名为 xlsx 的文件导入为电子表格：
    ```
    "{ "obj_type": "sheet","file_extension": "xlsx"}"
    ```
- 将本地文件扩展名为 md 的文件导入为新版文档：
    ```
    "{ "obj_type": "docx","file_extension": "md"}"
    ```
- 将本地文件扩展名为 markdown 的文件导入为新版文档：
    ```
    "{ "obj_type": "docx","file_extension": "markdown"}"
    ```
### 下载多维表格中的素材


对于设置了高级权限的多维表格，在调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)或者[获取素材临时下载链接](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url)接口时，需要添加 extra 参数作为 URL 查询参数鉴权。若不添加 extra 参数将返回 HTTP 400 状态码。你可通过以下方式获取 extra 参数：

1. 调用[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口，响应中将包含附件的下载链接，示例如下所示：
```json
{
  "code": 0,
  "data": {
    "has_more": false,
    "items": [
      {
        "fields": {
          "附件": [
            {
              "file_token": "RSkabsaphoy6yVxK0mGcggabcef",
              "name": "74d2c703524489dbabcef.png",
              "size": 87123,
              "tmp_url": "https://open.feishu.cn/open-apis/drive/v1/medias/batch_get_tmp_download_url?file_tokens=RSkabsaphoy6yVxK0mGcggabcef&extra={"bitablePerm":{"tableId":"tblz8ExGaVhuiSD1","rev":32}}",  // 素材临时下载链接对应的 URL 值，需要对此字符串进行 URL 编码
              "type": "image/png",
              "url": "https://open.feishu.cn/open-apis/drive/v1/medias/RSkabsaphoy6yVxK0mGcggabcef/download?extra={"bitablePerm":{"tableId":"tblz8ExGaVhuiSD1","rev":32}}"   // 下载素材对应的 URL 值，需要对此字符串进行 URL 编码
            }
          ]
        },
        "record_id": "recbMzD0zT"
      }
    ],
    "total": 1
  },
  "msg": "success"
}
```

构建 extra 参数的步骤和示例如下所示：

1. 获取素材所在 table 的 `tableId`，构建 Extra 对象；
1. 根据附件所在的字段、记录 ID 和文件 token，填写 attachments 参数。其中 attachments 的第一个 key 为字段 ID，第二个 key 为记录 ID，value 为文件 token 数组；
  :::html
  <md-alert type="warn">
  attachments 为必填参数。不填可能导致时延过长，接口调用失败。
  </md-alert>
  :::
  
3. 序列化 Extra 对象成字符串；
4. 对此字符串进行 URL 编码，将其放置在 URL 查询中。

```JSON
{"bitablePerm":{"tableId":"tblO6OeNZxfabcef","attachments":{"fld32zZi5I":{"rec0BuOHq":["boxbcsQNT0JsmrztOnX530abcef"]}}}}
// 转义后
https://open.feishu.cn/open-apis/drive/v1/medias/boxbcsQNT0JsmrztOnX530abcef/download?extra=%7B%22bitablePerm%22%3A%7B%22tableId%22%3A%22tblO6OeNZxfabcef%22%2C%22attachments%22%3A%7B%22fld32zZi5I%22%3A%7B%22rec0BuOHq%22%3A%5B%22boxbcsQNT0JsmrztOnX530abcef%22%5D%7D%7D%7D%7D
```

## 方法列表

以下为素材的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><b>方法 (API)</b></md-th>
            <md-th style="width: 30%;"><b>权限要求（满足任一）</b></md-th>
            <md-th style="width: 20%;"><b>访问凭证（选择其一）</b></md-th>
            <md-th><b>商店</b></md-th>
            <md-th><b>自建</b></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name">[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)POST /open-apis/drive/v1/medias/upload_all</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
                <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                <md-perm name="docs:document.media:upload" desc="上传图片和附件到云文档中" support_app_types="custom,isv" tags="">上传图片和附件到云文档中</md-perm>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)GET /open-apis/drive/v1/medias/:file_token/download</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm><md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm><md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm><md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm><md-perm name="docs:document.media:download" desc="下载云文档中的图片和附件" support_app_types="custom,isv" tags="">下载云文档中的图片和附件</md-perm><md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm><md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">[获取素材临时下载链接](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url)GET /open-apis/drive/v1/medias/batch_get_tmp_download_url</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm><md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm><md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm><md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm><md-perm name="docs:document.media:download" desc="下载云文档中的图片和附件" support_app_types="custom,isv" tags="">下载云文档中的图片和附件</md-perm><md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm><md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">[分片上传素材-预上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)POST /open-apis/drive/v1/medias/upload_prepare</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm><md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm><md-perm name="docs:document.media:upload" desc="上传图片和附件到云文档中" support_app_types="custom,isv" tags="">上传图片和附件到云文档中</md-perm><md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">[分片上传素材-上传分片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_part)POST /open-apis/drive/v1/medias/upload_part</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm><md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm><md-perm name="docs:document.media:upload" desc="上传图片和附件到云文档中" support_app_types="custom,isv" tags="">上传图片和附件到云文档中</md-perm><md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">[分片上传素材-完成上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_finish)POST /open-apis/drive/v1/medias/upload_finish</md-text>
            </md-td>
            <md-td>
                <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm><md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm><md-perm name="docs:document.media:upload" desc="上传图片和附件到云文档中" support_app_types="custom,isv" tags="">上传图片和附件到云文档中</md-perm><md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm><md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag><br><md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::