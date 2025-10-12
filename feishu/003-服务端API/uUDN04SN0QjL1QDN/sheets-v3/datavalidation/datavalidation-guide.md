<!--
title: 数据校验概述
id: 6943917246700273666
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/datavalidation-guide
updatedAt: 1723618722000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/datavalidation/datavalidation-guide
-->
# 数据校验概述

数据校验用于限制电子表格单元格中的数据类型或用户输入单元格的值。目前，电子表格支持下拉列表相关接口，用于验证数据。

## 下拉列表


下拉列表是验证数据有效性的一种方式。通过设置下拉列表，用户可以限制单元格中输入的内容必须为指定的值，从而保证数据的准确性和规范性。

另外，下拉列表也可用于信息整理、打标分类的场景。用户通过设置下拉列表中的颜色属性，使下拉列表中的选项更具区分度；还可设置下拉列表中选项的单选或多选属性，适应多样场景。

如下图，"性别"和"能力属性"列设置了下拉列表，限制用户可输入的内容必须为选项的值，且设置了下拉列表的颜色和单选多选属性。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7d6e6ddb3e5e187b32e3c64b2d62ccd4_x8I164hQB9.png?height=1050&lazyload=true&maxWidth=600&width=1740)

## 方法列表

以下为下拉列表的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
:::html
<md-table>
    <md-thead>
<tr>
    <md-th style="width: 35%;"><b>方法 (API)</md-th>
    <md-th style="width: 30%;"><b>权限要求（满足任一）</md-th>
    <md-th style="width: 20%;"><b>访问凭证</md-th>
    <md-th style="width: 10%;"><b>商店</md-th>
    <md-th style="width: 10%;"><b>自建</md-th>
</tr>
    </md-thead>
    <md-tbody>
<md-tr>
    <md-td>
<md-text type="field-name">`POST` [设置下拉列表](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/set-dropdown) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>

    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>
<md-tr>
    <md-td>
<md-text type="field-name">`PUT` [更新下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation/:sheetId/:dataValidationId</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`GET` [查询下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
      
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`DELETE` [删除下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>




    </md-tbody>
</md-table>

:::