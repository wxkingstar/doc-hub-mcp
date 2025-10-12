---
title: "customized-input"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/customized-input
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646733934000
---
最后更新于 2022-03-08

# customized-input

自定义输入框，支持@功能，@功能支持搜索功能，支持插入其他元素。 
**飞书3.14版本开始支持**，**目前仅PC端支持** 
@功能中的搜索功能需要先调用tt.login()接口，登录成功后才能使用

|属性名|类型|默认值|说明|
|----|----|-----|---|
|data|Object||输入框加载时展示的数据|
|enableRemind|Boolean|true|控制是否开启@选人能力|
|showReminder|Boolean|false|设置为true时会在当前光标位置插入@符号并调起@人列表|
|showReminderAvatar|Boolean|false|展示被@人时是否显示头像|
|placeholder|String||输入框为空时显示的文字|
|placeholderStyle|String||输入框为空时显示的文字样式|
|disabled|Boolean|false|是否禁用|
|focus|Boolean|false|获取焦点|
|bindinput|EventHandler||输入框内容改变时触发，event.detail = {text: '', reminders:[{id:'',offset:0}]}|
|bindconfirm|EventHandler||键盘敲击**Enter**键时触发|
|binddelete|EventHandler||当输入框中内容为空时，继续删除时触发|
|bindfocus|EventHandler||输入框聚焦时触发|
|bindblur|EventHandler||输入框失去聚焦时触发|
|reminderSuggestions|Array<reminderSuggestion>||输入@时所展示的自定义推荐reminder的信息列表。飞书4.0 版本支持。

## data

|属性名|类型|默认值|说明|
|----|----|-----|---|
|text|String||输入框中的文本内容|
|reminders|Array<Reminder>||输入框中的@人相关内容|

## Reminder
>  在设置data属性中的reminders时，id、name、offset为必填参数，avatar为选填参数
>  
>  bindinput事件触发时，reminders中包含id、offset参数，name & avatar信息需要申请 **获取用户基本信息** 权限 才会返回

|属性名|类型|默认值|说明|
|----|----|-----|---|
|id|String||对应reminder的openId|
|name|String||对应reminder的name|
|avatar|String||当showReminderAvatar为true时，需要传入对应reminder的头像url|
|offset|Number||reminder在文本内容中的插入位置|

## reminderSuggestion
>  id、name、avatarUrl、departmentName均为必填参数

|属性名|类型|默认值|说明|
|----|----|-----|---|
|id|String||reminder的openId|
|name|String||reminder的name|
|avatarUrl|String||reminder的图像url|
|departmentName|String||reminder所在的部门名称|

## 示例代码

```html
<customized-input 
	class="todo" 
	showReminder="{{showReminder}}" 
	focus="{{true}}" 
	disabled="{{false}}" 
	bind:blur="handleBlur" 
	bind:focus="handleFocus" 
	placeholderStyle="color:grey;" 
	placeholder="请输入"
	bind:input="handleDataUpdate" 
	data="{{todo}}" 
	showReminderAvatar="{{true}}"
	reminderSuggestions="{{reminderSuggestions}}"
>
  <view tt:if="{{showTime}}" bind:tap="setTime" class="time">5月11日 周三</view>
</customized-input>
```
```css
.todo {
  font-size: 16px;
  display: block;
  color: blue;
  background-color: gold;
  font-family: 'Courier New', Courier, monospace;
}
```
```js
Page({
  data: {
    todo: {
      text: '12123451',
      reminders:[{
        id: "xxxx",
        name: "小明",
        avatar: "http://xxx",
        offset: 2
      }, {
        id: 'xxxx',
        name: '小王',
        avatar: "http://xxx",
        offset: 7
      }]
    },
    showTime: false,
    showInput: true,
    reminderSuggestions: [{
      id: '*******',
      name: 'zhang 3',
      avatarUrl: 'https://xxxxxxxxxxxx',
      departmentName: 'xxx'
    }]
  },
  onLoad: function () {
    console.log('Welcome to Mini App')
    tt.login({
      success: function(res) {
        if(res.code) {
          console.log('success', res.code);
        } else {
          console.log(res.errMsg)
        }
      }
    })
  },
  handleDataUpdate(e) {
    console.log('handleDataUpdate', e);
  },
  setTime(e) {
    console.log('setTime', e);
  },
  insertTime(e) {
    this.setData({showTime: !this.data.showTime});
  },
  handleEnterKeyPress(e) {
    console.log('handleEnterKeyPress', e);
  },
  handleDeleteInput(e) {
    this.setData({showInput: false});
  }
})
```
