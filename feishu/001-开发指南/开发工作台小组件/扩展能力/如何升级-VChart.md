---
title: "如何升级 VChart"
source_url: https://open.feishu.cn/document/block/extend/how-to-upgrade-to-vchart
---
最后更新于 2024-02-02

# 如何升级 VChart 
本文将详细向您介绍如何将项目中已有的 ChartSpace 升级到 VChart。我们会提供两种升级方式：

- 方式一：按照我们的指南一步一步进行手动修改升级
- 方式二： 使用兼容工具，“一键修改”升级

无论如何，我们建议您采用方式一进行升级，尤其是您的项目后续仍会持续迭代的情况下。

## 方式一：手动修改

### Step 1: 引入 VChart js 脚本

你可以通过如下渠道获取 VChart 的脚本：
1. 直接仓库中获取 [packages/block-vchart/block/vchart/index.js](https://github.com/VisActor/VChart/blob/main/packages/block-vchart/block/vchart/index.js) ，每次发包我们都会进行更新
1. 从如下免费的 CDN 中获取
```
<script src="https://unpkg.com/@visactor/vchart/build/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@visactor/vchart/build/index.min.js"></script>
```
这里可以将其保存在项目的 vchart 文件夹下，如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/567ff9b938a7be0efede8e290f787b64_satun1SYs8.png?height=570&lazyload=true&width=656)  

引入之后，我们可以将 `index.json` 文件中对于内置 ChartSpace 的引用声明删除（务必记得，防止包体积过大）。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/81841ef8f06aef5189ad5f1e3a3a1445_kvyO8LEHdJ.png?height=398&lazyload=true&width=668)

### Step 2: 修改 tt-canvas 文件夹中的代码

`tt-canvas` 这部分是处理小组件环境的一个图表胶水代码，目前 VChart 已经将环境兼容的代码内置在自身的代码中，但是为了尽可能减少用户升级过程中的修改成本，我们可以仍然保留这一部分，然后做如下修改即可。

1. 删除 `canvas-element.js` 和 `makeup-canvas.js` 这两个文件
1. `tt-canvas/index.js` 内进行如下修改：
    1. 删除 `import makeUpCanvas from "./makeup-canvas";`
    1. `import ChartSpace from "lark-block-chartspace";` 改为 `import VChart from "../vchart/index";`
    1. `initChart()` 函数内的实现改为如下代码（复制黏贴即可）
```
initChart() {
    const domRef = this.domRef;
    const id = domRef.id;
    const chartInstance = new VChart(
      this.spec,
      {
        mode: 'miniApp',
        modeParams: {
          domref: domRef,
          force: true,
          canvasIdLists: [`${id}_draw_canvas`, `${id}_tooltip_canvas`, `${id}_hit_canvas`],
          tooltipCanvasId: `${id}_tooltip_canvas`,
          freeCanvasIdx: 2
        },
        // Please ensure that dpr can be updated to the object in real time when it changes
        dpr: this.dpr,
        renderCanvas: `${id}_draw_canvas`
      }
    );
    this.chart = chartInstance;
    return chartInstance;
  }
```

### Step 3: index.js 修改

1. 如果你有在这个文件中引用 `lark-block-chartspace`，请将其替换为 vchart：
`import ChartSpace from "lark-block-chartspace";` 改为 `import VChart from "./vchart/index";`
然后在对应引用 `ChartSpace` 的地方改成 `VChart`
2. 因为 VChart 已经将事件的兼容内置，所以只需要调用下对应的事件派发方法即可。你只需要将你的图表事件函数改为如下代码即可：

```
bindChartEvent(event) {
  const { brand } = tt.getSystemInfoSync();
  // 处理下 mouse 事件和 touch 事件，防止重复触发
  if (brand === 'PC' && event.type.startsWith('touch')) {
    return;
  }
  if (brand !== 'PC' && event.type.startsWith('mouse')) {
    return;
  }
  const id = event.target.id.split('_')[0];
  const targetChart = this.data.chartList.find(x => x.id === id);
  const chartInstance = targetChart?.ttCanvas?.chart;
  if (chartInstance) {
    event.target = chartInstance.getCanvas(); // Tip: 必须设置
    chartInstance.getStage().window.dispatchEvent(event);
  }
}
```

### Step 4: index.ttml 修改，增加一层 canvas

需要在 draw_canvas 和 tooltip_canvas 中间添加一层 hit_canvas 用于内部创建额外的 canvas 上下文。另外如果您需要监听 mouse 事件，也可以在 draw_canvas 上绑定 mouse 事件，具体的修改如下：

```
<view class="vchart">
    <canvas
      class="cs-canvas"
      id="line_draw_canvas"
      canvas-id="line_draw_canvas"
      bindtouchstart="bindChartEvent"
      bindtouchmove="bindChartEvent"
      bindtouchend="bindChartEvent"
      bindmousemove="bindChartEvent"
      bindmouseover="bindChartEvent"
      bindmouseout="bindChartEvent"
      bindmousedown="bindChartEvent"
      bindmouseup="bindChartEvent"
    >
    </canvas>

<canvas
      id="line_hit_canvas"
      canvas-id="line_hit_canvas"
      class="cs-tooltip-canvas"
      user-interaction-enabled={{false}}
    >
    </canvas>

<canvas
      id="line_tooltip_canvas"
      canvas-id="line_tooltip_canvas"
      class="cs-tooltip-canvas"
      user-interaction-enabled={{false}}
    >
    </canvas>
  </view>
```

至此我们的修改基本已经完成了，你可以在飞书开发者工具上看到你的图表全部替换成了 VChart 渲染的图表，但是你会发现有一些样式的变化，这是因为 VChart 对图表配置属性做了一些命名和结构上的修改，你可以参照如下的修改列表进行配置上的调整。

### Step 5: 配置项调整

1. 图形属性的变化如下

| ChartSpace 属性                                                                                | VChart 属性                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `interpolate`                                                                                | `curveType`                                                                                                                                 |
| `strokeWidth`                                                                                | `lineWidth`                                                                                                                                 |
| `font`                                                                                       | `fontFamily`                                                                                                                                |
| `baseline`                                                                                   | `textBaseline`                                                                                                                              |
| `align`                                                                                      | `textAlign`                                                                                                                                 |
| `strokeCap`                                                                                  | `lineCap`                                                                                                                                   |
| `strokeDash`                                                                                 | `lineDash`                                                                                                                                  |
| `strokeDashOffset`                                                                           | `lineDashOffset`                                                                                                                            |
| `strokeJoin`                                                                                 | `lineJoin`                                                                                                                                  |
| `strokeMiterLimit`                                                                           | `miterLimit`                                                                                                                                |
| `limit`                                                                                      | `maxLineWidth`                                                                                                                              |
| `cornerRadiusTopLeft`、`cornerRadiusTopRight`、`cornerRadiusBottomRight`、`cornerRadiusBottomLeft` | 统一使用 `cornerRadius` 属性，该属性支持数组，顺序分别对应：[`cornerRadiusTopLeft`, `cornerRadiusTopRight`, `cornerRadiusBottomRight`, `cornerRadiusBottomLeft`] |
2. 环形进度条配置变化
    1. `type: 'circular-progress'` 变为 `type = 'circularProgress'`
    1. `seriesField` 属性需要改为 `categoryField`
    1. `progress.innerPadding` 和 `progress.outerPadding` 属性移至 `progress.style` 中，即如果你配置了这两个属性，需要改为 `progress.style.innerPadding` 和 `progress.style.outerPadding`
2. `label.text.style` 结构变为 `label.style`
2. `crosshair.xField` 需要配置 `visible: true` 才能生效，同时 crosshair 上的 label 是默认关闭的，也需要手动开启，即如果你之前是这么配置的：
```
crosshair: {
    xField: {
      line: {
        type: 'line',
      },
    },
  },
```
需要改成：
```
crosshair: {
    xField: {
      visible: true,
      line: {
        type: 'line',
      },
      label: {
        visible: true,
      }
    },
  },
```
`crosshair.yField` 同理。

至此，升级工作就全部结束了，如果有问题，可通过飞书 oncall 技术支持寻求帮助。

以下是我们提供的 ChartSpace 示例按照以上步骤升级到 VChart 的 demo 示例。  

[block-vhart-demo](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ac6a6b96f60c66ba2c799e8ab5105289_WvUpqlf6iv.zip)

## 方式二： 兼容工具升级

我们提供了一个兼容类来帮助你快速进行升级。
1. 首先按照方式一的 step 1 进行操作，引入 vchart js 脚本，同时将 `index.json` 文件中对于内置 ChartSpace 的引用声明删除。
1. 然后下载下面的脚本将其保存至 vchart 文件夹内：
vchart-adaptor.js
3. 在 `tt-canvas/index.js` 中将 `import ChartSpace from "lark-block-chartspace";` 改为 `import ChartSpace from '../vchart/vchart-adaptor';`
3. 如果还有其他的地方应用 `lark-block-chartspace`，将其修改为 `vchart-adaptor`的路径即可。

以下是我们提供的 ChartSpace 示例按照该方式升级到 VChart 的 demo 示例。

[block-vhart-demo](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3cf098f7456a4ee77afd745ce42c5623_uT9uJ5i0JD.zip)
