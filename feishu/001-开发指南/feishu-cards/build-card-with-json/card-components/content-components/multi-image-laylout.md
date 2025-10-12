<!--
title: 多图混排
id: 7343499772500885508
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/multi-image-laylout
updatedAt: 1735814811000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/multi-image-laylout
-->
# 多图混排组件

飞书卡片支持多图混排组件。你可调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在新版飞书卡片搭建工具中上传图片，获取图片的 key 传入多图混排组件中，使卡片内容更丰富。

本文档介绍多图混排组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[多图混排](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/multi-image-laylout)。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fb315779524d13ae504b7b7252acfd49_Bc8bJyGzyt.png?height=390&lazyload=true&maxWidth=300&width=559)

## 使用场景

在内容推送场景，你可能需要在卡片内组织编排多张图片。此时你可以使用多图混排组件，选择图片混排方式，快速构建多图样式。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th>双图混排</md-th>
      <md-th>三图混排</md-th>
      <md-th>四宫格图</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>
        <img src="////sf3-cn.feishucdn.com/obj/open-platform-opendoc/21a219d32a62e83cff9dcf3fd4b9c0de_c8QEc5l5mt.png?height=378&lazyload=true&maxWidth=50" alt="双图混排">
      </md-td>
      <md-td>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3080709a053cf07bef8f507e0ed18314_mBRrvfMSdJ.png?height=544&lazyload=true&maxWidth=50" alt="三图混排">
      </md-td>
      <md-td>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c281f50a3a375b486645dc98d77be2ed_msRy893Xz7.png?height=800&lazyload=true&maxWidth=50" alt="四宫格图">
      </md-td>
    </md-tr>
    </md-tbody>
   <md-thead>
    <md-tr>
      <md-th>六宫格图</md-th>
      <md-th>九宫格图</md-th>
      <md-th></md-th>
    </md-tr>
  </md-thead>
    <md-tr>
      <md-td>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/61be6152107b7bffe9a1e549d6da28ce_7zp54JdQ6N.png?height=544&lazyload=true&maxWidth=50" alt="六宫格图">
      </md-td>
      <md-td>
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5751cdb8a3c73916a5fbb877e6565488_lLOOuSRkxl.png?height=800&lazyload=true&maxWidth=50" alt="九宫格图">
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::
## 注意事项

为保证图片在聊天窗口中呈现的清晰度，建议你在组件中上传的图片遵从以下规范：

- 图片尺寸在 1500 × 3000 px 的范围内。
- 图片大小不超过 10 M。
- 图片的 `高度:宽度` 不超过 `16:9`。

## JSON 结构

多图混排的完整 JSON 数据如下所示：
```json
{
  "tag": "img_combination",
  "combination_mode": "double", // 多图混排的方式。
  "corner_radius": "12px", // 多图混排图片的圆角半径，单位是像素（px）。
  "img_list": [
    // 图片资源数组，顺序与图片排列顺序一致。
    {
      "img_key": "img_v3_0239_8347760e-3173-4072-b1aa-e4e7c835741j"
    },
    {
      "img_key": "img_v3_0239_d9a9b734-57f8-4247-baf3-ae178b55f96j"
    }
  ]
}
```

## 字段说明

多图混排组件的字段说明如下表。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 17%;">参数</md-th>
      <md-th>是否必须</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 50%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>多图混排组件的标签，固定取值：`img_combination`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>combination_mode</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>多图混排的方式，可取值：
- double：双图混排，最多可排布两张图。
 - triple：三图混排，最多可排布三张图。
 - bisect：等分双列图混排，每行两个等大的正方形图，最多可排布三行，即六张图。
 - trisect：等分三列图混排，每行三个等大的正方形图，最多可排布三行，即九张图。

**注意**：
-   若上传的图片数量超过混排方式可容纳的上限，则系统将根据图片上传的顺序，优先展示排列顺序中靠前的图片。超出上限的图片将不再显示。
- 若上传的图片数量未达到混排方式可容纳的上限，则未排布的部分将保留空白。</md-td>
    </md-tr>
    <md-tr>
      <md-td>corner_radius</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>多图混排图片的圆角半径，单位是像素（px）。取值遵循以下格式：
 - [0,∞]px
- [0,100]%</md-td>
    </md-tr>
    <md-tr>
      <md-td>img_list</md-td>
      <md-td>是</md-td>
      <md-td>Object</md-td>
      <md-td>空</md-td>
      <md-td>图片资源的 `img_key` 数组，顺序与图片排列顺序一致。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ img_key</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>图片资源的 Key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 示例代码

### 双图混排效果示例

将以下示例代码中的 `img_key` 替换为实际的图片 Key，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8a03a4edd6a0813bced92cd383061ab8_6AePbfDCGW.png?height=506&lazyload=true&maxWidth=400&width=1081)

```json
{
  "elements": [
    {
      "tag": "img_combination",
      "combination_mode": "double",
      "img_list": [
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        }
      ]
    }
  ]
}
```

### 三图混排效果示例

将以下示例代码中的 `img_key` 替换为实际的图片 Key，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fb315779524d13ae504b7b7252acfd49_cQR9wIHOXZ.png?height=390&lazyload=true&maxWidth=400&width=559)

```json
{
  "elements": [
    {
      "tag": "img_combination",
      "combination_mode": "triple",
      "img_list": [
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        }
      ]
    }
  ]
}
```

### **等分双列效果示例**

将以下示例代码中的 `img_key` 替换为实际的图片 Key，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/02236d7183ff1ca900ffc37dbec338dc_FpogForok4.png?height=819&lazyload=true&maxWidth=400&width=559)


```json
{
  "elements": [
    {
      "tag": "img_combination",
      "combination_mode": "bisect",
      "img_list": [
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        }
      ]
    }
  ]
}
```

### 等分三列效果示例

将以下示例代码中的 `img_key` 替换为实际的图片 Key，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7473f1d9907913c279f796e6022f7a95_Z5qFUWHIbL.png?height=212&lazyload=true&maxWidth=400&width=559)
```json
{
  "elements": [
    {
      "tag": "img_combination",
      "combination_mode": "trisect",
      "img_list": [
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        },
        {
          "img_key": "img_v2_4c772db0-9aff-4eba-bbf4-6e6121cabcef"
        }
      ]
    }
  ]
}
```