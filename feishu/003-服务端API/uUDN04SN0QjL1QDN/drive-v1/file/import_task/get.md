<!--
title: 查询导入任务结果
id: 6987581325629931521
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get
updatedAt: 1728634581000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/import_task/get
-->
# 查询导入结果

根据[创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)返回的导入任务 ID（ticket）轮询导入结果。了解完整的导入文件步骤，参考[导入文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=import_task&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/import_tasks/:ticket</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="docs:document:import" desc="查看、创建云文档导入任务" support_app_types="custom,isv" tags="">查看、创建云文档导入任务</md-perm>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
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
	<md-text type="field-name" >ticket</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导入任务 ID。调用[创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create) 获取

**示例值**："7369583175086912356"
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
	<md-text type="field-name" >result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >import_task</md-text>
	</md-dt-td>
	<md-dt-td>
	导入结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ticket</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导入任务 ID
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
	导入的在线云文档类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的状态

**可选值有**：
<md-enum>
<md-enum-item key="0" >导入成功。但需关注是否有 extra 参数返回。如果源文件内容超过系统上限，将被系统截断，此时将返回 extra 参数，进行额外提示。extra 参数说明见本文末尾。</md-enum-item>
<md-enum-item key="1" >初始化</md-enum-item>
<md-enum-item key="2" >处理中</md-enum-item>
<md-enum-item key="3" >内部错误</md-enum-item>
<md-enum-item key="100" >导入文档已加密</md-enum-item>
<md-enum-item key="101" >内部错误</md-enum-item>
<md-enum-item key="102" >内部错误</md-enum-item>
<md-enum-item key="103" >内部错误</md-enum-item>
<md-enum-item key="104" >租户容量不足</md-enum-item>
<md-enum-item key="105" >文件夹节点太多</md-enum-item>
<md-enum-item key="106" >内部错误</md-enum-item>
<md-enum-item key="108" >处理超时</md-enum-item>
<md-enum-item key="109" >内部错误</md-enum-item>
<md-enum-item key="110" >无权限</md-enum-item>
<md-enum-item key="112" >格式不支持</md-enum-item>
<md-enum-item key="113" >office格式不支持</md-enum-item>
<md-enum-item key="114" >内部错误</md-enum-item>
<md-enum-item key="115" >导入文件过大</md-enum-item>
<md-enum-item key="116" >当前身份无导入至该文件夹的权限。参考[开通文件夹权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app#5ad9169a)解决</md-enum-item>
<md-enum-item key="117" >目录已删除</md-enum-item>
<md-enum-item key="118" >导入文件和任务指定后缀不匹配</md-enum-item>
<md-enum-item key="119" >目录不存在</md-enum-item>
<md-enum-item key="120" >导入文件和任务指定文件类型不匹配</md-enum-item>
<md-enum-item key="121" >导入文件已过期</md-enum-item>
<md-enum-item key="122" >创建副本中禁止导出</md-enum-item>
<md-enum-item key="129" >文件格式损坏。请另存为新文件后导入</md-enum-item>
<md-enum-item key="5000" >内部错误</md-enum-item>
<md-enum-item key="7000" >docx block 数量超过系统上限</md-enum-item>
<md-enum-item key="7001" >docx block 层级超过系统上线</md-enum-item>
<md-enum-item key="7002" >docx block 大小超过系统上限</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_error_msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务失败的原因
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导入云文档的 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导入云文档的 URL
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	导入成功的额外提示。详情参考下文。
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
        "result": {
            "ticket": "7369583175086912356",
            "type": "sheet",
            "job_status": 0,
            "job_error_msg": "success",
            "token": "Fm7osyjtMh5o7Ktrv32c73abcef",
            "url": "https://example.feishu.cn/sheets/Fm7osyjtMh5o7Ktrv32c73abcef",
            "extra": [
                "2000"
            ]
        }
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
  <md-td>500</md-td>
  <md-td>1069901</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069902</md-td>
  <md-td>no permission</md-td>
  <md-td>当前访问身份没有文档阅读或编辑权限。请参考以下方式解决：
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加文档权限。
- 如果你使用的是 `user_access_token`，意味着当前用户没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加文档权限。

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1069903</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)
</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069904</md-td>
  <md-td>invalid param</md-td>
  <md-td>无效参数。请检查文件扩展名参数 file_extension 与导入的文件的扩展名是否一致</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1069905</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)
</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069906</md-td>
  <md-td>docs deleted</md-td>
  <md-td>文档已被删除。请检查</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1069907</md-td>
  <md-td>file token not found</md-td>
  <md-td>文件 token 不存在。请检查要导入文件的 token 是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069908</md-td>
  <md-td>mount point not found or no permission</md-td>
  <md-td>挂载点对应的文件夹不存在，或当前身份无导入至该文件夹的权限。请参考以下步骤解决：
1. 检查文件夹的 token 是否填写正确
2. 检查当前身份是否有导入至文件夹的权限：
    - 如果你使用的是 `tenant_access_token`，意味着应用没有导入至当前文件夹的权限。你需要为该应用添加机器人能力，并将该文件夹分享给含有该机器人的群组，为该应用开通文件夹的编辑权限。
    - 如果你使用的是 `user_access_token`，意味着用户没有导入至当前文件夹的权限。你需将该文件夹分享给该用户身份，为用户开通文件夹的编辑权限。

了解具体操作步骤，参考[开通文件夹权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app#5ad9169a)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069909</md-td>
  <md-td>import file size over limit</md-td>
  <md-td>文件超过 20 MB 限制，无法导入</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069910</md-td>
  <md-td>import file extension not match</md-td>
  <md-td>上传文件和导入任务文件后缀不一致，请检查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069911</md-td>
  <md-td>import file type not match</md-td>
  <md-td>上传文件和导入任务指定的文件类型不一致，请检查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069912</md-td>
  <md-td>folder not exist</md-td>
  <md-td>目录不存在</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069913</md-td>
  <md-td>import file token expired</md-td>
  <md-td>上传文件过期，有效期 5 分钟</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069914</md-td>
  <md-td>invalid file token</md-td>
  <md-td>导出文档 token 不合法。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)了解如何获取文档 token。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

## extra 额外信息提示
如果源文件内容超过系统上限，将被系统截断，此时将返回 extra 参数，进行额外提示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">提示码</md-th>
      <md-th style="width: 80%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1000</md-td>
      <md-td>导入内容块数量超出新版文档最大限制（上限 2 万个），超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1001</md-td>
      <md-td>导入表格单元格数量超出新版文档最大限制（上限 2000 个），超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1002</md-td>
      <md-td>导入表格列数超出新版文档最大限制（上限 100 列），超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1003</md-td>
      <md-td>导入单段文本字数超出新版文档最大限制（上限 10 万个 UTF-16 字符），超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1005</md-td>
      <md-td>文档部分图片上传失败。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2000</md-td>
      <md-td>表格列数超过最大限制，超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2001</md-td>
      <md-td>表格单元格数超过最大限制，超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2002</md-td>
      <md-td>表格图片超过 4000 张，超出的图片被丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2003</md-td>
      <md-td>云空间存储空间不足，请联系企业管理员。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2004</md-td>
      <md-td>表格部分图片上传失败。</md-td>
    </md-tr>
    <md-tr>
      <md-td>2005</md-td>
      <md-td>表格单元格字符长度超过最大限制，超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3000</md-td>
      <md-td>多维表格图片超出数据行区域会丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3001</md-td>
      <md-td>多维表格图片超出数据列区域会丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3003</md-td>
      <md-td>多维表格列数超过最大限制，超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3004</md-td>
      <md-td>多维表格单元格数超过最大限制，超出的部分将被截断丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3005</md-td>
      <md-td>多维表格图片超过 4000 张，超出的图片被丢弃。</md-td>
    </md-tr>
    <md-tr>
      <md-td>3006</md-td>
      <md-td>多维表格部分图片上传失败。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


