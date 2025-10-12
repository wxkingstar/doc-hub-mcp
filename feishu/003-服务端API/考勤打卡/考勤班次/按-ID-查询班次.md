---
title: "按 ID 查询班次"
source_url: https://open.feishu.cn/document/server-docs/attendance-v1/shift/get
last_remote_update: 2025-09-12
last_remote_update_timestamp: 1757646480000
---
最后更新于 2025-09-12

# 按 ID 查询班次

通过班次 ID 获取班次详情。对应功能为假勤设置-[班次设置](https://example.feishu.cn/people/workforce-management/setting/group/shifts)班次列表中的具体班次，班次信息可以点击班次名称查看

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/attendance/v1/shifts/:shift_id
HTTP Method | GET
接口频率限制 | [50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 写入打卡管理规则(attendance:rule)  
            导出打卡管理规则(attendance:rule:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
shift_id | string | 班次 ID，获取方式：1）[按名称查询班次](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query) 2）[创建班次](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/create)  
**示例值**："6919358778597097404"

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | shift | \-
shift_id | string | 班次 ID，对应入参中的班次ID
shift_name | string | 班次名称
punch_times | int | 打卡次数
sub_shift_leader_ids | string\[\] | 无效字段，请勿使用
is_flexible | boolean | 是否弹性打卡
flexible_minutes | int | 弹性打卡时间,单位：分钟，设置【上班最多可晚到】与【下班最多可早走】时间，如果不设置flexible_rule则生效
flexible_rule | flexible_rule\[\] | 弹性打卡时间设置
flexible_early_minutes | int | 下班最多可早走，单位：分钟（上班早到几分钟，下班可早走几分钟）
flexible_late_minutes | int | 上班最多可晚到，单位：分钟（上班晚到几分钟，下班须晚走几分钟）
no_need_off | boolean | 不需要打下班卡
punch_time_rule | punch_time_rule\[\] | 打卡规则
on_time | string | 上班时间，格式为hh:mm
off_time | string | 下班时间，格式为hh:mm。如果是第二天凌晨2点， 则为26:00
late_minutes_as_late | int | 晚到多久记为迟到，单位：分钟
late_minutes_as_lack | int | 晚到多久记为缺卡，单位：分钟
on_advance_minutes | int | 最早多久可打上班卡，单位：分钟
early_minutes_as_early | int | 早退多久记为早退，单位：分钟
early_minutes_as_lack | int | 早退多久记为缺卡，单位：分钟
off_delay_minutes | int | 最晚多久可打下班卡，单位：分钟
late_minutes_as_serious_late | int | 晚到多久记为严重迟到，单位：分钟
no_need_on | boolean | true为需要打上班卡，false为不需要上班打卡。  
注意和接口创建时的区别：接口创建时，no_need_on传参false表示需要打上班卡，true为不需要打上班卡
no_need_off | boolean | true为需要打下班卡，false为不需要下班打卡。  
注意和接口创建时的区别：接口创建时，no_need_off传参false表示需要打下班卡，true为不需要打下班卡
late_off_late_on_rule | late_off_late_on_rule\[\] | 晚走晚到规则（仅飞书人事企业版可用）
late_off_minutes | int | 晚走多久，单位：分钟
late_on_minutes | int | 晚到多久，单位：分钟
rest_time_rule | rest_rule\[\] | 休息规则
rest_begin_time | string | 休息开始，格式为mm:ss
rest_end_time | string | 休息结束，格式为mm:ss
overtime_rule | overtime_rule\[\] | 加班规则（仅飞书人事企业版可用）
on_overtime | string | 上班时间，格式为mm:ss
off_overtime | string | 下班时间，格式为mm:ss
day_type | int | 日期类型，【是否弹性打卡 = ture】时，不可设置为“休息日”  可选值：1：工作日 2：休息日     示例值：（默认值）1
overtime_rest_time_rule | rest_rule\[\] | 班外休息规则
rest_begin_time | string | 休息开始
rest_end_time | string | 休息结束
late_minutes_as_serious_late | int | 晚到多久记为严重迟到（优先级比原有字段高）
shift_middle_time_rule | shift_middle_time_rule | 半天分割规则
middle_time_type | int | 半天分割类型  
**可选值有**：  
- 0：按全天班次时长（含休息）的中点分割  
- 1：按全天班次时长（不含休息）的中点分割  
- 2：按休息时间分割  
- 3：按固定时间点分割
fixed_middle_time | string | 固定分割时间点（middle_time_type 为 3 时有效）
shift_attendance_time_config | shift_attendance_time_config | 应出勤配置
attendance_time | number(float) | 应出勤时长
on_attendance_time | number(float) | 上半天应出勤时长
off_attendance_time | number(float) | 下半天应出勤时长
late_off_late_on_setting | late_off_late_on_setting | 晚走次日晚到配置规则
late_off_base_on_time_type | int | 当日晚走时间计算规则  
**可选值有**：  
- 0：弹性规则  
- 1：固定规则
late_on_base_on_time_type | int | 次日晚到时间计算规则  
**可选值有**：  
- 0：固定规则  
- 1：弹性规则
id | string | 班次id(更新班次时需要传递)
rest_time_flexible_configs | rest_time_flexible_config\[\] | 休息弹性设置
need_flexible | boolean | 是否开启休息弹性班次
late_mins | int | 休息弹性向后弹的分钟数

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "shift_id": "6919358778597097404",
        "shift_name": "早班",
        "punch_times": 1,
        "sub_shift_leader_ids": [
            "dd31248a"
        ],
        "is_flexible": false,
        "flexible_minutes": 60,
        "flexible_rule": [
            {
                "flexible_early_minutes": 60,
                "flexible_late_minutes": 60
            }
        ],
        "no_need_off": true,
        "punch_time_rule": [
            {
                "on_time": "9:00",
                "off_time": "18:00， 第二天凌晨2点， 26:00",
                "late_minutes_as_late": 30,
                "late_minutes_as_lack": 60,
                "on_advance_minutes": 60,
                "early_minutes_as_early": 30,
                "early_minutes_as_lack": 60,
                "off_delay_minutes": 60,
                "late_minutes_as_serious_late": 40,
                "no_need_on": true,
                "no_need_off": true
            }
        ],
        "late_off_late_on_rule": [
            {
                "late_off_minutes": 60,
                "late_on_minutes": 30
            }
        ],
        "rest_time_rule": [
            {
                "rest_begin_time": "13:00",
                "rest_end_time": "14:00"
            }
        ],
        "overtime_rule": [
            {
                "on_overtime": "9:00",
                "off_overtime": "18:00"
            }
        ],
        "day_type": 1,
        "overtime_rest_time_rule": [
            {
                "rest_begin_time": "13:00",
                "rest_end_time": "14:00"
            }
        ],
        "late_minutes_as_serious_late": 40,
        "shift_middle_time_rule": {
            "middle_time_type": 0,
            "fixed_middle_time": "12:00"
        },
        "shift_attendance_time_config": {
            "attendance_time": 1,
            "on_attendance_time": 1,
            "off_attendance_time": 1
        },
        "late_off_late_on_setting": {
            "late_off_base_on_time_type": 0,
            "late_on_base_on_time_type": 0
        },
        "id": "6919358778597097404",
        "rest_time_flexible_configs": [
            {
                "need_flexible": false,
                "late_mins": 0
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1220001 | param is invalis | 入参校验失败，请根据具体返回的信息检查入参。例如“employee_type invalid”代表人员类型异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1220002 | tenant_id is empty | 请检查入参中的 tenant_access_token是否正确
500 | 1225000 | param is invalis | 请参考实际返回的错误信息排查问题。例如“internal server error”代表内部服务异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)
500 | 1226000 | param is invalis | 班次服务异常错误码，请参考实际返回的错误信息排查问题。例如“internal server error”代表内部服务异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1226003 | param is invalis | 请参考实际返回的错误信息排查问题。例如“default shift are not allowed to change.”代表默认班次不能修改。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1220600 | 通用错误信息 | 通用错误信息包含多条，详细的错误信息以及处理建议可参见[错误信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/attendance-development-guidelines)。
