<!--
title: 步骤四：向部门内的成员批量发送消息
id: 6999971130074497052
fullPath: /home/mass-messaging-to-designated-departments/message-card-reference
updatedAt: 1690277453000
source: https://open.feishu.cn/document/mass-messaging-to-designated-departments/message-card-reference
-->
# 步骤四：向部门内的成员批量发送消息

调用[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM) OpenAPI，指定部门 ID 向该部门内的成员批量发送消息。

## 操作步骤

1. 获取应用访问凭证（tenant_access_token）。
    
    具体操作参见[步骤二：获取访问凭证](/ssl:ttdoc/home/mass-messaging-to-designated-departments/search-and-view-departmental-information)。

2. 调用 API。
    

	批量发送消息 OpenAPI 目前无法通过[API调试台](https://open.feishu.cn/api-explorer)工具直接调用，因此你需要自行配置 HTTP 请求进行调用。本教程提供第三方调试工具（以 Postman 为例）的调用方式，供你参考。

    
    1. 构建一个 POST 请求，请求地址为`https://open.feishu.cn/open-apis/message/v4/batch_send/`。
    
    2. **Authorization Type** 选择 **Bearer Token**，并填写已获取的应用访问凭证（tenant_access_token）。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0678efe091a1dd6f9d9eb4cb16cfc636_z1CUrNAYIc.png?height=604&lazyload=true&maxWidth=600&width=2028)
    
    3. 在请求体（**Body**）中，以 JSON 格式填写请求参数。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dfd0bc6d8c00cb027e3ff24c525ad002_xwOKrJupHd.png?height=632&lazyload=true&maxWidth=600&width=2028)
        
        参数说明：
        
        - **department_ids**：填写[步骤三：获取部门信息](/ssl:ttdoc/home/mass-messaging-to-designated-departments/mass-messaging)中保存的部门 ID，支持`department_id`以及`open_department_id`，可填写多个部门 ID（列表长度小于等于 200）。
        
        - **msg_type**：消息类型，支持多种消息类型，详见[消息类型及内容示例](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM#42562565)。本示例填写`text`。
        
        - **content**：消息内容，支持除卡片消息外的多种消息内容，详见[消息类型及内容示例](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM#42562565)。本示例填写`"text": "test content"`。
    
    4. 点击 **Send** 发送请求。
        
        成功调用后的回显信息如下图所示。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df337a421eb6b2fddee86242fb056687_AQLy9YL5Vg.png?height=570&lazyload=true&maxWidth=600&width=2024)