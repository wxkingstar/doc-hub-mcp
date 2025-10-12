<!--
title: 新框架概述
id: 7135762151604928515
fullPath: /uYjL24iN/uEjMuEjMuEjM/new-framework/overview
updatedAt: 1731565908000
source: https://open.feishu.cn/document/client-docs/gadget/framework/new-framework/overview
-->
# 概述

在飞书客户端 v5.12 及以上版本的基础库中，除了原有稳定的小程序渲染框架实现，开放平台又额外提供了一套新的渲染框架实现，该套新的框架实现就是小程序的新框架。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/acbdf023601860618ce0539e29814aa7_W9SMQ88Bhh.png?height=780&lazyload=true&maxWidth=600&width=1440)

:::warning
**升级新框架前必读**：
- 小程序新框架升级存在不兼容改动（breaking changes），你在迁移升级过程中需要处理代码兼容问题。
- 小程序新框架在飞书客户端 v5.12 以下版本不支持，你需要在发布小程序后，关注低版本的兼容情况。
- 小程序新框架是实验能力，后续飞书开放平台可能存在调整支持版本范围，甚至关闭新框架能力的情况。
:::

## 新框架简介

小程序的新框架是针对 Component、setData、selectComponent、triggerEvent 等框架接口的一整套优化实现，在组件和 API 方面没有改动。相较于旧框架，新框架性能更好，对于使用自定义组件较多的小程序（例如，基于 uni-app 开发的小程序），能够大幅减少渲染通信次数和渲染耗时，有较为明显的性能提升。

新框架在接口语法、参数和返回值层面没有变化，但在接口的内部实现方面存在一些不兼容改动（breaking changes）。这些不兼容改动在大部分场景下都不会有影响，但在部分场景下可能会由于业务不兼容而产生 Bug。出于对业务稳定性的考虑，新框架逻辑不会主动开启，而是由你在 app.json 配置文件中自行配置开启。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ac7b89f3402cc7da8118fa9f813f308_63j5OIphkS.png?height=1222&lazyload=true&maxWidth=600&width=1474)

建议你在开启新框架后进行一轮回归测试，参考[不兼容改动](/ssl:ttdoc/uYjL24iN/uEjMuEjMuEjM/new-framework/breaking-changes)，以解决业务代码对新框架的兼容性问题。

## 开启新框架

1. 安装[飞书开发者工具](/ssl:ttdoc/uYjL24iN/ucDOzYjL3gzM24yN4MjN)。

2. 使用开发者工具开发小程序或打开小程序项目。

3. 在 app.json 配置文件中，增加 newFramework 配置项。

    ```json 
    {
        "newFramework": {
            // 是否开启。
            "enabled": true,
            // 在上传小程序的情况下，开启新框架的配置规则如下述注释：
            // 开启新框架的最低飞书客户端版本，默认且最低为 v5.12。
            // 小于 v5.12 版本的飞书客户端中，只会运行旧渲染逻辑。
            // 大于等于 v5.12 版本的飞书客户端中，会运行新渲染逻辑。
            "minimumSupportedVersion": "5.12"
        }
    }
    ``` 

    以上述配置为例，增加该配置并上传发布小程序版本后：

    - 当小程序的用户使用大于等于 v5.12 的飞书客户端打开新发布的小程序时，会进入新框架，用新框架的逻辑渲染。
    - 当小程序的用户使用小于 v5.12 的飞书客户端打开新发布的小程序时，会进入旧框架，用旧框架的逻辑渲染。

	相关操作说明：

	- 在预览、实时预览或真机调试模式下，只要配置了 newFramework 配置项且 `newFramework.enabled` 为 `true`，则小程序就会进入新框架逻辑渲染。因此请务必使用大于等于 v5.12 的飞书客户端进行调试，否则小程序会报错，且显示为白屏。


	- 使用[命令行工具 opdev](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/ide-with-commands) 可以上传和预览配置了 newFramework 的小程序项目，但由于 opdev 不再维护，因此在实时预览和真机调试模式下，newFramework 配置项不会生效，此时小程序的框架逻辑都只会进入旧框架。

	- 在开发者工具内点击编译，并在模拟器中预览时，只要小程序配置了 newFramework 配置项且 `newFramework.enabled` 为 `true`，小程序框架逻辑就会进入新框架，否则进入旧框架。你只需要保证使用高版本的调试基础库即可，因为低版本的基础库中不支持新框架。

		![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5b5866477c6bc7f06464cf8c2ad71f90_CZsJzentR5.png?height=480&lazyload=true&maxWidth=500&width=800)

### minimumSupportedVersion 作用

在 newFramework 配置项中的 minimumSupportedVersion 属性用于限制飞书客户端版本。例如：

某小程序开启新框架并进行回归测试时发现了 Bug，且自行排查无果后，通过开放平台技术支持寻求帮助，平台排查后确定该 Bug 需要进行 JSSDK 修复。修复时，假设飞书客户端基础库的版本为 v5.21，则需要将 `minimumSupportedVersion` 配置为 `5.21`，表示只在大于等于 v5.21 的飞书客户端上开启新框架。

```json 
{
    "newFramework": {
        "enabled": true,
        "minimumSupportedVersion": "5.21"
    }
}
``` 
### 如何判断小程序当前是否使用新框架

在大于等于 v5.12 的飞书客户端的小程序基础库中，提供了 `tt.isNewFramework()` 接口，该接口返回 `true` 即为新框架，返回 `false` 则为旧框架。

```javascript 
Page({
	onLoad() {
    	console.log('是否为新框架', tt.isNewFramework && tt.isNewFramework())
    }
})
``` 

## 关闭新框架

- 方式一：如果小程序已开启新框架，并且已经上传发布了对应的版本，则在发现异常需要回滚时，回滚至上一个没有开启新框架（即 app.json 中无 newFramework 配置）的版本即可。

- 方式二：重新发布一个 app.json 中不配置 newFramework 的小程序版本。