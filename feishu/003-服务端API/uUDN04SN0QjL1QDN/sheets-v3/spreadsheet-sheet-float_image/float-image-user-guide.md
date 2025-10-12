<!--
title: 浮动图片概述
id: 6976178542817214467
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide
updatedAt: 1725881496000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide
-->
# 浮动图片使用指南
本文档介绍云文档电子表格中浮动图片能力相关的参数和方法列表。
## 基本概念

浮动图片指悬浮在表格单元格上方的图片。图片大小可自行调整，不会随单元格大小而变化。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/07363a34184606065d8463a62442fa79_yn9GSUzRoS.png?height=659&lazyload=true&maxWidth=400&width=1010)

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/79ec5afffddd426a3827ad5a5ac23bfd_upTHnwSH1G.png?height=621&lazyload=true&maxWidth=400&width=686)
## 注意事项

- 电子表格只存储图片的 token。这意味着：
    - 在调用[创建浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create)接口之前，你需先调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[分片上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)上传图片至表格
    - 查询浮动图片和获取浮动图片接口只返回图片的 token。你需调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)和[获取素材临时下载链接](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url)下载图片
- 单个电子表格最多支持放置 4,000 张不同 token 的图片，即表格内不重复的图片（包括浮动图片和单元格图片）总数不超过 4,000 张。将相同 token 的图片多次放置在表格的不同位置，数量上仅算一张图片。

## 浮动图片参数

本小节介绍浮动图片中涉及的主要参数及其描述。

:::html

<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">浮动图片参数</md-th>
      <md-th style="width: 70%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>float_image_id</md-td>
      <md-td>工作表内浮动图片的唯一标识。用于对图片进行增删改查操作。可选择自定义，也可不传由系统自动生成。自定义需要满足字符长度为 10，可由 0-9、a-z、A-Z 组合而成。</md-td>
    </md-tr>
    <md-tr>
      <md-td>float_image_token</md-td>
      <md-td>浮动图片的 token，用于图片的上传和下载操作。
 -   通过[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[分片上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)获得。
- 通过该 token，调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)接口下载图片。</md-td>
    </md-tr>
    <md-tr>
      <md-td>range</md-td>
      <md-td>浮动图片左上角所在单元格位置，格式为 `sheetId!{开始单元格}:{结束单元格}`，仅支持填写单个单元格，如 "ahgsch!A1:A1"。</md-td>
    </md-tr>
    <md-tr>
      <md-td>width</md-td>
      <md-td>如下图，浮动图片展示的宽度。创建浮动图片时不传会默认采用图片实际宽度，如果传则需要大于等于 20 像素。 
        
 ![image.png](//sf1-ttcdn-tos.pstatp.com/obj/open-platform-opendoc/5ba581c9134323943e6d5de6f45bc58e_Uw6DNDYQIG.png?height=438&lazyload=true&maxWidth=334&width=634)</md-td>
    </md-tr>
    <md-tr>
      <md-td>height</md-td>
      <md-td>如上图，浮动图片展示的高度，创建浮动图片时不传会默认采用图片实际高度，如果传则需要大于等于 20 像素。</md-td>
    </md-tr>
    <md-tr>
      <md-td>offset_x</md-td>
      <md-td>如上图，浮动图片左上角距离所在单元格左上角的横向偏移，单位为像素，默认为 0。设置的值需要大于等于 0、小于浮动图片左上角所在单元格的宽度。</md-td>
    </md-tr>
    <md-tr>
      <md-td>offset_y</md-td>
      <md-td>如上图，浮动图片左上角距离所在单元格左上角的纵向偏移，单位为像素，默认为 0。设置的值需要大于等于 0、小于浮动图片左上角所在单元格的高度。</md-td>
    </md-tr>
  </md-tbody>
</md-table>


:::

## 方法列表

以下为浮动图片的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
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
<md-text type="field-name">`POST` [创建浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images</md-text>
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
<md-text type="field-name">`POST` [更新浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/patch) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id</md-text>
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
<md-text type="field-name">`GET` [获取浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/get) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id </md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
<md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
      
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
<md-text type="field-name">`GET` [查询浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/query) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
<md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
<md-text type="field-name">`DELETE` [删除浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/delete) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id</md-text>
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
