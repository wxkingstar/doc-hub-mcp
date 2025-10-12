---
title: "PageMeta"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/PageMeta
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960601000
---
最后更新于 2025-07-31

# PageMeta
文档的 Meta 信息
| **名称**               | **数据类型** | **是否必填** | **描述**      |
| -------------------- | -------- | -------- | ----------- |
| char_count           | number   | 是        | 字符数         |
| comments_count       | number   | 是        | 评论数         |
| comments_count_today | number   | 是        | 今日新增评论数     |
| create_timestamp     | number   | 是        | 文档创建时间      |
| like_count           | number   | 是        | 点赞数         |
| like_count_today     | number   | 是        | 今日新增点赞数     |
| owner_user           | object   | 是        | 文档创建者       |
|  ∟avatar_url         | string   | 是        | 用户的头像链接     |
|  ∟cn_name            | string   | 是        | 用户的中文名称     |
|  ∟en_name            | string   | 是        | 用户的英文名称     |
|  ∟id                 | string   | 是        | 用户的 user id |
| pv                   | number   | 是        | 阅读次数        |
| pv_today             | number   | 是        | 今日新增阅读次数    |
| uv                   | number   | 是        | 阅读人数        |
| uv_today             | number   | 是        | 今日新增阅读人数    |
| word_count           | number   | 是        | 单词数
