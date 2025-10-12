---
title: "准备接入文档 API"
source_url: https://open.feishu.cn/document/server-docs/docs/docs/docs/getting-start
---
最后更新于 2022-06-15

# 准备接入文档 API
在使用文档 API 之前，了解相关的规则和限制可以帮助你更高效地接入文档 API。

## 确保你的应用具备文档权限
为了确保文档数据不被滥用，保证信息安全，我们通过 API Scope 对应用的权限进行了约束：
- 如要读取文档，应用需要具备查看文档的权限
- 如要编辑文档，应用需要具备查看以及编辑文档的权限

如果在请求接口时，应用不具备对应的权限，则会返回错误。详见：[应用权限](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。

## 了解接口规则
### QPS 限制
每个接口都有接口调用的频率限制。
- create 接口，单个应用、单用户调用限制为 60 次每分钟
- batch_update 接口，单个应用、单用户调用限制为 60 次每分钟
- content 接口，单个应用、单用户调用限制为 300 次每分钟  
- 其他接口，单个应用、单用户调用限制为60次每分钟  

接口之间的计数是独立统计的，举个例子，调用 create 接口，并不会占用 batch_update 和 content 接口的次数。

### 接口报错
当请求不符合某些特定条件时会报错，如果因为部分参数不符合要求而导致报错，意味着当次请求所有的内容提交都失败了，不会对线上的数据造成影响。

具体可参考：[服务端错误码说明](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)
