<!--
title: 群公告常见问题
id: 7472290559531253763
fullPath: /uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-faqs
updatedAt: 1739793614000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/group-announcement-faqs
-->
# 群公告常见问题

## 如何插入表格（table）并向表格中写内容？
调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定 Parent Block 下创建一个 Table Block。

```bash
curl --location --request POST 'https://{domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "index": 0,
    "children": [
        {
            "block_type": 31,
            "table": {
                "property": {
                    "row_size": 1,
                    "column_size": 1
                }
            }
        }
    ]
}'
```
  
在上述示例中，我们创建了一个 1 行 1 列的表格，如果调用成功，预计会返回下列格式数据：
    
```json
{
    "code": 0,
    "data": {
        "children": [
            {
                "block_id": "......",
                "block_type": 31,
                "children": [
                    // 单元格 BlockID 数组，按从左到右从上到下顺序排列
                    "......"
                ],
                "parent_id": "......",
                "table": {
                    "cells": [
                        "......"
                    ],
                    "property": {
                        "column_size": 1,
                        "column_width": [
                            100
                        ],
                        "merge_info": [
                            {
                                "col_span": 1,
                                "row_span": 1
                            }
                        ],
                        "row_size": 1
                    }
                }
            }
        ],
        ......
    },
    "msg": ""
}
```
	
其中 data.children 数组中存放了按照从左到右、从上到下顺序遍历得到的单元格 Table Cell 的 Block ID。接下来，你可继续调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，指定 Table Block 为 Parent Cell，对指定单元格添加内容。

## 如何插入电子表格（sheet）并往单元格填充内容？

1. 调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定 Parent Block 下创建 Sheet Block，指定电子表格的行数量和列数量。
	```bash
    curl --location --request POST 'https://{domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children' \
    --header 'Authorization: {Authorization}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      {
        "index": 0,
        "children": [
          {
            "block_type": 30,
            "sheet": {
              "row_size": 5,
              "column_size": 3
            }
          }
        ]
      }
    }'
	```	
	在上述示例中，我们创建了一个 5 行 3 列的表格，如果调用成功，预计会返回下列格式数据。
    ```json
    {
        "code": 0,
        "data": {
            "children": [
                {
                    "block_id": "doxcnx8mv0hzeY07TUlKzpabcef",
                    "block_type": 30,
                    "parent_id": "UFZvdKi97ojvkzx3ZZocklabcef",
                    "sheet": {
                        "token": "LxvrsycFwhQYfrt8oYQcwVabcef_QJ6HZR" // 电子表格 token + 工作表 ID 格式
                    }
                }
            ],
            "client_token": "f098d96e-693b-442f-8a7d-82c309ebc500",
            "revision_id": 54
        },
        "msg": "success"
    }
    ```

2. 返回的 `sheet.token` 的值为电子表格的 token 和电子表格工作表的 ID 的组合。你可继续调用[电子表格相关接口](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)继续操作该表格。以下示例展示在该电子表格中写入数据。
    ```bash
    curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/LxvrsycFwhQYfrt8oYQcwVabcef/values' \
    --header 'Authorization: Bearer t-g10474apW3IFUPQGV362IPSAGELJO2SQWL5abcef' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "valueRange":{
        "range": "QJ6HZR!A1:B2",
        "values": [
          [
            "Hello", 1
          ],
          [
            "World", 1
          ]
        ]
        }
    }'
    ```
    如果调用成功，预计将返回以下数据：
    ```json
    {
      "code": 0,
      "data": {
        "revision": 2,
        "spreadsheetToken": "LxvrsycFwhQYfrt8oYQcwVabcef",
        "updatedCells": 4,
        "updatedColumns": 2,
        "updatedRange": "QJ6HZR!A1:B2",
        "updatedRows": 2
      },
      "msg": "success"
    }
    ```

## 如何插入图片？

**第一步：创建图片 Block**

调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定的 Parent Block 下创建 Image Block：

```bash
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "index": 0,
  "children": [
    {
      "block_type": 27,
      "image": {}
    }
  ]
}'
```

如果调用成功，预计会返回下列格式数据：

```json
{
    "code": 0,
    "data": {
        "children": [
            {
                "block_id": "doxcnEUmKKppwWrnUIcgZ2ibc9g",
                // Image BlockID
                "block_type": 27,
                "image": {
                    "height": 100,
                    "token": "",
                    "width": 100
                },
                "parent_id": "doxcnQxzmNsMl9rsJRZrCpGx71e"
            }
        ],
        "client_token": "bc25a4f0-9a24-4ade-9ca2-6c1db43fa61d",
        "revision_id": 7
    },
    "msg": ""
}
```

**第二步：上传图片素材**

调用[上传图片素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)接口，使用步骤一返回的 Image BlockID 作为 `parent_node` 上传素材：

```bash
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: multipart/form-data; boundary=---7MA4YWxkTrZu0gW' \
--form 'file=@"/tmp/test.PNG"' \ # 图片本地路径
--form 'file_name="test.PNG"' \ # 图片名称
--form 'parent_type="docx_image"' \ # 素材类型为 docx_image
--form 'parent_node="doxcnEUmKKppwWrnUIcgZ2ibc9g"' \ # Image BlockID
--form 'size="xxx"' # 图片大小
```

如果调用成功，预计会返回下列格式数据：

```json
{
    "code": 0,
    "data": {
        "file_token": "boxbckbfvfcqEg22hAzN8Dh9gJd" // 图片素材 ID
    },
    "msg": "Success"
}
```

**第三步：设置图片 Block 的素材**

调用[批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口，指定 `replace_image` 操作，将步骤二返回的图片素材 ID 设置到对应的 Image Block：

``` bash
curl --location --request PATCH '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "requests": [
  {
    "block_id": "doxcnEUmKKppwWrnUIcgZ2ibc9g", # 图片 BlockID
    "replace_image": {
      "token": "boxbckbfvfcqEg22hAzN8Dh9gJd" # 图片素材 ID
    }
  }
}'
```

## 如何插入文件/附件？

**第一步：创建一个空的文件 Block**

调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定 Parent Block 下创建一个空的 File Block：

```bash
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "index": 0,
    "children": [
        {
            "block_type": 23,
            "file": {
                "token": ""
            }
        }
    ]
}'
```

如果调用成功，预计会返回下列格式数据，从中可获取到该空 File Block 的 ID `doxcn1Bx1WOlcqzLqTD2UUabcef`：

```json
{
    "code": 0,
    "data": {
        "children": [
            {
                "block_id": "doxcnIfCrxq7MlhDbj8xCXmPXgf", // View Block 的 ID
                "block_type": 33,
                "children": [
                    "doxcn1Bx1WOlcqzLqTD2UUabcef" // File Block 的 ID
                ],
                "parent_id": "doxcnQxzmNsMl9rsJRZrCpGx7ze",
                "view": {
                    "view_type": 1
                }
            }
        ],
        "client_token": "07c56d36-db8b-480f-97f2-7b77a9d3e787",
        "revision_id": 8
    },
    "msg": ""
}
```

:::html
<md-alert type="tip">
**注意：** 与 Image Block 不同，在创建 File Block 成功后，接口会返回 View Block，这是因为每个 File Block 对应都会有一个 View Block 来控制其视图形式，即 View Block 是 File Block 的 Parent。
</md-alert>
:::

**第二步：上传文件素材**

调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)接口，使用步骤一返回的 File Block 的 ID `doxcn1Bx1WOlcqzLqTD2UUYiA7g` 作为 `parent_node` 的值，将素材文件上传至该 File Block 中：

```bash
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: multipart/form-data; boundary=---7MA4YWxkTrZu0gW' \
--form 'file=@"/tmp/test.PNG"' \ # 文件本地路径
--form 'file_name="test.PNG"' \ # 文件名称
--form 'parent_type="docx_file"' \ # 素材类型为 docx_file
--form 'parent_node="doxcn1Bx1WOlcqzLqTD2UUYiA7g"' \ # File Block 的 ID
--form 'size="xxx"' # 文件大小
```

如果调用成功，预计会返回下列格式数据，从中可获取到已成功上传的文件的 ID：

```json
{
    "code": 0,
    "data": {
        "file_token": "boxbcXvrJyOMX6EhmGF1bkoQwOb" // 文件素材 ID
    },
    "msg": "Success"
}
```

**第三步：设置文件 Block 的素材**

调用[批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口，指定 `replace_file` 操作，将步骤二返回的素材 ID 设置到对应的 File Block。以更新块为例：


``` bash
curl --location --request PATCH '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "requests": [
  {
    "block_id": "doxcn1Bx1WOlcqzLqTD2UUabcef", # 文件 BlockID, 需要与步骤一创建的 File Block ID 一致
    "replace_file": {
      "token": "boxbckbfvfcqEg22hAzN8Dh9gJd" # 文件素材 ID
    }
  }
}'
```
## 如何插入@用户元素？

:::html
<md-alert type="warn">
通过调用 OpenAPI 来@用户，不会向该用户发送通知。
</md-alert>
:::

@用户是 Text Block 中的一个内容实体。如果要 @ 某个用户，可以调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定父亲 Block 下创建 Text Block，并在 Text Block 中指定要 @ 的用户 ID：
```bash
# https://{domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children?revision_id=-1
curl --location --request POST '{url}' \
--header 'Content-Type: application/json' \
--header 'Authorization: {Authorization}' \
--data-raw '{
    "children": [
        {
            "block_type": 2,
            "text": {
                "elements": [
                    {
                        "mention_user": {
                            "text_element_style": {
                                "bold": false,
                                "inline_code": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false
                            },
                            "user_id": "{user_id}"
                        }
                    }
                ],
                "style": {
                    "align": 1,
                    "folded": false
                }
            }
        }
    ],
    "index": 0
}'
```
在上述示例中，在`chat_id` 这篇群公告指定的`block_id` 下，创建了一个 Child Block，该 Child Block 是一个 Text Block，并且其中有一个`mention_user` 的文本元素 @ 了指定用户，用户的 ID 为 `user_id`，如果调用成功，预计会返回下列格式数据：
```json
{
  "code": 0,
  "data": {
    "children": [
      {
        "block_id": "......",
        "block_type": 2,
        "parent_id": "......",
        "text": {
          "elements": [
            {
              "mention_user": {
                "text_element_style": {
                  "bold": false,
                  "inline_code": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false
                },
                "user_id": "......"
              }
            }
          ],
          "style": {
            "align": 1,
            "folded": false
          }
        }
      }
    ],
    ......
  },
  "msg": "success"
}
```
## 如何插入一个公式？

公式不是一个 Block，而是 Text Block 下的一个 Element，结构体如下：

```json
{
    "content": string,
    "text_element_style": object(TextElementStyle)
}
```
如要向群公告插入一个公式，可调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，请求体示例如下：

```json
{
  "index": 0,
  "children": [
    {
      "block_type": 2,
      "text": {
        "elements": [
          {
            "equation": {
              "content": "1+2=3\n",
              "text_element_style": {
                "bold": false,
                "inline_code": false,
                "italic": false,
                "strikethrough": false,
                "underline": false
              }
            }
          }
        ],
        "style": {
          "align": 1,
          "folded": false
        }
      }
    }
  ]
}
```
## 如何往高亮块（Callout Block）中填充内容？

调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，其中路径参数 `block_id` 填写 Callout BlockID，请求体 `children` 填充高亮块的内容。例如，在高亮块内容的第一行插入文本块：
```json
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \ 
--header 'Content-Type: application/json' \
--data-raw '{
    "index": 0,
    "children": [
        {
            "block_type": 2,
            "text": {
                "elements": [
                    {
                        "text_run": {
                            "content": "当你需要向群内所有成员传达重要信息时，可以使用群公告功能。后续入群的成员也可看到当前群公告。",
                            "text_element_style": {
                                "background_color": 14,
                                "text_color": 5
                            }
                        }
                    },
                    {
                        "text_run": {
                            "content": "群公告编辑支持实时保存及多人协作，群成员可实时查看最新群公告内容。",
                            "text_element_style": {
                                "background_color": 14,
                                "bold": true,
                                "text_color": 5
                            }
                        }
                    }
                ],
                "style": {}
            }
        }
    ]
}'
```
## 如何插入分栏块（Grid block）并在第一栏中插入内容？

**第一步：创建 Grid block**

调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定 Parent block 下创建 Grid block，该 Grid 共计有两列。

**Request**
```bash
# https://{domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/child
curl --location --request PATCH '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "index": 0,
  "children": [
    {
      "block_type": 24,
      "grid": {
        "column_size": 2
      }
    }
  ]
}'
```

**Response**

:::html
<md-alert type="tip">
在创建 Grid block 成功后，接口会返回 Grid block 的 `block_id` 以及 `children` 等，`children` 即 Grid Column Block，由于 Request 指定要创建两列，因此 `children` 数组中会有两个 `block_id`，接下来可以使用这些 `block_id` 往 Grid Column block 中继续添加 Children block。
</md-alert>
:::


```bash
{
  "code": 0,
  "data": {
    "children": [
      {
        "block_id": "doxcn7VulseZpcWivDsfNi7tPAf",
        "block_type": 24,
        "children": [
          "doxcnVDmCQuoiQPJUXuaYJnEeBe", // 第一个 Grid Column Block
          "doxcnR4tyA3dJn9MWxa1VrxsKRc"  // 第二个 Grid Column Block
        ],
        "grid": {
          "column_size": 2
        },
        "parent_id": "Xrt5aEe0DoKTslxIqBRcIEAJnBc"
      }
    ],
    "client_token": "bef26316-0079-4f26-995e-447004dd996a",
    "revision_id": 85
  },
  "msg": "success"
}
```

**第二步：在第一列 Grid Column Block 中插入内容**

调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口，在指定 Grid Column Block 下插入一个文本 Block。

**Request**

```bash
# https://{domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children
curl --location --request POST '{url}' \
--header 'Authorization: {Authorization}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "index": 0,
  "children": [
    {
      "block_type": 2,
      "text": {
        "elements": [
          {
            "text_run": {
              "content": "当你需要向群内所有成员传达重要信息时，可以使用群公告功能。后续入群的成员也可看到当前群公告。",
              "text_element_style": {
                "background_color": 14,
                "text_color": 5
              }
            }
          }
        ],
        "style": {}
      }
    }
  ]
}'
```

**Response**

:::html
<md-alert type="warn">
在第一步创建 Grid Block 时，系统会自动往每个 Grid Column Block 下添加一个空 Text Block，如果不需要默认的空白 Text Block，可以在第 2 步添加完内容后，自行删除该 Text Block。
</md-alert>
:::

```bash
{
  "code": 0,
  "data": {
    "children": [
      {
        "block_id": "doxcnT2booYsWL6XsAcyl958nye",
        "block_type": 2,
        "parent_id": "doxcnVDmCQuoi1PJUXuTYJnEeBe",
        "text": {
          "elements": [
            {
              "text_run": {
                "content": "当你需要向群内所有成员传达重要信息时，可以使用群公告功能。后续入群的成员也可看到当前群公告。",
                "text_element_style": {
                  "background_color": 14,
                  "bold": false,
                  "inline_code": false,
                  "italic": false,
                  "strikethrough": false,
                  "text_color": 5,
                  "underline": false
                }
              }
            }
          ],
          "style": {
            "align": 1,
            "folded": false
          }
        }
      }
    ],
    "client_token": "b09b2539-487b-42f3-b747-f12ab177bb13",
    "revision_id": 86
  },
  "msg": "success"
}
```
## 如何获取群公告中的图片&附件？

1. 调用[获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)接口，分页获取群公告所有块的富文本内容。
    ```bash
    curl --location 'https://{domain}/open-apis/docx/v1/chats/oc_5ad11d72b830411d72b836c20/announcement/blocks' \
    --header 'Authorization: {Authorization}'
    ```   
   
	在上述用例中，我们获取了群公告第一分页中块的富文本内容，如果调用成功，预计会返回下列格式数据。
    
    ```json
    {
        "code": 0,
        "data": {
            "has_more": true,
            "page_token": "aw7DoMKBFMOGwqHCrcO8w6jCmMOvw6ILeADCvsKNw57Di8O5XGV3LG4_w5HCqhFxSnDCrCzCn0BgZcOYUg85EMOYcEAcwqYOw4ojw5QFwofCu8KoIMO3K8Ktw4IuNMOBBHNYw4bCgCV3U1zDu8K-J8KSR8Kgw7Y0fsKZdsKvW3d9w53DnkHDrcO5bDkYwrvDisOEPcOtVFJ-I03CnsOILMOoAmLDknd6dsKqG1bClAjDuS3CvcOTwo7Dg8OrwovDsRdqIcKxw5HDohTDtXN9w5rCkWo",
            "items": [
                {
                    "block_id": "oc_5ad11d72b830411d72b836c20",
                    "block_type": 1,
                    "children": [
                        "MQFydWYYCoEDdpxiq4kcjHZ0noW",
                        "OTZtdNzhFoXOWlxd4BkcKO4on2d"
                    ],
                    "page": {
                        "elements": [
                            {
                                "text_run": {
                                    "content": "",
                                    "text_element_style": {
                                        "bold": false,
                                        "inline_code": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false
                                    }
                                }
                            }
                        ],
                        "style": {
                            "align": 1
                        }
                    },
                    "parent_id": ""
                },
                {
                    "block_id": "MQFydWYYCoEDdpxiq4kcjHZ0noW",
                    "block_type": 27, // block_type: image
                    "image": {
                        "align": 2,
                        "height": 1200,
                        "token": "HbuhbbMDBoNf1AxZt0Cc6nR6nSe", // image token
                        "width": 4800
                    },
                    "parent_id": "oc_5ad11d72b830411d72b836c20"
                },
                {
                    "block_id": "OTZtdNzhFoXOWlxd4BkcKO4on2d",
                    "block_type": 33, // block_type: view
                    "children": [
                        "I90UdpixCo6ZDOxE7dscMWlRn3e"
                    ],
                    "parent_id": "oc_5ad11d72b830411d72b836c20",
                    "view": {
                        "view_type": 1
                    }
                },
                {
                    "block_id": "I90UdpixCo6ZDOxE7dscMWlRn3e",
                    "block_type": 23, // block_type: file
                    "file": {
                        "name": "image.png",
                        "token": "KNm7bdTXooqUNAx52ZWcBR0Enib" // file token
                    },
                    "parent_id": "OTZtdNzhFoXOWlxd4BkcKO4on2d"
                }
            ]
        },
        "msg": "success"
    }
    ```
    :::html
    <md-alert type="tip">
    此接口为分页接口，如果 has_more 为 true，则表示下次遍历时可采用返回值中的 page_token 查询下一分页的群公告内容。
    </md-alert>
    :::
-
2. 在返回数据中：
    * `"block_type": 27` 的块为图片块，块中 `image.token` 的值为图片的 token。
    * `"block_type": 23` 的块为文件块，块中 `file.token` 的值为文件的 token。
   
   你可基于图片和文件的 token，调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)接口下载对应的图片和文件。


## 服务端 OpenAPI 接口限频阈值是多少？

具体请查阅对应接口文档，比如[批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口频率限制为每个应用 5 次/秒。
## 群公告 OpenAPI 支持哪些类型 Block？

群公告块的数据结构与文档中块的数据结构格式相同，可查看[文档中块的数据结构](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block)中 BlockType 小节。

## 新创建群组中的群公告还没有 Block，该如何添加 Block？

新创建的群公告有 Block，该 Block 为 Page Block。

创建群组后，接口会返回 `chat_id`，`chat_id` 也是该群公告页面块（Page Block）的 `block_id`，因此你可以通过指定 `chat_id` 调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口来添加 Block。

## 获取群公告所有块接口是按什么顺序返回 Block 的？

[获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)接口返回的 items 是一个 [1,N] (N>=1) 的 Block 数组。数组中元素的次序按公告文档内容先序遍历结果进行排列，其中索引为 0 的元素是群公告根节点。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1751e4f87b25d5704b0e6b05cec9ea00_e8fQNTK7nR.png?height=436&lazyload=true&width=1123)

以上图为例，其 Blocks 先序遍历结果为：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/83dda0898d4d82bc4cb8e4b71c7e0544_m1p0yCU21p.png?height=164&lazyload=true&width=923)

## 群公告有服务端的 SDK 吗？

:::html
<md-alert type="tip">
SDK 的建设滞后于最新的 API，比如 API 已支持返回某新类型的 Block，但 SDK 尚未支持解析，但会保证其向前兼容。
</md-alert>
:::

如何接入并使用 SDK 可见[服务端 SDK 概述](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)。

目前 SDK 支持 Java、Python、Go 和 Node.js 语言，群公告 API 的 SDK 源码地址如下：

**Java**

- GitHub 代码托管地址：[larksuite/oapi-sdk-java](https://github.com/larksuite/oapi-sdk-java/tree/main/larksuite-oapi/src/main/java/com/larksuite/oapi/service/docx/v1)
- 使用指引：[GitHub - larksuite/oapi-sdk-java](https://github.com/larksuite/oapi-sdk-java)


**Python**

- GitHub 代码托管地址：[larksuite/oapi-sdk-python](https://github.com/larksuite/oapi-sdk-python/tree/main/src/larksuiteoapi/service/docx)
- 使用指引：[GitHub - larksuite/oapi-sdk-python](https://github.com/larksuite/oapi-sdk-python)

**Go**

- GitHub 代码托管地址：[larksuite/oapi-sdk-go](https://github.com/larksuite/oapi-sdk-go/tree/v3_main/service/docx)
- 使用指引：[GitHub - larksuite/oapi-sdk-go](https://github.com/larksuite/oapi-sdk-go)


**Node.js**

- GitHub 代码托管地址：[larksuite/oapi-sdk-node.js](https://github.com/larksuite/node-sdk/blob/main/code-gen/projects/docx.ts)
- 使用指引：[GitHub - larksuite/oapi-sdk-node.js](https://github.com/larksuite/node-sdk/blob/main/README.zh.md)



## 如何读取群公告中电子表格块的详细内容？

1. 调用[获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)接口，获取电子表格块的 token。若调用成功，预计将返回以下格式数据。
  
   其中返回的 `sheet.token` 的值 `B3hasMxsshByaEtZxAwcVfWxnSe_Ml1QzO` 为电子表格的唯一标识（spreadsheet_token）和电子表格工作表的唯一标识（sheet_id）的组合。
   
    ```json
    {
      "code": 0,
      "data": {
        "has_more": false,
        "items": [
          {
            "block_id": "oc_5ad11d72b830411d72b836c20",
            "block_type": 1,
            "children": [
              "XpvLdPiaxoBM08xhyfEcVZj7nlc"
            ],
            "page": {
              "elements": [
                {
                  "text_run": {
                    "content": "",
                    "text_element_style": {
                      "bold": false,
                      "inline_code": false,
                      "italic": false,
                      "strikethrough": false,
                      "underline": false
                    }
                  }
                }
              ],
              "style": {
                "align": 1
              }
            },
            "parent_id": ""
          },
          {
            "block_id": "XpvLdPiaxoBM08xhyfEcVZj7nlc",
            "block_type": 30,
            "parent_id": "oc_5ad11d72b830411d72b836c20",
            "sheet": {
              "token": "B3hasMxsshByaEtZxAwcVfWxnSe_Ml1QzO"  // 电子表格的唯一标识（spreadsheet_token）和电子表格工作表的唯一标识（sheet_id）的组合
            }
          }
        ]
      },
      "msg": "success"
    }
    ```



2. 基于步骤一获取的电子表格的唯一标识（spreadsheet_token）和电子表格工作表的唯一标识（sheet_id），调用电子表格的[读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)接口，获取表格中的数据。了解请求示例和响应体示例请直接参考该接口文档。


