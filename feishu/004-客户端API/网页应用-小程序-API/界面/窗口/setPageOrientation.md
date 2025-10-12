---
title: "setPageOrientation"
source_url: https://open.feishu.cn/document/client-docs/gadget/open-capabilities/autorotate/setpageorientation
---
最后更新于 2025-09-02

# setPageOrientation(Object object)

设置当前小程序页面方向
**Notice**：- API设定的方向会覆盖当前页面从json中获取过来的orientation配置信息
- 如果页面被销毁了, 下次重新创建页面的时候, 会使用json中配置的orientation字段信息
- 不支持在 iPad 上调用

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.26.0+ | V5.26.0+ | **X** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
orientation | string | 是 |  | 页面方向  
**可选值** :   
- `portrait` : 竖屏  
- `landscape` : 横屏  
**Notice**：**注意**：  
- Harmony 端：暂不支持`landscape`值

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性
## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
    预览小程序
    预览网页应用

</div> 

```js
  tt.setPageOrientation({
      orientation: 'portrait',
      success: function(res) {
          console.log('set page orientation success')
      },
      fail: function(res) {
          console.log('set page orientation fail: '+ JSON.stringify(res))
      }
  })
```
