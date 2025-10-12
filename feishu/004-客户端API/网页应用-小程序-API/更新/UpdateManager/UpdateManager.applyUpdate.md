---
title: "UpdateManager.applyUpdate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/update/getUpdateManager/applyupdate
---
最后更新于 2022-07-13

# UpdateManager.applyUpdate(Object object)

强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 [onUpdateReady](https://open.feishu.cn/document/uYjL24iN/uAzM04CMzQjLwMDN/getUpdateManager/onupdateready) 回调）调用。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | 预览
网页应用 | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

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
