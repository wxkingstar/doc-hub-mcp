---
title: "UpdateManager.triggerCheckUpdate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/update/getUpdateManager/triggercheckupdate
---
最后更新于 2022-07-13

# UpdateManager.triggerCheckUpdate()

主动触发更新小程序。开发者调用该方法时，首先触发[onCheckForUpdate](https://open.feishu.cn/document/uYjL24iN/uAzM04CMzQjLwMDN/getUpdateManager/oncheckforupdate)事件；当前运行版本低于线上版本时，会强制更新小程序，若下载成功或本地已存在线上最新包，则会触发[onUpdateReady](https://open.feishu.cn/document/uYjL24iN/uAzM04CMzQjLwMDN/getUpdateManager/onupdateready)事件，否则触发[onUpdateFailed](https://open.feishu.cn/document/uYjL24iN/uAzM04CMzQjLwMDN/getUpdateManager/onupdatefailed)事件。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | 预览
网页应用 | **X** | **X** | **X** | /

## 输入

无
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
