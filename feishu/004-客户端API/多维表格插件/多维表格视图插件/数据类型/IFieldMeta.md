---
title: "IFieldMeta"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/ifieldmeta
last_remote_update: 2023-09-15
last_remote_update_timestamp: 1694758528000
---
最后更新于 2023-09-15

# IFieldMeta
字段元信息。相关类型：[FieldType](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/fieldtype)。
<br><br><br>

0. 基础元信息

```js
 // 每种字段元信息略有不同，这是所有字段元信息公有的属性
 interface IBaseFieldMeta {
  id: string;
  type: FieldType;
  name: string;
  isPrimary: boolean; //该字段是否为
  description: {
      content: null | (IOpenTextSegment | IOpenUrlSegment | IOpenDocumentMentionSegment)[];
      /** 是否禁止同步，如果为true，表示禁止同步该描述内容到表单的问题描述（只在新增、修改字段时生效）; 默认false */
      disableSyncToFormDesc?: boolean;
    };
}

interface IDocumentMentionConfig {
  /** 传入的url为feishu文档类型将会被自动解析 */
  type: IOpenSegmentType.Mention;
  link: string;
  text?: string;
}
type IOpenDocumentMentionSegment = IDocumentMentionConfig

```

1. 多行文本：`ITextFieldMeta`。

```js
interface ITextFieldMeta extends IBaseFieldMeta{
	type: FieldType.Text,
	id:string,
	name:string,
}
```

2. 数字：`INumberFieldMeta`。

```js
interface ITextFieldMeta extends IBaseFieldMeta{
	type: FieldType.Number,
	id:string,
	name:string,
	property?: {
    /** 数字格式化方式 */
    formatter?: NumberFormatter;
	}
}

enum NumberFormatter {
    INTERGER = "0",
    DIGITAL_ROUNDED_1 = "0.0",
    DIGITAL_ROUNDED_2 = "0.00",
    DIGITAL_ROUNDED_3 = "0.000",
    DIGITAL_ROUNDED_4 = "0.0000",
    DIGITAL_THOUSANDS = "#,##0",
    DIGITAL_THOUSANDS_DECIMALS = "#,##0.00",
    PERCENTAGE_ROUNDED = "0%",
    PERCENTAGE = "0.00%"
}
```

3. 日期：`IDateTimeFieldMeta`。

```js
interface IDateTimeFieldMeta extends IBaseFieldMeta{
	type: FieldType.DateTime,
	id:string,
	name:string,
}
```

4. 创建时间：`ICreatedTimeFieldMeta`。

```js
interface ICreatedTimeFieldMeta extends IBaseFieldMeta{
	type: FieldType.CreatedTime,
	id:string,
	name:string,
}
```

5. 最后更新时间：`IModifiedTimeFieldMeta`。

```js
interface IModifiedTimeFieldMeta extends IBaseFieldMeta{
	type: FieldType.ModifiedTime,
	id:string,
	name:string,
}
```

6. 单选/多选：`ISelectFieldMeta`。

```js
interface ITextFieldMeta extends IBaseFieldMeta{
	type: FieldType.SingleSelect |FieldType.MultiSelect,
	id:string,
	name:string,
	property?: {
    options: ISelectFieldOption[];
	}
}

interface ISelectFieldOption {
    id: string;
    name: string;
    color: number;
}
```

7. 附件：`IAttachmentFieldMeta`。

```js
interface IAttachmentFieldMeta extends IBaseFieldMeta{
	type: FieldType.Attachment,
	id:string,
	name:string,
}
```

8. 单向关联：`ISingleLinkFieldMeta`。

```js
interface ISingleLinkFieldMeta extends IBaseFieldMeta{
	type: FieldType.SingleLink,
	id:string,
	name:string,
	property?: {
    tableId: string;
	}
}
```

9. 双向关联：`IDuplexLinkFieldMeta`。

```js
interface IDuplexLinkFieldMeta extends IBaseFieldMeta{
	type: FieldType.DuplexLink,
	id:string,
	name:string,
	property?: {
    tableId: string;
	}
}
```

10. 复选框：`ICheckboxMeta`。

```js
interface ICheckboxMeta extends IBaseFieldMeta{
	type: FieldType.Checkbox,
	id:string,
	name:string,
}
```

11. 人员：`IUserFieldMeta`。

```js
interface IUserFieldMeta extends IBaseFieldMeta{
	type: FieldType.User,
	id:string,
	name:string,
	property?: {
    multiple?: boolean;
	}
}
```

12. 创建人：`ICreatedUserFieldMeta`。

```js
interface ICreatedUserFieldMeta extends IBaseFieldMeta{
	type: FieldType.CreatedUser,
	id:string,
	name:string,
}
```

13. 修改人：`IModifiedUserFieldMeta`。

```js
interface IModifiedUserFieldMeta extends IBaseFieldMeta{
	type: FieldType.ModifiedUser,
	id:string,
	name:string,
}
```

14. 公式：`IFormulaFieldMeta`。

```js
interface IFormulaFieldMeta extends IBaseFieldMeta{
	type: FieldType.Formula,
	id:string,
	name:string,
}
```

15. 超链接：`IUrlFieldMeta`。

```js
interface IUrlFieldMeta extends IBaseFieldMeta{
	type: FieldType.Url,
	id:string,
	name:string,
}
```

16. 电话号码：`IPhoneFieldMeta`。

```js
interface IPhoneFieldMeta extends IBaseFieldMeta{
	type: FieldType.Phone,
	id:string,
	name:string,
}
```

17. 地理位置：`ILocationFieldMeta`。

```js
interface ILocationFieldMeta extends IBaseFieldMeta{
	type: FieldType.Location,
	id:string,
	name:string,
	property?: {
    inputType: ELocationInputType;
	}
}

enum ELocationInputType {
    ONLY_MOBILE = "ONLY_MOBILE",
    NOT_LIMIT = "NOT_LIMIT"
}
```

18. 群组：`IGroupChatFieldMeta`。

```js
interface IGroupChatFieldMeta extends IBaseFieldMeta{
	type: FieldType.GroupChat,
	id:string,
	name:string,
	property?: {
    multiple?: boolean;
	}
}
```

19. 自动编号：`IAutoNumberFieldMeta`。

```js
interface IAutoNumberFieldMeta extends IBaseFieldMeta{
	type: FieldType.AutoNumber,
	id:string,
	name:string,
}
```

20. 条码：`IBarcodeFieldMeta`。

```js
interface IBarcodeFieldMeta extends IBaseFieldMeta{
	type: FieldType.Barcode,
	id:string,
	name:string,
}
```

21. 进度：`IProgressFieldMeta`。

```js
interface IProgressFieldMeta extends IBaseFieldMeta{
	type: FieldType.Progress,
	id:string,
	name:string,
}
```

22. 货币：`ICurrencyFieldMeta`。

```js
interface ICurrencyFieldMeta extends IBaseFieldMeta{
	type: FieldType.Currency,
	id:string,
	name:string,
}
```

23. 评分：`IRatingFieldMeta`。

```js
interface IRatingFieldMeta extends IBaseFieldMeta{
	type: FieldType.Rating,
	id:string,
	name:string
}
```

24. 查找引用：`ILookupFieldMeta`。

```js
interface ILookupFieldMeta extends IBaseFieldMeta{
	type: FieldType.Lookup,
	id:string,
	name:string,
}
```
