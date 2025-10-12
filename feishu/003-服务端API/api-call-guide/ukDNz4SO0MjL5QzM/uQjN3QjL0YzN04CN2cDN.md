<!--
title: 申请 API 权限
id: 6907569523177390081
fullPath: /ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN
updatedAt: 1747723848000
source: https://open.feishu.cn/document/server-docs/application-scope/introduction
-->
# 申请 API 权限

通过本文你可以了解什么是应用的 API 权限，以及如何为应用申请 API 权限。

## 什么是 API 权限

在开发应用过程中，你可能需要调用[服务端 API](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)或监听已订阅的[事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-list)，该类操作可能涉及访问企业、用户的隐私信息，也可能需要操作企业、用户的应用数据。出于安全考虑，你需要为应用申请相应的权限，并且由企业管理员审核通过后，应用才可以进行后续的 API 调用或事件监听。简单来说，应用的 API 权限（Scope）决定了应用能使用哪些飞书服务端的开放能力。

:::note
**API 权限是以应用为维度授予的**，每个应用的 API 权限都是独立存在的，若多个应用需要调用同一个 API ，那么每个应用都要添加对应的 API 权限。
:::

开放平台支持的所有权限，可参考[API 权限列表](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。

## 权限类型


为了提升 API 调用的安全性，飞书开放平台设计了访问凭证（access_token）机制，调用 API 获取应用资源时，需要通过 access_token 对调用者身份进行鉴权，即告知飞书当前是谁、以什么身份获取什么租户的数据。关于如何选择和获取不同类型 access token，参考 [获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

调用 API 时，以用户身份（user_access_token） 调用和 以应用身份（tenant_access_token）调用的权限敏感等级不同，涉及的风险程度不同，因此对应的审核要求也不同，开发者申请权限时需要区分用户身份、应用身份。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/042e96c35b824692e2cacdc8ec05492c_m1ISAc0t29.png?height=706&lazyload=true&maxWidth=600&width=1264)

为了更好地支持权限最小化原则，根据权限所归属的不同身份主体，开放平台将 API 权限划分为以下两种类型：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">权限类型</md-th>
<md-th style="width:35%">描述</md-th>
<md-th style="width:40%">场景示例</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>应用身份权限 tenant_access_token</md-td>
<md-td>以 [tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490) 调用 API 或者订阅事件时，需要申请应用身份权限。</md-td>
<md-td>
假设有一个应用名为 “My bot”，该应用：

- 调用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口时，如果以 tenant_access_token 调用，则多维表格的所有者是 “My bot”。
- [订阅云文档变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe)时，如果以 tenant_access_token 订阅，则仅能订阅 “My bot” 作为拥有者或者管理员的文档变更，无法感知其他文档变更。
</md-td>
</md-tr>

<md-tr>
<md-td>用户身份权限 user_access_token</md-td>
<md-td>
以 [user_access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490) 调用 API 或者订阅事件时，需要申请用户身份权限。
</md-td>
<md-td>
假设有一个应用名为 “My bot”，该应用：

- 调用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口时，如果以 user_access_token 调用，且该 token 代表用户 “李健”，则多维表格的所有者是 “李健”。
- [订阅云文档变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe)时，如果以 user_access_token 订阅，该 token 代表的用户是 “李健”，则仅能订阅 “李健” 作为拥有者或者管理员的文档变更，无法感知其他文档变更。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 权限等级

在商店应用、自建应用两类不同的应用中，权限存在不同的等级划分。你可以通过下表了解不同应用类型中的权限等级划分情况。关于权限等级的划分原则及平台推荐的默认审核规则，参考[自建应用的权限介绍和审核规则推荐](https://www.feishu.cn/hc/zh-CN/articles/455824553396)。


### 自建应用

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">是否需要审核</md-th>
<md-th style="width:40%">权限说明</md-th>
<md-th style="width:40%">权限审核规则</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>免审权限</md-td>
<md-td>企业管理员可以根据本企业实际数据管控诉求，配置免审权限来减轻审核负担。具体配置方法，可参见[管理员如何设置自建应用审核规则](https://www.feishu.cn/hc/zh-CN/articles/374230668270-%E8%87%AA%E5%BB%BA%E5%BA%94%E7%94%A8%E5%8F%91%E7%89%88%E5%AE%A1%E6%A0%B8%E6%8C%87%E5%8D%97)。</md-td>
<md-td>无需审核，申请后立即生效。</md-td>
</md-tr>

<md-tr>
<md-td>需审核权限</md-td>
<md-td>对于涉及敏感数据的权限，请纳入需审核权限列表。</md-td>
<md-td>申请后，需要创建版本并提交审核，由应用管理员审核通过后才可生效。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 商店应用

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">权限等级</md-th>
<md-th style="width:40%">权限说明</md-th>
<md-th style="width:40%">权限审核规则</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>普通权限</md-td>
<md-td>访问的数据敏感程度不高。</md-td>
<md-td>对于商店应用，所有的权限操作都需要经过以下审核流程：
- 应用上架流程审核：由飞书开放平台审核。
- 租户安装应用流程审核：由租户管理员在版本更新时审核。</md-td>
</md-tr>

<md-tr>
<md-td>高级权限</md-td>
<md-td>访问的数据敏感程度较高。如无必要原因，申请高级权限时不会通过审核。</md-td>
<md-td>对于商店应用，所有的权限操作都需要经过以下审核流程：
- 应用上架流程审核：由飞书开放平台审核。
- 租户安装应用流程审核：由租户管理员在版本更新时审核。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### 权限申请原则

权限的申请应该遵循最小可用原则，权限范围过大可能会威胁企业数据安全管控。在无充分理由的情况下，请注意避免直接申请大量接口权限。因此，在飞书开放体系中，权限的管控有严格的审核流程。

- **企业自建应用**：应用开发者申请的权限需要通过 **租户管理员** 的审核。租户管理员可以按需配置审核规则和审核方式，参考[自建应用发版审核指南](https://www.feishu.cn/hc/zh-CN/articles/374230668270)。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d85c5a218aade1a90742badce398770_9o1byXFiAa.png?height=1758&lazyload=true&maxWidth=600&width=3070)

- **ISV 开发的商店应用**：如需申请权限，需要通过飞书开放平台[发布应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)时和[租户安装应用](https://www.feishu.cn/hc/zh-CN/articles/360049067744)时的两道审核流程。
    
    如下图所示，商店应用在初次安装和版本更新时会接收到授权提醒。租户管理员可以按需设置管理规则，参考[审核应用的获取与使用申请](https://www.feishu.cn/hc/zh-CN/articles/360025024813)。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/51b521b3cf74111b2133738801b79680_wIZhM6aFEi.png?height=1194&lazyload=true&maxWidth=600&width=1160)

### 确定所需申请的权限

当你在实际开发应用时，可根据 API 或事件的开发文档获取相应的权限信息。
以[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口为例，在相应的接口文档中，你可以获取接口的权限要求、字段权限要求等信息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/453a586c38b6944cb7d91fddc0a10ad1_ysx9lo2bsI.png?height=1278&lazyload=true&maxWidth=600&width=2882)

其中：

- **权限要求**：代表整个接口的权限要求，该类权限之间是**或**关系，即应用申请任一权限即可调用该接口。

- **字段权限要求**：展示了获取响应体字段数据所需的权限要求。
    
    例如下图，自建应用想要获取响应体中的`user_id`字段值，则必须开通 **获取用户 user ID** 权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fa894ebd2d7b0e4498352a0aa3e14eb_w3nIqyjocR.png?height=1144&lazyload=true&maxWidth=600&width=2882)


## 为企业自建应用申请 API 权限

### 步骤一：申请权限

1. 登录[开发者后台](https://open.feishu.cn/app)，进入指定自建应用。

2. 在左侧导航栏进入 **开发配置** > **权限管理** 页，点击 **开通权限** 按钮。

3. 在弹出页面中选择所需权限，点击 **确认开通权限**，系统自动跳转到已申请的权限列表页面。
    :::note
    -   注意在不同的页签下进行不同类型权限的申请。
    - 如需使用应用身份凭证（tenant_access_token） 进行调用相关 API，还需为应用配置可访问的数据范围，参考 [配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。
    - 以用户身份 **（** user_access_token）调用时，可读写的数据范围与用户本人可读写的数据范围一致，无需单独配置数据权限。
    :::    
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1be778312abd0eda4432abce4a84506a_RoB2cpzL9M.png?height=1608&lazyload=true&maxWidth=600&width=2952)


4. 选择完成后，在 **权限配置** 区域右上角点击 **批量开通**。

### 步骤二：免审核 API 权限进行测试联调

在应用的测试联调阶段，你可以通过以下路径，无需审核通过即可生效 **需审核权限**，进行 API 调试。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/228fbc7131418c94b8834f06d7d99bfb_Ui29UmQ64w.png?height=710&lazyload=true&maxWidth=600&width=3448)


#### 方式一：使用 user_access_token 调试 API

批量申请 API 权限时，如果权限支持通过应用开发者的 user_access_token 免审调用 API ，则在申请权限后，无需发布应用即可使用 user_access_token 调试 API。

以调用[列出自定义角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/list)接口为例，在调用前需要在应用的 **API 权限** 功能页中，申请 **查看、评论、编辑和管理多维表格** 或者 **查看、评论和导出多维表格** 权限。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/840b669519a56fe7a257e316950a1aa6_QJCXMGtl4x.png?height=1540&lazyload=true&maxWidth=600&width=1784)

申请后，无需发布应用并等待审核通过，直接使用应用开发者的用户访问凭证（user_access_token）即可调试 API。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/165f62a04e928e62ec40d98267bb6ec9_R14zcVp0Vi.png?height=1200&lazyload=true&maxWidth=600&width=2260)


#### 方式二：使用测试企业调试 API

在 API 权限中，存在不支持 user_access_token 鉴权的 API，且支持 user_access_token 鉴权的 API 中也存在少量的敏感权限基于 user_access_token 无法免审调试 API。该类权限在申请时可以通过提示查看（如下图所示）。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/335040a642427abf10af0234ed138d8a_JokZqcJMPS.png?height=420&lazyload=true&maxWidth=600&width=2254)

此时，你可以为应用配置测试企业和人员，并切换为测试版本（具体操作参见[测试企业与人员](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)）。切换后，前往 **开发配置** > **权限管理** 页面，在 **API 权限** 页签申请指定权限，申请的权限均为 **免审权限**，点击 **确认** 后立即生效。

:::note
如果你申请了 **通讯录** 或者 **飞书人事（企业版）** API 权限，且需要通过应用身份（tenant_access_token）调用相关 API，则需要为应用配置相应的数据权限。详情参见[配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。
:::

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3c5d744adabdebe6ff843098cca3848b_Hx6u7N6C5u.png?height=630&lazyload=true&maxWidth=600&width=1782)


### 步骤三：正式发布应用

确保测试联调阶段申请的权限符合预期后，你可以提交应用的正式版本发布申请。

1. 在 **应用发布** > **版本管理与发布** 页面，点击 **创建版本**。
    
:::note
使用测试企业调试 API 的场景中，开通的权限不会生效于应用的正式版本。因此在完成测试联调后，需要切换至正式版本的应用，为正式版应用再次开通相同的 API 权限。你可以使用**批量导入导出**功能，进行应用间的权限数据迁移。
:::
    
2. 在 **版本详情** 页面，配置以下字段，并点击 **保存**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8a5ebea29e28f422bf6b55817818c5d8_K2PcyliptA.png?height=1428&lazyload=true&maxWidth=600&width=2330)

    - **应用版本号**：自定义应用版本号，格式示例：1.0.0。
    
    - **更新说明**：自定义当前版本的更新详情。
    
    - **应用能力**、**权限变更**：查看并确认添加的能力、权限是否符合预期。
    
    - **可用范围**：应用的可用范围。可点击 **编辑**，调整可用范围。关于可用范围的说明可参见[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。
    
    - **申请理由**：用于帮助审核人员了解更多应用版本信息。

3. 在弹出的对话框中，点击 **申请线上发布**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/00b0bf496c7efacb3489bcd6ed9fbde0_J1kqDXBWlJ.png?height=826&lazyload=true&maxWidth=600&width=2324)

4. 等待企业管理员审核应用。
    
    当应用通过审核后，所有的 API 权限才会正式生效。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e74676dbe3ca25d8636205473f021bcd_sRRr2gmfOK.png?height=660&lazyload=true&maxWidth=600&width=2348)


## 为商店应用申请 API 权限

### 步骤一：申请权限

1. 在[开发者后台](https://open.feishu.cn/app)进入指定商店应用。

2. 在左侧导航栏进入 **开发配置**  > **权限管理** 页，点击 **开通权限**。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/372800a2c7cb3ab804e916757a689111_qM7GUvVMN7.png?height=1274&lazyload=true&maxWidth=600&width=2640)

4. 选择所需的权限后，点击 **确认开通权限**，系统自动跳转到已申请（待发布）的权限列表页面。
	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5b786250e4525ed1b50ee1dda86e9030_hvS2V4iReA.png?height=1210&lazyload=true&maxWidth=600&width=1280)

### 步骤二：免审核 API 权限进行测试联调

在应用的测试联调阶段，你可以通过商店应用的测试企业和人员功能，生成测试版本。基于测试版本开通的权限无需等待审核通过即可生效，从而进行 API 调试。

1. 在左侧导航栏，选择 **开发配置** > **测试企业和人员**，然后创建一个测试企业。
    
:::note
关于测试商店应用的详细配置，参见[六、测试商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uUjMyUjL1IjM14SNyITN)。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/015de7c6fa84c0cd94f696828c9b193e_3ilff2hvzh.png?height=802&lazyload=true&maxWidth=600&width=2882)

2. 在左侧导航栏，选择 **应用发布** > **版本管理与发布**，然后点击 **创建版本**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fd5029fe46110102cad4ed56a6a29602_hPJJcQYHg7.png?height=840&lazyload=true&maxWidth=600&width=2882)

3. 依次配置版本号、版本说明，并确认待开通权限的完整性，最后在页面底部点击 **保存**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d34c4d4f8ac284359d8381756e1644db_k58likMeVE.png?height=1318&lazyload=true&maxWidth=600&width=2882)

4. 在 **待申请** 版本页面，点击 **设置为测试版本**，并在弹出的对话框完成测试版本的设置。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f2541dc1c7eb5ed01495d9ccdc099198_3IPlxQO467.png?height=974&lazyload=true&maxWidth=600&width=2326)

    完成配置后，版本状态会变更为 **测试中**，此时该应用已安装到对应测试企业，并可以在该测试企业中免审调用 API。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff9d0637fef0aeaeeaefce0fdccc86f9_6lE3TXTciM.png?height=396&lazyload=true&maxWidth=600&width=2224)


### 步骤三：正式发布应用

确保测试联调阶段申请的权限符合业务预期后，前往 **应用发布** > **版本管理与发布** 页面，发布应用。
商店应用的正式发布分为定向上架、全量上架、非公开上架。你需要根据业务实际情况选择发布，详细介绍参见[七、发布商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)。

## 批量导入导出 API 权限

为了便于开发者进行跨应用的权限数据迁移，开放平台提供了批量导入导出 API 权限的能力。你可以在[开发者后台](https://open.feishu.cn/app)的 **权限管理** 页面进行权限的批量导入、导出。

:::note
批量导入导出权限支持企业自建应用和商店应用。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/27abd7201893bcba470a52b6af1f1fe4_0mR5buGag1.png?height=842&lazyload=true&maxWidth=600&width=2088)

## 批量导入权限

导入的权限将 **作为此次新增申请的权限，不会影响已申请或开通的权限**。
你可以按照以下示例格式录入所需权限，也可以一键恢复默认值或对输入内容进行格式化 JSON。

:::note
录入权限时，系统会实时校验该权限是否存在，如果不存在或该应用不在该权限的可用范围内，则会收到错误提示：该权限不存在或该应用无权申请该权限，请重新录入。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a82210ab38d543fcd0c109dce3cdd5dc_pryVYedkX2.png?height=1016&lazyload=true&maxWidth=600&width=1592)

确认导入权限清单无误后，点击**申请开通**。

:::note
- 请注意检查不同身份类型页下的权限点。系统会根据应用身份权限、用户身份权限两种类型分别展示导入的权限清单，若此次导入权限不涉及某个身份类型，则不会展示该类型页签。
- 系统会自动过滤已申请权限，避免重复申请。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c23c93531c6e2f579936afb9ad13203_MJjWu0dx6g.png?height=814&lazyload=true&maxWidth=600&width=1582)

申请开通后，系统自动跳转到权限管理页面：

- 若导入的权限属于自建应用的免审权限，或导入的应用为测试版本应用，则权限状态变为已开通。
- 若导入的权限关联了数据范围，则需要为该权限 [配置数据范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。
- 若导入的权限需要审核，即权限状态为待发布，在确认权限配置无误后，你需要[提交版本发布](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#563a5dbd)申请，由企业管理员审核通过后才会生效。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f1b4059b47a3a6b1da3390f959410eaf_zjzjlZ6eH6.png?height=920&lazyload=true&maxWidth=600&width=2272)

## 批量导出权限

在权限的**导出**页签中，你可以一键复制当前应用已申请的全部权限（包括 **待发布、审核中、已开通** 状态），用于后续将权限数据一键导入至其他应用。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2e9bd407db8446eff4f120cc048c0427_bfRgOKu0AC.png?height=1502&lazyload=true&maxWidth=600&width=1574)