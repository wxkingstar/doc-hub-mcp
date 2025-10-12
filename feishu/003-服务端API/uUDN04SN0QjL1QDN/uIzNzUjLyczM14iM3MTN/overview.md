<!--
title: 权限概述
id: 7094085681875124252
fullPath: /ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/overview
updatedAt: 1751544843000
source: https://open.feishu.cn/document/server-docs/docs/permission/overview
-->
# 权限概述

权限是指在云文档相关资源中，应用或用户对各类云文档资源，如文件夹、文档、电子表格、多维表格、知识库等的可阅读、可编辑、可管理等权限。本文档介绍云文档权限相关的基本概念、接入流程、方法列表等。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a7cacfdf42252efc5b796eae7081dd12_6XW39EJYzg.png?height=763&lazyload=true&maxWidth=300&width=595)
## 基本概念
以下为云文档权限相关的基础概念。了解更多，参考飞书帮助中心文档[云文档权限概念介绍](https://www.feishu.cn/hc/zh-CN/articles/329948394104-%E4%BA%91%E6%96%87%E6%A1%A3%E6%9D%83%E9%99%90%E6%A6%82%E5%BF%B5%E4%BB%8B%E7%BB%8D)。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">概念</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>云文档</md-td>
      <md-td>飞书提供文档、表格、多维表格等多种内容类型，你也可以将本地文件上传至飞书云文档。以上内容统称为云文档。</md-td>
    </md-tr>
    <md-tr>
      <md-td>所有者</md-td>
      <md-td>云文档、文件、文件夹的所有者。</md-td>
    </md-tr>
    <md-tr>
      <md-td>协作者</md-td>
      <md-td>有可阅读、可编辑或可管理权限的云文档、文件、文件夹的成员。</md-td>
    </md-tr>
    <md-tr>
      <md-td>协作者权限</md-td>
      <md-td>云文档和文件夹支持 3 种权限类型：阅读、编辑、管理。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可阅读</md-td>
      <md-td>- 有可阅读权限的协作者只能阅读文档和文件夹内的文档内容。
 - 可移除同为可阅读权限的协作者。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可编辑</md-td>
      <md-td>- 有可编辑权限的协作者可以阅读、编辑文档和文件夹内的文档内容。
- 可修改、移除有阅读、可编辑权限的协作者。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可管理</md-td>
      <md-td>- 有可管理权限的协作者可以阅读、编辑文档和文件夹内的文档内容。
- 可修改、移除有阅读、编辑、可管理权限的协作者。
- 可管理文档权限设置。
- 文档所有者的权限类型也是可管理权限，且可转移文档所有权。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


## 接入流程
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 8%;">序号</md-th>
      <md-th style="width: 25%;">步骤</md-th>
      <md-th style="width: 70%;">操作方法</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1</md-td>
      <md-td>创建应用</md-td>
      <md-td>根据应用的使用场景选择[创建企业自建应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process) 或[创建应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)</md-td>
    </md-tr>
    <md-tr>
      <md-td>2</md-td>
      <md-td>申请接口调用权限</md-td>
      <md-td>根据需要调用的[接口文档](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)中描述的「**权限要求**」到[开发者后台](https://open.feishu.cn/app)[申请应用权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#af863cb3)</md-td>
    </md-tr>
    <md-tr>
      <md-td>3</md-td>
      <md-td>访问应用自有资源</md-td>
      <md-td>[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)使用 tenant_access_token 可以直接访问应用自有资源： [文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)、[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)</md-td>
    </md-tr>
    <md-tr>
      <md-td>4</md-td>
      <md-td>访问用户自有资源</md-td>
      <md-td>[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)使用 user_access_token 可以直接访问用户自有资源： [文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)、[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)</md-td>
    </md-tr>
    <md-tr>
      <md-td>5</md-td>
      <md-td>使用tenant_access_token<br>访问应用非自有资源</md-td>
      <md-td>
1. 访问其他用户的[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
需要取得[文档所有者](/ssl:ttdoc/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN)的授权
	- 需要**应用**开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)
	- 需要所有者打开对应的文档，在页面右上方「**...**」->「**...更多**」-> 「**添加文档应用**」入口添加
        
2. 访问 [知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)需要获得知识库管理员的授权
	- 需要**应用**开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)
    - 需要知识库管理员打开知识库节点文档，在页面右上方「**...**」->「**...更多**」-> 「**添加文档应用**」入口添加</md-td>
    </md-tr>
    <md-tr>
      <md-td>6</md-td>
      <md-td>使用user_access_token<br>访问用户非自有资源</md-td>
      <md-td>
1. 访问其他用户的[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
需要取得[文档所有者](/ssl:ttdoc/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN)的授权
	- 需要所有者打开对应的文档，在页面右上方「**分享**」入口添加
2. 访问其他用户[文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)需要取得文件夹所有者的授权
    - 需要所有者在**我的空间**找到目标文件夹，右键菜单中「**分享**」入口添加
3. 访问[知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)需要获得知识库管理员的授权
    - 需要知识库管理员打开知识库节点文档，在页面右上方「**分享**」入口添加</md-td>
    </md-tr>
    <md-tr>
      <md-td>7</md-td>
      <md-td>接口测试</md-td>
      <md-td>你可以在 [API 调试台![API cn.svg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/90b013d1fc7c191381d3edd6cf147707_3VtIkELbfg.svg?height=24&lazyload=true&width=87)](https://open.feishu.cn/api-explorer?from=guide)中快速调试这些 API ，使用方法参见[API 调试台使用指南](/ssl:ttdoc/tools-and-resources/api-explorer-guide) </md-td>
    </md-tr>
    <md-tr>
      <md-td>8</md-td>
      <md-td>事件订阅</md-td>
      <md-td>需要到[开发者后台](https://open.feishu.cn/app)[配置事件回调地址](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM#2eb3504a),确保回调地址公网可访问。可参考[事件监听示例](/ssl:ttdoc/home/develop-a-bot-in-5-minutes/create-an-app)、[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM#2eb3504a)</md-td>
    </md-tr>
    <md-tr>
      <md-td>9</md-td>
      <md-td>日志检索</md-td>
      <md-td>当调用接口返回失败时，从返回的header部分获取 X-Tt-Logid: `20220501181xxx8035096193288FA`。<br>
再到应用管理后台，用[服务端日志检索](/ssl:ttdoc/tools-and-resources/open-api-log-query) 分析问题。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 
## 资源介绍

云文档的权限由 **成员** 和 **设置** 两部分资源组成。参考本小节了解权限相关接口的资源说明。

### 成员

权限成员分为 **文档所有者** 和 **文档协作者**。



:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">成员</md-th>
      <md-th style="width: 20%;">描述</md-th>
      <md-th style="width: 70%;">支持成员及 ID 类型</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>
        文档所有者
      </md-td>
      <md-td>
        云文档、文件、文件夹的所有者。
      </md-td>
      <md-td>
        - 用户，支持用户邮箱、用户的 OpenID、UnionID 或 UserID。获取方式参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)
 - 应用，支持应用的 OpenID。获取方式参考[如何获取应用 open_id](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#6dbaa8df)
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        文档协作者
      </md-td>
      <md-td>
        有可阅读、可编辑或可管理权限的云文档、文件、文件夹的成员。
      </md-td>
      <md-td>
   - 用户，支持用户邮箱、用户的 OpenID、UnionID 或 UserID。获取方式参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)
 - 应用，支持应用的 OpenID。获取方式参考[如何获取应用 open_id](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#6dbaa8df)
- 群组，支持 `chat_id`，获取方式参考[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
 - 部门，支持 `open_department_id`，获取方式参考[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)
 - 自定义用户组，支持 `group_id` ，获取方式参考[用户组资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/overview)
 - 知识库成员，支持 `wikispaceid`，获取方式参考[知识库概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


### 设置
权限设置具体的权限点如下所示：

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%;">权限点</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>允许内容被分享到组织外</md-td>
      <md-td>支持允许内容仅被分享给关联组织。解关联组织，参考飞书帮助中心文档[关联组织介绍](https://www.feishu.cn/hc/zh-CN/articles/657083794612-%E5%85%B3%E8%81%94%E7%BB%84%E7%BB%87%E4%BB%8B%E7%BB%8D)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可以复制内容</md-td>
      <md-td>设置谁可以复制内容，支持设置仅可阅读、仅可编辑、仅可管理的人可复制内容。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可以创建副本、打印、下载</md-td>
      <md-td>设置谁可以创建副本、打印、下载，支持设置仅可阅读、仅可编辑、仅可管理的人可创建副本、打印、下载。</md-td>
    </md-tr>
    <md-tr>
      <md-td>可以评论</md-td>
      <md-td>设置谁可以评论，支持设置仅可阅读、仅可编辑的人可评论。</md-td>
    </md-tr>
    <md-tr>
      <md-td>谁可以查看、添加、移除协作者</md-td>
      <md-td>支持两个维度设置：
-   从企业组织维度，设置谁可以查看、添加、移除协作者
- 从协作者维度，设置设置谁可以查看、添加、移除协作者</md-td>
    </md-tr>
    <md-tr>
      <md-td>链接分享设置</md-td>
      <md-td>支持设置仅关联组织的可通过链接编辑或阅读。</md-td>
    </md-tr>
    <md-tr>
      <md-td>密码</md-td>
      <md-td>**链接分享** 设置为“互联网获得链接的人可编辑/可阅读”后，支持启用密码。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 方法列表

### 成员

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 20%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 20%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[增加协作者权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)

`POST` /open-apis/drive/v1/permissions/:token/members
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新协作者权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/update)

`PUT` /open-apis/drive/v1/permissions/:token/members/:member_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[移除协作者权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/delete)

`DELETE` /open-apis/drive/v1/permissions/:token/members/:member_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[判断协作者是否有某权限](/ssl:ttdoc/ukTMukTMukTM/uYzN3UjL2czN14iN3cTN)

`POST` /open-apis/drive/permission/member/permitted
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="drive:file:readonly" desc="查看和下载云空间中的文件" support_app_types="custom,isv" tags="">查看和下载云空间中的文件</md-perm>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出表格" support_app_types="custom,isv" tags="">查看、评论和导出表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取协作者列表](/ssl:ttdoc/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN)

`POST` /open-apis/drive/permission/member/list
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="drive:file:readonly" desc="查看和下载云空间中的文件" support_app_types="custom,isv" tags="">查看和下载云空间中的文件</md-perm>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出表格" support_app_types="custom,isv" tags="">查看、评论和导出表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[转移拥有者](/ssl:ttdoc/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN)

`POST` /open-apis/drive/permission/member/transfer
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::



### 权限设置

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 20%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 20%;">权限要求（满足任一）</md-th>
            <md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取云文档权限设置](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/drive-v2/permission-public/get)

`GET` /open-apis/drive/v2/permissions/:token/public
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新云文档权限设置](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/drive-v2/permission-public/patch)

`PATCH` /open-apis/drive/v2/permissions/:token/public
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>

         <md-tr>
            <md-td>
                <md-text type="field-name" >[启用云文档密码](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public-password/create)

`POST` /open-apis/drive/v2/permissions/:token/public/password
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
         <md-tr>
            <md-td>
                <md-text type="field-name" >[刷新云文档密码](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public-password/update)

`PUT` /open-apis/drive/v2/permissions/:token/public/password
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
         <md-tr>
            <md-td>
                <md-text type="field-name" >[停用云文档密码](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public-password/delete)

`DELETE` /open-apis/drive/v2/permissions/:token/public/password
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>
                **✓**
            </md-td>
            <md-td>
                **✓**
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::



