<!--
title: 数据可视化设计指南
id: 7462709322369073156
fullPath: /tools-and-resources/design-specification/data-visualization/data-visualization-design-guide
updatedAt: 1739784708000
source: https://open.feishu.cn/document/design-specification/data-visualization/data-visualization-design-guide
-->
# 数据可视化设计指南
## 图表色板

### 分类色板 ｜Categorical palettes

分类色板，用于描述分类数据，通常一个颜色代表一个值以区分不同类型，图表项间完全独立，没有逻辑上的顺序或关联的数据情况，通常用于多组柱形图、多组折线图或饼图等场景。
分类色板主要通过各种颜色视觉区别做数据点之间的区分，我们建议按照下方所示顺序使用颜色。（当类别超过 14 个颜色的场景时，建议进行循环取色。)

:::html
<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid #D5D5D6;
        }
        
        td {
            border: 1px solid #EAEAEA;
            padding: 0px;
        }
    </style>
</head>
</html>
:::
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
      <md-td>以下为 DS 默认分类色板：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/09c5da851ff483368f32aba7e124ccfd_Yez1PVJ2Ue.png?height=600&lazyload=true&width=2560) </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**取色示例：** 
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
      <md-td>只有一个类别：<br>取分类色板第一个颜色应用到每个数据上。</md-td>
      <md-td>显示多个类别：<br>按照预定顺序自动从分类色板取色应用到每个类别中</md-td>
    </md-tr>
    <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c6e7a12e821d60db0e8d67959bf6dc3_f9oiLMTXiY.png?height=480&lazyload=true&width=1036)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a57395124e08e27a239f5846c3d83f0_B5TuVUiIJh.png?height=480&lazyload=true&width=1036)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

:::html
<md-alert>
  **分类色板的建议：**
- 行业不同，用户场景下的配色方案往往不同，所以分类色板可以有多主题
- 分类色板明暗交替可以有效提升部分视障人群识别数据效率
- 高饱和或明亮的颜色，可读性低不适合大部分图表场景
- 使用太多色调会使图表信息失去聚焦，避免围绕色轮一圈选择所有颜色</md-alert>
:::

  
<br>
### 顺序色板 ｜ Sequential palettes

顺序色板，使用同一（单色）或邻近色相（多色），通过明度或饱和度的渐变，常用来表示同一事物中的数值大小或梯度变化，如一个国家或地区的新增人口数对比、风险等级变化。

**单色**

单色顺序色板适用于存在关系或趋势的图表，例如漏斗图、色块图等。
:::html
<md-table style="width: 800px;">
  <md-tbody>
     <md-tr>
      <md-td>以下为 DS 部分默认顺序色板示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1fb69ef8f0c665260b3e6aecb30a8dde_QLEHNSTnbr.png?height=1422&lazyload=true&width=2560)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


**多色**

通常是两种互补色（也可以是对比色）去展现数据从一个负向值到 0 点再到正向值的连续变化区间，显示相对立的两个值的大小关系，常用于气温的冷热、海拔高低、股票涨跌等。
> 例如：“小于 -10℃”、“-10℃ - 0℃”、“0℃”、“0℃ - 10℃”、“大于 10℃”

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f4c49d81511d2ed37525846387c8d13_QPWlu38j4d.png?height=761&lazyload=true&maxWidth=500&width=1280)
  
  

**功能色板 ｜ function palettes**

功能颜色用于反映状态。通常红色代表危险或错误，橙色代表严重警告，黄色代表一般警告，绿色代表正常或成功。

:::html
<md-table style="width: 800px;">
  <md-thead>
    <md-tr>
      <md-th style="width: 30%;">function 色板</md-th>
      <md-th style="width: 70%;">使用场景</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/436bc5dda1839d303a8136b18322998b_OuqSJjjk08.png?height=2178&lazyload=true&width=1912)</md-td>
      <md-td>元素：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b191070588b60ad8bf7288441fb110c8_UgUyvYQYnT.png?height=792&lazyload=true&maxWidth=260&width=1266)&nbsp;&nbsp;![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f9347580284b3de8c7f9b418b1bf30f_iKJDWBCy1R.png?height=792&lazyload=true&maxWidth=260&width=1266)<br>文字：（请重视颜色在不同文化中可能具有不同的含义，仅作示例）<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/36d081b9baf3f6bce091ff9069ff10ed_YHbkzFzJMu.png?height=711&lazyload=true&maxWidth=260&width=1280)&nbsp;&nbsp;![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/561b94b7d93e36331557da7d8d01add7_c4YmbAaaOj.png?height=711&lazyload=true&maxWidth=260&width=1280) </md-td>
</md-tbody>
</md-table>
:::

<br>  
  

## 图表构成

### 矩形图表

大部分可视化图表都是矩形图，在 X 轴、Y 轴表示两个维度，通常由模块 header、轴标题、图例等内容组成。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ed4e1d9e74f67de3b39ed6aa792748e0_OYMnyqGcYq.png?height=1250&lazyload=true&width=2560)
  
  

### 圆形图表

常见的圆形图表有饼图、环形图、雷达等。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/05281c8e257e0f4d0fd7e80034a8f61d_IXEnqoW8vL.png?height=1250&lazyload=true&width=2560)

  <br>
  
- **图例显示：** 如果图表仅显示一个数据类别，并且场景中有其他显示类别标签的场景下，将图例隐藏显示
- **图例位置：**
    - 默认情况下，飞书内桌面端图例位于图表底部水平居中对齐。（但根据页面布局和场景，可以选择将图例放在图表的上/右等位置）
    - 移动端建议将图例放置于图表上方，保障用户能清晰查看图例
- **图例纹理：** 默认情况下使用颜色区分数据属性，（色盲、色弱等）视障场景下可以通过纹理代替/补充颜色区分
- **图例过多：** 当前 Vchart 预置方式体验一般，优先以业务内探索统一方案后 UD 跟进研发
  
   <br> 
  

## 高频图表的选择&应用

### 类型总览

从图表展示意图角度，可以将常见数据图表归纳为以下 7 类。
并不是说“比较”目标类型图表不能表现“趋势”，只是基于图表类型最大的特性优势进行分布，例如折线图也可以比较，但相比而言趋势更加明显。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%;">图表目标</md-th>
      <md-th style="width: 70%;">图表选型</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**比较**:<br>使用图形的长、宽、位置、面积、角度、颜色等来比较数值大小。</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c19e92121bf948bcd7a2ad42773dfb3b_8FBmOP3EGV.png?height=576&lazyload=true&width=1538)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**趋势**:<br>通过图形位置在区域上的连续分布，来展示变化趋势</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f28b43998ad496cf8c3bd6a36dda1c0_kfXk2RcCfY.png?height=304&lazyload=true&width=1538)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**流程**:<br>显示固定流程间的流程流转或数据转化</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/811fe48113e34dd07b92e517192b46fc_HVoQUFPVjV.png?height=440&lazyload=true&width=1536)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**占比**:<br>通过分总对比表示分类数据的占比</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a19e624a42a5a67fb97dcade75b6b71e_J4AN1QEaxG.png?height=330&lazyload=true&width=1538)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**分布**:<br>数据的分布情况</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7f184c7b2d1e92e833ca581a2ff6e2c_FAA00nAwb1.png?height=324&lazyload=true&width=1538)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**排名**</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d48c94c46840d108915183c37ac333ce_i6OovN4E23.png?height=324&lazyload=true&width=1536)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**关系**</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb3e03c9862f5ca2cf2249763103cc5d_lSmeDhrvrG.png?height=384&lazyload=true&width=1538)</md-td>
     </md-tr>
</md-tbody>
</md-table>
:::  

### 图表详细

同时，我们收集各业务高频使用图表类型，并对以下 8 类高频图表定义、使用场景、类型细节进行归纳分析。
  
**折线图 LineChart ｜ 趋势**

**定义：**
  
一系列的数据点进行连接，用于描述随时间或有序类别变化的趋势。（通过点在 Y 轴位置对比数据值）

  **色板使用：**
  
折线图通常采用「分类色板」

  **使用场景：**
  
不适用：分类过多的场景（超过 5 个），不建议选用折线图

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">类型 </md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 35%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**基础折线图**<br>Basic</md-td>
      <md-td>直线段将数据点连接，关注点数据（仅节点为真实数据，连线间任意点无实际意义），适用于简单的数据集。<br>**优势：清晰趋势展示、空间占用较少，方便比较**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7308d179ce1c3c286263aaa850ca4dca_EozOEVpien.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
     <md-tr style="vertical-align: top;">
      <md-td>**平滑折线图**<br>（曲线） <br>Basic</md-td>
      <md-td>曲线段将数据点连接，关注线数据（线上任意点都是真实数据），适用于对趋势平滑度关注的场景。<br>**优势：平滑过渡、高精度预测/观察、显示周期性数据**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5fcd163a98728feb72b79cecbadc993e_v5Y9LsOjwM.png?height=1250&lazyload=true&width=2560)</md-td>
      </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**阶梯图**<br>Step</md-td>
      <md-td>以固定间隔绘制数据，在数据点之间形成一系列阶梯，凸显数据的阶段性变化。<br>**优势：数据阶段性变化明显**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f6ef80ff3f0188f153fc7dec4f50af3_AiiSzXQW3W.png?height=1250&lazyload=true&width=2560)</md-td>
      </md-tr>
</md-tbody>
</md-table>
:::  

**柱状图 ColumnChart｜比较**

**定义：**

  以长方形的长度或高度为变量描述数据值，用于描述分类数据之间的对比。分为水平方向（条形图）、垂直方向（柱形图）

  **使用场景：**

  适用：应用于明确/少量的分类数据对比

  不适用：分类过多或表示趋势场景

  **色板使用：**

  默认采用「分类色板」。也在分组、堆叠字段有一定内在顺序逻辑时使用「顺序色板」。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">类型-子类型</md-th>
      <md-th style="width: 40%;">使用场景</md-th>
      <md-th style="width: 40%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**柱状图 - 基础柱状图**<br>Column - Basic</md-td>
      <md-td>垂直的柱子显示类别间的数据比较。一个轴是分类维度，一个轴是对应数值。<br><br>**优势：对比不同分类的数据大小**  </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c84d3a30bc49249fca789fec217f71f1_BPwhK2oeSk.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**柱状图 - 分组图**<br>Column - Grouped</md-td>
      <md-td>将多组数据集彼此并排显示，进行不同类别的数据对比。<br><br>**优势：对比同一分组内不同分类数据大小。对比不同分组相同分类大小，但无法对比各分组总量** </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9879c476b256592e5c71d15a77620f0c_ttbwlHp84V.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**柱状图 - 堆叠柱状图**<br>Column - Stacked</md-td>
      <md-td>
- **一般堆叠**<br>单个柱状上各层的值分别代表不同的数据大小，单柱高度代表分组数据总和。
- **百分比堆叠**<br>柱状各层代表该类别数据占分组总体数据的百分比。

**优势：方便对比总量，但不适合对比不同分类下相同维度数据**</md-td>
      <md-td>一般堆叠<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b591815362cb1ce0235d509755d6cab3_XITz1hxZmM.png?height=1250&lazyload=true&width=2560)<br>百分比堆叠<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b0f044831c8cbbaf6d672c99b41a3deb_3CpvkBT0qV.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**条形图**<br>Bar</md-td>
      <md-td>避免标签过长拥挤查看困难时使用。（条形图也有分组、堆叠场景，不做赘述）<br>1.分类可视化多用条形图
<br>2.时间序列多用柱状图<br><br>**优势：清晰对比数据的同时，为标签提供更多空间**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8861a27b19c54c82ff4bc95117b30293_jkArZyLA3v.png?height=1250&lazyload=true&width=2560) </md-td>
     </md-tr>
</md-tbody>
</md-table>
:::    

  
**饼/环图 PieChart｜构成占比**

**定义：**

  通过扇区弧度大小为变量对比不同分类的占比情况，显示某一份额与总额间的关系用于描述分类数据之间的对比。饼图数据分类不宜过多（少于 9 个），避免饼图过于复杂，可读性受影响。

  **使用场景：**

  适用：分类明确且查看占比场景

  不适用：分类过多、分类数据量差别小

  **色板使用：**

  默认采用「分类色板」

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 35%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**饼图**<br>pie </md-td>
      <md-td>通过弧度大小对比各种分类占比情况。<br>**优势：方便比较各分类大小占比**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ace9bf390e119a2692d09ee429b699d9_4LkHegbYB5.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**环图**<br>donuts</md-td>
      <md-td>与饼图类似，将中间区域挖镂空。<br>**优势：中心空间可利用、对比饼图更美观**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/78092b1efdcd460ab05de2fad7e0438c_EidWfbIw48.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**嵌套图**</md-td>
      <md-td>饼图和环图组合，展示数据的细分构成。<br>**优势：清晰查看二级分类占比**  </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/660dde8acbef2021d3a405a61de01c14_wzC2ZVd8fH.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
</md-tbody>
</md-table>
:::  
<br>

:::html
<md-alert>
  饼/环图细节建议：
- 为避免饼/环图某些色板色彩下外部标签文字颜色色彩弱，可读性低，将外部标签文字颜色调整为统一的灰色。
- 同时，考虑到某些场景下扇块接近，文字和线条都灰色时用户关联识别差，所以连接线条颜色依旧保持为色板颜色。</md-alert>
:::
 
  
**漏斗图 FunnelChart ｜流程转化**

**定义：**

  形似漏斗，用于单向流程环节间中数据指标的转化分析。漏斗图可以通过在垂直或水平方向上的每一层的大小差异，反映出具流程节点之间的变化情况（有逻辑上的顺序关系）。

  **使用场景：**

  适用：阶段/流程转化，分类数明确

  不适用：没有逻辑顺序的数据对比或分类过多（超过 12 条数据）

  **色板使用：**

  默认使用「顺序色板」

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 35%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**基础漏斗（梯形）**<br>Basic</md-td>
      <md-td>倒梯形面积表示分类与上一个分类间的差异，漏斗从上到下。</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f1ce0f6f3d0b1eccda631c41b58ef828_DswjzklWDy.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
    <md-tr style="vertical-align: top;">
      <md-td>**转化漏斗（矩形）**<br>Conversion</md-td>
      <md-td>通过弧度大小对比各种分类占比情况。<br>**优势：对比基础漏斗，展示逐层的转化率数据**</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/28d075bd124f65405ed7b3c0d5a0064b_fuHh5qMg6B.png?height=1250&lazyload=true&width=2560) </md-td>
     </md-tr>
</md-tbody>
</md-table>
:::    

  
**散点图 ScatterChart ｜分布**

**定义：**
  
将所有数据以点的形式展现在直角坐标系上，用来显示推测变量之间相关性。如果存在相关性，那么大部分数据点会相对密集并以某种趋势呈现。
散点图经常与回归线（最准确贯穿所有点线）结合使用。

  **使用场景：**
X 轴、Y 轴都对应数据

  适用：数据量大，看分布规律

  不适用：数据量少（结果会存在偶然性）

  **色板使用：**

  默认使用「分类色板」

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 35%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**基础**<br>Basic</md-td>
      <md-td>所有数据通过点平铺在坐标系中，两个连续字段分别映射到 X 轴、Y 轴<br>**优势：展示数据间的关联关系**<br><br>数据示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9706d236b3108c07574fac7b89cdb39a_6qr7rfntrU.png?height=566&lazyload=true&maxWidth=100&width=312)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/60ca123d57aa8b88eeef323d947c2c67_xMwths5Olo.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
   
</md-tbody>
</md-table>
:::    

  
**雷达图 RadarChart ｜比较**

**定义：**
  
展示多维度（4 个以上）的数据，每个维度数据分别对应一个相同圆心的坐标轴，将坐标轴上的点连接起来形成雷达图，多用于产品性能对比。

  **使用场景：**

  适用：多个维度、数据对比

  不适用：维度过多

  **色板使用：**

  默认使用「顺序色板」

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 35%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**基础**<br>Basic</md-td>
      <md-td>以圆心为坐标轴，展示多个维度的数据、通过连线进行对比<br>**优势：直观展示多维数据集**<br><br>数据示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/61b49dda63beaa9528067cfe072e609d_xLLaeDMqqd.png?height=143&lazyload=true&maxWidth=200&width=410) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/af57e6aebc73c03885a73dd0f5a91134_iQS7q7HcFO.png?height=1250&lazyload=true&width=2560)</md-td>
     </md-tr>
   
</md-tbody>
</md-table>
:::      

  
**面积图 AreaChart｜趋势**

**定义：**

  在折线图基础上，通过透明颜色、阴影等方式强调轴和线之间的区域（也叫区域图）。
折线所有类型都支持面积图，（基础面积图）图例个数不超过 3 个，通常用在股票、收益对比。

  **使用场景：**

  适用：时间维度变化、多组值趋势分析

  不适用：不同分类间的数据比较

  **色板使用：**

  默认使用「顺序色板」

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">  </md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 50%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**基础**（折线、曲线、阶梯）<br>Basic</md-td>
      <md-td>所有数据都从相同零轴开始。<br>**优势：直观展示趋势数据**<br><br>数据示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3b8d954df9467f8cb9179517a2b5cb17_aXhtvaYd01.png?height=96&lazyload=true&maxWidth=200&width=288)                       </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2ba884ec5801275e2490d6cde8e5a55c_Jo4fHRUog8.png?height=1250&lazyload=true&width=2560)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/497c49aacd865f485dc358cdbebab93a_VVrokxBo0H.png?height=1250&lazyload=true&width=2560) </md-td>
     </md-tr>
   <md-tr style="vertical-align: top;">
      <md-td>**堆叠**</md-td>
      <md-td>每个数据集起点不同，基于前一个数据集值为起点。<br>**优势：不会出现数据序列遮挡，并且可以展示总量分量**<br><br>数据示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b4ec8ba127d43ae4890699ad62c677e5_4KwKgnGOnv.png?height=237&lazyload=true&maxWidth=200&width=302) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae28c481ab759fc4c6294055ad4723cd_7PCgTlI3pD.png?height=1250&lazyload=true&width=2560) </md-td>
     </md-tr>
</md-tbody>
</md-table>
:::       

  
**组合图 CombineChart**

**定义：**

  顾名思义，使用多种图表组合更全面的展示数据多个方面。最常见的是柱状&折线图表组合、折线&阶梯图表、散点图&回归线组合。
组合图中常因 Y 轴指标不同，使用左右双 Y 轴。

  **使用场景：**

  适用：多个角度数据展示、分析

  不适用：单一分类数据、图表类型过多，信息过载

  **色板使用：**

  基于图表类型选择

  **类型说明：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">使用场景</md-th>
      <md-th style="width: 50%;">示例</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr style="vertical-align: top;">
      <md-td>**折柱混合图**</md-td>
      <md-td>柱状图和折线图组合使用，（柱往往代表具体数值，折线代表占比/比例）<br>**优势：直观展示数据分布和趋势**<br><br>数据示例：<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1b33af3d885877a88c76f2e59e887840_4QsSmj5RQm.png?height=237&lazyload=true&width=212) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/731d9a368d8120455acb5923a40f4f84_Fg24hsLV1g.png?height=1250&lazyload=true&width=2560) </md-td>
     </md-tr>
</md-tbody>
</md-table>
:::       
  
  

## 图表适配

### 元素适配

**元素信息优先级**

在有限的图表容器空间中，应将非必要元素转化或隐藏，以保留重要的图形元素并适应空间。建议的优先级顺序为：图形元素＞图例＞坐标轴＞网格线。（标题和操作栏遵循响应式规则）
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ad98a3403c120441a3e50b92a9b2e6e1_UzHfX4gkC4.png?height=662&lazyload=true&width=2560)
  
**坐标轴适配**

图表容器变化时，坐标标签可能过长，导致重叠。省略标签会损失信息。需要根据具体情况，选择合适的处理规则：
- 文本标签常见处理方式：省略、换行、旋转（旋转场景下标签难以阅读，请小心使用）。
- 连续数据场景处理方式：抽样、转化等。
- 迷你图处理方式：隐藏（迷你图表以微型的形式，简洁的呈现一系列值的趋势）

 ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9869b301b94572ad6047ae901846293f_1fZfm0MP4y.png?height=498&lazyload=true&width=2560)

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a80fc4d556399634ad6ade10339f70be_uEPRi2KOXt.png?height=1250&lazyload=true&width=2560)
 横轴抽样、纵轴转化（基于数据场景选择合适的轴线、标签个数，不要影响用户阅读数据）
  
  <br> 
旋转场景易出现标签高度超过图表容器空间的场景，信息展示不合理。所以我们建议旋转场景下，高度超出图表容器空间 30% 时开始自动省略。
<br>
  
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8060e9a0855dafe200248ac108408bfe_RYSNYhrZt1.png?height=1250&lazyload=true&width=2560)
  
**Label 轴标签**

- 图表数值 Label 个数过多：隐藏 Label 显示，通过 Tooltips 展示

:::html
<md-table>
  <md-tbody>
     <md-tr> 
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a638ff84f8d4d0fbdbd042a7f00176e_r8PPGdGt3X.png?height=1250&lazyload=true&width=2560)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_Dgu9Ne8PNx.png?height=20&lazyload=true&width=800) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cea0805e88a6e8c21c6ea7208b49b570_3Nk96AHMiK.png?height=1250&lazyload=true&width=2560)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_S84zJeFjo4.png?height=20&lazyload=true&width=800) </md-td>
  </md-tr>
  <md-tr>
      <md-td>**正确**：<br>隐藏 Label 显示，hover 显示对应内容。</md-td>
      <md-td>**避免**：<br>Label 个数过多，展示出来影响用户信息获取效率。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**提示说明卡片**

在桌面端图表中，提示说明通常是通过鼠标悬停时触发的气泡卡片来呈现的。但在移动端，为了保证信息展示的效果和内容的稳定性，我们建议将提示说明卡片固定在图表上方，并在用户手指按压触摸到图表时显示相应的数值（非桌面端 hover）。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 75%;">桌面端</md-th>
      <md-th style="width: 25%;">移动端</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/549b7c4d5be1e32caa5358ecc0fd6769_ax6lyTDy4G.png?height=848&lazyload=true&width=2880)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/81e9e65fec095c4ab7357627df59a89e_uufIyKBrIB.png?height=874&lazyload=true&width=750)</md-td>
</md-tbody>
</md-table>
:::

 
  
### 极值适配

**分组聚合空值场景**

以柱状图分组场景为例，数据为空值时自适应逻辑，调整图表对齐，保障数据获取效率。

:::html
<md-table>
  <md-tbody>
     <md-tr> 
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e6271bdcfe2eeb2b1b79a97ccf9fe6a9_DUOSNd4dLy.png?height=820&lazyload=true&width=1440)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_gbqIbvCgRB.png?height=20&lazyload=true&width=800) </md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a874b37a08c67e874a07cb482998ea8f_c2uKHeEVcs.png?height=820&lazyload=true&width=1440)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_s2Bi8jIDzR.png?height=20&lazyload=true&width=800) </md-td>
  </md-tr>
  <md-tr>
      <md-td>**正确：** <br>对数据为空的项进行处理，采用分组内居中形式，保障图表规整。</md-td>
      <md-td> **避免：** <br>数据为空无处理，分组各项延续有值时形式，图表混乱。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

**缩略轴增加信息展示区分**

在数据过多时，可增加取值范围的缩略轴组件。这样既能限制数据的展示范围，实现数据量的可控显示，又能突出数据信息的区分。
  
:::html
<md-table>
  <md-tbody>
     <md-tr> 
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3857c92a3cdef511b21da5d0d94414be_zZS4uxoJl2.png?height=640&lazyload=true&width=1226)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f280964f6dabb16bf6ea6801799276a3_TVFODnJO0U.png?height=20&lazyload=true&width=800)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ec2d39ef73ad6890451edac26a590ef2_2LXDpm2O4c.png?height=554&lazyload=true&width=1226)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d576ae0cad45457a2c92e8b32194543_TI5HvMXwCq.png?height=20&lazyload=true&width=800) </md-td>
  </md-tr>
  <md-tr>
      <md-td> **正确：** <br>增加缩略轴，数据显示可控，突出数据查看/对比</md-td>
      <md-td>**避免：** <br>有限空间下全量展示，信息获取效率低，底部标签重叠</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::  
