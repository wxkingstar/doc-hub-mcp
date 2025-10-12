---
title: "IOpenCellValue"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/iopencellvalue
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343260000
---
最后更新于 2023-07-26

# IOpenCellValue
单元格的值类型。不同类型字段的单元格使用不同格式的值，IOpenCellValue为以下类型的联合类型:
<br><br><br>
1. 空值：`null`
```js
null
```

2. 单选：`IOpenSingleSelect`
```js
/** 「单选」字段单元格类型 */
type IOpenSingleSelect = {
    id: string;
    text: string;
}
```

3. 多选：`IOpenMultiSelect`
```js
/** 「单选」字段单元格类型 */
type IOpenSingleSelect = {
    id: string;
    text: string;
};
/** 「多选」字段单元格类型 */
type IOpenMultiSelect = IOpenSingleSelect[];
```

4. 人员、创建人、修改人：`IOpenUser[]`
```js
/** 「人员」 / 「创建人」 / 「修改人」字段单元格类型 */
type IOpenUser = {
    /** 暂未支持 open_id 转换 */
    id: string;
    name?: string;
    en_name?: string;
    email?: string;
};
```

5. 日期、修改时间、创建时间、字段单元格类型，毫秒时间戳：`number`

6. 数字 字段单元格类型：`number`
7. 电话号码、自动编号：`string`
8. 复选框：`boolean`

8. 地理位置：`IOpenLocation`
```js
/** 「地理位置」字段单元格类型 */
type IOpenLocation = {
    address: string;
    adname: string;
    cityname: string;
    /** 完整地址 */
    full_address: string;
    /** "number,number" */
    location: string;
    /** 简短地址 */
    name: string;
    /** 省 */
    pname: string;
};
```
9. 多行文本：`IOpenSegment[]`
```js
/** 「多行文本」字段单元格类型 */
type IOpenSegment = IOpenTextSegment | IOpenUrlSegment | IOpenUserMentionSegment | IOpenDocumentMentionSegment;

/** 普通文本 */
type IOpenTextSegment = {
    type: IOpenSegmentType.Text;
    text: string;
};
/** 链接 */
type IOpenUrlSegment = {
    type: IOpenSegmentType.Url;
    text: string;
    link?: string;
};
/** 多行文本中「飞书云文档链接」或「@飞书成员」的类型 */
interface IOpenMentionSegment {
    type: IOpenSegmentType.Mention;
    mentionType: OpenMentionType;
    text: string;
    token: string;
}
/** 多行文本中「@飞书成员」的类型 */
interface IOpenUserMentionSegment extends IOpenMentionSegment {
    mentionType: 'User';
    name: string;
    en_name?: string;
}
/** 多行文本中「飞书云文档链接」的类型 */
interface IOpenDocumentMentionSegment extends IOpenMentionSegment {
    mentionType: Exclude<OpenMentionType, 'User'>;
    link: string;
}

```
10. 超链接：`IOpenUrlSegment[]`
```js
type IOpenUrlSegment = {
    type: IOpenSegmentType.Url;
    text: string;
    link?: string;
};
```
11. 单向关联、双向关联：`IOpenLink`
```js
/** 「单向关联」/「双向关联」字段单元格类型 */
type IOpenLink = {
    record_ids: string[];
    table_id: string;
    text: string;
    /** 暂时只支持 "text" */
    type: string;
};
```
12. 群组：`IOpenGroupChat[]`

```js
type IOpenGroupChat = {
    id: string;
    name: string;
    avatarUrl: string;
    en_name?: string;
    linkToken?: string;
};
```

13. 公式字段出值结果：`IOpenFormulaCellValue`
```js
type IOpenFormulaCellValue = IOpenFormulaProxyCellValue | IOpenFormulaFuncCellValue;

/** 字段单值 */
type IOpenSingleCellValue = IOpenSingleSelect | IOpenUser | IOpenTimestamp | IOpenNumber | IOpenCheckbox | IOpenAutoNumber | IOpenPhone | IOpenLocation | IOpenAttachment | IOpenSegment | IOpenUrlSegment | IOpenGroupChat | IOpenLink;
type IOpenFormulaProxyCellValue = IOpenSingleCellValue[] | null;
type IOpenFormulaFuncCellValue = IOpenSegment[] | number[] | number | string;
```

14. 附件: `IOpenAttachment[]`

```js
/** 「附件」字段单元格类型（多值） */
type IOpenAttachment = {
    name: string;
    size: number;
    type: string;
    token: string;
    timeStamp: number;
};
```
