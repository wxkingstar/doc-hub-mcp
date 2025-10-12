<!--
title: 三方快捷审批回调
id: 6959767963147993089
fullPath: /ukTMukTMukTM/ukjNyYjL5YjM24SO2IjN/quick-approval-callback
updatedAt: 1745207207000
source: https://open.feishu.cn/document/server-docs/approval-v4/external_approval/quick-approval-callback
-->
# 三方快捷审批回调


若[创建三方审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_approval/create)时，设置了三方审批的回调 URL（action_callback_url），后续当审批人 **同意** 或 **拒绝** 三方审批任务时，可以通过该回调 URL 通知三方审批系统，使三方审批系统可根据通知数据做出相应的审批流程处理。

## 使用说明

- 本文提供的回调仅用于将飞书内的审批任务结果回调至三方审批系统，待三方审批系统进行流程流转后，如需将审批任务最新数据同步到飞书审批中心，则需要调用[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)，将三方系统的数据同步回飞书审批中心。
- 回调超时时间 10s，超过 10s 没有响应，则飞书内的审批消息卡片会报错，不会进行更新。
- 当审批人通过审批 Bot 推送的卡片消息同意或拒绝审批时，如果审批中心处理成功，则直接更新卡片内容；如果处理失败，卡片内容只显示查看详情，此时审批中心会异步继续进行业务处理，10s 内处理成功则直接更新卡片内容，仍处理失败则仍只显示查看详情。审批 Bot 卡片内容更新失败场景，你可以调用[更新审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/uAjNyYjLwYjM24CM2IjN) 接口来更新卡片状态。




## 回调参数

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">参数</md-dt-th>
<md-dt-th style="width: 15%;">类型</md-dt-th>
<md-dt-th style="width: 15%;">必须</md-dt-th>
<md-dt-th style="width: 40%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr>
<md-dt-td>action_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>审批任务操作类型。可选值有：

- APPROVE：同意
- REJECT：拒绝</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>action_context</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>操作上下文</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>操作人的 user_id，获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>approval_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>三方审批定义 Code。获取方式：

- 调用[创建三方审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_approval/create)时，会返回审批定义 Code。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。
</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>instance_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>实例 ID（列表操作时必填），该 ID 与[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)时自定义的 instance_id 一致。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>task_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>任务 ID（列表操作时必填），该 ID 与[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)时自定义的 task_id 一致。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>message_id</md-dt-td>
<md-dt-td>int64</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>发送消息卡片返回的 message_id（卡片操作时必填）</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>搜索返回的任务 ID（搜索后操作时必填），该 ID 与[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)时自定义的 task_id 一致。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>reason</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>原因</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>attachments</md-dt-td>
<md-dt-td>list</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>附件</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>file_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>附件类型。可选值有：
- IMAGE：图片
- ATTACHMENTS：附件</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>file_size</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>文件大小。单位：字节</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>file_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>文件名</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>附件 URL</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>三方审批定义配置的 action_callback_token，用于验证请求来自飞书审批中心。</md-dt-td>
</md-dt-tr>
<md-dt-tr>
<md-dt-td>encrypt</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>如果三方审批定义配置了加密密钥（action_callback_key），则以上参数会进行加密后放在该参数内，接收回调后需要使用 key 进行解密。</md-dt-td>
</md-dt-tr>


<md-dt-tr>
<md-dt-td>message</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>HTTP code > 400 时，自定义返回错误信息。当 without_prefix 取值为 true 时会在报错里展示。</md-dt-td>
</md-dt-tr>

<md-dt-tr>
<md-dt-td>without_prefix</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>HTTP code > 400 时，是否返回自定义错误信息。

**可能值有**：
- true：返回
- false：不返回
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 回调示例

:::warning
示例命令中的 `https://www.feishu.cn/approval/openapi/v2/external/instanceOperate` URL 请求地址仅为示例，实际发送回调时，需要替换为真实的三方审批系统回调 URL。
:::

- 未加密和加密的示例命令：

```bash
# 未加密（该代码为示例代码，企业须填写企业对应信息）
curl --location --request POST 'https://www.feishu.cn/approval/openapi/v2/external/instanceOperate' \
--header 'Content-Type: application/json' \
--data-raw '{
  "action_type": "APPROVE",
  "action_context": "12345",
  "user_id": "b85s39b",
  "approval_code": "A3895051-9B16-4ABA-B785-AD2986177BB1",
  "instance_id": "people_1234",
  "task_id": "step1",
  "reason": "ok",
  "attachments": [
      {
          "file_type": "IMAGE",
          "file_name": "1.png",
          "file_size": 12345,
          "url": "https://sf3-cn.feishucdn.com/obj/lark-approval-attachment/image/20200512/413342ae-957f-4c6f-8d06-7dea05875d8b"
      }
  ],
  "token": "aaaaa"
}'

# 加密
curl --location --request POST 'https://www.feishu.cn/approval/openapi/v2/external/instanceOperate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "encrypt": "=sfasdfasfsdafasfaf="
}'
```
- 解密示例命令：

```js
# 解密

package decrypt

import (
   "crypto/aes"
   "crypto/cipher"
   "crypto/rand"
   "crypto/sha256"
   "encoding/base64"
   "fmt"
   "io"
)

func CBCDecrypter(decryptContent string, keyStr string) ([]byte, error) {
   buf, err := base64.StdEncoding.DecodeString(decryptContent)
   if err != nil {
      return nil, err
   }
   key := sha256.Sum256([]byte(keyStr))
   if len(buf)%aes.BlockSize != 0 {
      return nil, fmt.Errorf("plaintext is not a multiple of the block size")
   }
   block, err := aes.NewCipher(key[:sha256.Size])
   if err != nil {
      return nil, err
   }
   ciphertext := make([]byte, aes.BlockSize+len(buf))
   iv := ciphertext[:aes.BlockSize]
   if _, err := io.ReadFull(rand.Reader, iv); err != nil {
      return nil, err
   }
   mode := cipher.NewCBCDecrypter(block, iv)
   mode.CryptBlocks(ciphertext[aes.BlockSize:], buf)
   ciphertext = ciphertext[32:]

   plain := standardizeDataDe(ciphertext)
   return plain, nil
}

func standardizeDataDe(origData []byte) []byte {
   length := len(origData)
   unpadding := int(origData[length-1])
   if unpadding > length {
      return nil
   }
   return origData[:(length - unpadding)]
}
```

