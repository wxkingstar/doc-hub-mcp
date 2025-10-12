<!--
title: 获取用户可用的应用
id: 6907569742384070658
fullPath: /ukTMukTMukTM/uMjM3UjLzIzN14yMycTN
updatedAt: 1731902094000
source: https://open.feishu.cn/document/server-docs/application-v6/admin/obtain-the-apps-available-to-a-user
-->
# 获取用户可用的应用

该接口用于查询用户可用的应用列表，只能被企业自建应用调用。

## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/application/v1/user/visible_apps</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-th>
 权限要求
 <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
</md-th>
      <md-td>
        <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取用户可用的应用</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
 
**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"
          
 [了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::

### 请求参数

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">参数</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>说明</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>page_token</md-td>  
      <md-td>string</md-td>  
      <md-td>否</md-td> 
      <md-td>分页起始位置标示，不填表示从头开始。</md-td>
    </md-tr>
    <md-tr> 
      <md-td>page_size</md-td>  
      <md-td>int</md-td>  
      <md-td>否</md-td> 
      <md-td>单页需求最大个数（最大 100），0 自动最大个数。</md-td>
    </md-tr>
    <md-tr>
      <md-td>lang</md-td>  
      <md-td>string</md-td>  
      <md-td>否</md-td> 
      <md-td>优先展示的应用信息的语言版本。
- zh_cn：简体中文
- zh_hk：繁体中文（中国香港）
- zh_tw：繁体中文（中国台湾）
- en_us：英文
- ja_jp：日文
- ko_kr：韩语
- es_es：西班牙语
- pt-br：葡萄牙语（巴西）
- th_th：泰语
- vi_vn：越南语
- id_id：印尼语</md-td>
	</md-tr>
	<md-tr>
	  <md-td>open_id</md-td>  
	  <md-td>string</md-td>  
	  <md-td>否</md-td> 
	  <md-td>目标用户 open_id。</md-td>
	</md-tr>
	<md-tr>
	  <md-td>user_id</md-td>  
	  <md-td>string</md-td>  
	  <md-td>否</md-td> 
	  <md-td>目标用户 user_id，与 open_id 至少给其中之一，user_id 优先于 open_id。</md-td>
	</md-tr>
  </md-tbody> 
</md-table>
:::

## 响应

### 响应体
|参数|说明|
|--|--|
|code|返回码，非 0 表示失败|
|msg|返回码的描述|
|data|返回的业务信息，仅 code = 0 时有效|
|&emsp;∟page_token|下一个请求页应当给的起始位置|
|&emsp;∟page_size|本次请求实际返回的页大小|
|&emsp;∟total_count|可用的应用总数|
|&emsp;∟has_more|是否还有更多应用|
|&emsp;∟lang|当前选择的版本语言|
|&emsp;∟app_list|应用列表|
|&emsp;&emsp;∟app_id|应用 ID|
|&emsp;&emsp;∟primary_language|应用首选语言|
|&emsp;&emsp;∟app_name|应用名称|
|&emsp;&emsp;∟description|应用描述|
|&emsp;&emsp;∟avatar_url|应用 icon|
|&emsp;&emsp;∟app_scene_type|应用类型，0：企业自建应用；1：应用商店应用|
|&emsp;&emsp;∟status|启停状态，0：停用；1：启用|
|&emsp;&emsp;∟mobile_default_ability|移动端默认的应用功能，0：未开启；1：小程序；2：H5；8：机器人|
|&emsp;&emsp;∟pc_default_ability|PC客户端默认的应用功能，0：未开启；1：小程序；2：H5；8：机器人|
|&emsp;&emsp;∟create_source|应用创建来源：`developer_console`：开发者后台；`base`：多维表格自动化流程创建的应用；`app_engine`：飞书应用引擎；`bot_builder`：机器人助手；`aily`：aily(智能伙伴搭建平台)；`unknown`：未知来源|

### 响应示例
```json
{
    "code": 0,
    "data": {
        "app_list": [
            {
                "app_id": "cli_9cb844403dbb9108",
                "app_name": "审批",
                "app_scene_type": 1,
                "avatar_url": "https://s3-imfile.feishucdn.com/static-resource/v1/e37af67a-b012-4ee0-80ea-a4d28c94b4eg",
                "description": "简单、高效、开放的审批工具",
                "mobile_default_ability": 1,
                "pc_default_ability": 1,
                "primary_language": "zh_cn",
                "status": 1,
                "create_source": "developer_console"
            },
            {
                "app_id": "cli_9cb844403dbb9108",
                "app_name": "工资单",
                "app_scene_type": 1,
                "avatar_url": "https://s1-imfile.feishucdn.com/static-resource/v1/da710014fc4c975ce66b~?image_size=noop&cut_type=&quality=_q100&format=image&sticker_format=.webp",
                "description": "便捷、安全的工资单管理，一键完成工资发布",
                "mobile_default_ability": 1,
                "pc_default_ability": 1,
                "primary_language": "zh_cn",
                "status": 1,
                "create_source": "developer_console"
            },
            {
                "app_id": "cli_9cb844403dbb9108",
                "app_name": "问卷网",
                "app_scene_type": 1,
                "avatar_url": "https://s3-imfile.feishucdn.com/static-resource/v1/d5ca5971-437b-4b1d-b295-679268f9a2cg",
                "description": "专业易用的「问卷调研 · 报名表单 · 考试测评」平台",
                "mobile_default_ability": 1,
                "pc_default_ability": 1,
                "primary_language": "zh_cn",
                "status": 1,
                "create_source": "developer_console"
            }
        ],
        "has_more": 1,
        "lang": "zh_cn",
        "page_size": 3,
        "page_token": "3",
        "total_count": 34
    },
    "msg": "success"
}
```

