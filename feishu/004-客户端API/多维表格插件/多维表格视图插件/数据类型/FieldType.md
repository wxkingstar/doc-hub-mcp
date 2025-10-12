---
title: "FieldType"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/fieldtype
---
最后更新于 2023-07-26

# FieldType
字段类型。
```js

enum FieldType {
    Text = 1, // 多行文本
    Number = 2, // 数字
    SingleSelect = 3, // 单选
    MultiSelect = 4, // 多选
    DateTime = 5, // 日期
    Checkbox = 7, // 复选框
    User = 11, // 人员
    Phone = 13, // 电话号码
    Url = 15, // 超链接
    Attachment = 17, // 附件
    SingleLink = 18, // 单向关联
    Lookup = 19, // 查找引用
    Formula = 20, // 公式
    DuplexLink = 21, // 双向关联
    Location = 22, // 地理位置
    GroupChat = 23, // 群组

CreatedTime = 1001, // 创建时间
    ModifiedTime = 1002, // 最后更新时间
    CreatedUser = 1003, // 创建人
    ModifiedUser = 1004, // 修改人
    AutoNumber = 1005, // 自动编号
    Barcode = 99001, // 条码
    Progress = 99002, // 进度
    Currency = 99003, // 货币
    Rating = 99004 // 评分
}
