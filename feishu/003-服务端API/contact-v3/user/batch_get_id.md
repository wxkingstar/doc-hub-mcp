<!--
title: 通过手机号或邮箱获取用户 ID
id: 7026591401610526724
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id
updatedAt: 1720166718000
source: https://open.feishu.cn/document/server-docs/contact-v3/user/batch_get_id
-->
# 通过手机号或邮箱获取用户 ID

调用该接口通过手机号或邮箱获取一个或多个用户的 ID （包括 user_id、open_id、union_id）与状态信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=user&method=batch_get_id)

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

请求后不返回用户 ID 的可能原因：
- 请求头 Authorization 传入的 tenant_access_token 有误。例如，tenant_access_token 对应的应用与实际所需应用不一致。
- 输入的手机号或者邮箱不存在。
- 应用未开通 **获取用户 user ID** API 权限。
- 应用无权限查看用户信息。你需要在应用详情页为应用配置数据权限，具体说明参见[配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。
- 使用企业邮箱查询将无法返回用户 ID，必须使用用户的邮箱地址。
- 所查询的用户已离职，如果请求参数 include_resigned 取值为 false，则不会返回离职用户 ID。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/users/batch_get_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="contact:user.id:readonly" desc="通过手机号或邮箱获取用户 ID" support_app_types="custom,isv" tags="">通过手机号或邮箱获取用户 ID</md-perm>
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
        <md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
        <md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
        <md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
        <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
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

**示例值**：user_id

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
	<md-text type="field-name" >emails</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要查询的用户邮箱，最多可传入 50 条。

**注意**：

- 不支持企业邮箱。
- emails 与 mobiles 两个参数相互独立，即每个用户邮箱会返回对应的用户信息，每个手机号也会返回对应的用户信息。
- 本接口返回的用户 ID 数量为 emails 数量与 mobiles 数量之和。

**默认值**：空

**示例值**：["zhangsan@z.com"]

**数据校验规则**：

- 最大长度：`50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >mobiles</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要查询的用户手机号，最多可传入 50 条。

**注意**：

- 非中国大陆地区的手机号需要添加以 “+” 开头的国家或地区代码。
- emails 与 mobiles 两个参数相互独立，即每个用户邮箱会返回对应的用户信息，每个手机号也会返回对应的用户信息。
- 本接口返回的用户 ID 数量为 emails 数量与 mobiles 数量之和。

**默认值**：空

**示例值**：["13011111111"]

**数据校验规则**：

- 最大长度：`50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >include_resigned</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	查询结果是否包含离职员工的用户信息。

**可选值有**：
- true：包含
- false：不包含

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "emails": [
"zhangsan@z.com","lisi@a.com"
    ],
    "mobiles": [
"13011111111","13022222222"
    ],
"include_resigned":true
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
	req := larkcontact.NewBatchGetIdUserReqBuilder().
		UserIdType(`open_id`).
		Body(larkcontact.NewBatchGetIdUserReqBodyBuilder().
			Emails([]string{`zhangsan@z.com`, `lisi@a.com`}).
			Mobiles([]string{`13812345678`, `13812345679`}).
			Build()).
		Build()

	// 发起请求
	resp, err := client.Contact.User.BatchGetId(context.Background(), req)
}
```

**Java 请求示例**
```java
import com.lark.oapi.Client;
import com.lark.oapi.core.request.RequestOptions;
import com.lark.oapi.service.contact.v3.model.BatchGetIdUserReq;
import com.lark.oapi.service.contact.v3.model.BatchGetIdUserReqBody;
import com.lark.oapi.service.contact.v3.model.BatchGetIdUserResp;

public class Main {

    public static void main(String arg[]) throws Exception {
        // 构建client
        Client client = Client.newBuilder("appId", "appSecret").build();

        // 创建请求对象
        BatchGetIdUserReq req = BatchGetIdUserReq.newBuilder()
                .userIdType("open_id")
                .batchGetIdUserReqBody(BatchGetIdUserReqBody.newBuilder()
                        .emails(new String[]{"zhangsan@z.com", "lisi@a.com"})
                        .mobiles(new String[]{"13812345678", "13812345679"})
                        .build())
                .build();

        // 发起请求
        BatchGetIdUserResp resp = client.contact().user().batchGetId(req, RequestOptions.newBuilder().build());
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_contact_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号或者邮箱对应的用户 ID 信息。
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
	用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致。

例如，user_id_type 取值为 open_id，则该参数的用户 ID 值为用户的 open_id。

不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号，通过手机号查询时会返回该值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱，通过邮箱查询时会返回该值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_status</md-text>
	</md-dt-td>
	<md-dt-td>
	用户状态。通过 is_frozen、is_resigned、is_activated、is_exited 布尔值类型参数进行展示。

用户状态的转关逻辑可参见[用户资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview#4302b5a1)。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_frozen</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为冻结状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_resigned</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为离职状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_activated</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为激活状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_exited</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为主动退出状态。主动退出一段时间后用户状态会自动转为已离职。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_unjoin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为未加入状态，需要用户自主确认才能加入企业或团队。

**可能值有**：

- true：是
- false：否
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
	"data": {
		"user_list": [{
				"user_id": "ou_979112345678741d29069abcdef01234",
				"email": "zhanxxxxx@a.com",
				"status": {
					"is_frozen": false,
					"is_resigned": false,
					"is_activated": true,
					"is_exited": false,
					"is_unjoin": false
				}
			}, {
				"user_id": "ou_919112245678741d29069abcdef02345",
				"email": "lisixxxx@a.com",
				"status": {
					"is_frozen": false,
					"is_resigned": false,
					"is_activated": true,
					"is_exited": false,
					"is_unjoin": false
				}
			},
			{
				"user_id": "ou_46a087654321a1dc920ffab8fedc3456",
				"mobile": "130xxxx1111",
				"status": {
					"is_frozen": false,
					"is_resigned": false,
					"is_activated": true,
					"is_exited": false,
					"is_unjoin": false
				}
			}, {
				"user_id": "ou_01b081675121a1dc920ffab97cdc4567",
				"mobile": "130xxxx2222",
				"status": {
					"is_frozen": false,
					"is_resigned": false,
					"is_activated": true,
					"is_exited": false,
					"is_unjoin": false
				}
			}
		]
	}
}
</md-code-json>
:::

## 错误码

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


