<!--
title: 反馈
id: 6907569524099612673
fullPath: /uYjL24iN/uIDM5QjLyATO04iMwkDN
updatedAt: 1660808700000
source: https://open.feishu.cn/document/tools-and-resources/design-specification/gadget-design-specification/visual-specifications/feedback
-->
# 反馈
## 模态弹窗
需要用户处理事务，又不希望跳转页面以致打断操作流程时，可以在当前页面正中打开一个浮层，承载相应的操作。

模态窗本身是一个容器，它的样式会有很多种变化，带标题/不带标题（若需要传达的内容很简单一句话就可以表述清楚，则可以不带标题）。模态窗上的操作按钮不应超过 3 个，如果需要传递的内容很少，可以考虑用 Toast 控件替代。
### 移动端


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cd2bb59f6b5fe12b8a0c688465cc915d_ft6Z3L6C5J.png?lazyload=true&width=2570&height=1792)
### 桌面端


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a5a7ef6b530fd5560d96aec541c9e1e3_6cBJaJW7TE.png?lazyload=true&width=1920&height=616)

## 全局提醒
全局展示操作反馈信息的控件。全局提示可提供成功、警告和错误等反馈信息。在页面顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 移动端

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cbc19d4e534bbfb337dfc6abcc4df951_srlJ0tSvDm.png?lazyload=true&width=2264&height=1784)

### 桌面端

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/660ca1742d81e4fc28b111f8c535aded_SFp7aRPkgi.png?lazyload=true&width=2596&height=416)

## 进度条
展示操作的当前进度，在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e1d38581036439f38f991df9884eb714_BMVeLltI6w.png?lazyload=true&width=1920&height=640)
