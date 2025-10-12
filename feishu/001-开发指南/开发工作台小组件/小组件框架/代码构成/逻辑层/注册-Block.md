---
title: "注册 Block"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/logic-layer/register-block
---
最后更新于 2022-07-15

# 注册 Block

Block 是小组件应用的数据载体，基于 Creator 创建的应用实体数据（BlockEntity）进行展示、交互。<br>
如下代码展示了如何使用 Block 构造器注册一个 Block。

```javaScript
Block({
  data: {
    point: 1,
  },
  onLoad(options) {
    console.log(options.host, options.blockInfo);
  },
  onShow() {
      // 视图可见时执行
  },
  onHide() {
      // 视图隐藏时执行
  },
  onReady() {
      // 视图渲染完成时执行
  },
  onDestroy() {
      // Block销毁时执行
  },
  onResourceChange(sourceData) {
    // 有协同数据更新时执行，业务可以获取到相关数据信息进行一定的逻辑操作
  },
  onActivate(activeState){
    // block 激活时执行
    this.setData(activeState);
  },
  onInactivate(){
    // block 失活时执行
    tt.saveState({
      state: this.data,
    });
  },
  methods: {
    onTap(e) {
      // invoked when user do some action
    }
  },
});
```
