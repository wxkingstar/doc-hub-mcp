<!--
title: 功能介绍
id: 7104154222309113859
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/admin-v1/badge/quick-start
updatedAt: 1736855116000
source: https://open.feishu.cn/document/server-docs/admin-v1/badge/quick-start
-->
# 功能介绍

企业勋章，旨在拓展「企业文化+员工激励」的场景，构建勋章、勋章等荣誉体系和员工关怀体系，将员工互动和企业文化相结合，开放企业定制化能力。
我们提供了安全、可靠的API，来方便你管理勋章信息，配置勋章授予名单。使用我们的API接口，可以将飞书管理后台的企业勋章功能与用户自己定制方案打通。

针对如何快速使用勋章功能，可以参考文档[管理员如何上传并管理企业勋章？](https://www.feishu.cn/hc/zh-CN/articles/301996260813)，快速掌握使用。

## 权限范围
### 可申请的应用
:::html
<md-app-support types="custom,isv"></md-app-support>
:::
### 依赖的权限
:::html
<md-table>
  <md-tbody>
    <md-tr>
      <md-th>
            勋章资源的接口权限
      </md-th>
      <md-td>
            <md-perm name="admin:badge" desc="查看、创建、编辑勋章信息和上传勋章图片" support_app_types="custom,isv" tags="">查看、创建、编辑勋章信息和上传勋章图片</md-perm>
      </md-td>
    </md-tr>
        <md-tr>
      <md-th>
            授予名单资源的接口权限
      </md-th>
      <md-td>
            <md-perm name="admin:badge.grant" desc="查看、创建、编辑、删除勋章授予名单" support_app_types="custom,isv" tags="">查看、创建、编辑、删除勋章授予名单</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
        授予名单接口使用通讯录实体的依赖权限
      </md-th>
      <md-td>
      <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
      </md-td>
	</md-tr>
  </md-tbody>
</md-table>
:::
## 开发教程
**教程步骤拆解**                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  企业所用飞书版本必须为企业专业版或企业旗舰版|
| 2.  开启应用依赖的相关权限
| 3.  获取应用访问凭证|
| 4.  上传勋章详情图、挂饰图|
| 5.  创建和更新勋章信息|
| 6.  查看勋章的信息|
| 7.  为勋章创建和更新授予名单

## 资源介绍
勋章业务域以“资源”为中心进行开放，资源的关系图如下：

![48e4a8fb-ac4a-46ef-a0d8-db51f02583e1.svg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/16ac1043b90f31ba631079dd58dfab82_CkVrfjaYrX.svg?height=392&lazyload=true&width=1113)

资源的定义如下：
**资源** | **资源定义**                                                                        |
| ------ | ------------------------------------------------------------------------------- |
| 勋章     | 飞书某个企业内的一枚勋章。勋章可以授予给企业内成员，授予后勋章将陈列在对应成员的个人名片页及勋章墙上，成员也可以将勋章佩戴在头像上。              |
| 授予名单   | 一枚勋章下可以创建多份授予名单，授予名单代表将这枚勋章在一个特定的时间范围内授予给一个特定的成员群体。