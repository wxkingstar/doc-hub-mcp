---
title: "enterProfile"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/userinfo/enterprofile
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430354000
---
最后更新于 2025-01-21

# enterProfile(Object object)

enterProfile(Object object) 用于进入个人信息主页。

## 注意事项

- 小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )。
- 网页应用需要在[鉴权](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)后调用该接口。
- 飞书在 [V3.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 版本开始支持该接口的回调。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | 4.0.0 | 4.0.0 | 4.0.0 | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性说明如下。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
openid | string | 是 | \- | 用户的 open_id。关于获取用户 ID 的操作说明，可参见 [如何获取不同的用户 ID](https://open.feishu.cn/document/home/user-identity-introduction/open-id)。
left | number | 否 | 0 | 用户卡片原点（左上角）横坐标。单位：px  
**Notice**：**注意**：Android、iOS 端暂不支持该字段。
top | number | 否 | 0 | 用户卡片原点（左上角）纵坐标。单位：px  
**Notice**：**注意**：Android、iOS 端暂不支持该字段。

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

```js
tt.chooseContact({
  success: (res) => {
    tt.enterProfile({
      openid: res.data[0].openId,
      left: 100,
      top: 200,
      success(res) {
        console.log(JSON.stringify(res));
      },
      fail(res) {
        console.log(`enterProfile fail: ${JSON.stringify(res)}`);
      }
    })
  }
})
```

`success`返回对象示例：
```json
{
    "errMsg": "enterProfile:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
