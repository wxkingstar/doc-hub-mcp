<!--
title: 步骤一：创建并配置应用
id: 7238899923382599684
fullPath: /home/quick-access-to-base/department-personnel-management-based-on-web-app/step-1-create-and-configure-an-application
updatedAt: 1693995035000
source: https://open.feishu.cn/document/home/department-personnel-management-based-on-web-app/step-1-create-and-configure-an-application
-->
# 步骤一：创建并配置应用

通过本步骤您将创建一个测试应用，并开启网页应用能力，用于构建网页应用。

## 操作步骤

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称、描述以及图标信息，然后单击 **创建**。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8024a7e2fd42054b4653d54fc884ae54_BZv9ML545U.png?height=1526&lazyload=true&maxWidth=600&width=2512)

3. 在应用详情页左侧导航栏，进入 **测试企业和人员** 页面，并在页面右上角单击 **创建测试企业**。

:::note
为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员功能](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。在开发阶段，推荐开发者使用测试版应用，此**版本中涉及的权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。
:::

4. 在 **创建测试企业** 对话框，填写 **测试企业名称**、**手机号**、**验证码**，并单击 **确认创建**。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/85af43ae4f1337a78e80d3608c590449_7sy5iikSFN.png?height=1378&lazyload=true&maxWidth=600&width=3572)

5. 创建测试企业后，在 **操作** 列，单击 **关联应用**。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/341586fdf85d2297f0eb9ef2e85a1b09_lOIWteVw6S.png?height=552&lazyload=true&maxWidth=600&width=2950)

6. 测试企业关联应用后，在页面顶部切换企业应用为测试版应用。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d934d17429ce3722de3fafa4ae4356e_3rSZbWErvO.png?height=804&lazyload=true&maxWidth=600&width=3576)

7. 添加网页应用能力。

    1. 在应用详情页左侧导航栏，单击 **添加应用能力**。
    
    2. 在 **按能力添加** 页签，找到 **网页应用** 卡片，并单击 **添加**。
    
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e8df0efb3201485b7ffd6458c6973c0d_NRyhsGIBJH.png?height=1000&lazyload=true&maxWidth=600&width=3412)

    3. 在左侧导航栏，进入 **网页应用** 页面，配置 **桌面端主页** 和 **移动端主页**，并单击 **保存**。
        
        桌面端主页和移动端主页均需要填写 `http://127.0.0.1:3000`。
       
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/59e1d280afcbba9a29ef3c0bb7a3815e_oEpQ7IF6mO.png?height=966&lazyload=true&maxWidth=600&width=2394)

    4. 在左侧导航栏，进入 **安全设置** 页面，在 **重定向 URL**、**H5 可信域名** 区域，依次添加域名。
    
        - 重定向 URL 填写 `http://127.0.0.1:3000/`


            必须以 `/` 结尾，否则免登流程中的 `tt.requestAuthCode` 获取 code 会失败。

            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55b4c0e3f76b245052a96c88581582c6_J6VAxt5b17.png?height=820&lazyload=true&maxWidth=600&width=3568)

        - H5 可信域名填写 `http://127.0.0.1:3000`
            
            需要配置 H5 可信域名，否则应用访问 [JSAPI](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/) 会失败。
            
            ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/228544b2e2a1f82264b37c2f659ba387_6BjjhWzPm0.png?height=1254&lazyload=true&maxWidth=600&width=3522)