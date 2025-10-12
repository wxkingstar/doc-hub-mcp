<!--
title: 步骤三：创建自定义审批实例
id: 7238816139733450755
fullPath: /home/quick-start-of-personnel-and-attendance-management-system/step-3-create-a-custom-approval-instance
updatedAt: 1693995097000
source: https://open.feishu.cn/document/quick-start-of-personnel-and-attendance-management-system/step-3-create-a-custom-approval-instance
-->
# 步骤三：创建自定义审批实例

在本步骤，你将创建一个名为 **带薪休假审批** 的自定义审批实例，用于发起带薪休假审批。

## 操作步骤

1. 登录 [审批管理后台](https://www.feishu.cn/approval/admin)。

:::note
由于教程中使用了测试版应用，请使用相应的测试企业租户登录。
:::

2. 浏览器地址栏链接上，添加参数`?devMode=on`开启开发者模式。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7eac5fc62484d5f4cd1840124f27ba07_DeoAWIuNWA.png?height=688&lazyload=true&maxWidth=600&width=1258)

3. 在 **审批** **管理** 页面，单击 **创建审批** ，选择 **创建自定义审批** 。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52866ccfc9864d5016b80fbbace1515d_rZmu4uG96b.png?height=1548&lazyload=true&maxWidth=600&width=2606)

4. 在**基础信息**页，填写审批流程 **名称**。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/255fae5bac5fece8cd76e3cc32d21eae_yVsIP24nb4.png?height=1670&lazyload=true&maxWidth=600&width=2612)

5. 在 **表单设计** 页，添加 **日期区间** 组件，并将 **自定义 ID** 设置为 `timeInfo`，**日期格式** 设置为 **年-月-日 上午/下午（天）** 。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7cc99d03f3ca81f8db83c87177247b43_YUnIF7Kkme.gif?height=1176&lazyload=true&maxWidth=700&width=1762)

6. 在 **表单设计** 页，添加 **多行文本** 组件，并将 **自定义 ID** 设置为 `reason`。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b8bb4a56354199fa54068b849f3acf13_5R10u7Erea.gif?height=1178&lazyload=true&maxWidth=700&width=1760)

7. 在 **流程设计** 页，单击 **审批** **人** 节点，将流程设置为自动通过。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0c1ab87373c6c5635a4eef0ee1a92877_PqYL0UkJOw.png?height=681&lazyload=true&maxWidth=600&width=1280)

8. 流程设计完成后，单击 **发布** 。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dbbe85efb7f59592b624008cd90a6f48_Y8sx32Qnt4.png?height=1674&lazyload=true&maxWidth=600&width=2600)