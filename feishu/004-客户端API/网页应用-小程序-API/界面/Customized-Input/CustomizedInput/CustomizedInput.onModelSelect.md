---
title: "CustomizedInput.onModelSelect"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/customized-input/customizedinput/onmodelselect
last_remote_update: 2023-06-05
last_remote_update_timestamp: 1685952576000
---
最后更新于 2023-06-05

# CustomizedInput.onModelSelect(function callback)

选择pickerView之后触发的事件

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
**Notice**：显示输入框参考：[customizedInput.show](https://open.feishu.cn/document/uYjL24iN/uADN1EjLwQTNx4CM0UTM/customizedinput/show)

```js
//customizedInput通过tt.getCustomizedInput()获取，并且和show方法公用一个对象实例
customizedInput.onModelSelect({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`onModelSelect fail: ${JSON.stringify(res)}`);
    }
});
```
回调函数返回对象示例：

```json
{
    "userModelSelect": "anonymous",
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
