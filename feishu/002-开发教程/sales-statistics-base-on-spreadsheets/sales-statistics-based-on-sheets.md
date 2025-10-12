<!--
title: 简介
id: 7111212983665704962
fullPath: /home/sales-statistics-base-on-spreadsheets/sales-statistics-based-on-sheets
updatedAt: 1688374277000
source: https://open.feishu.cn/document/sales-statistics-base-on-spreadsheets/sales-statistics-based-on-sheets
-->
# 简介

本教程介绍如何使用飞书开放能力，实现将外部销售额数据同步到电子表格，并对销售额进行总额统计。

## 流程简介

本教程将按照以下流程调用飞书开放接口，实现将外部销售额数据同步到电子表格。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ccfe0ee3e606107590eb1343d98a7fe_7lPmEzDoAb.png?height=967&lazyload=true&maxWidth=750&width=918)


## 实现效果

本教程最终创建的电子表格如下图所示：

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/be807e4931744d7c09d3b0e5bdcb880b_t3BSzchyQ1.png?&lazyload=true&width=1280&height=782lazyload=true&width=1280&height=782" style="width:70%">
:::
## 使用到的API列表

在当前场景中，需要调用云文档业务域的 API 列表：
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求（满足任一）</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取空间根目录](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)

`GET` /open-apis/drive/explorer/v2/root_folder/meta

> 获取云空间的根目录
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create)

`POST` /open-apis/sheets/v3/spreadsheets

> 使用该接口可以在指定的目录下创建电子表格
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/metainfo

> 该接口用于根据 spreadsheetToken 获取表格元数据
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[向多个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uEjMzUjLxIzM14SMyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_update

> 该接口用于根据 spreadsheetToken 和 range 向多个范围写入数据
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[批量设置单元格样式](/ssl:ttdoc/ukTMukTMukTM/uAzMzUjLwMzM14CMzMTN)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/styles_batch_update

> 该接口用于根据 spreadsheetToken、range 批量更新单元格样式
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[增加权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)

`POST` /open-apis/drive/v1/permissions/:token/members

> 该接口用于根据 filetoken 给用户增加文档的权限
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

