<!--
title: 步骤二：启动本地服务
id: 7238816139733975043
fullPath: /home/quick-access-to-contact-api/step-2-start-the-local-service
updatedAt: 1713514842000
source: https://open.feishu.cn/document/quick-access-to-contact-api/step-2-start-the-local-service
-->
# 步骤二：启动本地服务

在本步骤，你将下载示例代码并运行。

## 操作步骤

1. 执行以下命令，下载[示例代码](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8cdb0804798bc6cfec93027c54d867b6_t94EpI7fv0.zip)。

    ```PowerShell
    curl https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8cdb0804798bc6cfec93027c54d867b6_t94EpI7fv0.zip -o oapi-contact.zip
    ```

2. 下载完成后，使用`unzip`命令进行解压。


    Windows 用户可以直接使用解压缩工具进行解压。


    ```PowerShell
    unzip oapi-contact.zip
    ```

  	解压后的项目目录结构如下：
    
    ```JavaScript
    oapi-contact
    ├── .gitignore
    ├── client.js
    ├── config.js
    ├── create-department.js
    ├── create-sub-department.js
    ├── find-all-department.js
    ├── get-department-info.js
    ├── index.js
    ├── listen-user-event.js
    ├── modify-department-name.js
    ├── package.json
    └── spinner.js
    ```

3. 执行以下命令，进入 oapi-contact 文件夹。

    ```PowerShell
    cd oapi-contact
    ```

4. 编辑 `config.js` 配置文件。修改文件中 **appId** 、 **appSecret** 和 **verificationToken** 的值为实际的应用凭证。

	- 方式一：在命令行通过 **vi/vim** 打开并编辑配置文件。命令示例：`vim config.js`。

	- 方式二：在本地设备中手动打开`/oapi-contact`文件夹，找到对应的`config.js`文件，使用常用的文本编辑器打开并编辑。
	
	应用凭证获取方式：
    
     * 应用的 **appId** 和 **appSecret** 可以在 [开发者后台](https://open.feishu.cn/app) 应用详情页的 **凭证与基础信息** 页查看。
      
      	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1d54cf309bcd30ba61e469990b316088_oNFocg7XSI.png?height=588&lazyload=true&maxWidth=600&width=2538)

     * 应用的 **Verification Token** 可以在 [开发者后台](https://open.feishu.cn/app) 应用详情页的 **事件与回调** > **加密策略** 页查看。

        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/189fc59295911454e8c0f0bed5198a65_ZMaZdkCrcd.png?height=642&lazyload=true&maxWidth=600&width=2148)


5. 继续在命令行中，执行以下命令，安装项目依赖。

    ```PowerShell
    npm install
    ```

6. 依赖安装成功后，执行以下命令，启动本地服务。

    ```PowerShell
    node index.js
    ```

  	成功的运行结果如下图所示：
  
	![](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/cb0e08524c2249bf91b6108a35d9a578~tplv-goo7wpa0wc-image.image?height=186&lazyload=true&maxWidth=600&width=1004)

