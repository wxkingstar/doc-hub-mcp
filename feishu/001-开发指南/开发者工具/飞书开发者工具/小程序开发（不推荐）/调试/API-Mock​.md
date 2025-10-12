---
title: "API Mock​"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-gadget-in-tools/gadget-debugging/feishu-developer-tools-api-mock
---
最后更新于 2022-02-27

# 飞书开发者工具-API Mock

为了让开发者更方便地开发小程序，开发者工具提供了 API Mock 的能力，可以模拟部分 API 的调用结果。

首先你需要在左侧面板上方勾选“启用 Mock”打开 Mock 功能，可以点击加号新增一条规则，点击减号删除一条规则，双击规则的名字可以编辑规则名称。

在右侧面板，你可以设置当前规则的 Mock 信息，支持以下 API 以及大部分输入继承自[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)的异步 API：

```javascript
tt.request
tt.downLoadFile
```

当 Mock 功能启用时，在模拟器中调用的 API 时会按照以下方式从上往下命中第一条规则：

1.  规则启用
2.  API 接口名匹配
3.  该规则下设置的所有的参数都能通过正则表达式
4.  不填写规则会默认匹配

命中后，该 API 按照命中规则的模拟返回输出，否则不进入 Mock 的逻辑。

![](https:////sf3-cn.feishucdn.com/obj/open-platform-opendoc/489eba9af1113ab864f71c05e7b68c66_882FJR4v9Q.png)
