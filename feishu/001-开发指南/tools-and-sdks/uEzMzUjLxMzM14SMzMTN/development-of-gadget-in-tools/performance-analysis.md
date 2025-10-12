<!--
title: 性能分析
id: 7223289940566523907
fullPath: /uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-debugging/performance-analysis
updatedAt: 1681804270000
source: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-gadget-in-tools/performance-analysis
-->
# 性能分析
性能分析工具可以让小程序在性能分析模式下打开。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/707c522875f4cc70b7d34e5320020b5e_dguycpj9cH.png?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200?lazyload=true&width=1280&height=200)
该模式下，小程序运行时的代码包下载、网络请求、setData 渲染、API 调用、代码执行等一系列行为的性能数据都会被录制。  

在录制结束后，性能数据会通过局域网通信发送到开发者工具上，并以火焰图的形式可视化展示，在图中可以看到每一次网络请求、setData、代码执行的开始时间和结束时间。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e8548e47a7b9e6e18f715e1e47036f01_D8h7w6Aqin.png?lazyload=true&width=3582&height=2074)

性能分析工具和 [真机调试](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/feishu-developer-tools-remote-debugging) 一样，依赖局域网通信，因此录制移动端性能时需要保证手机和打开开发者工具的 PC 在同一局域网下，录制 PC 端性能时需要保持 PC 上的飞书处于打开状态。
## 版本要求
客户端版本 >= 6.1，开发者工具版本 >= 2.29。
## 录制性能数据
性能分析工具位于调试器的 Peformance 面板，点击左上角的圆点按钮和右侧的按钮都可以发起录制。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/707c522875f4cc70b7d34e5320020b5e_dguycpj9cH.png)
点击按钮后会弹出二维码，扫码打开的小程序就会运行在性能分析模式下，记录各种行为的耗时。  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3a267d1158417a5e36618a7a414d034_A1kD4aKqwH.png?lazyload=true&width=2520&height=1440)
PC 端则是通过飞书消息被开发者工具拉起后运行在性能分析模式下，记录各种行为的耗时。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/48c570d6973217d0ece982c5a12f62f2_7LqLVjfsNA.png?lazyload=true&width=2520&height=1320)
小程序打开后的运行期间可以像正常调试一样随意操作小程序，包括跳转页面等操作。  

但是移动端小程序一旦切入后台，会因为没有打开入口而无法回到前台，因此性能录制期间不要以上划、关闭等方式让小程序切入后台。

点击客户端和开发者工具的停止录制按钮都会结束录制，并根据记录的数据生成火焰图。  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e90c238dd66a2f0911961207572a7f49_wW0VMLhmyI.png?lazyload=true&width=2160&height=358)
最长录制 60 秒，到达上限后会自动结束。  
![a3513524-60ab-435b-9739-f5bca078dcb6.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8152ec33a980b10dcdd25f24e38175b3_giiVV6shUn.png?lazyload=true&width=500&height=230)
## 导出性能数据
录制完成后的数据并不会自动保存，如果此时关闭开发者工具，数据会被丢弃，下次再打开时火焰图也不会展示。  

如果想要保存数据，用于后续的反复查看，需要点击 Performance 面板顶部的“导出数据”按钮，将性能数据保存到磁盘上，以用于下次导入。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6e5317d594b5210d12eb432f7150b867_7UKT4bLrFz.png?lazyload=true&width=780&height=260)
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ece35b851143b989ada8b7557dfaccb4_JvKHrIi6BT.png?lazyload=true&width=452&height=232)
## 导入性能数据
导出的数据可以再次导入，点击 Performance 面板顶部的“导入数据”按钮，选择磁盘上的性能数据，点击打开。 
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c696f02e02a414109e848833575710b9_FtrNWy9CYX.png?lazyload=true&width=780&height=260)
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9391a04d16fe4646b072668e796a9312_3rtOIo4oT6.png?lazyload=true&width=1340&height=900)
即可看到导入数据后展示出的对应的火焰图。  
## 删除性能数据
点击 Performance 面板顶部的“删除数据”按钮，可以删除数据并清空当前火焰图。  如果这份数据是录制的，那么会直接丢弃这份数据。  

如果这份数据是从性能数据文件导入的，也仅会丢弃从性能数据文件中读取的数据，而不会删除磁盘上的性能数据文件。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d6847aa16f79f5487787c59c856cbe33_BAbvXCyhc1.png?lazyload=true&width=780&height=260)
## 时间线
性能数据以火焰图的形式可视化展示。火焰图由从上到下的多个时间线组成，每个时间线包含很多时间柱，每个时间柱代表一个小程序行为产生的耗时。  

如下图 Network 时间线里包含的就是一系列 tt.request 对应的时间柱。
![1d246671-b818-47c7-89c5-1702c4d69a0e.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e76fa1aa939aceb6c43ea0b56ce26af8_1grbxlNb43.png?lazyload=true&width=1280&height=271)
时间线分为异步时间线和同步时间线：
- 异步时间线的时间柱都是表示并列的异步行为，上方和下方的时间柱是并列关系。
- 同步时间线的时间柱表示的都是 JS 调用堆栈的同步行为，上方和下方的时间柱是父子调用栈关系。

火焰图有从上到下排布着以下时间线：
| 时间线         | 类型           | 说明        |
| --------- | --------------- | --------- |
| Network  | 异步 | 包含 tt.request、tt.uploadFile、tt.downloadFile 的异步耗时               |
| setData  | 异步 | 包含所有页面和自定义组件调用 setData 的异步耗时                              |
| AsyncAPI | 异步 | 包含除 tt.request、tt.uploadFile、tt.downloadFile 以外的异步 API 的异步耗时 |
| Native   | 异步 | 包含 loadMeta、loadPackage                                             |
| Service  | 同步 | 包含所有 Service JS 的耗时                                              |
| WebView  | 同步 | 包含 WebView 渲染、渲染消息回传的渲染相关的耗时                              |

由于小程序运行过程中会有多个页面，每个页面对应一个 WebView，因此会有多个 WebView 时间线。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1d77d9eafee8f0e385085c843930349b_JpUQ3mRm8Q.png?lazyload=true&width=1280&height=260)

### 缩放
顶部的时间线线选择器可以用滚动滚轮、拖动滑柄的方式缩放整个火焰图。
双击会重置整个时间选择器，回到没有缩放的状态。  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2e9f0eb4e87ffe492c424e3bc0aafd7_VVaQBKNWIe.png?lazyload=true&width=1280&height=233)

### 展开和收起
时间线可以被收起和再次展开。  

如下图，点击 setData 时间线的三角按钮可以收起 setData 时间线。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/56b56585fbd4aba37c052747c6640b9d_yB1eU8LUsG.png?lazyload=true&width=2380&height=540)
setData 时间线收起后如下图所示。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/77766f9a8b75f7d28f5b75261316c6a0_baWl2FjEIM.png?lazyload=true&width=2140&height=340)
### 调整高度
如果时间柱堆叠过深，也可以调整当前时间线的高度。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2bd62c3baaef516267ba47c74868a658_pddczJDolm.png?lazyload=true&width=2600&height=380)

## 性能详情
点击火焰图的时间柱会看到该时间柱对应的小程序行为的详情信息。
![42a94db4-6eac-4268-bfb7-c4daad729a13.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3d59d2990244dc4001bafa34e6095d3_nPeCgGVEZj.png?lazyload=true&width=1280&height=413)
整个详情信息分为 2 部分：基础字段和扩展字段。
### 基础字段
基础字段是每个时间柱都会有的字段，分别如下：  

| 字段       | 说明                   |
| -------- | -------------------- |
| name     | 该时间柱对应的行为的名称         |
| type     | 该时间柱对应的行为的类型         |
| start    | 该行为的开始时间             |
| end      | 该行为的结束时间             |
| duration | 该行为的时长，即 end - start |  

type 和 name 的值如下所示：  

| type | name | 说明 |
| -- | -- | -- |
| request| request | 调用 tt.request 接口 |
| NetworkResponseDecode | JSONParseResponseData: 反序列化 JSON 字符串<br>NativeBufferUnpackResponse: 解析 Buffer 数据 | 解析 tt.request 返回的 body 数据 |
| setData | Page.setData<br>Component.setData | 调用 setData |
| setDataSeries | setDataSeries | 一段时间内从第一次调用 setData 开始到最后一次调用 setData 结束 |
| setDataCallback | Page.setDataCallback<br>Component.setDataCallback | 调用 setData 返回后执行的回调函数 |
| AppLifeCycle | App.onLaunch<br>App.onShow<br>App.onHide<br>App.onUnlaunch | 开发者通过 [App](/ssl:ttdoc/uYjL24iN/uMDNuMDNuMDN) 方法注册的 App 实例的生命周期回调函数。|
| AppMethod | 按照格式 `App.${methodName}`，methodName 为自定义方法的方法名 | 通过 [App](/ssl:ttdoc/uYjL24iN/uMDNuMDNuMDN) 方法注册的 App 实例的自定义方法 |
| PageLifeCycle | route | 页面路由 |
| PageLifeCycle | createPage | createPage 是小程序框架内部创建新页面时的函数逻辑。<br>Page.onLoad 和 Page.onShow 都是 createPage 的子调用栈。 |
| PageLifeCycle | Page.onLoad<br>Page.onReady<br>Page.onShow<br>Page.onHide<br>Page.onUnload<br>Page.onReload | 通过 [Page](/ssl:ttdoc/uYjL24iN/uQDNuQDNuQDN) 方法注册的 Page 实例的生命周期回调函数 |
| PageMethod | 按照格式 `Page.${methodName}`，methodName 为自定义方法的方法名 | 通过 [Page](/ssl:ttdoc/uYjL24iN/uQDNuQDNuQDN) 方法注册的 Page 实例的自定义方法 |
| ComponentLifeCycle | Component.created<br>Component.ready<br>Component.attached<br>Component.detached | 通过 [Component](/ssl:ttdoc/uYjL24iN/uADMx4CMwEjLwATM) 方法注册的 Component 实例的生命周期回调函数 |
| ComponentMethod | 按照格式 `Component.${methodName}`，methodName 为自定义方法的方法名 | 通过 [Component](/ssl:ttdoc/uYjL24iN/uADMx4CMwEjLwATM) 方法注册的 Componet 实例的自定义方法 |
| ComponentObserver | 按照格式 `Component.${key}.observer`，key 为自定义组件属性名 | 通过 [Component](/ssl:ttdoc/uYjL24iN/uADMx4CMwEjLwATM) 方法注册的 Componet 实例属性变化时触发的回调函数 |
| TimerCallback | setTimeoutCallback<br>setIntervalCallback | 调用 setTimeout/setInterval 定时执行的回调函数 |
| PromiseCallback | PromiseThenCallback<br>PromiseCatchCallback | 调用 Promise 异步执行的回调函数 |
| APIInvoke | 按照格式 `${apiName}Invoke`，apiName 为 API 名 | 调用 API |
| APICallback | 按照格式 `${apiName}Callback`，apiName 为 API 名 | 调用 API，API 异步返回后执行的回调函数 |
| define | define | 注册业务 JS 代码的 |
| execute | execute: 执行业务 JS 代码<br>loadServiceJSSDK: 执行 Service JSSDK<br>runAppServiceJS: 执行 Service 业务入口代码 app-service.js<br>loadWebViewJSSDK: 执行 WebView JSSDK<br>runPageFrameJS: 执行 WebView 业务入口代码 page-frame.js | 执行 JS 代码 |
| Render | render: setData 触发的渲染<br>postRender: setData 触发的渲染后根据 computedStyle 进行的二次渲染 | WebView 渲染 |
| Communication | webviewPublish: WebView 向 Service 发送消息 | WebView 和 Service 的通信。<br>当为 WebView 向 Service 发送消息时，就体现在 WebView 的同步时间轴上；<br>当为 Service 向 WebView 发送消息时，就体现在 Service 的同步时间轴上。<br>目前只记录 WebView 向 Service 的通信。 |

下面对一些相对复杂的 type 和 name 的定义展开解释
#### setDataSeries
如下图所示，一段时内连续相互重叠的 setData 会被划分为一个 setDataSeries。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8ab93bd3652bfe753f43cdf63dcbfe0d_SujX73cV6e.png?lazyload=true&width=3300&height=400)
#### define 和 execute
每个业务代码文件经过开发者工具编译后都会变成一个被 define 函数包裹的格式。
```javascript
// chunk/leave.js 编译前
console.log(123);
// chunk/leave.js 编译后
define('chunk/leave.js', function () {
    console.log(123);
})
```
因此执行编译后的 chunk/leave.js 代码就是执行 define 函数，该过程就是 **define**。  
define 函数的逻辑是将第一个参数：路径 chunk/leave.js 和第二个参数：chunk/leave.js 的实际逻辑（称为模块函数）关联起来。  
执行 chunk/leave.js 的模块函数的过程就是 **execute**。  

当调用 `require('chunk/leave.js')` 时会先 define chunk/leave.js 再执行模块函数，以上过程在多次 require 一个业务 JS 文件的过程中只会被执行一次。

有一些非业务 JS 不需要 define，而是被直接执行。这些 JS 的执行也会被归入 execute，有：
- loadServiceJSSDK: 执行 Service JSSDK
- runAppServiceJS: 执行 Service 业务入口代码 app-service.js
- loadWebViewJSSDK: 执行 WebView JSSDK
- runPageFrameJS: 执行 WebView 业务入口代码 page-frame.js 

#### render 和 postRender
render 是 setData 触发的渲染。而有些组件的尺寸和样式需要在 setData 渲染完成后根据 computedStyle 来进行计算，如 [image 组件 mode 属性控制的裁剪缩放](/ssl:ttdoc/uYjL24iN/uUzNuUzNuUzN)。这个在 render 后根据 computedStyle 来更新组件的过程就称为 postRender。

### 扩展字段
扩展字段是部分时间柱才会有的额外信息，以下是有扩展字段的时间柱类型以及扩展字段：  
| type | name | 字段 | 说明 |
| -- | -- | -- | -- |
| request | - | url | 请求的 url |
| request | - | version | 接口实现的版本，为 v1 或 v2 |
| NetworkResponseDecode | - | url | 请求的 url |
| NetworkResponseDecode | - | version | 接口实现的版本，为 v1 或 v2 |
| setData | Page.setData | page | 调用 setData 的页面的路径 |
| setData | Page.setData | webviewID | 调用 setData 的页面对应的 webview 的 id |
| setData | Component.setData | page | 调用 setData 的自定义组件所在页面的路径 |
| setData | Component.setData | component | 调用 setData 的自定义组件的路径 |
| setData | Component.setData | webviewID | 调用 setData 的自定义组件所在页面对应的 webview 的 id |
| APIInvoke | - | sync | 是否为同步接口 |
| PageLifeCycle | - | page | 页面的路径 |
| PageLifeCycle | - | webviewID | 页面对应的 webview 的 id |
| PageMethod | - | page | 页面的路径 |
| PageMethod | - | webviewID | 页面对应的 webview 的 id |
| ComponentLifeCycle | - | page | 自定义组件所在页面的路径 |
| ComponentLifeCycle | - | component | 自定义组件的路径 |
| ComponentLifeCycle | - | webviewID | 自定义组件所在页面对应的 webview 的 id |
| ComponentMethod | - | page | 自定义组件所在页面的路径 |
| ComponentMethod | - | component | 自定义组件的路径 |
| ComponentMethod | - | webviewID | 自定义组件所在页面对应的 webview 的 id |
| ComponentObserver | - | page | 自定义组件所在页面的路径 |
| ComponentObserver | - | component | 自定义组件的路径 |
| ComponentObserver | - | webviewID | 自定义组件所在页面对应的 webview 的 id |
| define | - | script | define 的业务 JS 代码的路径  |
| execute | execute | script | 执行的 JS 代码的路径       |
| execute | runPageFrameJS | webviewID | 执行 page-frame.js webview 的 id |
| execute | loadWebViewJSSDK | webviewID | 页面对应的 webview 的 id |
| Container | loadWebContainer | webviewID | 页面对应的 webview 的 id |
## 性能统计
点击火焰图的空白处则会看到整个录制时段内的性能统计信息。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/97182945da04ce3f289d852c92d5cb2a_1pviY1hkoq.png?lazyload=true&width=1280&height=665)  
各字段含义如下：
| 字段 | 说明 |
| -- | -- |
| duration | 录制期间从第一个耗时行为开始到最后一个耗时行为结束的时长 |
| requestCount | 调用 tt.request 的次数 |
| longestRequestURL | 耗时最长的一次的 tt.request 请求的 ur |
| longestRequestDuration | 耗时最长的一次的 tt.request 的请求时长 |
| downloadFileCount | 调用 tt.downloadFile 的次数 |
| longestDownloadFileURL | 耗时最长的一次的 tt.downloadFile 请求的 url |
| longestDownloadFileDuration | 耗时最长的一次的 tt.downloadFile 的请求时长 |
| uploadFileCount | 调用 tt.uploadFile 的次数 |
| longestUploadFileURL | 耗时最长的一次的 tt.uploadFile 请求的 url |
| longestUploadFileDuration | 耗时最长的一次的 tt.uploadFile 的请求时长 |
| setDataCount | 页面和自定义组件共计调用 setData 的次数 |
| longestSetDataPath | 耗时最长的一次的 setData 的调用页面或自定义组件的路径，此处耗时指从发起调用到 setData 回调函数执行的时长。 |
| longestSetDataDuration | 耗时最长的一次的 setData 的耗时，此处耗时指从发起调用到 setData 回调函数执行的时长。 |
| asyncAPICount | 异步 API 的调用次数 |
| asyncAPICost | 调用异步 API 的累计阻塞耗时，因为异步 API 虽然是异步返回的，但是在发起调用的那一刻也会阻塞 Service 线程。 |
| longestAsyncAPIName | 耗时最长的异步 API，此处耗时指从发起调用到 API 回调函数执行的时长。 |
| longestAsyncAPIDuration | 耗时最长的异步 API 的耗时，此处耗时指从发起调用到 API 回调函数执行的时长。 |
| syncAPICount | 同步 API 的调用次数 |
| syncAPICost | 调用同步 API 的累计阻塞耗时 |
| serviceCost | Service 线程的累计 JS 耗时 |
| webviewCost | WebView 线程的累计 JS 耗时 |
## 自定义埋点
以上介绍的埋点都是小程序框架和容器的埋点，性能分析工具也可以展示小程序业务的自定义埋点。  

如下代码演示了如何用 `tt.getPerformanceRecorder()` 返回的 PerformanceRecorder 单例对象来进行自定义埋点。
```xml
<view style="marigin: 10px; padding: 10px; background: #eeeeee; display: flex;" tt:for="{{list}}">
  <view style="width: 40px; height: 40px; background: red; font-size: 20px; color: white; text-align: center; line-height: 40px; margin-right: 10px;">
    {{item.a}}
  </view>
  <view style="background: blue; color: white; padding-left: 5px; flex-grow: 1;">
    <view style="line-height: 20px; font-size: 16px;"> {{item.b}}</view>
    <view style="line-height: 10px; font-size: 10px;"> {{item.c}}</view>
    <view style="line-height: 10px; font-size: 10px;"> {{item.d}}</view>
  </view>
</view>
```
tt.getPerformanceRecorder() 仅在 >= 6.1 的客户端版本上支持，且仅在性能分析模式下生效。  

在预览模式以及线上小程序等其他场景下，tt.getPerformanceRecorder() 以及返回的 PerformanceRecorder 单例对象依然存在，只是 PerformanceRecorder 上的所有方法都不生效。
```javascript
Page({
  data: {
    list: []
  },
  onShow() {
    this.makePageJank(5);
  },
  onLoad() {
    this.makePageJank(5);
    const p = tt.getPerformanceRecorder && tt.getPerformanceRecorder();

    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        tt.request({
          url: 'https://open.feishu.cn'
        });
      }

      // 调用 marker 接口，记录一个时间点
      p && p.mark({
        // 时间点的 name，可以自定义
        name: 'T',
        // 时间点的 type，可以自定义
        type: 'ijkl',
        // 时间点的扩展信息，可以自定义
        extra: {
          g: 7,
          h: 8,
          i: 9
        }
      })
      // stack 表示有堆栈的，开始记录一段同步调用
      const stackID = p && p.startStack({
        // name type extra 均可自定义
        name: 'myIntervalRender',
        type: 'abcd',
        extra: {
          a: 1,
          b: 2,
          c: 3
        }
      });

      Promise.resolve().then(() => {
        // 用多次同步接口调用来模拟一些很耗时的 JS 逻辑
        this.makePageJank(10, 6);
      })

      // parallel 表示有平行的，开始记录一段可以和其他异步逻辑并行的异步调用用
      const parallelID = p && p.startParallel({
        name: 'myIntervalSetData',
        type: 'efgh',
        extra: {
          d: 4,
          e: 5,
          f: 6
        }
      })
      this.setData({
        list: new Array(40).fill(0).map((item) => {
          return {
            a: randomString(2),
            b: randomString(18),
            c: randomString(40),
            d: randomString(30)
          }
        })
      }, () => {
        p && p.endParallel(parallelID)
      });

      Promise.reject(4).catch(() => {
        // 用多次同步接口调用来模拟一些很耗时的 JS 逻辑
        this.makePageJank(5);
      });
      // stack 表示有堆栈的，完成记录一段同步调用
      p && p.endStack(stackID);
    }, 2000);
  },
  makePageJank(n, r = 0) {
    for (let i = 0; i < n; i++) {
      tt.getSystemInfoSync();
    }
    r--;
    if (r > 0) {
      this.makePageJank(n, r)
    }
  },
})
```
最终录制得到如下火焰图，图中红黄蓝箭头分别指向的就是示例代码中的：
- 同步耗时埋点：myIntervalRender
- 异步耗时埋点：myIntervalSetData
- 时间点埋点：T

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f33675d61d06aea14798cb401f87e454_FKv3BnIXMW.png?lazyload=true&width=2000&height=1040)