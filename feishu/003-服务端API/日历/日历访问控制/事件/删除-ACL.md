---
title: "删除 ACL"
source_url: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-acl/events/deleted
last_remote_update: 2024-07-16
last_remote_update_timestamp: 1721110938000
---
最后更新于 2024-07-16

# 删除 ACL

当订阅的日历上有访问控制被删除时，将会触发此事件。

**注意事项**：你需要先为用户[订阅日历访问控制变更事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/subscription)，并且需要在应用中配置事件订阅，这样才可以在事件触发时接收到事件数据。了解事件订阅参见[事件订阅概述](https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

## 事件
名称 | 值
---|---
事件类型 | calendar.calendar.acl.deleted_v4
支持的应用类型 | 自建应用、商店应用
权限要求  
            **订阅该事件所需的权限，开启其中任意一项权限即可订阅**  
            开启任一权限即可 | 更新日历及日程信息(calendar:calendar)  
            读取日历访问控制权限(calendar:calendar.acl:read)  
            获取日历、日程及忙闲信息(calendar:calendar:readonly)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)
推送方式 | [Webhook](https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM)

### 事件体

名称 | 类型 | 描述
--- | --- | ---
schema | string | 事件模式
header | event_header | 事件头
event_id | string | 事件 ID
event_type | string | 事件类型
create_time | string | 事件创建时间戳（单位：毫秒）
token | string | 事件 Token
app_id | string | 应用 ID
tenant_key | string | 租户 Key
event | calendar.acl_event | \-
acl_id | string | 访问控制 ID。该 ID 在单个日历实体内唯一，不同日历实体可能存在重复的访问控制 ID。
role | string | 对日历的访问权限。  
**可选值有**：  
- unknown：未知权限。  
- free_busy_reader：游客，只能看到忙碌、空闲信息。  
- reader：订阅者，可查看所有日程详情。  
- writer：编辑者，可创建及修改日程。  
- owner：管理员，可管理日历及共享设置。
scope | acl_scope_event | 权限生效范围。
type | string | 权限生效范围的类型。  
**可选值有**：  
- user：用户
user_id | user_id | 用户 ID
union_id | string | 用户的 union id
user_id | string | 用户的 user id  
**字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
open_id | string | 用户的 open id
user_id_list | user_id\[\] | 需要推送事件的用户列表。
union_id | string | 用户的 union_id。
user_id | string | 用户的 user_id。
open_id | string | 用户的 open_id。

### 事件体示例
```json
{
    "schema": "2.0",
    "header": {
        "event_id": "5e3702a84e847582be8db7fb73283c02",
        "event_type": "calendar.calendar.acl.deleted_v4",
        "create_time": "1608725989000",
        "token": "rvaYgkND1GOiu5MM0E1rncYC6PLtF7JV",
        "app_id": "cli_9f5343c580712544",
        "tenant_key": "2ca1d211f64f6438"
    },
    "event": {
        "acl_id": "user_xxxxx",
        "role": "unknown",
        "scope": {
            "type": "user",
            "user_id": {
                "union_id": "on_8ed6aa67826108097d9ee143816345",
                "user_id": "e33ggbyz",
                "open_id": "ou_84aad35d084aa403a838cf73ee18467"
            }
        },
        "user_id_list": [
            {
                "union_id": "on_xxxxxx",
                "user_id": "exxxxxxz",
                "open_id": "ou_xxxxxx"
            }
        ]
    }
}
```

### 事件订阅示例代码

事件订阅流程可参考：[事件订阅概述](https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM)，新手入门可参考：[教程](https://open.feishu.cn/document/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)

订阅方式
  **
    <ul class="md_render-table_solid md_render-table">
      <li>**长连接方式（推荐）：**无需发布到公网地址，在本地开发环境中即可接收事件回调，且无需处理加解密逻辑。</li>
      <li>**发送至开发者服务器：**需要提供服务器公网地址。</li>
    </ul>
  **

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
		OnP2CalendarAclDeletedV4(func(ctx context.Context, event *larkcalendar.P2CalendarAclDeletedV4) error {
			fmt.Printf("[ OnP2CalendarAclDeletedV4 access ], data: %s\n", larkcore.Prettify(event))
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

# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
import lark_oapi as lark

def do_p2_calendar_calendar_acl_deleted_v4(data: lark.calendar.v4.P2CalendarCalendarAclDeletedV4) -> None:
    print(f'[ do_p2_calendar_calendar_acl_deleted_v4 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_calendar_calendar_acl_deleted_v4(do_p2_calendar_calendar_acl_deleted_v4) \
    .build()

def main():
    # 构建 client Build client
    cli = lark.ws.Client("APP_ID", "APP_SECRET",
                        event_handler=event_handler, log_level=lark.LogLevel.DEBUG)
    # 建立长连接 Establish persistent connection
    cli.start()

if __name__ == "__main__":
    main()

package com.example.sample;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.calendar.CalendarService;
import com.lark.oapi.service.calendar.v4.model.P2CalendarAclDeletedV4;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2CalendarAclDeletedV4(new CalendarService.P2CalendarAclDeletedV4Handler() {
                @Override
                public void handle(P2CalendarAclDeletedV4 event) throws Exception {
                    System.out.printf("[ onP2CalendarAclDeletedV4 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
        'calendar.calendar.acl.deleted_v4': async (data) => {
            console.log(data);
        }
    })
});

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
		OnP2CalendarAclDeletedV4(func(ctx context.Context, event *larkcalendar.P2CalendarAclDeletedV4) error {
			fmt.Printf("[ OnP2CalendarAclDeletedV4 access ], data: %s\n", larkcore.Prettify(event))
			return nil
		})

// 创建路由处理器 Create route handler
	http.HandleFunc("/webhook/event", httpserverext.NewEventHandlerFunc(handler, larkevent.WithLogLevel(larkcore.LogLevelDebug)))

err := http.ListenAndServe(":7777", nil)

if err != nil {
		panic(err)
	}
}

# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
from flask import Flask
from lark_oapi.adapter.flask import *
import lark_oapi as lark

app = Flask(__name__)

def do_p2_calendar_calendar_acl_deleted_v4(data: lark.calendar.v4.P2CalendarCalendarAclDeletedV4) -> None:
    print(f'[ do_p2_calendar_calendar_acl_deleted_v4 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_calendar_calendar_acl_deleted_v4(do_p2_calendar_calendar_acl_deleted_v4) \
    .build()

# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = event_handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

package com.lark.oapi.sample.event;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.calendar.CalendarService;
import com.lark.oapi.service.calendar.v4.model.P2CalendarAclDeletedV4;
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
            .onP2CalendarAclDeletedV4(new CalendarService.P2CalendarAclDeletedV4Handler() {
                @Override
                public void handle(P2CalendarAclDeletedV4 event) throws Exception {
                    System.out.printf("[ onP2CalendarAclDeletedV4 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import http from 'http';
import * as lark from '@larksuiteoapi/node-sdk';

// 注册事件 Register event
const eventDispatcher = new lark.EventDispatcher({
    encryptKey: '',
    verificationToken: '',
}).register({
    'calendar.calendar.acl.deleted_v4': async (data) => {
        console.log(data);
        return 'success';
    },
});

const server = http.createServer();
// 创建路由处理器 Create route handler
server.on('request', lark.adaptDefault('/webhook/event', eventDispatcher));
server.listen(3000);
