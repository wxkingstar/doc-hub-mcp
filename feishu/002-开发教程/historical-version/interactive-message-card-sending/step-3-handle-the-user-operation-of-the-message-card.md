<!--
title: 步骤三：处理消息卡片的用户操作
id: 7249352004446273538
fullPath: /home/interactive-message-card-sending/step-3-handle-the-user-operation-of-the-message-card
updatedAt: 1713510795000
source: https://open.feishu.cn/document/historical-version/interactive-message-card-sending/step-3-handle-the-user-operation-of-the-message-card
-->
# 步骤三：处理消息卡片的用户操作

当指定用户收到消息卡片，并点击 **完成「全量发布」** 的按钮后，应用会向回调请求地址发送一个 POST 请求，你需要在本地服务中接收并处理请求。本节仅介绍处理消息卡片的代码逻辑，并提供 JavaScript 示例代码。你需要根据本地服务的实际情况，自行完善代码以实现互动型消息卡片的交互逻辑。
关于消息卡片回传交互的更多信息，参见[回传交互：将操作信息提交到服务端的交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN#49904b71)。

## 代码逻辑说明

1. 接收到来自开发平台的消息卡片 POST 请求数据。

	请求数据包含的参数信息，可参见[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)。参数结构体示例如下：
    
    
    ```JSON
    {
      "open_id": "ou_sdfimx9948345", // 卡片操作用户的 open_id
      "user_id": "eu_sd923r0sdf5", // 卡片操作用户的 user_id
      "open_message_id": "om_abcdefg1234567890", // 卡片消息的唯一 id
      "tenant_key": "d32004232", // 卡片消息归属的租户id
      "token": "c-xxxxx", // 更新卡片用的 Token（凭证）
      "action": {
        "value": { // 回传参数值
          "button_type": "public_publish",
          "button_id": "162695861xxx"
        },
        "tag": "button" // 交互组件标识
      }
    }
     ```

2. 识别并获取以下数据。
    
    - 点击消息卡片按钮的用户信息，即`open_id`或者`user_id`。
    
    - 点击的哪个消息卡片，即`open_message_id`。
    
    - 点击的哪个按钮，即`action`字段中的`value`。

3. 获取以上数据后，根据实际情况自定义配置业务逻辑处理。
    
    例如以下 JavaScript 示例代码，当匹配消息卡片按钮的`value`值后，执行内部业务逻辑，并向用户发送新的消息卡片提示用户操作完成。
    
    ```JavaScript
    async public_publish_card_process(req, res) {
        const {open_message_id: message_id, action, open_id} = req.body
        const {button_type, msg_id} = action.value
        if (button_type !== 'public_publish') {
            // 判断如果是其他类型的交互按钮，则忽略。
            return
        }
        // 调用自定义业务逻辑，如全量发布等。
        const resp = await custom_business_logic({open_id, button_type})
        if (resp.code !== 0) {
            // 执行失败，直接返回。
            return
        }
        // 获取存储的卡片内容并更新。
        let {card} = await get_record("message_card", {message_id})
        card.i18n_elements.zh_cn = [{
            "tag": "div",
            "fields": [{
                "is_short": false,
                "text": {
                    "tag": "lark_md",
                    "content": "已完成"
                }
            }]
        }]
        // 返回更新后的卡片内容。
        res.send(card) 
    }
    ```