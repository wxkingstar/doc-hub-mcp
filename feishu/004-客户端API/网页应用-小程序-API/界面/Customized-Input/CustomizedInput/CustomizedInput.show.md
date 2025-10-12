---
title: "CustomizedInput.show"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/customized-input/customizedinput/show
last_remote_update: 2025-07-04
last_remote_update_timestamp: 1751618802000
---
最后更新于 2025-07-04

# CustomizedInput.show(Object object)

显示输入框

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.47.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
content | string | 否 | \- | 文本内容  
**示例值**：@tom @jim
placeholder | string | 否 | \- | 描述文本内容预期值的提示信息  
**示例值**：reply：
userModelSelect | object | 否 | \- | 头像右侧pickerView，为空时不显示  
**示例值**：{items:['real name', 'anonymous'],data:'real name'}
&emsp;  
                    ∟  
                &nbsp;  
                    items | string[] | 是 | \- | pickerView可选择的值  
**示例值**：['real name', 'anonymous']
&emsp;  
                    ∟  
                &nbsp;  
                    data | string | 否 | items[0]的内容 | pickerView选中的值  
**示例值**：real name
avatar | string | 否 | \- | 头像图片地址，为空时不显示，当userModelSelect为空时也不显示  
**示例值**：https://www.byte.test.png  
**Notice**：飞书[V6.4.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持 ttfile 本地图片
at | object[] | 否 | \- | @选择联系人列表，为空时不显示  
**示例值**：[{id: 'xxx',name: 'tom',offset: 1,length: 12}]  
**Notice**：飞书[V3.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持
&emsp;  
                    ∟  
                &nbsp;  
                    id | string | 是 | \- | 标识联系人的openID  
**示例值**：ou_5aa316e5072c018ec1c14f0f6afeadxx
&emsp;  
                    ∟  
                &nbsp;  
                    name | string | 是 | \- | 联系人名字  
**示例值**：tom
&emsp;  
                    ∟  
                &nbsp;  
                    offset | number | 是 | \- | @联系人所占文本在文本内容中的位置  
**示例值**：2
&emsp;  
                    ∟  
                &nbsp;  
                    length | number | 是 | \- | @联系人 所占文本长度  
**示例值**：2  
**Notice**：已知问题：  
- 在 Android 设备上，length 最小值为 1  
- 在 iOS 设备上，length 最小值为 0
picture | string[] | 否 | \- | 图片地址列表，需传入 ttfile 本地文件，目前只支持传入一个图片  
**示例值**：[]
showEmoji | boolean | 否 | false | 是否显示表情面板  
**示例值**：false
enablesReturnKey | boolean | 否 | false | 内容为空是否允许发送  
**示例值**：false  
**Notice**：飞书[V3.7.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持

如需指定 at 参数，请在调用 CusomizedInput 相关 API 之前，确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )

## 输出
无

## 示例代码

```js
let params = {
          "picture": [],
          "at": [
              {
                  "id": "xxx",
                  "name": "Jiasheng Wu",
                  "offset": 1,
                  "length": 12
              },
              {
                  "id": "xxx",
                  "name": "Zhiyou Hou",
                  "offset": 14,
                  "length": 11
              }
          ],
          "userModelSelect": {
              "items": [
                  "real name",
                  "anonymous"
              ],
              "data": "real name"
          },
          "placeholder": "reply：",
          "content": " @Jiasheng Wu @Zhiyou Hou ",
          "avatar": "https://xxx.png",
          "showEmoji": true,
          "enablesReturnKey": true
      }
      let customizedInput = tt.getCustomizedInput();
      customizedInput.show(params);
```
