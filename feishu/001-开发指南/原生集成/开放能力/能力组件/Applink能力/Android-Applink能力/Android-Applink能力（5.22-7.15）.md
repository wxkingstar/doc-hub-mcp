---
title: "Android Applink能力（5.22-7.15）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/applink-capability/android/android-appli
last_remote_update: 2024-10-18
last_remote_update_timestamp: 1729233561000
---
最后更新于 2024-10-18

# Android Applink能力（5.22-7.15）
组件类型 | 最低飞书版本 | 生效基线       |
| ---- | ------ | ---------- |
| 能力组件 | 5.22   | 2.0.2及以上版本 |

## 组件说明

通过该API能力，可以调用飞书的页面跳转、路由能力。

## API 列表

### IAppLinkApi 协议

#### boolean openAppLink(Context context, String appLinkUrl)

##### 接口说明

| 兼容飞书版本 | 说明             | 生效版本  |
| ------ | -------------- | ----- |
| 5.22   | 调用飞书的页面跳转、路由能力 | 1.0.9 |

##### 参数说明

| 名称         | 类型      | 描述                |
| ---------- | ------- | ----------------- |
| context    | Context | Android原生Context  |
| appLinkUrl | string  | 需要跳转的页面applink 地址 |

##### 返回值说明

跳转成功或者失败

## 接入说明

通过原生集成工具，选择 2.02 以上基线，启用**core-component-api**组件

## 更新日志

| 版本号   | Release Note                |
| ----- | --------------------------- |
| 1.0.9 | 新功能：能力开放
