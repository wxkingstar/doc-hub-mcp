---
title: "CustomizedInput.onPublish"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/customized-input/customizedinput/onpublish
last_remote_update: 2025-07-04
last_remote_update_timestamp: 1751618838000
---
最后更新于 2025-07-04

# CustomizedInput.onPublish(function callback)

点击发送按钮触发的事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.47.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 | \- | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
content | string | 文本内容
userModelSelect | string | 头像右侧 pickerView 当前选中值
at | object[] | @选择联系人列表
&emsp;  
                    ∟  
                &nbsp;  
                    id | string | 标识联系人的openID
&emsp;  
                    ∟  
                &nbsp;  
                    name | string | 联系人名字  
**Notice**：已知问题：  
- Android 设备返回“@联系人名字”  
**示例值**：@tom  
- iOS设备返回“联系人名字”  
**示例值**：tom
&emsp;  
                    ∟  
                &nbsp;  
                    offset | number | @联系人所占文本在文本内容中的位置
&emsp;  
                    ∟  
                &nbsp;  
                    length | number | @联系人 所占文本长度
picture | string[] | 图片地址列表，目前只支持传入一个图片

## 示例代码
**Notice**：显示输入框参考：[customizedInput.show](https://open.feishu.cn/document/uYjL24iN/uADN1EjLwQTNx4CM0UTM/customizedinput/show)

```js
//customizedInput通过tt.getCustomizedInput()获取，并且和show方法公用一个对象实例

customizedInput.onPublish(function(res) {
    console.log(JSON.stringify(res));
});
```

回调函数返回对象示例：

```json
{
    "at": [
        {
            "id": "xxx",
            "name": "@Jiasheng Wu",
            "offset": 1,
            "length": 12
        },
        {
            "id": "xxx",
            "name": "@Zhiyou Hou",
            "offset": 14,
            "length": 11
        }
    ],
    "content": " @Jiasheng Wu @Zhiyou Hou "
}
```
