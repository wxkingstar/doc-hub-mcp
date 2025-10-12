<!--
title: 步骤三：接收回调
id: 7338430742970941444
fullPath: /uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/receive-and-handle-callbacks
updatedAt: 1749205906000
source: https://open.feishu.cn/document/event-subscription-guide/callback-subscription/receive-and-handle-callbacks
-->
# 步骤三：接收回调

本文介绍不同回调订阅方式如何接收回调。

## 使用长连接方式接收回调

长连接方式内封装了鉴权逻辑，只在建连时进行鉴权，后续回调推送均为明文数据，无需再处理解密和验签逻辑。因此，如果你配置的回调订阅方式为 **使用长连接接收回调**，只需保持本地服务器建立长连接，在回调触发时即可接收到来自飞书开放平台的回调消息请求。如下图所示，接收到 `card.action.trigger` 回调，即[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4b8ab6eadce1922263608aa43260fcbc_e5Roy7fVd7.png?height=310&lazyload=true&maxWidth=650&width=2852)

你的业务服务器接收回调请求后，需要在 3 秒内响应回调，以完成飞书客户端（前端）的交互行为。目前需要订阅回调的功能以及对应的回调结构、使用方式等说明参见下表。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">功能</md-th>
<md-th style="width:40%">回调结构</md-th>
<md-th style="width:40%">相关文档</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>链接预览</md-td>
<md-td>实现链接预览功能必须订阅 **拉取链接预览数据** 回调，该回调对应的回调参数、响应参数说明，可参见[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)。</md-td>
<md-td>了解链接预览功能，以及如何配置链接预览，参见[链接预览开发指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)。</md-td>
</md-tr>
  
<md-tr>
<md-td>飞书卡片</md-td>
<md-td>如果你构建的飞书卡片可通过交互组件完成业务处理，则需要订阅 **卡片回传交互** 回调，该回调对应的回调参数、响应参数说明，可参见[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。</md-td>
<md-td>
- 了解飞书卡片功能，参见[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。
- 了解飞书卡片请求回调实现流程，参见[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 通过开发者服务器接收回调

如果你配置的回调订阅方式为 **将回调发送至开发者服务器**，在接收到飞书开放平台推送的回调后，可以进行安全校验。如果是加密回调，需要先解密回调，再解析回调详情。

### 流程概述

当飞书服务器推送回调至请求地址后，对应的业务服务器需要接收回调请求，并在 3 秒内完成业务处理、返回响应结果。在该过程中，你需要根据实际配置情况，完成以下操作。

:::note
回调是同步操作，不提供补推机制。如果你的业务服务器超时未响应，则系统会判断回调失败，并在飞书客户端内展示报错信息。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:18%">操作</md-th>
<md-th style="width:15%">是否必须</md-th>
<md-th style="width:67%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[安全校验](#安全校验)</md-td>
<md-td>否</md-td>
<md-td>安全校验用于确认业务服务器接收到的请求来自飞书开放平台，而不是伪造的风险请求。</md-td>
</md-tr>
  
<md-tr>
<md-td>[回调解密](#回调解密)</md-td>
<md-td>否</md-td>
<md-td>建议为应用配置 Encrypt Key，配置后推送的回调请求为加密数据，能够确保请求数据安全性。相应的，业务服务器收到请求后，需要进行解密，才可以获取到真实的回调数据。</md-td>
</md-tr>

<md-tr>
<md-td>[响应回调请求](#响应回调请求)</md-td>
<md-td>是</md-td>
<md-td>业务服务器在收到回调请求后，必须返回响应结果，否则会被系统判断为回调失败。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### 安全校验

当你的业务服务器接收到来自飞书开放平台推送的回调时（不包括请求网址校验），如果需要确保这个请求的来源是飞书开放平台而非伪造，有两种方式进行安全校验：签名校验和 Verification Token 校验。

:::warning
本文提供的安全校验不适用于  **消息卡片回传交互（旧）**（card.action.trigger_v1）回调。如果你需要为 **消息卡片回传交互（旧）** 配置安全校验，则需要参考[配置回调请求地址](/ssl:ttdoc/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">校验方式</md-th>
<md-th style="width:75%">使用说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>**签名校验**</md-td>
<md-td>
如果你在飞书应用内配置了 Encrypt Key 加密策略，需使用签名校验，这种校验方式相对复杂，但是安全性高，且无需解密和解析回调即可完成安全校验。校验方式如下：
  
1. 获取 `encrypt_key`。
    
   在应用管理平台的 **事件与回调 > 加密策略** 页面，可以查看 `encrypt_key`。
    
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c55d4e199d3ccb0a19ef6e808e66ffa4_G68AoPJBVI.png?height=650&lazyload=true&maxWidth=400&width=2152)

2. 校验请求来源，示例代码可参考下文[签名校验示例代码](#签名校验示例代码)。
    
   - 将请求头 `X-Lark-Request-Timestamp`、`X-Lark-Request-Nonce` 与 `encrypt_key` 拼接后，按照 `encode('utf-8')` 编码得到 `byte[] b1`，再拼接上请求的原始 body，得到一个 `byte[] b`。
    
   - 将 `b` 用 sha256 算法得到字符串 `s`， 校验 `s` 是否和请求头 `X-Lark-Signature` 一致。  
  
<md-alert>该方式无需解密回调可完成安全校验，但获取回调内容仍需解密，回调解密操作参考下文[回调解密](#回调解密)。</md-alert>
</md-td>
</md-tr>

<md-tr>
<md-td>**Verification Token 校验**</md-td>
<md-td>
飞书应用默认配置了 Verification Token，你可以在业务服务器内接收回调请求，并在请求体中获取 Verification Token 值，将该值与飞书应用内的 Verification Token 值进行比对，取值相同则说明该请求来自飞书开放平台的指定应用。
  
- 这种校验方式简单，但是安全性较低，在未配置 Encrypt Key 加密策略的前提下，会明文传输 Verification Token，存在数据泄露风险。
- Verification Token 可以在应用管理平台的 **事件与回调 > 加密策略** 页面获取，并与回调中解析出的 Verification Token 进行对比。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2b1083f55a16409385da9470b386801a_p0YlKE017s.png?height=640&lazyload=true&maxWidth=400&width=2134)
  
<md-alert>如果应用已配置了 Encrypt Key 加密策略，则推荐使用签名校验方式，如果仍需获取 Verification Token，则必须先解密回调才能获取。回调解密操作参考下文[回调解密](#回调解密)。</md-alert>
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

#### 签名校验示例代码

以下提供各开发语言的签名校验示例代码，其中包括的参数说明如下表所示。
| **参数**        | **说明**                              |
| ------------- | ----------------------------------- |
| `timestamp`   | 对应请求头中的 `X-Lark-Request-Timestamp` |
| `nonce`       | 对应请求头中的 `X-Lark-Request-Nonce`   |
| `encrypt_key` | 从开发者后台获取到的应用 Encrypt Key          |
- **Python 3**
    
```python
import hashlib
bytes_b1 = (timestamp + nonce + encrypt_key).encode('utf-8')
bytes_b = bytes_b1 + body
h = hashlib.sha256(bytes_b)
signature = h.hexdigest()

# check if request headers['X-Lark-Signature'] equals to signature
```

- **Java**

```java
import org.apache.commons.codec.binary.Hex;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
class Main {
  public String calculateSignature(String timestamp, String nonce, String encryptKey, String bodyString) throws NoSuchAlgorithmException {
	  StringBuilder content = new StringBuilder();
	  content.append(timestamp).append(nonce).append(encryptKey).append(bodyString);
	  MessageDigest alg = MessageDigest.getInstance("SHA-256");
	  String sign = Hex.encodeHexString(alg.digest(content.toString().getBytes()));
	  return sign;
  }
}
```

- **Golang**

```
import (
   "crypto/sha256"
   "fmt"
)
func calculateSignature(timestamp, nonce, encryptKey, bodystring string) string {
   var b strings.Builder
   b.WriteString(timestamp)
   b.WriteString(nonce)
   b.WriteString(encryptKey)
   b.WriteString(bodystring) //bodystring 指整个请求体，不要在反序列化后再计算
   bs := []byte(b.String())
   h := sha256.New()
   h.Write(bs)
   bs = h.Sum(nil)
   sig := fmt.Sprintf("%x", bs)
   return sig
}
```

- **node.js**

```javascript
var crypto = require('crypto');
function calculateSignature(timestamp, nonce, encryptKey, body) {
		const content = timestamp + nonce + encryptKey + body
		const sign = crypto.createHash('sha256').update(content).digest('hex');
		return sign
}
```

- **C#**

```c#
using System.Security.Cryptography;
public static string calculateSignature(string timestamp, string nonce, string encryptKey, string body) {
		StringBuilder content = new StringBuilder();
		content.Append(timestamp);
		content.Append(nonce);
		content.Append(encryptKey);
		content.Append(body);
		SHA256 sha256 = new SHA256CryptoServiceProvider();  
		byte[] bytes_out = sha256.ComputeHash(Encoding.UTF8.GetBytes(content.ToString()));  
		string result = BitConverter.ToString(bytes_out);  
		result = result.Replace("-", "");  
		return result;  
}
```

- **PHP**

```
<?php
$encrypt_key = "";  // 开放平台后台的 Encrypt Key
$timestamp = "";
$nonce = "";
$body = ""; // 指整个请求体，不要在反序列化后再计算
$signature = hash("sha256", $timestamp . $nonce . $encrypt_key . $body);
// check if request headers['X-Lark-Signature'] equals to signature
```

### 回调解密

如果你在飞书应用内配置了 Encrypt Key 加密策略，则业务服务器接收到回调请求后，需要进行回调解密。

:::warning
回调解密操作不适用于 **消息卡片回传交互（旧）**（card.action.trigger_v1）回调，因此使用 **消息卡片回传交互（旧）** 回调时可忽略本章节操作。
:::



#### 解密示例代码

你可以参考以下各开发语言的示例代码，解密回调数据。

- **Python 3**

:::note
请先执行 `pip install pycryptodome` 以支持引入 AES 方法。
:::

```python
import hashlib
import base64
from Crypto.Cipher import AES
class  AESCipher(object):
    def __init__(self, key):
        self.bs = AES.block_size
        self.key=hashlib.sha256(AESCipher.str_to_bytes(key)).digest()
    @staticmethod
    def str_to_bytes(data):
        u_type = type(b"".decode('utf8'))
        if isinstance(data, u_type):
            return data.encode('utf8')
        return data
    @staticmethod
    def _unpad(s):
        return s[:-ord(s[len(s) - 1:])]
    def decrypt(self, enc):
        iv = enc[:AES.block_size]
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return  self._unpad(cipher.decrypt(enc[AES.block_size:]))
    def decrypt_string(self, enc):
        enc = base64.b64decode(enc)
        return  self.decrypt(enc).decode('utf8')
encrypt = "P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk="
cipher = AESCipher("test key")
print("明文:\n{}".format(cipher.decrypt_string(encrypt)))
```

- **Java**

```java
package com.larksuite.oapi.sample;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
public class Decrypt {
    public static void main(String[] args) throws Exception {
        Decrypt d = new Decrypt("test key");
        System.out.println(d.decrypt("P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk=")); //hello world
    }
    private byte[] keyBs;
    public Decrypt(String key) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            // won't happen
        }
        keyBs = digest.digest(key.getBytes(StandardCharsets.UTF_8));
    }
    public String decrypt(String base64) throws Exception {
        byte[] decode = Base64.getDecoder().decode(base64);
        Cipher cipher = Cipher.getInstance("AES/CBC/NOPADDING");
        byte[] iv = new byte[16];
        System.arraycopy(decode, 0, iv, 0, 16);
        byte[] data = new byte[decode.length - 16];
        System.arraycopy(decode, 16, data, 0, data.length);
        cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(keyBs, "AES"), new IvParameterSpec(iv));
        byte[] r = cipher.doFinal(data);
        if (r.length > 0) {
            int p = r.length - 1;
            for (; p >= 0 && r[p] <= 16; p--) {
            }
            if (p != r.length - 1) {
                byte[] rr = new byte[p + 1];
                System.arraycopy(r, 0, rr, 0, p + 1);
                r = rr;
            }
        }
        return new String(r, StandardCharsets.UTF_8);
    }
}
```

- **Golang**

```go
package main
import (
        "crypto/aes"
        "crypto/cipher"
        "crypto/sha256"
        "encoding/base64"
        "errors"
        "fmt"
        "strings"
)
func main() {
        s, err := Decrypt("P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk=", "test key")
        if err != nil {
                panic(err)
        }
        fmt.Println(s) //hello world
}
func Decrypt(encrypt string, key string) (string, error) {
        buf, err := base64.StdEncoding.DecodeString(encrypt)
        if err != nil {
                return "", fmt.Errorf("base64StdEncode Error[%v]", err)
        }
        if len(buf) < aes.BlockSize {
                return "", errors.New("cipher  too short")
        }
        keyBs := sha256.Sum256([]byte(key))
        block, err := aes.NewCipher(keyBs[:sha256.Size])
        if err != nil {
                return "", fmt.Errorf("AESNewCipher Error[%v]", err)
        }
        iv := buf[:aes.BlockSize]
        buf = buf[aes.BlockSize:]
        // CBC mode always works in whole blocks.
        if len(buf)%aes.BlockSize != 0 {
                return "", errors.New("ciphertext is not a multiple of the block size")
        }
        mode := cipher.NewCBCDecrypter(block, iv)
        mode.CryptBlocks(buf, buf)
        n := strings.Index(string(buf), "{")
        if n == -1 {
                n = 0
        }
        m := strings.LastIndex(string(buf), "}")
        if m == -1 {
                m = len(buf) - 1
        }
        return string(buf[n : m+1]), nil
}
```

- **Node.js**

```javascript
const crypto = require("crypto");
class AESCipher {
    constructor(key) {
        const hash = crypto.createHash('sha256');
        hash.update(key);
        this.key = hash.digest();
    }
    decrypt(encrypt) {
        const encryptBuffer = Buffer.from(encrypt, 'base64');
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, encryptBuffer.slice(0, 16));
        let decrypted = decipher.update(encryptBuffer.slice(16).toString('hex'), 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}
encrypt = "P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk="
cipher = new AESCipher("test key")
console.log(cipher.decrypt(encrypt))
// hello world
```

- **C#**

```c#
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
namespace decrypt
{
        class AESCipher
        {
                const int BlockSize = 16;
                private byte[] key;
                public AESCipher(string key)
                {
                        this.key = SHA256Hash(key);
                }
                public string DecryptString(string enc)
                {
                        byte[] encBytes = Convert.FromBase64String(enc);
                        RijndaelManaged rijndaelManaged = new RijndaelManaged();
                        rijndaelManaged.Key = this.key;
                        rijndaelManaged.Mode = CipherMode.CBC;
                        rijndaelManaged.IV = encBytes.Take(BlockSize).ToArray();
                        ICryptoTransform transform = rijndaelManaged.CreateDecryptor();
                        byte[] blockBytes = transform.TransformFinalBlock(encBytes, BlockSize, encBytes.Length - BlockSize);
                        return System.Text.Encoding.UTF8.GetString(blockBytes);
                }
                public static byte[] SHA256Hash(string str)
                {
                        byte[] bytes = Encoding.UTF8.GetBytes(str);
                        SHA256 shaManaged = new SHA256Managed();
                        return shaManaged.ComputeHash(bytes);
                }
                public static void Main(string[] args)
                {
                        string encrypt = "P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk=";
                        AESCipher cipher = new AESCipher("test key");
                        Console.WriteLine(cipher.DecryptString(encrypt));
                }
        }
}
```

- **PHP**

```php
<?php
$encrypt_data = ""; // 待解密的信息
$encrypt_key = ""; // 从开发者后台获取 Encrypt Key
$base64_decode_message = base64_decode($encrypt_data);
$iv = substr($base64_decode_message, 0, 16);
$encrypted_event = substr($base64_decode_message, 16);
$decrypt = openssl_decrypt($encrypted_event, 'AES-256-CBC', hash('sha256', $encrypt_key, true), OPENSSL_RAW_DATA, $iv);
print($decrypt); 
// get the real event
```

### 响应回调请求

你的业务服务器接收回调请求后，需要在 3 秒内响应回调，以完成飞书客户端（前端）的交互行为。目前需要订阅回调的功能以及对应的回调结构、使用方式等说明参见下表。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">功能</md-th>
<md-th style="width:40%">回调结构</md-th>
<md-th style="width:40%">相关文档</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>链接预览</md-td>
<md-td>实现链接预览功能必须订阅 **拉取链接预览数据** 回调，该回调对应的回调参数、响应参数说明，可参见[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)。</md-td>
<md-td>了解链接预览功能，以及如何配置链接预览，参见[链接预览开发指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)。</md-td>
</md-tr>
  
<md-tr>
<md-td>飞书卡片</md-td>
<md-td>如果你构建的飞书卡片可通过交互组件完成业务处理，则需要订阅 **卡片回传交互** 回调，该回调对应的回调参数、响应参数说明，可参见[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。</md-td>
<md-td>
- 了解飞书卡片功能，参见[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。
- 了解飞书卡片请求回调实现流程，参见[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::
