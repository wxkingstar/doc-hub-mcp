<!--
title: 图片
id: 7343499772500852740
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/image
updatedAt: 1735814800000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/image
-->
# 图片组件

飞书卡片支持图片组件。你可调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具的图片组件中上传图片，获取图片的 key 传入图片组件中，使卡片内容更丰富。

本文档介绍图片组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[图片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/image)。



![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/21a2d415edcae0e25f9c6248423a9a2c_vVX17Ip7AI.png?height=354&lazyload=true&maxWidth=300&width=559)

## 注意事项

为保证图片在聊天窗口中呈现的清晰度，建议你在组件中上传的图片遵从以下规范：

- 图片尺寸在 1500 × 3000 px 的范围内。
- 图片大小不超过 10 M。
- 图片的 `高度:宽度` 不超过 `16:9`。

## JSON 结构

图片的完整 JSON 数据如下所示：

```json
{
  "tag": "img",
  "img_key": "img_v3_0238_073f1823-df2b-4377-86c6-e293f18abcef", // 图片的 Key。可通过上传图片接口或在搭建工具中上传图片后获得。
  "alt": {
    // 光标悬浮（hover）在图片上时展示的说明。
    "tag": "plain_text",
    "content": ""
  },
  "title": {
    // 图片标题。
    "tag": "plain_text",
    "content": ""
  },
  "corner_radius": "5px", // 图片的圆角半径，单位是像素（px）。
  "scale_type": "crop_top", // 图片的裁剪模式，当 size 字段的比例和图片的比例不一致时会触发裁剪。
  "size": "100px 100px", // 图片尺寸。仅在 scale_type 字段为 crop_center 或 crop_top 时生效。
  "transparent": false, // 是否为透明底色。默认为 false，即图片为白色底色。
  "preview": false, // 点击后是否放大图片。默认值为 true。
  // 历史属性
  "mode": "large", // 图片尺寸模式。
  "custom_width": 500, // 自定义图片的最大展示宽度。
  "compact_width": false // 是否展示为紧凑型的图片。
}
```

## 字段说明

图片组件的字段说明如下表。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th>参数</md-th>
      <md-th>是否必须</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 40%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>无</md-td>
      <md-td>组件的标签，图片组件的固定取值为 img。</md-td>
    </md-tr>
    <md-tr>
      <md-td>img_key</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>图片资源的 Key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。</md-td>
    </md-tr>
    <md-tr>
      <md-td>alt</md-td>
      <md-td>是</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>悬浮（hover）在图片上时展示的说明文案。示例值：
```json
"alt": {
        "tag": "plain_text",
        "content": "悬浮（hover）在图片上时展示的说明文案，不需要可以传空"
      }
```</md-td>
    </md-tr>
    <md-tr>
      <md-td>title</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>图片标题。示例值：
```json
"title": {
        "tag": "plain_text",
        "content": "图片标题"
      }
```</md-td>
    </md-tr>
    <md-tr>
      <md-td>corner_radius</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>图片的圆角半径，单位是像素（px）。取值遵循以下格式：
-   [0,∞]px
-   [0,100]%</md-td>
    </md-tr>
    <md-tr>
      <md-td>scale_type</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>crop_center</md-td>
      <md-td>图片的裁剪模式，当 `size` 字段的比例和图片的比例不一致时会触发裁剪。</md-td>
可取值：
- crop_center：居中裁剪
- crop_top：顶部裁剪
- fit_horizontal：完整展示不裁剪    </md-tr>
    <md-tr>
      <md-td>size</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>图片尺寸。仅在 `scale_type` 字段为 crop_center 或 crop_top 时生效。</md-td>
可取值：
- large：大图，尺寸为 160 × 160，适用于多图混排。
- medium：中图，尺寸为 80 × 80，适用于图文混排的封面图。
- small：小图，尺寸为 40 × 40，适用于人员头像。
- tiny：超小图，尺寸为 16 × 16，适用于图标、备注。
- stretch：超大图，适用于高宽比小于 `16:9` 的图片。
- stretch_without_padding：通栏图，适用于高宽比小于 `16:9` 的图片，图片的宽度将撑满卡片宽度。
   
   **注意**： [卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)不再支持 `stretch_without_padding` 属性。你可设置 margin 字段为负数实现通栏效果。如：`"margin": "4px -12px"`。详情参考[组件统一支持布局相关能力](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-breaking-changes-release-notes#a967672)。
      
- [1,1000]px [1,1000]px：自定义图片尺寸，单位为像素，中间用空格分隔。    </md-tr>
    <md-tr>
      <md-td>transparent</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>false</md-td>
      <md-td>是否为透明底色。默认为 false，即图片为白色底色。</md-td>
    </md-tr>
    <md-tr>
      <md-td>preview</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>true</md-td>
      <md-td>点击后是否放大图片。
- true：点击图片后，弹出图片查看器放大查看当前点击的图片。
- false：点击图片后，响应卡片本身的交互事件，不弹出图片查看器。        

**提示**：如果你为卡片配置了跳转链接`card_link`参数，可将该参数设置为 `false`，后续用户点击卡片上的图片也能响应 card_link 链接跳转。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

### 历史字段说明
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th>参数</md-th>
      <md-th>是否必须</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 50%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>mode</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>图片显示模式。取值：
-   **crop_center**：居中裁剪模式，对长图会限高，并居中裁剪后展示。
-   **fit_horizontal**：平铺模式，宽度撑满卡片完整展示上传的图片。
-   **stretch**：自适应。图片宽度撑满卡片宽度，当图片 `高:宽` 小于 `16:9` 时，完整展示原图。当图片 `高:宽` 大于 `16:9` 时，顶部对齐裁剪图片，并在图片底部展示 **长图** 脚标。
-   **large**：大图，尺寸为 160 × 160，适用于多图混排。
-   **medium**：中图，尺寸为 80 × 80，适用于图文混排的封面图。
-   **small**：小图，尺寸为 40 × 40，适用于人员头像。
-   **tiny**：超小图，尺寸为 16 × 16，适用于图标、备注。

**注意**：设置该参数后，会覆盖 `custom_width` 参数。更多信息参见[消息卡片设计规范](/ssl:ttdoc/ukTMukTMukTM/ugDOwYjL4gDM24CO4AjN)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>custom_width</md-td>
      <md-td>否</md-td>
      <md-td>int</md-td>
      <md-td>/</md-td>
      <md-td>自定义图片的最大展示宽度，支持在 278px ~ 580px 范围内指定最大展示宽度。默认情况下图片宽度与图片组件所占区域的宽度一致。

**注意**：该参数在飞书 V4.0 以上版本生效。</md-td>
    </md-tr>
    <md-tr>
      <md-td>compact_width</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>false</md-td>
      <md-td>是否展示为紧凑型的图片。如果配置为 `true`，则展示最大宽度为 278px 的紧凑型图片。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 示例代码

将以下示例代码中的 `img_key` 替换为实际的图片 Key，即可实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/21a2d415edcae0e25f9c6248423a9a2c_J9r7wMzGkG.png?height=354&lazyload=true&maxWidth=300&width=559)

```JSON
{
    "config": {},
    "card_link": {
        "url": "",
        "pc_url": "",
        "ios_url": "",
        "android_url": ""
    },
    "i18n_elements": {
        "zh_cn": [
            {
                "tag": "img",
                "img_key": "img_v2_ace8a4f2-ae13-420f-9eb3-b3530b4abcef",
                "preview": true,
                "scale_type": "crop_top",
                "size": "stretch"
            }
        ]
    },
    "i18n_header": {}
}
```