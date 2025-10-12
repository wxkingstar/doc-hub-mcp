<!--
title: 步骤二：创建自定义审批实例
id: 7238873153014431748
fullPath: /home/automatic-attendance-management-based-on-approval/step-2-create-a-custom-approval
updatedAt: 1730862346000
source: https://open.feishu.cn/document/automatic-attendance-management-based-on-approval/step-2-create-a-custom-approval
-->
# 步骤二：创建自定义审批实例

在本步骤，你将创建一个名为 **带薪休假审批** 的自定义审批实例，用于发起带薪休假审批。

## 操作步骤

1. 登录[审批管理后台](https://www.feishu.cn/approval/admin)。
2. 浏览器地址栏链接上，添加参数`devMode=on`开启开发者模式。

	必须开启开发者模式，后续才能设置控件的自定义 ID。
    
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/b2741750280c47e6878cc7bce7c4ad11~tplv-goo7wpa0wc-image.image?height=688&lazyload=true&maxWidth=600&width=1258)

3. 选择 **审批管理** ，单击 **创建审批** ，选择 **创建自定义审批** 。
  
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/542219fc4af74f7c97a244f49f205644~tplv-goo7wpa0wc-image.image?height=1548&lazyload=true&maxWidth=600&width=2606)

4. 在**基础信息**页，填写审批流程 **名称**。
  
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/874edbdcebdb4522aa5d540cff69c8e4~tplv-goo7wpa0wc-image.image?height=1670&lazyload=true&maxWidth=600&width=2612)

5. 在 **表单设计** 页，添加 **日期区间** 组件，并将 **自定义 ID** 设置为 `timeInfo`，**日期格式** 设置为 **年-月-日 上午/下午（天）**。
  
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/78584c9b5fcc4760b53842cb4056384b~tplv-goo7wpa0wc-image.image?height=1176&lazyload=true&maxWidth=600&width=1762)

6. 在 **表单设计** 页，添加 **多行文本** 组件，并将 **自定义 ID** 设置为 `reason`。
  
  	![](//sf16-muse-va.ibytedtos.com/obj/open-platform-opendoc-us/b8bb4a56354199fa54068b849f3acf13_aI0jaM2Hji.gif?height=1178&lazyload=true&maxWidth=600&width=1760)

7. 在 **流程设计** 页，单击 **审批人** 节点，将流程设置为自动通过。
  
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/435b03e1d8ad49e4995b6b4bf4498642~tplv-goo7wpa0wc-image.image?height=681&lazyload=true&maxWidth=600&width=1280)

8. 流程设计完成后，单击 **发布** 。
  
  	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/ab6c94d85f2c46d2bd1eb5d799460276~tplv-goo7wpa0wc-image.image?height=1674&lazyload=true&maxWidth=600&width=2600)


