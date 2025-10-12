---
title: "video"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/media/video
---
最后更新于 2023-08-17

# video

视频开发者可通过 video组件播放视频。

|属性名|类型|默认值|是否必填|是否可动态修改|说明|最低版本|
|-----|---|-----|------|-----------|---|-------|
|src|String||否|是|要播放的视频资源地址|
|autoplay|Boolean|false|否|是|是否自动播放。飞书 PC 端 3.41 版本开始自动播放需要设置 muted 属性为 true 才生效|
|poster|String||否|是|封面图地址，网络地址|
|controls|Boolean|true|否|是|是否显示默认播放控件 | 移动端 3.39|
|loop|Boolean|false|否|是|是否循环播放 | 移动端 3.39|
|muted|Boolean|false|否|是|是否静音播放 | 移动端 3.39|
|object-fit|String|contain|否|是|当视频大小与 video 容器大小不一致时，视频的表现形式 | 移动端 3.39|
|initial-time|Number|0|否|是|指定视频初始化播放位置|3.40|
|show-fullscreen-btn|Boolean|true|否|是|是否显示全屏按钮||
|show-play-btn|Boolean|true|否|是|是否显示播放按钮||
|show-mute-btn|Boolean|true|否|是|是否显示静音按钮|移动端 3.45|
|show-download-btn|Boolean|false|否|是|是否显示下载按钮|仅 PC 端3.45|
|auto-fullscreen|Boolean|false|否|是|首次播放是否自动全屏|移动端 3.41|
|direction|Number||否|是|设置全屏时视频的方向，不指定则根据视频源宽高比自动判断|移动端 6.1, iPad不支持|
|show-progress|Boolean|true|否|是|是否展示进度条，视频宽度较小时隐藏|6.1|
|title|String||否|是|视频标题|6.1|
|play-btn-position|String|bottom|否|是|播放按钮位置|6.1|
|show-bottom-progress|Boolean|true|否|是|是否展示底部进度条|6.1|
|show-screen-lock-button|Boolean|true|否|是|是否在全屏时显示锁屏按钮|移动端 6.1|
|show-snapshot-button|Boolean|false|否|是|是否在全屏时显示截屏按钮|移动端 6.1|
|show-rate-btn|Boolean|false|否|是|是否展示倍速按钮|6.1|
|enable-progress-gesture|Boolean|false|否|是|是否开启进度控制手势|移动端 6.1|
|enable-play-gesture|Boolean|true|否|是|是否开启播放手势，即双击切换播放/暂停|移动端 6.1|
|auto-pause-if-outside-screen|Boolean|true|否|是|video滑动移出屏幕后是否自动暂停|移动端 6.1|
|header|Object||否|是|自定义header，会在视频播放时传给播放器|移动端 5.32|
|bindplay|EventHandler||否|是|视频开始/继续播放时触发|6.1|
|bindpause|EventHandler||否|是|视频暂停时触发|6.1|
|bindended|EventHandler||否|是|视频播放结束时触发|6.1|
|bindfullscreenchange|EventHandler||否|是|视频进入/退出全屏时触发，```event.detail = {fullScreen, direction}```|6.1|
|bindwaiting|EventHandler||否|是|视频出现缓冲时触发|6.1|
|bindtimeupdate|EventHandler||否|是|播放进度每250ms定时回调，```event.detail = {currentTime, duration}```|3.40|
|binderror|EventHandler||否|是|视频播放出错时触发，```event.detail = {errno, errString}```|6.1|
|bindseekcomplete|EventHandler||否|是|视频跳转完成时触发，```event.detail = {currentTime, duration}```|6.1|
|bindloadedmetadata|EventHandler||否|是|视频元数据加载完成时触发，```event.detail = {width, height, duration}```|6.1|
|bindcontrolstoggle|EventHandler||否|是|切换视频控件显示隐藏时触发，```event.detail = {show}```|6.1|
|binduseraction|EventHandler||否|是|用户操作事件，```event.detail = {tag, value}```|6.1|
|bindplaybackratechange|EventHandler||否|是|倍速播放回调，```event.detail = {playbackRate}```|6.1|
|bindmutechange|EventHandler||否|是|静音事件回调，```event.detail = {isMuted}```|6.1|
**Notice**：<md-alert>
  为了确保用户体验，当video组件的宽度较小时，部分控件将根据以下优先级策略进行隐藏（优先级较低的控件将首先被隐藏）：播放按钮 > 全屏按钮 > 静音按钮 > 播放时间 > 倍速按钮 > 下载按钮（仅适用于PC端）。

如果需要展示优先级较低的控件，可以尝试通过调整属性来隐藏优先级较高的控件。

## 参数说明

### object-fit 合法值
|值|说明|最低版本|
|--|----|--------|
|contain|长边对齐容器，短边内容补黑边|移动端3.39|
|fill|长、短边均对齐容器，内容拉伸|移动端3.39|
|cover|短边对齐容器，长边内容裁切|移动端3.39|

### direction 合法值
|值|说明|最低版本|
|--|----|-----|
|0|竖向|6.1|
|90|屏幕逆时针90度|6.1|
|-90|屏幕顺时针90度|6.1|

### play-btn-position 合法值
|值|说明|最低版本|
|--|----|-----|
|bottom|底部最左侧|3.41|
|center|画面居中|6.1|

### bindfullscreenchange
- ```fullScreen```为true时，```direction```有效值为```vertical```或```horizontal```
- ```fullScreen```为false时，无```direction```

```javascript 
enum Direction {
   vertical = 'vertical'
   horizontal = 'horizontal'
}

interface FullScreenChangeDetail {
   fullScreen: boolean;
   direction?: Direction;
}
``` 
### bindtimeupdate

```javascript 
interface TimeUpdateDetail {
    currentTime: number; // float类型
    duration: number; // float类型
}
``` 
### binderror
```javascript 
interface BindErrorDetail {
    errno: number;
    errString: string;
}
``` 
|errno|errString|含义|
|--|--|------|
|9003501|Unable to play. Video src is invalid|src不合法|
|9003502|Unable to play. Video src request failed|播放地址请求失败|
|9003503|Unable to play. DNS lookup failed|DNS解析错误|
|9003504|Unable to play. Video engine error|播放器内核错误|
|9003505|Unable to play. Network error|网络错误|

### bindseekcomplete

```javascript 
interface SeekCompleteDetail {
    currentTime: number; // float类型
    duration: number; // float类型
}
``` 

### bindloadedmetadata
```javascript 
interface LoadedMetaDataDetail {
    width: number; // Integer类型
    height: number; // Integer类型
    duration: number;  // float类型
}
``` 

### bindcontrolstoggle
```javascript 
interface ControlStoggleDetail {
    show: boolean;
}
``` 

### binduseraction
```javascript 
 enum UserActionTag {
    play = 'play',   // 如果播放，value为true；如果暂停，value是false。centerplay也相同
    centerplay = 'centerplay',
    mute = 'mute',    // 如果静音，value为true；如果取消静音，value是false
    fullscreen = 'fullscreen', // 如果全屏，value为true；如果非全屏，value是false
    retry = 'retry',    // 无value
    download = 'download', // 无value
    back = 'back',    // 无value
}

interface UserActionDetail {
    tag: UserActionTag;  // 用户交互的内容
    value?: boolean;  // 交互的结果
}
``` 

### bindplaybackratechange
```javascript 
interface PlaybackRateChange {
    playbackRate: number; // float类型
} 
``` 

### bindmutechange
```javascript 
interface MuteChangeDetail {
    isMuted: boolean;
}
``` 

## 示例代码

```html
<scroll-view class="page-body">
  <view class="page-body-wrapper">
    <video 
      id="myVideo"
      src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4bc8f1f99761a8ab242a337592ff7f9f_5w2XGfMSqs.mp4"
      title="{{title}}"
      show-snapshot-button="{{true}}"
      show-rate-btn="{{true}}"
      enable-progress-gesture="{{true}}"
      bindplay="bindPlay"
      bindpause="bindPause"
      binderror="bindError"
      bindtimeupdate="bindTimeUpdate"
      bindloadedmetadata="bindLoadedMetaData"
    />
    <view class="btn-area">
      <button bindtap="play" type="primary">{{play}}</button>
      <button bindtap="pause" type="primary">{{pause}}</button>
      <button bindtap="stopVideo" type="primary">{{stop_video}}</button>
      <button bindtap="enterFullScreen" type="primary">{{enter_fullscreen}}</button> 
    </view>
    <view class="btn-area">
      <input type="number" class="input-bg" bindinput="getSeekPosition" placeholder="{{seek_position}}"/>
      <button bindtap="seek" type="primary">{{seek}}</button>
    </view>
    <view class="btn-area">
      <input class="input-bg" bindinput="getPlaySpeed" placeholder="{{speed}}"/>
      <button bindtap="setPlaySpeed" type="primary">{{play_speed}}</button>
    </view>
  </view>
</scroll-view>

```

```js
import i18n from '../../../i18n/index';
const video = i18n.video_component;

Page({
  data: {
    ...video,
    seekPosition: 0,
    playSpeed: 1
  },
  onReady: function() {
    this.videoContext = tt.createVideoContext('myVideo')
    console.log(this.data.play);
  },

play: function() {
    this.videoContext.play();
  },

pause: function() {
    this.videoContext.pause();
  },

stopVideo: function() {
    this.videoContext.stop();
  },

enterFullScreen: function() {
    this.videoContext.requestFullScreen();
  },

getSeekPosition: function(e) {
    const position = parseInt(e.detail.value ?? 0);
    this.setData({
      seekPosition: position
    });
  },

seek: function() {
    this.videoContext.seek(this.data.seekPosition);
  },

getPlaySpeed: function(e) {
    const speed = parseFloat(e.detail.value ?? 1);
    this.setData({
      playSpeed: speed
    });
  },

setPlaySpeed: function() {
    this.videoContext.playbackRate(this.data.playSpeed);
  },

bindPlay: function() {
    console.log('video play');
  },

bindPause: function() {
    console.log('video pause');
  },

bindTimeUpdate: function(e) {
    console.log(`video timeupdate currentTime: ${e.detail.currentTime}, duration: ${e.detail.duration}`);
  },

bindLoadedMetaData: function(e) {
    console.log(`video loadedmetadata width: ${e.detail.width}, height: ${e.detail.height}, duration: ${e.detail.duration}`);
  },

bindError: function(e) {
    console.log('video error message: ', e.detail);
  }
})
```

```css
.input-bg {
  border: 2rpx solid lightgray;
  background-color: white;
}
```

```json
{
    "navigationBarTitleText": "video"
}
```
