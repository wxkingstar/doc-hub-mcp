<!--
title: 步骤三：体验效果
id: 7238267026853789697
fullPath: /home/quick-access-to-base/step-3-experience-the-effect
updatedAt: 1753069740000
source: https://open.feishu.cn/document/quick-access-to-base/step-3-experience-the-effect
-->
# 步骤三：体验效果

在命令行中，通过回车和上下键指定命令并操作。

1. **创建多维表格**。创建成功后，接口将返回多维表格的 token、数据表 ID 等信息。返回参数说明参考[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口文档。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/61354ddb659fab72a97e98958f11d045_RhKaOHvzFL.png?height=474&lazyload=true&maxWidth=600&width=1464)

    - 请保存多维表格的 `app_token` 参数值，后续的多维表格管理操作均需要使用该参数值进行配置。
  
    - 你可通过命令行回显的 url 访问该多维表格，查看到的多维表格示例如下图所示。
  
  
      :::note
      如果你为文件内的 userAccessToken 配置了参数值，应用将以用户身份创建的多维表格，所有权属于用户，用户可继续编辑、管理该多维表格；如果你未配置 userAccessToken 参数，应用将以该应用身份创建的多维表格，所有权属于应用，当前用户可能无法访问该多维表格（与企业设置有关）。


        :::
    
      ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e71498f5949da642cb822ea0b03a43aa_fLxIiwSRIb.png?height=1254&lazyload=true&maxWidth=600&width=3456)




2. **添加一张表**。返回参数说明参考[新增一个数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)接口文档。

   	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe5a4bf4a228cd0ef74d1a210981f743_oNb72BD2H5.png?height=582&lazyload=true&maxWidth=600&width=756)

    - 在添加表时，您需要填写 appToken、表名。
  
    - 添加完成后，您需要保存 table_id 信息，用于后续添加记录、获取记录。
    
  	进入多维表格，查看添加的表信息。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8fa48197015ae099efb37c7067ae4888_vYu8nkXCcm.png?height=488&lazyload=true&maxWidth=600&width=2658)

3. **添加表记录**。返回参数说明参考[新增多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_create)接口文档。
 
   添加表记录时，您需要填写 appToken、table_id。
   

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ffae29014b9c0bb45acbcd6e885759b4_IgHUv0BOij.png?height=392&lazyload=true&maxWidth=600&width=1256)

    程序会将示例代码中的 `mock.json` 文件的数据，添加至表记录，你可以进入多维表格，查看添加的表记录：
  
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1dafeed7918948ca443ddd3ce371ef51_YLtQGJiMn3.png?height=1340&lazyload=true&maxWidth=600&width=2752)

4. **删除表记录**。返回参数说明参考[删除多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_delete)接口文档。
  
   删除表记录时，需要获取待删除记录的 `record_id`（该参数值可以在添加表记录后的回显信息中获取），然后依次填写 appToken、table_id、record_id。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5417c7cb77f1995f866d14161e223522_roVpLADEJf.png?height=250&lazyload=true&maxWidth=600&width=1104)

    您可以进入多维表格，查看指定 record_id 对应的表记录已被删除。
  
5. **导出多维表格**。该部分示例代码仅模拟表格导出操作。返回参数参考[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)。
 
   你需填写 appToken、table_id，将指定的表格导出本地。
  

     ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/62f9bb1a698da4dad3cee2faef48dd78_tPMjisUZQm.png?height=1080&lazyload=true&maxWidth=600&width=930)