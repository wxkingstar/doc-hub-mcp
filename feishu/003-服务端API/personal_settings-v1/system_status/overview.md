<!--
title: 功能介绍
id: 7161608966368804867
fullPath: /uAjLw4CM/ukTMukTMukTM/personal_settings-v1/system_status/overview
updatedAt: 1689134248000
source: https://open.feishu.cn/document/server-docs/personal_settings-v1/system_status/overview
-->
# 功能介绍
## 一 业务介绍
**1. 谁应该使用这些API?**

系统状态下的API操作的是租户维度的数据，因此使用者应当是**租户系统状态管理者**，而非租户内个人开发者。

**2. 系统状态字段展示**

| 名称         | 描述        |
| --------- | --------------- | -------   | ----------- | --------- |
|`title` | 对应下图序号① |
|`i18n_title` | 对应下图序号①，当同时存在i18n_title、title时，优先展示i18n_title |
|`icon_key` | 对应下图序号② |
|`color` | 对应下图③ |
|`priority` | 数值不在客户端展示，数值越小，客户端上该系统状态展示优先级越高 |
|`sync_setting->is_open_by_default` | 对应下图④ |
|`sync_setting->title` | 对应下图⑤ |
|`sync_setting->i18n_title` | 对应下图⑤，当同时存在i18n_title、title时，优先展示i18n_title |
|`sync_setting->explain` | 对应下图⑥ |
|`sync_setting->i18n_explain` | 对应下图⑥，i18n_explain、explain，优先展示i18n_explain |

![20221102-154822.jpeg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/db953a79b29dc2e0ad6bcf27f003afbc_58VW85WAyC.jpeg?lazyload=true&width=696&height=439)

![20221102-154826.jpeg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d713c64473854894527df8524a2039b2_jv1jTmKeMO.jpeg?lazyload=true&width=352&height=592)



## 二 字段枚举
### icon_key
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">表情</md-th>
      <md-th style="width: 15%;">icon_key</md-th>
      <md-th style="width: 15%;">表情</md-th>
      <md-th style="width: 15%;">icon_key</md-th>
      <md-th style="width: 15%;">表情</md-th>
      <md-th style="width: 15%;">icon_key</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
       <md-td>![GeneralDoNotDisturb](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generaldonotdisturb_v2.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralDoNotDisturb</md-td>
       <md-td>![GeneralInMeetingBusy](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generalInmeetingbusy_v2.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralInMeetingBusy</md-td>
       <md-td>![Coffee](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_coffee_v2.png?lazyload=true&width=104&height=96)</md-td>
       <md-td>Coffee</md-td>
     </md-tr>
     <md-tr>
       <md-td>![GeneralBusinessTrip](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generalbusinesstrip_v2.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralBusinessTrip</md-td>
       <md-td>![GeneralWorkFromHome](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generalworkfromhome.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralWorkFromHome</md-td>
       <md-td>![StatusEnjoyLife](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_statusenjoylife.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>StatusEnjoyLife</md-td>
     </md-tr>
    <md-tr>
       <md-td>![GeneralTravellingCar](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generaltravellingcar.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralTravellingCar</md-td>
       <md-td>![StatusBus](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_statusbus.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>StatusBus</md-td>
       <md-td>![StatusInFlight](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_statusinflight.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>StatusInFlight</md-td>
     </md-tr>
    <md-tr>
       <md-td>![Typing](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_typing.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>Typing</md-td>
       <md-td>![EatingFood](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_eatingfood_v2.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>EatingFood</md-td>
       <md-td>![SICK](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_sick.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>SICK</md-td>
     </md-tr>
     <md-tr>
       <md-td>![GeneralSun](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generalsun.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralSun</md-td>
       <md-td>![GeneralMoonRest](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_generalmoonrest_v2.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralMoonRest</md-td>
       <md-td>![StatusReading](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_statusreading.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>StatusReading</md-td>
     </md-tr>
    <md-tr>
       <md-td>![Status_PrivateMessage](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_status_privatemessage.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>Status_PrivateMessage</md-td>
       <md-td>![StatusFlashOfInspiration](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_statusflashofInspiration.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>StatusFlashOfInspiration</md-td>
       <md-td>![StatusFlashOfInspiration](https://sf3-ttcdn-tos.pstatp.com/obj/lark-reaction-cn/emoji_onleavestatus.png?lazyload=true&width=96&height=96)</md-td>
       <md-td>GeneralVacation</md-td>
     </md-tr>
  </md-tbody>
  
</md-table>
::: 