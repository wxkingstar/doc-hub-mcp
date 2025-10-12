<!--
title: 步骤五：修改用户信息
id: 6997733381623562241
fullPath: /home/synchronize-corporate-organizational-structure-to-feishu/create-and-update-user-information
updatedAt: 1690279430000
source: https://open.feishu.cn/document/synchronize-corporate-organizational-structure-to-feishu/create-and-update-user-information
-->
# 步骤五：修改用户信息

本步骤调用[修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)接口，将`产品经理B`的直接主管修改为`产品经理A`。

## 操作步骤

1. 打开[API调试台](https://open.feishu.cn/api-explorer)工具。

2. 在左侧 **API 列表** 中，选择 **通讯录** > **用户** > **修改用户部分信息**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7e4352432dd7884c67f61e74901f30c_sCVQg4olYn.png?height=1394&lazyload=true&maxWidth=600&width=2882)

3. 依次完成以下参数配置，然后点击 **开始调试**。

    | **参数配置页签** | **配置说明** |
    | -- | -- |
    | **请求头**    | **Authorization**：系统已默认配置了 **tenant_access_token** 鉴权凭证。 |
    | **路径参数**   | **user_id**：填写已保存的`产品经理B`的用户 ID（`open_id`）。|
    | **查询参数**   | **user_id_type**：用户 ID 类型，此处选择`open_id`。<br>**department_id_type**：部门 ID 类型，此处选择`open_department_id`。 |
    | **请求体**    | 在右侧点击 **只看必填参数**。该接口的请求体中没有必填参数，本示例操作仅修改直属领导 ID（`leader_user_id`）参数。<br>请求体 JSON 格式示例配置：`{"leader_user_id":"ou_7cc09cd7da60ba16e69a6a05ee77xxxx"}`<br>参数说明：<br>**leader_user_id**：当前用户的直接主管的用户 ID。此处填写`产品经理A`对应的`open_id`。 |
    
    调用成功的响应数据如下图所示。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/542862b31eab479f72516f429a7b7481_iiPVwy5xY0.png?height=1416&lazyload=true&maxWidth=600&width=2882)