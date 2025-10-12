<!--
title: 简介
id: 7112636765656481794
fullPath: /home/agile-project-cycle-management-based-on-bitable/introduction
updatedAt: 1688374142000
source: https://open.feishu.cn/document/agile-project-cycle-management-based-on-bitable/introduction
-->
# 简介

本教程介绍如何使用多维表格进行敏捷项目管理，通过日历开放能力将项目版本迭代周期创建为公开日历，供全团队订阅。

## 流程简介

本教程将按照以下流程调用飞书开放接口，实现多维表格中的项目版本迭代周期时间创建为公共日历。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ddb6d82cfa77b0b7a7dfea372ae96b8d_hMbYeLUuRQ.png?height=896&lazyload=true&maxWidth=750&width=918)


## 实现效果

* 多维表格中的数据表数据如下：

  ![图片](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f78a79b38ac482dca91414a608861cf_crbfUj0MC1.png?height=603&lazyload=true&maxWidth=750&width=1640)
  
* 创建出的**项目版本迭代周期**公开日历，效果如下：

  ![图片](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bf17814814b631ae292e05221618116_MffNfp8VWz.png?height=727&lazyload=true&maxWidth=750&width=1640)
  
## 使用到的API列表

### 登录

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
                <md-text type="field-name" >[获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)

`GET` /open-apis/auth/v3/tenant_access_token/internal

> 获得访问其他接口需要用到的访问凭证
                </md-text>
            </md-td>
            <md-td>
                    
            </md-td>
            <md-td>
                
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

### 云文档

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
                <md-text type="field-name" >[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)

`GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records

> 列出多维表格数据表中的详细记录
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
              		<md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_update)

`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update

> 更新数据表中的多条记录
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[新增多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_create)

`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create

> 在数据表中新增多条记录
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[新增数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)

`POST` /open-apis/bitable/v1/apps/:app_token/tables

> 新增一个数据表
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)

`GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields

> 获取数据表的所有字段
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
                    <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[新增字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/create)

`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields

> 在数据表中新增一个字段
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/update)

`PUT` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id

> 在数据表中更新一个字段
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 日历

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
                <md-text type="field-name" >[创建日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/create)

`POST` /open-apis/calendar/v4/calendars

> 创建一个新日历
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及
日程信息</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)

`POST` /open-apis/calendar/v4/calendars/:calendar_id/events

> 身份由 Header Authorization 的 Token 类型决定。
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及
日程信息</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>

            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::
