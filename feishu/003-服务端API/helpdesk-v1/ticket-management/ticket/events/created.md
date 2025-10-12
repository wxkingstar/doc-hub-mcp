<!--
title: 创建工单
id: 6955768699895545858
fullPath: /uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/events/created
updatedAt: 1729741499000
source: https://open.feishu.cn/document/server-docs/helpdesk-v1/ticket-management/ticket/events/created
-->
# 创建工单

可监听服务台的工单创建事件。需使用订阅接口订阅：[事件订阅](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/event/subscribe){使用示例}(url=/api/tools/api_explore/api_explore_config?project=helpdesk&version=v1&resource=ticket&event=created)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">
服务台同一个工单存在机器人阶段和人工阶段，从机器人阶段转人工后，不会生成新的工单，而是变更原工单的stage。如果监听工单变更，可以订阅[工单变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/events/updated)
</md-alert>
:::



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
      <md-td>helpdesk.ticket.created_v1</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
    <md-th>
            权限要求
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
    </md-th>
      <md-td>
            <md-perm name="helpdesk:all:readonly" desc="获取服务台资源详情" support_app_types="custom" tags="">获取服务台资源详情</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
          字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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



### 事件体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 40%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 30%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
      
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >schema</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件模式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >header</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_header</md-text>
	</md-dt-td>
	<md-dt-td>
	事件头
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件创建时间戳（单位：毫秒）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户 Key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >ticket_event</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ticket_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工单ID

[可以从工单列表里面取](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/list)

[也可以订阅工单创建事件获取](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/events/created)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >helpdesk_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	服务台id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >guest</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >ticket_user_event</md-text>
	</md-dt-td>
	<md-dt-td>
	用户id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >union_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 union id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 user id

**字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 open id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >stage</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单阶段：1. 机器人 2. 人工
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单状态，1：已创建 2: 处理中 3: 排队中 4：待定 5：待用户响应 50: 被机器人关闭 51: 被客服关闭 52: 用户自己关闭
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >score</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单评分，1：不满意，2:一般，3:满意
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >created_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >updated_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单更新时间，没有值时为-1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >closed_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	关单时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >channel</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单渠道，描述：9：Open API 2：二维码 14：分享 13：搜索 其他数字：其他渠道
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >solve</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工单是否解决 1:没解决 2:已解决
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >customized_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >customized_field_display_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段

**注意**：该事件不会返回该值，你可以获取 ticket_id 后调用[查询指定工单详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/get)接口查询自定义字段信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段值


	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >key_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	键名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >display_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	展示名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	展示位置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否必填
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >editable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否可修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	oc_xxxxxxx
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 事件体示例
:::html
<md-code-json>
{
    "schema": "2.0",
    "header": {
        "event_id": "5e3702a84e847582be8db7fb73283c02",
        "event_type": "helpdesk.ticket.created_v1",
        "create_time": "1608725989000",
        "token": "rvaYgkND1GOiu5MM0E1rncYC6PLtF7JV",
        "app_id": "cli_9f5343c580712544",
        "tenant_key": "2ca1d211f64f6438"
    },
    "event": {
        "ticket_id": "6626871355780366331",
        "helpdesk_id": "6626871355780366330",
        "guest": {
            "id": {
                "union_id": "on_8ed6aa67826108097d9ee143816345",
                "user_id": "e33ggbyz",
                "open_id": "ou_84aad35d084aa403a838cf73ee18467"
            },
            "name": "-"
        },
        "stage": 1,
        "status": 1,
        "score": 1,
        "created_at": 1616920429000,
        "updated_at": 1616920429000,
        "closed_at": 1616920429000,
        "channel": 0,
        "solve": 1,
        "customized_fields": [
            {
                "id": "123",
                "value": "value",
                "key_name": "key",
                "display_name": "display name",
                "position": 1,
                "required": true,
                "editable": true
            }
        ],
        "chat_id": "oc_xxxxxxx"
    }
}
</md-code-json>
:::






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
	"github.com/larksuite/oapi-sdk-go/v3/service/helpdesk/v1"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2TicketCreatedV1(func(ctx context.Context, event *larkhelpdesk.P2TicketCreatedV1) error {
			fmt.Printf("[ OnP2TicketCreatedV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_helpdesk_ticket_created_v1(data: lark.helpdesk.v1.P2HelpdeskTicketCreatedV1) -> None:
    print(f'[ do_p2_helpdesk_ticket_created_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_helpdesk_ticket_created_v1(do_p2_helpdesk_ticket_created_v1) \
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

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.helpdesk.HelpdeskService;
import com.lark.oapi.service.helpdesk.v1.model.P2TicketCreatedV1;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2TicketCreatedV1(new HelpdeskService.P2TicketCreatedV1Handler() {
                @Override
                public void handle(P2TicketCreatedV1 event) throws Exception {
                    System.out.printf("[ onP2TicketCreatedV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
        'helpdesk.ticket.created_v1': async (data) => {
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
	"github.com/larksuite/oapi-sdk-go/v3/service/helpdesk/v1"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2TicketCreatedV1(func(ctx context.Context, event *larkhelpdesk.P2TicketCreatedV1) error {
			fmt.Printf("[ OnP2TicketCreatedV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_helpdesk_ticket_created_v1(data: lark.helpdesk.v1.P2HelpdeskTicketCreatedV1) -> None:
    print(f'[ do_p2_helpdesk_ticket_created_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_helpdesk_ticket_created_v1(do_p2_helpdesk_ticket_created_v1) \
    .build()


# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = event_handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.lark.oapi.sample.event;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.helpdesk.HelpdeskService;
import com.lark.oapi.service.helpdesk.v1.model.P2TicketCreatedV1;
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
            .onP2TicketCreatedV1(new HelpdeskService.P2TicketCreatedV1Handler() {
                @Override
                public void handle(P2TicketCreatedV1 event) throws Exception {
                    System.out.printf("[ onP2TicketCreatedV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
    'helpdesk.ticket.created_v1': async (data) => {
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
