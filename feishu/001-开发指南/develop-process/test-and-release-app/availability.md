<!--
title: 配置应用可用范围
id: 6976091873958330369
fullPath: /home/introduction-to-scope-and-authorization/availability
updatedAt: 1725008175000
source: https://open.feishu.cn/document/develop-process/test-and-release-app/availability
-->
# 配置应用可用范围

应用可用范围定义了哪些用户群体（组织、用户组、个人）可以使用该应用，适用于需要对应用使用权限进行管控的场景。例如，你开发的应用只需提供给 IT 部门的成员使用，则可以设置应用的可用范围为 IT 部门，这样其他部门的成员便无法使用该应用，从而实现权限控制。

## 功能说明

配置应用可用范围时，需要遵循 **最小可用原则**，即可用范围设置为必须使用应用的部门或成员即可。避免因应用可用范围过大而导致普通成员获取到企业敏感数据，从而产生数据安全风险。

- 企业自建应用和商店应用均支持配置应用可用范围。

- 应用开发者在发布应用阶段可以为应用配置可用范围；企业管理员在管理后台可以管理指定应用的可用范围。

## 为自建应用配置可用范围

### 应用开发者

如果你是应用开发者，当你在创建应用版本时，可以为应用配置可用范围。每次修改可用范围后都需要提交版本审核，在通过企业管理员审核正式上线之后， 新的可用范围才会生效。

1. 登录[开发者后台](https://open.feishu.cn/app)。找到并进入指定应用详情页。

2. 在左侧导航栏进入 **应用发布** > **版本管理与发布** 页面，点击 **创建版本**。

    ::: note
    仅应用所有者、管理员可以发布应用，其他成员不展示发布入口。测试版应用无需发布，自动生效。
    :::

3. 在 **版本详情** 页面，找到 **可用范围** 区域，点击 **编辑**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/53fd24dd09784af10307e41d16a8d2a0_WZEdRvwlLs.png?height=1224&lazyload=true&maxWidth=600&width=2332)

4. 在弹出的对话框内，配置应用可用范围。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dca6f72f923c448e6de90d940890b40d_VnIMokkaRo.png?height=600&lazyload=true&maxWidth=600&width=1740)
    
    - **全部成员**：该应用在企业内全员可用。
    
    - **部分成员**：你需要手动选择企业下的部门或成员范围，后续仅选中的部门或成员可用该应用。

5. 配置完成后，在页面底部点击 **保存**，并发布应用使配置生效。

### 企业管理员

如果你是企业管理员，可以在管理后台调整指定应用的可用范围。你可以按部门、用户组、用户设置。由于企业管理员本身就是具备权限变更审核权限的，所以无需发布新版本，可直接修改应用的可用范围。

#### 方式一：在审核阶段调整应用可用范围

1. 在[管理后台](https://feishu.cn/admin)的 **工作台** > **应用审核** 中，进入审核中的应用详情页，找到 **可用范围设置**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b5fbfae3aaefd794cada7bf82c946e3f_kjTNwXpbYv.png?height=1414&lazyload=true&maxWidth=600&width=2138)

2. 点击 **配置**，手动调整可用范围。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9c87964d423b0cec2c83094107e6c212_fT0hBJVNuj.png?height=682&lazyload=true&maxWidth=600&width=1874)
    
    - **全部成员**：选择后，该应用在企业内全员可用。
    
    - **部分成员**：选择后，你需要手动选择企业下的部门或成员范围，后续仅选中的部门或成员可用该应用。

#### 方式二：在应用管理中调整应用的可用范围

1. 在[管理后台](https://feishu.cn/admin)的 **工作台** > **应用管理** 中，进入指定应用的详情页。

2. 在 **应用可用范围** 区域，选择完成以下配置。
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/40a591f2ac06ed260717c2f8255f2e59_olaRxybWrd.png?height=1046&lazyload=true&maxWidth=600&width=2306)
    
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:40%">配置项</md-th>
<md-th style="width:60%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>允许不在可用范围内的成员申请使用应用</md-td>
<md-td>
	
如果应用管理规则中开启了 **允许成员申请使用没有权限的应用** 功能，则你可以在此处选择勾选复选框。开启后没有应用可用权限的成员，可通过分享链接等方式申请使用应用。
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86f65a5d50882fc620d8c70dba6ebd0d_Ew6FI97cU0.png?height=1418&lazyload=true&maxWidth=500&width=2164)
  
</md-td>
</md-tr>

<md-tr>
<md-td>展示规则</md-td>
<md-td>勾选后应用将在客户端应用中心中展示。</md-td>
</md-tr>

<md-tr>
<md-td>可用成员</md-td>
<md-td>
	
点击 **配置**，手动调整应用的可用范围。

- **全部成员**：选择后，该应用在企业内全员可用。

- **部分成员**：选择后，你需要手动选择企业下的部门或成员范围，后续仅选中的部门或成员可用该应用。
	
</md-td>
</md-tr>

<md-tr>
<md-td>禁用成员</md-td>
<md-td>
	
点击 **配置**，手动设置禁用范围，在禁用范围内的成员不可使用该应用。

:::note

- 同时配置了可用成员和禁用成员时，禁用成员的配置优先级高于可用成员。例如：可用成员和禁用成员的范围内存在相同的成员，则该成员禁用当前应用。

- 如果某一成员是当前应用的所有者，即便被管理员加入禁用成员范围内，也仍然能使用该应用。

	
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 为商店应用配置可用范围

### 应用开发者

如果你是应用开发者，在发布应用时，可以通过不同发布方式设置应用的可用范围。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">应用上架类型</md-th>
<md-th style="width:40%">应用可见范围</md-th>
<md-th style="width:30%">应用安装方式</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>全量上架</md-td>
<md-td>所有飞书用户（飞书个人版和团队版租户）</md-td>
<md-td>在应用中心中安装</md-td>
</md-tr>

<md-tr>
<md-td>非公开上架</md-td>
<md-td>所有飞书用户（飞书个人版和团队版租户）</md-td>
<md-td>获得安装链接的用户</md-td>
</md-tr>

<md-tr>
<md-td>定向上架</md-td>
<md-td>应用灰度可见范围内的飞书用户（飞书团队版租户，上限为 30 个租户）</md-td>
<md-td>在应用中心中安装</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
关于发布商店应用的详细说明，参见[七、发布商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)。
:::

### 企业管理员

如果你是企业管理员，可以在管理后台调整指定应用的可用范围。

1. 在[管理后台](https://feishu.cn/admin)的 **工作台** > **应用管理** 中，进入指定应用的详情页。

2. 在 **应用可用范围** 区域，选择完成以下配置。
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3742f0fa1ef5c2940f3d0bc0f1d097a_1elCe17siI.png?height=1038&lazyload=true&maxWidth=600&width=2338)

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:40%">配置项</md-th>
<md-th style="width:60%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>允许不在可用范围内的成员申请使用应用</md-td>
<md-td>
	
如果应用管理规则中开启了 **允许成员申请使用没有权限的应用** 功能，则你可以在此处选择勾选复选框。开启后没有应用可用权限的成员，可通过分享链接等方式申请使用应用。
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86f65a5d50882fc620d8c70dba6ebd0d_Ew6FI97cU0.png?height=1418&lazyload=true&maxWidth=500&width=2164)
  
</md-td>
</md-tr>

<md-tr>
<md-td>可用成员</md-td>
<md-td>
	
点击 **配置**，手动调整应用的可用范围。

- **全部成员**：选择后，该应用在企业内全员可用。

- **部分成员**：选择后，你需要手动选择企业下的部门或成员范围，后续仅选中的部门或成员可用该应用。
	
</md-td>
</md-tr>

<md-tr>
<md-td>禁用成员</md-td>
<md-td>
	
点击 **配置**，手动设置禁用范围，在禁用范围内的成员不可使用该应用。

:::note

- 同时配置了可用成员和禁用成员时，禁用成员的配置优先级高于可用成员。例如：可用成员和禁用成员的范围内存在相同的成员，则该成员禁用当前应用。

- 如果某一成员是当前应用的所有者，即便被管理员加入禁用成员范围内，也仍然能使用该应用。

	
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 常见问题

### 应用需访问的数据范围大于应用的可用范围怎么办？

- 问题背景：开发应用时可能会遇到以下场景。
    
    应用的用户群体有特定的范围，但该应用需要访问的数据范围不仅限于该用户群体范围内。例如，一款财务类应用，用户群体是财务部的人员，但该应用需要获取全公司的人员数据。

- 解决方案：应用的开发者需要为应用分别配置可用范围和数据权限范围。
    
    - 在应用可用范围中，配置仅财务部人员可用。
    
    - 在通讯录权限范围中，配置可获取全部员工的数据。详情参见[权限范围详解](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

### 后台已经设置了 A 用户/部门在应用可见范围内，为什么 A 用户/部门的成员还是搜索不到应用？

排查方案：

- 方案一
    
    应用开发者检查已发布的最新版本的应用可见范围是否包含 A 用户/部门。同时，企业管理员可以在飞书管理后台的应用管理中查看最新线上版本的应用可用范围。

- 方案二
    
    应用开发者尝试再次配置应用可用范围，并重新发布版本上线。该场景可能是应用配置存在缓存，没有及时更新，重新配置发版可使缓存失效。

- 方案三
    
    企业管理员在管理后台的应用管理中，检查 A 用户/部门是否在禁用成员内。