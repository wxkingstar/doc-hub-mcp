<!--
title: 时间轴对象触发变更字段
id: 7475276894366973956
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/change-field-combing-caused-by-timeline-objects
updatedAt: 1741946433000
source: https://open.feishu.cn/document/corehr-v1/change-field-combing-caused-by-timeline-objects
-->
#  变更字段
::: html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%;">时间轴对象</md-th>
      <md-th style="width: 30">会引起变更的字段</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td><strong>部门</strong></md-td>
      <md-td>
- 组织名称```organization.name```<br>
- 组织编码```organization.code```<br>
- 上级组织```organization.description```<br>
- 组织描述```organization.superior_org```<br>
- 组织是否启用```organization.active```<br>
- 部门生效时间```effective_time```<br>
- 部门是否保密```is_confidential```<br>
- 部门类型```subtype```<br>
- 部门群```lark_chat_id```<br>
- 是否是根部门```is_root```<br>
- 岗职模式```staffing_model```
      </md-td>
    </md-tr>
    
    <md-tr>
      <md-td><strong>岗位</strong></md-td>
      <md-td>
- 编码```code```<br>
- 是否启用```active```<br>
- 描述```description```<br>
- 工时制度```working_hours_type```<br>
- 生效时间```effecitive_time```
  </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>序列</strong></md-td>
      <md-td>
- 是否启用```active```<br>
- 生效时间```effective```<br>
- 名称```name```<br>
- 编码```code```
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>地点</strong></md-td>
      <md-td>
- 组织名称```organization.name```<br>
- 组织编码```organization.code```<br>
- 上级组织```organization.description```<br>
- 组织描述```organization.superior_org```<br>
- 组织是否启用```organization.active```<br>
- 区/县```address.district```<br>
- 城市```address.city```<br>
- 国家```address.country_region```<br>
- 主要行政区```address.region```<br>
- 地址是否启用```address.active```<br>
- 地址行```address.address_line_(1~9)、address.local_address_line_(1~9)```<br>
- 是否是主要地址```address.is_primary```<br>
- 是否是公开地址```address.is_public```<br>
- 城市往下分的行政区```address.city_subdivision_1、address.city_subdivision_2```<br>
- 主要行政区往下分的行政区```address.region_subdivision_1```<br>
- 邮编```address.postal_code```<br>
- 地址类型```address.address_type```<br>
- 城市文本```address.local_city_text```<br>
- 地点生效时间```effective_time```<br>
- 地点用途```location_usage```<br>
- 区域```locale```
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>公司</strong></md-td>
      <md-td>
- 组织名称```organization.name```<br>
- 组织编码```organization.code```<br>
- 上级组织```organization.description```<br>
- 组织描述```organization.superior_org```<br>
- 组织是否启用```organization.active```<br>
- 公司电话设备类型```phone.device_type、fax.device_type```<br>
- 是否是主要电话```phone.is_primary、fax.is_primary```<br>
- 电话用途```phone.phone_usage、fax.phone_usage```<br>
- 国际区号```phone.international_area_code、fax.international_area_code```<br>
- 公开电话```phone.is_public、fax.is_public```<br>
- 电话号码```phone.phone_number、fax.phone_number```<br>
- 注册地址区/县```registered_office_address.district```<br>
- 注册地址城市```registered_office_address.city```<br>
- 注册地址国家```registered_office_address.country_region```<br>
- 注册地址主要行政区```registered_office_address.region```<br>
- 注册地址是否启用```registered_office_address.active```<br>
- 注册地址行```registered_office_address.address_line_(1~9)、registered_office_address.local_address_line_(1~9)```<br>
- 注册地址是否是主要地址```registered_office_address.is_primary```<br>
- 注册地址是否是公开地址```registered_office_address.is_public```<br>
- 注册地址城市往下分的行政区```registered_office_address.city_subdivision_1、registered_office_address.city_subdivision_2```<br>
- 办公地址主要行政区往下分的行政区```registered_office_address.region_subdivision_1```<br>
- 办公地址邮编```office_address.postal_code```<br>
-办公地址区/县```office_address.district```<br>
- 办公地址城市```office_address.city```<br>
- 办公地址国家```office_address.country_region```<br>
- 办公地址主要行政区```office_address.region```<br>
- 办公地址是否启用```office_address.active```<br>
- 办公地址行```office_address.address_line_(1~9)、office_address.local_address_line_(1~9)```<br>
- 办公地址是否是主要地址```office_address.is_primary```<br>
- 办公地址是否是公开地址```office_address.is_public```<br>
- 办公地址城市往下分的行政区```office_address.city_subdivision_1、office_address.city_subdivision_2```<br>
- 办公地址主要行政区往下分的行政区```office_address.region_subdivision_1```<br>
- 办公地址邮编```office_address.postal_code```<br>
- 法定代表人```legal_representative```<br>
- 主要负责人```primary_manage```<br>
- 是否保密```confidential```<br>
- 公司性质```type```<br>
- 是否是分公司```branch_company```<br>
- 纳税人识别号```taxpayer_id```
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>成本中心</strong></md-td>
      <md-td>
- 组织名称```organization.name```<br>
- 组织编码```organization.code```<br>
- 上级组织```organization.description```<br>
- 组织描述```organization.superior_org```<br>
- 组织是否启用```organization.active```<br>
- 是否自动生成```is_autogenerate```<br>
- 生效时间```effective_time```
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>自定义组织</strong></md-td>
      <md-td>
- 全路径```full_path```<br>
- 编码```code```<br>
- 描述```description```<br>
- 列表排序```list_order```<br>
- 树形排序```tree_order```<br>
- 组织类型```org_type```<br>
- 顺序```organization_order```<br>
- 是否启用```active```
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::