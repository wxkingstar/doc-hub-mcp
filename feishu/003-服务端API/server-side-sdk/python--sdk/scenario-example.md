<!--
title: 场景示例
id: 7442638088350253060
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/scenario-example
updatedAt: 1746676956000
source: https://open.feishu.cn/document/server-side-sdk/python--sdk/scenario-example
-->
# 场景示例

开放平台提供了 Python SDK 相关的开发教程与示例代码，供你选择参考，助力你上手熟悉 SDK 的使用方式。

## 开发教程

飞书开放平台提供了机器人自动拉群报警的场景化教程，使用教程你可以体验 Python SDK 在实际场景中运用方式，详情参见[机器人自动拉群报警](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/introduction)。

## 示例代码

在 [Python SDK Demo](https://github.com/larksuite/oapi-sdk-python-demo) 中包含了以下多种场景示例代码。


### 发送文件消息

示例代码如下，源文件地址：[send_file.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/im/send_file.py)

发送文件消息，使用到两个 OpenAPI：
- [上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)
- [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

```python

import lark_oapi as lark
from lark_oapi.api.im.v1 import *


class SendFileRequest(object):

    def __init__(self) -> None:
        self.file_type: Optional[str] = None  # 文件类型，必填
        self.file_name: Optional[str] = None  # 带后缀的文件名，必填
        self.file: Optional[IO[Any]] = None  # 文件内容，必填
        self.duration: Optional[int] = None  # 文件的时长(ms)，选填
        self.receive_id_type: Optional[str] = None  # 消息接收者ID类型，必填
        self.receive_id: Optional[str] = None  # 消息接收者的ID，必填
        self.uuid: Optional[str] = None  # 消息uuid，选填


class SendFileResponse(BaseResponse):
    def __init__(self) -> None:
        super().__init__()
        self.create_file_response: Optional[CreateFileResponseBody] = None
        self.create_message_response: Optional[CreateMessageResponseBody] = None


# 发送文件消息
def send_file(client: lark.Client, request: SendFileRequest) -> BaseResponse:
    # 上传文件
    create_file_req = CreateFileRequest.builder() \
        .request_body(CreateFileRequestBody.builder()
                      .file_type(request.file_type)
                      .file_name(request.file_name)
                      .duration(request.duration)
                      .file(request.file)
                      .build()) \
        .build()

    create_file_resp = client.im.v1.file.create(create_file_req)

    if not create_file_resp.success():
        lark.logger.error(
            f"client.im.v1.file.create failed, "
            f"code: {create_file_resp.code}, "
            f"msg: {create_file_resp.msg}, "
            f"log_id: {create_file_resp.get_log_id()}")
        return create_file_resp

    # 发送消息
    option = lark.RequestOption.builder().headers({"X-Tt-Logid": create_file_resp.get_log_id()}).build()
    create_message_req = CreateMessageRequest.builder() \
        .receive_id_type(request.receive_id_type) \
        .request_body(CreateMessageRequestBody.builder()
                      .receive_id(request.receive_id)
                      .msg_type("file")
                      .content(lark.JSON.marshal(create_file_resp.data))
                      .uuid(request.uuid)
                      .build()) \
        .build()

    create_message_resp: CreateMessageResponse = client.im.v1.message.create(create_message_req, option)

    if not create_message_resp.success():
        lark.logger.error(
            f"client.im.v1.message.create failed, "
            f"code: {create_message_resp.code}, "
            f"msg: {create_message_resp.msg}, "
            f"log_id: {create_message_resp.get_log_id()}")
        return create_message_resp

    # 返回结果
    response = SendFileResponse()
    response.code = 0
    response.msg = "success"
    response.create_file_response = create_file_resp.data
    response.create_message_response = create_message_resp.data

    return response
```	

### 发送图片消息

示例代码如下，源文件地址：[send_image.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/im/send_image.py)

发送图片消息，使用到两个 OpenAPI：

- [上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)
- [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

```python
import lark_oapi as lark
from lark_oapi.api.im.v1 import *


class SendImageRequest(object):

    def __init__(self) -> None:
        self.image: Optional[IO[Any]] = None  # 图片，必填
        self.receive_id_type: Optional[str] = None  # 消息接收者ID类型，必填
        self.receive_id: Optional[str] = None  # 消息接收者的ID，必填
        self.uuid: Optional[str] = None  # 消息uuid，选填


class SendImageResponse(BaseResponse):
    def __init__(self) -> None:
        super().__init__()
        self.create_image_response: Optional[CreateImageResponseBody] = None
        self.create_message_response: Optional[CreateMessageResponseBody] = None


# 发送图片消息
def send_image(client: lark.Client, request: SendImageRequest) -> BaseResponse:
    # 上传图片
    create_image_req = CreateImageRequest.builder() \
        .request_body(CreateImageRequestBody.builder()
                      .image_type("message")
                      .image(request.image)
                      .build()) \
        .build()

    create_image_resp = client.im.v1.image.create(create_image_req)

    if not create_image_resp.success():
        lark.logger.error(
            f"client.im.v1.image.create failed, "
            f"code: {create_image_resp.code}, "
            f"msg: {create_image_resp.msg}, "
            f"log_id: {create_image_resp.get_log_id()}")
        return create_image_resp

    # 发送消息
    option = lark.RequestOption.builder().headers({"X-Tt-Logid": create_image_resp.get_log_id()}).build()
    create_message_req = CreateMessageRequest.builder() \
        .receive_id_type(request.receive_id_type) \
        .request_body(CreateMessageRequestBody.builder()
                      .receive_id(request.receive_id)
                      .msg_type("image")
                      .content(lark.JSON.marshal(create_image_resp.data))
                      .uuid(request.uuid)
                      .build()) \
        .build()

    create_message_resp: CreateMessageResponse = client.im.v1.message.create(create_message_req, option)

    if not create_message_resp.success():
        lark.logger.error(
            f"client.im.v1.message.create failed, "
            f"code: {create_message_resp.code}, "
            f"msg: {create_message_resp.msg}, "
            f"log_id: {create_message_resp.get_log_id()}")
        return create_message_resp

    # 返回结果
    response = SendImageResponse()
    response.code = 0
    response.msg = "success"
    response.create_image_response = create_image_resp.data
    response.create_message_response = create_message_resp.data

    return response
```

### 获取部门下所有用户列表

示例代码如下，源文件地址：[list_user_by_department.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/contact/list_user_by_department.py)

获取部门下所有用户列表，使用到两个 OpenAPI：
- [获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)
- [获取部门直属用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)

```python
import lark_oapi as lark
from lark_oapi.api.contact.v3 import *


class ListUserByDepartmentRequest(object):
    def __init__(self) -> None:
        super().__init__()
        self.department_id: Optional[str] = None  # open_department_id，必填


class ListUserByDepartmentResponse(BaseResponse):
    def __init__(self):
        super().__init__()
        self.children_department_response: Optional[ChildrenDepartmentResponseBody] = None
        self.find_by_department_user_response: List[User] = []


# 获取部门下所有用户列表
def list_user_by_department(client: lark.Client, request: ListUserByDepartmentRequest) -> BaseResponse:
    # 获取子部门列表
    children_department_req = ChildrenDepartmentRequest.builder() \
        .department_id_type("open_department_id") \
        .department_id(request.department_id) \
        .fetch_child(True) \
        .build()

    children_department_resp = client.contact.v3.department.children(children_department_req)

    if not children_department_resp.success():
        lark.logger.error(
            f"client.contact.v3.department.children failed, "
            f"code: {children_department_resp.code}, "
            f"msg: {children_department_resp.msg}, "
            f"log_id: {children_department_resp.get_log_id()}")
        return children_department_resp

    # 获取部门直属用户列表
    users = []
    open_department_ids = [request.department_id]
    for i in children_department_resp.data.items:
        open_department_ids.append(i.open_department_id)

    for id in open_department_ids:
        find_by_department_user_req = FindByDepartmentUserRequest.builder() \
            .department_id(id) \
            .build()

        find_by_department_user_resp = client.contact.v3.user.find_by_department(find_by_department_user_req)

        if not find_by_department_user_resp.success():
            lark.logger.error(
                f"client.contact.v3.user.find_by_department failed, "
                f"code: {find_by_department_user_resp.code}, "
                f"msg: {find_by_department_user_resp.msg}, "
                f"log_id: {find_by_department_user_resp.get_log_id()}")
            return find_by_department_user_resp

        users.extend(find_by_department_user_resp.data.items)

    # 返回结果
    response = ListUserByDepartmentResponse()
    response.code = 0
    response.msg = "success"
    response.children_department_response = children_department_resp.data
    response.find_by_department_user_response = users

    return response
```

### 创建多维表格同时添加数据表

示例代码如下，源文件地址：[create_app_and_tables.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/base/create_app_and_tables.py)

创建多维表格同时添加数据表，使用到两个 OpenAPI：

- [创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)
- [新增一个数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)

```python
import lark_oapi as lark
from lark_oapi.api.bitable.v1 import *


class CreateAppAndTablesRequest(object):
    def __init__(self) -> None:
        super().__init__()
        self.name: Optional[str] = None  # 多维表格名称，必填
        self.folder_token: Optional[str] = None  # 多维表格归属文件夹，必填
        self.tables: List[ReqTable] = []  # 数据表，不填则不创建


class CreateAppAndTablesResponse(BaseResponse):
    def __init__(self):
        super().__init__()
        self.create_app_response: Optional[CreateAppResponseBody] = None
        self.create_app_tables_response: List[CreateAppTableResponseBody] = []


# 创建多维表格同时添加数据表
def create_app_and_tables(client: lark.Client, request: CreateAppAndTablesRequest) -> BaseResponse:
    # 创建多维表格
    create_app_req = CreateAppRequest.builder() \
        .request_body(ReqApp.builder()
                      .name(request.name)
                      .folder_token(request.folder_token)
                      .build()) \
        .build()

    create_app_resp = client.bitable.v1.app.create(create_app_req)

    if not create_app_resp.success():
        lark.logger.error(
            f"client.bitable.v1.app.create failed, "
            f"code: {create_app_resp.code}, "
            f"msg: {create_app_resp.msg}, "
            f"log_id: {create_app_resp.get_log_id()}")
        return create_app_resp

    # 添加数据表
    option = lark.RequestOption.builder().headers({"X-Tt-Logid": create_app_resp.get_log_id()}).build()
    tables = []
    for table in request.tables:
        create_app_table_req = CreateAppTableRequest.builder() \
            .app_token(create_app_resp.data.app.app_token) \
            .request_body(CreateAppTableRequestBody.builder()
                          .table(table)
                          .build()) \
            .build()

        create_app_table_resp = client.bitable.v1.app_table.create(create_app_table_req, option)

        if not create_app_table_resp.success():
            lark.logger.error(
                f"client.bitable.v1.app_table.create failed, "
                f"code: {create_app_table_resp.code}, "
                f"msg: {create_app_table_resp.msg}, "
                f"log_id: {create_app_table_resp.get_log_id()}")
            return create_app_table_resp

        tables.append(create_app_table_resp.data)

    # 返回结果
    response = CreateAppAndTablesResponse()
    response.code = 0
    response.msg = "success"
    response.create_app_response = create_app_resp.data
    response.create_app_tables_response = tables

    return response
```

### 复制粘贴某个范围的单元格数据

示例代码如下，源文件地址：[copy_and_paste_by_range.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/sheets/copy_and_paste_by_range.py)

复制粘贴某个范围的单元格数据，使用到两个 OpenAPI：
- [读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)
- [向单个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN)

```python
import json
from typing import Optional, Dict

import lark_oapi as lark


class CopyAndPasteByRangeRequest(object):
    def __init__(self) -> None:
        self.spreadsheetToken: Optional[str] = None  # 表格token，必填
        self.src_range: Optional[str] = None  # 来源范围，必填
        self.dst_range: Optional[str] = None  # 目标范围，必填


class CopyAndPasteRangeResponse(lark.BaseResponse):
    def __init__(self):
        super().__init__()
        self.read_response: Optional[Dict] = None
        self.write_response: Optional[Dict] = None


# 复制粘贴某个范围的单元格数据
def copy_and_paste_range(client: lark.Client, request: CopyAndPasteByRangeRequest) -> lark.BaseResponse:
    # 读取单个范围
    read_req: lark.BaseRequest = lark.BaseRequest.builder() \
        .http_method(lark.HttpMethod.GET) \
        .uri(f"/open-apis/sheets/v2/spreadsheets/{request.spreadsheetToken}/values/{request.src_range}") \
        .token_types({lark.AccessTokenType.TENANT}) \
        .build()

    read_resp = client.request(read_req)

    if not read_resp.success():
        lark.logger.error(
            f"client.im.v1.message.create failed, "
            f"code: {read_resp.code}, "
            f"msg: {read_resp.msg}, "
            f"log_id: {read_resp.get_log_id()}")
        return read_resp

    # 向单个范围写入数据
    option = lark.RequestOption.builder().headers({"X-Tt-Logid": read_resp.get_log_id()}).build()
    read_data = json.loads(str(read_resp.raw.content, lark.UTF_8)).get("data")
    body = {
        "valueRange": {
            "range": request.dst_range,
            "values": read_data.get("valueRange").get("values"),
        }
    }
    write_req: lark.BaseRequest = lark.BaseRequest.builder() \
        .http_method(lark.HttpMethod.PUT) \
        .uri(f"/open-apis/sheets/v2/spreadsheets/{request.spreadsheetToken}/values") \
        .token_types({lark.AccessTokenType.TENANT}) \
        .body(body) \
        .build()

    write_resp = client.request(write_req, option)

    if not write_resp.success():
        lark.logger.error(
            f"client.im.v1.message.create failed, "
            f"code: {write_resp.code}, "
            f"msg: {write_resp.msg}, "
            f"log_id: {write_resp.get_log_id()}")
        return write_resp

    # 返回结果
    response = CopyAndPasteRangeResponse()
    response.code = 0
    response.msg = "success"
    response.read_response = read_data
    response.write_response = json.loads(str(write_resp.raw.content, lark.UTF_8)).get("data")

    return response
```

### 下载指定范围单元格的所有素材列表

示例代码如下，源文件地址：[download_media_by_range.py](https://github.com/larksuite/oapi-sdk-python-demo/blob/main/composite_api/sheets/download_media_by_range.py)

下载指定范围单元格的所有素材列表，使用到两个 OpenAPI：
- [读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)
- [下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)

```python
import json

import lark_oapi as lark
from lark_oapi.api.drive.v1 import *


class DownloadMediaByRangeRequest(object):
    def __init__(self) -> None:
        self.spreadsheetToken: Optional[str] = None  # 表格token，必填
        self.range: Optional[str] = None  # 单元格范围，必填


class DownloadMediaByRangeResponse(lark.BaseResponse):
    def __init__(self):
        super().__init__()
        self.read_response: Optional[Dict] = None
        self.download_media_response: List[DownloadMediaResponse] = []


# 下载指定范围单元格的所有素材列表
def download_media_by_range(client: lark.Client, request: DownloadMediaByRangeRequest):
    # 读取单个范围
    read_req: lark.BaseRequest = lark.BaseRequest.builder() \
        .http_method(lark.HttpMethod.GET) \
        .uri(f"/open-apis/sheets/v2/spreadsheets/{request.spreadsheetToken}/values/{request.range}") \
        .token_types({lark.AccessTokenType.TENANT}) \
        .build()

    read_resp = client.request(read_req)

    if not read_resp.success():
        lark.logger.error(
            f"client.im.v1.message.create failed, "
            f"code: {read_resp.code}, "
            f"msg: {read_resp.msg}, "
            f"log_id: {read_resp.get_log_id()}")
        return read_resp

    # 下载文件
    read_data = json.loads(str(read_resp.raw.content, lark.UTF_8)).get("data")
    tokens = _parse_file_token(read_data.get("valueRange").get("values"), [])
    option = lark.RequestOption.builder().headers({"X-Tt-Logid": read_resp.get_log_id()}).build()
    files = []

    for token in tokens:
        download_media_req = DownloadMediaRequest.builder() \
            .file_token(token) \
            .build()

        download_media_resp = client.drive.v1.media.download(download_media_req, option)

        if not download_media_resp.success():
            lark.logger.error(
                f"client.drive.v1.media.download failed, "
                f"code: {read_resp.code}, "
                f"msg: {read_resp.msg}, "
                f"log_id: {read_resp.get_log_id()}")
            return download_media_resp

        files.append(download_media_resp)

    # 返回结果
    response = DownloadMediaByRangeResponse()
    response.code = 0
    response.msg = "success"
    response.read_response = read_data
    response.download_media_response = files

    return response


def _parse_file_token(values: List[Any], tokens: List[str]) -> List[str]:
    if values is None or len(values) == 0:
        return tokens
    for i in values:
        if isinstance(i, List):
            _parse_file_token(i, tokens)
        elif isinstance(i, dict) and "fileToken" in i:
            tokens.append(i.get("fileToken"))

    return tokens
```
