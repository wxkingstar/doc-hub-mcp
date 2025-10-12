<!--
title: 记录筛选参数填写说明
id: 7312729248342376452
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide
updatedAt: 1753076718000
source: https://open.feishu.cn/document/docs/bitable-v1/app-table-record/record-filter-guide
-->
# 记录筛选参数填写说明

在多维表格部分接口中，可以通过请求参数 `filter` 等设置筛选条件，筛选出你需要的记录。本文档介绍如何填写筛选参数。

## 筛选参数结构说明

筛选参数的描述和结构如下所示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 25%;">参数名称</md-th>
      <md-th style="width: 25%;">数据类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>filter</md-td>
      <md-td>filter_info</md-td>
      <md-td>包含条件筛选信息的对象。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ conjunction</md-td>
      <md-td>string</md-td>
      <md-td>表示条件之间的逻辑连接词，可以是 "and" 或 "or"。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ conditions</md-td>
      <md-td>	condition[]</md-td>
      <md-td>筛选条件集合。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └  field_name</md-td>
      <md-td>string</md-td>
      <md-td>条件字段的名称。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └  operator</md-td>
      <md-td>string</md-td>
      <md-td>条件运算符。其可选值有：
- is：等于
- isNot：不等于（不支持日期字段）
- contains：包含（不支持日期字段）
- doesNotContain：不包含（不支持日期字段）
- isEmpty：为空
- isNotEmpty：不为空
- isGreater：大于
- isGreaterEqual：大于等于（不支持日期字段）
- isLess：小于
- isLessEqual：小于等于（不支持日期字段）
- like：LIKE 运算符。暂未支持
- in：IN 运算符。暂未支持</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ value</md-td>
      <md-td>string[]</md-td>
      <md-td>条件的值，可以是单个值或多个值的数组。不同字段类型和不同的 operator 可填的值不同。详情参考下文字段目标值（value）填写说明。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 `filter` 的数据结构如下所示：
```json
{
  "filter": {
    "conjunction": "and",
    "conditions": [
      {
        "field_name": "字段1",
        "operator": "is",
        "value": [
          "文本内容"
        ]
      }
    ]
  }
}
```

## filter 使用示例

如下为一个员工销售额表。本小节根据该表格提供使用 `filter` 参数示例。
|  员工名称	| 职位  	| 销售额 	|
|---	|---	|---	|
| 张小一 	| 初级销售员 	| 10000.0 	|
| 张小二 	| 初级销售员 	| 15000.0 	|
| 张小三 	| 初级销售员 	| 20000.0 	|
| 张小四 	| 高级销售员 	| 30000.0 	|
| 张小五 	| 高级销售员 	| 50000.0 	|
| 张小六 	| 销售经理 	| 100000.0 	|

- 要筛选出职位为"初级销售员"，**且**销售额大于 10000 的记录，filter 参数示例如下所示：

  ```JSON
  {
    "filter": {
      "conjunction": "and",
      "conditions": [
        {
          "field_name": "职位",
          "operator": "is",
          "value": [
            "初级销售员"
          ]
        },
        {
          "field_name": "销售额",
          "operator": "isGreater",
          "value": [
            "10000.0"
          ]
        }
      ]
    }
  }
  ```
  
  
- 要筛选职位为"高级销售员"，或者销售额大于 20000 的记录，filter 参数示例如下所示：

    ```JSON
    {
      "filter": {
        "conjunction": "or",
        "conditions": [
          {
            "field_name": "职位",
            "operator": "is",
            "value": [
              "高级销售员"
            ]
          },
          {
            "field_name": "销售额",
            "operator": "isGreater",
            "value": [
              "20000.0"
            ]
          }
        ]
      }
    }
    ```
    
- 要筛选出职位为"初级销售员" **或**“高级销售员”，**且** 销售额为 10000 **或** 20000 的记录，filter 参数示例如下所示：

:::note
如下示例，目前仅支持使用一层 children 参数，不支持再次嵌套使用。
:::
  ```json
  {
    "filter": {
      "conjunction": "and",
      "children": [
        {
          "conjunction": "or",
          "conditions": [
            {
              "field_name": "职位",
              "operator": "is",
              "value": [
                "高级销售员"
              ]
            },
            {
              "field_name": "职位",
              "operator": "is",
              "value": [
                "初级销售员"
              ]
            }
          ]
        },
        {
          "conjunction": "or",
          "conditions": [
            {
              "field_name": "销售额",
              "operator": "is",
              "value": [
                "10000.0"
              ]
            },
            {
              "field_name": "销售额",
              "operator": "is",
              "value": [
                "20000.0"
              ]
            }
          ]
        }
      ]
    }
  }
  ```
    
## 字段目标值（value）填写说明
多维表格支持以下类型的字段作为筛选条件。目前暂不支持公式或查找引用的字段类型作为筛选条件。
:::html
<md-alert type="warn">
当 value 填空值 [] 时，请确保按照 `"value":[]` 格式传入 value，否则将报缺失 value 值的错误。
</md-alert>
:::

:::html

<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">字段类型</md-th>
      <md-th>目标值示例</md-th>
      <md-th>描述</md-th>
      <md-th style="width: 40%;">限制</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>多行文本</md-td>
      <md-td><code>["文本内容"]</code></md-td>
      <md-td>填写对应的文本内容</md-td>
      <md-td>- 列表只能有一个元素或零个元素
 - operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>条码</md-td>
      <md-td><code>["条码内容"]</code></md-td>
      <md-td>填写对应的条码内容</md-td>
      <md-td>- 列表只能有一个元素或零个元素
 - operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>数字</md-td>
      <md-td><code>["23.4"]</code></md-td>
      <md-td>填写对应数字的字符串形式</md-td>
      <md-td>- 列表只能有一个元素或零个元素
 - operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>货币</md-td>
      <md-td><code>["23.4"]</code></md-td>
      <md-td>填写对应数字的字符串形式</md-td>
      <md-td>- 列表只能有一个元素或零个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>进度</md-td>
      <md-td><code>["0.34"]</code></md-td>
      <md-td>填写对应数字的字符串形式</md-td>
      <md-td>- 列表只能有一个元素或零个元素
 - operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>评分</md-td>
      <md-td><code>["1"]</code></md-td>
      <md-td>填写对应数字的字符串形式</md-td>
      <md-td>- 列表只能有一个元素或零个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
        <md-tr>
      <md-td>单选</md-td>
      <md-td><code>["a","b"]</code></md-td>
      <md-td>列表中填写选项内容</md-td>
      <md-td>列表中可能存在多个元素：
 - operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>多选</md-td>
      <md-td><code>["a","b"]</code></md-td>
      <md-td>包含多个选项名字符串的数组</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>日期</md-td>
      <md-td><code>["ExactDate","1702449755000"]</code></md-td>
      <md-td>Unix 时间戳，单位是毫秒</md-td>
      <md-td>列表中可能存在多个元素，具体参考下文<strong>日期字段填写说明</strong></md-td>
    </md-tr>
    <md-tr>
      <md-td>复选框</md-td>
      <md-td><code>["true"]</code> 或 <code>["false"]</code></md-td>
      <md-td>元素填写对应的布尔内容</md-td>
      <md-td>列表只能有一个元素，operator 仅支持 `is`</md-td>
    </md-tr>
    <md-tr>
      <md-td>人员</md-td>
      <md-td><code>["ou_9a971ded01b4ca66f4798549878abcef"]</code></md-td>
      <md-td>填写对应的用户 ID。用户 ID 类型需与[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)中 `user_id_type`
参数指定的类型一致，默认类型为 open_id
</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>电话号码</md-td>
      <md-td><code>["131xxxx6666"]</code></md-td>
      <md-td>填写对应的电话号码</md-td>
      <md-td>- 列表只能有一个元素或零个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>超链接</md-td>
      <md-td><code>["链接显示名称"]</code></md-td>
      <md-td>填写对应的超链接名称</md-td>
      <md-td>- 列表只能有一个元素或零个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
    <md-tr>
      <md-td>附件</md-td>
      <md-td><code>[]</code></md-td>
      <md-td>仅支持`isEmpty`或`isNotEmpty`</md-td>
      <md-td>需填空值 `[]`</md-td>
    </md-tr>
    
    
  <md-tr>
      <md-td>单向关联</md-td>
      <md-td><code>["recnVYsuqV"]</code></md-td>
      <md-td>填写对应的记录 ID</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>双向关联</md-td>
      <md-td><code>["recnVYsuqV"]</code></md-td>
      <md-td>填写对应的记录 ID</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>地理位置</md-td>
      <md-td><code>["天安门广场，北京市东城区东长安街"]</code></md-td>
      <md-td>填写对应的地址</md-td>
      <md-td>列表只能有一个元素或零个元素，operator为`isEmpty`或`isNotEmpty`填空值[]</md-td>
    </md-tr>
    <md-tr>
      <md-td>群组</md-td>
      <md-td><code>["oc_cd07f55f14d6f4a4f1b51504e7e97f48"]</code></md-td>
      <md-td>填写对应的群组 ID</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>创建时间</md-td>
      <md-td><code>["ExactDate","1702449755000"]</code></md-td>
      <md-td>Unix 时间戳，单位是毫秒</md-td>
      <md-td>列表中可能存在多个元素，具体参考下文<strong>日期字段填写说明</strong></md-td>
    </md-tr>
    <md-tr>
      <md-td>最后更新时间</md-td>
      <md-td><code>["ExactDate","1702449755000"]</code></md-td>
      <md-td>Unix 时间戳，单位是毫秒</md-td>
      <md-td>列表中可能存在多个元素，具体参考下文<strong>日期字段填写说明</strong></md-td>
    </md-tr>
    <md-tr>
      <md-td>创建人</md-td>
      <md-td><code>["ou_9a971ded01b4ca66f4798549878abcef"]</code></md-td>
      <md-td>填写对应的用户 ID。用户 ID 类型需与[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)中 `user_id_type`
参数指定的类型一致，默认类型为 open_id</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>修改人</md-td>
      <md-td><code>["ou_9a971ded01b4ca66f4798549878abcef"]</code></md-td>
      <md-td>填写对应的用户 ID。用户 ID 类型需与[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)中 `user_id_type`
参数指定的类型一致，默认类型为 open_id</md-td>
      <md-td>列表中可能存在多个元素：
- operator 为 `is` 或`isNot` 需填写一个元素
- operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`
- 其他 operator 可填写多个元素</md-td>
    </md-tr>
    <md-tr>
      <md-td>自动编号</md-td>
      <md-td><code>["1"]</code></md-td>
      <md-td>填写对应的自动编号值</md-td>
      <md-td>- 列表只能有一个元素或零个元素
 - operator为`isEmpty`或`isNotEmpty`时，需填空值 `[]`</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::





## 日期字段填写说明
日期筛选时，operator 仅支持 `is`、`isEmpty`、`isNotEmpty`、`isGreater`、`isLess` 五个值。

当 operator 为 `isEmpty`或`isNotEmpty` 时，value 需填空值 `"value":[]`。

当 operator 为 `is`、`isGreater` 或 `isLess` 时，参考下表填写日期字段。


:::html
  <md-table>
    <md-thead>
      <md-tr>
        <md-th style="width: 20%;">value 元素可选值</md-th>
        <md-th style="width: 15%;">描述</md-th>
        <md-th style="width: 25%;">value 目标值示例</md-th>
        <md-th>注意事项</md-th>
      </md-tr>
    </md-thead>
    <md-tbody>
      <md-tr>
        <md-td><code>ExactDate</code></md-td>
        <md-td>具体日期</md-td>
    <md-td><code>["ExactDate","1702449755000"]</code></md-td>
  <md-td>
  - 需要填写 2 个元素。第二个元素需要填写具体日期的时间戳。
          
- 第二个元素虽然是时间戳，但是实际筛选时，会被转为文档时区当天的零点。
    
 - 对于公式日期字段，第二个元素需要填写 yyyy/MM/dd 格式的日期文本，例如 2025/01/07
        </md-td>
      </md-tr>
      <md-tr>
        <md-td><code>Today</code></md-td>
        <md-td>今天</md-td>
        <md-td><code>["Today"]</code></md-td>
        <md-td>需要填写 1 个元素</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>Tomorrow</code></md-td>
        <md-td>明天</md-td>
        <md-td><code>["Tomorrow"]</code></md-td>
        <md-td>需要填写 1 个元素</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>Yesterday</code></md-td>
        <md-td>昨天</md-td>
        <md-td><code>["Yesterday"]</code></md-td>
        <md-td>需要填写 1 个元素</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>CurrentWeek</code></md-td>
        <md-td>本周</md-td>
        <md-td><code>["CurrentWeek"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 `is`
        
        </md-td>
      </md-tr>
      <md-tr>
        <md-td><code>LastWeek</code></md-td>
        <md-td>上周</md-td>
        <md-td><code>["LastWeek"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 `is`</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>CurrentMonth</code></md-td>
        <md-td>本月</md-td>
        <md-td><code>["CurrentMonth"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 `is`</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>LastMonth</code></md-td>
        <md-td>上个月</md-td>
        <md-td><code>["LastMonth"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 `is`</md-td>
      </md-tr>
      <md-tr>
        <md-td><code>TheLastWeek</code></md-td>
        <md-td>过去七天内</md-td>
        <md-td><code>["TheLastWeek"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 <code>is</code> </md-td>      </md-tr>
      <md-tr>
        <md-td><code>TheNextWeek</code></md-td>
        <md-td>未来七天内</md-td>
        <md-td><code>["TheNextWeek"]</code></md-td>
        <md-td>
- 需要填写 1 个元素
- operator 仅支持 <code>is</code> </md-td>
      </md-tr>
      <md-tr>
        <md-td><code>TheLastMonth</code></md-td>
        <md-td>过去三十天内</md-td>
        <md-td><code>["TheLastMonth"]</code></md-td>
        <md-td>
- 需要填写 1 个元素
- operator 仅支持 <code>is</code> </md-td>   </md-tr>
      <md-tr>
        <md-td><code>TheNextMonth</code></md-td>
        <md-td>未来三十天内</md-td>
        <md-td><code>["TheNextMonth"]</code></md-td>
        <md-td>- 需要填写 1 个元素
- operator 仅支持 <code>is</code> </md-td>      </md-tr>
    </md-tbody>
  </md-table>
  :::