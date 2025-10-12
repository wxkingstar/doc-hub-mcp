<!--
title: 步骤一：创建消息卡片
id: 6975811364980948994
fullPath: /home/build-a-beautiful-message-card-in-5-minutes/build-static-cards
updatedAt: 1736394932000
source: https://open.feishu.cn/document/historical-version/build-a-beautiful-message-card-in-5-minutes/build-static-cards
-->
# 步骤一：创建消息卡片

在静态内容呈现上，消息卡片提供了富文本格式、图文混排布局、彩色卡片标题能力。你可以使用消息卡片搭建工具进行所见即所得的查看及调试。

:::warning
本步骤创建的卡片为基于旧版[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder)创建的消息卡片。要了解如何基于新版[飞书卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_tutorial)创建卡片，参考[构建卡片内容](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/build-card-content)。了解新版飞书卡片相关教程，参考[开发一个卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)。

:::
## 步骤一：创建静态消息卡片
:::html
<md-td>
1. 登录 [消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder) 。
2. 单击右上方**新建卡片**按钮，然后在新建卡片页面，创建一个空白卡片。

  
  	<md-alert type="tip">
    首次登录时，消息卡片搭建工具会自动为你生成一个初始的消息卡片，你可以直接在该卡片的基础上进行编辑，也可以创建一个新的卡片。
	</md-alert>


	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/26c0ee09ee2f8a14d2571d50f4d425ce_DrzIkDCYq7.png" style="width:70%"/>

3. 在新建卡片页面，单击 **新建空白卡片** ，然后在弹出的对话框中填写 **卡片名称** ，最后单击 **保存** 。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/adf1c31679d2db54f5b057c65e4086d0_51ro4JnxVT.png" style="width:70%"/>

4. 卡片创建成功后，你可以在 **模块组件** 栏，单击需要的组件，将其添加到卡片中。

	例如：你只需单击标题按钮即可为卡片添加一个标题，

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/34fb8aaa987c54c349a7a83ff1f7fb43_xglFvtlPqe.png" style="width:70%"/>

5. 在中间卡片展示区域，单击 **卡片标题** ，然后在右侧编辑卡片模块配置标题 **内容** 和 **样式** 。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/276996efa9f049b6b1467b7346d78847~tplv-goo7wpa0wc-image.image" style="width:70%"/>

6. 修改卡片内容，修改完成后在顶部菜单栏单击 **保存并发布**。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/9c7aa5cd7dee4668b02d23c1831be1df~tplv-goo7wpa0wc-image.image" style="width:70%"/>

7. 卡片制作完成后，单击 **向我发送预览** 即可查看卡片真实展示效果。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/962d09a905f645ebabfab018a3aa26a6~tplv-goo7wpa0wc-image.image" style="width:70%"/>
  
</md-td>
:::
## 步骤二：为卡片添加动态组件
:::html
<md-td>
在本步骤，你将在上一步完成构建的静态卡片基础上，为卡片添加一个用于与用户交互的按钮组件。

1. 打开[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder)。
   
   1. 在消息卡片搭建工具的左侧功能区域，单击 **模块组件**。
   
   2. 依次选择 **交互组件**> **按钮**，然后在弹出的 **选择按钮排列方式** 弹窗中，选择 **三按钮**。
   
		<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/cf04e3e605a0417bbc751abf38390bcc~tplv-goo7wpa0wc-image.image?lazyload=true&width=1640&height=970" style="width:70%"/>

2. 单击卡片中的 **主按钮**，在右侧 **编辑卡片** 区域打开 **配置跳转交互** 开关，并填写该按钮的跳转链接。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/18b62f540b4348db947f4c9f6b67f960~tplv-goo7wpa0wc-image.image?lazyload=true&width=1720&height=1206" style="width:70%"/>

3. 单击卡片中的 **次按钮** ，在右侧 **编辑卡片** 区域，打开 **二次确认弹窗** 开关，并填写弹窗的 **标题** 和 **提示正文** 。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/0202c53df9da42d8acf6406fe285736c~tplv-goo7wpa0wc-image.image?lazyload=true&width=1858&height=1116" style="width:70%"/>

4. 单击卡片中的 **警示按钮** ，在右侧 **编辑卡片** 区域，打开 **配置回传交互** 开关，并填写需要回传的参数配置。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/54c9d6bf4cc0481285af5401fbea6576~tplv-goo7wpa0wc-image.image?lazyload=true&width=1828&height=1134" style="width:70%"/>
  
	<md-alert type="tip">
  	此处配置的回传参数在用户点击按钮时，会将参数和参数值以POST请求的形式发送请求到**消息卡片请求网址**中。如何配置消息卡片请求网址可参考[步骤三：配置卡片请求地址](/ssl:ttdoc/home/build-a-beautiful-message-card-in-5-minutes/add-interaction)。
	</md-alert>
</md-td>
:::
## 步骤三：配置卡片属性


卡片创建成功后，你还可以参考以下配置卡片的转发与更新规则。

1. 在卡片搭建工具页面 > **编辑卡片** 栏，单击`</>`按钮切换到 **代码编辑** 模式。
  
  	![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/5fa89360162949779f965f8f617c7354~tplv-goo7wpa0wc-image.image?height=1356&lazyload=true&width=2842)

2. 找到 `header` 节点，在后方添加以下代码。
    ```JSON
      "config": {
        "update_multi": true,
        "enable_forward": false
      }
    ```
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 20%">参数</md-th>
            <md-th style="width: 20%">类型</md-th>
            <md-th style="width: 60%">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-th>enable_forward</md-th>
            <md-td>Boolean</md-td>
            <md-td>
是否允许卡片被转发。取值：

* **true**：允许
* **false**：不允许

默认 **true**，客户端版本要求为3.31.0。

转发后卡片上的回传交互组件将自动置为禁用态。用户不能在转发后的卡片操作提交数据。
            </md-td>
        </md-tr>
        <md-tr>
            <md-th>update_multi</md-th>
            <md-td>Boolean</md-td>
            <md-td>
是否为共享卡片，取值：

* **true**：共享卡片，更新卡片的内容对所有收到这张卡片的人员可见。
* **false**：独享卡片，即仅操作用户可见卡片的更新内容。

默认为 **false**。
<md-alert type="tip">
更多介绍请参考 [交互模块](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN) 。
</md-alert>
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>

<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/d4f3856ad35d4b5ebe52a76e859be435~tplv-goo7wpa0wc-image.image?lazyload=true&width=2836&height=1754" style="width:100%"/>
:::
  


