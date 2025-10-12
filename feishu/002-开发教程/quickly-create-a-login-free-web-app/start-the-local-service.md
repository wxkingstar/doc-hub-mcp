<!--
title: 步骤二：启动本地服务
id: 7227000547022110724
fullPath: /home/quickly-create-a-login-free-web-app/start-the-local-service
updatedAt: 1744081565000
source: https://open.feishu.cn/document/quickly-create-a-login-free-web-app/start-the-local-service
-->
# 步骤二：启动本地服务

在本步骤，你将下载服务端代码，并在Python虚拟环境中启动服务。

## 操作步骤
1. 执行以下命令，下载[示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/89a72c38427997dd39899862783c740f_VHYlYYScyD.zip)到本地。
   * Mac OS 或 Linux执行以下命令。
      ```Shell
      curl https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/89a72c38427997dd39899862783c740f_VHYlYYScyD.zip -o web_app_with_auth.zip
      unzip web_app_with_auth.zip
      cd web_app_with_auth/python
      ```

   * Windows执行以下命令。
      ```Shell
      curl https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/89a72c38427997dd39899862783c740f_VHYlYYScyD.zip -o web_app_with_auth.zip
      tar -xzvf web_app_with_auth.zip
      cd web_app_with_auth/python
      ```

2. 执行以下命令，修改`.env`文件中的应用凭证为上一步测试应用的凭证数据。

	如果你不熟悉 **vim** 命令的用法，可以在本地设备中手动打开`/web_app_with_auth/python/.env`配置文件，进行编辑。

      ```PowerShell
      vim .env
      ```

      1. 按 `i` 进入编辑模式，然后修改 `.env` 文件中的 **APP_ID** 和 **APP_SECRET** 属性为你的应用的凭证数据。
         应用凭证信息可以在         [开发者后台](https://open.feishu.cn/app)         的         **凭证与基础信息**         页查看。
      2. 修改完成后，按 `:wq` 保存退出。
      
:::note
`.env`文件中 **FEISHU_HOST** 保持默认配置即可。如果是私有化部署，要修改 **FEISHU_HOST** 为私有化部署所用的域名。
:::

3. 执行以下命令，创建并激活Python虚拟环境。
   * Mac OS 或 Linux执行以下命令。
      ```Shell
      python3 -m venv venv
      . venv/bin/activate
      ```

   * Windows执行以下命令。
      ```Shell
      python3 -m venv venv
      venv\Scripts\activate
      ```

4. 执行以下命令，安装代码依赖。
   ```Shell
   pip install -r requirements.txt
   ```

5. 依赖安装成功后，执行以下命令，启动服务。
   ```Shell
   python server.py
   ```

   启动成功会生成临时域名，如下图所示。
   
   ![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/bfc0c4bac6244e279c499245168dedbf~tplv-goo7wpa0wc-image.image?height=376&lazyload=true&maxWidth=600&width=1226)
