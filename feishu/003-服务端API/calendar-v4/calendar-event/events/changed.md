<!--
title: 日程变更
id: 7002206318614626308
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/events/changed
updatedAt: 1721111237000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-event/events/changed
-->
# 日程变更

当用户订阅日程变更事件后，被订阅的日历下有日程发生变更时，将会触发该事件。{使用示例}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar.event&event=changed)

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

</md-alert>
:::

## 注意事项

在使用该事件之前，请务必阅读该注意事项。

- 先调用[订阅日程变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/subscription)接口订阅事件，再前往应用中配置事件订阅，这样才可以在事件触发时接收到事件数据。了解事件订阅参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。
- 该事件包含的日程 ID（calendar_event_id）、变更类型（change_type）、用户回复日程的变更状态（rsvp_infos）参数均在灰度测试阶段，如需使用请咨询你的商务对接人或者[技术支持](https://applink.feishu.cn/TLJpeNdW)。
	
	如果当前只能接收到发生日程变动的用户信息（user_id_list）以及日历 ID（calendar_id），那么你可以在接收到事件请求后，提取 user_id_list 参数中的用户信息，然后用这些用户身份（user_access_token）调用[获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)接口，通过日历 ID 获取日历中的日程信息。

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
      <md-td>calendar.calendar.event.changed_v4</md-td>
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
            <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
            <md-perm name="calendar:calendar.event:read" desc="读取日程信息" support_app_types="custom,isv" tags="">读取日程信息</md-perm>
            <md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv" tags="">获取日历、日程及忙闲信息</md-perm>
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
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
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
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程所在的日历 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_id\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	需要推送事件的用户列表。关于用户不同 ID 的介绍，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction).
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >union_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 union_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 user_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >calendar_event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发生变更的日程 ID。

**注意**：该参数在灰度测试阶段，如需使用请咨询你的商务对接人或者[技术支持](https://applink.feishu.cn/TLJpeNdW)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >change_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程变更类型。

**可能值有：**
- create：日程在日历上被创建。新建日程或者作为参与人被邀请进日程，都属于 create 类型。
- update：日程发生了变更。
- delete：日程从日历上消失。删除日程或者作为参与人被移出了日程，都属于 delete 类型。
- rsvp：用户类型的参与人主动对日程进行回复（包括回复接收、拒绝、待定）。

**事件聚合策略**：

在实际推送事件时，同一个日历（calendarID）、同一个日程（eventID）的变更事件，会以 3 秒为一个窗口进行聚合推送事件。在 3 秒内：

- 日程进行了 create + delete 变更时，不推送事件。
- 日程进行了 create + update 变更时，推送 create 变更类型的事件。
- 日程进行了 delete + update 变更时，推送 delete 变更类型的事件。
- 日程进行了 update + update 变更时，只推送最后一次 update 变更类型的事件。
- 有多次 rsvp 变更时，只推送最后一次 rsvp 变更类型的事件。


**注意**：该参数在灰度测试阶段，如需使用请咨询你的商务对接人或[技术支持](https://applink.feishu.cn/TLJpeNdW)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >rsvp_infos</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >open_event_rsvp_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	RSVP 变更详情，即日程参与人的回复状态。

**注意**：

- 该参数仅包含用户类型参与人的变更详情。
- 该参数在灰度测试阶段，如需使用请咨询你的商务对接人或[技术支持](https://applink.feishu.cn/TLJpeNdW)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >from_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	用户类型参与人的用户 ID。
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
	<md-text type="field-name" >rsvp_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	RSVP 操作状态。

**可能值有：**
- accept：接收
- decline：拒绝
- tentative：待定
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
        "event_type": "calendar.calendar.event.changed_v4",
        "create_time": "1608725989000",
        "token": "rvaYgkND1GOiu5MM0E1rncYC6PLtF7JV",
        "app_id": "cli_9f5343c580712544",
        "tenant_key": "2ca1d211f64f6438"
    },
    "event": {
        "calendar_id": "feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn",
        "user_id_list": [
            {
                "union_id": "on_xxxxxx",
                "user_id": "exxxxxxz",
                "open_id": "ou_xxxxxx"
            }
        ],
        "calendar_event_id": "efa67a98-06a8-4df5-8559-746c8f4477ef_0",
        "change_type": "create",
        "rsvp_infos": [
            {
                "from_user_id": {
                    "union_id": "on_8ed6aa67826108097d9ee143816345",
                    "user_id": "e33ggbyz",
                    "open_id": "ou_84aad35d084aa403a838cf73ee18467"
                },
                "rsvp_status": "accept"
            }
        ]
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
	"github.com/larksuite/oapi-sdk-go/v3/service/calendar/v4"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2CalendarEventChangedV4(func(ctx context.Context, event *larkcalendar.P2CalendarEventChangedV4) error {
			fmt.Printf("[ OnP2CalendarEventChangedV4 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_calendar_calendar_event_changed_v4(data: lark.calendar.v4.P2CalendarCalendarEventChangedV4) -> None:
    print(f'[ do_p2_calendar_calendar_event_changed_v4 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_calendar_calendar_event_changed_v4(do_p2_calendar_calendar_event_changed_v4) \
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
import com.lark.oapi.service.calendar.CalendarService;
import com.lark.oapi.service.calendar.v4.model.P2CalendarEventChangedV4;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2CalendarEventChangedV4(new CalendarService.P2CalendarEventChangedV4Handler() {
                @Override
                public void handle(P2CalendarEventChangedV4 event) throws Exception {
                    System.out.printf("[ onP2CalendarEventChangedV4 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
        'calendar.calendar.event.changed_v4': async (data) => {
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
	"github.com/larksuite/oapi-sdk-go/v3/service/calendar/v4"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2CalendarEventChangedV4(func(ctx context.Context, event *larkcalendar.P2CalendarEventChangedV4) error {
			fmt.Printf("[ OnP2CalendarEventChangedV4 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_calendar_calendar_event_changed_v4(data: lark.calendar.v4.P2CalendarCalendarEventChangedV4) -> None:
    print(f'[ do_p2_calendar_calendar_event_changed_v4 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_calendar_calendar_event_changed_v4(do_p2_calendar_calendar_event_changed_v4) \
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
import com.lark.oapi.service.calendar.CalendarService;
import com.lark.oapi.service.calendar.v4.model.P2CalendarEventChangedV4;
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
            .onP2CalendarEventChangedV4(new CalendarService.P2CalendarEventChangedV4Handler() {
                @Override
                public void handle(P2CalendarEventChangedV4 event) throws Exception {
                    System.out.printf("[ onP2CalendarEventChangedV4 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
    'calendar.calendar.event.changed_v4': async (data) => {
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
