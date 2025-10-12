<!--
title: 打开云文档
id: 6986995291975680004
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-docs
updatedAt: 1697014363000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-docs
-->
# 打开云文档
::: note 
从飞书 3.22.0 版本开始支持。
:::

## 使用场景
打开云文档（docs）。使用外部浏览器打开文档时，提供入口从飞书中打开。

## 协议
::: note 
PC端不支持（PC端推荐直接使用文档链接）。
:::
`https://applink.feishu.cn/client/docs/open`

## 参数

| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|url | 是         | 要打开的云文档URL | 



## 使用示例
打开一个云文档

`https://applink.feishu.cn/client/docs/open?url=https%3A%2F%2Fexample.feishu.cn%2Fdocs%2Fdoccn9EOHrnB0r0iEN9HoCPczbf`

