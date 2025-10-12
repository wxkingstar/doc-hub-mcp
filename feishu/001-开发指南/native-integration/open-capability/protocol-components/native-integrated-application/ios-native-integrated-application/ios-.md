<!--
title: iOS原生集成应用_Swift(7.32-7.35)
id: 7275234252571852804
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-
updatedAt: 1745895112000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/native-integrated-application/ios-native-integrated-application/ios-
-->
# iOS原生集成应用_Swift（7.32-7.35）
组件类型 | 最低飞书版本 | 生效基线     |
| ---- | ------ | -------- |
| 协议组件 | 7.32  | 7.32.0及以上 |

## 组件说明

`LKNativeAppExtensionExternal`组件通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现原生集成应用与飞书的无缝集成，提供更丰富的功能和更便捷的用户体验。这样可以增强应用的可用性，提升用户的工作效率和体验质量。

## 流程概述
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86c3bca8a0e89fd90e282e1a91d1878b_mQ6RT5LJwz.png?height=859&lazyload=true&maxWidth=600&width=795)
## API 列表

### protocol KANativeAppExtensionProtocol

#### func appId() -> String

##### 接口说明

| 兼容飞书版本  | 说明       | 生效版本  |
| ------- | -------- | ----- |
| 7.32及以上 | 返回 appId | 1.0.0 |

##### 返回值说明

开放平台注册应用时，所获取到的 AppId，通过该接口返回给飞书侧

#### func pageRoute(link: NSURL, from: UIViewController)

##### 接口说明

| 兼容飞书版本  | 说明                      | 生效版本  |
| ------- | ----------------------- | ----- |
| 7.32及以上 | 打开本地应用时调用，开发者在该接口打开自有页面 | 1.0.0 |

##### 参数说明

| 名称   | 类型               | 描述                    |
| ---- | ---------------- | --------------------- |
| link | NSURL            | 跳转时原生集成应用的 applink 地址 |
| from | UIViewController | 跳转的 viewController    |

#### func destroy()

##### 接口说明

| 兼容飞书版本 | 说明                 | 生效版本     |
| ------ | ------------------ | -------- |
| -     | 飞书销毁原生集成应用的时候调用，可选 | 预留接口，未生效 |

### OpenNativeAppProtocol

#### func setupVC(url: String) -> UIViewController

##### 接口说明

| 兼容飞书版本 | 说明                      | 生效版本  |
| ------ | ----------------------- | ----- |
| 7.32及以上  | 打开本地应用时调用，开发者在该接口打开自有页面 | 1.0.0 |

##### 参数说明

| 名称  | 类型     | 描述                    |
| --- | ------ | --------------------- |
| url | String | 跳转时原生集成应用的 applink 地址 |

##### 返回值说明

返回要跳转的自有页面 UIViewController

## 接入说明
通过原生集成工具，选择 2.0.0 及以上基线，启用 LKNativeAppExtensionExternal 组件，实现 KANativeAppExtensionProtocol 协议，并调用 KAAPI 接口注册协议的实现类。该组件需要配合在开放平台注册原生集成应用。详见[原生集成应用身份申请指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/nati)


## 常见问题

### Q：按照配置后sso登录没有正常跳转页面的原因

A：建议在调试过程中添加飞书提供的原生集成日志能力，如果日志中没有输出，则没有走到pageRoute的原因可能有以下几个：
1. 登录前路由拦截，原生集成的路由配置url有加白机制，需要配置为"//[applink.feishu.cn/client/native_extension/open](http://applink.feishu.cn/client/native_extension/open)"的形式，否则会被路由拦截。
1. 离线模式下当前组件编译存在问题，或者桥接层KAContainer编译失败，请联系飞书侧查看本地构建日志进行排查

## 更新日志

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">版本号</md-th>
      <md-th style="width: 80%;">Release Note</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1.0.0</md-td>
      <md-td>新功能：提供原生集成应用能力。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1.0.1</md-td>
      <md-td>修复：补充示例代码和集成api接口说明，新增常见问题。</md-td>
    </md-tr>
    <md-tr>
      <md-td>1.1.3</md-td>
      <md-td>改进：
- 合并集成应用相关组件为 LKNativeAppExtensionExternal
- 更新为 KAAPI 注册方式
- 协议名更新为 KANativeAppExtensionProtocol</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
