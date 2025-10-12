---
title: "CustomizedInput.onPicSelect"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/customized-input/customizedinput/onpicselect
---
最后更新于 2023-06-05

# CustomizedInput.onPicSelect(function callback)

监听连接成功的事件回调。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | 预览
网页应用 | **X** | **X** | **X** | /

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

```js
const customizedInput = tt.getCustomizedInput();
customizedInput.onPicSelect(function(res) {
    console.log(JSON.stringify(res));
});
```
