---
title: "Errno错误码"
source_url: https://open.feishu.cn/document/client-docs/block/api/introduce-of-errno
---
最后更新于 2022-08-17

# Errno 错误码

### Errno错误码是什么

在使用API/组件的过程中，当需要抛出异常时，我们会通过API的fail回调返回的res对象内增加errno错误码信息。

### Errno错误码示例

```js
    tt.API({
      success (res) {
        console.log('API 调用成功');
      },
      fail (res) {
        console.log(res.errno);
      }
    });
```

### Errno错误码背景
我们希望errno错误码可以在解决历史问题的同时，更可以面向未来的帮助到开发者更好的调试和处理线上发生的不同的错误场景。
#### 历史问题
* 目前我们的存量API中，当返回err信息时，有些API只返回了errMsg字段，有些虽然同时返回了errCode字段，但是在格式上无法保证统一规范
* 存量的errCode存在返回的粒度不足，errMsg表达的信息过于抽象等问题
* 同时，即便是相同的API，也存在不同的客户端返回的errCode表意不同，粒度不同的情况，如相同类型的错误，会出现Android返回了某种errCode，而iOS未返回errCode的情况。

由此，我们设计了全新的错误码规范:errno来帮助开发者。
errno错误码有以下新特性：
* errno在错误码格式上做了统一的设计规范
* errno在不同客户端环境中，返回的err信息在粒度和表意上都保持一致
* errno在不同API中表达通用err信息时，使用一致的错误码
* errno的格式符合一定规则，熟练的开发者可以基于errno的组成规则快速定位问题发生在哪个API内

### Errno错误码设计规范
#### Common errno
Common errno错误码一般为三位，用来标识所有API中可能返回的『通用』err信息, 如
* 100: Unknown error, 未知错误，一般为API内部出现了非预期的错误，如常驻环境变量不可用等
* 101: Unknown exception, API框架内未知异常，如API内某内部变量空指针异常
#### Biz errno
Biz errno错误码一般为七位，其中
* 1-2位用于标识{开发文档 - 客户端文档}内API的一级类目
* 3-4位用于标识{开发文档 - 客户端文档}内API的二级类目
* 5-7位用于标识{开发文档 - 客户端文档}内每个API每个具体的错误类型

参考现有的API目录，以整个『开发接口』目录为例
* 开放接口（一级类目：10）
	* 登录 （二级类目: 01）
		* login (具体错误类型 020)
	* 用户信息（二级类目：02）

那么我们可以做这样的理解，当调用tt.login这个API时，异常场景中，该API会返回1001020这样的biz errno。

### Errno错误码字典
我们提供了errno错误码字典供开发者查询，因为存量API数量很多，该字典会逐步&持续更新
**注意事项**：所有Errno错误码计划从飞书V5.15版本正式支持。
| **errno** | **errString** | **含义**                 |**归属**|
| ------ | ------ | ---------------------- | ---------- |----------|
| 0 | ok | 调用成功时返回 |通用
| 100 | unknown error | 未知错误，API 内部非预期的错误 | 通用
| 101 | unknwon exception | 框架未知错误 |通用
| 102 | internal error | 内部错误 |通用
| 103 | feature not support | API 不可用 |通用
| 104 | invalid parameter | 参数错误 |通用
| 105 | authentication fail | 鉴权失败 |通用
| 106 | system permission denied | 系统拒绝授权 |通用
| 107 | user permission denied | 用户拒绝授权 |通用
| 108 | organization permission denied | 无组织权限 |通用
| 1000001   | server error | 服务端返回错误 |login
| 1000002   | update session failed | 保存session失败 |login
| 1001001   | invalid session, please login  | session无效，需要先调用tt.login登陆 |getUserInfo
| 1001002   | get user info failed  | 获取用户信息失败 |getUserInfo
| 1100001   | invalid title and content  | title和content不能同时为空  |showModal
| 1406001   | invoke openSchema too fast  | 两次调用tt.openSchema间隔小于500ms  |openSchema
| 1406002   | empty schema param  | schema为空  |openSchema
| 1406003   | not in the white list  | schema不在白名单内  |openSchema
| 1406004   | schema invalid  | 非法schema  |openSchema
| 1504001   | NFC is not avaliable | 当前设备不支持NFC  |NFC
| 1504003   | system NFC switch not opened | 当前设备未开启NFC  |NFC
| 1504204   | Tech already connected | 当前设备NFC已连接  |NFC
| 1504205   | Tech has not connected | 当前设备NFC未连接  |NFC
| 1504206   | NFC tag has not been discoveryed | 系统未发现NFC标签  |NFC
| 1504208   | unavailable tech | 当前NFC标签不支持该tech  |NFC
| 1504209   | function not support | 当前设备不支持该NFC能力  |NFC
| 1504211   | data is null  | 基础数据传输参数错误  |NFC
| 1504212   | array buffer is empty | array buffer数据传输参数错误  |NFC
| 1504213   | base64 value is empty | base64数据传输参数错误  |NFC
| 1504214   | base64 decode failed | base64数据解码失败  |NFC
| 1504215   | transceive data failed | 数据传输协议报错，导致result为空  |NFC
| 1504216   | nfc type is empty | NFC标签为空  |NFC
| 1504217   | nfc service dead | NFC服务已断开  |NFC
| 1801001   | exceed storage item max size  | 单个 key 存储的最大数据长度大于 1MB |setStorage
| 1801002   | total storage size exceed  | 所有数据存储长度大于 10MB |setStorage
| 1802001   | key not found  | 值为空 |getStorage
| 1804001   | clear storage fail  | 清除storage失败  |clearStorage
| 2400001   | not use loading  | 未配置useStartLoading  |Block API

### Errno错误码最佳实践
我们以tt.login API为例
```js
    tt.login({
      success (res) {
        console.log('API 调用成功');
      },
      fail (res) {
        if (res.errno === 1001020) {
          console.log('errno : ' + res.errno + " des : " + res.errString);
        } else if (res.errCode === 20101) {
          // 该API可能存在存量的errCode，依然可以使用
        }
      }
    });
```
最佳实践规则
* 当fail回调中同时存在errno和errCode时，我们强烈建议优先以errno错误码为准
* errString字段是errno的辅助信息，一般情况下可以帮助开发者在开发环境中更直接的理解当前的error类型，但不要把errString内的string信息作为逻辑判断的依赖
* 若一个API存在存量的errCode，我们会保持现状，不删除，不修改，如果开发者的存量代码依赖了这些errCode, 可以继续保留这些代码作为对旧版本飞书的兼容性逻辑
