<!--
title: 通用错误码
id: 6907569744330522625
fullPath: /ukTMukTMukTM/ugjM14COyUjL4ITN
updatedAt: 1755684681000
source: https://open.feishu.cn/document/server-docs/api-call-guide/generic-error-code
-->
# 服务端错误码说明
>  以下是服务端常用错误码列表，部分未列入的错误码可以在具体 API 接口文档中查询到。你也可以通过右上角搜索功能，全局查找错误码说明和排查建议。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 35%;">说明</md-th>
            <md-th>排查建议</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>600</md-td>
            <md-td>expired resource deleted by ka</md-td>
            <md-td>文档数据加载中，请稍后再试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1002</md-td>
            <md-td>Failed</md-td>
            <md-td>文档已删除，已删除文件无法获取文档内容</md-td>
        </md-tr>
        <md-tr>
            <md-td>1500</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1503</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，更新token，但无任何鉴权结果返回，请检查后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1551</md-td>
            <md-td>internal error</md-td>
            <md-td>获取tenant id错误，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>1557</md-td>
            <md-td>internal error</md-td>
            <md-td>获取open user错误，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>1642</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，更新session失败，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1663</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1665</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1668</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>2200</md-td>
            <md-td>internal error</md-td>
            <md-td>内部服务错误，通常会在频繁调用接口的情况下出现。请降低请求速率或增加重试机制。若问题仍然出现可以 [咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>4000</md-td>
            <md-td>bad request</md-td>
            <md-td>传参错误，请确保请求方法、请求信息、请求数据格式等是正确的，如富文本格式是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>4001</md-td>
            <md-td>Invalid token, please refresh</md-td>
            <md-td>查看token是否填写正确，是否过期</md-td>
        </md-tr>
        <md-tr>
            <md-td>4002</md-td>
            <md-td>definition not found</md-td>
            <md-td>审批定义找不到，检查审批定义code是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>4003</md-td>
            <md-td>instance not found</md-td>
            <md-td>审批实例找不到，检查审批实例ID是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>4004</md-td>
            <md-td>user not found</md-td>
            <md-td>用户找不到，检查userId是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>4005</md-td>
            <md-td>method not allowed</md-td>
            <md-td>HTTP 方法不支持，检查是否是POST 请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>4006</md-td>
            <md-td>service exception</md-td>
            <md-td>服务异常，检查服务可用性</md-td>
        </md-tr>
        <md-tr>
            <md-td>5000</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，减少调用频率，稍后再试</md-td>
        </md-tr>
        <md-tr>
            <md-td>9499</md-td>
            <md-td>bad request 或 invalid param</md-td>
            <md-td>请求参数有误，请根据接口返回的错误信息，参考文档检查输入参数是否符合要求。</md-td>
        </md-tr>
        <md-tr>
            <md-td>10001</md-td>
            <md-td>Your request contains an invalid request parameter</md-td>
            <md-td>请求参数无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>10002</md-td>
            <md-td>Bot can NOT be out of the chat</md-td>
            <md-td>机器人不在会话中，请添加机器人后重新请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>10003</md-td>
            <md-td>invalid parameter</md-td>
            <md-td>请求参数缺失或者有误，更多错误信息请参考请求返回的error message</md-td>
        </md-tr>
        <md-tr>
            <md-td>10004</md-td>
            <md-td>user not found</md-td>
            <md-td>未找到指定用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>10005</md-td>
            <md-td>app id unauthorized</md-td>
            <md-td>请求鉴权失败，当前请求的应用信息或者租户信息有误</md-td>
        </md-tr>
        <md-tr>
            <md-td>10009</md-td>
            <md-td>get open_chat_id fail</md-td>
            <md-td>获取 open chat id 失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>10010</md-td>
            <md-td>send message forbidden</md-td>
            <md-td>禁止跨企业发送消息</md-td>
        </md-tr>
        <md-tr>
            <md-td>10012</md-td>
            <md-td>get app access token fail</md-td>
            <md-td>获取App Token失败，请参考 [API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>10013</md-td>
            <md-td>get tenant access token fail</md-td>
            <md-td>获取Tenant Token失败，请参考 [API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>10014</md-td>
            <md-td>app unauthorized</md-td>
            <md-td>应用状态不可用，检查应用是否停用</md-td>
        </md-tr>
        <md-tr>
            <md-td>10015</md-td>
            <md-td>wrong app secret</md-td>
            <md-td>App Secret 错误，请在开发者后台确认当前应用的App Secret</md-td>
        </md-tr>
        <md-tr>
            <md-td>10016</md-td>
            <md-td>app resend fail</md-td>
            <md-td>重新推送应用 ticket 失败，检查应用是否为ISV应用，自建应用无法调用该接口</md-td>
        </md-tr>
        <md-tr>
            <md-td>10017</md-td>
            <md-td>Bot is NOT the owner of the resource</md-td>
            <md-td>机器人不是资源的所有者，无法获取资源详情</md-td>
        </md-tr>
        <md-tr>
            <md-td>10019</md-td>
            <md-td>urgent type not support</md-td>
            <md-td>未知的加急类型，当前支持应用内加急、短信加急、电话加急三种类型</md-td>
        </md-tr>
        <md-tr>
            <md-td>10020</md-td>
            <md-td>message id not exist</md-td>
            <md-td>Message ID 非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>10023</md-td>
            <md-td>urgent scope unauthorized</md-td>
            <md-td>没有对应加急类型的权限。权限的开启需要提交版本发布，通过管理员审核后才能生效，详情参见[开启应用权限方法](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#e601f785)。对开发测试阶段的应用可以使用“测试版应用”功能，申请权限无需发布版本，等待管理员审核，可直接在测试租户完成，详情参见[教程](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>10029</md-td>
            <md-td>chat_id not exist</md-td>
            <md-td>Open Chat ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>10030</md-td>
            <md-td>bot not in chat</md-td>
            <md-td>机器人不在会话中，请添加机器人后重新请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>10032</md-td>
            <md-td>valid user is null</md-td>
            <md-td>请求参数中用户列表为空，请检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>10034</md-td>
            <md-td>chat tenant id mismatch tenant access token</md-td>
            <md-td>租户信息不匹配，不能跨企业发起请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>10037</md-td>
            <md-td>open_message_id not exist</md-td>
            <md-td>Open Message ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>10100</md-td>
            <md-td>invalid request</md-td>
            <md-td>请求参数错误，检查请求参数是否合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>10101</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>10105</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，获取open user错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>10200</md-td>
            <md-td>crop failed</md-td>
            <md-td>图片裁剪失败，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>10204</md-td>
            <md-td>wrong code</md-td>
            <md-td>code重复使用了或已过期</md-td>
        </md-tr>
        <md-tr>
            <md-td>10400</md-td>
            <md-td>bad request</md-td>
            <md-td>客户端参数错误，一般不需要排查</md-td>
        </md-tr>
        <md-tr>
            <md-td>10500</md-td>
            <md-td>internal server error</md-td>
            <md-td>服务端异常错误，建议服务端排查</md-td>
        </md-tr>
        <md-tr>
            <md-td>11000</md-td>
            <md-td>get sso access token fail</md-td>
            <md-td>获取SSO Token失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11001</md-td>
            <md-td>check security token fail</md-td>
            <md-td>校验Security Token 失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11100</md-td>
            <md-td>check chat by open chat id fail</md-td>
            <md-td>Open Chat ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11101</md-td>
            <md-td>open_id not exist</md-td>
            <md-td>Open User ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11102</md-td>
            <md-td>get open_id fail</md-td>
            <md-td>Open User ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11103</md-td>
            <md-td>open department id not exist</md-td>
            <md-td>Open Department ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11104</md-td>
            <md-td>get open department id fail</md-td>
            <md-td>Open Department ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11105</md-td>
            <md-td>user_id not exist</md-td>
            <md-td>Employee ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11106</md-td>
            <md-td>get employee_id fail</md-td>
            <md-td>获取Employee ID失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11200</md-td>
            <md-td>only admin can modify chat name</md-td>
            <md-td>更新会话信息失败，不是群主，无法更改群聊信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>11201</md-td>
            <md-td>bot is not chat owner</md-td>
            <md-td>机器人不在会话中，请添加机器人后发起请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>11202</md-td>
            <md-td>only admin can add chatter</md-td>
            <md-td>向会话添加成员失败，机器人不是群主，不能添加成员</md-td>
        </md-tr>
        <md-tr>
            <md-td>11203</md-td>
            <md-td>send employee ids permission denied</md-td>
            <md-td>发送 employee id 信息失败，请确保在应用后台已经设置了获取Employee ID的选项</md-td>
        </md-tr>
        <md-tr>
            <md-td>11204</md-td>
            <md-td>send department list permission denied</md-td>
            <md-td>发送部门列表失败，请确保在应用后台已经设置了获取Department ID的选项</md-td>
        </md-tr>
        <md-tr>
            <md-td>11205</md-td>
            <md-td>app do not have bot</md-td>
            <md-td>应用没有开通机器人能力，请确保在应用后台开通了机器人能力</md-td>
        </md-tr>
        <md-tr>
            <md-td>11206</md-td>
            <md-td>user not in chat</md-td>
            <md-td>用户不在会话中，请添加该用户再发起请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>11207</md-td>
            <md-td>app is not usage</md-td>
            <md-td>应用在当前租户下不可用，请在应用后台检查应用的状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>11208</md-td>
            <md-td>only group admin can remove chatter</md-td>
            <md-td>会话移除成员失败，机器人不是群主，不能移除群组成员</md-td>
        </md-tr>
        <md-tr>
            <md-td>11209</md-td>
            <md-td>app not exist</md-td>
            <md-td>应用不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>11210</md-td>
            <md-td>app usage info not exist</md-td>
            <md-td>应用在当前租户下未安装，不可使用，联系租户管理员，确认应用安装状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>11211</md-td>
            <md-td>add chatters is empty</md-td>
            <md-td>会话成员信息有误，会话添加成员列表为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>11212</md-td>
            <md-td>invalid chat_id or user_id</md-td>
            <md-td>删除会话成员信息失败，Chat ID或者User ID有误</md-td>
        </md-tr>
        <md-tr>
            <md-td>11213</md-td>
            <md-td>chat not found</md-td>
            <md-td>指定的会话不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>11214</md-td>
            <md-td>image not given</md-td>
            <md-td>上传图片操作失败，文件列表为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>11215</md-td>
            <md-td>chat_id is nil</md-td>
            <md-td>Chat ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11216</md-td>
            <md-td>get chat id fail</md-td>
            <md-td>Chat ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11217</md-td>
            <md-td>this group is set to only admin can add new member</md-td>
            <md-td>向会话添加成员失败，当前用户不是群主，不能向群组中添加成员</md-td>
        </md-tr>
        <md-tr>
            <md-td>11218</md-td>
            <md-td>the number of robots exceeds the limit</md-td>
            <md-td>会话中机器人数量已经达到上限，不能继续添加机器人</md-td>
        </md-tr>
        <md-tr>
            <md-td>11219</md-td>
            <md-td>cross tenant chat forbidden add bot</md-td>
            <md-td>跨企业会话无法添加机器人</md-td>
        </md-tr>
        <md-tr>
            <md-td>11220</md-td>
            <md-td>only admin can disband group</md-td>
            <md-td>解散会话失败，当前用户不是群主，不能解散群组</md-td>
        </md-tr>
        <md-tr>
            <md-td>11221</md-td>
            <md-td>this image does not belong to you</md-td>
            <md-td>获取图片数据失败，机器人没有权限获取不属于自身的图片</md-td>
        </md-tr>
        <md-tr>
            <md-td>11222</md-td>
            <md-td>bot owner not in chat</md-td>
            <md-td>应用所有者不在会话中，不能添加机器人到会话</md-td>
        </md-tr>
        <md-tr>
            <md-td>11223</md-td>
            <md-td>do not have im write permission</md-td>
            <md-td>当前操作者没有发送消息的权限，请开通权限后发起请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>11224</md-td>
            <md-td>message_id invalid</md-td>
            <md-td>Message ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11225</md-td>
            <md-td>the bot is invisible to the user</md-td>
            <md-td>机器人对用户不可见，不能对其进行操作。可在开发者后台-应用发布-版本管理与发布 编辑应用对用户的可见性并发布。</md-td>
        </md-tr>
        <md-tr>
            <md-td>11226</md-td>
            <md-td>app_id is nil</md-td>
            <md-td>App ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11227</md-td>
            <md-td>image key not exist</md-td>
            <md-td>Image Key非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>11228</md-td>
            <md-td>chat is not group</md-td>
            <md-td>当前会话不是群组类型</md-td>
        </md-tr>
        <md-tr>
            <md-td>11229</md-td>
            <md-td>no permission</md-td>
            <md-td>请确保在应用后台已经开启了获取用户信息的权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>11230</md-td>
            <md-td>internal error</md-td>
            <md-td>机器人禁止发送当前消息类型的消息</md-td>
        </md-tr>
        <md-tr>
            <md-td>11231</md-td>
            <md-td>chat not found</md-td>
            <md-td>请求的会话不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>11232</md-td>
            <md-td>create message service trigger rate limit</md-td>
            <md-td>创建消息触发系统超限，请参考 [频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
        </md-tr>
        <md-tr>
            <md-td>11233</md-td>
            <md-td>create message chat trigger rate limit</md-td>
            <md-td>创建消息触发系统超限，请参考 [频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
        </md-tr>
        <md-tr>
            <md-td>11234</md-td>
            <md-td>this message do not belong you</md-td>
            <md-td>非机器人消息，机器人无权获取不属于自己的信息的读取状态信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>11235</md-td>
            <md-td>this group is set to only admin can mention @All</md-td>
            <md-td>当前会话禁止@所有人操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>11236</md-td>
            <md-td>user is resigned</md-td>
            <md-td>用户已经离职</md-td>
        </md-tr>
        <md-tr>
            <md-td>11237</md-td>
            <md-td>group chat dissolved</md-td>
            <md-td>指定会话已经解散，不能添加成员</md-td>
        </md-tr>
        <md-tr>
            <md-td>11238</md-td>
            <md-td>can not recall too old message</md-td>
            <md-td>发送较长时间的消息不能召回</md-td>
        </md-tr>
        <md-tr>
            <md-td>11239</md-td>
            <md-td>permission denied</md-td>
            <md-td>尝试获取其他租户信息，操作失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11240</md-td>
            <md-td>Robot not turned on</md-td>
            <md-td>机器人没有启用，请确保在应用后台开通了机器人能力</md-td>
        </md-tr>
        <md-tr>
            <md-td>11241</md-td>
            <md-td>no user_info scope</md-td>
            <md-td>应用权限没有开启用户信息选项，请确保在应用后台已经设置了获取用户信息的选项</md-td>
        </md-tr>
        <md-tr>
            <md-td>11242</md-td>
            <md-td>this chat has been banned</md-td>
            <md-td>当前会话已经被封禁，无法对会话内消息进行回复</md-td>
        </md-tr>
        <md-tr>
            <md-td>11244</md-td>
            <md-td>file key not exist</md-td>
            <md-td>文件不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>11245</md-td>
            <md-td>this file does not belong to you</md-td>
            <md-td>尝试获取不属于自己的文件，操作失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11246</md-td>
            <md-td>create message content fail</md-td>
            <md-td>创建消息内容失败。

- 如果返回的错误信息包含具体原因，则可以参考实际的错误信息排查解决。
- 如果返回 `Service Internal Error` 表示系统错误，建议重试。
- 卡片相关的错误，请参照接口文档中的[子错误码](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM#9c0a88f8)排查建议解决。</md-td>
        </md-tr>
        <md-tr>
            <md-td>11247</md-td>
            <md-td>internal send message trigger rate limit</md-td>
            <md-td>请求触发频控，请参考 [频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
        </md-tr>
        <md-tr>
            <md-td>11248</md-td>
            <md-td>message is sensitive</md-td>
            <md-td>消息内容涉及敏感信息，发送失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>11249</md-td>
            <md-td>bot not found</md-td>
            <md-td>给定的机器人不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>11251</md-td>
            <md-td>chat name too short</md-td>
            <md-td>会话名字太短，确保不少于2个字符</md-td>
        </md-tr>
        <md-tr>
            <md-td>11252</md-td>
            <md-td>chat information review fail</md-td>
            <md-td>会话信息审核未通过，确保会话信息不包含敏感信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>11311</md-td>
            <md-td>urgent message fail</md-td>
            <md-td>加急消息错误，仍然出现可以咨询客服</md-td>
        </md-tr>
        <md-tr>
            <md-td>11312</md-td>
            <md-td>messages do not pass the audit</md-td>
            <md-td>消息内容不合法，请检查消息内容</md-td>
        </md-tr>
        <md-tr>
            <md-td>12001</md-td>
            <md-td>Your request contains an invalid request parameter.</md-td>
            <md-td>请求参数无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>12002</md-td>
            <md-td>Non-chat-owner can NOT edit chat information in the current situation.</md-td>
            <md-td>群主设置"仅群主可编辑群信息"，非群主无法更新群信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>12008</md-td>
            <md-td>Your request specifies a chat whose type is NOT supported currently</md-td>
            <md-td>会话类型不支持</md-td>
        </md-tr>
        <md-tr>
            <md-td>12011</md-td>
            <md-td>Operator can NOT be out of the chat.</md-td>
            <md-td>机器人或授权用户不在群组中，请添加后再发起请求</md-td>
        </md-tr>
        <md-tr>
            <md-td>12015</md-td>
            <md-td>Your request specifies a member_id_type which is NOT supported.</md-td>
            <md-td>不支持member_id_type，仅支持以 open_id/user_id/union_id/app_id 作为查询参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>12016</md-td>
            <md-td>Non-chat-owner can only edit certain parts</md-td>
            <md-td>群主设置"仅群主可编辑群信息"，非群主无法更新群信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>12018</md-td>
            <md-td>Updating announcement failed</md-td>
            <md-td>更新公告失败 ，请查看日志了解具体原因</md-td>
        </md-tr>
        <md-tr>
            <md-td>18017</md-td>
            <md-td>create urgent message fail</md-td>
            <md-td>创建加急消息失败，请确保请求参数正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>18033</md-td>
            <md-td>upload image fail</md-td>
            <md-td>上传图片失败，请确保请求参数正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>18034</md-td>
            <md-td>get chat id fail</md-td>
            <md-td>获取 chat id 失败，请确保请求参数正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>18035</md-td>
            <md-td>image_key require</md-td>
            <md-td>获取图片数据失败，请确保请求参数正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>18053</md-td>
            <md-td>create message fail</md-td>
            <md-td>创建消息失败，请确保请求参数正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>18054</md-td>
            <md-td>create message content fail</md-td>
            <md-td>创建消息内容失败，请仔细检查消息内容是否涉及敏感信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>18066</md-td>
            <md-td>This file has been deleted.</md-td>
            <md-td>文件已被删除，无法获取。</md-td>
        </md-tr>
        <md-tr>
            <md-td>18113</md-td>
            <md-td>thread not found</md-td>
            <md-td>检查当前话题是否存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>18117</md-td>
            <md-td>reach limit of chat size</md-td>
            <md-td>群人数超过上限</md-td>
        </md-tr>
        <md-tr>
            <md-td>18120</md-td>
            <md-td>Collaboration permission authentication failed.</md-td>
            <md-td>机器人与用户不能发起单聊，请咨询租户管理员。</md-td>
        </md-tr>
        <md-tr>
            <md-td>18121</md-td>
            <md-td>create request is being processed</md-td>
            <md-td>相同的创建消息请求正在处理中，请稍后重试。</md-td>
        </md-tr>
        <md-tr>
            <md-td>19002</md-td>
            <md-td>incorrect input format or can't find msg_type</md-td>
            <md-td>参数格式不对或缺少msg_type参数，检查参数格式，并确认传入了msg_type</md-td>
        </md-tr>
        <md-tr>
            <md-td>19036</md-td>
            <md-td>The message exceeds the size limit of 30KB</md-td>
            <md-td>参数大小超过限制，检查消息体大小</md-td>
        </md-tr>
        <md-tr>
            <md-td>20001</md-td>
            <md-td>invalid request</md-td>
            <md-td>无效的请求体，请确保请求方法、请求信息、请求数据格式等是正确的</md-td>
        </md-tr>
        <md-tr>
            <md-td>20002</md-td>
            <md-td>app_id and app_secret did not match</md-td>
            <md-td>检查应用基础信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>20003</md-td>
            <md-td>invalid request with code</md-td>
            <md-td>检查code是否过期；code是否重复消费</md-td>
        </md-tr>
        <md-tr>
            <md-td>20004</md-td>
            <md-td>expired code</md-td>
            <md-td>重新生成新的code</md-td>
        </md-tr>
        <md-tr>
            <md-td>20005</md-td>
            <md-td>invalid access_token</md-td>
            <md-td>无效的 access_token，请确保header里的 access_token 是正确、有效的，详情可参考[API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>20006</md-td>
            <md-td>过期 User Access Token</md-td>
            <md-td>请检查user_access_token是否过期，过期请重新授权或刷新user_access_token换取有效值</md-td>
        </md-tr>
        <md-tr>
            <md-td>20007</md-td>
            <md-td>generate access_token fail</md-td>
            <md-td>生成 access_token 失败，请确保 code 没有重复消费或过期消费；小程序 tt.login() 获取的 code 不可用于服务端 API 获取用户信息，反之亦然；确保refresh_access_token是最新返回值，不可以用旧的refresh_token反复调用接口</md-td>
        </md-tr>
        <md-tr>
            <md-td>20008</md-td>
            <md-td>user not exist</md-td>
            <md-td>检查用户是否真实存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>20009</md-td>
            <md-td>tenant app not installed</md-td>
            <md-td>应用在当前租户未安装</md-td>
        </md-tr>
        <md-tr>
            <md-td>20010</md-td>
            <md-td>user not visible to app</md-td>
            <md-td>联系管理员，为用户配置可见性，开通权限；自建应用只能使用本租户账号访问；</md-td>
        </md-tr>
        <md-tr>
            <md-td>20013</md-td>
            <md-td>The tenant access token passed is invalid. Please check the value.</md-td>
            <md-td>tenant access token无效，检查是否有效</md-td>
        </md-tr>
        <md-tr>
            <md-td>20014</md-td>
            <md-td>校验 app_access_token 失败</md-td>
            <md-td>确保app_access_token有效，重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>20021</md-td>
            <md-td>user resigned</md-td>
            <md-td>用户已离职，检查用户状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>20022</md-td>
            <md-td>user frozen</md-td>
            <md-td>用户已冻结，检查用户状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>20023</md-td>
            <md-td>user not registered</md-td>
            <md-td>用户未注册，检查用户状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>20024</md-td>
            <md-td>code app_id not match</md-td>
            <md-td>appID不匹配，请确保生成code的appID与请求header里app access token对应的appID保持一致</md-td>
        </md-tr>
        <md-tr>
            <md-td>23001</md-td>
            <md-td>Your request contains an invalid request parameter.</md-td>
            <md-td>参数错误，建议检查输入的参数是否有不符合 API 要求的内容。</md-td>
        </md-tr>
        <md-tr>
            <md-td>30005</md-td>
            <md-td>interface is offline</md-td>
            <md-td>接口已下线，请切换到新版本接口</md-td>
        </md-tr>
        <md-tr>
            <md-td>40001</md-td>
            <md-td>market place app is not allowed to update user or department</md-td>
            <md-td>应用商店应用不允许修改通讯录，请停止尝试</md-td>
        </md-tr>
        <md-tr>
            <md-td>40001</md-td>
            <md-td>param error</md-td>
            <md-td>请求参数非法，请检查请求参数 (注：通讯录V3版本接口出现该错误码时取该含义)</md-td>
        </md-tr>
        <md-tr>
            <md-td>40002</md-td>
            <md-td>process root dept error</md-td>
            <md-td>不能对顶级部门（根部门）进行操作，请检查是否在请求参数的部门ID中填入0</md-td>
        </md-tr>
        <md-tr>
            <md-td>40003</md-td>
            <md-td>no department authority</md-td>
            <md-td>应用没有对应的部门的通讯录授权，请检查通讯录授权情况；如需要访问相应部门，请联系管理员添加相应部门的通讯录授权</md-td>
        </md-tr>
        <md-tr>
            <md-td>40003</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  （注：通讯录V3版本接口出现该错误码时取该含义）</md-td>
        </md-tr>
        <md-tr>
            <md-td>40004</md-td>
            <md-td>no dept authority error</md-td>
            <md-td>应用没有部门权限，检查该部门是否在应用的通讯录权限范围内。你可以登录[开发者后台](https://open.feishu.cn/app) ，在应用详情页的 **开发配置 > 权限管理 > 数据权限** 功能页查看 **通讯录权限范围** 内是否有相应部门，如果没有则需要在 **通讯录权限范围** 内添加上部门，并发布应用使配置生效。具体操作参考[配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。

**注意**：如果通讯录权限范围设置的是 **与应用的可用范围一致**，则你需要在应用发布阶段（点击 **应用发布 > 版本管理与发布 > 创建版本** 后的 **版本详情** 页面内）配置应用的可用范围，并发布应用使配置生效。具体操作参考[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>40006</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40007</md-td>
            <md-td>user_id %v is not exist</md-td>
            <md-td>提供的用户ID不存在，请检查用户ID来源，是否为当前租户下用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40008</md-td>
            <md-td>deptInfo is null error</md-td>
            <md-td>部门信息为空。可能系统异常导致部门不存在，请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)   (注：通讯录V3版本接口出现该错误码时取该含义)</md-td>
        </md-tr>
        <md-tr>
            <md-td>40008</md-td>
            <md-td>open_id %v is not exist</md-td>
            <md-td>提供的用户open_id不存在，请检查用户open_id来源</md-td>
        </md-tr>
        <md-tr>
            <md-td>40009</md-td>
            <md-td>page size is more more than 50</md-td>
            <md-td>分页的大小超出50这个最大限制，请检查page_size设置的大小</md-td>
        </md-tr>
        <md-tr>
            <md-td>40010</md-td>
            <md-td>chat id is invalid error</md-td>
            <md-td>部门群ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>40011</md-td>
            <md-td>page size is invalid error</md-td>
            <md-td>分页请求的page_size参数非法，请检查page_size设置的大小</md-td>
        </md-tr>
        <md-tr>
            <md-td>40012</md-td>
            <md-td>page token is invalid error</md-td>
            <md-td>分页的page_token非法，请检查参数合法性(注：通讯录V3版本接口出现该错误码时取该含义)</md-td>
        </md-tr>
        <md-tr>
            <md-td>40013</md-td>
            <md-td>param error</md-td>
            <md-td>参数错误，具体错误原因可参考message信息，如有疑问，请联系管理员。

也可以通过如下步骤排查：
- 检查一下对应员工/部门的状态，有没有离职 /被删除
- 参数错误，具体错误原因可参考 message 信息和表下面的补充，如有疑问，请联系管理员
- 手机号已存在，检查手机号是否重复
- 手机号和邮箱冲突，检查对应的手机号和邮箱有没有分属于两个不同的飞书账号，如果存在就需要修改其中一个手机号/邮箱，或者注销掉其中一个账号
- 更新时目标部门下是否有同名部门
- 不能更新子部门作为父部门
- 自定义文本字段超过默认的100长度限制</md-td>
        </md-tr>
        <md-tr>
            <md-td>40031</md-td>
            <md-td>task_id is not exist</md-td>
            <md-td>task_id 不存在，请检查task_id 来源</md-td>
        </md-tr>
        <md-tr>
            <md-td>40032</md-td>
            <md-td>task_id invalid</md-td>
            <md-td>task_id非法，请检查来源，是否为当前企业上传任务生成的task_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>40040</md-td>
            <md-td>invalid page_token</md-td>
            <md-td>分页请求的page_token参数非法，请检查page_token来源</md-td>
        </md-tr>
        <md-tr>
            <md-td>40041</md-td>
            <md-td>request page_size invalid</md-td>
            <md-td>分页请求数量不符合接口要求，请参考接口文档传递正确的参数值</md-td>
        </md-tr>
        <md-tr>
            <md-td>40042</md-td>
            <md-td>batch request object count error</md-td>
            <md-td>批量接口请求数量不符合接口要求，请参考接口文档传递正确的参数值</md-td>
        </md-tr>
        <md-tr>
            <md-td>40051</md-td>
            <md-td>open_id %v is not valid</md-td>
            <md-td>用户的open_id非法，检查用户open_id来源，是否为当前应用下的open_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>40052</md-td>
            <md-td>department id %v is not exist</md-td>
            <md-td>部门ID不存在，请检查部门ID来源</md-td>
        </md-tr>
        <md-tr>
            <md-td>40053</md-td>
            <md-td>role_id is not exist</md-td>
            <md-td>角色ID不存在，请检查角色ID来源</md-td>
        </md-tr>
        <md-tr>
            <md-td>40054</md-td>
            <md-td>user_id or open_id is needed</md-td>
            <md-td>没有有效的用户ID，user_id或者open_id至少提供其中之一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40101</md-td>
            <md-td>mobile is already exist</md-td>
            <md-td>手机号已存在，手机号在企业内必须唯一，手机号在该企业创建过用户不允许再创建新用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40102</md-td>
            <md-td>email is already exist</md-td>
            <md-td>邮箱已存在，邮箱在企业内必须唯一，邮箱在该企业创建过用户不允许再创建新用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40103</md-td>
            <md-td>mobile and email cp info not match</md-td>
            <md-td>手机号和邮箱的账号信息冲突，用户的联系方式属于两个不同的飞书账号，添加失败。如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40104</md-td>
            <md-td>mobile is not valid</md-td>
            <md-td>手机号不合法，请检查是否是正确的手机号格式</md-td>
        </md-tr>
        <md-tr>
            <md-td>40105</md-td>
            <md-td>name can’t be null</md-td>
            <md-td>部门、用户等name字段不允许为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>40106</md-td>
            <md-td>email is not valid</md-td>
            <md-td>邮箱格式不正确，请检查邮箱地址的有效性</md-td>
        </md-tr>
        <md-tr>
            <md-td>40107</md-td>
            <md-td>user count exceed certification tenant limit</md-td>
            <md-td>用户数量超过未认证企业的数量限制，不能创建用户，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40108</md-td>
            <md-td>user count exceed bill limit</md-td>
            <md-td>用户数量超过当前企业套餐的数量限制，不能创建用户，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40109</md-td>
            <md-td>neither email nor mobile is not provided</md-td>
            <md-td>邮箱手机号都未指定，创建用户，手机号邮箱至少指定其一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40110</md-td>
            <md-td>mobile is required</md-td>
            <md-td>创建用户，手机号必填</md-td>
        </md-tr>
        <md-tr>
            <md-td>40111</md-td>
            <md-td>user_id is already exist</md-td>
            <md-td>user_id 已存在，user_id是企业内用户的唯一ID，不能重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>40112</md-td>
            <md-td>user_id %v is not vaild</md-td>
            <md-td>创建用户的user_id格式不合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>40113</md-td>
            <md-td>must assign department for user</md-td>
            <md-td>未指定部门，创建用户，必须指定在哪个部门下创建用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40114</md-td>
            <md-td>name contains sensitive words</md-td>
            <md-td>name中包含敏感信息，不允许创建，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40115</md-td>
            <md-td>invalid join_time</md-td>
            <md-td>用户入职时间不合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>40116</md-td>
            <md-td>invalid gender</md-td>
            <md-td>性别参数不合法，取值请参考文档接口参数说明</md-td>
        </md-tr>
        <md-tr>
            <md-td>40117</md-td>
            <md-td>idp_type is required</md-td>
            <md-td>idp企业创建用户，idp_type字段必填</md-td>
        </md-tr>
        <md-tr>
            <md-td>40118</md-td>
            <md-td>idp_type is invalid</md-td>
            <md-td>idp_type类型非法，请填入正确的idp_type</md-td>
        </md-tr>
        <md-tr>
            <md-td>40119</md-td>
            <md-td>support set or update user_id at most once</md-td>
            <md-td>用户自定义ID只允许设置或者更新一次。用户的自定义ID，创建时未指定自定义ID允许修改一次；创建时指定了自定义ID不再允许二次修改</md-td>
        </md-tr>
        <md-tr>
            <md-td>40120</md-td>
            <md-td>custom_attr id is not set</md-td>
            <md-td>自定义属性ID未指明，设置用户自定义属性，必须指明设定的属性ID，属性ID可以通过获取企业自定义属性接口查询</md-td>
        </md-tr>
        <md-tr>
            <md-td>40121</md-td>
            <md-td>custom_attr %v value not set</md-td>
            <md-td>自定义属性值未设定。设置自定义属性，需要传入属性value字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>40122</md-td>
            <md-td>custom_attr id %v is not exist</md-td>
            <md-td>自定义属性ID不存在，请确认自定义属性ID来源，自定义属性ID可以通过获取企业自定义属性接口查询</md-td>
        </md-tr>
        <md-tr>
            <md-td>40123</md-td>
            <md-td>href custom_attr %v text can’t be null</md-td>
            <md-td>设置HREF类型自定义属性，text字段为必填字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>40124</md-td>
            <md-td>href custom_attr %v url can’t be null</md-td>
            <md-td>设置HREF类型自定义属性，url字段为必填字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>40125</md-td>
            <md-td>user position info invalid</md-td>
            <md-td>创建用户岗位信息非法。创建用户岗位时，岗位名称、岗位码和部门都不能为空，有岗位leader时，必须同时指定leader的ID信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>40126</md-td>
            <md-td>position department invalid, should be one of user’s department</md-td>
            <md-td>设置用户岗位部门ID不合法，用户的岗位部门ID必须为用户所在的部门之一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40127</md-td>
            <md-td>position code is not unique</md-td>
            <md-td>用户的岗位码不唯一，同一个用户的多个岗位岗位码信息必须唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40128</md-td>
            <md-td>user has one main position at most</md-td>
            <md-td>用户主岗数量错误，一个用户至多只能有设置一个主岗</md-td>
        </md-tr>
        <md-tr>
            <md-td>40129</md-td>
            <md-td>request contains users of different tenant</md-td>
            <md-td>请求的用户来自不同企业，检查请求的用户ID来源，是否为同一企业的用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40130</md-td>
            <md-td>update user department conflict with position department, should update position department at the same time</md-td>
            <md-td>更新用户的部门与用户岗位部门冲突，用户的岗位部门必须与用户的部门一致，更新用户部门需要同时更新相应的岗位部门，否则阻断更新操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>40131</md-td>
            <md-td>update user position department conflict with user department, should update user department at the same time</md-td>
            <md-td>更新用户的岗位部门与用户部门冲突，用户的岗位部门必须与用户的部门一致，用户的新岗位部门也必须是用户的部门之一，否则阻断更新操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>40132</md-td>
            <md-td>order department invalid</md-td>
            <md-td>用户排序的部门ID非法，请求的用户排序信息中的部门ID必须是用户的部门ID之一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40133</md-td>
            <md-td>idp check with account failed</md-td>
            <md-td>IDP 账号检查失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>40134</md-td>
            <md-td>create account failed</md-td>
            <md-td>账号创建失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>40135</md-td>
            <md-td>idp user_id is required</md-td>
            <md-td>创建IDP账号，user_id 必填</md-td>
        </md-tr>
        <md-tr>
            <md-td>40136</md-td>
            <md-td>update user’s email and mobile empty is forbiden</md-td>
            <md-td>更新用户信息，不能将用户的手机号和邮箱同时更新为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>40137</md-td>
            <md-td>can’t update unactive user’s mobile empty</md-td>
            <md-td>更新用户信息，不能将未激活用户的手机号更新为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>40138</md-td>
            <md-td>%v is not valid</md-td>
            <md-td>接收者非法。用户离职，用户资源接收者必须为当前企业的在职用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>40139</md-td>
            <md-td>unable to join multiple departments, please upgrade Organizational Structure Visible info</md-td>
            <md-td>用户无法加入多部门，请在企业管理后台升级“组织架构可见范围”规则</md-td>
        </md-tr>
        <md-tr>
            <md-td>40140</md-td>
            <md-td>can not set leader to oneself</md-td>
            <md-td>不能设置用户的直属上级为其本身，请检查用户的直属上级参数值</md-td>
        </md-tr>
        <md-tr>
            <md-td>40141</md-td>
            <md-td>can not set user position</md-td>
            <md-td>当前企业不支持设置用户岗位信息，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40142</md-td>
            <md-td>user department num exceed the limit</md-td>
            <md-td>不支持用户同时属于50个以上的部门，请检查</md-td>
        </md-tr>
        <md-tr>
            <md-td>40143</md-td>
            <md-td>unable to join multiple departments, please enable multiple departments feature</md-td>
            <md-td>当前企业不支持用户同时加入多个部门，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>40144</md-td>
            <md-td>department user count exceed</md-td>
            <md-td>创建或更新的所属部门中至少有一个部门的直属成员数超过限制，请检查请求中部门的人数</md-td>
        </md-tr>
        <md-tr>
            <md-td>40151</md-td>
            <md-td>custom department id %v is invaild</md-td>
            <md-td>创建或者更新部门，自定义部门ID非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>40152</md-td>
            <md-td>custom department id %v is not unique</md-td>
            <md-td>自定义部门ID已存在，同一企业内，自定义部门ID必须唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40153</md-td>
            <md-td>department name should be unique under same department</md-td>
            <md-td>部门名称冲突。同一部门下，部门的名称不允许重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>40154</md-td>
            <md-td>department unit %v is not exist</md-td>
            <md-td>部门单元不存在，请检查部门单元ID</md-td>
        </md-tr>
        <md-tr>
            <md-td>40155</md-td>
            <md-td>duplicate department order</md-td>
            <md-td>部门排序order重复。同一部门下，部门order不允许重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>40156</md-td>
            <md-td>department id is required</md-td>
            <md-td>请求未指定部门ID</md-td>
        </md-tr>
        <md-tr>
            <md-td>40157</md-td>
            <md-td>forbidden operation to root department 0</md-td>
            <md-td>不允许操作根部门0。根部门是虚拟部门，不能查询部门请求，更新该部门或者删除该部门</md-td>
        </md-tr>
        <md-tr>
            <md-td>40158</md-td>
            <md-td>support update custom department id at most once</md-td>
            <md-td>超过自定义部门ID更新限制，自定义部门ID至多允许更新一次</md-td>
        </md-tr>
        <md-tr>
            <md-td>40159</md-td>
            <md-td>department has active members, can’t delete</md-td>
            <md-td>待删除部门有在职用户时，不允许直接删除部门，请先处理部门成员后再执行删除操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>40160</md-td>
            <md-td>department has sub department, can’t delete</md-td>
            <md-td>待删除部门有子部门时，不允许直接删除部门，请先删除子部门后再删除部门</md-td>
        </md-tr>
        <md-tr>
            <md-td>40161</md-td>
            <md-td>can’t get root department info</md-td>
            <md-td>根部门为虚拟部门，不能查询其详情信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>40162</md-td>
            <md-td>departments with more than 500 sub departments are not allowed to call recursively</md-td>
            <md-td>当部门的子部门数量超过500个时，不支持递归查询该部门的子部门或者递归查询该部门的成员。请自行实现递归查询逻辑</md-td>
        </md-tr>
        <md-tr>
            <md-td>40163</md-td>
            <md-td>can not create department unit</md-td>
            <md-td>当前企业不支持创建部门单元，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>40164</md-td>
            <md-td>department child count exceed</md-td>
            <md-td>创建或更新的部门，其所属父部门的子部门数量超过限制，请检查该部门的子部门数量</md-td>
        </md-tr>
        <md-tr>
            <md-td>40170</md-td>
            <md-td>unit repeat, unit_type and unit_name is exist, can’t create</md-td>
            <md-td>部门单元重复。同一企业下，同一部门单元类型下name必须唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40171</md-td>
            <md-td>department unit name invalid</md-td>
            <md-td>部门单元名称非法，详见接口文档参数描述</md-td>
        </md-tr>
        <md-tr>
            <md-td>40172</md-td>
            <md-td>department unit type invalid</md-td>
            <md-td>部门单元类型非法，详见接口文档参数描述</md-td>
        </md-tr>
        <md-tr>
            <md-td>40173</md-td>
            <md-td>custom_id is already exist</md-td>
            <md-td>部门单元自定义ID已存在。同一企业内，自定义部门单元ID必须唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>40174</md-td>
            <md-td>department unit is still using, can’t be deleted</md-td>
            <md-td>部门单元正在使用中，例如有其他部门关联到了该部门单元，此时不允许删除部门单元</md-td>
        </md-tr>
        <md-tr>
            <md-td>40175</md-td>
            <md-td>department attach to more than one department unit</md-td>
            <md-td>一个部门最多关联一个部门单元，无法关联多个部门单元</md-td>
        </md-tr>
        <md-tr>
            <md-td>40180</md-td>
            <md-td>duplicate user_id in request</md-td>
            <md-td>批量请求中，user_id有重复。user_id是用户在企业的唯一标示，不允许重复；请检查批量请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>40181</md-td>
            <md-td>add user, leader must not user himself</md-td>
            <md-td>创建用户，用户的直属上级不能为用户自己</md-td>
        </md-tr>
        <md-tr>
            <md-td>40182</md-td>
            <md-td>MSyncUser must user_id must be assigned</md-td>
            <md-td>批量同步用户，必须指定用户的user_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>40183</md-td>
            <md-td>leader user_id circular reference</md-td>
            <md-td>批量同步用户，leader信息成环；比如同一个请求创建用户A、B，指定A的leader为B，同时指定B的leader为A的场景。请检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>40184</md-td>
            <md-td>add department, parent_id must not equal to current department id</md-td>
            <md-td>批量创建部门，部门的父部门不能为部门本身</md-td>
        </md-tr>
        <md-tr>
            <md-td>40185</md-td>
            <md-td>add department, parent_id must be assigned</md-td>
            <md-td>创建部门，必须指定父部门</md-td>
        </md-tr>
        <md-tr>
            <md-td>40186</md-td>
            <md-td>duplicate department id in request</md-td>
            <md-td>批量创建部门，请求中部门自定义ID重复，请检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>40187</md-td>
            <md-td>batch request, parent department id incompatible</md-td>
            <md-td>批量创建部门，部门参数出现冲突</md-td>
        </md-tr>
        <md-tr>
            <md-td>40501</md-td>
            <md-td>param required</md-td>
            <md-td>检查必填的参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>40502</md-td>
            <md-td>invalid parameter</md-td>
            <md-td>请求参数缺失或者有误，更多错误信息请参考请求返回的error message</md-td>
        </md-tr>
        <md-tr>
            <md-td>41001</md-td>
            <md-td>mobile already exist error</md-td>
            <md-td>手机号已经在企业中存在。手机号在企业内必须唯一，手机号在该企业创建过用户不允许再创建新用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>41002</md-td>
            <md-td>email already exist error</md-td>
            <md-td>邮箱已经在企业中存在。邮箱在企业内必须唯一，邮箱在该企业创建过用户不允许再创建新用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>41003</md-td>
            <md-td>user acount conflict error</md-td>
            <md-td>用户的联系方式属于两个不同的飞书账号，添加失败。如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41004</md-td>
            <md-td>mobile is invalid error</md-td>
            <md-td>手机号不合法，请检查是否是正确的手机号格式</md-td>
        </md-tr>
        <md-tr>
            <md-td>41005</md-td>
            <md-td>email is invalid error</md-td>
            <md-td>不是合法邮箱的邮箱地址，请检查邮箱地址的有效性</md-td>
        </md-tr>
        <md-tr>
            <md-td>41006</md-td>
            <md-td>no user name error</md-td>
            <md-td>无效的用户名，请检查是否传入了用户名</md-td>
        </md-tr>
        <md-tr>
            <md-td>41007</md-td>
            <md-td>exceed uncertain tenant seat limit error</md-td>
            <md-td>用户数量超过未认证企业的数量限制，不能创建用户，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41008</md-td>
            <md-td>exceed bill seat limit error</md-td>
            <md-td>用户数量超过未认证企业的数量限制，不能创建用户，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41009</md-td>
            <md-td>no email or mobile error</md-td>
            <md-td>创建用户，手机号邮箱至少指定其一</md-td>
        </md-tr>
        <md-tr>
            <md-td>41010</md-td>
            <md-td>no mobile error</md-td>
            <md-td>创建用户，手机号必填</md-td>
        </md-tr>
        <md-tr>
            <md-td>41011</md-td>
            <md-td>userID already exist error</md-td>
            <md-td>用户id已存在。user_id是企业内用户的唯一ID，不能重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>41012</md-td>
            <md-td>user id is invalid error</md-td>
            <md-td>用户id非法。user_id1-64字节的之间的字符</md-td>
        </md-tr>
        <md-tr>
            <md-td>41013</md-td>
            <md-td>exceed userID update limit error</md-td>
            <md-td>超出更新userID的次数上限</md-td>
        </md-tr>
        <md-tr>
            <md-td>41014</md-td>
            <md-td>user name sensitive error</md-td>
            <md-td>用户名中包含敏感信息，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41015</md-td>
            <md-td>idp type invalid error</md-td>
            <md-td>登录类型无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>41016</md-td>
            <md-td>department has too may users error</md-td>
            <md-td>部门下成员数量过多。部门下直属成员有数量限制，超过限制不允许添加</md-td>
        </md-tr>
        <md-tr>
            <md-td>41017</md-td>
            <md-td>department not exist</md-td>
            <md-td>部门不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>41018</md-td>
            <md-td>position info is invalid error</md-td>
            <md-td>岗位信息无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>41019</md-td>
            <md-td>position department is invalid error</md-td>
            <md-td>岗位部门无效，查看部门信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>41020</md-td>
            <md-td>position code has already exist error</md-td>
            <md-td>岗位code无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>41021</md-td>
            <md-td>position multiple main count error</md-td>
            <md-td>用户主岗错误，一个用户至多只能有设置一个主岗</md-td>
        </md-tr>
        <md-tr>
            <md-td>41022</md-td>
            <md-td>user tenant not match error</md-td>
            <md-td>用户的企业信息和应用不对应，检查是否使用其他企业的凭证访问当前企业的资源</md-td>
        </md-tr>
        <md-tr>
            <md-td>41023</md-td>
            <md-td>update department conflict position department error</md-td>
            <md-td>用户的岗位部门与用户的部门不一致。用户的岗位部门必须与用户的部门一致，更新用户部门需要同时更新相应的岗位部门，否则阻断更新操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>41024</md-td>
            <md-td>update position department conflict department error</md-td>
            <md-td>用户的岗位部门与用户的部门不一致。用户的岗位部门必须与用户的部门一致，更新用户部门需要同时更新相应的岗位部门，否则阻断更新操作</md-td>
        </md-tr>
        <md-tr>
            <md-td>41025</md-td>
            <md-td>order department invalid error</md-td>
            <md-td>部门order非法，请求的用户排序信息中的部门ID必须是用户的部门ID之一</md-td>
        </md-tr>
        <md-tr>
            <md-td>41027</md-td>
            <md-td>create account failed error</md-td>
            <md-td>创建用户失败，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41028</md-td>
            <md-td>user multi department need upgrade visibility error</md-td>
            <md-td>使用多部门需要将可见性版本升级，可在企业管理后台-组织架构可见范围中升级，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41029</md-td>
            <md-td>create or update user multi department error</md-td>
            <md-td>更新用户多部门失败。可能多部门功能未开启，咨询企业管理员</md-td>
        </md-tr>
        <md-tr>
            <md-td>41030</md-td>
            <md-td>set leader to oneself error</md-td>
            <md-td>不允许设置自己的上级为自己</md-td>
        </md-tr>
        <md-tr>
            <md-td>41031</md-td>
            <md-td>position feature not enable error</md-td>
            <md-td>岗位设置开关未打开。当前企业不支持设置用户岗位信息，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41032</md-td>
            <md-td>user multi department feature not enable error</md-td>
            <md-td>允许用户加入多部门开关未打开。当前企业不支持用户同时加入多个部门，如有疑问可[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)  </md-td>
        </md-tr>
        <md-tr>
            <md-td>41033</md-td>
            <md-td>user in too many departments error</md-td>
            <md-td>用户加入的部门数过多。不支持用户同时属于50个以上的部门，请检查</md-td>
        </md-tr>
        <md-tr>
            <md-td>41034</md-td>
            <md-td>email prefix already exist error</md-td>
            <md-td>电子邮件的前缀已经存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>41035</md-td>
            <md-td>email prefix is invalid error</md-td>
            <md-td>电子邮件的前缀不合法，请检查拼写</md-td>
        </md-tr>
        <md-tr>
            <md-td>41036</md-td>
            <md-td>avatar key is invalid error</md-td>
            <md-td>头像非法，头像的key通过上传接口获取</md-td>
        </md-tr>
        <md-tr>
            <md-td>41037</md-td>
            <md-td>avatar is sensitive error</md-td>
            <md-td>头像的涉及敏感信息，不可用</md-td>
        </md-tr>
        <md-tr>
            <md-td>41038</md-td>
            <md-td>gender is invalid error</md-td>
            <md-td>性别不合法，申请自查</md-td>
        </md-tr>
        <md-tr>
            <md-td>41040</md-td>
            <md-td>user name is null error</md-td>
            <md-td>用户名为空，请检查参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>41041</md-td>
            <md-td>department id is not assigned error</md-td>
            <md-td>用户所属的部门不能为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>41042</md-td>
            <md-td>join time is invalid error</md-td>
            <md-td>用户的加入时间非法，加入时间应该是有效的时间戳</md-td>
        </md-tr>
        <md-tr>
            <md-td>41043</md-td>
            <md-td>employee id is not valid error</md-td>
            <md-td>employee id 非法，employee id 长度应该在1-64个字符之间，不应包含\t\n\r</md-td>
        </md-tr>
        <md-tr>
            <md-td>41044</md-td>
            <md-td>custom attr id is not set error</md-td>
            <md-td>请求参数的自定字段ID为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>41045</md-td>
            <md-td>Custom attribute id is not exist error</md-td>
            <md-td>自定义属性ID不存在，请确认自定义属性ID来源，自定义属性ID可以通过获取企业自定义属性接口查询</md-td>
        </md-tr>
        <md-tr>
            <md-td>41046</md-td>
            <md-td>custom attr value is not set error</md-td>
            <md-td>自定义属性对应的值为空</md-td>
        </md-tr>
        <md-tr>
            <md-td>41047</md-td>
            <md-td>custom attribute href text is null error</md-td>
            <md-td>HREF类型自定义属性， herf text字段为必填字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>41048</md-td>
            <md-td>custom attr href url is null error</md-td>
            <md-td>HREF类型自定义属性,url为必填字段</md-td>
        </md-tr>
        <md-tr>
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
            <md-td>41051</md-td>
            <md-td>user id info not provide error</md-td>
            <md-td>请求user id 为空，请检查user id 参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>41052</md-td>
            <md-td>acceptor id is invalid error</md-td>
            <md-td>辞职资源接受人无效。用户离职后，其文件的接收者不合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>41053</md-td>
            <md-td>userID already exist error</md-td>
            <md-td>用户id已存在。user_id是企业内用户的唯一ID，不能重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>41055</md-td>
            <md-td>employee type can not be null error</md-td>
            <md-td>更新接口中，雇员类型不可为空，请检查</md-td>
        </md-tr>
        <md-tr>
            <md-td>41056</md-td>
            <md-td>no field authority error</md-td>
            <md-td>请求中存在无权限的字段，请查看权限范围</md-td>
        </md-tr>
        <md-tr>
            <md-td>41057</md-td>
            <md-td>need send email but not set mail error</md-td>
            <md-td>需要发送邮件，但是没有设置邮箱</md-td>
        </md-tr>
        <md-tr>
            <md-td>41058</md-td>
            <md-td>need send sms but not set mobile error</md-td>
            <md-td>需要发送短信，但是没有设置手机号</md-td>
        </md-tr>
        <md-tr>
            <md-td>41059</md-td>
            <md-td>invalid employee type error</md-td>
            <md-td>用户的雇员类型错误，请填写1-5之间的数字，1 正式员工 2 实习生 3 外包 4 劳务 5 顾问</md-td>
        </md-tr>
        <md-tr>
            <md-td>41060</md-td>
            <md-td>inactive employee type error</md-td>
            <md-td>员工类型未启用。当前企业并无相应的雇员类型，企业的雇员类型咨询管理员</md-td>
        </md-tr>
        <md-tr>
            <md-td>42005</md-td>
            <md-td>user has exist in group error</md-td>
            <md-td>用户已经存在于用户组</md-td>
        </md-tr>
        <md-tr>
            <md-td>42006</md-td>
            <md-td>user has resigned error</md-td>
            <md-td>用户已经离职</md-td>
        </md-tr>
        <md-tr>
            <md-td>43004</md-td>
            <md-td>illegal unit error</md-td>
            <md-td>非法的单位信息，确保单位信息合法有效</md-td>
        </md-tr>
        <md-tr>
            <md-td>43005</md-td>
            <md-td>duplicate order error</md-td>
            <md-td>重复的排序，同一部门中order必须唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>43007</md-td>
            <md-td>dup dept unit custom id error</md-td>
            <md-td>租户内 部门单位自定义ID (unit_id) 重复，或部门自定义ID (department_id) 重复</md-td>
        </md-tr>
        <md-tr>
            <md-td>43008</md-td>
            <md-td>custom dept id invalid error</md-td>
            <md-td>部门自定义ID不合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>43010</md-td>
            <md-td>big dept forbid recursion error</md-td>
            <md-td>部门的子部门过多，不支持递归查询</md-td>
        </md-tr>
        <md-tr>
            <md-td>43011</md-td>
            <md-td>delete has member dept error</md-td>
            <md-td>删除有用户的部门出错</md-td>
        </md-tr>
        <md-tr>
            <md-td>43013</md-td>
            <md-td>dept too many children error</md-td>
            <md-td>部门的直接子部门数量不超过1000</md-td>
        </md-tr>
        <md-tr>
            <md-td>45500</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>47009</md-td>
            <md-td>duplicate name error</md-td>
            <md-td>名字重复，更换用户组名称重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>50003</md-td>
            <md-td>invalid app_id</md-td>
            <md-td>传参错误，请确保app_id是正确、有效的。</md-td>
        </md-tr>
        <md-tr>
            <md-td>50006</md-td>
            <md-td>invalid request</md-td>
            <md-td>请求参数错误，建议检查请求参数是否合法</md-td>
        </md-tr>
        <md-tr>
            <md-td>55001</md-td>
            <md-td>server internal error</md-td>
            <md-td>服务内部错误，减少调用频率，稍后再试</md-td>
        </md-tr>
        <md-tr>
            <md-td>60001</md-td>
            <md-td>OpenApiErrorCodeParameterError</md-td>
            <md-td>请求参数错误，检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>60002</md-td>
            <md-td>OpenApiErrorCodeDefinitionNotFound</md-td>
            <md-td>审批定义【approval_code】 找不到，检查审批定义code是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>60003</md-td>
            <md-td>OpenApiErrorCodeInstanceNotFound</md-td>
            <md-td>审批实例【instance_code】找不到，检查审批实例ID是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>60004</md-td>
            <md-td>OpenApiErrorCodeUserNotFound</md-td>
            <md-td>用户找不到，检查userId是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>60005</md-td>
            <md-td>OpenApiErrorCodeDepartmentNotFound</md-td>
            <md-td>部门验证失败，检查用户所属部门</md-td>
        </md-tr>
        <md-tr>
            <md-td>60006</md-td>
            <md-td>OpenApiErrorCodeValidateFormError</md-td>
            <md-td>表单验证失败，可能因表单内的参数未填写完整、数据类型不正确、取值不正确导致，也可能因没有表单控件的读写权限导致，你需要排查表单设置是否正确。

如果报错信息提供了有问题的控件 ID，你可以调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)或者[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，通过响应参数 `form` 的值，检索有问题的控件 ID，然后检查该控件的配置是否正确。</md-td>
        </md-tr>
        <md-tr>
            <md-td>60007</md-td>
            <md-td>OpenApiErrorCodeSubscriptionExist</md-td>
            <md-td>订阅已存在，检查已订阅列表</md-td>
        </md-tr>
        <md-tr>
            <md-td>60008</md-td>
            <md-td>OpenApiErrorCodeSubscriptionNotExist</md-td>
            <md-td>订阅不存在，检查是否已订阅，未订阅不可取消</md-td>
        </md-tr>
        <md-tr>
            <md-td>60009</md-td>
            <md-td>OpenApiErrorCodeNoPermission</md-td>
            <md-td>权限不足，检查权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>60010</md-td>
            <md-td>OpenApiErrorCodeTaskNotFound</md-td>
            <md-td>审批任务【task_id】 找不到，确认taskId是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>60011</md-td>
            <md-td>OpenApiErrorCodeStartPremiumVersion</md-td>
            <md-td>该审批为付费审批，免费版用户不能发起这个审批，付费审批免费用户不可发起</md-td>
        </md-tr>
        <md-tr>
            <md-td>60012</md-td>
            <md-td>OpenApiErrorCodeUuidConflict</md-td>
            <md-td>审批实例 uuid 冲突，uuid需要保持唯一</md-td>
        </md-tr>
        <md-tr>
            <md-td>60013</md-td>
            <md-td>OpenApiErrorCodeUnsupportApporval</md-td>
            <md-td>不支持的审批定义，免费用户不支持该类型审批</md-td>
        </md-tr>
        <md-tr>
            <md-td>60014</md-td>
            <md-td>获取更新锁失败</md-td>
            <md-td>并发更新同一个审批实例冲突。</md-td>
        </md-tr>
        <md-tr>
            <md-td>65001</md-td>
            <md-td>OpenApiErrorCodeInternalError</md-td>
            <md-td>内部错误，建议检查一下参数并重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>90201</md-td>
            <md-td>WrongRequestJson</md-td>
            <md-td>请求体不是一个 json，请确保请求body是合法的json格式</md-td>
        </md-tr>
        <md-tr>
            <md-td>90202</md-td>
            <md-td>validate RangeVal fail</md-td>
            <md-td>请求中range格式有误，检查请求中的range是否合规</md-td>
        </md-tr>
        <md-tr>
            <md-td>90203</md-td>
            <md-td>Fail</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>90204</md-td>
            <md-td>WrongRequestBody</md-td>
            <md-td>请求体有误，请求入参有问题，请仔细检查入参</md-td>
        </md-tr>
        <md-tr>
            <md-td>90205</md-td>
            <md-td>InvalidUsers</md-td>
            <md-td>非法的 user，检查user信息是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>90206</md-td>
            <md-td>EmptySheetId</md-td>
            <md-td>sheeId 为空，必须要提供sheetid，修正请求入参</md-td>
        </md-tr>
        <md-tr>
            <md-td>90207</md-td>
            <md-td>EmptySheetTitle</md-td>
            <md-td>sheet 名称为空，检查sheet名称是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>90208</md-td>
            <md-td>SameSheetIdOrTitle</md-td>
            <md-td>请求中有相同的 sheetId 或 title，调整sheetId或者title</md-td>
        </md-tr>
        <md-tr>
            <md-td>90209</md-td>
            <md-td>ExistSheetId</md-td>
            <md-td>sheetId 已经存在，请提供不重复的sheetId</md-td>
        </md-tr>
        <md-tr>
            <md-td>90210</md-td>
            <md-td>ExistSheetTitle</md-td>
            <md-td>sheet title 已经存在，请提供不重复的子表title</md-td>
        </md-tr>
        <md-tr>
            <md-td>90211</md-td>
            <md-td>WrongSheetId</md-td>
            <md-td>错误的 sheetId，检查sheetId的正确性</md-td>
        </md-tr>
        <md-tr>
            <md-td>90212</md-td>
            <md-td>WrongRowOrCol</md-td>
            <md-td>非法的行列，检查行列信息是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>90213</md-td>
            <md-td>PermissionFail</md-td>
            <md-td>没有文件的权限 forbidden，请获取文件权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>90214</md-td>
            <md-td>SpreadSheetNotFound</md-td>
            <md-td>SpreadSheet没有找到，请检查spreadsheet token</md-td>
        </md-tr>
        <md-tr>
            <md-td>90215</md-td>
            <md-td>SheetIdNotFound</md-td>
            <md-td>sheetId 没有找到，请求入参对应的子表不存在，修正请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>90216</md-td>
            <md-td>EmptyValue</md-td>
            <md-td>请求参数错误 或 本次请求未导致数据变更，请检查参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>90217</md-td>
            <md-td>TooManyRequest</md-td>
            <md-td>请求太频繁，请降低请求调用频率</md-td>
        </md-tr>
        <md-tr>
            <md-td>90218</md-td>
            <md-td>LockedCell</md-td>
            <md-td>单元格被保护，检查是否有权限编辑该单元格</md-td>
        </md-tr>
        <md-tr>
            <md-td>90219</md-td>
            <md-td>CellExcess</md-td>
            <md-td>单元格数量超过限制，检查单元格数量</md-td>
        </md-tr>
        <md-tr>
            <md-td>90221</md-td>
            <md-td>TooLargeResponse</md-td>
            <md-td>需要返回的数据过大，降低查询量</md-td>
        </md-tr>
        <md-tr>
            <md-td>90222</md-td>
            <md-td>TooLargeCell</md-td>
            <md-td>单元格内容过大，减少单元格内容</md-td>
        </md-tr>
        <md-tr>
            <md-td>90223</md-td>
            <md-td>ColIdNotFound</md-td>
            <md-td>ColId没有设置，检查请求体是否设置ColId字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>90224</md-td>
            <md-td>RowIdNotFound</md-td>
            <md-td>RowId没有设置，检查请求体是否设置RowId字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>90225</md-td>
            <md-td>NotLinkSpreadSheet</md-td>
            <md-td>未关联ISV</md-td>
        </md-tr>
        <md-tr>
            <md-td>90226</md-td>
            <md-td>ExcessLimit</md-td>
            <md-td>超出限制，根据返回的消息调整请求数量</md-td>
        </md-tr>
        <md-tr>
            <md-td>90227</md-td>
            <md-td>TooLargeRequest</md-td>
            <md-td>请求数据量过大，请减少数据量</md-td>
        </md-tr>
        <md-tr>
            <md-td>90228</md-td>
            <md-td>ImportProcessing</md-td>
            <md-td>导入中，等待导入完成</md-td>
        </md-tr>
        <md-tr>
            <md-td>90229</md-td>
            <md-td>WrongURLParam</md-td>
            <md-td>URL参数错误</md-td>
        </md-tr>
        <md-tr>
            <md-td>90235</md-td>
            <md-td>Retry later</md-td>
            <md-td>该报错一般是由于前置操作未执行完成，或本次操作数据太大，服务器计算超时导致。遇到该错误码时，建议等待一段时间后重试。通常有以下几种原因：

- **编辑操作频繁**：开发者对多维表格的编辑操作非常频繁。可能会导致由于等待前置操作处理完成耗时过长而超时的情况。多维表格底层对数据表的处理基于版本维度的串行方式，不支持并发。因此，并发请求时容易出现此类错误，不建议开发者对单个数据表进行并发请求。

- **批量操作负载重**：开发者在多维表格中进行批量新增、删除等操作时，如果数据表的数据量非常大，可能会导致单次请求耗时过长，最终导致请求超时。建议开发者适当降低批量请求的 page_size 以减少请求耗时。
- **资源分配与计算开销**：资源分配是基于单文档维度的，如果读接口涉及公式计算、排序等计算逻辑，会占用较多资源。例如，并发读取一个文档下的多个数据表也可能导致该文档阻塞。</md-td>
        </md-tr>
        <md-tr>
            <md-td>90242</md-td>
            <md-td>Spreadsheet in mix state</md-td>
            <md-td>正在加载文档数据，请等待文档数据加载完成后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>90301</md-td>
            <md-td>FAILED</md-td>
            <md-td>操作失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>90302</md-td>
            <md-td>PARAM_ERROR</md-td>
            <md-td>参数错误</md-td>
        </md-tr>
        <md-tr>
            <md-td>90303</md-td>
            <md-td>FORBIDDEN</md-td>
            <md-td>没有权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>90304</md-td>
            <md-td>META_DELETED</md-td>
            <md-td>文件已删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>90305</md-td>
            <md-td>META_NOT_EXIST</md-td>
            <md-td>文件不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>90306</md-td>
            <md-td>REVIEW_NOT_PASS</md-td>
            <md-td>评论内容审核不通过</md-td>
        </md-tr>
        <md-tr>
            <md-td>90399</md-td>
            <md-td>INTERNAL_ERROR</md-td>
            <md-td>内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>91001</md-td>
            <md-td>OPEN_CODE_PARAM_ERROR</md-td>
            <md-td>参数错误，对照开发者文档，检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>91002</md-td>
            <md-td>OPEN_CODE_FORBIDDEN</md-td>
            <md-td>没有权限，操作者给其他人加权限前要先有权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>91003</md-td>
            <md-td>OPEN_CODE_INVALID_OPERATION</md-td>
            <md-td>操作异常，可能的原因有文档设置了不允许跨租户分享、协作者达到上限等</md-td>
        </md-tr>
        <md-tr>
            <md-td>91004</md-td>
            <md-td>OPEN_CODE_USER_NO_SHARE_PERM</md-td>
            <md-td>用户没有共享权限，检查用户是否有分享权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>91005</md-td>
            <md-td>Resource is deleted</md-td>
            <md-td>资源已被删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>91201</md-td>
            <md-td>FAILED</md-td>
            <md-td>处理失败，稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>91202</md-td>
            <md-td>PARAMERR</md-td>
            <md-td>参数错误，检查参数是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>91203</md-td>
            <md-td>NOTEXIST</md-td>
            <md-td>数据不存在，检查参数是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>91204</md-td>
            <md-td>FORBIDDEN</md-td>
            <md-td>检查用户对文档、文件夹的权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>91205</md-td>
            <md-td>DELETED</md-td>
            <md-td>数据已被删除，检查数据是否还存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>91206</md-td>
            <md-td>OUT_OF_LIMIT</md-td>
            <md-td>超过限制</md-td>
        </md-tr>
        <md-tr>
            <md-td>91207</md-td>
            <md-td>DUPLICATE</md-td>
            <md-td>重复记录</md-td>
        </md-tr>
        <md-tr>
            <md-td>91208</md-td>
            <md-td>REVIEW</md-td>
            <md-td>内容审查不通过</md-td>
        </md-tr>
        <md-tr>
            <md-td>91401</md-td>
            <md-td>PARAMERR</md-td>
            <md-td>参数出现错误，检查参数有效性</md-td>
        </md-tr>
        <md-tr>
            <md-td>91402</md-td>
            <md-td>NOTEXIST</md-td>
            <md-td>未找到指定的云文档。请查看当前云文档的 URL 链接，确定当前云文档是否挂载在知识库中：

- 如图，如果 URL 链接中 token 前为 wiki，则说明该云文档挂载在知识库中，该 token 并不是当前云文档的实际 token，而是知识库的节点的 node_token。
  
    要获取知识库下云文档的实际 token，你需要调用[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口，传入 URL 中的节点 node_token。其中返回的 obj_type 才是云文档的类型，可能是文档、电子表格、多维表格等；返回的 obj_token 才是云文档的实际 token。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d375705f169dd298fe6c8b4b624dd83_gpIlQGJuYz.png?height=478&maxWidth=550&width=1625)

- 如图，如果 URL 链接中 token 前为 docx、base、sheets 等非 wiki 类型，则说明该 token 才是当前云文档的实际 token。了解更多，参考[如何获取各类云文档资源的 token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-get-docs-tokens)。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e60279d12890fb9c90e8f75cc187a40_rjZnXuRMZL.png?height=155&maxWidth=550&width=868)</md-td>
        </md-tr>
        <md-tr>
            <md-td>91403</md-td>
            <md-td>FORBIDDEN</md-td>
            <md-td>当前调用身份没有云文档的阅读、编辑或管理等权限。请参考以下方式解决：
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有云文档权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
    
    **注意**：
     - 在 **添加文档应用** 前，你需确保目标应用至少开通了一个云文档或多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。
    - 如果多维表格开启了高级权限，你需为应用添加多维表格的 **可管理** 权限，否则仍无法操作多维表格。

        ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)

- 如果你使用的是 `user_access_token`，意味着当前用户没有云文档权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加权限。

  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&maxWidth=550&width=1383)

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>91404</md-td>
            <md-td>LOGIN_REQUIRED</md-td>
            <md-td>需要登录</md-td>
        </md-tr>
        <md-tr>
            <md-td>93001</md-td>
            <md-td>param err</md-td>
            <md-td>入参校验不通过，检查token和id等信息是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>93002</md-td>
            <md-td>out of limit</md-td>
            <md-td>请求列表数量超出预设范围，page list控制在500以内</md-td>
        </md-tr>
        <md-tr>
            <md-td>93003</md-td>
            <md-td>invalid user</md-td>
            <md-td>无效用户，检查用户是否存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>93004</md-td>
            <md-td>not found</md-td>
            <md-td>node或space没有记录，检查nodeId和spaceId是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>93006</md-td>
            <md-td>internal err</md-td>
            <md-td>程序内部错误可以找研发排查具体问题，可直接找wiki研发确认</md-td>
        </md-tr>
        <md-tr>
            <md-td>95001</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>95003</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>95005</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>95006</md-td>
            <md-td>Failed</md-td>
            <md-td>文档未找到，检查token是否有效</md-td>
        </md-tr>
        <md-tr>
            <md-td>95007</md-td>
            <md-td>Failed</md-td>
            <md-td>文档已删除，已删除文件无法获取文档meta信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>95008</md-td>
            <md-td>FORBIDDEN</md-td>
            <md-td>检查用户对文档、文件夹的权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>95009</md-td>
            <md-td>Failed</md-td>
            <md-td>没有权限，检查是否有文档读权限。[添加文档权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)</md-td>
        </md-tr>
        <md-tr>
            <md-td>95010</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>95011</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>95013</md-td>
            <md-td>Failed</md-td>
            <md-td>挂载文档失败，无效的folderToken或对目录无权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>95017</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>读取文档内容失败，检查revison是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>95018</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>解析文档内容失败，详见具体错误信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>95020</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>批量更新文档操作失败，详见具体错误信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>95023</md-td>
            <md-td>revision too old</md-td>
            <md-td>版本号太老，请使用最新版本号</md-td>
        </md-tr>
        <md-tr>
            <md-td>95024</md-td>
            <md-td>Failed</md-td>
            <md-td>参数无效，检查参数有效性</md-td>
        </md-tr>
        <md-tr>
            <md-td>95025</md-td>
            <md-td>Failed</md-td>
            <md-td>解析请求失败，检查请求是否合法json</md-td>
        </md-tr>
        <md-tr>
            <md-td>95026</md-td>
            <md-td>Failed</md-td>
            <md-td>无效的batch_update 操作类型，检查batch_update接口request_type</md-td>
        </md-tr>
        <md-tr>
            <md-td>95050</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>保存文档内容失败，详见具体错误信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>95051</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>创建文档失败，详见具体错误信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>95053</md-td>
            <md-td>this API does not support the Upgraded Docs(docx), please refer to the docs using the correct API.</md-td>
            <md-td>此 API 不支持新版文档（docx），请参考新版文档 OpenAPI 接入指引使用正确的 API。</md-td>
        </md-tr>
        <md-tr>
            <md-td>95201</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95202</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>95203</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95204</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95205</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95206</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95207</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>95208</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95209</md-td>
            <md-td>InternalError</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>95299</md-td>
            <md-td>DefaultCode</md-td>
            <md-td>其他错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>96001</md-td>
            <md-td>OPEN_CODE_INTERNAL_ERROR</md-td>
            <md-td>内部错误，先重试并检查请求参数，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>96002</md-td>
            <md-td>concurrency error,please retry</md-td>
            <md-td>权限并发编辑失败，重试请求，且不要并发操作同一篇文档的权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>96201</md-td>
            <md-td>LOCK</md-td>
            <md-td>内部错误，勿并发调用接口，请串行调用</md-td>
        </md-tr>
        <md-tr>
            <md-td>96202</md-td>
            <md-td>RECOVER</md-td>
            <md-td>内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>96401</md-td>
            <md-td>FAILED</md-td>
            <md-td>失败，详见具体错误信息</md-td>
        </md-tr>
        <md-tr>
            <md-td>96402</md-td>
            <md-td>TIMEOUT</md-td>
            <md-td>超时</md-td>
        </md-tr>
        <md-tr>
            <md-td>96403</md-td>
            <md-td>PROCESSING</md-td>
            <md-td>请求正在处理中</md-td>
        </md-tr>
        <md-tr>
            <md-td>100001</md-td>
            <md-td>page token invalid</md-td>
            <md-td>page token 格式非法，请检查token参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>100002</md-td>
            <md-td>Invalid field selection [illegal field]</md-td>
            <md-td>fields 中存在非法字段名，检查fields中的字段名称</md-td>
        </md-tr>
        <md-tr>
            <md-td>100003</md-td>
            <md-td>time format must follow RFC3339 standard</md-td>
            <md-td>时间格式未遵循 RFC3339 标准，请检查时间格式</md-td>
        </md-tr>
        <md-tr>
            <md-td>100004</md-td>
            <md-td>building id invalid</md-td>
            <md-td>building ID 非法，请检查Building ID参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>100005</md-td>
            <md-td>room id invalid</md-td>
            <md-td>room ID 非法，请检查roomID参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>100007</md-td>
            <md-td>building name exist</md-td>
            <md-td>请检查租户下是否有其它同名建筑</md-td>
        </md-tr>
        <md-tr>
            <md-td>100009</md-td>
            <md-td>room name exist</md-td>
            <md-td>请检查该建筑物下是否有其它同名会议室</md-td>
        </md-tr>
        <md-tr>
            <md-td>105001</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>105002</md-td>
            <md-td>invalid request</md-td>
            <md-td>无效请求，检查请求参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>121004</md-td>
            <md-td>data not exist</md-td>
            <md-td>无效的请求体，请确保请求方法、请求信息、请求数据格式等是正确的</md-td>
        </md-tr>
        <md-tr>
            <md-td>154000</md-td>
            <md-td>bad request</md-td>
            <md-td>传参错误，请确保请求方法、请求信息、请求数据格式等是正确的</md-td>
        </md-tr>
        <md-tr>
            <md-td>154001</md-td>
            <md-td>unauthorized</md-td>
            <md-td>请求鉴权失败，请检查auth信息是否正确，应用租户和服务台租户是否一致</md-td>
        </md-tr>
        <md-tr>
            <md-td>1000001</md-td>
            <md-td>unexpected head in request</md-td>
            <md-td>请求头错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1000002</md-td>
            <md-td>invalid parameters in request</md-td>
            <md-td>参数错误，排查参数是否符合API预期</md-td>
        </md-tr>
        <md-tr>
            <md-td>1000003</md-td>
            <md-td>internal service error</md-td>
            <md-td>服务器错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1000004</md-td>
            <md-td>method rate limited</md-td>
            <md-td>接口请求过快，超出频率限制，降低请求频率</md-td>
        </md-tr>
        <md-tr>
            <md-td>1000005</md-td>
            <md-td>app rate limited</md-td>
            <md-td>应用被限流，降低请求频率</md-td>
        </md-tr>
        <md-tr>
            <md-td>1000007</md-td>
            <md-td>app bot_id not found</md-td>
            <md-td>bot id没有被找到，检查请求应用是否存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001001</md-td>
            <md-td>invalid calendar_id</md-td>
            <md-td>calendar id无效，检查calendar id是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001002</md-td>
            <md-td>no calendar access_role</md-td>
            <md-td>没有日历从访问权限，检查相应calendar id是否正确，相应日历是否有权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001004</md-td>
            <md-td>invalid calendar type</md-td>
            <md-td>日历类型无效，检查calendar id是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001501</md-td>
            <md-td>user not found</md-td>
            <md-td>用户不存在，排查是否传递了不正确的open_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001502</md-td>
            <md-td>okr data not found</md-td>
            <md-td>OKR数据不存在，排查是否传递了不正确的okr_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001901</md-td>
            <md-td>internal server error</md-td>
            <md-td>OKR内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1001902</md-td>
            <md-td>no permission</md-td>
            <md-td>OKR无权限访问，排查是否传递了token、okr_id</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001903</md-td>
            <md-td>invalid parameters</md-td>
            <md-td>请求参数错误，排查OKR接口参数格式是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>1001999</md-td>
            <md-td>system exception</md-td>
            <md-td>未知错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1002000</md-td>
            <md-td>acl not found</md-td>
            <md-td>访问控制不存在，检查acl_id是否正确，是否已正确创建</md-td>
        </md-tr>
        <md-tr>
            <md-td>1003001</md-td>
            <md-td>event not found</md-td>
            <md-td>日程没有找到，检查日程id是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>1003003</md-td>
            <md-td>event is deleted</md-td>
            <md-td>日程已经删除，检查日程id是否正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>1004000</md-td>
            <md-td>attendee not found</md-td>
            <md-td>参与人没有找到，检查attendee id是否正确（标识attendee的唯一id）</md-td>
        </md-tr>
        <md-tr>
            <md-td>1004004</md-td>
            <md-td>invalid attendee type</md-td>
            <md-td>无效的参与人类型，检查参与人类型是否都是正确的</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050001</md-td>
            <md-td>TIME_CHECK_NOT_VALID</md-td>
            <md-td>时间范围填写错误，填写准确的时间范围，起始时间不得早于半年前，时间选择范围不能超过一个月</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050002</md-td>
            <md-td>ErrCode_DATABASE_ERR</md-td>
            <md-td>服务内部错误，请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050004</md-td>
            <md-td>Error_Param_Error</md-td>
            <md-td>参数填写非法，检查参数是否填写错误或者缺失</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050005</md-td>
            <md-td>Error_Page_Size_Invalid</md-td>
            <md-td>分页请求的page_size参数非法，请检查page_size设置的大小</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050006</md-td>
            <md-td>Error_Page_Token_Invalid</md-td>
            <md-td>非法的 page token，检查page token是否填写错误</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050007</md-td>
            <md-td>Error_Event_Name_Not_Found</md-td>
            <md-td>非法的 event name，检查event name是否填写错误</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050008</md-td>
            <md-td>Error_Open_Platform_RPC</md-td>
            <md-td>请稍后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050009</md-td>
            <md-td>Error_Lark_ID_Not_Found</md-td>
            <md-td>提供的用户ID不存在，请检查用户ID来源，是否为当前租户下用户</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050011</md-td>
            <md-td>Error_Event_Module_Invalid</md-td>
            <md-td>事件模块非法，检查event module是否填写错误</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050012</md-td>
            <md-td>Error_Event_Module_Not_Match_Event_Name</md-td>
            <md-td>提供的事件类型和事件模块不一致，请修改事件类型或者事件模块保证两者一致</md-td>
        </md-tr>
        <md-tr>
            <md-td>1050019</md-td>
            <md-td>Error_Not_Support_Query</md-td>
            <md-td>不支持的查询，检查是否添加了不支持的查询字段</md-td>
        </md-tr>
        <md-tr>
            <md-td>1051002</md-td>
            <md-td>param validate error</md-td>
            <md-td>参数错误。时间范围不能超出限制，具体限制详见文档，并且时间格式要正确。page_size和page_token也要正确填写</md-td>
        </md-tr>
        <md-tr>
            <md-td>1061041</md-td>
            <md-td>parent node has been deleted</md-td>
            <md-td>父节点已经被删除，请确认parent_token的节点是否被删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069301</md-td>
            <md-td>fail</md-td>
            <md-td>操作失败，重试，稳定失败建议[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069302</md-td>
            <md-td>param error</md-td>
            <md-td>参数错误，检查参数有效性</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069303</md-td>
            <md-td>forbidden</md-td>
            <md-td>没有权限，检查是否有待评论文档的评论权限（普遍文档默认是有阅读权限即有评论权限）</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069304</md-td>
            <md-td>docs had been deleted</md-td>
            <md-td>云文档已被删除，检查待评论文档是否已被删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069305</md-td>
            <md-td>docs not exist</md-td>
            <md-td>云文档不存在，检查待评论文档是否能正常访问</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069306</md-td>
            <md-td>content review not pass</md-td>
            <md-td>评论内容审核不通过，排查评论内容是否存在不合法内容</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069307</md-td>
            <md-td>not exist</md-td>
            <md-td>不存在，检查待评论文档是否能正常访问、评论可能不存在/被删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069308</md-td>
            <md-td>exceeded limit</md-td>
            <md-td>超过数量上限限制，评论数据超过上限限制，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>1069399</md-td>
            <md-td>internal error</md-td>
            <md-td>内部错误，请重试，稳定失败建议[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>1103003</md-td>
            <md-td>tenant no idp config</md-td>
            <md-td>租户未开启SSO登录，检查SSO相关配置，确认无误后开启租户SSO开关</md-td>
        </md-tr>
        <md-tr>
            <md-td>1103008</md-td>
            <md-td>idp user not bind idp cp</md-td>
            <md-td>当前用户未绑定企业级联合登录凭证，请调用绑定接口绑定企业级联合登录凭证</md-td>
        </md-tr>
        <md-tr>
            <md-td>4000027</md-td>
            <md-td>too many chars in one text, max=100000</md-td>
            <md-td>Text Block 的字数超过了上限。一个 Text Block 字数上限是 100,000 个 UTF-16 字符，请减少字符后重试。</md-td>
        </md-tr>
        <md-tr>
            <md-td>90003087</md-td>
            <md-td>You are currently using the Frontline Professional account and have reached the usage limit for this feature. Please contact the administrator to request access.</md-td>
            <md-td>你当前正在使用一线专业版账号，已经达到使用上线，请联系企业管理员获取权益。</md-td>
        </md-tr>
        <md-tr>
            <md-td>90003088</md-td>
            <md-td>Feature unavailable due to changes in your organization's subscription. Please contact the administrator to request access.</md-td>
            <md-td>由于组织的订阅类型发生变化，功能暂不可用。请联系企业管理员获取权益。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991201</md-td>
            <md-td>resource not find</md-td>
            <md-td>请求路径错误(404)，检查路径是否填写正确</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991300</md-td>
            <md-td>invalid next parameter:%s</md-td>
            <md-td>callback url中next参数有问题，请检查并携带正确的next参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991301</md-td>
            <md-td>request method doesn’t match</md-td>
            <md-td>请求方法的类型与接口设置的不一致，检查接口设置的请求方法(POST/GET/…)与请求时使用的是否一致</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991400</md-td>
            <md-td>request trigger frequency limit</md-td>
            <md-td>请求过于频繁，请降低请求频次。建议使用指数退避算法或其它频控策略降低对 API 的调用速率。详情参考 [频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991401</md-td>
            <md-td>ip %s is denied by app setting</md-td>
            <md-td>IP 被应用白名单限制。你需要检查应用是否开启了 IP 白名单，如果开启，则仅白名单中的 IP 地址可以正常调用 API。详情参见[设置 IP 白名单](/ssl:ttdoc/ukTMukTMukTM/ucTMxYjL3ETM24yNxEjN)。

你可以通过以下方式获取你的服务器出口 IP，并将这些 IP 地址设置在应用的 IP 白名单内，即可正常调用 API。

- 咨询企业内 IT 部门的运维人员或云服务提供商。

- 登录你的服务器，在命令行里执行以下命令获取：`curl ifconfig.me` 或 `curl cip.cc` 或 `curl myip.ipip.net` 或 `curl ipinfo.io`。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991403</md-td>
            <md-td>This month's API call quota has been exceeded</md-td>
            <md-td>本月 API 调用次数已达上限，请联系企业管理员升级飞书版本。详情参见[自建应用 API 调用量上限调整说明](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/platform-updates-/custom-app-api-call-limit)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991501</md-td>
            <md-td>auth login invalid code</md-td>
            <md-td>无登录code，请重新登录，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991503</md-td>
            <md-td>invalid next parameter: invalid host</md-td>
            <md-td>callback url中next参数有问题，next和callback的host不相同</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991543</md-td>
            <md-td>login_user invalid</md-td>
            <md-td>app_id或app_secret不存在，请检查参数</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991611</md-td>
            <md-td>get session fail</md-td>
            <md-td>小程序请求获取session失败，请检查请求是否带了相应的cookie(lobsession)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991612</md-td>
            <md-td>session invalid</md-td>
            <md-td>小程序请求鉴权失败，请求的session无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991621</md-td>
            <md-td>get session fail</md-td>
            <md-td>开放平台sso请求获取session失败，请检查请求是否带了相应的cookie(lobsession)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991622</md-td>
            <md-td>session invalid</md-td>
            <md-td>开放平台sso请求鉴权失败，请求的session无效</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991631</md-td>
            <md-td>get session fail</md-td>
            <md-td>lark sso请求获取session失败，请检查请求是否带了相应的cookie(lobsession)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991632</md-td>
            <md-td>session invalid</md-td>
            <md-td>lark sso请求 session 校验失败</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991641</md-td>
            <md-td>auth open invalid session</md-td>
            <md-td>当前登录态session无效，请重新登录后使用</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991642</md-td>
            <md-td>auth open invalid session mina</md-td>
            <md-td>当前登录态session已过期，请重新登录后使用</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991643</md-td>
            <md-td>auth open invalid session sso</md-td>
            <md-td>open id或refresh token无效，请重新登录，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>99991644</md-td>
            <md-td>auth open invalid config</md-td>
            <md-td>内部错误，详情请[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D) </md-td>
        </md-tr>
        <md-tr>
            <md-td>99991645</md-td>
            <md-td>auth open invalid user</md-td>
            <md-td>当前登录态user无效，请重新登录，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991661</md-td>
            <md-td>Need a token</md-td>
            <md-td>请求需要使用 token 认证。请检查请求 Header 参数 Authorization 中是否填了正确的 token。填写格式为 Bearer access_token，详情参考 [API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991662</md-td>
            <md-td>app not in use</md-td>
            <md-td>检查该应用是否处于停用状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991663</md-td>
            <md-td>Invalid access token for authorization. Please make a request with token attached</md-td>
            <md-td>请求所使用的访问凭证无效。原因可能是 tenant_access_token 已过期，或当前接口不支持使用 tenant_access_token 进行身份鉴权。请参考以下排查建议进行解决。

查看当前调用的 API 是否支持 tenant_access_token：

- 如果 API 不支持 tenant_access_token，请使用 user_access_token 调用 API。

- 如果 API 支持 tenant_access_token，则表示 tenant_access_token 已过期，你需参考以下步骤重新获取：

    - 使用 API 调试台时：

        - 进入[API 调试台](https://open.feishu.cn/api-explorer?from=op_doc_tab)，找到需要调用的 API，在 **请求头** > **Authorization** 输入框右侧重新获取 Token。

           ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9bcc24b0c7bbcc2574280ec9f72ecf73_pekb0lH2Oz.png?height=278&maxWidth=550&width=1383)

        - API 文档有内嵌调试台，需要点击 **Authorization** 输入框旁的 **刷新 token**（如果接口支持 tenant_access_token 和 user_access_token，注意需要切换为 tenant_access_token 再刷新）。刷新完成后，即可直接调用接口，API 调试台将会把请求中的 Token 替换为最新获取的 Token。

           ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8d1ee9745a086047c4ae5cb51b7de452_SpcrNZOBMf.png?height=278&maxWidth=550&width=1383)

    - 编写代码调用 API 时：

        你可以参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#1f8b587c)提供的方法，再次获取 tenant_access_token，并使用最新的 tenant_access_token 请求 OpenAPI。该接口需要使用 tenant_access_token 调用，请确认使用正确 token 类型。
    
**说明**：飞书开放平台服务端 SDK 提供了完整的访问凭证（access token）生命周期管理能力，无需开发者自己获取并刷新访问凭证。参考[服务端 SDK](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991664</md-td>
            <md-td>invalid app token</md-td>
            <md-td>app_access_token 非法，详情可参考[API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991665</md-td>
            <md-td>invalid tenant code</md-td>
            <md-td>tenant_access_token 非法，详情可参考[API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991668</md-td>
            <md-td>Invalid access token for authorization. Please make a request with token attached.</md-td>
            <md-td>user_access_token 异常，你需要根据实际返回的报错信息确认问题原因：

- 如果返回的 msg 为 token 无效（Invalid access token for authorization），则表示当前使用的 user_access_token 已经失效了，你需要根据实际情况选择[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token) 或者 [刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。

- 如果返回的 msg 为不支持 user_access_token（user access token not support），则表示当前接口不支持使用 user_access_token 进行身份鉴权，你需要参考具体接口的文档使用正确的 token。例如部分接口仅支持通过应用身份（tenant_aceess_token）调用。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991669</md-td>
            <md-td>invalid user refresh token</md-td>
            <md-td>用户 refresh token 非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991670</md-td>
            <md-td>invalid sso token</md-td>
            <md-td>SSO Access Token非法</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991671</md-td>
            <md-td>Invalid token: must start with t-/u-</md-td>
            <md-td>当前请求使用的token格式错误，请检查后重试。详情可参考[API访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991672</md-td>
            <md-td>Access denied. One of the following scopes is required</md-td>
            <md-td>当前请求所属的应用未申请 API 权限。你可以通过返回结果确认缺失的权限，也可以参考相应的 API 文档排查缺失的权限，然后为应用申请所需权限。具体操作参见[如何为应用申请所需权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991673</md-td>
            <md-td>unauthorized app</md-td>
            <md-td>app状态不可用, 请检查当前租户应用安装状态</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991674</md-td>
            <md-td>user type not support</md-td>
            <md-td>当前请求使用的user type无效，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991675</md-td>
            <md-td>parse user error</md-td>
            <md-td>当前请求使用的user_id格式错误，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991676</md-td>
            <md-td>token no permission</md-td>
            <md-td>token没有对应的权限，请检查token的权限</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991677</md-td>
            <md-td>token expire</md-td>
            <md-td>当前 user token 已过期，请更新 token。详情可参考 [刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991679</md-td>
            <md-td>Unauthorized. You do not have permission to perform the requested operation on the resource. Please request user re-authorization and try again.</md-td>
            <md-td>未经用户授权，请根据错误信息中提示的缺失权限，申请用户授予对应权限后重试。参考[如何解决 99991679 错误](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-resolve-error-99991679)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991681</md-td>
            <md-td>auth fail</md-td>
            <md-td>第三方鉴权返回错误, 请参考message进行排查</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991691</md-td>
            <md-td>get session fail</md-td>
            <md-td>获取 session 失败，请求未带cookie</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991692</md-td>
            <md-td>auth fail</md-td>
            <md-td>鉴权失败, 请参考message进行排查</md-td>
        </md-tr>
        <md-tr>
            <md-td>99991693</md-td>
            <md-td>session not exist</md-td>
            <md-td>鉴权失败，当前session不存在</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992351</md-td>
            <md-td>these open ids not existed: %v</md-td>
            <md-td>open_id 无效，请参考报错信息中的提示修改参数后重试。open_id 格式为 `ou_` 开头的字符串，获取方式如下：

- **方式一**：通过 [API 调试台](https://open.feishu.cn/api-explorer) 一键获取用户 open_id
    
    1. 在当前接口的 user_id_type、member_id_type 这类查询参数中，设置为 **open_id**，并快速复制 open_id。

        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68c180e6c7238a1bda3b716dceb6a59e_KJDslSYYay.png?height=278&maxWidth=550&width=1383)
        
    2. 在组织架构中选择指定用户，并点击 **复制成员 ID**，获取用户的 open_id。
    
    	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/952f44046aa51a5aef3a940688e4508c_eT8zxl6oEX.png?height=278&maxWidth=550&width=1383)

- **方式二**：调用[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)接口获取

    1. 应用需要申请 [通过手机号或邮箱获取用户 ID 权限（`contact:user.id:readonly`）](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error) 权限。
    
    2. 查询参数 user_id_type 设置为 open_id。

    3. 传入用户的手机号码或者邮箱地址。

    4. 发送请求，在返回结果中获取用户的 open_id。
    
    	**注意**：该接口返回参数 user_id 的值与查询参数 user_id_type 的取值相匹配。例如，user_id_type 取值为 open_id，则返回参数 user_id 实际值是用户的 open_id。

相关文档参见[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992352</md-td>
            <md-td>these lark ids not existed: %v</md-td>
            <md-td>部分open_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992353</md-td>
            <md-td>these lark ids not existed: %v</md-td>
            <md-td>部分open_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992354</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>message_id 不存在，请参考报错信息中的提示修改并重试。 示例值：om_934be5776f5a87239a298af9e74c0f72，参考 [如何获取 message_id](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro#44c58e1c)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992355</md-td>
            <md-td>these lark ids not existed: %v</md-td>
            <md-td>当前chat_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992356</md-td>
            <md-td>these open_chat ids not existed: %v</md-td>
            <md-td>当前chat_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992357</md-td>
            <md-td>these open_department ids not existed: %v</md-td>
            <md-td>当前open_department_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992358</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前open_department_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992359</md-td>
            <md-td>these user ids not existed: %v</md-td>
            <md-td>当前user_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992360</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>user_id 不存在，请参考报错信息中的提示修改并重试。示例值：4c87bec3， 参考 [如何获取 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992361</md-td>
            <md-td>open_id cross app</md-td>
            <md-td>传入的 open_id 不属于当前应用，请检查后重试。参考 [如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。

- 同一用户在不同应用下的  open_id 不同，请勿将 A 应用中获取的 open_id 在 B 应用中使用。
- 测试应用和正式应用是两个不同的应用，同一用户的 open_id 也不相同。请勿将测试应用中获取的 open_id 在正式应用中使用。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b5ae651ed34a99ae2c48e02659c7841_fuc7tlnnPp.png?height=278&maxWidth=550&width=1383)</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992363</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前union_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992364</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前union_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992364</md-td>
            <md-td>user id cross tenant</md-td>
            <md-td>不能使用其他租户下的user_id，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992370</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前open_app_version_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992375</md-td>
            <md-td>these open_room ids not existed: %v</md-td>
            <md-td>当前open_room_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992376</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前open_room_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992378</md-td>
            <md-td>these open_room ids not existed: %v</md-td>
            <md-td>当前open_app_version_id不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992379</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>内部部门 ID 不存在。请确保你所使用的内部部门 ID 正确。如仍有问题请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992380</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>部门 ID 不存在，请检查你传入的部门 ID 是否正确。了解部门 ID 参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992381</md-td>
            <md-td>union_id cross tenant</md-td>
            <md-td>union_id 不属于当前租户。使用union_id时，需要注意union_id是否属于当前租户。请检查并重试。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992402</md-td>
            <md-td>具体错误信息</md-td>
            <md-td>请求参数缺失或者有误，更多错误信息请参考请求返回的error message</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992500</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前tenant_key不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99992501</md-td>
            <md-td>these ids not existed: %v</md-td>
            <md-td>当前tenant_key不存在，请检查后重试</md-td>
        </md-tr>
        <md-tr>
            <md-td>99993201</md-td>
            <md-td>method don't support batch</md-td>
            <md-td>请确认批量API文档是否包含该API。</md-td>
        </md-tr>
        <md-tr>
            <md-td>99993202</md-td>
            <md-td>the id of subrequest can't be empty</md-td>
            <md-td>请参考文档的示例，补充子请求的id</md-td>
        </md-tr>
        <md-tr>
            <md-td>99993203</md-td>
            <md-td>the id of subrequest is duplicated</md-td>
            <md-td>请确认子请求的id是否重复</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::