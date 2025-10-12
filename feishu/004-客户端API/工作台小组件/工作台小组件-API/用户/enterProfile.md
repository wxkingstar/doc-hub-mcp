---
title: "enterProfile"
source_url: https://open.feishu.cn/document/client-docs/block/api/user/enterprofile
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657872059000
---
最后更新于 2022-07-15

# enterProfile

显示用户信息卡片。
- 该 API 仅云文档 PC 环境支持。
- 调用前确保已经调用 tt.login 接口成功登录。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称** | **数据类型** | **是否必填** | **默认值** | **描述**                                                                          |
| ------ | ------ | ------- | ------ | ------------------------------------------------------------------------------- | ---------- | 
| openid | string | 是      | --      | 用户的 [OpenID](https://open.feishu.cn/document/ukTMukTMukTM/uUTO5UjL1kTO14SN5kTN)，有关 OpenID 解释可以参考[名词解释](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)| PC 端 1.0.3 |
| left   | number | 否       | 0      | 卡片显示位置，距离视口左侧距离                                                                 | PC 端 1.0.3 |
| top    | number | 否       | 0      | 卡片显示位置，距离视口顶部距离                                                                 | PC 端 1.0.3 |
| unCoverArea | object | 是 | --    | 禁止卡片遮盖的区域，通常指目标元素的区域，会结合left、top进行自适应计算 |
| &emsp;&emsp; ∟ width | number | 是 | --    | 禁止卡片遮盖区域的宽度 |
| &emsp;&emsp; ∟ height | number | 是 | --    | 禁止卡片遮盖区域的高度 |
## 输出

各 callback 返回对象参数均无额外扩展属性。

## 示例代码

### 调用示例

```js
tt.enterProfile({
  openid: 'ou_xxx',
  left: 50,
  top: 50,
  unCoverArea: {
    width: 100,
    height: 100
  },
  success (res) {
    console.log('enterProfile 调用成功', res.errMsg);
  },
  fail (res) {
    console.log('enterProfile 调用失败', res.errMsg);
  },
  complete (res) {
    console.log('enterProfile 调用结束', res.errMsg);
  } 
});
```

### 返回示例

```json
{
  "errMsg": "enterProfile:ok"
}
```
