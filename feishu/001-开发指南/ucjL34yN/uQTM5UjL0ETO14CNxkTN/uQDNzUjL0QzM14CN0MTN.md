<!--
title: 小程序代码构成
id: 6907569744330620929
fullPath: /uYjL24iN/uQDNzUjL0QzM14CN0MTN
updatedAt: 1692947467000
source: https://open.feishu.cn/document/client-docs/gadget/introduction/code-structure
-->
# 小程序代码构成

查看小程序的项目，你可以看到项目代码里包含了下面几种格式的文件。本文主要介绍这些文件的作用。

- `.json` 后缀的 JSON 配置文件
- `.ttml` 后缀的 TTML 模板文件
- `.ttss` 后缀的 TTSS 样式文件
- `.js` 后缀的 JS 脚本逻辑文件


## JSON 配置

在项目的根目录有一个 app.json 和一个 project.config.json 文件，两者的用途如下。

- 小程序配置 app.json

	app.json 包含了当前小程序的全局配置，包括小程序的所有页面路径、页面样式配置、头部 title、底部 tab 等。用开发工具生成的项目里面包含一个默认的 app.json 文件，通过该文件可以配置小程序一些全局的属性，声明小程序所有的页面，同时，如果小程序可以在 PC 端运行，还能在该文件里配置默认启动的页面等。

- 项目配置 project.config.json

	项目配置文件里主要包含了针对小程序项目配置的一些信息，例如，项目名称、App ID、项目语法、编译配置等内容。这些内容可以在开始创建项目的过程中通过开发者工具生成，开发者也可以根据需要进行修改和配置。

JSON 配置文件的细节和具体参数，参见[配置小程序](/ssl:ttdoc/uYjL24iN/uEDNuEDNuEDN)。

## TTML 模版

TTML 用来描述当前页面的结构。TTML 文件示例如下：

```html
<view class="container">
  <view class="user" tt:if="{{hasUser}}">
    <text class="text">Hello World</text>
     <button bindtap="tap">Button</button>
  </view>
</view>
```

TTML 的作用类似于 HTML。TTML 由标签、属性等构成，但是也有如下与 HTML 不同的地方。

- 标签名字不一样。TTML 提供了 `view`、`button`、`text` 等标签，这些标签是小程序为你包装好的基本能力，此外小程序还提供了地图、视频、音频等组件能力。
- 新增如`tt:if`这样的属性以及`{{ }}`格式的表达式。
- TTML 作为模版语法来描述状态和界面结构的关系，实现渲染和逻辑的分离。小程序的框架遵循该逻辑，例如，如果你需要点击按钮显示`Hello World`在界面上，则 TTML 语法示例如下。

  ```html
  <view class="container">
    <view class="userinfo">
      <button bindtap="showMessage">点击按钮显示Message</button>
    </view>
    <view class="textinfo" tt:if="{{isShowMessage}}">
      <text class="text">{{message}}</text>
    </view>
  </view>
  ```

	此时，JS 只需要管理状态即可。

    ```js
    const app = getApp()
    Page({
      data: {
        message: 'Hello World',
        isShowMessage: false,
      },
      showMessage() {
        this.setData({
          isShowMessage: true,
        })
      },
    })
    ```

数据绑定是指通过`{{ }}`的语法把一个变量绑定到标签上。仅通过数据绑定还不足以完整的描述状态和页面的关系，因此，还需要提供一些逻辑判断和循环遍历的功能，例如，`if / else`、`for`等能力。在小程序中，这些控制能力都用`tt:`开头的属性进行表达。

关于 TTML 文件的详细介绍可参见 [TTML](/ssl:ttdoc/uYjL24iN/ugzNugzNugzN)。

## TTSS 样式

TTSS 具有 CSS 大部分的特性，小程序的 TTSS 也在基础能力之上做了一些扩充和修改，具体说明如下。

- 新增了一个动态的尺寸单位。
- 在写 CSS 布局时，样式的展示会受设备的屏幕宽度和设备像素影响，因此小程序会采用一些技巧来换算像素单位。TTSS 在底层支持新的尺寸单位 rpx，你可以免去换算的步骤，交给小程序底层进行换算即可。
	
	由于换算采用的浮点数运算，所以运算结果会和预期结果存在些许偏差。

- 提供了全局样式和局部样式。
- 与 app.json、page.json 的概念相同，你可以写一个 app.ttss 作为全局样式，该文件将作用于当前小程序的所有页面，而局部页面样式 page.ttss 仅对当前页面生效。
- TTSS 仅支持部分 CSS 选择器。

TTSS 文件的详细介绍可参见[TTSS](/ssl:ttdoc/uYjL24iN/uYDOuYDOuYDO)。

## JS 交互逻辑

一个小程序不仅需要页面，还需要和用户做交互。例如，响应用户的点击、获取用户的位置等。在小程序里，你可以通过 JS 文件来响应用户的操作。示例代码片段如下：

```html
<view class="container">
  <view class="model">
    <text class="info">{{message}}</text>
    <button bindtap="showModel">显示设备型号</button>
  </view>
</view>
```

在点击`button`按钮时，如果你希望显示用户当前手机的型号，则可以在`button`上声明一个属性`bindtap`，然后在 JS 文件里边声明`showModel`方法来响应这次点击操作。示例代码片段如下：

```js
const app = getApp()
Page({
  data: {
    message: '',
  },
  showModel() {
    // 获取设备信息
    tt.getSystemInfo({
      success: (res) => {
        // 调用this.setData可以进行状态管理
        this.setData({
          message: res.model,
        })
      },
    })
  }
})
```

此外，你还可以在 JS 中调用客户端为小程序提供丰富的 API，利用这些 API 可以方便的调用客户端提供的能力。例如，获取用户信息、本地存储、定位等。
