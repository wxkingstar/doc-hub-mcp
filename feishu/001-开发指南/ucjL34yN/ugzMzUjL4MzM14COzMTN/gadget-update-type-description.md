<!--
title: 小程序更新机制
id: 7153522674395824131
fullPath: /uYjL24iN/ugzMzUjL4MzM14COzMTN/gadget-update-type-description
updatedAt: 1692949727000
source: https://open.feishu.cn/document/client-docs/gadget/gadget-operation/gadget-update-type-description
-->
# 小程序更新机制

小程序的更新分为常规更新和强制更新。本文将介绍小程序的更新类型，以及更新方式。

## 更新类型

当你在开发者后台发布新版本的小程序之后，用户更新至新版小程序代码的方式分为以下两种。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">更新类型</md-th>
<md-th style="width:50%">更新方式</md-th>
<md-th style="width:35%">推荐使用场景</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>常规更新</md-td>
<md-td>当用户冷启动应用时，系统会检查是否有版本更新，如果发现新版本，将会异步下载新版本的小程序代码包，同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动时才会生效。</md-td>
<md-td>在向前兼容的更新迭代场景中，推荐使用常规更新方式。</md-td>
</md-tr>

<md-tr>
<md-td>强制更新</md-td>
<md-td>当用户冷启动应用时，系统会强制更新为新版小程序。该更新方式可能导致首次打开应用的时间变长，你需要确认当前版本为稳定版本后，再使用该更新方式。

<md-alert type="tip">
强制更新仅针对飞书客户端 v5.12 及以上版本生效。
</md-alert>
</md-td>
<md-td>
- 场景一：修复线上问题，需尽快使用户升级到新版本。
- 场景二：不兼容更新。服务端代码与老版本客户端代码不兼容，要求所有用户都升级到新版本。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 更新方式

### 方式一：在后台管理小程序的更新方式

1. 登录[开发者后台](https://open.feishu.cn/apps)。

2. 进入需要配置更新方式的小程序应用。

3. 在应用详情页左侧，选择 **应用能力** > **小程序**。

4. 在 **小程序配置** 区域，自定义配置移动端或桌面端小程序的更新类型。
	
    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b254d0668a0462439203e74b0154b3b_eDirnHzee6.png?height=970&lazyload=true&maxWidth=600&width=1690)
    
5. 修改配置后，需要重新发布应用使配置生效。
	
    发布应用的操作说明，参见[应用的发布与使用](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-4)。


### 方式二：通过开放能力（API）更新小程序

你可以在小程序项目中调整代码逻辑，当用户打开应用后，使用 [tt.getUpdateManager](/ssl:ttdoc/uYjL24iN/uEzM04SMzQjLxMDN) API 监听当前是否有最新的小程序版本。如果有新版本，则引导用户进行重启，更新至新版小程序。示例代码如下：

```js
const updateManager = tt.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  tt.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
})
```