<!--
title: 调用服务端 API
id: 7442638088350367748
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/invoke-server-api
updatedAt: 1744026060000
source: https://open.feishu.cn/document/server-side-sdk/java-sdk-guide/invoke-server-api
-->
# 调用服务端 API

本文档介绍如何通过 Java SDK，自行构建 API Client、构造 API 请求、最终成功调用服务端 API。你可前往[ API 调试台](https://open.feishu.cn/api-explorer?from=op_doc)，直接获取指定服务端 API 相关示例代码，然后参考本文档了解调用 API 的全面流程。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0758be526cbabc9012632268de8b0cc3_iudhkSRU44.png?height=764&lazyload=true&maxWidth=750&width=1889)

## 步骤一：构建 API Client

通过 SDK 调用飞书开放接口之前，你需要先在代码中创建一个 API Client。该 API Client 支持指定当前使用的应用信息、日志级别、HTTP 请求超时时间等基本信息。以下为支持的配置项及其具体含义。

```java
Client client=Client.newBuilder("appId","appSecret") // 默认配置为自建应用
    .marketplaceApp() // 设置应用类型为商店应用
    .openBaseUrl(BaseUrlEnum.FeiShu) // 设置域名，默认为飞书
    .helpDeskCredential("helpDeskId","helpDeskSecret") // 服务台应用才需要设置
    .requestTimeout(3,TimeUnit.SECONDS) // 设置httpclient 超时时间，默认永不超时
    .logReqAtDebug(true) // 在 debug 模式下会打印 http 请求和响应的 headers、body 等信息。
    .build();
```

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置选项</md-th>
      <md-th style="width: 30%;">配置方式</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 40%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>app_id 和 app_secret</md-td>
      <md-td><code>Client.newBuilder("appId","appSecret")</code></md-td>
      <md-td>是</md-td>
      <md-td>应用凭证 App ID 和 App Secret。可在[开发者后台](https://open.feishu.cn/app) > 应用详情页 > **凭证与基础信息** > **应用凭证** 区域获取。![图片名称](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7f89950be7e57c2760a8b5b1f5e17c9_YeHS0mGtI7.png?height=524&lazyload=true&width=3594)</md-td>
    </md-tr>
    <md-tr>
      <md-td>appType</md-td>
      <md-td><code>client.marketplaceApp()</code></md-td>
      <md-td>否</md-td>
      <md-td>设置 App 类型为商店应用。如果你是 ISV 开发者，则必须设置该选项。关于商店应用的开发指南，可参见 [ISV（商店应用）开发指南-oapi-sdk-java](https://bytedance.feishu.cn/docx/G4lndQqsgoenFhxcPlIc0Klinte)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>logReqAtDebug</md-td>
      <md-td><code>client.logReqAtDebug(boolean logReqAtDebug)</code></md-td>
      <md-td>否</md-td>
      <md-td>设置是否开启 HTTP 请求参数和响应参数的日志打印开关。开启后，在 debug 模式下会打印 HTTP 请求和响应的 headers、body 等信息。在排查问题时开启该选项，有利于问题的排查。</md-td>
    </md-tr>
    <md-tr>
      <md-td>BaseUrl</md-td>
      <md-td><code>client.openBaseUrl(BaseUrlEnum baseUrl)</code></md-td>
      <md-td>否</md-td>
      <md-td>设置飞书域名，默认为 FeishuBaseUrl。可用域名如下：
```java
public enum BaseUrlEnum {
  FeiShu("https://open.feishu.cn"),
  LarkSuite("https://open.larksuite.com"),
  ;
}
```
 </md-td>
    </md-tr>
    <md-tr>
      <md-td>tokenCache</md-td>
      <md-td><code>client.tokenCache(ICache cache)</code></md-td>
      <md-td>否</md-td>
      <md-td>设置 Token 缓存器，用于缓存 Token 和 appTIcket，默认实现为内存。
```java
public interface ICache {

  // 获取缓存值
  String get(String key);

  // 设置缓存值
  void set(String key, String value, int expire, TimeUnit timeUnit);
}
```
 对于商店应用的开发者而言，如果需要 SDK 来缓存 appTicket，则需要实现该接口，以提供分布式缓存。</md-td>
    </md-tr>
    <md-tr>
      <md-td>disableTokenCache</md-td>
      <md-td><code>client.disableTokenCache()</code></md-td>
      <md-td>否</md-td>
      <md-td>设置是否开启 TenantAccessToken （[应用访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)）的自动获取与缓存。

若配置该选项，表示关闭自动获取与缓存 TenantAccessToken；若不配置则为开启。</md-td>
    </md-tr>
    <md-tr>
      <md-td>helpDeskId、helpDeskToken</md-td>
      <md-td><code>client.helpDeskCredential(String helpDeskId, String helpDeskToken)</code></md-td>
      <md-td>否</md-td>
      <md-td>服务台的 ID 和 token。仅在调用服务台业务的 API 时需要配置。可在[服务台管理后台](https://feishu.cn/helpdesk/admin)**设置中心** > **API 凭证** 处获取，详情参见 [服务台接入指南](/ssl:ttdoc/ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN)。

        
**注意**：服务台的 ID、Token 只有服务台创建者可以查看到。![图片名称](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc3b0ac14729354c2bc4b44af26c4f9_mXmcHyDfTy.png?height=693&lazyload=true&width=1916)</md-td>
    </md-tr>
    <md-tr>
      <md-td>requestTimeout</md-td>
      <md-td><code>client.requestTimeout(long timeout, TimeUnit timeUnit)</code></md-td>
      <md-td>否</md-td>
      <md-td>设置 SDK 内置的 Http Client 的请求超时时间。默认为 0 表示永不超时。</md-td>
    </md-tr>
    <md-tr>
      <md-td>httpTransport</md-td>
      <md-td><code>client.httpTransport(IHttpTransport httpTransport)</code></md-td>
      <md-td>否</md-td>
      <md-td>设置传输层实现，用于替换 SDK 提供的默认实现。你可通过实现下面的 IHttpTransport 接口来设置自定义的传输实现：
```java
public interface IHttpTransport {

  RawResponse execute(RawRequest request) throws Exception;
}
```

目前提供了以下两种实现：
- 基于 [OKhttp](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/larksuite-oapi/src/main/java/com/lark/oapi/core/httpclient/OkHttpTransport.java) 的实现，使用方式参见[示例代码](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/sample/src/main/java/com/lark/oapi/sample/api/ClientSample.java)。
- 基于 [Apache HttpClient](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/larksuite-oapi/src/main/java/com/lark/oapi/core/httpclient/ApacheHttpClientTransport.java) 的实现，使用方式参见[示例代码](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/sample/src/main/java/com/lark/oapi/sample/api/ClientSample.java)。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

示例配置：


- 对于自建应用，使用以下代码创建 API Client。

     ```java
     Client client=Client.newBuilder("appId","appSecret").build();  // 默认配置为自建应用
     ```
     
     
     
- 对于商店应用，需在创建 API Client 时，使用 `marketplaceApp()` 方法指定 AppType 为商店应用，代码配置如下。了解更多可参考 [ISV（商店应用）开发指南-oapi-sdk-java](https://bytedance.feishu.cn/docx/G4lndQqsgoenFhxcPlIc0Klinte)。
    
  ```java
  Client client = Client.newBuilder("appId", "appSecret")
      .marketplaceApp() // 设置应用为商店应用
      .build();
  ```

## 步骤二：构造 API 请求

在项目内创建好一个 API Client 后，即可开始调用[飞书开放平台接口](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)。SDK 使用 **client.** **业务域.版本.资源** **.方法名称** 来定位具体的 API 方法。如下图示例，你可前往[ API 调试台](https://open.feishu.cn/api-explorer?from=op_doc)，选择指定 API，在示例代码处直接获取 API 方法。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a47afd75dae54efd8db446bd507a5f10_ESdzhEww0g.png?height=755&lazyload=true&maxWidth=650&width=1877)

如下代码示例，你可通过 client 调用文档资源的 create 方法，创建一个文档。

:::note


该示例需要你在开发者后台为应用开通[创建及编辑新版文档]或[创建新版文档]权限，否则接口将报 99991672 错误码。
:::
```java
import com.lark.oapi.Client;
import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.docx.v1.model.CreateDocumentReq;
import com.lark.oapi.service.docx.v1.model.CreateDocumentReqBody;
import com.lark.oapi.service.docx.v1.model.CreateDocumentResp;
public class DocxSample {
  
  public static void main(String arg[]) throws Exception {
    // 构建client
    Client client = Client.newBuilder("appId", "appSecret").build();
    // 发起请求
    CreateDocumentResp resp = client.docx().document()
        .create(CreateDocumentReq.newBuilder()
            .createDocumentReqBody(CreateDocumentReqBody.newBuilder()
                .title("title")   // 文档标题
                .folderToken("")   // 文件夹 token，传空表示在根目录创建文档
                .build())
            .build()
        );
    // 处理服务端错误
    if (!resp.success()) {
      System.out.println(String.format("code:%s,msg:%s,reqId:%s"
          , resp.getCode(), resp.getMsg(), resp.getRequestId()));
      return;
    }
    // 业务数据处理
    System.out.println(Jsons.DEFAULT.toJson(resp.getData()));
  }
}
```
其他 API 调用示例请参考 GitHub 代码仓库中的 [Im Java 示例](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/sample/src/main/java/com/lark/oapi/sample/api/ImSample.java)。

## （可选）步骤三：设置请求选项

在每次发起 API 调用时，你可以设置请求级别的相关参数，例如传递 userAccessToken（用户访问凭证）、自定义 headers 等。所有请求级别可设置的选项如下表所示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">配置选项</md-th>
      <md-th style="width: 35%;">配置方式</md-th>
      <md-th style="width: 50%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>headers</md-td>
      <md-td><code>requestOptions.headers(Map&lt;String, List&lt;String&gt;&gt; headers)</code></md-td>
      <md-td>设置自定义请求头。在发起请求时，这些请求头会被透传到飞书开放平台服务端。</md-td>
    </md-tr>
    <md-tr>
      <md-td>userAccessToken</md-td>
      <md-td><code>requestOptions.userAccessToken(String userAccessToken)</code></md-td>
      <md-td>设置用户 token，当你需要以用户身份发起 API 调用时，需要设置该选项的值。</md-td>
    </md-tr>
    <md-tr>
      <md-td>tenantAccessToken</md-td>
      <md-td><code>requestOptions.tenantAccessToken(String tenantAccessToken)</code></md-td>
      <md-td>设置企业或组织 token，当你自己维护企业或组织 token 时（即创建 client 时 EnableTokenCache 设置为 false），需通过该选项传递企业或组织 token。</md-td>
    </md-tr>
    <md-tr>
      <md-td>tenantKey</md-td>
      <md-td><code>requestOptions.tenantKey(tenantKey string)</code></md-td>
      <md-td>设置企业或组织 key, 当你开发商店应用时，必须设置该选项。</md-td>
    </md-tr>
    <md-tr>
      <md-td>requestId</md-td>
      <md-td><code>requestOptions.requestId(requestId string)</code></md-td>
      <md-td>设置请求 ID，作为请求的唯一标识。该 ID 会被透传到飞书开放平台服务端。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

设置自定义请求头的示例代码如下所示。

```java
import com.lark.oapi.Client;
import com.lark.oapi.core.request.RequestOptions;
import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.core.utils.Lists;
import com.lark.oapi.service.docx.v1.model.CreateDocumentReq;
import com.lark.oapi.service.docx.v1.model.CreateDocumentReqBody;
import com.lark.oapi.service.docx.v1.model.CreateDocumentResp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class DocxSample {
  public static void main(String arg[]) throws Exception {
    // 创建 API Client。你需在此传入你的应用的实际 App ID 和 App Secret
    Client client = Client.newBuilder("appId", "appSecret").build();
    // 设置自定义请求头
    Map<String, List<String>> headers = new HashMap<>();
    headers.put("key1", Lists.newArrayList("value1"));
    headers.put("key2", Lists.newArrayList("value2"));
    // 发起请求
    CreateDocumentResp resp = client.docx().document()
        .create(CreateDocumentReq.newBuilder()
                .createDocumentReqBody(CreateDocumentReqBody.newBuilder()
                    .title("title")   // 文档标题
                    .folderToken("")  // 文件夹 token，传空表示在根目录创建文档
                    .build())
                .build()
            , RequestOptions.newBuilder()
                .userAccessToken("u-2GxFH7ysh8E9lj9UJp8XAG0k0gh1h5KzM800khEw2G6e") // 传递用户token
                .headers(headers) // 传递自定义请求头
                .build());
    // 处理服务端错误
    if (!resp.success()) {
      System.out.println(String.format("code:%s,msg:%s,reqId:%s"
          , resp.getCode(), resp.getMsg(), resp.getRequestId()));
      return;
    }
    // 业务数据处理
    System.out.println(Jsons.DEFAULT.toJson(resp.getData()));
  }
}
```

## 步骤四：运行代码

完成以上步骤后，即可运行代码调用创建文档 API。若请求成功，预计将返回以下数据。若失败，将返回错误码、错误信息和 Log ID，你可前往开发文档搜索解决方案。

```json
{
  Document: {
    DocumentId: "IPI4dqnbfoPxL3xhAEhcjXabcef",
    RevisionId: 1,
    Title: "title"
  }
}
```

## 常见问题

### 如何调用历史版本 API ？

服务端 API 中存在部分历史版本的开放接口，由于没有元数据信息，所以不能使用 SDK 内封装好的方法快速调用，此时你可以使用 SDK 提供的原生模式调用 API。以[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口为例，调用示例如下所示：

```java
package com.lark.oapi.sample.rawapi;
import com.lark.oapi.Client;
import com.lark.oapi.core.enums.AppType;
import com.lark.oapi.core.response.RawResponse;
import com.lark.oapi.core.token.AccessTokenType;
import com.lark.oapi.core.utils.Jsons;
import java.util.HashMap;
import java.util.Map;
/**
 * 原生http 调用方式
 */
public class RawApiCall {
  public static void main(String arg[]) throws Exception {
    // 构建client
    Client client = Client.newBuilder("appId", "appSecret").build();
    // 构建http body
    Map<String, Object> body = new HashMap<>();
    body.put("receive_id", "ou_c245b0a7dff2725cfa2fb104f8b48b9d");
    body.put("content", MessageText.newBuilder()
        .atUser("ou_155184d1e73cbfb8973e5a9e698e74f2", "Tom")
        .text("test content")
        .build());
    body.put("msg_type", MsgTypeEnum.MSG_TYPE_TEXT);
    // 发起请求
    RawResponse resp = client.post(
        "https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=open_id"
        , body
        , AccessTokenType.Tenant);
    // 处理结果
    System.out.println(resp.getStatusCode());
    System.out.println(Jsons.DEFAULT.toJson(resp.getHeaders()));
    System.out.println(new String(resp.getBody()));
    System.out.println(resp.getRequestID());
  }
}
```
了解更多 API 调用示例，参考 GitHub 代码仓库中的 [RawApiCall Java 示例](https://github.com/larksuite/oapi-sdk-java/blob/v2_main/sample/src/main/java/com/lark/oapi/sample/rawapi/RawApiCall.java)。

### 如何快速获取接口对应的示例代码？

飞书开放平台提供了 [API 调试台](https://open.feishu.cn/api-explorer)，通过该平台可以快速调试服务端 API，快速获取资源 ID 及生成多语言示例代码的能力，为您节省开发成本。例如，通过 API 调试台调用 [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) 接口，在调试台成功完成测试后，可通过 **示例代码** 页面查阅 Java SDK 对应的接口调用代码。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca14b04adb4859f7971208d4f0128f08_aSSX48s0zA.png?height=768&lazyload=true&maxWidth=766&width=1266)

### 如何准确选择 API？

使用 API Client 调用 API 时，对应的方法建议你借助 [API 调试台](https://open.feishu.cn/api-explorer/)获取，可通过指定接口的地址栏参数拼接方法，也可以直接参考接口提供的示例代码。以[通过手机号或邮箱获取用户 ID](https://open.feishu.cn/api-explorer/cli_a61e4f821889d00c?apiName=batch_get_id&from=op_doc_tab&project=contact&resource=user&version=v3) 接口为例，获取方式如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5b42cd293c1e26079d8ec616349f25b1_aU0FkMhXG3.png?height=1684&lazyload=true&maxWidth=766&width=2882)

### 开放接口的 HTTP GET 请求需要携带请求体 Body 参数，如何传参？

由于默认的客户端实现（OkHttp3Client）不支持这种方式，因此你需要切换成 ApacheHttpClient。参考以下代码：

```java
Client.newBuilder(appId, appSecret)
      .httpTransport(
          ApacheHttpClientTransport.newBuilder().httpclient(HttpClients.createDefault()).build()
      )
```

### 接口超时并报错 ClientTimeoutException，如何解决？

该报错是因为构建 API Client 时未配置超时时间引起的，你需要在 Client 内配置超时时间，参考如下代码配置：

```java
@Test
void init() {
    Client client = Client.newBuilder("appId", "appSecret")
        .httpTransport(new OkHttpTransport(
            new OkHttpClient().newBuilder()
                .readTimeout(3, TimeUnit.MINUTES)  // 设置超时时间，单位必须为分钟
                .callTimeout(3, TimeUnit.MINUTES)  // 设置超时时间，单位必须为分钟
                .build()
        ))
        .tokenCache(LocalCache.getInstance())      // 默认实现，本地带时间过期的缓存；可以自己实现ICache的接口，例如Redis缓存等
        .logReqAtDebug(true)                       // 在 debug 模式下会打印 http 请求和响应的 headers,body 等信息。 
        .build();
}
```

### 示例代码运行后，Client 正常发起请求并返回响应结果，但程序仍然一直运行了一段时间才自动停止是什么原因？

在使用 OkHttp 作为 HTTP 客户端库时，OkHttp 会在内部维护一个连接池（Connection Pool），用于复用已经建立的 HTTP 连接，以提高性能。连接池中的连接有 5 分钟的存活时间（TTL），进程可能不会立即结束，而是会保持活跃一段时间，直到所有连接的 TTL 到期或被手动关闭。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9cd8264533cd83f153590c6f3046cfd4_I0Cskcoa9i.png?height=1488&lazyload=true&maxWidth=766&width=1794)

如果希望进程立即结束，可以通过设置 `Connection: close` 请求头来禁用 OkHttp 的连接复用能力，但该方式会导致网络性能下降，请谨慎操作。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ba4c401008e159139380944260c574c_tmoEIPSilp.png?height=456&lazyload=true&maxWidth=766&width=1456)