<!--
title: AppLink的结构
id: 6907569523176538113
fullPath: /uYjL24iN/ucjN1UjL3YTN14yN2UTN
updatedAt: 1722587599000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/applink-introduction/applink-structure
-->
#  AppLink的结构


AppLink 协议 就是一个 URL 协议。AppLink 协议可以用于打开飞书或者其中的一个功能。


尝试一下：通过Applink打开飞书中的日历 [https://applink.feishu.cn/client/calendar/open](https://applink.feishu.cn/client/calendar/open)

目前可通过Applink可打开的飞书功能 请参考 [已支持的协议](/ssl:ttdoc/uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-lark) 

##  AppLink协议的结构

![图片名称](//sf3-cn.feishucdn.com/obj/website-img/7f0747ae6c2d9a066c02509bdcbe09f4_irvDI07NaS.png?height=179&lazyload=true&width=1077)

| 字段         | 值                               | 说明                      | 
| --------- | --------------------- | -----------------   | 
|**scheme** |https| 固定值 | 
|**host** |applink.feishu.cn| 固定值 | 
|**path** |对应不同的协议| 例如：/client/op/open 打开飞书， /client/mini_program/open 打开小程序， /client/chat/open  打开聊天页面 | 
|**query** |协议参数，不同的协议有不同的定义| 例如：key1=value1&key2=value2 ，所有参数key 和 value 都要进行 encodeURIComponent | 


## AppLink协议的能力
- 在飞书内打开AppLink协议，则会直接跳转到飞书中对应的功能；
- 在飞书外部（如浏览器内）打开Applink协议，为了避免用户未安装飞书而无法唤起对应功能，会先打开**Applink网页**（如下图），提示用户下载飞书 或 点击打开飞书对应的功能。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4d816a08f0fe7b2dbaadcac121ee83a0_fnZdWPAwvg.png?height=1512&lazyload=true&width=1966)

<BR>
AppLink还支持以下参数，实现打开方式的配置：

### 1. 支持对低版本飞书进行兼容
在飞书内使用 AppLink 时，如果当前飞书版本低于设置的”最小飞书版本“时，将打开 **Applink网页**，提示版本过低，需要升级飞书版本后使用。

#### 参数
| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|min_lk_ver | 否         | 指定 AppLink 协议能够兼容的最小飞书版本，使用三位版本号 x.y.z。如果当前飞书版本号小于min_lk_ver，打开该 AppLink 会显示为兼容页面。 | 


::: note 
也可使用 min_lk_ver_android、min_lk_ver_ios、min_lk_ver_pc 参数对不同的客户端指定不同的版本。
::: 
#### Applink示例
[https://applink.feishu.cn/client/op/open?min_lk_ver=5.10.0](https://applink.feishu.cn/client/op/open?min_lk_ver=5.10.0)


###  2. 指定打开飞书客户端，而不打开品牌定制客户端、私有化客户端
在飞书外部 通过 **Applink 网页** 打开飞书时，可设置 `lk_unique = true` 参数，则指定打开飞书客户端，而不打开品牌定制客户端与私有化客户端。
#### 参数
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 20%;">
                名称
            </md-th>
            <md-th style="width: 18%;">
                数据类型
            </md-th>
            <md-th style="width: 10%;">
                必填
            </md-th>
            <md-th style="width: 10%;">
                默认值
            </md-th>
            <md-th>
                描述
            </md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                lk_unique
            </md-td>
            <md-td>
                boolean
            </md-td>
            <md-td>
                否
            </md-td>
            <md-td>
                false
            </md-td>
            <md-td>
               **true**：指定打开飞书客户端，而不打开品牌定制客户端与私有化客户端。<br>**false**：可打开飞书 / 品牌定制客户端 / 私有化客户端；如果用户安装了多个客户端，则随机打开其中一个。


<md-alert type="tip" icon="none">
飞书 V5.12.0 及以上版本支持。如果设为true，低版本飞书客户端将无法唤起。
</md-alert>
            </md-td>
        </md-tr>
      </md-tbody>
    <md-tbody>
        <md-tr>
            <md-td>
                brand_t
            </md-td>
            <md-td>
                String
            </md-td>
            <md-td>
                否
            </md-td>
            <md-td>
            </md-td>
            <md-td>
            取值为飞书租户域名前缀，可以打开文档首页查看域名前缀。如文档首页地址为 [https://g4u31ee3yc.feishu.cn/drive/home/](https://g4u31ee3yc.feishu.cn/drive/home/)，Applink 链接应该为 [https://applink.feishu.cn/?brand_t=g4u31ee3yc](https://applink.feishu.cn/?brand_t=g4u31ee3yc)


<md-alert type="tip" icon="none">
saas定制版飞书客户端使用，标准版飞书用户无需关注。
</md-alert>
            </md-td>
        </md-tr>
      </md-tbody>
</md-table>
:::
#### Applink示例
[https://applink.feishu.cn/client/op/open?lk_unique=true](https://applink.feishu.cn/client/op/open?lk_unique=true)


###  3. 支持以降级协议打开
在飞书外部使用以 `feishu` 代替 `https` 的协议，会尝试直接打开飞书，但是当无法打开飞书时不会自动跳转对应的 **AppLink 网页**。

#### Applink示例
  
[feishu://applink/client/op/open](feishu://applink/client/op/open) 5.10 版本host 开始支持 **applink**