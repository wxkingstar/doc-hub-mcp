<!--
title: 群公告的数据结构
id: 7472290559531270147
fullPath: /uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/data-structure/group-announcement-data-structure
updatedAt: 1743663928000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/group-announcement-data-structure
-->
# 群公告的数据结构

群公告是群组中的公告文档，采用飞书云文档承载，每个群组只有一个群公告，每篇群公告都有唯一的`chat_id`作为标识。从结构上看，每篇群公告都是由多个块以父子关系形成的 Block 树。

## 群公告数据结构

`group_announcement`的基础元数据结构如下所示。你可通过调用[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)接口获取。

```JSON
{
    "revision_id": int,    // 群公告当前版本号
    "create_time": int,    // 群公告生成的时间戳（秒）
    "update_time": int,    // 群公告更新的时间戳（秒）
    "owner_id": string,    // 群公告所有者 ID
    "owner_id_type": string,    // 群公告所有者的 ID 类型
    "modifier_id": string,    // 群公告最新修改者 ID
    "modifier_id_type": string,    // 群公告最新修改者 ID 类型
    "announcement_type": string    // 群公告类型，新版群公告为 docx，旧版群公告为 doc
}
```

### 参数描述

上述结构中，参数的具体描述如下表所示。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 24%;"><b>参数名称</md-th>
            <md-th style="width: 10%;"><b>数据类型</md-th>
            <md-th style="width: 15%;"><b>示例值</md-th>
            <md-th style="width: 51%;"><b>描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>revision_id</md-td>
            <md-td>int</md-td>
            <md-td>42</md-td>
            <md-td>群公告当前版本号</md-td>
        </md-tr>
        <md-tr>
            <md-td>create_time</md-td>
            <md-td>int</md-td>
            <md-td>1609296809</md-td>
            <md-td>群公告生成的时间戳（秒）</md-td>
        </md-tr>
        <md-tr>
            <md-td>update_time</md-td>
            <md-td>int</md-td>
            <md-td>1609296809</md-td>
            <md-td>群公告更新的时间戳（秒）</md-td>
        </md-tr>
        <md-tr>
            <md-td>owner_id</md-td>
            <md-td>string</md-td>
            <md-td>ou_7d8a6e6df7621556ce0d21922b676706ccs</md-td>
            <md-td>公告文档所有者 ID，ID 类型与 owner_id_type 的取值一致。</md-td>
        </md-tr>
        <md-tr>
            <md-td>owner_id_type</md-td>
            <md-td>string</md-td>
            <md-td>open_id</md-td>
            <md-td>
群公告所有者的 ID 类型

**可选值有：**

* `user_id`：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。

* `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。

* `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。
          </md-td>
        </md-tr>
        <md-tr>
            <md-td>modifier_id</md-td>
            <md-td>string</md-td>
            <md-td>ou_7d8a6e6df7621556ce0d21922b676706ccs</md-td>
            <md-td>群公告最新修改者 ID，ID 值与 modifier_id_type 中的ID类型对应</md-td>
        </md-tr>
        <md-tr>
            <md-td>modifier_id_type</md-td>
            <md-td>string</md-td>
            <md-td>open_id</md-td>
            <md-td>
群公告最新修改者 ID 类型

**可选值有：**
              
* `user_id`：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。

* `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。

* `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。
          </md-td>
        </md-tr>
        <md-tr>
            <md-td>announcement_type</md-td>
            <md-td>string</md-td>
            <md-td>docx</md-td>
            <md-td>
群公告类型

可选值有：

* `docx`：新版本群公告
              
* `doc`：旧版本群公告
          
          </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::
        
## 块数据结构

群公告块的数据结构与文档中块的数据结构格式相同，数据结构详情参考：[文档中块的数据结构](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block)。
       