<!--
title: 七、发布商店应用
id: 6907569524100218881
fullPath: /uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN
updatedAt: 1737614454000
source: https://open.feishu.cn/document/isv-guides/publish-your-app/step7-publish-the-store-application
-->
# 七、发布商店应用

## 应用上架类型

飞书工作人员会根据应用情况选择最佳的上架类型。
| **应用上架类型** | **应用可见范围** | **安装方法** | **使用人员** |
| --- | --- | --- | --- |
| 全量上架 | 所有飞书用户（飞书个人版和团队版租户） | 在应用中心中安装 | 开通第三方应用用户 |
| 非公开上架 | 所有飞书用户（飞书个人版和团队版租户） | 获得安装链接的用户 | 开通第三方应用用户 |
| 定向上架（灰度发布） | 应用**灰度可见范围内的**飞书用户（飞书团队版租户，上限为30个租户） | 在应用中心中安装 | 开通第三方应用用户 |

## 应用上架要求

在申请上架到飞书应用商店时，请务必满足 [自检清单](https://feishu.feishu.cn/docx/REMkdjUefoRtkvxeRZ1cfAXcnKh) 要求。请重点关注以下规则，遵守这些要求可确保你的应用顺利通过飞书的审核流程。

- **该应用必须是面向企业用户的应用**
	
    飞书应用商店为飞书企业用户提供用于满足办公和商业需求的应用，非该领域的产品申请将被驳回。
- **该应用必须拥有优质的产品体验**
	
    应用需要满足飞书某一类目标用户的办公或商业需求，在该需求场景下具备竞争优势和体验亮点，完成需求的最小闭环，功能的使用不得依赖于其他应用，不得以使用其他应用为条件。对于新用户需要有友好的引导流程，让用户能快捷体验到产品的主要功能，感受到产品核心价值。
    
- **该应用必须遵循飞书开放平台的设计规范**

	为了让用户在飞书产品内获得稳定的产品体验预期，飞书设置了一套指导设计的 [设计规范](/ssl:ttdoc/uYjL24iN/uYTN04iN1QjL2UDN)，出现不符合规范的设计，飞书会驳回你的上架申请。
    
- **该应用必须与飞书有实际意义的集成**

	你所开发的应用需要与飞书产品实现有意义的集成，PC或移动端有实际形态的应用，打造体验卓越的飞书产品生态，创建服务于客户的有价值的应用。
    
- **该应用登录必须通过 SSO 单点登录**

	你的应用需要使用 [SSO单点登录](/ssl:ttdoc/uYjL24iN/ukTO4UjL5kDO14SO5gTN)（SSO 单点登录场景是指飞书中的小程序免登、浏览器内网页登录、客户端内网页免登、应用管理后台免登），飞书的 SSO 采用 OAuth2.0 方案，不允许在应用内要求用户输入登录凭据，以及通过其他的账号体系登录。
    
- **该应用必须注重用户隐私和数据安全**

	你的应用不得在任何页面请求用户输入飞书的用户名、密码、真实联系方式。只在必要的场景下经用户授权才允许收集用户数据，并在其授权范围内合理使用，不得私下出售、转交、交易、越权披露或泄露。需要提供使用协议和隐私条款供用户查阅。

## 灰度发布应用

### 步骤一：创建应用版本

1. 登录 [开发者后台](https://open.feishu.cn/app)，点击目标应用。

2. 在左侧导航栏点击 **版本管理与发布**，然后在页面右侧点击 **创建版本**。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/289850f96283748601359c1a9dde12b2_19Ypcz2d9v.png?height=507&lazyload=true&maxWidth=600&width=1280)

3.  在 **版本详情** 页面，编辑应用的版本号、更新说明、申请理由后，点击页面底部的 **保存**。
    
    保存后页面信息如下图所示，应用版本会被标记为 **待申请**。
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1377d3db0681672ec2a4ab1b7918fe90_BNDxY2JZWd.png?height=488&lazyload=true&maxWidth=600&width=2186)

### 步骤二：申请灰度发布

1. 在 **版本详情** 页面右上角，点击 **申请发布**。
2. 在弹窗内选择 **灰度发布**，并点击 **确认**。

    :::note
    -   商店应用首次发布时仅支持灰度发布。后续发布可根据业务需求选择灰度发布或者全量发布。
    - 弹窗内会提示本次审核是否需要人工审核。
        - 如果需要人工审核，请耐心等待平台审核通过。审核通过后应用会立刻在飞书应用中心上架。
        - 如果不需要人工审核，点击确认后会自动发布成功。
    - 在应用审核通过之前，**版本详情** 页面底部的 **添加灰度企业** 按钮不可点击。
    - 若没有通过审核，平台会告知未通过的原因，你可对应用进行修改和完善后，再次提交审核。
    :::

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df16d5ad41d18f4246c19b9e25b0fd68_2aJqpexISn.png?height=509&lazyload=true&maxWidth=600&width=1280)


### 步骤三：添加灰度企业

应用首次灰度发布后，你需要添加灰度企业，定向为企业开通应用。如果应用之前已经灰度发布并添加了灰度企业，之前的版本中灰度过的企业，仍然在灰度企业列表中，同时支持添加或移除灰度企业。

1. 在应用左侧导航栏进入 **应用发布** > **版本管理与发布** 页面。

2. 在版本列表中点击通过审核的版本。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d101d4c85e8d2b8cb78bb0ee327aa64_2Mj81gRxCx.png?height=830&lazyload=true&maxWidth=600&width=2882)

3. 在 **版本详情** 页底部的 **已灰度企业** 区域，点击 **添加灰度企业**，并输入企业编号进行添加。
    
    :::warning
    - 支持添加多个企业，每个应用最多能添加 200 个灰度企业。
    - 在添加灰度企业时，请确保企业编号的准确性。出于安全性考虑，平台不会校验编号的准确性。
    :::
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/373d4862bee1eadc514a0ee3e70b49fd_pet1lmaZFs.png?height=868&lazyload=true&maxWidth=600&width=2248)

### 如何获取企业编号

进入[飞书管理后台](https://www.feishu.cn/admin)， 在左侧导航栏选择 **企业设置** > **企业信息**，在 **企业信息管理** 页面，可以查看企业编号。更多详情参考[管理员如何获取企业编号](https://www.feishu.cn/hc/zh-CN/articles/360043186073-%E7%AE%A1%E7%90%86%E5%91%98%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E4%BC%81%E4%B8%9A%E7%BC%96%E5%8F%B7)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a6153fd1eb4168bbeac1ceb3063ba09_LPS0li0xX6.png?height=484&lazyload=true&maxWidth=600&width=1122)

### 移除灰度企业

:::warning
仅当应用全量发布后，才可以移除灰度企业。应用没有全量发布时，灰度企业不可移除。
:::

你也可以在灰度企业列表内，移除某个企业。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f319724ca5b308afe666c3707e88dd3d_LHHkbIu5hv.png?height=358&lazyload=true&maxWidth=600&width=2154)

移除后：

- 若该企业已安装过此应用，则该企业会回滚到**最新的已上架版本**。
- 若该企业未安装过此应用，则该企业无法继续在应用中心看到此应用。


## 全量或非公开上架应用


如果你希望正式上架应用商店，使应用全局可见，发布流程如下。

:::note
以下各环节的申请材料请在「**飞书合作对接群**」沟通，按照群内指引提供审核材料，如有疑问请联系对接飞书商务人员。
:::

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">环节</md-th>
      <md-th style="width: 50%;">发起标准</md-th>
      <md-th style="width: 15%;">审核维度</md-th>
      <md-th style="width: 20%;">时长</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>资质审核</md-td>
      <md-td>满足 [ISV 入驻标准](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uUzNwEjL1cDMx4SN3ATM)并在开发者后台提交申请。</md-td>
      <md-td>企业资质</md-td>
      <md-td>3 个工作日内反馈结果</md-td>
    </md-tr>
    <md-tr>
      <md-td>方案审核</md-td>
      <md-td>具备 ISV 资质后，提供 [PRD 文档](https://feishu.feishu.cn/docx/RsT2dPtOmovDorxD9q4czZj0nLg)给商务对接人。</md-td>
      <md-td>方案合理性</md-td>
      <md-td>排期制</md-td>
    </md-tr>
    <md-tr>
      <md-td>开发阶段</md-td>
      <md-td>通过 PRD 审核后，在开发者后台创建并配置应用，具体包括：
- [创建商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ucjN2YjL3YjN24yN2YjN/step1-create-a-store-application)
- [填写应用基础信息、应用中心信息、联系方式与协议](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ucjN3QjL3YzN04yN2cDN)
- [设置付费方案](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ucDN3QjL3QzN04yN0cDN)
- [开发商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)
- [测试商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uUjMyUjL1IjM14SNyITN)
      </md-td>
      <md-td>\-</md-td>
      <md-td>\-</md-td>
    </md-tr>
    <md-tr>
      <md-td>资料预检</md-td>
      <md-td>完成[应用自检](https://feishu.feishu.cn/docx/REMkdjUefoRtkvxeRZ1cfAXcnKh?from=from_copylink)和[物料准备](https://feishu.feishu.cn/docx/RQdsd8MMBoRU3ZxPWBgcfov4nTh)，全量发布应用。操作如下：
1. 灰度发布应用。
        
	应用在全量发布前，必须完成至少一次灰度发布。具体操作参见上文 **灰度发布应用** 章节。
     
2. 在左侧导航栏点击 **版本管理与发布**，然后在页面右侧点击 **创建版本**。

     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/74cc46d0d199821ef1005d0e1bf9d219_lyWOsrJ4WS.png?height=336&lazyload=true&width=1280)
        
3. 在 **版本详情** 页面，编辑应用的版本号、更新说明、申请理由后，点击页面底部的 **保存**。
3. 在 **版本详情** 页面右上角，点击 **申请发布**。
3. 在弹窗内选择 **全量发布**，并点击 **确认**。

     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f2d50cf0e60ca914589cea2d837f6507_Aaeh2EHRcv.png?height=485&lazyload=true&width=1280)
      </md-td>
      <md-td>清单审核
      
人工审核</md-td>
      <md-td>排期制</md-td>
    </md-tr>
    <md-tr>
      <md-td>产品验收</md-td>
      <md-td>通过资料预检后，平台将自动推进至产品验收。</md-td>
      <md-td>功能审核 <br> 视觉审核 <br> 物料审核</md-td>
      <md-td>排期制，验收后3个工作日内返回结果。</md-td>
    </md-tr>
    <md-tr>
      <md-td>安全验收</md-td>
      <md-td>通过产品验收后，平台将自动推进至安全验收。</md-td>
      <md-td>安全审核</md-td>
      <md-td>排期制</md-td>
    </md-tr>
    <md-tr>
      <md-td>合规验收</md-td>
      <md-td>通过安全验收后，平台将自动推进至合规验收。</md-td>
      <md-td>合规审核</md-td>
      <md-td>排期制</md-td>
    </md-tr>
    <md-tr>
      <md-td>缴纳保证金</md-td>
      <md-td>公开上架的付费应用，缴纳保证金2万元/应用。</md-td>
      <md-td>财务审核</md-td>
      <md-td>排期制</md-td>
    </md-tr>
    <md-tr>
      <md-td>应用发布</md-td>
      <md-td>完成以上验收并提供[销售素材](https://feishu.feishu.cn/docx/AtigdHUGhonUyYxag9Pc1Jg9n1b)后，才可以发布应用。</md-td>
      <md-td>\-</md-td>
      <md-td>ISV 与平台约定发布时间</md-td>
    </md-tr>
    <md-tr>
      <md-td>后期维护</md-td>
      <md-td>全量发布应用之后，如果在[开发者后台](https://open.feishu.cn/app)更新了应用配置，可根据实际需要，在应用的 **版本管理与发布** 功能页创建版本，并选择 **灰度发布** 或者 **全量发布** 应用。
        
- 发布应用时，可根据页面提示判断本次发布是否需要人工审核，若需要人工审核，则预计需等待 1-5 个工作日。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff3bd266472117681038639ffef68e1c_W9bF0nV8iJ.png?height=820&lazyload=true&width=2236)
- 如需把存量灰度版本转为全量发布，则可以在应用的 **版本管理与发布** 功能页进入指定的灰度版本，并点击 **申请全量发布**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/03c964d48c3ae0dd64588fefe43bd25e_wfc5PkLYoV.png?height=754&lazyload=true&width=2882)</md-td>
      <md-td>人工审核</md-td>
      <md-td>排期制</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
