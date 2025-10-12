<!--
title: 文档的数据结构
id: 7258094990436646940
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/document
updatedAt: 1713950831000
source: https://open.feishu.cn/document/docs/docs/data-structure/document
-->
# 文档的数据结构

文档（document）代表用户在云文档中创建的一篇在线文档。每篇文档都有唯一的 `document_id` 作为标识。从结构上看，每篇文档都是由多个块以父子关系形成的 Block 树。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3afeecbc5410c1d3a9e89a2a86d89d65_pMYDFf5Fmc.png?height=1721&lazyload=true&width=3059)

## 数据结构

`document` 的基础元数据结构如下所示。你可通过调用[获取文档基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/get)接口获取。要了解文档内块的结构，参考[块的数据结构](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block)。

```JSON
"document": {
    "document_id": string, // 文档的唯一标识
    "revision_id": int,   // 文档版本的标识，可指定要查询或更新的文档版本
    "title": string, // 文档标题
    "display_setting": { // 文档展示设置
        "show_authors": boolean, // 文档信息中是否展示文档作者
        "show_comment_count": boolean, // 文档信息中是否展示评论总数
        "show_create_time": boolean, // 文档信息中是否展示文档创建时间
        "show_like_count": boolean, // 文档信息中是否展示点赞总数
        "show_pv": boolean, // 	文档信息中是否展示文档访问次数
        "show_uv": boolean  // 文档信息中是否展示文档访问人数
    },
    "cover": {  // 文档封面
        "token": string, // 封面图片的 token
        "offset_ratio_x": float, // 视图在水平方向的偏移比例
        "offset_ratio_y": float // 视图在垂直方向的偏移比例
    }
}
```

## 参数描述

上述结构中，参数的具体描述如下表所示。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 24%;"><b>参数名称</md-th>
            <md-th style="width: 9%;"><b>数据类型</md-th>
            <md-th style="width: 9%;"><b>是否必须</md-th>
            <md-th style="width: 13%;"><b>示例值</md-th>
            <md-th style="width: 40%;"><b>描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>document_id</md-td>
            <md-td>string</md-td>
            <md-td>required</md-td>
            <md-td>TLLKdcpDro9ijQxA33ycNMabcef</md-td>
            <md-td>文档的唯一标识，也是该文档对应的页面 Block 的 ID。<br>了解如何获取 document_id，参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>revision_id</md-td>
            <md-td>int</md-td>
            <md-td>required</md-td>
            <md-td>378</md-td>
            <md-td>文档版本的标识，指定要查询或更新的文档版本。文档被编辑或评论会导致 revision_id 更改。<br>取值范围为：-1 或 0 < revision_id <= 文档最新版本。其中，-1 表示文档最新版本。<br>文档创建后，版本为 1。<br>**注意**：revision_id 发生更改通常意味着文档更新，但不一定是文档内容的变化，也有可能是文档被他人评论所致。</md-td>
        </md-tr>
        <md-tr>
            <md-td>title</md-td>
            <md-td>string</md-td>
            <md-td>required</md-td>
            <md-td>工作周报</md-td>
            <md-td>文档标题，只支持返回纯文本。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting</md-td>
            <md-td>object</md-td>
            <md-td>optional</md-td>
            <md-td>/</md-td>
            <md-td>文档展示设置。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_authors</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>true</md-td>
            <md-td>文档信息中是否展示文档作者。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_create_time</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>true</md-td>
            <md-td>文档信息中是否展示文档创建时间。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_pv</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>false</md-td>
            <md-td>文档信息中是否展示文档访问次数。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_uv</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>false</md-td>
            <md-td>文档信息中是否展示文档访问人数。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_like_count</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>false</md-td>
            <md-td>文档信息中是否展示点赞总数。</md-td>
        </md-tr>
        <md-tr>
            <md-td>display_setting.show_comment_count</md-td>
            <md-td>boolean</md-td>
            <md-td>required</md-td>
            <md-td>false</md-td>
            <md-td>文档信息中是否展示评论总数。</md-td>
        </md-tr>
        <md-tr>
            <md-td>cover</md-td>
            <md-td>object</md-td>
            <md-td>optional</md-td>
            <md-td></md-td>
            <md-td>文档封面</md-td>
        </md-tr>
        <md-tr>
            <md-td>cover.token</md-td>
            <md-td>string</md-td>
            <md-td>required</md-td>
            <md-td>D6d9bkdH7onNylxKyvucm8abcef</md-td>
            <md-td>图片 token</md-td>
        </md-tr>
        <md-tr>
            <md-td>cover.offset_ratio_x</md-td>
            <md-td>float</md-td>
            <md-td>required</md-td>
            <md-td>0</md-td>
            <md-td>视图在水平方向的偏移比例。其值为距离原图中心的水平方向偏移值 px / 原图宽度 px。视图在原图中心时，该值为 0；视图在原图右部分时，该值为正数；视图在原图左部分时，改值为负数。默认为 0。</md-td>
        </md-tr>
        <md-tr>
            <md-td>cover.offset_ratio_y</md-td>
            <md-td>float</md-td>
            <md-td>required</md-td>
            <md-td>0</md-td>
            <md-td>视图在垂直方向的偏移比例。其值为距离原图中心的垂直方向偏移值 px / 原图高度 px。视图在原图中心时，该值为 0；视图在原图上部分时，该值为正数；视图在原图下部分时，改值为负数。默认为 0。</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::
        
        