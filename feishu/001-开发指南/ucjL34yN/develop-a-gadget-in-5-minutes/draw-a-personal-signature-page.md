<!--
title: 步骤三：开发小程序
id: 7036724259775545345
fullPath: /home/develop-a-gadget-in-5-minutes/draw-a-personal-signature-page
updatedAt: 1692952764000
source: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/develop-a-gadget-in-5-minutes/draw-a-personal-signature-page
-->
# 步骤三：开发小程序

在本步骤，你将完成小程序个人签名页绘制，并实现签名的页面逻辑。
## 操作步骤
1. 打开`app.js`文件，添加以下代码，配置小程序入口。
    ```JavaScript
    App({
      // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）。
      onLaunch: function(options) {
        // Do something initial when launch.
      },
      // 当小程序启动，或从后台进入前台显示，会触发 onShow。
      onShow: function(options) {
        // Do something when show.
      },
      // 当小程序从前台进入后台，会触发 onHide。
      onHide: function() {
        // Do something when hide.
      },
      // 当小程序发生脚本错误，或者 API 调用失败时，会触发 onError 并带上错误信息。
      onError: function(msg) {
        console.log(msg)
      },
      globalData: 'I am global data'
    })
    ```
:::note
`app.js`文件的`App()`对象是小程序的入口函数，你可以通过 `App(params)`的参数指定小程序的生命周期函数和其他一些自定义参数，更多内容可参考[小程序App](/ssl:ttdoc/uYjL24iN/uMDNuMDNuMDN)。
:::
    
2. 打开小程序项目的`/page/index/index.ttml`文件，添加小程序个人签名页面代码。
  添加完成后使用`Ctrl` + `S`保存文件。
    ```JavaScript
    <view class="intro">
        <view class="user-info">
            <view class="user-info-attr">
                <!-- 小程序image组件，详情可参考https://open.feishu.cn/document/uYjL24iN/uUzNuUzNuUzN -->
                <image class="user-info-attr-img" tt:if="{{isLogin}}" src="{{userInfo.avatarUrl}}" />
                <!-- 使用tt:if判断当前用户是否已登录，如果当前用户已登录，那么展示用户的头像；如果未登录，则展示灰色底色 -->
                <view tt:else class="user-info-attr-img"></view>
            </view>
            <view class="user-info-base">
                <view tt:if="{{isLogin}}">
                    <view class="info-name">{{userInfo.nickName}}</view>
                    <view class="info-sign">{{userSign}}</view>
                </view>
                <view tt:else bindtap="toLogin">
                    {{notLogin}}
                </view>
            </view>
        </view>

        <view class="personal-sign">
            <view class="personal-sign-text">
                <span>设置你的个人签名</span>
            </view>
            <view >
                <textarea class="personal-sign-textarea" bindblur="textareaBlur"></textarea>
            </view>
            <!-- 为按钮绑定changeSign事件，changeSign事件对应index.js中的changeSign函数 -->
            <button bindtap="changeSign" class="personal-sign-button" type="primary" size="large ">确定</button>
        </view>
    </view>
    ```

  	代码添加成功后如下图所示：
  	![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/ece8d473db2a40a9bf0bf83213409de8~tplv-goo7wpa0wc-image.image?height=1476&lazyload=true&width=2328)
2. 打开小程序项目的`/page/index/index.ttss`文件，添加个人签名页的样式代码。
    ```CSS
    .user-info {
      flex: 1;
      display: flex;
      align-items: center;
      background: #EBF1FD;
      padding: 30px 24px;
      margin-bottom: 40px;
    }
    .user-info-attr {
      margin-right: 15px;
    }
    .user-info-attr-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ccc;
    }
    .user-info-base {
      text-align: left;
      font-size: 14px;
    }
    .info-name {
      margin-bottom: 6px;
      font-size: 20px;
    }
    .info-sign {
      font-size: 14px;
      color: #8F959E;
    }
    .personal-sign {
      font-size: 16px;
      padding: 25px;
    }
    .personal-sign-textarea {
      border: 1px solid #ccc;
      border-radius: 6px ;
      height: 120px;
      margin-top: 10px;
      width: 100%;
      padding:10px;
      box-sizing: border-box;
    }
    .personal-sign-button {
      margin-top: 25px;
      width: 100%;
    }
    ```

  	如下图所示，添加组件样式后，小程序的个性签名页面已经基本构建完成。
  
  	![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/7366b286747347cd88ae07fbcaf95832~tplv-goo7wpa0wc-image.image?height=1130&lazyload=true&width=1836)
3. 打开`/page/index/index.js`文件，添加小程序页面逻辑代码。

    ```JavaScript
    Page({
      //页面变量
      data: {
        isLogin: false,//当前用户是否登录
        userInfo: {},//用户个人信息
        personalSign: '',//用户在多行文本框中输入的个人签名文本
        userSign: '',//展示在个人信息中的个人签名文本
      },

      onLoad: function () {
        //页面加载时处理
        this.initUser()
      },

      // 获取用户个人信息
      initUser: function() {

        tt.getUserInfo({
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo: JSON.parse(res.rawData),
              isLogin: true
            })
          },
          fail:(res)=>{
            console.log(res)
            this.toLogin()
          }
        })
      },

      // 确定button的点击绑定事件
      changeSign: function() {
        this.setData({
          userSign: this.data.personalSign
        })
      },

     // 个人签名输入框textarea的bindblur事件
      textareaBlur: function(e) {
        console.log(e)
        this.setData({
          personalSign: e.detail.value
        })
      },
      // 用户登录
      toLogin() {
        tt.login({
            success:(res) =>{
              this.initUser()
                tt.showToast({
                  title: 'login',
                  icon: 'success',
                  success:() => {
                    console.log("login success")
                  }
                })
            },
            fail (res) {
                console.log(`login fail`);
            }
        });
      }
    })
    ```

  	如下图所示，js代码添加成功后，已自动弹出登录授权。
  
  	![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/b8ae15cbca7c4ea99f3bcbf587b567a8~tplv-goo7wpa0wc-image.image?height=1954&lazyload=true&width=3136)
    
4. 在小程序开发工具左侧模拟器单击 **允许**，然后在 **个性签名** 输入框中输入个性签名，最后单击 **确定**。
	
    如下图所示，更新个人签名功能已经完成开发。
    
  	![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/d1cc2208ad94494d911ca3411572adc0~tplv-goo7wpa0wc-image.image?height=1130&lazyload=true&width=1836)

