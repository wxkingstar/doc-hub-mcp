<!--
title: PC端飞书浏览器内核升级
id: 7103420374885892097
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/tbd
updatedAt: 1657678647000
source: https://open.feishu.cn/document/faq/breaking-change/tbd
-->
# PC端飞书浏览器内核升级
### 变更事项
为了在安全、性能、稳定性以及 Web 标准等方面更好地支持业务，飞书 PC 端依赖的 WebView 将从chrome M93 升级至 chrome M101。由于新版内核修改了部分特性，开发者需要检查自己的代码，并做好相应适配：
1. 我们将限制通过 HTTP Response 和 JS 接口设置的 cookie 大小，单个 cookie 大小不可超过 1 KB，一个站点总量不可超过 4 KB [查看详情](https://chromestatus.com/feature/4946713618939904)；如果你的 **小程序** 或 **网页应用** 的 cookie 大小超出以上限制，请改造以降低 cookie 大小。<br>

2. navigator.userAgent 将发生变化（chrome version 的后三位变为“0.0.0”，且将在之后的版本中被逐渐移除），进而使用 userAgentData 替代    [查看详情](https://blog.chromium.org/2021/09/user-agent-reduction-origin-trial-and-dates.html)； 如果你的 **网页应用** 或 **小程序web-view** 组件 在使用 userAgent 判断浏览器版本，可改为优先使用userAgentData 进行判断，降级方案使用 userAgent。

<br>
是否跟版：是<br>
预计生效版本：PC飞书 V5.16.0<br>
预计生效时间：2022-07-06<br>

### 潜在影响
客户端版本升级至 V5.16.0 后，如果相关代码没有进行兼容处理，可能会影响应用的正常使用。

### 解决方案
请开发者检查自己的代码是否依赖上述事项；如有依赖，请按照变更后逻辑做好适配和调整。

<br>
如需适配协助，请联系[技术支持](https://applink.feishu.cn/TLJsX982)。