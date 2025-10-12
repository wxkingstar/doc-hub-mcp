<!--
title: 调试器
id: 6966054360435736579
fullPath: /uYjL24iN/uEzMzUjLxMzM14SMzMTN/feishu-developer-tools-debugging-tools
updatedAt: 1645952330000
source: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-gadget-in-tools/gadget-debugging/feishu-developer-tools-debugging-tools
-->
# 飞书开发者工具-调试器

调试工具分为 9 大功能模块，分别是 **Elements**、**Console**、**Sources**、**Network**、**Appdata**、**Storage**、**Audits**、**Mock**、**Log**。

## Elements panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Elements panel 的使用方式和 Chrome 调试器中的 Elements 区别不大，可用于帮助开发者开发 ttml 转化后的界面。在这里可以看到真实的页面结构以及结构对应的 ttss 属性，同时可以通过修改对应 ttss 属性，在模拟器中实时看到修改的情况（仅为实时预览，无法保存到文件）；通过调试模块左上角的选择器，还可以快速定位页面中组件对应的 ttml 代码。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c0c20d07c4fb47e604fe72d7d05fa7a0_zWsnXfOGn6.png?lazyload=true&width=1966&height=1690)


## Console panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console panel 有两大功能：

- 开发者可以在此输入和调试代码

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63125a97284f29ebec41117a81cb0504_GOsjBNlimA.png?lazyload=true&width=1966&height=1690)

- 小程序的 console 和 error 输出，会显示在此处

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/03c7f4c931bd56cb5ac08d7602c97e75_G1zs2F8AIQ.png?lazyload=true&width=1966&height=1690)

### Sources panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sources panel 用于显示当前项目的脚本文件，同浏览器开发时显示的 Sources 面板基本没有区别。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ee17f35852f94a642494c28b89371d58_IPhP3uPj4q.png?lazyload=true&width=2162&height=1690)



>注：当代码运行到断点的时候，整个小程序都停止了，会有明显的 debugger 提示

### Network panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Network Panel 用于观察和显示 request 和 socket 的请求情况


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f8669b37826bd43c34ba3013a4162be_NshzmF6Pjm.png?lazyload=true&width=1818&height=1690)


### AppData panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AppData panel 用于显示当前项目运行时小程序 AppData 具体数据，实时地反映项目数据情况，可以在此处编辑数据，并及时地反馈到界面上。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/28a10a9a06a28cf9fc375bc9e93e868c_9LIxnk2YGd.png?lazyload=true&width=1818&height=1690)


### Storage panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Storage panel 用于显示当前项目使用 ==tt.setStorage== 或者 ==tt.setStorageSync== 后的数据存储情况，开发者可以直接在 Storage panel 上对数据进行删除（按 delete 键）、新增、修改。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/06b5332f800686f71bdb2e8326e52f0a_GMfkCQctiU.png?lazyload=true&width=1818&height=1690)


### Audit Panel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audit Panel 用于给小程序的体验评分，它会在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位出哪里有问题，以及给出一些优化建议。

#### 使用流程

1. 点击“运行”按钮，然后自行操作小程序界面，运行过的页面就会被“体验评分”检测到。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f6dce50b1c6157d2efdbc592dc8b2a9b_NrHCvXtKxq.png?lazyload=true&width=1818&height=1690)

2. 点击 “停止” 则结束检测，在当前面板显示相应的检测报告，开发者可根据报告中的建议对相应功能进行优化；开发者可点击“已覆盖页面”和“未覆盖页面”查看当前评分的页面覆盖情况。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5b29cb42673ca3b67b18d9833a745ad9_VZVUPaxhjD.png?lazyload=true&width=1818&height=1690)


3. 如需保存当前体验评分，可点击报告上方的“导出”按钮，将报告导出到本地保存；如需再次运行体验评分，可点击“清空体验评分”恢复初始状态。
   > 点击[体验评分方法及规则](/ssl:ttdoc/uYjL24iN/ukDOzYjL5gzM24SO4MjN) 文档查看具体的评分细则。

### Mock Panel

为了让开发者更方便地开发小程序，开发者工具提供了 API Mock 的能力，可以模拟部分 API 的调用结果。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先你需要在左侧面板上方勾选“启用 Mock”打开 Mock 功能，可以点击加号新增一条规则，点击减号删除一条规则，双击规则的名字可以编辑规则名称。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在右侧面板，你可以设置当前规则的 Mock 信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当 Mock 功能启用时，在模拟器中调用的 API 时会按照以下方式从上往下命中第一条规则：
1. 规则启用
2. API 接口名匹配
3. 该规则下设置的所有的参数都能通过正则表达式
4. 不填写规则会默认匹配

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;命中后，该 API 按照命中规则的模拟返回输出，否则不进入 Mock 的逻辑。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/17afe613d3a8668fba984e62d3488900_B5ny6PsbEl.png?lazyload=true&width=2340&height=1690)

