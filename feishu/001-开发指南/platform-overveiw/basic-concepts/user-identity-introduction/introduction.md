<!--
title: 用户身份概述
id: 6975811364980752386
fullPath: /home/user-identity-introduction/introduction
updatedAt: 1736835212000
source: https://open.feishu.cn/document/platform-overveiw/basic-concepts/user-identity-introduction/introduction
-->
# 用户身份概述

用户身份是开发飞书应用时需要了解的重要概念，在飞书中有多个标识用户身份的 ID，通过本文你可以快速了解这些 ID 的概念和背后的设计逻辑，帮助你找到最合适的用法。
:::note
不同企业或组织下的应用，其数据一定是隔离的。
:::

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5feee25346fed210ebc058f4a95bde8f_npwHXWoJQ4.png?height=827&lazyload=true&maxWidth=750&width=1640)

## 不同类型的用户 ID
  
飞书在不同的层次对用户身份做了隔离，以保证用户的数据安全。整体来说用户身份有以下几种类型：

- 物理用户身份（`lark_id`），即全局 ID

- 用户在企业或组织内的身份（`user_id`）

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9c64a7eb1f19ea0f5ec2d0ce190e9e77_w72Q6URXd7.png?height=1116&lazyload=true&maxWidth=600&width=1646)

- 用户在应用内的身份（`open_id` ）

	![ ](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4186103eb67b41b4bf3cd4bcf5712123_eM7hawoySC.png?height=856&lazyload=true&maxWidth=650&width=1712)
    
- 用户在同一应用服务商所开发的多个应用下的统一身份（ `union_id`）

	![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f771cd9d6dadd9d6f2bb884a0416202b_hlppW2rYiH.png?height=852&lazyload=true&maxWidth=650&width=1702)


:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width:10%">ID</md-th>
            <md-th style="width:30%">定义</md-th>
            <md-th style="width:30%">生成方式</md-th>
            <md-th style="width:30%">注意事项</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>lark_id</md-td>
            <md-td>全局 ID，物理用户身份。刚完成注册的飞书用户属于个人身份，你可以在飞书 App 上看到`飞书个人版`的标识。如下图所示：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fc550135e3e3d3ecdc60550c0544f21_D0m3oekuWQ.png?height=910&lazyload=true&width=1640)
:::note
飞书个人版无法访问企业的管理后台进行组织管理。你可以通过客户端界面上「**加入团队**」，即飞书内的企业或组织，即可成为企业或组织内的成员。</md-td>
            <md-td>当一个用户用手机号在飞书注册登录之后，就会在飞书中生成一个全局 lark_id。</md-td>
            <md-td>
lark_id 对开发者或普通飞书用户来说不可见，开发者也无需关注。

            </md-td>
           
        </md-tr>

        <md-tr>
            <md-td>user_id</md-td>
            <md-td>用户在企业或组织内的身份。 同一个飞书用户在企业 A 和企业 B 内的 user_id 是不同的。

:::note
user_id 也称为 employee_id，这两个概念在大多数情况下完全对等（除飞书招聘业务）。

            </md-td>
            <md-td>
通过调用[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)接口在员工入职时直接指定其 user_id。也可以由企业管理员在添加用户时指定。<br><br>推荐企业使用邮箱前缀、工号或者手机号等有意义的字段作为员工的 user_id，这便于和企业既有的业务系统在用户身份上保持一致。<br><br>如果在调用创建用户接口时没有指定 user_id 字段，则系统会随机生成一个字符串作为该用户的 user_id。
            </md-td>
            <md-td>
一个飞书用户可以同时加入多个企业或组织，其在每个企业或组织内的身份是逻辑独立的，并且在数据层面相互隔离。
              <br>用户存在“离职再入职”的场景，合理设计 user_id 的规则有利于维护账号体系。
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>open_id</md-td>
            <md-td>用户在应用内的身份。 同一个 user_id 在不同应用中的 open_id 不同，其值统一以 ou_ 为前缀，如`ou_c99c5f35d542efc7ee492afe11af19ef`。
</md-td>
            <md-td>
open_id 是用户在特定应用下才存在的身份标识，所以其生成是由用户在第一次启用该应用时由系统赋值生成的，对开发者来说这都是「只读」字段。
            </md-td>
            <md-td>
**不要在跨应用的数据通信过程中使用 open_id**。一个常见的的错误用法是，用应用 A 的鉴权凭证获取到了用户 open_id 之后，在应用 B 中直接使用，这种情况会直接提示出现跨应用操作的错误信息，如下图所示：
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/b105d490d0f8176ceabc5db079745057_3MqIXgraZ2.png?height=357&lazyload=true&width=1280)
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>union_id</md-td>
            <md-td>用户在同一应用服务商提供的多个应用间的统一身份。<br><br> 让应用开发商可以把同个用户(以 user_id 为标识）在多个应用中的身份关联起来。在需要跨应用做用户 ID 关联的场景中，开发者可以使用飞书开放平台提供的 union_id。union_id 以 on_ 为前缀，如 `on_cad4860e7af114fb4ff6c5d496d1dd76` 。
</md-td>
            <md-td>
union_id 都是用户在特定应用下才存在的身份标识，所以其生成是由用户在第一次启用该应用时由系统赋值生成的，对开发者来说这都是「只读」字段。

            </md-td>
            <md-td>
应用开发商是组织概念，而非开发者维度的概念。
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::



## 视频教学
> 视频播放时长：6分钟
:::html
<!-- md-video 的src表示默认的清晰度 -->
<md-video src="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080userid.mp4" poster="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/Frame2085.png" width="1920" height="1080">
<md-source name="超清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080userid.mp4" ></md-source>
<md-source name="高清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1280x720userid.mp4"></md-source>
<md-source name="标清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/853x480userid.mp4"></md-source>
</md-video>
:::