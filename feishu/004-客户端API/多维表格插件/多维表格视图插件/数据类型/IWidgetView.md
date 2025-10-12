---
title: "IWidgetView"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/iwidgetview
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343260000
---
最后更新于 2023-07-26

# IWidgetView

视图实例。类型如下：
<br><br>
```js
interface IWidgetView{
    id: string;
    tableId: string;
      /** 获取字段名 */
    getName(): Promise<string>;
    /** 获取视图类型 */
    getType(): Promise<ViewType>;
    /** 获取字段列表（有序） */
    getFieldMetaList(): Promise<IFieldMeta[]>;
    /** 获取记录 ID 列表 */
    getVisibleRecordIdList(): Promise<(string | undefined)[]>;
}
```
