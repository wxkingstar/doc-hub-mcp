<!--
title: 步骤四：调试
id: 7103422385130815491
fullPath: /home/qr-code-scanning-login-for-web-app/result
updatedAt: 1719384587000
source: https://open.feishu.cn/document/qr-code-scanning-login-for-web-app/result
-->
# 步骤四：调试

在完成前面所有步骤之后，你就可以在浏览器中访问应用地址，调试扫码登录功能。

:::note
因为本教程使用的是测试版应用，因此需要使用测试企业内的成员账号扫码登录。
:::

## 操作步骤

1. 登录[开发者后台](https://open.feishu.cn/app)，然后在应用的 **开发配置** > **安全设置** 页面，添加重定向 URL 为 `http://127.0.0.1:3001/qrLogin`。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4fe75cae5d5c7cee6b0315f8ba6c5a61_ul49K4Mrkw.png?height=732&lazyload=true&maxWidth=600&width=2132)
  
2. 在浏览器中打开 [http://127.0.0.1:3001/qrLogin](http://127.0.0.1:3001/qrLogin)。
   
    如下图所示，使用飞书移动端成功扫码登录。
      
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d4d923a1878ce39ad39df5d753c88fe1_3hFOdBMS1P.png?height=1096&lazyload=true&maxWidth=600&width=1896)
  
3. 在 **Step 2** 区域查看用户相关信息。
  
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8131205f9622fd62f0c1fd4df2af6505_Hv7fRVzcgn.png?height=966&lazyload=true&maxWidth=600&width=1882)