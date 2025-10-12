---
title: "更新 OKR 进展记录"
source_url: https://open.feishu.cn/document/server-docs/okr-v1/progress_record/update
last_remote_update: 2025-07-25
last_remote_update_timestamp: 1753428958000
---
最后更新于 2025-07-25

# 更新 OKR 进展记录

根据 OKR 进展记录 ID 更新进展详情。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/okr/v1/progress_records/:progress_id
HTTP Method | PUT
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新 OKR 信息(okr:okr)  
            更新 OKR 进展(okr:okr.progress:writeonly)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
progress_id | string | 待更新的 OKR进展记录 ID，“创建 OKR 进展记录”接口返回值中会提供，也可以通过 OKR 内容相关接口获取。  
**示例值**："7041857032248410131"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
content | content_block | 是 | 进展详情 富文本格式
blocks | content_block_element\[\] | 否 | 文档结构是按行排列的，每行内容是一个 Block
type | string | 否 | 文档元素类型  
**示例值**："paragraph"  
**可选值有**：  
- paragraph：文本段落  
- gallery：图片
paragraph | content_paragraph | 否 | 文本段落
style | content_paragraph_style | 否 | 段落样式
list | content_list | 否 | 有序列表/无序列表/任务列表
type | string | 否 | 列表类型  
**示例值**："number"  
**可选值有**：  
- number：有序列表  
- bullet：无序列表  
- checkBox：任务列表  
- checkedBox：已完成的任务列表  
- indent：tab缩进
indentLevel | int | 否 | 列表的缩进级别，支持指定一行的缩进 除代码块以外的列表都支持设置缩进，支持 1-16 级缩进，取值范围：[1,16]  
**示例值**：1
number | int | 否 | 用于指定列表的行号，仅对有序列表和代码块生效 如果为有序列表设置了缩进，行号可能会显示为字母或者罗马数字  
**示例值**：1
elements | content_paragraph_element\[\] | 否 | 段落元素组成一个段落
type | string | 否 | 元素类型  
**示例值**："textRun"  
**可选值有**：  
- textRun：文本型元素  
- docsLink：文档链接型元素  
- person：艾特用户型元素
textRun | content_text_run | 否 | 文本
text | string | 否 | 具体的文本内容  
**示例值**："周报内容"
style | content_text_style | 否 | 文本内容的样式，支持 BIUS、颜色等
bold | boolean | 否 | 是否加粗  
**示例值**：true
strikeThrough | boolean | 否 | 是否删除  
**示例值**：true
backColor | content_color | 否 | 背景颜色
red | int | 否 | 红 取值范围[0,255]  
**示例值**：216
green | int | 否 | 绿 取值范围[0,255]  
**示例值**：191
blue | int | 否 | 蓝 取值范围[0,255]  
**示例值**：188
alpha | number(float) | 否 | 透明度 取值范围[0,1]  
**示例值**：0.1
textColor | content_color | 否 | 字体颜色
red | int | 否 | 红 取值范围[0,255]  
**示例值**：216
green | int | 否 | 绿 取值范围[0,255]  
**示例值**：191
blue | int | 否 | 蓝 取值范围[0,255]  
**示例值**：188
alpha | number(float) | 否 | 透明度 取值范围[0,1]  
**示例值**：0.1
link | content_link | 否 | 链接地址
url | string | 否 | 链接地址  
**示例值**："https://www.xxxxx.com/"
docsLink | content_docs_link | 否 | 飞书云文档
url | string | 否 | 飞书云文档链接地址  
**示例值**："https://xxx.feishu.cn/docx/xxxxxxxx"
title | string | 否 | 飞书云文档标题  
**示例值**："项目说明文档"
person | content_person | 否 | 艾特用户
openId | string | 否 | 员工的OpenID  
**示例值**："ou_3bbe8a09c20e89cce9bff989ed84xxxx"
gallery | content_gallery | 否 | 图片
imageList | content_image_item\[\] | 否 | 图片元素
fileToken | string | 否 | 图片 token，通过上传图片接口获取  
**示例值**："boxcnOj88GDkmWGm2zsTyCBqoLb"
src | string | 否 | 图片链接  
**示例值**："https://example/drive/home/"
width | number(float) | 否 | 图片宽，单位px  
**示例值**：458
height | number(float) | 否 | 图片高，单位px  
**示例值**：372
progress_rate | progress_rate_new | 否 | 进展，包括百分比和状态
percent | number(float) | 否 | 进展百分比，保留两位小数  
**示例值**：50.21  
**默认值**：`0`  
**数据校验规则**：  
- 取值范围：`-99999999999` ～ `99999999999`
status | int | 否 | 进展状态  
**示例值**：0  
**可选值有**：  
- -1：暂无  
- 0：正常  
- 1：风险  
- 2：延期

### 请求体示例
```json
{
    "content":{
        "blocks":[
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"粗体更新",
                                "style":{
                                    "bold":true
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"*",
                                "style":{
                                    "bold":true
                                }
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"删除线更新",
                                "style":{
                                    "strikeThrough":true
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"字体颜色更新",
                                "style":{
                                    "textColor":{
                                        "red":216,
                                        "green":57,
                                        "blue":49,
                                        "alpha":1
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"背景颜色验证",
                                "style":{
                                    "backColor":{
                                        "red":251,
                                        "green":191,
                                        "blue":188,
                                        "alpha":1
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"粗体+删除+字体颜色+背景颜色验证",
                                "style":{
                                    "bold":true,
                                    "strikeThrough":true,
                                    "backColor":{
                                        "red":251,
                                        "green":191,
                                        "blue":188,
                                        "alpha":1
                                    },
                                    "textColor":{
                                        "red":216,
                                        "green":57,
                                        "blue":49,
                                        "alpha":1
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"有序标题1验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"粗体验证",
                                "style":{
                                    "bold":true
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"number",
                            "indentLevel":1,
                            "number":1
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"有序标题2验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"删除线验证",
                                "style":{
                                    "strikeThrough":true
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"number",
                            "indentLevel":1,
                            "number":2
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"有序标题3验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"字体背景颜色验证",
                                "style":{
                                    "backColor":{
                                        "red":251,
                                        "green":191,
                                        "blue":188,
                                        "alpha":1
                                    },
                                    "textColor":{
                                        "red":216,
                                        "green":57,
                                        "blue":49,
                                        "alpha":1
                                    }
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"number",
                            "indentLevel":1,
                            "number":3
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"无序标题1验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"粗体",
                                "style":{
                                    "bold":true
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"bullet",
                            "indentLevel":1
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"无序标题2验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"删除线",
                                "style":{
                                    "strikeThrough":true
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"bullet",
                            "indentLevel":1
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"无序标题3验证，",
                                "style":{

}
                            }
                        },
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"字体背景颜色验证",
                                "style":{
                                    "backColor":{
                                        "red":251,
                                        "green":191,
                                        "blue":188,
                                        "alpha":1
                                    },
                                    "textColor":{
                                        "red":216,
                                        "green":57,
                                        "blue":49,
                                        "alpha":1
                                    }
                                }
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"bullet",
                            "indentLevel":1
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"https://example/docx/doxcnO2Wkq0YPZQYLuJKyyOvLrh#doxcnSOui82swqk6c0o436Ak3nc",
                                "style":{
                                    "link":{
                                        "url":"https://example/docx/doxcnO2Wkq0YPZQYLuJKyyOvLrh#doxcnSOui82swqk6c0o436Ak3nc"
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type":"gallery",
                "gallery":{
                    "imageList":[
                        {
                            "src":"https://internal-api-okr.feishu-boe.cn/stream/api/downloadFile/?file_token=boxbcofrHwpgexwxyvgasR2kgRh&ticket=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0YXJnZXRfaWQiOiI3MDQxNDMwMzc3NjQyMDgyMzIzIiwidGFyZ2V0X3R5cGUiOjMsImFjdGlvbiI6MiwiZmlsZV90b2tlbiI6ImJveGJjb2ZySHdwZ2V4d3h5dmdhc1Iya2dSaCIsInVzZXJfaWQiOiI2OTY5ODU1NTAxNzQ0ODM0MDkyIiwidGVuYW50X2lkIjoiNjg3NzUwMjY4NzYwOTQwNjk5MCIsImV4cCI6MTY0MDE1NjEyMX0.PSs94Z6ljo4e7U5cFV8dYW-bNDUOWdKXRK8B-XKruGCtKWrhsFLNKbNygUkOgHzbiPg65aSAiCaWyhh5YeX0aw",
                            "fileToken":"boxbcofrHwpgexwxyvgasR2kgRh",
                            "width":458,
                            "height":372
                        }
                    ]
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"任务列表未勾选验证",
                                "style":{

}
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"checkBox",
                            "indentLevel":1
                        }
                    }
                }
            },
            {
                "type":"paragraph",
                "paragraph":{
                    "elements":[
                        {
                            "type":"textRun",
                            "textRun":{
                                "text":"任务列表已勾选验证",
                                "style":{

}
                            }
                        }
                    ],
                    "style":{
                        "list":{
                            "type":"checkedBox",
                            "indentLevel":1
                        }
                    }
                }
            }
        ]
    }
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | progress_record | \-
progress_id | string | OKR 进展ID
modify_time | string | 进展更新时间 毫秒
content | content_block | 进展 对应的 Content 详细内容
blocks | content_block_element\[\] | 文档结构是按行排列的，每行内容是一个 Block
type | string | 文档元素类型  
**可选值有**：  
- paragraph：文本段落  
- gallery：图片
paragraph | content_paragraph | 文本段落
style | content_paragraph_style | 段落样式
list | content_list | 有序列表/无序列表/任务列表
type | string | 列表类型  
**可选值有**：  
- number：有序列表  
- bullet：无序列表  
- checkBox：任务列表  
- checkedBox：已完成的任务列表  
- indent：tab缩进
indentLevel | int | 列表的缩进级别，支持指定一行的缩进 除代码块以外的列表都支持设置缩进，支持 1-16 级缩进，取值范围：[1,16]
number | int | 用于指定列表的行号，仅对有序列表和代码块生效 如果为有序列表设置了缩进，行号可能会显示为字母或者罗马数字
elements | content_paragraph_element\[\] | 段落元素组成一个段落
type | string | 元素类型  
**可选值有**：  
- textRun：文本型元素  
- docsLink：文档链接型元素  
- person：艾特用户型元素
textRun | content_text_run | 文本
text | string | 具体的文本内容
style | content_text_style | 文本内容的样式，支持 BIUS、颜色等
bold | boolean | 是否加粗
strikeThrough | boolean | 是否删除
backColor | content_color | 背景颜色
red | int | 红 取值范围[0,255]
green | int | 绿 取值范围[0,255]
blue | int | 蓝 取值范围[0,255]
alpha | number(float) | 透明度 取值范围[0,1]
textColor | content_color | 字体颜色
red | int | 红 取值范围[0,255]
green | int | 绿 取值范围[0,255]
blue | int | 蓝 取值范围[0,255]
alpha | number(float) | 透明度 取值范围[0,1]
link | content_link | 链接地址
url | string | 链接地址
docsLink | content_docs_link | 飞书云文档
url | string | 飞书云文档链接地址
title | string | 飞书云文档标题
person | content_person | 艾特用户
openId | string | 员工的OpenID
gallery | content_gallery | 图片
imageList | content_image_item\[\] | 图片元素
fileToken | string | 图片 token，通过上传图片接口获取
src | string | 图片链接
width | number(float) | 图片宽，单位px
height | number(float) | 图片高，单位px
progress_rate | progress_rate_new | 进展，包括百分比和状态
percent | number(float) | 进展百分比，保留两位小数
status | int | 进展状态  
**可选值有**：  
- -1：暂无  
- 0：正常  
- 1：风险  
- 2：延期

### 响应体示例
```json
{
    "code": 0,
    "data": {
        "content": {
            "blocks": [
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "bold": true
                                    },
                                    "text": "粗体更新"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "bold": true
                                    },
                                    "text": "*"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "strikeThrough": true
                                    },
                                    "text": "删除线更新"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "textColor": {
                                            "alpha": 1,
                                            "blue": 49,
                                            "green": 57,
                                            "red": 216
                                        }
                                    },
                                    "text": "字体颜色更新"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "backColor": {
                                            "alpha": 1,
                                            "blue": 188,
                                            "green": 191,
                                            "red": 251
                                        }
                                    },
                                    "text": "背景颜色验证"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "backColor": {
                                            "alpha": 1,
                                            "blue": 188,
                                            "green": 191,
                                            "red": 251
                                        },
                                        "bold": true,
                                        "strikeThrough": true,
                                        "textColor": {
                                            "alpha": 1,
                                            "blue": 49,
                                            "green": 57,
                                            "red": 216
                                        }
                                    },
                                    "text": "粗体+删除+字体颜色+背景颜色验证"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "有序标题1验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "bold": true
                                    },
                                    "text": "粗体验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "number": 1,
                                "type": "number"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "有序标题2验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "strikeThrough": true
                                    },
                                    "text": "删除线验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "number": 2,
                                "type": "number"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "有序标题3验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "backColor": {
                                            "alpha": 1,
                                            "blue": 188,
                                            "green": 191,
                                            "red": 251
                                        },
                                        "textColor": {
                                            "alpha": 1,
                                            "blue": 49,
                                            "green": 57,
                                            "red": 216
                                        }
                                    },
                                    "text": "字体背景颜色验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "number": 3,
                                "type": "number"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "无序标题1验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "bold": true
                                    },
                                    "text": "粗体"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "type": "bullet"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "无序标题2验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "strikeThrough": true
                                    },
                                    "text": "删除线"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "type": "bullet"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "无序标题3验证，"
                                },
                                "type": "textRun"
                            },
                            {
                                "textRun": {
                                    "style": {
                                        "backColor": {
                                            "alpha": 1,
                                            "blue": 188,
                                            "green": 191,
                                            "red": 251
                                        },
                                        "textColor": {
                                            "alpha": 1,
                                            "blue": 49,
                                            "green": 57,
                                            "red": 216
                                        }
                                    },
                                    "text": "字体背景颜色验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "type": "bullet"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {
                                        "link": {
                                            "url": "https://example/docx/doxcnO2Wkq0YPZQYLuJKyyOvLrh#doxcnSOui82swqk6c0o436Ak3nc"
                                        }
                                    },
                                    "text": "https://example/docx/doxcnO2Wkq0YPZQYLuJKyyOvLrh#doxcnSOui82swqk6c0o436Ak3nc"
                                },
                                "type": "textRun"
                            }
                        ]
                    },
                    "type": "paragraph"
                },
                {
                    "gallery": {
                        "imageList": [
                            {
                                "fileToken": "boxbcofrHwpgexwxyvgasR2kgRh",
                                "height": 372,
                                "src": "https://internal-api-okr.feishu-boe.cn/stream/api/downloadFile/?file_token=boxbcofrHwpgexwxyvgasR2kgRh&ticket=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0YXJnZXRfaWQiOiI3MDQxNDMwMzc3NjQyMDgyMzIzIiwidGFyZ2V0X3R5cGUiOjMsImFjdGlvbiI6MiwiZmlsZV90b2tlbiI6ImJveGJjb2ZySHdwZ2V4d3h5dmdhc1Iya2dSaCIsInVzZXJfaWQiOiI2OTY5ODU1NTAxNzQ0ODM0MDkyIiwidGVuYW50X2lkIjoiNjg3NzUwMjY4NzYwOTQwNjk5MCIsImV4cCI6MTY0MDE1NjEyMX0.PSs94Z6ljo4e7U5cFV8dYW-bNDUOWdKXRK8B-XKruGCtKWrhsFLNKbNygUkOgHzbiPg65aSAiCaWyhh5YeX0aw",
                                "width": 458
                            }
                        ]
                    },
                    "type": "gallery"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "任务列表未勾选验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "type": "checkBox"
                            }
                        }
                    },
                    "type": "paragraph"
                },
                {
                    "paragraph": {
                        "elements": [
                            {
                                "textRun": {
                                    "style": {},
                                    "text": "任务列表已勾选验证"
                                },
                                "type": "textRun"
                            }
                        ],
                        "style": {
                            "list": {
                                "indentLevel": 1,
                                "type": "checkedBox"
                            }
                        }
                    },
                    "type": "paragraph"
                }
            ]
        },
        "modify_time": "1640677887499",
        "progress_id": "7046518160811425812"
    },
    "msg": "success"
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1009999 | internal server error | 内部错误，请联系飞书助手或您的客户成功经理
500 | 1009998 | system exception | 系统异常，请联系飞书助手或您的客户成功经理
400 | 1001001 | invalid parameters | 无效的参数，请对照文档检查输入的参数
400 | 1001002 | no permission | 您无权访问该接口，请确认您的登录凭证
400 | 1001003 | user not found | 用户不存在
400 | 1001004 | okr data not found | 对应ID的数据不存在
