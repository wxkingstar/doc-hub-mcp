<!--
title: Android 最佳实践
id: 7377651674068140033
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/android-best-practices
updatedAt: 1726196924000
source: https://open.feishu.cn/document/native-integration/open-scene-introduction/android-best-practices
-->
# Android最佳实践
## 登录集成场景：密码登录 + 人脸识别
   1. **场景能力介绍：** 登录场景支持将 **飞书登录** 替换为 **客户自研/采买的密码登录键盘、人脸识别** 等
   1. **效果示例**
   
         ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2751d0e90e9d6025cd12da305d5ba910_eEFCnvYQcO.png?height=896&lazyload=true&maxWidth=600&width=836)
    1. **代码实践**
        1. 启用 native-app-extension-api 组件
        1. 实现相关接口，并添加原生集成注解
         ```javascript 
            @NativeAppExtensionImpl
            public class NativeAppExtension implements INativeAppExtension, INativeAppPageRouter {
                private static final String TAG = "NativeAppExtension";
                @Override
                public void init() {
                }
                @Override
                public void destroy() {
                }
                @Override
                public String getAppId() {
                    return "cli_xxxxxxxxxxx";
                }
                @Override
                public void pageRoute(Context context, String linkUrl) {
                    Logger.i(TAG, "pageRoute linkUrl is " + linkUrl);
                    Intent intent = new Intent(context, LoginActivity.class);
                    intent.putExtra(LoginActivity.EXTRA_URL, linkUrl);
                    context.startActivity(intent);
                }
            }
          ```
      1. **实现自有页面登录逻辑**
         ```javascript
            package com.sample.android.alchemy.app.login
            import android.os.Bundle
            import androidx.fragment.app.Fragment
            class LoginActivity : Activity() {
                companion object {
                    const val TAG = "LoginActivity"
                    const val EXTRA_URL = "extra_url"
                }
                private var extraUrl: String? = null
                private var landUrl: String? = null
                override fun onCreate(savedInstanceState: Bundle?) {
                    super.onCreate(savedInstanceState)
                    intent.getStringExtra(EXTRA_URL)?.let {
            extraUrl = it
                    }
            }
                override fun onDestroy() {
                    super.onDestroy()
                }
            }
            ```
    1. **登录流程图**
    
		![img_v3_02bk_5465bee6-2c04-473c-a9d4-63a0c8d5d68g.jpg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/276832fb6405d5b4162cae06ebc131b8_FRMlM8DMOE.jpg?height=3848&lazyload=true&maxWidth=500&width=3514)
  
## 三方安全场景：三方VPN SDK集成

   1. **场景能力介绍：** 三方VPN SDK支持客户在**外网环境**下，连接VPN后，**打开公司内网环境**
   1. **效果示例**
    
         ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5de5e68e418aaae4c6d657591310882e_VjTWnGraGQ.png?height=2400&lazyload=true&maxWidth=300&width=1080)
    1. **代码实践**
        1. 启用 web-container-api 组件
        1. 实现相关接口，并添加原生集成注解
        ```javascript 
            package com.sample.android.alchemy.web.container;
            import android.content.Context;
            import android.content.Intent;
            import android.net.Uri;
            import com.ss.android.lark.web.ErrorPageConfig;
            import com.ss.android.lark.web.IWebContainerApi;
            import java.util.HashMap;
            import java.util.Map;
            @com.ss.android.lark.web.WebContainerApiImpl
            public class WebContainerApiImpl implements IWebContainerApi {
                private static final String TAG = "WebContainerApiImpl";
                private static final String AUTHORITY_BLOCK = "www.feishu.cn";
                private Context context;
                public WebContainerApiImpl(Context context) {
                    this.context = context;
                }
                @Override
                public void onOpen(String url, Callback callback) {
                    Logger.i(TAG, "onOpen url is " + url);
                    Uri uri = Uri.parse(url);
                    if (context != null && uri.getEncodedAuthority().equals(AUTHORITY_BLOCK)) {
                        callback.onSuccess();
                    } else {
                        callback.onSuccess();
                    }
                }
                @Override
                public void onClose(String url) {
                    Logger.i(TAG, "onClose url is " + url);
                    context = null;
                }
                @Override
                public ErrorPageConfig getErrorPageConfig() {
                    ErrorPageConfig errorPageConfig = new ErrorPageConfig();
                    return errorPageConfig;
                }
            }
          ```
## H5调用JS API场景：XX地图SDK集成

  1. **场景能力介绍：** 支持在**H5页面调用扩展的JsApi，** 从而达到在飞书内，客户可通过H5实现轻量化的特化开发
  1. **效果示例**
    
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4d1543d39a7b2855744871dff4b8338c_R5cOheVj2W.jpeg?height=911&lazyload=true&maxWidth=600&width=868)
    1. **代码实践**
        1. 启用 native-app-extension-impl 组件
        1. 实现 INativeAppPluginFactory 接口，并添加原生集成注解
        ```javascript 
            package com.sample.android.alchemy.ability.map;
            import com.ss.android.lark.extension_interfaces.INativeAppPlugin;
            import com.ss.android.lark.extension_interfaces.INativeAppPluginFactory;
            import java.util.Arrays;
            import java.util.List;
            @com.ss.android.lark.extension_interfaces.NativeAppPluginFactory
            public class MapPluginFactory implements INativeAppPluginFactory {
                @Override
                public String getPluginName() {
                    return Constants.PluginName.MAP;
                }
                @Override
                public List<String> getPluginApiNames() {
                    return Arrays.asList(Constants.JsApi.GET_LOCATION, Constants.JsApi.GET_RESTAURANTS);
                }
                @Override
                public INativeAppPlugin createPlugin() {
                    return new MapPlugin();
                }
            }
          ```
        1. 实现相应的 Plugin
            ```javascript
            package com.sample.android.alchemy.ability.bdmap;
            import android.Manifest;
            import android.app.Activity;
            import android.content.Context;
            import android.content.Intent;
            import android.content.pm.PackageManager;
            import android.text.TextUtils;
            import android.util.Log;
            import androidx.core.app.ActivityCompat;
            import androidx.core.content.ContextCompat;
            import com.ss.android.lark.extension_interfaces.ApiResult;
            import com.ss.android.lark.extension_interfaces.IApiCallback;
            import com.ss.android.lark.extension_interfaces.INativeAppPlugin;
            import com.ss.android.lark.extension_interfaces.INativeAppPluginContext;
            import com.ss.android.lark.extension_model.NativeAppPluginEvent;
            import com.ss.android.lark.extension_model.NativeAppPluginResult;
            public class MapPlugin implements INativeAppPlugin {
                private static final String TAG = "BDMapPlugin";
                private static final int LOCATION_PERMISSION_REQUEST_CODE = 1;
                @Override
                public void onCreate(INativeAppPluginContext iNativeAppPluginContext) {
                }
                @Override
                public NativeAppPluginResult handleEvent(Context context, NativeAppPluginEvent event, IApiCallback callback) {
                    Log.i(TAG, "handleEvent call, eventName: " + event.getEventName());
                    requestLocationPermission(context);
                    if (TextUtils.equals(event.getEventName(), Constants.JsApi.GET_LOCATION)) {
                        handleGetLocation(context, callback);
                    } else if (TextUtils.equals(event.getEventName(), Constants.JsApi.GET_RESTAURANTS)) {
                        handleGetRestaurants(context, callback);
                    }
                    return null;
                }
                private void handleGetLocation(Context context, IApiCallback callback) {
                    
                }
                private void handleGetRestaurants(Context context, IApiCallback callback) {
                    
                }
                private void requestLocationPermission(Context context) {
                    if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                        ActivityCompat.requestPermissions((Activity) context,
                                new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_PERMISSION_REQUEST_CODE
            );
                    }
                }
                @Override
                public boolean handleActivityResult(int requestCode, int resultCode, Intent data) {
                    return false;
                }
                @Override
                public void release() {
                }
            }
            ```
## 三方邮件集成场景

  1. **场景能力介绍：** 邮件集成场景支持在飞书内使用 **客户自研/采买邮箱。** 并支持将集成的客户邮箱放置到客户端导航栏，调整应用顺序
  1. **效果示例**
    
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/89ad82adab606e6bbd4bdd98778a9925_npT11i6WUn.png?height=897&lazyload=true&maxWidth=600&width=835)
    1. **代码实践**
        1. 启用 tab-container-api 组件
        1. 实现 ITabPageConfig，并添加原生集成注解
         ```javascript 
            package com.sample.android.alchemy.tab.container.mail;
            import androidx.fragment.app.Fragment;
            import com.sample.android.alchemy.tab.container.mail.lark.KATabFragment;
            import com.sample.android.alchemy.tab.container.mail.lark.KATabTitleConfig;
            import com.sample.android.alchemy.tab.container.mail.lark.KATabViewConfig;
            import com.ss.android.lark.tab.ITabPageConfig;
            import com.ss.android.lark.tab.TabPageConfig;
            @TabPageConfig
            public class KAMailTab implements ITabPageConfig {
                @Override
                public String getAppId() {
                    return "cli_a56d5e34c170d013";
                }
                @Override
                public ITabViewConfig getTabViewConfig() {
                    return new KATabViewConfig();
                }
                @Override
                public boolean interceptBackPress() {
                    return false;
                }
                @Override
                public Fragment getTabContent() {
                    return new KATabFragment();
                }
                @Override
                public ITabTitleConfig getTabTitleConfig() {
                    return new KATabTitleConfig();
                }
            }
          ```
        1. 实现相关邮箱页面
            ```javascript
            package com.sample.android.alchemy.tab.container.mail.lark;
            import android.os.Bundle;
            import android.view.LayoutInflater;
            import android.view.View;
            import android.view.ViewGroup;
            import androidx.annotation.NonNull;
            import androidx.annotation.Nullable;
            import androidx.fragment.app.Fragment;
            import com.sample.android.alchemy.tab.container.mail.MainFragment;
            import com.sample.android.alchemy.tab.container.R;
            public class KATabFragment extends Fragment {
                @Override
                public void onCreate(Bundle savedInstanceState) {
                    super.onCreate(savedInstanceState);
                }
                @Override
                public final View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
                    return inflater.inflate(R.layout.ka_fragment_impl, container, false);
                }
                @Override
                public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
                    super.onViewCreated(view, savedInstanceState);
                    getChildFragmentManager().beginTransaction().add(R.id.container, new MainFragment()).commitNow();
                }
            }
            ```