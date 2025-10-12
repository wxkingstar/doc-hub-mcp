<!--
title: 搜索云文档
id: 6907569523177439233
fullPath: /ukTMukTMukTM/ugDM4UjL4ADO14COwgTN
updatedAt: 1749454584000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/search/document-search
-->
# 搜索云文档

该接口用于根据搜索关键词（search_key）对当前用户可见的云文档进行搜索。


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
      <md-td>https://open.feishu.cn/open-apis/suite/docs-api/search/object</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云文档所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云文档所有文件</md-perm>
<md-perm name="drive:drive:readonly" desc="查看、评论和下载云文档所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云文档所有文件</md-perm>
<md-perm name="search:docs:read" desc="搜索云文档" support_app_types="custom,isv" tags="">开通此权限后可搜索用户有权限的云文档</md-perm>
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
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
      	<md-td>
通过访问凭证（access_token）对调用者身份进行鉴权。可选值：
          
- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：用户授权凭证。应用代表用户执行对应操作。示例值："Bearer u-7f1bcd13fc57d46bac21793aabcef"
了解更多，参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::
### 请求体

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">参数</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 20%;">必须</md-th>
      <md-th>说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>search_key</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      <md-td>
        指定搜索的关键字。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>count</md-td>
      <md-td>int</md-td>
      <md-td>否</md-td>
      <md-td>
        指定搜索返回的文件数量。取值范围为 [0,50]。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>offset</md-td>
      <md-td>int</md-td>
      <md-td>否</md-td>
      <md-td>
        指定搜索的偏移量，该参数最小为 0，即不偏移。该参数的值与返回的文件数量之和不得大于或等于 200（即 offset + count < 200）。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>owner_ids</md-td>
      <md-td>list&lt;string&gt;</md-td>
      <md-td>否</md-td>
      <md-td>
        文件所有者的 Open ID。了解更多，参考[如何获取 Open ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>chat_ids</md-td>
      <md-td>list&lt;string&gt;</md-td>
      <md-td>否</md-td>
      <md-td>
        文件所在群的 ID。了解更多，参考[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>docs_types</md-td>
      <md-td>list&lt;string&gt;</md-td>
      <md-td>否</md-td>
      <md-td>文件类型，支持以下枚举：
- `doc`：文档，包括旧版文档（doc）和新版文档（docx）
- `sheet`：电子表格
- `slides`：幻灯片
- `bitable`：多维表格
- `mindnote`：思维笔记
- `file`：文件 </md-td>
       </md-tr>
      </md-tbody>
        </md-thead>
       
      </md-table>

:::

### 请求体示例
```json
{
    "search_key": "项目",
    "count": 10, 
    "offset": 0,
    "owner_ids": ["13eabcef"],
    "chat_ids": [],
    "docs_types": ["doc", "sheet"]
}
```
## 响应
### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 40%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 30%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >docs_entities</md-text>
</md-dt-td>
 <md-dt-td>
<md-text type="field-type" >docs_entities\[\]</md-text>
 </md-dt-td>
 <md-dt-td>
包含搜索关键词的文件列表
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >docs_token</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
文件的 token
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >docs_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
	文件的类型
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >title</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
文件的标题
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >owner_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
文件的所有者
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >has_more</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
结果列表后是否还有数据
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >total</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
	包含搜索关键词的文件总数量
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 响应体示例

```json
{
    "code": 0,
    "data": {
        "docs_entities": [
            {
                "docs_token": "shtcnLkpxnlYksumuGNZM1abcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "项目进展周报"
            },
            {
                "docs_token": "shtcnHO7UvaulkYDXCyQraabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "项目管理十大模板"
            },
            {
                "docs_token": "shtcnO2W1D0YqKZ5TY9z3Cabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "项目甘特图"
            },
            {
                "docs_token": "shtcnGVvAVJdohCOnmQvMNabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "工作周计划"
            },
            {
                "docs_token": "shtcnwdKlAT243SF95pokXabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "面试记录"
            },
            {
                "docs_token": "shtcnfgRI0jwwY0ISPSlRlabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "工作月计划"
            },
            {
                "docs_token": "shtcnfsEaTYMVTwT0DbNolabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "团队文件资料库"
            },
            {
                "docs_token": "shtcn3grVqPADzPt08RiFnabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": " 费用报销单"
            },
            {
                "docs_token": "shtcne3WuFpvRbSsG3SLL7abcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "费用预算表"
            },
            {
                "docs_token": "IVGMsOakbhd96It63kkc3aabcef",
                "docs_type": "sheet",
                "owner_id": "ou_b97fbe610114d9489ff3b501a71abcef",
                "title": "团建日程安排"
            }
        ],
        "has_more": true,
        "total": 59
    },
    "msg": "success"
}
```
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。

