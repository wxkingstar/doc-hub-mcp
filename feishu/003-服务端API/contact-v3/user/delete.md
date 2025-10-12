<!--
title: 删除用户
id: 6943913881476907035
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete
updatedAt: 1732262967000
source: https://open.feishu.cn/document/server-docs/contact-v3/user/delete
-->
# 删除用户

调用该接口从通讯录内删除一个指定用户（该动作可以理解为员工离职），删除时可通过请求参数将用户所有的群组、文档、日程和应用等数据转让至他人。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=user&method=delete)

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

- 调用该接口的应用的[通讯录权限范围](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)必须包含用户所属的部门。例如，待删除用户归属部门 A、部门 B，则应用的通讯录权限范围必须包括部门 A 和部门 B，这样才可以成功删除用户。
- 删除用户后，你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过用户 ID 查询用户的状态（响应参数 status），从而确保用户已成功删除（对应已离职状态）。

## 请求
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
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/contact/v3/users/:user_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
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
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
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
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 ID。ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_chat_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门群接收者的用户 ID。被删除用户为部门群群主时，转让群主给指定接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定该参数时，如果被删除用户是部门群群主，则群主会默认转让给群内第一个入群的人。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >external_chat_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外部群接收者的用户 ID。被删除用户为外部群群主时，转让群主给指定接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定该参数时，如果被删除用户是外部群群主，则群主会默认转让给群内与被删除用户在同一组织的第一个入群的人。如果组织内只有被删除用户在群里，则解散外部群。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >docs_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文档接收者的用户 ID。用户被删除时，其拥有的文档转让给接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则将文档资源保留在该用户名下。
- 文档转让后，只改变文档所有者，其他权限不受影响。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >calendar_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程接收者的用户 ID。用户被删除时，其拥有的日程转让给接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则直接删除日程资源。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >application_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	应用接受者的用户 ID。用户被删除时，其创建的应用转让给接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留应用在该用户名下，但该用户无法登录开发者后台进行应用管理。企业管理员可以在管理后台手动转移应用给其他人。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >minutes_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	妙记接收者的用户 ID。用户被删除时，其拥有的妙记资源转让给接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 如果不指定接收者，则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则将妙记保留在该用户名下。
- 妙记转让后，只改变妙记所有者，不影响已分享的妙记链接。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >survey_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书问卷接收者的用户 ID。用户被删除时，其拥有的飞书问卷资源转让给接收者。

**注意**：
- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则直接删除飞书问卷资源。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >email_acceptor</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >resource_acceptor</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户邮件资源的处理方式。

该参数为可选参数，如果未传值，则默认将邮件资源转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留邮件资源在该用户名下。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >processing_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	处理方式。

**示例值**："1"

**可选值有**：
<md-enum>
<md-enum-item key="1" >转移资源</md-enum-item>
<md-enum-item key="2" >保留资源</md-enum-item>
<md-enum-item key="3" >删除资源</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	邮件资源接收者的用户 ID。ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**说明**：仅当 `processing_type` 取值为 `1` 时，需要设置该参数值。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >anycross_acceptor_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户集成平台资源的接收者的用户 ID。

**注意：**

- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留应用在该用户名下，但该用户无法登录飞书集成平台。企业管理员可以在管理后台手动转移应用给其他人。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "department_chat_acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "external_chat_acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "docs_acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "calendar_acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "application_acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
	"email_acceptor": {
		"processing_type": "1",
		"acceptor_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62"
	}
}
</md-code-json>
:::

**Go 请求示例**

```go
import (
	"context"

	"github.com/larksuite/oapi-sdk-go/v3"
	"github.com/larksuite/oapi-sdk-go/v3/service/contact/v3"
)

func main() {
	// 创建 Client
	client := lark.NewClient("appID", "appSecret")

	// 创建请求对象
	req := larkcontact.NewDeleteUserReqBuilder().
		UserId(`ou_7dab8a3d3cdcc9da365777c7ad535d62`).
		Body(larkcontact.NewDeleteUserReqBodyBuilder().
			DepartmentChatAcceptorUserId(`ou_7dab8a3d3cdcc9da365777c7ad535d62`).
			ExternalChatAcceptorUserId(`ou_7dab8a3d3cdcc9da365777c7ad535d62`).
			DocsAcceptorUserId(`ou_7dab8a3d3cdcc9da365777c7ad535d62`).
			Build()).
		Build()

	// 发起请求
	resp, err := client.Contact.User.Delete(context.Background(), req)
}
```

**Java 请求示例**
```java
import com.lark.oapi.Client;
import com.lark.oapi.core.request.RequestOptions;
import com.lark.oapi.service.contact.v3.model.DeleteUserReq;
import com.lark.oapi.service.contact.v3.model.DeleteUserReqBody;
import com.lark.oapi.service.contact.v3.model.DeleteUserResp;

public class Main {
    public static void main(String arg[]) throws Exception {
        // 构建client
        Client client = Client.newBuilder("appId", "appSecret").build();

        // 创建请求对象
        DeleteUserReq req = DeleteUserReq.newBuilder()
                .userId("ou_7dab8a3d3cdcc9da365777c7ad535d62")
                .userIdType("")
                .deleteUserReqBody(DeleteUserReqBody.newBuilder()
                        .departmentChatAcceptorUserId("ou_7dab8a3d3cdcc9da365777c7ad535d62")
                        .externalChatAcceptorUserId("ou_7dab8a3d3cdcc9da365777c7ad535d62")
                        .docsAcceptorUserId("ou_7dab8a3d3cdcc9da365777c7ad535d62")
                        .build())
                .build();

        // 发起请求
        DeleteUserResp resp = client.contact().user().delete(req, RequestOptions.newBuilder().build());
    }
}
```

## 响应





### 响应体
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
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>40001</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误。你可以自行检查输入参数是否设置有误。如果问题无法解决可联系开放平台[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>40004</md-td>
  <md-td>no dept authority error</md-td>
  <md-td>无部门权限。用户所属部门需要添加在应用的通讯录权限范围内。如何设置应用的通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>41050</md-td>
  <md-td>no user authority error</md-td>
  <md-td>无用户权限。需将当前操作的用户添加到应用或用户的权限范围内。根据调用 API 的身份不同，解决方案也不同，具体说明如下：

- **使用 tenant_access_token 调用 API**

    当前操作的用户需要添加在应用的通讯录权限范围内。通讯录权限范围定义了应用在调用通讯录 API 时可获取的部门、用户的数据范围。应用无法访问不在通讯录权限范围内的数据。

    由开发者登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **开发配置** > **权限管理** > **数据权限** 页面内，配置 **通讯录权限范围**，添加指定用户。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a1b281bca2708c7b4d8cdb75b74db80b_d3B7kadw3c.png?height=278&maxWidth=550&width=1383)

    已发布的应用企业管理员可在[管理后台](http://feishu.cn/admin) > **工作台** > **应用管理** 页面，修改应用的通讯录权限范围。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30410ff315a6728260c9964a7f035d4a_vtiypMAKJu.png?height=278&maxWidth=550&width=1383)

- **使用 user_access_token 调用 API**

    当你使用用户身份调用通讯录 API 时，可操作的权限范围不受应用的通讯录权限范围影响，而是受当前用户的组织架构可见范围影响，该范围限制了用户在企业内可见的组织架构数据范围。

    由企业管理员在[管理后台](http://feishu.cn/admin) > **安全** > **成员权限** 页面中，点击 **组织架构可见范围** 进行管理。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6699f09b56c17798cb192d06795dc980_hcP4nRZadC.png?height=278&maxWidth=550&width=1383)


完整介绍参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41052</md-td>
  <md-td>user resign acceptor is invalid error</md-td>
  <md-td>离职用户的资源接受者无效。你需要检查传入的资源接收者 ID 是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44037</md-td>
  <md-td>tenant manager cannot be deleted</md-td>
  <md-td>无法删除租户管理员。你可以在[管理后台](https://feishu.cn/admin) > **企业设置** > **管路员权限** 页面，移除该用户的管理员身份后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44042</md-td>
  <md-td>User is in resurrect progress, retry later</md-td>
  <md-td>当前用户在恢复流程中，无法完成操作。你需要等待用户恢复完成，请稍后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44062</md-td>
  <md-td>According to the settings, this member's account can only be deleted through Member life cycle.</md-td>
  <md-td>根据租户管理员规则配置，该用户仅能通过生命周期引擎删除</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


