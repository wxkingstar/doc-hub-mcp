<!--
title: 调试器
id: 7148643924512096284
fullPath: /uYjL24iN/uEzMzUjLxMzM14SMzMTN/development-of-block/debugger
updatedAt: 1664435701000
source: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-block/debugger
-->
# 调试器

模拟器右侧提供了调试器，具有 6 大功能模块，分别是 Elements、Console、Sources、Network、AppData、Storage。

## Elements panel

使用方式和 Chrome 调试器中的 Elements 区别不大， 打开调试器的 Element 面板，依次展开 div#block creator/block，即可审查 Block 内的元素。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bf2ef9b1676bb9673cc1d5645853c0c6_lz4ugdcdSe.png?lazyload=true&width=3636&height=2104)

## Console panel
Block 的编译错误，执行错误都会在这里展示，同时开发者可以在此输入和调试代码。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df2f5926a2ffc4f60db7dd8319b68de1_bTFVB7VF5z.png?lazyload=true&width=1866&height=910)

## Sources panel
打开调试器的 Sources 面板，左侧资源树中找到 worker 下的文件（一般是 workerContainer0），即可看到 Block 的逻辑层源代码，可在这里加断点调试。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3c75f657d2e732196a767e208ae350fd_RAxYnUrB5r.png?lazyload=true&width=1838&height=860)


#### Network panel


在 Network 面板中可以查看 Block 内发起的所有网络请求。数据协同相关的消息可以通过 Collaboration 面板查看。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/71b8b864442fac3e5ef3fa995b030e25_lze1fNjM7d.png?lazyload=true&width=1852&height=904)

调试数据协同功能前，请先点击 **上传** 按钮将 Schema 上传。

#### AppData panel

可以查看当前 Block 的 `data` 数据。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/87807dfa491a03c23d57e8a0e09120a2_yxfY560F5Y.png?lazyload=true&width=1858&height=838)

#### Storage panel

通过 Storage 面板可以查看当前 Block 通过 Storage API 存储的数据。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/71686bde27e6b56769d8fe50996a2f08_AA6HUUcZYL.png?lazyload=true&width=1852&height=886)

