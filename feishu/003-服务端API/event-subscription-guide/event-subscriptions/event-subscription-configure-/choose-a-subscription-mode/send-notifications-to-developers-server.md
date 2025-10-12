<!--
title: 将事件发送至开发者服务器
id: 7482440781745242113
fullPath: /ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/choose-a-subscription-mode/send-notifications-to-developers-server
updatedAt: 1744021172000
source: https://open.feishu.cn/document/event-subscription-guide/event-subscriptions/event-subscription-configure-/choose-a-subscription-mode/send-notifications-to-developers-server
-->
# 将事件发送至开发者服务器

你可以自建一个服务器，通过 Webhook 模式接收飞书开放平台的事件订阅通知，该模式需要你提供服务器的公网访问地址，在事件触发时飞书开放平台会向该公网访问地址发送 HTTP POST 请求，请求内包含事件数据。

## 步骤一（可选）：配置加密策略

你可以根据企业数据安全要求，配置加密策略，以加密传输事件数据并校验请求来源是否有风险。加密策略内包含 **Encrypt Key**、**Verification Token** 两个参数，**Encrypt Key** 用于加密传输事件请求，**Verification Token** 用于校验请求是否来自飞书开放平台。

### Encrypt Key

该参数用于实现事件订阅请求的加密传输。

- 如果配置 Encrypt Key，飞书开放平台向请求地址推送事件数据时会进行加密，加密推送能够提高数据安全性，建议你配置该参数。
- 如果未配置 Encrypt Key，飞书开放平台向请求地址推送事件数据时不会加密处理，直接明文推送。
- 
加密推送的事件示例如下，你的本地服务器接收到加密事件体后，需要进行解密处理。解密步骤参考[接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/encrypt-key-encryption-configuration-case)。

```
{
    "encrypt": "FIAfJPGRmFZWkaxPQ1XrJZVbv2JwdjfLk4jx0k/U1deAqYK3AXOZ5zcHt/cC4ZNTqYwWUW/EoL+b2hW/C4zoAQQ5CeMtbxX2zHjm+E4nX/Aww+FHUL6iuIMaeL2KLxqdtbHRC50vgC2YI7xohnb3KuCNBMUzLiPeNIpVdnYaeteCmSaESb+AZpJB9PExzTpRDzCRv+T6o5vlzaE8UgIneC1sYu85BnPBEMTSuj1ZZzfdQi7ZW992Z4dmJxn9e8FL2VArNm99f5Io3c2O4AcNsQENNKtfAAxVjCqc3mg5jF0123123flX1UOF5fzJ0sApG2OEn9wfyPDRBsApn9o+fceF9hNrYBGsdtZrZYyGG387CGOtKsuj8e2E8SNp+Pn4E9oYejOTR+ZNLNi+twxaXVlJhr6l+RXYwEiMGQE9zGFBD6h2dOhKh3W84p1GEYnSRIz1+9/Hp66arjC7RCrhuW5OjCj4QFEQJiwgL123123VsL03CxxFZarzxzffryrWUG3VkRdHRHbTsC34+ScoL5MTDU1QAWdqUC1T7xT0lCvQELaIhBTXAYrznJl6PlA83oqlMxpHh0gZBB1jFbfoUr7OQbBs1xqzpYK6Yjux6diwpQB1zlZErYJUfCqK7G/zI9yK/60b4HW0123+123123=" 
}
```

#### 适用场景

- 应用校验收到的事件推送是来自飞书开放平台， 而非伪造。
- 应用防止被重放攻击。重放攻击是指飞书开放平台推送给应用的事件被第三方截获，然后再把事件原封不动的多次发送给应用。这样可能会对应用造成数据安全隐患，也可能会影响应用服务器的性能。

配置 Encrypt Key 后，你本地的服务器可以基于 Encrypt Key 进行签名校验，以保证应用接收到的都是飞书开放平台推送的合法事件。有关签名校验的详细介绍，请参考[接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/encrypt-key-encryption-configuration-case)。

#### 加密原理

事件内容采用 AES-256-CBC 加密，加密原理如下：

1. 使用 SHA256 对 `Encrypt Key`进行哈希得到密钥`key`。
2. 使用 PKCS7Padding 方式将事件内容进行填充。
3. 生成 16 字节的随机数作为初始向量 `iv`。
4. 使用 `iv` 和 `key` 对事件内容加密得到 `encrypted_event`。
5. 应用收到的密文为 `base64(iv+encrypted_event)`。

### Verification Token

Verification Token 是应用的验证标识。开发者后台会为应用自动生成 Verification Token，当飞书开放平台推送事件数据时，会携带 Verification Token 值，你可以据此 Token 验证推送的事件是否属于当前应用。

### 操作步骤

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 在应用列表中点击具体应用，进入应用管理详情页面。
3. 在左侧导航栏，选择 **开发配置** > **事件与回调**。
4. 进入 **加密策略** 页签，配置 Encrypt Key 或者 Verification Token。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/02b6fe2f9807808b72f3de94f7fc1563_i6cItWH2Q1.png?height=678&lazyload=true&maxWidth=600&width=1726)
    
    - 点击 **重置** 图标，可重置参数值。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ef8631fc14a2dfb524bf40474bf6264f_dIjdcS2MLF.png?height=360&lazyload=true&maxWidth=400&width=864)
    
    - 点击 **编辑** 图标，可编辑参数值。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b16cd182a907ae4ef11ed77a9e37e31b_sLXAWHdkaT.png?height=334&lazyload=true&maxWidth=400&width=876)

## 步骤二：设置订阅方式

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 在应用列表中点击具体应用，进入应用管理详情页面。
3. 在左侧导航栏，选择 **开发配置** > **事件与回调**。
4. 进入 **事件配置** 页签，在 **订阅方式** 区域点击编辑图标。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cbca2aafb65c6a174017c337a178ccf4_jexH1K35ZT.png?height=482&lazyload=true&maxWidth=600&width=1282)

5. 选择 **将事件发送至开发者服务器**，并输入请求地址后，点击 **保存**。
    
    :::warning
    - 每个应用只能配置一个请求地址，该应用订阅的所有事件都会发送到该请求地址。
    - 该请求地址必须是 IPv4 公网地址。
    :::
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/644dc927531fb883770160fec26b6d93_qq8qFiRCeF.png?height=874&lazyload=true&maxWidth=600&width=1696)
    
    点击保存后，飞书服务器会向请求地址推送一个 `application/json;charset=utf-8` 格式的 POST 请求，用于验证所配置的请求地址的合法性。该 POST 请求中会携带一个 `challenge` 字段，应用需要在 1 秒内，将接收到的 `challenge` 值原样返回给飞书开放平台，否则，平台将报“Challenge code 没有返回”的错误，详情参考以下 **响应处理示例**。
    
    :::note
    当你在本地配置用于接收事件订阅的服务器时，建议直接把来自开放平台的 HTTP POST 请求打印出来，以此来确认服务器是否接收到了请求，以及请求的具体内容包含哪些。
    :::
    
### 响应处理示例

根据 **Encrypt Key** 加密策略参数的配置情况，推送的 POST 请求不同，处理方式也不同。

- **未配置 Encrypt Key**

	如果没有设置 Encrypt Key，飞书开放平台会推送明文的 POST 请求。请求体示例如下：

    ```json
    { 
        "challenge": "ajls384kdjxxxx",  // 应用需要在响应中原样返回的值 
        "token": "xxxxxx",              // 即 Verification Token
        "type": "url_verification"      // 表示这是一个验证请求 
    }
    ```

	当请求地址收到开放平台推送的 POST 验证请求时，需要解析出 `challenge` 值，并在 1 秒内原样返回该值作为响应。

```json
{ 
    "challenge": "ajls384kdjxxxx"
}
```

- **已配置 Encrypt Key**
  
  如果配置了 Encrypt Key，飞书开放平台会推送加密后的 POST 请求。

  ```json
  {
      "encrypt": "ds3da3sj32421lkkld4xxxx" // 加密字符串
  }
  ```

	应用需要先解密，然后从解密后的内容中提取出 `challenge` 值，并在 1 秒内原样返回该值作为响应。有关解密方法的详细介绍，请参考[接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/encrypt-key-encryption-configuration-case)。解密后的 POST 请求示例：

  ```json
  { 
      "challenge": "ajls384kdjxxxx",  // 应用需要在响应中原样返回的值 
      "token": "xxxxxx",              // 即 Verification Token
      "type": "url_verification"      // 表示这是一个验证请求 
  }
  ```


	响应示例：

    ```json
    { 
        "challenge": "ajls384kdjxxxx"
    }
    ```

### 示例代码

飞书开放平台针对常见的编程语言，提供了 **将事件发送至开发者服务器** 订阅方式的示例代码与解析，供你参考。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">编程语言</md-th>
<md-th style="width:70%">示例代码与解析</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>Java</md-td>
<md-td>[集成 Servlet 容器，将事件发送至开发者服务器](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/handle-events#d9800e1)</md-td>
</md-tr>

<md-tr>
<md-td>Golang</md-td>
<md-td>[将事件发送至开发者服务器](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/handle-events#b8ccabc5)</md-td>
</md-tr>
  
<md-tr>
<md-td>Python</md-td>
<md-td>[将事件发送至开发者服务器](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/handle-events#b8ccabc5)</md-td>
</md-tr>
  
<md-tr>
<md-td>Node.js</md-td>
<md-td>[将事件发送至开发者服务器](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/handling-events#b8ccabc5)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

