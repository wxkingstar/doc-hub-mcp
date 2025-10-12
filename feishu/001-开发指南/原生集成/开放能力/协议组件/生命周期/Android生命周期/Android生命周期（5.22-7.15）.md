---
title: "Android生命周期（5.22-7.15）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/life-cycle/android/android-life-cycle
last_remote_update: 2024-10-18
last_remote_update_timestamp: 1729233561000
---
最后更新于 2024-10-18

#  Android生命周期（5.22-7.15）

组件类型 | 最低飞书版本 | 生效基线       |
| ---- | ------ | ---------- |
| 协议组件 | 5.22   | 2.0.2及以上基线 |

## 组件说明

飞书应用的生命周期相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以注册相应的回调函数，以便在这些事件发生时执行特定的业务逻辑。

## 流程概述
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a98cfaed16c4ffc94233fa23c6d80e25_3jbJxsThjR.png?height=731&lazyload=true&maxWidth=600&width=763)

## API 列表

### ILifecycleApi 协议

#### void onStart(Context context)

##### 接口说明

| 兼容飞书版本 | 说明      | 生效版本          |
| ------ | ------- | ------------- |
| 5.22   | 飞书启动时调用 | 1.0.9-release |

##### 参数说明

| 名称      | 类型      | 描述               |
| ------- | ------- | ---------------- |
| context | Context | Android原生Context |

#### void onResume(Context context)

##### 接口说明

| 兼容飞书版本 | 说明        | 生效版本          |
| ------ | --------- | ------------- |
| 5.22   | 飞书切到前台时调用 | 1.0.9-release |

##### 参数说明

| 名称      | 类型      | 描述               |
| ------- | ------- | ---------------- |
| context | Context | Android原生Context |

#### void onPause(Context context)

##### 接口说明

| 兼容飞书版本 | 说明        | 生效版本          |
| ------ | --------- | ------------- |
| 5.22   | 飞书切到后台时调用 | 1.0.9-release |

##### 参数说明

| 名称      | 类型      | 描述               |
| ------- | ------- | ---------------- |
| context | Context | Android原生Context |

#### void onAppStateChanged(Context context, AppState oldAppState, AppState newAppState)

##### 接口说明

| 兼容飞书版本 | 说明           | 生效版本          |
| ------ | ------------ | ------------- |
| 7.1    | 飞书前后台状态变化时调用 | 1.1.0-release |

##### 参数说明

| 名称          | 类型       | 描述               |
| ----------- | -------- | ---------------- |
| context     | Context  | Android原生Context |
| oldAppState | AppState | 状态封装             |
| newAppState | AppState | 状态封装             |

##### 数据结构

```javascript 
public class AppState {
    private boolean isFront;
    public boolean isFront() {
        return isFront;
    }
}
```

#### void onLoginSuccess(Context context, boolean isFastLogin)

##### 接口说明

| 兼容飞书版本 | 说明          | 生效版本          |
| ------ | ----------- | ------------- |
| 5.22   | 飞书账号登录成功时调用 | 1.0.9-release |

##### 参数说明

| 名称          | 类型      | 描述               |
| ----------- | ------- | ---------------- |
| context     | Context | Android原生Context |
| isFastLogin | boolean | 冷启动免密登录飞书该值为true |

#### void onLoginFail(Context context, boolean isFastLogin)

##### 接口说明

| 兼容飞书版本 | 说明          | 生效版本          |
| ------ | ----------- | ------------- |
| 5.22   | 飞书账号登录失败时调用 | 1.0.9-release |

##### 参数说明

| 名称          | 类型      | 描述               |
| ----------- | ------- | ---------------- |
| context     | Context | Android原生Context |
| isFastLogin | Boolean | 冷启动免密登录飞书该值为true |

#### void onLogout(Context context)

##### 接口说明

| 兼容飞书版本 | 说明        | 生效版本          |
| ------ | --------- | ------------- |
| 5.22   | 飞书账号登出时调用 | 1.0.9-release |

##### 参数说明

| 名称      | 类型      | 描述               |
| ------- | ------- | ---------------- |
| context | Context | Android原生Context |

## 接入说明

通过原生集成工具，选择 2.0.2 及以上基线，并启用 **core-component-api** 组件

## 更新日志

| 版本号           | Release Note                 |
| ------------- | ---------------------------- |
| 1.0.9-release | 新功能：能力开放|
| 1.1.0-release | 新功能：增加onAppStateChanged方法
