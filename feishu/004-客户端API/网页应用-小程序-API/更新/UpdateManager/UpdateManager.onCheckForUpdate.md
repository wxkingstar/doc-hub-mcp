---
title: "UpdateManager.onCheckForUpdate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/update/getUpdateManager/oncheckforupdate
---
最后更新于 2022-07-13

# UpdateManager.onCheckForUpdate(function callback)

监听向后台请求检查更新结果事件。客户端在小程序冷启动时自动检查更新，不需由开发者主动触发。线上环境在有更新内容时会触发callback回调

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | 预览
网页应用 | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 请求检查更新结果事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
hasUpdate | boolean | 是否有新的版本

## 示例代码

```js
try {
      const updateManager = tt.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
      	// 请求完新版本信息的回调
     	 console.log(res.hasUpdate)
      })
      updateManager.onUpdateReady(function () {
       // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
       	updateManager.applyUpdate()
      })
      updateManager.onUpdateFailed(function () {
     	// 新版本下载失败
      	console.log('download error');
      })
      // 每隔一个小时主动检查更新一次
      setInterval(() => updateManager.triggerCheckUpdate(), 60*60*1000)
	} catch (error) {
	    console.log(`getUpdateManager fail: ${JSON.stringify(error)}`);
	}
```
