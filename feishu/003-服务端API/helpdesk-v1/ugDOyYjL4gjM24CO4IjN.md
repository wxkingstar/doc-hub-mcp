<!--
title: 服务台接入指南
id: 6907569742387609602
fullPath: /ukTMukTMukTM/ugDOyYjL4gjM24CO4IjN
updatedAt: 1732695601000
source: https://open.feishu.cn/document/server-docs/helpdesk-v1/access-guide
-->
# 接入指南
- [服务台 token](#服务台token)
- [限流策略](#限流策略)
- [如何使用服务台 API](#如何使用服务台API)
- [代码示例](#代码示例)
## 服务台 token
请求中代入服务台token，表示拥有和服务台负责人相同的权限（查看修改服务台实体）。

使用方法,设置在请求Header中：
* Header Key: X-Lark-Helpdesk-Authorization	
* Header Value: base64(helpdesk_id:helpdesk_token), 通过base64加密将helpdesk_id和helpdesk_token用':'连接而成的字符串。

Golang Exapmle:
```go 
package main

import (
	b64 "encoding/base64"
	"fmt"
)

func main() {
	helpdeskAuthInfo := "12345:ht-sometoken"

	helpdeskAuthToken := b64.StdEncoding.EncodeToString([]byte(helpdeskAuthInfo))
	fmt.Println(helpdeskAuthToken)
}

``` 

请负责人妥善保管服务台 id 和 token 不要泄露，有风险时及时重置。

**获取方式** ：
[服务台管理后台](https://feishu.cn/helpdesk/admin) **设置中心** > **API 凭证**

**重置token** ：
重置 token 会生成新的 token，旧的 token 自动失效

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dcc3b0ac14729354c2bc4b44af26c4f9_psgdwp8GJs.png?height=693&lazyload=true&width=1916)

## 限流策略
默认使用开放平台默认限流，单个API如有不同，会在对应API文档中说明。

## 如何使用服务台API
### 1、申请企业服务台 API 授权
若应用尚未申请服务台API权限，需在开发者后台增加权限申请并提交审核。企业自建应用需要企业管理员在管理后台审核通过；暂不支持应用商店应用。

### 2、API鉴权
服务台API作为开放平台对外能力一部分，会检查tenant_access_token/user_access_token得到对应信息。
同时使用服务台token鉴权，方便服务台负责人管理，控制应用对单个服务台资源的访问，修改权限。

### 3、调用服务台API
调用相关服务台API 对服务台资源创建，修改，删除，获取。 请参考具体的API文档

## 代码示例
以查询工单详情为例，仅供参考。
下面分别给出Python与Golang的实现
### 1、Python示例

```javascript 
import requests
import time

def get(url: str, **kwargs):
    r = requests.get(
        url,
        cookies=kwargs.get("cookies", {}),
        params=kwargs.get("params", {}),
        headers=dict(kwargs.get("headers", {}), **{"Connection": "close"}),
        json=kwargs.get("json", {}),
    )
    return r


def post(url: str, **kwargs):
    r = requests.post(
        url,
        cookies=kwargs.get("cookies", {}),
        params=kwargs.get("params", {}),
        headers=dict(kwargs.get("headers", {}), **{"Connection": "close"}),
        json=kwargs.get("json", {}),
    )
    return r


def get_tenant_header():
    url = "https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal/"
    # 开放平台机器人应用凭证，用于开通访问服务台权限
    body = {
        "app_id": "应用ID",
        "app_secret": "应用密钥"
    }
    # 把 服务台ID:服务台Token 转换为base64，填写到 X-Lark-Helpdesk-Authorization，用于指定访问哪个服务台
    # 在线base64编码  https://base64.us  https://tool.oschina.net/encrypt?type=3
    return {
        "Authorization": "Bearer %s"
                         % post(url, json=body).json()["tenant_access_token"],
        "X-Lark-Helpdesk-Authorization": "Njk4OTgwNTM1ODU1ODQ3ODM1NTpodC1lYjk1Y2ZlYi03ZGM1LTY1ZGUtMTUzOS1iMzZmOTk3MmM3ZjA=",
    }


tenant_header = get_tenant_header()


def get_ticket(id):
    url = "https://open.feishu.cn/open-apis/helpdesk/v1/tickets/%s" % id
    res = get(url, headers=tenant_header)
    try:
        info = res.json()["data"]["ticket"]
        return info
    except:
        print(id, res)
        return get_ticket(id)


info = get_ticket("工单ID")
print(info)
 
``` 
### 2、Golang示例

```javascript 
import (
	"bytes"
	b64 "encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"testing"
)

//开放平台机器人应用凭证，用于开通访问服务台权限
var appInfo = `
{
    "app_id":"应用ID",
    "app_secret":"应用密钥"
}
`

func httpRequest(req *http.Request) []byte {
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	return body
}

func postJson(url string, myjson string) []byte {
	req, err := http.NewRequest("POST", url, bytes.NewBuffer([]byte(myjson)))
	if err != nil {
		panic(err)
	}
	return httpRequest(req)
}

type tokenInfo struct {
	App_access_token    string `json:"app_access_token"`
	Tenant_access_token string `json:"tenant_access_token"`
}

//获取开放平台tenant token
func getTenantToken() string {
	url := "https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal/"
	body := postJson(url, appInfo)
	tokenInfo := tokenInfo{}
	json.Unmarshal(body, &tokenInfo)
	fmt.Println(tokenInfo)
	return tokenInfo.Tenant_access_token
}

func TestOpenApi(t *testing.T) {
	//服务台id跟token，用于指定访问哪个服务台
	helpdeskAuthInfo := "服务台ID:服务台Token"
	//服务台token base64编码
	helpdeskAuthToken := b64.StdEncoding.EncodeToString([]byte(helpdeskAuthInfo))
	url := "https://open.feishu.cn/open-apis/helpdesk/v1/tickets/工单ID"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("X-Lark-Helpdesk-Authorization", helpdeskAuthToken)
	tenantToken := getTenantToken()
	//open api的token，请去开放平台申请好访问服务台资源权限
	req.Header.Set("Authorization", "Bearer "+tenantToken)
	body := httpRequest(req)
	fmt.Println(string(body))
}
 
``` 



