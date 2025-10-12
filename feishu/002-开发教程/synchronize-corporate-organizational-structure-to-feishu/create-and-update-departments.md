<!--
title: 步骤四：修改部门信息
id: 6997733381623627777
fullPath: /home/synchronize-corporate-organizational-structure-to-feishu/create-and-update-departments
updatedAt: 1690279419000
source: https://open.feishu.cn/document/synchronize-corporate-organizational-structure-to-feishu/create-and-update-departments
-->
# 步骤四：修改部门信息

本步骤调用[修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)接口，将产品部的主负责人设置为`产品经理A`。

## 操作步骤

1. 打开[API调试台](https://open.feishu.cn/api-explorer)工具。

2. 在左侧 **API 列表** 中，选择 **通讯录** > **部门** > **修改部门部分信息**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fc6bf059fa5fd147ac40cdab3f657f7_DKNsb40Bfk.png?height=1416&lazyload=true&maxWidth=600&width=2882)

3. 依次完成以下参数配置，然后点击 **开始调试**。
       
    | **参数配置页签** | **配置说明** |
    | -- | -- |
    | **请求头**    | **Authorization**：系统已默认配置了 **tenant_access_token** 鉴权凭证。| 
    | **路径参数**   | **department_id**：填写已保存的产品部 ID（`open_department_id`）。|
    | **查询参数**   | **user_id_type**：用户 ID 类型，此处选择`open_id`。<br>**department_id_type**：部门 ID 类型，此处选择`open_department_id`。<br>**client_token**：该参数用于去重请求，此处保持空值即可。|
    | **请求体**    | 在右侧点击 **只看必填参数**。该接口的请求体中没有必填参数，本示例操作仅修改部门负责人（`leaders`）参数。<br>请求体 JSON 格式示例配置：`{"leaders":[{"leaderType":1,"leaderID":"ou_7cc09cd7da60ba16e69a6xxxx"}]}`<br>参数说明：<br>**leaderType**：负责人类型，此处填写`1`，表示主负责人。<br>**leaderID**：负责人ID，此处填写`产品经理A`对应的`open_id`。 |
    
    调用成功的响应数据如下图所示。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/29a43ef7d9ed4f16ac8cc02d7b899510_uZO1T47DPQ.png?height=1402&lazyload=true&maxWidth=600&width=2882)