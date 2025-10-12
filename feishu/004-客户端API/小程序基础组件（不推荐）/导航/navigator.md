---
title: "navigator"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/navigator/navigator
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646733934000
---
最后更新于 2022-03-08

# navigator

页面链接。

|属性名|类型|默认值|说明|
|----|--|---|--|
|url|String||跳转地址|
|delta|Number||当 open-type 为 'navigateBack' 时有效，表示回退的层数|
|open-type|String|navigate|跳转方式，详情参见后面的说明|
|hover-class|String|navigator-hover|点击时的样式类|
|hover-start-time|Number|50|按住多长时间后出现点击状态，单位毫秒|
|hover-stay-time|Number|400|手指松开后点击状态保留时间，单位毫秒|
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态|
navigator-hover 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `<navigator/>` 的子节点背景色应为透明色

open-type取值范围：

|值|说明|
|--|----|
|navigate|对应 `tt.navigateTo`|
|redirect|对应 `tt.redirectTo`|
|switchTab|对应 `tt.switchTab`|
|navigateBack|对应 `tt.navigateBack`|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="btn-area">
      <navigator url="navigate?title=navigate" hover-class="navigator-hover">
        <button type="default">{{open_in_new_page}}</button>
      </navigator>
      <navigator url="redirect?title=redirect" redirect hover-class="other-navigator-hover">
        <button type="default">{{open_in_current_page}}</button>
      </navigator>
    </view>
  </view>

</view>
```

```js
const navigator = i18n.navigator
Page({
    data: {
        ...navigator
      },
})
```

```css
.navigator-hover button{
  background-color: #DEDEDE;
}
.other-navigator-hover button{
  background-color: #DEDEDE;
}
```

```json
{
    "navigationBarTitleText": "navigator"
}
```
