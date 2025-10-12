---
title: "IAddFieldConfig"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/iaddfieldconfig
---
最后更新于 2023-09-15

# IAddFieldConfig
相关api：[table.addField](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/api/table/table_addfield)。<br>
新增字段相关类型，为以下类型之一:

0. 基础类型，以下类型均继承IBaseFieldConfig
```js
/** 修改/设置字段属性的基础类型 */
interface IBaseFieldConfig {
    name?: string;
    description?: {
        content?: IFieldDescriptionContent;
        /** 是否禁止同步，如果为true，表示禁止同步该描述内容到表单的问题描述（只在新增、修改字段时生效）; 默认false */
        disableSyncToFormDesc?: boolean;
    };
}

type IFieldDescriptionContent = null | string | (IOpenTextSegment | IOpenUrlSegment | IFieldDescDocumentMentionConfig)[];

interface IFieldDescDocumentMentionConfig {
    /** 传入的url为feishu文档类型将会被自动解析 */
    type: IOpenSegmentType.Mention;
    link: string;
    text?: string;
}

```

<br><br><br>
1. 多行文本：`ITextFieldConfig`。

```js
interface ITextFieldConfig extends IBaseFieldConfig{
	type: FieldType.Text,
	name:string,
}
```

2. 数字：`INumberFieldConfig`。

```js
interface INumberFieldConfig extends IBaseFieldConfig{
	type: FieldType.Number,
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

3. 日期：`IDateTimeFieldConfig`。

```js
interface IDateTimeFieldConfig extends IBaseFieldConfig{
    type: FieldType.DateTime;
    property?: {
        dateFormat?: DateFormatter;
        displayTimeZone?: boolean;
        autoFill?: boolean
    };
}

enum DateFormatter {
    DATE_YMD_WITH_SLASH = "yyyy/MM/dd",
    DATE_TIME = "yyyy/MM/dd HH:mm",
    DATE_TIME_WITH_HYPHEN = "yyyy-MM-dd HH:mm",
    DATE_YMD_WITH_HYPHEN = "yyyy-MM-dd",
    DATE_MD_WITH_HYPHEN = "MM-dd",
    DATE_MMDD_WITH_SLASH = "MM/dd/yyyy",
    DATE_DDMM_WITH_SLASH = "dd/MM/yyyy"
}

```

4. 创建时间：`ICreatedTimeFieldConfig`。

```js
interface ICreatedTimeFieldConfig extends IBaseFieldConfig{
	type: FieldType.CreatedTime,
    property?: {
        dateFormat?: DateFormatter;
        displayTimeZone?: boolean;
        autoFill?: boolean
    };
}

enum DateFormatter {
    DATE_YMD_WITH_SLASH = "yyyy/MM/dd",
    DATE_TIME = "yyyy/MM/dd HH:mm",
    DATE_TIME_WITH_HYPHEN = "yyyy-MM-dd HH:mm",
    DATE_YMD_WITH_HYPHEN = "yyyy-MM-dd",
    DATE_MD_WITH_HYPHEN = "MM-dd",
    DATE_MMDD_WITH_SLASH = "MM/dd/yyyy",
    DATE_DDMM_WITH_SLASH = "dd/MM/yyyy"
}
```

5. 最后更新时间：`IModifiedTimeFieldConfig`。

```js
interface IModifiedTimeFieldConfig extends IBaseFieldConfig{
	type: FieldType.ModifiedTime,
    property?: {
        dateFormat?: DateFormatter;
        displayTimeZone?: boolean;
        autoFill?: boolean
    };
}

enum DateFormatter {
    DATE_YMD_WITH_SLASH = "yyyy/MM/dd",
    DATE_TIME = "yyyy/MM/dd HH:mm",
    DATE_TIME_WITH_HYPHEN = "yyyy-MM-dd HH:mm",
    DATE_YMD_WITH_HYPHEN = "yyyy-MM-dd",
    DATE_MD_WITH_HYPHEN = "MM-dd",
    DATE_MMDD_WITH_SLASH = "MM/dd/yyyy",
    DATE_DDMM_WITH_SLASH = "dd/MM/yyyy"
}
```

6. 单选/多选：`ISelectFieldConfig`。

```js
interface ISelectFieldConfig extends IBaseFieldConfig{
	type: FieldType.SingleSelect |FieldType.MultiSelect,
	name:string,
	property: {
        options: {
            name?: string;
            id?: string;
            color?: number;
        }[];
        optionsType?: SelectOptionsType;
    }
}
```

7. 附件：`IAttachmentFieldConfig`。

```js
interface IAttachmentFieldConfig extends IBaseFieldConfig{
	type: FieldType.Attachment,
	name:string,
    property?: {
		onlyMobile?:boolean
	}
}
```

8. 单向关联：`ISingleLinkFieldConfig`。

```js
interface ISingleLinkFieldConfig extends IBaseFieldConfig{
	type: FieldType.SingleLink,
	name:string,
	property?: {
    	tableId: string;
  		multiple?: boolean;
	}
}
```

9. 双向关联：`IDuplexLinkFieldConfig`。

```js
interface IDuplexLinkFieldConfig extends IBaseFieldConfig{
  type: FieldType. DuplexLink,
  name: string,
  property: {
          tableId: string;
          multiple?: boolean;
      };
}
```

10. 复选框：`ICheckboxConfig`。

```js
interface ICheckboxConfig extends IBaseFieldConfig{
	type: FieldType.Checkbox,
	name:string,
}
```

11. 人员：`IUserFieldConfig`。

```js
interface IUserFieldConfig extends IBaseFieldConfig{
	type: FieldType.User,
	name:string,
	property?: {
    multiple?: boolean;
	}
}
```

12. 创建人：`ICreatedUserFieldConfig`。

```js
interface ICreatedUserFieldConfig extends IBaseFieldConfig{
	type: FieldType.CreatedUser,
	name:string,
}
```

13. 修改人：`IModifiedUserFieldConfig`。

```js
interface IModifiedUserFieldConfig extends IBaseFieldConfig{
	type: FieldType.ModifiedUser,
	name:string,
}
```

14. 公式：`IFormulaFieldConfig`。

```js
interface IFormulaFieldConfig extends IBaseFieldConfig{
	type: FieldType.Formula,
	name:string,
}
```

15. 超链接：`IUrlFieldConfig`。

```js
interface IUrlFieldConfig extends IBaseFieldConfig{
	type: FieldType.Url,
	name:string,
}
```

16. 电话号码：`IPhoneFieldConfig`。

```js
interface IPhoneFieldConfig extends IBaseFieldConfig{
	type: FieldType.Phone,
	name:string,
}
```

17. 地理位置：`ILocationFieldConfig`。

```js
interface ILocationFieldConfig extends IBaseFieldConfig{
	type: FieldType.Location,
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

18. 群组：`IGroupChatFieldConfig`。

```js
interface IGroupChatFieldConfig extends IBaseFieldConfig{
	type: FieldType.GroupChat,
	name:string,
	property?: {
    multiple?: boolean;
	}
}
```

19. 自动编号：`IAutoNumberFieldConfig`。

```js
interface IAutoNumberFieldConfig extends IBaseFieldConfig{
	type: FieldType.AutoNumber,
	name:string,
}
```

20. 条码：`IBarcodeFieldConfig`。

```js
interface IBarcodeFieldConfig extends IBaseFieldConfig{
	type: FieldType.Barcode,
	name:string,
    property?: {
		onlyMobile?:boolean
	}
}
```

21. 进度：`IRatingFieldConfig`。

```js
interface IRatingFieldConfig extends IBaseFieldConfig{
        type: FieldType.Rating,
        name:string,
        property:{
        min: number;
        max: number;
        rating: {
            icon: RatingIconType;
        };
    }
}

enum RatingIconType {
    STAR = "star",
    HEART = "heart",
    THUMBSUP = "thumbsup",
    FIRE = "fire",
    SMILE = "smile",
    LIGHTNING = "lightning",
    FLOWER = "flower",
    NUMBER = "number"
}
```

22. 货币：`ICurrencyFieldConfig`。

```js
interface ICurrencyFieldConfig extends IBaseFieldConfig{
        type: FieldType.Currency,
        name:string,
        property?:{
        decimalDigits?: number;
        currencyCode?: CurrencyCode;
    }
}

enum CurrencyCode {
    CNY = "CNY",
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    AED = "AED",
    AUD = "AUD",
    BRL = "BRL",
    CAD = "CAD",
    CHF = "CHF",
    HKD = "HKD",
    INR = "INR",
    IDR = "IDR",
    JPY = "JPY",
    KRW = "KRW",
    MOP = "MOP",
    MXN = "MXN",
    MYR = "MYR",
    PHP = "PHP",
    PLN = "PLN",
    RUB = "RUB",
    SGD = "SGD",
    THB = "THB",
    TRY = "TRY",
    TWD = "TWD",
    VND = "VND"
}
```

23. 评分：`IRatingFieldConfig`。

```js
interface IRatingFieldConfig extends IBaseFieldConfig{
	type: FieldType.Rating,
	name:string
}
```

24. 查找引用：`ILookupFieldConfig`。

```js
interface ILookupFieldConfig extends IBaseFieldConfig{
	type: FieldType.Lookup,
	name:string,
}
```
