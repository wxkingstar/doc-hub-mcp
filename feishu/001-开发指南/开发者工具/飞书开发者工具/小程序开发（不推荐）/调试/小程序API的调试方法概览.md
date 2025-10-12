---
title: "小程序API的调试方法概览"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-gadget-in-tools/gadget-debugging/how-to-debug-apis-of-gadget
last_remote_update: 2024-09-09
last_remote_update_timestamp: 1725851626000
---
最后更新于 2024-09-09

# 小程序API的调试方法概览
小程序API需要使用飞书客户端的能力，目前飞书开发者工具的模拟器尚不支持。因此需要你通过mock方式或真机调试方式来辅助开发。

| 业务模块         | 接口           | 模拟器        | API mock         | 真机调试        |
| --------- | --------------- | -------   | ----------- | --------- |
|`生物认证` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uQjMuQjMuQjM//face-comparison) | 不支持 | 支持 | 支持 |
|`聊天` | [所有接口](https://open.feishu.cn/document/getBlockActionSourceDetail) | 不支持 | 支持 | 支持 |
|`联系人` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uMTM04yMxQjLzEDN)| 不支持 | 支持 | 支持 |
|`系统认证` | [startDeviceCredential](https://open.feishu.cn/document/uYjL24iN/uIDN14iM0UjLyQTN) | 不支持 | 支持 | 支持 |
|`邮件` | [mailto](https://open.feishu.cn/document/uYjL24iN/uAjNwEjLwYDMx4CM2ATM)| 不支持 | 支持 | 支持 |
|`水印` |[checkWatermark](https://open.feishu.cn/document/uYjL24iN/ukTM1EjL5ETNx4SOxUTM) | 不支持 | 支持 | 支持 |
|`安全密码验证` | [startPasswordVerify](https://open.feishu.cn/document/uYjL24iN/ugTO3IjL4kzNy4CO5cjM)| 不支持 | 支持 | 支持 |
|`飞书启动参数` | [getHostLaunchQuery](https://open.feishu.cn/document/uYjL24iN/ugzM4UjL4MDO14COzgTN) | 不支持 | 支持 | 可以获取，但是不支持自定义 |
|`飞书启动参数` | [getLaunchOptionsSync](https://open.feishu.cn/document/uYjL24iN/uAzM1YjLwMTN24CMzUjN) | 不支持 | 支持 | 支持 |
|`网络` |[所有接口](https://open.feishu.cn/document/uYjL24iN/ucDMx4yNwEjL3ATM)| 不支持 | 不支持 | 支持 |
|`文件` | [docsPicker](https://open.feishu.cn/document/uYjL24iN/ukTN3UjL5UzN14SO1cTN)， [openDocument](https://open.feishu.cn/document/uYjL24iN/ukTN24SO1YjL5UjN) | 不支持 | 不支持 | 支持 |
|`文件` | [FileSystemManager.saveFile](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/file_system_manager/file_system_manager_save_file)，[saveFileAs](https://open.feishu.cn/document/uYjL24iN/uQjN3UjL0YzN14CN2cTN) ， [filePicker](https://open.feishu.cn/document/uYjL24iN/uETM04SMxQjLxEDN)| 不支持 | 支持 | 不支持 |
|`设备/系统信息` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uUjNx4SN2EjL1YTM) | 不支持 | 支持 | 支持 |
|`WiFi` | [所有接口](https://open.feishu.cn/document/uYjL24iN/ugjNx4CO2EjL4YTM)| 不支持 | 支持 | 支持 |
|`蓝牙` | [所有接口](https://open.feishu.cn/document/uYjL24iN/ugzNxYjL4cTM24CO3EjN)| 不支持 | 不支持 | 支持 |
|`低功耗蓝牙` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uMTMyYjLzEjM24yMxIjN) | 不支持 | 不支持 | 支持 |
|`NFC` | [所有接口](https://open.feishu.cn/document/uYjL24iN/ukzM4YjL5MDO24SOzgjN)| 不支持 | 不支持 | 支持 |
|`加速度计` | [所有接口](https://open.feishu.cn/document/uYjL24iN/ukjNx4SO2EjL5YTM)| 工具箱 ![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c10aa0ff67c35f40f08f81bd538e601a_XlyZqlcMlt.png?lazyload=true&width=832&height=1116)| 不支持 | 支持 |
|`罗盘` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uMzNx4yM3EjLzcTM)| 工具箱 ![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2d838a9c7c912060869a5d4cc02439f_Uzociw5aiG.png?lazyload=true&width=846&height=924)| 不支持 | 支持 |
|`拨打电话` | [makePhoneCall](https://open.feishu.cn/document/uYjL24iN/uUzNx4SN3EjL1cTM) | 不支持 | 支持 | 支持 |
|`扫码` | [scanCode](https://open.feishu.cn/document/uYjL24iN/uYzNx4iN3EjL2cTM)| 工具箱 ![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c8fefa36972d83cb4a30fe90c38f8639_6jz7NOQMHa.png?lazyload=true&width=852&height=800) | 支持 | 支持 |
|`屏幕亮度` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uIjNx4iM2EjLyYTM/get-screen-brightness)| 支持 | 支持 |
|`震动` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uEDOx4SM4EjLxgTM)|不支持| 支持 | 支持 |
|`截屏监听` | [所有接口](https://open.feishu.cn/document/uYjL24iN/uMjNwEjLzYDMx4yM2ATM) | 工具箱 ![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/46f70c98d73c80118cd92542a08a4c0f_nPMfHxqt52.png?lazyload=true&width=1038&height=502)| 支持 | 支持 |
|`CustomizedInput` | [getCustomizedInput](https://open.feishu.cn/document/uYjL24iN/uEDN1EjLxQTNx4SM0UTM)|只支持文本输入 | 支持 | 支持 |
|`窗口` | [所有界面](https://open.feishu.cn/document/uYjL24iN/uADO3UjLwgzN14CM4cTN)| 不支持 | 不支持 | 支持 |
|`更新` | [getUpdateManager](https://open.feishu.cn/document/uYjL24iN/uEzM04SMzQjLxMDN)| 工具箱 | 不支持 | 不支持 |
