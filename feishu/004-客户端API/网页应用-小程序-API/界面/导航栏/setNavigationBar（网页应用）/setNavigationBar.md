---
title: "setNavigationBar"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/navigation/a/setnavigationbar
last_remote_update: 2025-04-24
last_remote_update_timestamp: 1745488862000
---
最后更新于 2025-04-24

# setNavigationBar(Object object)

自定义导航栏左侧和右侧的按钮（如“返回”、“确定”），并可以监听这些按钮的点击事件，从而处理业务需要的逻辑（如“返回前的用户确认”或“重定向到指定的页面”）。
**Notice**：注意事项：
- 设置左侧按钮后，需要主动监听 [onLeftNavigationBarClick](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/onleftnavigationbarclick) 处理点击事件
- 设置右侧按钮后，需要主动监听 [onRightNavigationBarClick](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/onrightnavigationbarclick) 处理点击事件
- PC 只支持设置图片按钮
- 页面跳转后 Android 默认重置导航栏按钮
- 自定义导航栏针对的是页面配置，由于单页应用是所有页面都共用同一个页面容器，所以在其中一个子页面上设置，对于整个应用都会生效，如果开发者需要每个子页面自定义不同的按钮，就需要在每个子页面上都调用setNavigationBar从而保证页面直接不回相互影响

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **X** | **X** | **X** | **X** | /
网页应用 | V5.3.0+ | V5.3.0+ | V5.3.0+ | V7.41.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
left | object | 否 |  | 导航栏左侧设置，最多只支持两个按钮设置，即 items.length <= 2
&emsp;  
∟  
&nbsp;  
items | object[] | 是 |  | item 数组来控制导航栏左侧的显示，数组长度为 0：android 清空对应方位导航栏设置, iOS 默认保留系统返回按钮
&emsp;&emsp;  
∟  
&nbsp;  
id | string | 是 |  | item 的标志，当 item 被点击后，将触发 tt.onLeftNavigationBarClick({id:string} => {}) 监听
&emsp;&emsp;  
∟  
&nbsp;  
text | string | 否 |  | 控制显示文本，空字符串表示不显示文本( PC 端不支持此字段)  
**Notice**：
&emsp;&emsp;  
∟  
&nbsp;  
imageBase64 | string | 否 |  | 控制是否显示 icon，字符串长度不能超过 10240，支持字符前缀是data:image/png;base64,、data:image/jpg;base64,、data:image/x-icon;base64,  
<md-alert>  
imageBase64 和 text 不可同时为空,至少设置其中一个
right | object | 否 |  | 导航栏右侧设置，最多只支持两个按钮设置，即 items.length <= 2
&emsp;  
∟  
&nbsp;  
items | object[] | 是 |  | item 数组来控制导航栏右侧的显示，数组长度为 0 则清空对应方位导航栏设置
&emsp;&emsp;  
∟  
&nbsp;  
id | string | 是 |  | item 的标志，当 item 被点击后，将触发 tt.onRightNavigationBarClick({id:string} => {}) 监听
&emsp;&emsp;  
∟  
&nbsp;  
text | string | 否 |  | 控制显示文本，空字符串表示不显示文本( PC 端不支持此字段)  
**Notice**：
&emsp;&emsp;  
∟  
&nbsp;  
imageBase64 | string | 否 |  | 控制是否显示 icon，字符串长度不能超过 10240，支持字符前缀是data:image/png;base64,、data:image/jpg;base64,、data:image/x-icon;base64,  
<md-alert>  
imageBase64 和 text 不可同时为空,至少设置其中一个
autoResetNavigationBar | boolean | 否 |  | 页面发生跳转后是否重置导航栏设置，设置为 false 可能会影响跳转后页面导航栏的点击事件  
**Notice**：
iosRightItemsFlipped | boolean | 否 |  | 此参数用于修复当按钮个数大于1时iOS和安卓显示顺序不一致的问题，默认值**false**,右侧按钮数量大于1个时，iOS默认显示数组逆序，设置此参数为**true**后iOS按钮显示顺序和数组顺序一致，使用此参数无版本限制,支持所有版本。  
<md-alert>  
[请使用最新版本jssdk](https://open.feishu.cn/document/uYjL24iN/uMTMuMTMuMTM/introduction)

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.setNavigationBar({
    left:{
        items: [
            // 显示图片
            {id: "left_one", text: "left_xxx", imageBase64:"iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADn0lEQVRoge3ZS2hcVRzH8U/SakxSjSLUViWtqLFIqWgtYmPdRBGsiAsXLoSKBR9YofhYaFGsIijiwroSX9CFFFwoCuIDRFARg4IUS7W+KqKt+KzYqk3HcXGScOfcO3PvzL0zCdgvHMjJnPM7v3Pvef4vRznK/5u+CnXOw+W4ECtwOhahhl/xC3bhQ7yPj1GvqP2OGcS9+Fow007agy1Y0nPXCfrwgfbNJ9NBPIKRHnufZY0wTMp0oo4fMNFj77M8I4zz7diIdRjDsDDMThM6ugk7cEh2J2rYqqK5uQTj2ICH8AImhcl4XFR2GMe2oX0CbsF3sjvyNPo7Nb4K+5sIz6SlnYpHDApPfCqjjeeUeBOrsS9DdCadW8Z1Bpfg+4x27iojugxfZYjWsbaMcBPOxN6onSlc2qngycLEzOrA+pJmm3EGfo7a2qO9+TXLE5oPoesrMNuMCRyJ2rtz+rc1eBz35YmcisORyCf4d/rvTVW7jngyavsAvkjkV+cJbIkEfhOG1A1Cx3KfQEkukL0y1fFRXuU+6bPNA4nfJ3B/tX4RDn93CHtNqyX8pjyhlVGFGkajMsdU5TrBOcLaHw/dZPoDx+cJ3R5VeqcLZlsxim3CIS/uwFNFBHZElbZ2xWY+i/Ewfk94yZ28hAtHsgNXdslgUUZwD14rWiE+Qqzsjq/u8ZfGDiyeWzutyTqyHilQZt6wMON/U1F+qBdGmjAsBAhmOIjP8ip9qnEIXdYVa8VYH3l5MS6QNTx2R/lV1fsqzFiU3xkXyOrArig/l29gPMq/V6TSxRpf2z84sVpfhRjSuIkdkr6LZ9IvfScudbXrkI1yxn8rtkWV9+vtajSIbyMPV7UjMCp9KnywWo8teSxq+3MsaFdku/RcKHSYKsk66UjfdZ0ILRPO30mhvbobjD0LP0ZtvqlEfOjmSKwubHSnFKzfTjRhuXQY54D0ZaptnpfuxDdCHKcV5+PVgm2MSz/5Gq7twG+KAbwRif+Ek5qUXyhc+g/j5RztITwq+wJ/W1njSQbwSkK82cV6hcYLUbPb3Ajulh3crenSvrNAiFJPSh9B+rFZOmy+QQjHjAmfnzbjdfydYXzm0n51N8wniTe05Xi7iaF20ls4u9vms1gr7BGdGt+tw3W+Sm7Vnuk/8RKuUPJrTFWfWeFZ3JjI7xO+exHmxpfTaRLvCm9tXjGgcQXKDQHOR5YKT72Oi+bYS8eMC8vkork2UoZretXQf4MZqV9JCxyjAAAAAElFTkSuQmCC" },
            // 显示文本
            {id: "left_two", text: "left_xxx"}
        ]            
    } ,
    right:{
        items: [
            // 显示图片
            {id: "right_one", text: "right_xxx", imageBase64:"iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADn0lEQVRoge3ZS2hcVRzH8U/SakxSjSLUViWtqLFIqWgtYmPdRBGsiAsXLoSKBR9YofhYaFGsIijiwroSX9CFFFwoCuIDRFARg4IUS7W+KqKt+KzYqk3HcXGScOfcO3PvzL0zCdgvHMjJnPM7v3Pvef4vRznK/5u+CnXOw+W4ECtwOhahhl/xC3bhQ7yPj1GvqP2OGcS9+Fow007agy1Y0nPXCfrwgfbNJ9NBPIKRHnufZY0wTMp0oo4fMNFj77M8I4zz7diIdRjDsDDMThM6ugk7cEh2J2rYqqK5uQTj2ICH8AImhcl4XFR2GMe2oX0CbsF3sjvyNPo7Nb4K+5sIz6SlnYpHDApPfCqjjeeUeBOrsS9DdCadW8Z1Bpfg+4x27iojugxfZYjWsbaMcBPOxN6onSlc2qngycLEzOrA+pJmm3EGfo7a2qO9+TXLE5oPoesrMNuMCRyJ2rtz+rc1eBz35YmcisORyCf4d/rvTVW7jngyavsAvkjkV+cJbIkEfhOG1A1Cx3KfQEkukL0y1fFRXuU+6bPNA4nfJ3B/tX4RDn93CHtNqyX8pjyhlVGFGkajMsdU5TrBOcLaHw/dZPoDx+cJ3R5VeqcLZlsxim3CIS/uwFNFBHZElbZ2xWY+i/Ewfk94yZ28hAtHsgNXdslgUUZwD14rWiE+Qqzsjq/u8ZfGDiyeWzutyTqyHilQZt6wMON/U1F+qBdGmjAsBAhmOIjP8ip9qnEIXdYVa8VYH3l5MS6QNTx2R/lV1fsqzFiU3xkXyOrArig/l29gPMq/V6TSxRpf2z84sVpfhRjSuIkdkr6LZ9IvfScudbXrkI1yxn8rtkWV9+vtajSIbyMPV7UjMCp9KnywWo8teSxq+3MsaFdku/RcKHSYKsk66UjfdZ0ILRPO30mhvbobjD0LP0ZtvqlEfOjmSKwubHSnFKzfTjRhuXQY54D0ZaptnpfuxDdCHKcV5+PVgm2MSz/5Gq7twG+KAbwRif+Ek5qUXyhc+g/j5RztITwq+wJ/W1njSQbwSkK82cV6hcYLUbPb3Ajulh3crenSvrNAiFJPSh9B+rFZOmy+QQjHjAmfnzbjdfydYXzm0n51N8wniTe05Xi7iaF20ls4u9vms1gr7BGdGt+tw3W+Sm7Vnuk/8RKuUPJrTFWfWeFZ3JjI7xO+exHmxpfTaRLvCm9tXjGgcQXKDQHOR5YKT72Oi+bYS8eMC8vkork2UoZretXQf4MZqV9JCxyjAAAAAElFTkSuQmCC" },
            // 显示文本
            {id: "right_two", text: "right_xxx"}
        ],
    },    
    // 页面发生跳转后是否重置导航栏设置
    autoResetNavigationBar: true,
    // 右侧按钮数量大于1后是否对iOS端进行逆序
    iosRightItemsFlipped: true,
    success(res) {
        console.log("success");
    },
    fail(err) {
        console.log(`${JSON.stringify(err)}`);
    }                 

});

tt.onLeftNavigationBarClick(ev => {
    alert(`你点击了左上角id 为 ${ev.id} 的按钮`)
})
tt.onRightNavigationBarClick(ev =>{
    alert(`你点击了右上角 id 为 ${ev.id} 的按钮`)
})
```

`success`返回对象示例：

```js
{
    "errMsg": "setNavigationBar:ok"
}
```
