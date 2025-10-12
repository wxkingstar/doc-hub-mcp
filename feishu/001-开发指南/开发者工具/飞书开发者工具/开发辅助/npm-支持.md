---
title: "npm 支持"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/npm-support
---
最后更新于 2023-06-15

# npm 支持

当你开发小程序需要引入第三方 npm 包时，可以参考本文的方法进行操作。

> 开发者工具 2.3.2 以上开始，小程序支持使用 npm 来管理第三方包。
>
> 关于 npm 的概念，可以先参考官方 [npm](https://docs.npmjs.com/about-npm) 文档学习。

## 开启 npm 能力

点击开发者工具中的「详情」，选择「本地设置」，勾选「使用 npm」即可开启 npm 能力。

## 使用 npm 包
### 场景1：引用 JS 模块
#### step1：安装特定 npm 包
假设你想使用 [国密算法库](https://www.npmjs.com/package/miniprogram-sm-crypto) ，则需要在小程序源码目录下执行如下命令：
```shell
npm install --save miniprogram-sm-crypto
```
执行上述指令后，小程序目录下会出现 node_modules 文件夹。小程序源码目录默认是 miniprogramRoot；若开发者对[项目配置](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration)进行了修改，则以最终的 miniprogramRoot 字段取值为准。

> 注：npm 的 package.json 文件需要在 project.config.json 所定义的 miniprogramRoot 下。

#### step2：在需要引入的 JS 文件里引入该包
```js
const sm2 = require('miniprogram-sm-crypto').sm2

Page({
  onLoad() {
    const keypair = sm2.generateKeyPairHex()
    console.log('Public key is:', keypair.publicKey);
    console.log('Private Key is:', keypair.privateKey);
  }
})
```

### 场景2：引入自定义组件库

> 你可以参考[自定义组件](https://open.feishu.cn/document/uYjL24iN/ugTOugTOugTO)来学习自定义组件相关的内容。

假设你想使用一个名为 @custom/ui 的组件库，那么需要如下步骤：

#### step1：安装特定 npm 包
在小程序源码目录下执行如下命令：
```shell
npm install --save @custom/ui
```

执行上述指令后，小程序目录下会出现 node_modules 文件夹。小程序源码目录默认是 miniprogramRoot；若开发者对[项目配置](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration)进行了修改，则以最终的 miniprogramRoot 字段取值为准。

> 注：npm 的 package.json 文件需要在 project.config.json 所定义的 miniprogramRoot 下。

#### step2：在需要引入组件页面的 json 文件里注册该自定义组件

```json
// page/index.json
{
  "usingComponents": {
    "custom-button": "@custom/ui/custom-button/index"
  }
}
```

#### step3：在对应页面的 ttml 文件中使用该自定义组件即可

```html
<custom-button></custom-button>
```

## 使用须知

1.  不支持依赖 C++ addons，不支持依赖 Node.js 的内置库。

```js
const addon = require('./addon.node'); // 不支持
const http = require('http'); // 不支持
```

2.  寻找 npm 包会从依赖 npm 包的文件所在目录开始逐层往外找，直到找到可用的 npm 包或是小程序根目录位置。
2.  兼容微信小程序 miniprogram 字段，即寻找 npm 模块时该字段优先级最高。
2.  第三方自定义组件库需要在其 package.json 文件中定义 miniprogram 或者 main 字段指定组件库目录。

假设我们有一个名为 @custom/ui 组件库，其在 package.json 中声明了「miniprogram」字段值为 lib。
```json
{
  "miniprogram": "lib",
  "version": "1.6.8"
}
```
那么在引入 @custom/ui 的时候就会在 lib 目录下找对应的文件。比如在 usingComponents 中添加字段（见下方示例代码）后，就可以在 node_modules/@custom/ui/lib 下找对应的自定义组件模块。
```json
{
  "usingComponents": {
    "custom-button": "@custom/ui/custom-button/index"
  }
}
```
