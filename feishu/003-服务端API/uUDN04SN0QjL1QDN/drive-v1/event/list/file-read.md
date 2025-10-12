<!--
title: 文件已读
id: 7013346140632481820
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/event/file-read
updatedAt: 1744103553000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/event/list/file-read
-->
# 文件已读

文件已读事件。云文档被打开时，将触发此事件。

:::html
<md-alert type="tip">
了解事件订阅的配置流程和使用场景，参考[事件概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

</md-alert>
:::

## 前提条件

添加该事件之前，你需确保已调用[订阅云文档事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe)接口。
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
      <md-td>drive.file.read_v1</md-td>
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
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
        	<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
        	<md-perm name="docs:event.document_opened:read" desc="接收云文档打开事件" support_app_types="custom,isv" tags="">接收云文档打开事件</md-perm>
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



## 事件体

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: $$$drive.v1.file.event.bitable_field_changed.message.body.table.param-column.width$$$;">名称</md-dt-th> <md-dt-th style="width: $$$drive.v1.file.event.bitable_field_changed.message.body.table.type-column.width$$$;">类型</md-dt-th> <md-dt-th style="width: $$$drive.v1.file.event.bitable_field_changed.message.body.table.desc-column.width$$$;">描述</md-dt-th>
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
事件格式的版本。无此字段的即为 1.0 版本。
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
<md-text type="field-name" >token</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
事件 token
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
<md-text type="field-name" >tenant_key</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
租户 key，即企业标识
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
<md-text type="field-name" >resource_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
订阅的云文档 token
</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >user_list</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
订阅的用户列表
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
用户的 Union ID
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
<md-text type="field-name" >file_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
云文档类型，支持以下枚举：
- doc：旧版文档。已不推荐使用
- docx：新版文档
- sheet：电子表格
- bitable：多维表格
- slides：幻灯片
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >file_token</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
多维表格 token
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >operator_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >-</md-text>
</md-dt-td>
<md-dt-td>
操作人 ID
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
用户的 Union ID
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
用户的 User ID
  
**字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
用户的 Open ID
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

## 事件体示例

``` json
{
  "schema": "2.0", // 事件格式的版本。无此字段的即为 1.0 版本
  "header": {
    "event_id": "88ba7a69073dcc5b0dea70be77xxxxxx", // 事件的唯一标识
    "token": "xxxxxx", // 事件 token
    "create_time": "1612246959000", //  事件创建时间戳（单位：毫秒）
    "event_type": "drive.file.read_v1", // 事件类型 
    "tenant_key": "xxxxxx", // 租户 key，即企业标识 
    "app_id": "cli_xxxxxx", // 应用 ID
    "resource_id": "doccnfYZzTlvXqZIGTdAHKabcef", // 资源 ID，即订阅的云文档 token
    "user_list": [
      { // 订阅的用户列表
        "union_id": "on_xxxxxx"
      }
    ]
  },
  "event": {
    "file_token": "doccnfYZzTlvXqZIGTdAHKabcef", // 文件 token
    "file_type": "docx", // 文件类型，支持 doc、sheet、docx 和 bitable
    "operator_id_list": [
      { // 操作者 ID 列表
        "open_id": "ou_xxxxxx",
        "union_id": "on_xxxxxx",
        "user_id": "xxxxxx"
      }
    ]
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
	"github.com/larksuite/oapi-sdk-go/v3/service/drive/v1"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2FileReadV1(func(ctx context.Context, event *larkdrive.P2FileReadV1) error {
			fmt.Printf("[ OnP2FileReadV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_drive_file_read_v1(data: lark.drive.v1.P2DriveFileReadV1) -> None:
    print(f'[ do_p2_drive_file_read_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_drive_file_read_v1(do_p2_drive_file_read_v1) \
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
import com.lark.oapi.service.drive.DriveService;
import com.lark.oapi.service.drive.v1.model.P2FileReadV1;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2FileReadV1(new DriveService.P2FileReadV1Handler() {
                @Override
                public void handle(P2FileReadV1 event) throws Exception {
                    System.out.printf("[ onP2FileReadV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
        'drive.file.read_v1': async (data) => {
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
	"github.com/larksuite/oapi-sdk-go/v3/service/drive/v1"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2FileReadV1(func(ctx context.Context, event *larkdrive.P2FileReadV1) error {
			fmt.Printf("[ OnP2FileReadV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_drive_file_read_v1(data: lark.drive.v1.P2DriveFileReadV1) -> None:
    print(f'[ do_p2_drive_file_read_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_drive_file_read_v1(do_p2_drive_file_read_v1) \
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
import com.lark.oapi.service.drive.DriveService;
import com.lark.oapi.service.drive.v1.model.P2FileReadV1;
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
            .onP2FileReadV1(new DriveService.P2FileReadV1Handler() {
                @Override
                public void handle(P2FileReadV1 event) throws Exception {
                    System.out.printf("[ onP2FileReadV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
    'drive.file.read_v1': async (data) => {
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
