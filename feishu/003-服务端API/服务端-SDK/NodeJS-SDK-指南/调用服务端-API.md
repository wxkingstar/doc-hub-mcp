---
title: "调用服务端 API"
source_url: https://open.feishu.cn/document/server-side-sdk/nodejs-sdk/invoke-server-api
---
最后更新于 2024-11-29

# 调用服务端 API

本文档介绍通过 NodeJS SDK 构造 API 请求、调用开放平台服务端 API 的详细步骤。

## 步骤一：创建并配置 API Client

调用 API 之前，需要先创建一个 API Client，用于指定应用信息、日志级别、超时时间等基本信息。

1. 创建 API Client。

企业自建应用与商店应用的创建方式有所不同，具体说明如下：

- 企业自建应用，使用以下代码创建 API Client。

```javascript
      import * as lark from '@larksuiteoapi/node-sdk';

const client = new lark.Client({
          appId: 'app id',
          appSecret: 'app secret'
      });
      ```

- 商店应用，使用以下代码创建 API Client，其中需要通过 `appType: lark.AppType.ISV` 标识当前的应用为商店应用。

```javascript
      import * as lark from '@larksuiteoapi/node-sdk';

const client = new lark.Client({
          appId: 'app id',
          appSecret: 'app secret',
          appType: lark.AppType.ISV,
      });
      ```  
      **说明**：使用商店应用发起 API 调用时，必须传入租户 Key（tenant_key）以及 app_ticket（用于获取商店应用的 app_access_token）。详细说明参见下文 **商店应用调用 API 的必要操作** 章节。

2. （可选）自定义 API Client 配置

在创建 API Client 时，支持自定义 API Client 的配置。例如，设置日志级别、缓存器等。Client 构造参数说明如下表所示。

参数 | 类型 | 是否必填 | 描述
--- | --- | --- | ---
appId | string | 是 | 应用的 App ID。获取方式：登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **凭证与基础信息** 页面内，获取应用凭证（包括 App ID 和 App Secret）。
appSecret | string | 是 | 应用的 App Secret。
domain | Domain | string | 否 | 应用域名。一般用于指定飞书域名：  
   - 飞书：https://open.feishu.cn  
   - Lark：https://open.larksuite.com  
   如需配置其它域名，则需确保传递完整的域名。  
   **默认值**：Domain.Feishu，该默认值表示使用飞书域名，如果是 Lark 需要设置为 Domain.Lark。
httpInstance | HttpInstance | 否 | SDK 发送请求的 HTTP 实例。SDK 内部默认使用 `axios.create()` 构造出一个 defaultHttpInstance 进行 HTTP 调用。  
   可以从 SDK 中 `import defaultHttpInstance`，在其中添加 interceptors 完成业务需求。例如，SDK 默认过滤了响应结果中的 data，如需获取 logid 等数据，可以重置 interceptors。示例代码如下：  
   ```javascript   
   import { defaultHttpInstance } from '@larksuiteoapi/node-sdk';  
   defaultHttpInstance.interceptors.response.use((resp) => {  
      // 这里可以做一些业务逻辑处理  
      // 记得返回resp.data   
     return resp.data;  
   })  
   ```  
   **默认值**：defaultHttpInstance
loggerLevel | LoggerLevel | 否 | 日志级别。枚举值：  
   - error：记录错误事件，这些事件阻止了部分程序的执行。  
   - warn：记录一些异常问题，但这些异常可能不影响程序继续运行。  
   - info：记录运行过程中关键的、需要被监控的信息。  
   - debug：记录调试信息，用于在调试时诊断问题。  
   - trace：记录详细信息，可用于开发或调试时跟踪程序运行过程。  
   **默认值**：info
logger | Logger | 否 | 日志器，可根据需要自定义配置。
cache | Cache | 否 | 缓存器，用于缓存数据的存储与获取，如 token。如果你没有指定缓存器，SDK 会初始化一个缓存器。如果需要和现有系统共享数据，可以自定义缓存器，实现 Cache 的接口即可。默认缓存器的实现：[default-cache.ts](https://github.com/larksuite/node-sdk/blob/main/utils/default-cache.ts)  
   ```javascript  
   import get from 'lodash.get';  
   import { Cache } from '@node-sdk/typings';  
   export class DefaultCache implements Cache {  
       values: Map<  
           string | Symbol,  
           {  
               value: any;  
               expiredTime?: number;  
           }   
       >;  
       constructor() {  
           this.values = new Map();  
       }  
       // When there is a namespace, splice the namespace and key to form a new key  
       private getCacheKey(key: string | Symbol, namespace?: string) {  
           if (namespace) {  
               return `${namespace}/${key.toString()}`;  
           }  
           return key;  
       }  
       async get(key: string | Symbol, options?: {  
           namespace?: string  
       }) {  
           const cacheKey = this.getCacheKey(key, get(options, 'namespace'));  
           const data = this.values.get(cacheKey);  
           if (data) {  
               const { value, expiredTime } = data;  
               if (!expiredTime || expiredTime - new Date().getTime() > 0) {  
                   return value;  
               }  
           }  
           return undefined;  
       }  
       async set(key: string | Symbol, value: string, expiredTime?: number, options?: {  
           namespace?: string  
       }) {  
           const cacheKey = this.getCacheKey(key, get(options, 'namespace'));  
           this.values.set(cacheKey, {  
               value,  
               expiredTime,  
           });  
           return true;  
       }  
   }  
   export const internalCache = new DefaultCache();  
   ```
disableTokenCache | boolean | 否 | 是否禁用用于保存 token 的缓存。如果禁用（取值 true），则不会缓存 token，系统会在每次需要使用 token 时自动重新拉取。  
   **默认值**：false，表示不禁用
appType | AppType | 否 | 应用类型。默认不传值表示企业自建应用，如果是商店应用则必须传入 AppType.ISV。  
   - AppType.ISV：商店应用  
   - AppType.SelfBuild：自建应用  
   **默认值**：AppType.SelfBuild
helpDeskId | string | 否 | 服务台的 ID。仅在调用服务台业务的 API 时需要配置。可在[服务台管理后台](https://feishu.cn/helpdesk/admin) **设置中心** > **API 凭证** 处获取，详情参见[服务台接入指南](https://open.feishu.cn/document/ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN)。  
   **注意**：服务台的 ID、Token 只有服务台创建者可以查看到。  
   ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc3b0ac14729354c2bc4b44af26c4f9_kscamGsRfP.png?height=693&lazyload=true&width=1916)
helpDeskToken | string | 否 | 服务台的 token。仅在调用服务台业务的 API 时需要配置。可在[服务台管理后台](https://feishu.cn/helpdesk/admin) **设置中心** > **API 凭证** 处获取，详情参见[服务台接入指南](https://open.feishu.cn/document/ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN)。  
   **注意**：服务台的 ID、Token 只有服务台创建者可以查看到。  
   ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc3b0ac14729354c2bc4b44af26c4f9_MRSix1MTBO.png?height=693&lazyload=true&width=1916)

## 步骤二：构造 API 请求

在项目内创建 API Client 后，即可开始调用飞书开放接口。你可以使用 **client.业务域.资源.方法名称** 来定位具体的 API 方法，然后对具体 API 发起调用。建议通过 [API 调试台](https://open.feishu.cn/api-explorer)快速定位 API 方法，以[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口为例，可以通过地址栏参数拼接 API 方法，也可以查看接口示例代码定位 API 方法，如下图所示。

- 方式一：查阅指定 API 的示例代码，从代码中直接获取用于构造 API 请求的方法。
- 方式二：通过指定 API 的浏览器地址栏获取相关参数，以 **client.业务域.资源.方法名称** 格式拼接 API 方法。

- 下图中 ① project 代表 **业务域**
  - 下图中 ② resource 代表 **资源**
  - 下图中 ③ apiName 代表 **方法名称**

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e4a1d9a22691614ca4fef355a4a365cb_qNqo4NHMwn.png?height=1694&lazyload=true&maxWidth=600&width=2882)

在 NodeJS SDK 1.22 版本开始支持多版本的调用，如果遇到某个业务域（project）下的 API 在 SDK 中搜索不到，可通过 project.version 来获取，例如下图，任务（task）下包含 v1、v2 两个版本（version）。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/71e4da95e5023fe51acb57f27d376865_9rk45yH2y4.png?height=410&lazyload=true&maxWidth=500&width=860)

选择 v2 后，会多出一些方法。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7fc8aaab7e6c55e6e5b4258a67acafc0_8JQL1ucgKm.png?height=576&lazyload=true&maxWidth=500&width=1608)

调用的示例代码如下，代码内通过 client 调用发送消息接口。

```javascript
import * as lark from '@larksuiteoapi/node-sdk';

// 构建 API Client
const client = new lark.Client({
    appId: 'app id',
    appSecret: 'app secret'
});

// 通过 Client 调用「发送消息」接口
const res = await client.im.message.create({
    params: {
        receive_id_type: 'chat_id',
    },
    data: {
        receive_id: 'receive_id',
        content: JSON.stringify({text: 'hello world'}),
        msg_type: 'text',
  },
});
```

在 SDK 中包含了 API 对应的飞书开放平台 [API 调试台](https://open.feishu.cn/api-explorer)链接，在开发工具内，你可在具体 API 的方法注释中点击 **click to debug** 跳转 API 调试台进行调试。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3860ebdf6797d3e75b161bf1409281cd_ent8KutOhk.png?height=234&lazyload=true&maxWidth=500&width=1082)

### 商店应用调用 API 的必要操作

如果使用商店应用调用 API，在 client 中必须声明 `appType: lark.AppType.ISV`，SDK 会根据该声明执行不同的逻辑分支。商店应用的逻辑分支不同于企业自建应用，商店应用必须在代码内传入租户 Key（tenant_key）以及 app_ticket。  
商店应用调用 API 为什么需要租户 Key（tenant_key）以及 app_ticket：

- [tenant_key](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology#495685b5)：一个商店应用会被安装到多个租户中，tenant_key 是租户的唯一标识，用来区分不同的租户。

- [app_ticket](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)：为了提高数据访问的安全性，飞书对商店应用应用增加了`app_ticket`作为安全凭证，用于获取商店应用的 app_access_token。每隔 1 小时向商店应用配置的事件订阅请求地址自动推送一次 `app_ticket`。

获取企业的授权访问凭证 `tenant_access_token` 时，需要用到这两个值，但这两个值通过 SDK 无法主动获取到，必须由外部传递进来。因此对于商店应用，SDK 提供了一种方式来传递这两个值。

1. 在应用内订阅 app_ticket 事件。

如何订阅事件参考，具体说明参考 [app_ticket 事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)。

2. 在项目中构造好商店应用的 API Client 后，需要使用 `EventDispatcher` 接收并处理 app_ticket 事件。

以 node 的默认 HTTP 服务为例，示例代码如下：

```javascript
    import * as http from "http";

const ISVEventDispatcher = new lark.EventDispatcher();

const server = http.createServer();
    // /webhook/event 为在开放平台配置的事件接收地址的 Path
    server.on('request', lark.adaptDefault('/webhook/event', ISVEventDispatcher));
    server.listen(3000);
    ```

`EventDispatcher` 内部会默认接收 `app_ticket` 事件，将获得的 `app_ticket` 写到缓存（Cache）中。

3. 使用 client 调用接口，使用 `withTenantKey` 方法显示传递 `tenant_key` 值。

client 会结合上一步写入缓存中的 `app_ticket`，完成 `tenant_access_token` 的获取（并缓存），最后发起接口调用请求。

```javascript
    import * as fs from "fs";

const res = await SDKClient.im.file.create({
        data: {
            file_type: "mp4",
            file_name: "测试.mp4",
            file: fs.readFileSync("文件路径"),
        }
     }, lark.withTenantKey('tenant key'));

console.log(res);
    ```

## 步骤三（可选）：设置请求选项

在每次发起 API 调用时，你可以设置请求级别的相关参数，例如传递 userAccessToken（用户访问凭证）、自定义 headers 等。

- 自定义 headers 示例代码如下所示。

```javascript
await client.im.message.create({
    params: {
        receive_id_type: 'chat_id',
    },
    data: {
        receive_id: 'receive_id',
        content: JSON.stringify({text: 'hello world'}),
        msg_type: 'text',
    },
}, {
    headers: {
        customizedHeaderKey: 'customizedHeaderValue'
    }
});
```

- SDK 内将常用的修改操作封装成了方法，可以使用的方法如下所示。

方法 | 描述
--- | ---
withTenantKey | 设置租户 Key（tenant_key），使用商店应用调用 API 时，必须传入该值。如何获取参见 [tenant_key](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology#495685b5)。
withTenantToken | 设置应用身份 Token（tenant_access_token）。获取方式：  
- [商店应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)  
- [自建应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)
withUserAccessToken | 设置用户身份 Token（user_access_token）。获取方式：[获取 user_access_token](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)
withHelpDeskCredential | 是否在请求中带入服务台 Token。仅在调用服务台业务的 API 时需要配置，Token 可在[服务台管理后台](https://feishu.cn/helpdesk/admin) **设置中心** > **API 凭证** 处获取，详情参见[服务台接入指南](https://open.feishu.cn/document/ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN)。  
**注意**：服务台的 Token 只有服务台创建者可以查看到。  
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc3b0ac14729354c2bc4b44af26c4f9_MRSix1MTBO.png?height=693&lazyload=true&maxWidth=400&width=1916)
withAll | 用于合并上述方法的结果。

以上方法在代码中的配置示例如下，更多代码示例参考 [request-with.ts](https://github.com/larksuite/node-sdk/blob/main/client/request-with.ts)。

```javascript
// 单个方法的使用示例
await client.im.message.create({
    params: {
        receive_id_type: 'chat_id',
    },
    data: {
        receive_id: 'receive_id',
        content: JSON.stringify({text: 'hello world'}),
        msg_type: 'text',
    },
}, lark.withTenantToken('tenant token'));

// 多个方法的使用示例，需要使用 withAll 合并方法
await client.im.message.create({
    params: {
        receive_id_type: 'chat_id',
    },
    data: {
        receive_id: 'receive_id',
        content: JSON.stringify({text: 'hello world'}),
        msg_type: 'text',
    },
}, lark.withAll([
  lark.withTenantToken('tenant token'),
  lark.withTenantKey('tenant key')
]));
```

## 步骤四：运行项目

完成以上步骤后，即可运行项目调用 API。你可以通过开发工具运行项目，也可以根据项目部署情况在命令行内通过 `node {.js 项目文件}` 命令运行，如下图所示。

- 运行成功将返回接口响应参数

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/98e93241e89f978971e5be1168bb6a9c_CfRluI0hXM.png?height=880&lazyload=true&maxWidth=500&width=1080)

- 运行失败则会返回对应的错误码与错误信息

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/de226cbbcb3e54ff8e9d0c26645421ce_8uIIDtP7qL.png?height=840&lazyload=true&maxWidth=500&width=2220)

## API 调用方式介绍

NodeJS SDK 为了提高 API 调用效率，封装了部分 API 的调用方法，包括分页查询、上传文件、下载文件等。

### 分页查询

针对返回值以分页形式呈现的接口，SDK 提供了迭代器方式的封装（方法名后缀为 WithIterator），消除了根据 page_token 反复获取数据的操作，提升易用性。例如，以[获取部门直属用户列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)接口为例，分页查询方式如下所示。

```javascript
// 每次处理20条数据
for await (const items of await client.contact.user.findByDepartment({
    params: {
        department_id: '0',
        page_size: 20,
    },
})) {
    console.log(items);
}

// 也可用next来手动控制迭代，每次取20条数据
const listIterator = await SDKClient.contact.user.findByDepartment({
    params: {
        department_id: '0',
        page_size: 20,
    },
});
const { value } = await listIterator[Symbol.asyncIterator]().next();
console.log(value);
```

你也可以使用无迭代器封装的版本，需要自己每次根据返回的 page_token 来手动进行分页调用。

### 上传文件

SDK 内封装了对文件上传的处理逻辑，和普通的 API 调用方式一样，以[上传文件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)接口为例，传递参数即可调用。

```javascript
const res = await client.im.file.create({
    data: {
        file_type: 'mp4',
        file_name: 'test.mp4',
        file: fs.readFileSync('file path'),
    },
});
```

如果以上方式实际应用时报错 1061002，可以尝试将 file 类型变为 stream。示例代码如下：

```javascript
let Duplex = require('stream').Duplex;

function bufferToStream(buffer) {  
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
```

### 下载文件

SDK 对返回的二进制流进行了封装，消除了对流本身的处理，调用[下载文件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/get)接口时，只需要调用 writeFile 方法即可将数据写入文件。

```javascript
const resp = await client.im.file.get({
    path: {
        file_key: 'file key',
    },
});
await resp.writeFile(`filepath.suffix`);
```

如果想要自定义对流的处理，可以调用 getReadableStream 方法获取到流，如下示例将流写入文件。

```javascrip
import * as fs from 'fs';

const resp = await client.im.file.get({
    path: {
        file_key: 'file key',
    },
});
const readableStream = resp.getReadableStream();
const writableStream = fs.createWriteStream('file url');
readableStream.pipe(writableStream);
```
**注意**：流只能被消费一次，即如果使用了 writeFile 消费了流，则 getReadableStream 获取流会报错或者获取到的流为空。如需消费多次流，可以使用 getReadableStream 获取流，然后读取流中的数据做缓存，将缓存的数据给消费方使用。

### 飞书卡片

开放平台提供了[卡片模板](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b)能力，在[发送卡片消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)时只需要提供模板 ID 和内容即可。SDK 对卡片模板进行了调用上的封装，在支持消息卡片的接口中增加了 ByCard 的调用方式，你只需要传递 `template_id` 和 `template_variable` 即可。

```javascrip
client.im.message.createByCard({
  params: {
    receive_id_type: 'chat_id',
  },
  data: {
    receive_id: 'your receive_id',
    template_id: 'your template_id',
    template_variable: {
      content: "Card Content",
      title: "Card Title"
    }
  }
});
```

如果你需要基于卡片的 JSON 数据发送消息，以调用[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口发送一个简单的具备 `title` 和 `content` 的卡片为例，示例代码如下。

```javascrip
client.im.message.create({
  params: {
    receive_id_type: 'chat_id',
  },
  data: {
    receive_id: 'your receive_id',
    content: JSON.stringify({
        "config": {
          "wide_screen_mode": true
        },
        "elements": [
          {
            "tag": "markdown",
            "content": "Card Content"
          }
        ],
        "header": {
          "template": "blue",
          "title": {
            "content": "Card Title",
            "tag": "plain_text"
          }
        }
      }
    ),
    msg_type: 'interactive'
  }
})
```

示例效果如下：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d27fcddc76396b4ab5b20b43f97c8d8_lOuLAagpBA.png?height=210&lazyload=true&maxWidth=500&width=1224)

SDK 内置了一个基础消息卡片供你体验。

```javascrip
import * as lark from '@larksuiteoapi/node-sdk';
client.im.message.create({
  params: {
    receive_id_type: 'chat_id',
  },
  data: {
    receive_id: 'your receive_id',
    content: lark.messageCard.defaultCard({
      title: 'Card Title',
      content: 'Card Content'
    }),
    msg_type: 'interactive'
  }
})
```

示例效果如下：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d27fcddc76396b4ab5b20b43f97c8d8_seTUt6LN9m.png?height=210&lazyload=true&maxWidth=500&width=1224)

## 常见问题

### 如何快速获取接口对应的示例代码？

飞书开放平台提供了 [API 调试台](https://open.feishu.cn/api-explorer)，通过该平台可以快速调试服务端 API，快速获取资源 ID 及生成多语言示例代码的能力，为您节省开发成本。例如，通过 API 调试台调用[发送消息](https://open.feishu.cn/api-explorer/cli_a61e4f821889d00c?apiName=create&from=op_doc_tab&project=im&resource=message&version=v1)接口，在调试台成功完成测试后，可通过 **示例代码** 页面查阅 Node SDK 对应的接口调用代码。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/58e96229a8333d013f3c54eac9d4ce8d_it8ldccDWh.png?height=1324&lazyload=true&maxWidth=600&width=2878)

### 如何调用历史版本 API、API 调试台搜索不到的 API、SDK 内找不到方法的 API ？

可以使用 SDK 提供的原生模式调用 API（需要使用 Client 上的 request 方法）。

```js
import * as lark from '@larksuiteoapi/node-sdk';

const client = new lark.Client({
    appId: 'app id',
    appSecret: 'app secret'
});

const res = await client.request({
    method: 'POST',
    url: 'xxx',
    data: {},
    params: {},
});
```
参数说明如下，你可以通过具体的 API 文档获取以下接口信息。例如：[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

- method：指定 API 所需的 HTTP Method。
- url：指定 API 的 HTTP URL，如果接口有路径参数也需要拼接在 url 内。
- data：接口的请求体。
- params：接口的查询参数。

### 在 Client 中自定义 domain 时 URL 后是否需要 ‘/’ ？

不需要。例如：`domain: https://www.example.com` 后面不需要加 `/`。

### 调用 API 时 Query 参数为列表如何传值？

- 方式一：将 NodeJS SDK 升级到 1.37.2 版本解决。
- 方式二：使用 paramsSerializer 并通过 [https://www.npmjs.com/package/qs](https://www.npmjs.com/package/qs) 序列化参数。

```js
    axios.get('/myController/myAction', {
      params: {
        storeIds: [1,2,3]
      },
      paramsSerializer: params => {
        return qs.stringify(params)
      }
    })
	```
