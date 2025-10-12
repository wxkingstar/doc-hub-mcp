---
title: "IWidgetTable"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/iwidgettable
---
最后更新于 2023-07-26

# IWidgetTable
表格实例，类型如下:
```js
interface IWidgetTable{
    id:string;
    /** 获取表名 */
    getName(): Promise<string>;
    /** 添加字段 */
    addField(fieldConfig: IAddFieldConfig): Promise<IFieldRes>;
    /** 删除字段 */
    deleteField(fieldId: string): Promise<boolean>;
    /** 修改字段 */
    setField(fieldId: string, fieldConfig: ISetFieldConfig): Promise<IFieldRes>;
    /** 获取某个 field 元信息 */
    getFieldMetaById(fieldId: string): Promise<IFieldMeta>;
    /** 获取所有 field 元信息 */
    getFieldMetaList(): Promise<IFieldMeta[]>;
    /** 字段是否存在 */
    isFieldExist(fieldId: string): Promise<boolean>;
    /** 获取某个视图元信息 */
    getViewMetaById(viewId: string): Promise<ViewMeta>;
    /** 获取所有 视图 元信息 */
    getViewMetaList(): Promise<ViewMeta[]>;
    /** 视图是否存在 */
    isViewExist(viewId: string): Promise<boolean>;
    /** 通过 recordId 获取指定记录 */
    getRecordById(recordId: string): Promise<IRecordValues>;
    /** 获取表中所有记录 Id */
    getRecordIdList(): Promise<(string | undefined)[]>;
    /** 获取单元格值 */
    getCellValue(fieldId: string, recordId: string): Promise<IOpenCellValue>;
    /** 设置单元格的值 */
    setCellValue(fieldId: string, recordId: string, cellValue: IOpenCellValue): Promise<boolean>;
    /**获取 attachment 的 url*/
    getAttachmentUrl(token: string, fieldId?: string, recordId?: string): Promise<string>;
    /**批量获取指定单元格中的附件 url，通过 fieldId 和 recordId 指定附件所在的单元格*/
    getCellAttachmentUrls(tokens: string[], fieldId: string, recordId: string): Promise<string[]>;
    /** 增加一条记录 */
    addRecord(recordValues?: IRecordValues): Promise<IRecordRes>;
    /** 修改一条记录 */
    setRecord(recordId: string, recordValues?: IRecordValues): Promise<IRecordRes>;
    /** 删除一条记录 */
    deleteRecord(recordId: string): Promise<boolean>;
    /** 获取 cellValue 并转化为 string 格式 */
    getCellString(fieldId: string, recordId: string): Promise<string>;

/** 获取字段列表 */
    getFieldList(): Promise<IWidgetField[]>;

/** 根据字段 id 获取字段 */
    getFieldById(fieldId: string): Promise<IWidgetField>;
    /** 根据字段名称获取字段 */
    getFieldByName(name: string): Promise<IWidgetField>;
    /** 监听 Field 添加事件 */
    onFieldAdd(callback: (ev: IEventCbCtx) => void): () => void;
    /** 监听 Field 删除事件 */
    onFieldDelete(callback: (ev: IEventCbCtx) => void): () => void;
    /** 监听 Field 修改事件 */
    onFieldModify(callback: (ev: IEventCbCtx) => void): () => void;
    /** 监听 Record 添加事件 */
    onRecordAdd(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
    /** 监听 Record 删除事件 */
    onRecordDelete(callback: (ev: IEventCbCtx<[recordId: string]>) => void): () => void;
    /** 监听 Record 修改事件 */
    onRecordModify(callback: (ev: IEventCbCtx<{
        recordId: string;
        fieldIds: string[];
    }>) => void): () => void;
    /** 根据字段 id 获取视图 */
    getViewById(viewId: string): Promise<IWidgetView>;

}
