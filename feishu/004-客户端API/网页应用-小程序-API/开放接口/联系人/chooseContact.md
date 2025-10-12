---
title: "chooseContact"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/contact/choosecontact
---
最后更新于 2025-04-15

# chooseContact(Object object)

chooseContact(Object object) 用于打开用户的联系人选择列表，可以选择用户或部门，并返回选定用户或部门的信息。

## 注意事项

- 小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )。
- 网页应用需要在[鉴权](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)后调用该接口。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-contact%2Fchoose-contact)
网页应用 | V5.7.0+ | V5.7.0+ | V5.7.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
multi | boolean | 否 | true | 是否支持多选联系人。取值：  
- true：支持  
- false：不支持
ignore | boolean | 否 | false | 选择列表中是否排除自己（当前登录用户）。取值：  
- true：排除  
- false：不排除
maxNum | number | 否 | \- | 多选联系人时，最大选人数量。  
**Notice**：**注意**：  
- 飞书 [V3.15.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。  
- 需要 `multi` 字段取值为 `true`，`maxNum` 可设置的数量没有限制，不传值时默认支持任意多选。
limitTips | string | 否 | \- | 达到选人上限时的提示文案。示例值：已达数量上限。  
**Notice**：**注意**：飞书 [V3.15.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。
externalContact | boolean | 否 | true | 选择联系人列表中，是否包含外部联系人。取值：  
- true：包含  
- false：不包含  
**Notice**：**注意**：飞书 [V3.30.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。  
- Harmony 端：暂不支持使用。
enableChooseDepartment | boolean | 否 | false | 是否支持选择部门。取值：  
- true：支持  
- false：不支持  
**Notice**：**注意**：飞书 [V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。  
- Harmony 端：暂不支持使用。
chosenIds | string[] | 否 |  | 指定要选取的联系人 open_id 数组。  
- 可设置多个，无数量限制，格式为`["ou_xxx", "ou_yyy"]`。  
- 用户 Open ID 的获取方式，可参见[如何获取不同的用户 ID](https://open.feishu.cn/document/home/user-identity-introduction/open-id)。  
- 当 `multi` 取值 `false` 时，该字段不生效。  
**Notice**：**注意**：飞书 [V3.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。
disableChosenIds | string[] | 否 |  | 通过该字段指定联系人 open_id 数组后，相对应的联系人在列表内将处于置灰、不可选择的状态。  
- 可设置多个，无数量限制，格式为`["ou_xxx", "ou_yyy"]`。  
- 用户 Open ID 的获取方式，可参见[如何获取不同的用户 ID](https://open.feishu.cn/document/home/user-identity-introduction/open-id)。  
- 当 `multi` 取值 `false` 时，该字段不生效。  
**Notice**：**注意**：飞书 [V3.15.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该能力。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
data | user[] | 选择用户后，返回选中用户的信息。
&emsp;  
                    ∟  
                &nbsp;  
                    openId | string | 用户的 open_id。关于用户 ID 的说明，可参见[如何选择使用哪种 ID](https://open.feishu.cn/document/home/user-identity-introduction/user-id)。
&emsp;  
                    ∟  
                &nbsp;  
                    unionId | string | 用户的 union_id。关于用户 ID 的说明，可参见[如何选择使用哪种 ID](https://open.feishu.cn/document/home/user-identity-introduction/user-id)。  
**Notice**：**注意**：飞书 [V5.4.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该输出字段。
&emsp;  
                    ∟  
                &nbsp;  
                    name | string | 用户姓名。  
**字段权限要求**：  
获取用户基本信息(contact:user.base:readonly)
&emsp;  
                    ∟  
                &nbsp;  
                    i18nNames | object | 国际化姓名。  
**字段权限要求**：  
获取用户基本信息(contact:user.base:readonly)  
**Notice**：**注意**：飞书 [V3.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该输出字段。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    zh_cn | string | 中文名，可能为空。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    en_us | string | 英文名，可能为空。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    ja_jp | string | 日文名，可能为空。
&emsp;  
                    ∟  
                &nbsp;  
                    avatarUrls | string[] | 联系人的头像 URL 数组，包含多种图片分辨率。  
**字段权限要求**：  
获取用户基本信息(contact:user.base:readonly)  
**Notice**：**注意**：飞书 [V3.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该输出字段。
department_data | department[] | 选择部门后，返回选中部门的信息。  
**Notice**：**注意**：飞书 [V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该输出字段。
&emsp;  
                    ∟  
                &nbsp;  
                    departmentId | string | 部门 departmentId，只作为唯一标识，不能用来请求 Open API。关于部门 ID 的说明，可参见[部门资源介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。
&emsp;  
                    ∟  
                &nbsp;  
                    openDepartmentId | string | 部门 openDepartmentId，可以用来请求 Open API。关于部门 ID 的说明，可参见[部门资源介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。  
**Notice**：**注意**：飞书 [V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该输出字段。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-contact%2Fchoose-contact)

</div> 

```js
tt.chooseContact({
    multi: true,
    ignore: false,
    maxNum: 10,
    limitTips: "选择人数达到上限了",
    externalContact: true,
    enableChooseDepartment: true,
    disableChosenIds: [
        "ou_7dab8a3d3cdcc9da365777c7ad53xxxx"
    ],
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`chooseContact fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "data": [
        {
            "avatarUrls": [
                "https://s3-imfile.feishucdn.com/static-resource/v1/v2_92c4fbb9-6706-439c-9d20-3b474af0xxxx~?image_size=72x72&cut_type=&quality=&format=png&sticker_format=.webp",
                "https://s3-imfile.feishucdn.com/static-resource/v1/v2_92c4fbb9-6706-439c-9d20-3b474af0xxxx~?image_size=240x240&cut_type=&quality=&format=png&sticker_format=.webp",
                "https://s3-imfile.feishucdn.com/static-resource/v1/v2_92c4fbb9-6706-439c-9d20-3b474af0xxxx~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp",
                "https://s1-imfile.feishucdn.com/static-resource/v1/v2_92c4fbb9-6706-439c-9d20-3b474af0xxxx~?image_size=640x640&cut_type=&quality=&format=png&sticker_format=.webp"
            ],
            "name": "汤姆",
            "openId": "ou_de627cfb342ed0aaa380fbf0785cxxxx",
            "unionId": "on_cad4860e7af114fb4ff6c5d496d1xxxx",
            "i18nNames": {
                "en_us": "Tom",
                "ja_jp": "",
                "zh_cn": "汤姆"
            }
        }
    ],
    "department_data": [],
    "errMsg": "chooseContact:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
