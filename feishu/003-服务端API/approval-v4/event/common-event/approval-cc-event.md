<!--
title: 审批抄送状态变更
id: 7194805817030885380
fullPath: /ukTMukTMukTM/uIDO24iM4YjLygjN/event/common-event/approval-cc-event
updatedAt: 1742781472000
source: https://open.feishu.cn/document/server-docs/approval-v4/event/common-event/approval-cc-event
-->
# 审批抄送状态变更

当审批实例内创建抄送或者被抄送人已读时，会触发该事件。

- 创建抄送时，该事件的 `operate` 参数取值为 CREATE。
- 被抄送人已读时，该事件的 `operate` 参数取值为 READ。

## 前提条件

- 应用已配置事件订阅，了解事件订阅可参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

- 应用已调用[订阅审批事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/subscribe)接口，订阅了审批实例对应的审批定义 Code。


## 事件

:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>事件类型</md-th>
      <md-td>approval_cc</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
    <md-th>
            权限要求
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
    </md-th>
      <md-td>
            <md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
			<md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
      </md-td>
    </md-tr>

    <md-tr>
      <md-th>推送方式</md-th>
      <md-td>
            <md-tag mode="inline" type="push-webhook" href="/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM" >Webhook</md-tag>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 事件体

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>ts</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件发送时间。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件 Token，即 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>固定取值 `event_callback`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>事件详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 App ID。可调用[获取应用信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application/get)接口查询应用详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>企业唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件类型。固定取值 `approval_cc`</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>approval_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批定义 Code。可调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)接口查询审批定义详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>instance_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批实例 Code。可调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口查询审批实例详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>抄送 ID。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>被抄送人的 user_id。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 user_id 获取用户信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>create_time</md-dt-td>
<md-dt-td>long</md-dt-td>
<md-dt-td>抄送时间，毫秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>operate</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>操作类型。可能值有：

- CREATE：创建抄送
- READ：抄送人已读
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>from</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>执行抄送操作的用户 user_id，可能为空。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 user_id 获取用户信息。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 事件体示例

```json
{    
     "ts": "1502199207.7171419",
     "uuid": "bc447199585340d1f3728d26b1c0297a",
     "token": "41a9425ea7df4536a7623e38fa321bae",
     "type": "event_callback",
     "event": { 
         "app_id": "cli_xxx", 
         "tenant_key":"xxx", 
         "type": "approval_cc", 
         "approval_code": "7C468A54-8745-2245-9675-08B7C63E7A85",
         "instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71", 
         "id": "12345",
         "user_id": "b613t51g",
         "create_time": 1502199207000, 
         "operate": "CREATE",
         "from": "b613t51g"
    }
}
```

### 事件订阅示例代码

事件订阅流程可参考：[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)，新手入门可参考：[教程](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)

:::html
<div style="margin-bottom: 4px;display: flex;column-gap: 4px;align-items: center;">
  <md-text type='field-name'>订阅方式</md-text>
  <md-tooltip>
    <ul class="md_render-table_solid md_render-table">
      <li><b>长连接方式（推荐）：</b>无需发布到公网地址，在本地开发环境中即可接收事件回调，且无需处理加解密逻辑。</li>
      <li><b>发送至开发者服务器：</b>需要提供服务器公网地址。</li>
    </ul>
  </md-tooltip>
</div>
:::

:::html
<md-code-tabs>
  <md-code-tab-group title="使用长连接接收事件">
        
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
        "context"
        "fmt"

        larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
        larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
        "github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
        "github.com/larksuite/oapi-sdk-go/v3/service/approval/old"
        larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
        // 注册事件 Register event
        eventHandler := dispatcher.NewEventDispatcher("", "").
                OnCustomizedEvent("approval_cc", func(ctx context.Context, event *larkevent.EventReq) error {
                        fmt.Printf("[ OnCustomizedEvent access ], type: message, data: %s\n", string(event.Body))
                        return nil
                })

        // 构建 client Build client
        cli := larkws.NewClient("YOUR_APP_ID", "YOUR_APP_SECRET",
                larkws.WithEventHandler(eventHandler),
                larkws.WithLogLevel(larkcore.LogLevelDebug),
        )

        // 建立长连接 Establish persistent connection
        err := cli.Start(context.Background())

        if err != nil {
                panic(err)
        }
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
import lark_oapi as lark


def do_customized_event(data: lark.CustomizedEvent) -> None:
    print(f'[ do_customized_event access ], type: message, data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p1_customized_event("approval_cc", do_customized_event) \
    .build()


def main():
    # 构建 client Build client
    cli = lark.ws.Client("APP_ID", "APP_SECRET",
                        event_handler=event_handler, log_level=lark.LogLevel.DEBUG)
    # 建立长连接 Establish persistent connection
    cli.start()

if __name__ == "__main__":
    main()

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.example.sample;

import java.nio.charset.StandardCharsets;
import com.lark.oapi.core.request.EventReq;
import com.lark.oapi.event.CustomEventHandler;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onCustomizedEvent("approval_cc", new CustomEventHandler() {
                @Override
                public void handle(EventReq event) throws Exception {
                    System.out.printf("[ onCustomizedEvent access ], type: message, data: %s\n", new String(event.getBody(), StandardCharsets.UTF_8));
                }
            })
            .build();

    public static void main(String[] args) {
        // 构建 client Build client
        Client client = new Client.Builder("APP_ID", "APP_SECRET")
                .eventHandler(EVENT_HANDLER)
                .build();
        // 建立长连接 Establish persistent connection
        client.start();
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import * as Lark from '@larksuiteoapi/node-sdk';
const baseConfig = {
    appId: 'APP_ID',
    appSecret: 'APP_SECRET'
}
// 构建 client Build client
const wsClient = new Lark.WSClient(baseConfig);
// 建立长连接 Establish persistent connection
wsClient.start({
    // 注册事件 Register event
    eventDispatcher: new Lark.EventDispatcher({}).register({
        'approval_cc': async (data) => {
            console.log(data);
        }
    })
});
    </md-code-tab-panel>

  </md-code-tab-group>
  <md-code-tab-group title="将事件推送至开发者服务器">
        
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
        "context"
        "fmt"
        "net/http"

        larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
        "github.com/larksuite/oapi-sdk-go/v3/core/httpserverext"
        larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
        "github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
        "github.com/larksuite/oapi-sdk-go/v3/service/approval/old"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
        // 注册事件 Register event
        eventHandler := dispatcher.NewEventDispatcher("", "").
                OnCustomizedEvent("approval_cc", func(ctx context.Context, event *larkevent.EventReq) error {
                        fmt.Printf("[ OnCustomizedEvent access ], type: message, data: %s\n", string(event.Body))
                        return nil
                })

        // 创建路由处理器 Create route handler
        http.HandleFunc("/webhook/event", httpserverext.NewEventHandlerFunc(handler, larkevent.WithLogLevel(larkcore.LogLevelDebug)))

        err := http.ListenAndServe(":7777", nil)

        if err != nil {
                panic(err)
        }
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
from flask import Flask
from lark_oapi.adapter.flask import *
import lark_oapi as lark

app = Flask(__name__)


def do_customized_event(data: lark.CustomizedEvent) -> None:
    print(f'[ do_customized_event access ], type: message, data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p1_customized_event("approval_cc", do_customized_event) \
    .build()


# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.lark.oapi.sample.event;

import java.nio.charset.StandardCharsets;
import com.lark.oapi.core.request.EventReq;
import com.lark.oapi.event.CustomEventHandler;
import com.lark.oapi.sdk.servlet.ext.ServletAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
@RestController
public class EventController {

    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("verificationToken", "encryptKey")
            .onCustomizedEvent("approval_cc", new CustomEventHandler() {
                @Override
                public void handle(EventReq event) throws Exception {
                    System.out.printf("[ onCustomizedEvent access ], type: message, data: %s\n", new String(event.getBody(), StandardCharsets.UTF_8));
                }
            })
            .build();

    // 注入 ServletAdapter 实例 Inject ServletAdapter instance
    @Autowired
    private ServletAdapter servletAdapter;

    // 创建路由处理器 Create route handler
    @RequestMapping("/webhook/event")
    public void event(HttpServletRequest request, HttpServletResponse response)
            throws Throwable {
        // 回调扩展包提供的事件回调处理器 Callback handler provided by the extension package
        servletAdapter.handleEvent(request, response, EVENT_DISPATCHER);
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import http from 'http';
import * as lark from '@larksuiteoapi/node-sdk';

// 注册事件 Register event
const eventDispatcher = new lark.EventDispatcher({
    encryptKey: '',
    verificationToken: '',
}).register({
    'approval_cc': async (data) => {
        console.log(data);
        return 'success';
    },
});

const server = http.createServer();
// 创建路由处理器 Create route handler
server.on('request', lark.adaptDefault('/webhook/event', eventDispatcher));
server.listen(3000);
    </md-code-tab-panel>

  </md-code-tab-group>
</md-code-tabs>

:::