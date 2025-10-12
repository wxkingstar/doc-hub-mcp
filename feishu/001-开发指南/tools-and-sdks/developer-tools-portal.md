<!--
title: 开发工具概述
id: 7477846090531373059
fullPath: /developer-tools-portal
updatedAt: 1741154592000
source: https://open.feishu.cn/document/tools-and-sdks/developer-tools-portal
-->
# 开发工具概述

飞书开放平台提供了从 **接口调试、开发集成** 到 **应用发布、运维** 的全链路工具支持，本文旨在帮助开发者快速理解各工具的核心功能及适用场景，根据需求选择最佳组合，提升开发效率与代码质量。

::: html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 16%;">开发场景</md-th>
      <md-th style="width: 84%;">开发工具</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview">飞书卡片</a></strong>
      </md-td>
      <md-td>
        <a href="https://open.feishu.cn/cardkit?from=open_docs_tool_overview">卡片搭建工具</a>：通过拖拉拽的方式，快速生成适配移动/PC 端的交互式卡片。例如：报警通知卡片、实时数据仪表盘卡片。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/server-docs/api-call-guide/calling-process/overview">服务端 API</a></strong>
      </md-td>
      <md-td>
        <ul>
          <li><a href="https://open.larkoffice.com/api-explorer/">API 调试台</a>：快速完成接口调用和验证，并能便捷复制所需的 SDK 示例代码。</li>
          <li><a href="https://open.feishu.cn/document/server-docs/server-side-sdk">服务端 SDK</a>：提供 Java、Python、Go、NodeJS 等主流语言 SDK，简化鉴权、API 调用流程。</li>
          <li><a href="https://open.larkoffice.com/search?from=doc&page=1&pageSize=10&q=202407211618216F3E9EB64DC7E1234&topicFilter=">报错排查工具</a>：根据 logid 或报错信息进行诊断分析，提供完整清晰的修复建议。</li>
          <li><a href="https://open.larkoffice.com/document/tools-and-resources/log-query-of-apps/open-api-log-query#20d694b6">服务端日志检索</a>：查询应用调用服务端 API 的日志，包含请求时长、返回错误信息等关键信息。</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/server-docs/event-subscription-guide/overview">事件</a></strong>
      </md-td>
      <md-td>
        <ul>
          <li><a href="https://open.feishu.cn/document/server-docs/server-side-sdk">服务端 SDK</a>：支持基于长连接的事件回调。</li>
          <li><a href="https://open.larkoffice.com/document/tools-and-resources/log-query-of-apps/open-api-log-query#30d1c67a">事件日志检索</a>：查询应用推送事件的日志，包含推送时间、事件类型、事件 ID、返回状态以及耗时等关键信息。</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/client-docs/h5/introduction">网页应用</a></strong>
      </md-td>
      <md-td>
        <a href="https://open.larkoffice.com/app/web-inspect">网页应用远程调试工具</a>：支持真机远程调试网页应用，诊断网页异常问题，例如：页面白屏、性能瓶颈排查。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/client-docs/docs-add-on/docs-add-on-introduction">小组件</a></strong>
      </md-td>
      <md-td>
        <a href="https://open.larkoffice.com/document/tools-and-resources/development-tools/ide-with-commands">飞书开发者命令行工具</a>：初始化开发环境，调试、发布、安装、预览 <strong>云文档</strong> 或 <strong>多维表格</strong> 小组件。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        <strong><a href="https://open.feishu.cn/document/uYjL24iN/uQTM5UjL0ETO14CNxkTN/overview">小程序</a></strong><br>（不推荐）
      </md-td>
      <md-td>
        <ul>
          <li><a href="https://open.feishu.cn/document/tools-and-resources/development-tools/overview-of-ide">飞书开发者 IDE 插件</a>：在主流 IDE 中集成飞书开发插件，支持代码补全与调试。</li>
          <li><a href="https://open.larkoffice.com/document/tools-and-resources/development-tools/tool-of-transforming-wechat-miniprogram">小程序搬家工具</a>：快速将其他平台上开发的小程序迁移到飞书。</li>
        </ul>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
::: 

