<!--
title: 主题简介
id: 7545367804831596546
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction
updatedAt: 1758627855000
source: https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction
-->
# 画板主题与颜色系统

画板提供了一套强大的主题系统，旨在帮助您轻松创建美观、风格统一的图形。主题是作用于整个画板的全局配置，切换主题会改变所有元素的配色，但不能为单个元素设置独立主题。
[主题演示](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b7f1021e6c9e85e0459eaea1d06ab556_nV6dkSBR0C.gif)

## 基于 Code 的颜色映射
为了实现主题切换，画板的颜色系统不直接存储具体的颜色值（如 `#ffffff`），而是使用一个抽象的 **`颜色 Code`**（一个整数）来指定颜色。在不同主题下，为颜色 code 值配置了不同的颜色。

**工作原理**：code 值会根据主题风格配置不同的颜色。在切换主题时会根据配置颜色值呈现不同的颜色，达到颜色跟随主题切换目的。


##  主题类型
画板内置了多种预设主题，以适应不同场景：
*   经典主题
*   简约灰主题
*   复古主题
*   炫彩主题
*   简约蓝主题
*   默认主题

## 颜色 Code 详解
颜色 `Code` 分为四种类型：**填充色、描边色、文字颜色、文字背景色**。

大部分图形共用一套通用的颜色 Code 表。然而，为达到最佳视觉效果，部分特殊图形（如便签、分区）拥有自己专属的颜色 Code 表。

###  填充颜色
####  通用填充颜色
适用于除特殊图形外的所有图形。
*   **Code 取值范围**: `1` - `17`
*   **颜色表 (以“默认主题”为例)**:
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th>code</md-th>
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr>
    </md-thead>
    <md-tbody>
     <md-tr>
      <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
      <md-td>白色</md-td>
      <md-td>#ffffff</md-td>
    </md-tr>
    <md-tr>
      <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#eae2fe; border:1px solid #eae2fe;"></span></md-td>
      <md-td>浅紫色</md-td>
      <md-td>#eae2fe</md-td>
    </md-tr>
    <md-tr>
      <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f0f4fc; border:1px solid #f0f4fc;"></span></md-td>
      <md-td>浅蓝色</md-td>
      <md-td>#f0f4fc</md-td>
    </md-tr>
    <md-tr>
      <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d6dcf3; border:1px solid #d6dcf3;"></span></md-td>
      <md-td>浅靛青色</md-td>
      <md-td>#d6dcf3</md-td>
    </md-tr>
    <md-tr>
      <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fef1ce; border:1px solid #fef1ce;"></span></md-td>
      <md-td>浅黄色</md-td>
      <md-td>#fef1ce</md-td>
    </md-tr>
    <md-tr>
      <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fee3e2; border:1px solid #fee3e2;"></span></md-td>
      <md-td>浅红色</md-td>
      <md-td>#fee3e2</md-td>
    </md-tr>
    <md-tr>
      <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
      <md-td>黑色</md-td>
      <md-td>#000000</md-td>
    </md-tr>
      <md-tr>
      <md-td>8</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f5f5f5; border:1px solid #f5f5f5;"></span></md-td>
      <md-td>浅灰色</md-td>
      <md-td>#f5f5f5</md-td>
    </md-tr>
    <md-tr>
      <md-td>9</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8569cb; border:1px solid #8569cb;"></span></md-td>
      <md-td>紫色</md-td>
      <md-td>#8569cb</md-td>
    </md-tr>
      <md-tr>
      <md-td>10</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5178c6; border:1px solid #5178c6;"></span></md-td>
      <md-td>蓝色</md-td>
      <md-td>#5178c6</md-td>
    </md-tr>
      <md-tr>
      <md-td>11</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5263a5; border:1px solid #5263a5;"></span></md-td>
      <md-td>靛青色</md-td>
      <md-td>#5263a5</md-td>
    </md-tr> 
      <md-tr>
      <md-td>12</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d4b45b; border:1px solid #d4b45b;"></span></md-td>
      <md-td>黄色</md-td>
      <md-td>#d4b45b</md-td>
    </md-tr> 
      <md-tr>
      <md-td>13</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d25d5a; border:1px solid #d25d5a;"></span></md-td>
      <md-td>红色</md-td>
      <md-td>#d25d5a</md-td>
    </md-tr>
    <md-tr>
      <md-td>14</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#646a73; border:1px solid #646a73;"></span></md-td>
      <md-td>灰色</md-td>
      <md-td>#646a73</md-td>
    </md-tr>
    <md-tr>
      <md-td>15</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#bbbfc4; border:1px solid #bbbfc4;"></span></md-td>
      <md-td>中灰色</md-td>
      <md-td>#bbbfc4</md-td>
    </md-tr>
    <md-tr>
      <md-td>16</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dff5e5; border:1px solid #dff5e5;"></span></md-td>
      <md-td>浅绿色</md-td>
      <md-td>#dff5e5</md-td>
    </md-tr>
    <md-tr>
      <md-td>17</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#509863; border:1px solid #509863;"></span></md-td>
      <md-td>绿色</md-td>
      <md-td>#509863</md-td>
    </md-tr>
  </md-body>
</md-table>
:::

#### **特殊图形填充色**
*   **分区 (Section)**
    *   **Code 取值范围**: `1` - `8`
    *   **颜色表 (以“默认主题”为例)**:


:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>   
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody>
    <md-tr>
	  <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
      <md-td>白色</md-td>
	  <md-td>#ffffff</md-td>
	</md-tr>
	<md-tr>
	  <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f5f6f7; border:1px solid #f5f6f7;"></span></md-td>
	  <md-td>灰色</md-td>
	  <md-td>#f5f6f7</md-td>
	</md-tr>
	<md-tr>
	  <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f5f1fd; border:1px solid #f5f1fd;"></span></md-td>
	  <md-td>紫色</md-td>
	  <md-td>#f5f1fd</md-td>
	</md-tr>
	<md-tr>
	  <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f3f5fc; border:1px solid #f3f5fc;"></span></md-td>
	  <md-td>蓝色</md-td>
	  <md-td>#f3f5fc</md-td>
	</md-tr>
	<md-tr>
	  <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f1f9f2; border:1px solid #f1f9f2;"></span></md-td>
	  <md-td>绿色</md-td>
	  <md-td>#f1f9f2</md-td>
	</md-tr>
	<md-tr>
	  <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fffcf2; border:1px solid #fffcf2;"></span></md-td>
	  <md-td>黄色</md-td>
	  <md-td>#fffcf2</md-td>
	</md-tr>
	<md-tr>
	  <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fff6ee; border:1px solid #fff6ee;"></span></md-td>
	  <md-td>橙色</md-td>
	  <md-td>#fff6ee</md-td>
	</md-tr>
	<md-tr>
	  <md-td>8</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fff3f0; border:1px solid #fff3f0;"></span></md-td>
	  <md-td>红色</md-td>
	  <md-td>#fff3f0</md-td>
	</md-tr>
  </md-tbody>
</md-table> 
:::

*   **便签 (Sticky Note)**
    *   **Code 取值范围**: `0` - `8`
    *   **颜色表 (以“默认主题”为例)**:

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>  
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th> 
      <md-th>rgb</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody>
    <md-tr>
	  <md-td>0</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fef1ce; border:1px solid #fef1ce;"></span></md-td>
	  <md-td>黄色</md-td>
	  <md-td>#fef1ce</md-td>
	</md-tr>
	<md-tr>
	  <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f5d1a7; border:1px solid #f5d1a7;"></span></md-td>
	  <md-td>橙色</md-td>
	  <md-td>#f5d1a7</md-td>
	</md-tr>
	<md-tr>
	  <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dff5e5; border:1px solid #dff5e5;"></span></md-td>
	  <md-td>酸橙色</md-td>
	  <md-td>#dff5e5</md-td>
	</md-tr>
	<md-tr>
	  <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#cdf7cc; border:1px solid #cdf7cc;"></span></md-td>
	  <md-td>绿色</md-td>
	  <md-td>#cdf7cc</md-td>
	</md-tr>
	<md-tr>
	  <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#c9e8ef; border:1px solid #c9e8ef;"></span></md-td>
	  <md-td>蓝色</md-td>
	  <md-td>#c9e8ef</md-td>
	</md-tr>
	<md-tr>
	  <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d6dcf3; border:1px solid #d6dcf3;"></span></md-td>
	  <md-td>靛青色</md-td>
	  <md-td>#d6dcf3</md-td>
	</md-tr>
	<md-tr>
	  <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d3ccee; border:1px solid #d3ccee;"></span></md-td>
	  <md-td>紫色</md-td>
	  <md-td>#d3ccee</md-td>
	</md-tr>
	<md-tr>
	  <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f1c5e7; border:1px solid #f1c5e7;"></span></md-td>
	  <md-td>玫红色</md-td>
	  <md-td>#f1c5e7</md-td>
	</md-tr>
	<md-tr>
	  <md-td>8</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f6c8c8; border:1px solid #f6c8c8;"></span></md-td>
	  <md-td>红色</md-td>
	  <md-td>#f6c8c8</md-td>
	</md-tr>
  </md-tbody>
</md-table> 
:::

###  边框颜色
#### **通用边框颜色**
适用于除特殊图形外的所有图形。
*   **Code 取值范围**: `1` - `12`
*   **颜色表 (以“默认主题”为例)**:

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>   
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr> 
    </md-thead>
    <md-tbody>
    <md-tr> 
      <md-td>1</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
      <md-td>黑色</md-td>
      <md-td>#000000</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>2</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#bbbfc4; border:1px solid #bbbfc4;"></span></md-td>
      <md-td>灰色</md-td>
      <md-td>#bbbfc4</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>3</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#eff0f1; border:1px solid #eff0f1;"></span></md-td>
      <md-td>极浅灰色</md-td>
      <md-td>#eff0f1</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>4</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
      <md-td>白色</md-td>
      <md-td>#ffffff</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>5</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8569cb; border:1px solid #8569cb;"></span></md-td>
      <md-td>紫色</md-td>
      <md-td>#8569cb</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>6</md-td> 
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5178c6; border:1px solid #5178c6;"></span></md-td>
      <md-td>蓝色</md-td>
      <md-td>#5178c6</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>7</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5263a5; border:1px solid #5263a5;"></span></md-td>
      <md-td>靛青色</md-td>
      <md-td>#5263a5</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>8</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d4b45b; border:1px solid #d4b45b;"></span></md-td>
      <md-td>黄色</md-td>
      <md-td>#d4b45b</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>9</md-td> 
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d25d5a; border:1px solid #d25d5a;"></span></md-td>
      <md-td>红色</md-td>
      <md-td>#d25d5a</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>10</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#646a73; border:1px solid #646a73;"></span></md-td>
      <md-td>深灰色</md-td>
      <md-td>#646a73</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>11</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#509863; border:1px solid #509863;"></span></md-td>
      <md-td>绿色</md-td>
      <md-td>#509863</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>12</md-td>  
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dee0e3; border:1px solid #dee0e3;"></span></md-td>
      <md-td>浅灰色</md-td>
      <md-td>#dee0e3</md-td>
        </md-tr>
  </md-body>
</md-table>
:::

#### **特殊图形边框颜色**
*   **连线 (Connector)**
    *   **Code 取值范围**: `0` - `15`
    *   **颜色表 (以“默认主题”为例)**:

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>   
      <md-th>颜色预览</md-th>   
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody>
    <md-tr>
	  <md-td>0</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
	  <md-td>白色</md-td>
	  <md-td>#ffffff</md-td>
	</md-tr>
	<md-tr>
	  <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#eff0f1; border:1px solid #eff0f1;"></span></md-td>
	  <md-td>浅灰色</md-td>
	  <md-td>#eff0f1</md-td>
	</md-tr>
	<md-tr>
	  <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#eae2fe; border:1px solid #eae2fe;"></span></md-td>
	  <md-td>浅紫色</md-td>
	  <md-td>#eae2fe</md-td>
	</md-tr>
	<md-tr>
	  <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f0f4fc; border:1px solid #f0f4fc;"></span></md-td>
	  <md-td>浅蓝色</md-td>
	  <md-td>#f0f4fc</md-td>
	</md-tr>
	<md-tr>
	  <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d6dcf3; border:1px solid #d6dcf3;"></span></md-td>
	  <md-td>浅靛青色</md-td>
	  <md-td>#d6dcf3</md-td>
	</md-tr>
	<md-tr>
	  <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fef1ce; border:1px solid #fef1ce;"></span></md-td>
	  <md-td>浅黄色</md-td>
	  <md-td>#fef1ce</md-td>
	</md-tr>
	<md-tr>
	  <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#fee3e2; border:1px solid #fee3e2;"></span></md-td>
	  <md-td>浅红色</md-td>
	  <md-td>#fee3e2</md-td>
	</md-tr>
	<md-tr>
	  <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
	  <md-td>黑色</md-td>
	  <md-td>#000000</md-td>
	</md-tr>
	<md-tr>
	  <md-td>8</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#bbbfc4; border:1px solid #bbbfc4;"></span></md-td>
	  <md-td>灰色</md-td>
	  <md-td>#bbbfc4</md-td>
	</md-tr>
	<md-tr>
	  <md-td>9</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8569cb; border:1px solid #8569cb;"></span></md-td>
	  <md-td>紫色</md-td>
	  <md-td>#8569cb</md-td>
	</md-tr>
	<md-tr>
	  <md-td>10</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5178c6; border:1px solid #5178c6;"></span></md-td>
	  <md-td>蓝色</md-td>
	  <md-td>#5178c6</md-td>
	</md-tr>
	<md-tr>
	  <md-td>11</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5263a5; border:1px solid #5263a5;"></span></md-td>
	  <md-td>靛青色</md-td>
	  <md-td>#5263a5</md-td>
	</md-tr>
	<md-tr>
	  <md-td>12</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d4b45b; border:1px solid #d4b45b;"></span></md-td>
	  <md-td>黄色</md-td>
	  <md-td>#d4b45b</md-td>
	</md-tr>
	<md-tr>
	  <md-td>13</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d25d5a; border:1px solid #d25d5a;"></span></md-td>
	  <md-td>红色</md-td>
	  <md-td>#d25d5a</md-td>
	</md-tr>
	<md-tr>
	  <md-td>14</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dff5e5; border:1px solid #dff5e5;"></span></md-td>
	  <md-td>浅绿色</md-td>
	  <md-td>#dff5e5</md-td>
	</md-tr>
	<md-tr>
	  <md-td>15</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#509863; border:1px solid #509863;"></span></md-td>
	  <md-td>绿色</md-td>
	  <md-td>#509863</md-td>
	</md-tr>
  </md-tbody>
</md-table> 
:::

*   **SVG 图形 (SVG)**
    *   **Code 取值范围**: `0` - `11`
    *   **颜色表 (以“默认主题”为例)**:

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th> 
      <md-th>rgb</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody>
    <md-tr>
	  <md-td>0</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
	  <md-td>黑色</md-td>
	  <md-td>#000000</md-td>
	</md-tr>
	<md-tr>
	  <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
	  <md-td>白色</md-td>
	  <md-td>#ffffff</md-td>
	</md-tr>
	<md-tr>
	  <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8569cb; border:1px solid #8569cb;"></span></md-td>
	  <md-td>紫色</md-td>
	  <md-td>#8569cb</md-td>
	</md-tr>
	<md-tr>
	  <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5178c6; border:1px solid #5178c6;"></span></md-td>
	  <md-td>蓝色</md-td>
	  <md-td>#5178c6</md-td>
	</md-tr>
	<md-tr>
	  <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5263a5; border:1px solid #5263a5;"></span></md-td>
	  <md-td>靛青色</md-td>
	  <md-td>#5263a5</md-td>
	</md-tr>
	<md-tr>
	  <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d4b45b; border:1px solid #d4b45b;"></span></md-td>
	  <md-td>黄色</md-td>
	  <md-td>#d4b45b</md-td>
	</md-tr>
	<md-tr>
	  <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d25d5a; border:1px solid #d25d5a;"></span></md-td>
	  <md-td>红色</md-td>
	  <md-td>#d25d5a</md-td>
	</md-tr>
	<md-tr>
	  <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#bbbfc4; border:1px solid #bbbfc4;"></span></md-td>
	  <md-td>浅灰色</md-td>
	  <md-td>#bbbfc4</md-td>
	</md-tr>
	<md-tr>
	  <md-td>8</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#509863; border:1px solid #509863;"></span></md-td>
	  <md-td>绿色</md-td>
	  <md-td>#509863</md-td>
	</md-tr>
	<md-tr>
	  <md-td>9</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#646a73; border:1px solid #646a73;"></span></md-td>
	  <md-td>深灰色</md-td>
	  <md-td>#646a73</md-td>
	</md-tr>
	<md-tr>
	  <md-td>10</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dee0e3; border:1px solid #dee0e3;"></span></md-td>
	  <md-td>中灰色</md-td>
	  <md-td>#dee0e3</md-td>
	</md-tr>
	<md-tr>
	  <md-td>11</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#eff0f1; border:1px solid #eff0f1;"></span></md-td>
	  <md-td>浅灰色</md-td>
	  <md-td>#eff0f1</md-td>
	</md-tr>
  </md-tbody>
</md-table>
:::

*   **画笔图形 (Paint)**
    *   **Code 取值范围**: `0` - `8`
    *   **颜色表 (以“默认主题”为例)**:
    
    
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>  
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th> 
      <md-th>rgb</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody>
    <md-tr>
	  <md-td>0</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#2b2f36; border:1px solid #2b2f36;"></span></md-td>
	  <md-td>黑色</md-td>
	  <md-td>#2b2f36</md-td>
	</md-tr>
	<md-tr>
	  <md-td>1</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#646a73; border:1px solid #646a73;"></span></md-td>
	  <md-td>灰色</md-td>
	  <md-td>#646a73</md-td>
	</md-tr>
	<md-tr>
	  <md-td>2</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#bbbfc4; border:1px solid #bbbfc4;"></span></md-td>
	  <md-td>浅灰色</md-td>
	  <md-td>#bbbfc4</md-td>
	</md-tr>
	<md-tr>
	  <md-td>3</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#9f6ff1; border:1px solid #9f6ff1;"></span></md-td>
	  <md-td>紫色</md-td>
	  <md-td>#9f6ff1</md-td>
	</md-tr>
	<md-tr>
	  <md-td>4</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5083fb; border:1px solid #5083fb;"></span></md-td>
	  <md-td>蓝色</md-td>
	  <md-td>#5083fb</md-td>
	</md-tr>
	<md-tr>
	  <md-td>5</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#32a645; border:1px solid #32a645;"></span></md-td>
	  <md-td>绿色</md-td>
	  <md-td>#32a645</md-td>
	</md-tr>
	<md-tr>
	  <md-td>6</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffe928; border:1px solid #ffe928;"></span></md-td>
	  <md-td>黄色</md-td>
	  <md-td>#ffe928</md-td>
	</md-tr>
	<md-tr>
	  <md-td>7</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ed6d0c; border:1px solid #ed6d0c;"></span></md-td>
	  <md-td>橙色</md-td>
	  <md-td>#ed6d0c</md-td>
	</md-tr>
	<md-tr>
	  <md-td>8</md-td>
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f54a45; border:1px solid #f54a45;"></span></md-td>
	  <md-td>红色</md-td>
	  <md-td>#f54a45</md-td>
	</md-tr>
  </md-tbody>
</md-table>
:::

###  文字颜色
*   **文字颜色**
    *   **Code 取值范围**: `0` - `8`
    *   **颜色表 (以“默认主题”为例)**:

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th> 
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr> 
    </md-thead>
    <md-tbody>
      <md-tr> 
      <md-td>0</md-td>  
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#1f2329; border:1px solid #1f2329;"></span></md-td>
      <md-td>黑色</md-td>
      <md-td>#1f2329</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>1</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
      <md-td>白色</md-td>
      <md-td>#ffffff</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>2</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8569cb; border:1px solid #8569cb;"></span></md-td>
      <md-td>紫色</md-td>
      <md-td>#8569cb</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>3</md-td> 
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#5178c6; border:1px solid #5178c6;"></span></md-td>
      <md-td>蓝色</md-td>
      <md-td>#5178c6</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>4</md-td>   
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#509863; border:1px solid #509863;"></span></md-td>
      <md-td>绿色</md-td>
      <md-td>#509863</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>5</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d4b45b; border:1px solid #d4b45b;"></span></md-td>
      <md-td>黄色</md-td>
      <md-td>#d4b45b</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>6</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d25d5a; border:1px solid #d25d5a;"></span></md-td>
      <md-td>红色</md-td>
      <md-td>#d25d5a</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>7</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#8f959e; border:1px solid #8f959e;"></span></md-td>
      <md-td>灰色</md-td>
      <md-td>#8f959e</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>8</md-td>   
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#d48e5b; border:1px solid #d48e5b;"></span></md-td>
      <md-td>橙色</md-td>
      <md-td>#d48e5b</md-td>
    </md-tr> 
  </md-body>
</md-table>
:::
###  文字背景颜色
*   **文字背景颜色**
    *   **Code 取值范围**: `0` - `17`
    *   **颜色表 (以“默认主题”为例)**:
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>code</md-th>   
      <md-th>颜色预览</md-th>
      <md-th>颜色描述</md-th>
      <md-th>rgb</md-th>
    </md-tr> 
    </md-thead>
    <md-tbody>
      <md-tr> 
      <md-td>0</md-td> 
        <md-td>--</md-td>
      <md-td>无填充色</md-td>
      <md-td>--</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>1</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#ffffff; border:1px solid #ccc;"></span></md-td>
      <md-td>白色</md-td>
      <md-td>#ffffff</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>2</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#e0d9f2; border:1px solid #e0d9f2;"></span></md-td>
      <md-td>浅紫色</md-td>
      <md-td>#e0d9f2</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>3</md-td> 
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#c5d2ec; border:1px solid #c5d2ec;"></span></md-td>
      <md-td>浅蓝色</md-td>
      <md-td>#c5d2ec</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>4</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#abd3b6; border:1px solid #abd3b6;"></span></md-td>
      <md-td>浅绿色</md-td>
      <md-td>#abd3b6</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>5</md-td>  
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f3ebd3; border:1px solid #f3ebd3;"></span></md-td>
      <md-td>浅黄色</md-td>
      <md-td>#f3ebd3</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>6</md-td> 
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f4d8d7; border:1px solid #f4d8d7;"></span></md-td>
      <md-td>浅红色</md-td>
      <md-td>#f4d8d7</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>7</md-td>   
      <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
      <md-td>黑色</md-td>
      <md-td>#000000</md-td>
    </md-tr>
      <md-tr> 
      <md-td>8</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#dee0e3; border:1px solid #dee0e3;"></span></md-td>
      <md-td>中灰色</md-td>
      <md-td>#dee0e3</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>9</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#6541be; border:1px solid #6541be;"></span></md-td>
      <md-td>紫色</md-td>
      <md-td>#6541be</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>10</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#395fad; border:1px solid #395fad;"></span></md-td>
      <md-td>蓝色</md-td>
      <md-td>#395fad</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>11</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#3e754c; border:1px solid #3e754c;"></span></md-td>
      <md-td>绿色</md-td>
      <md-td>#3e754c</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>12</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f0da0f; border:1px solid #f0da0f;"></span></md-td>
      <md-td>黄色</md-td>
      <md-td>#f0da0f</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>13</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#c43936; border:1px solid #c43936;"></span></md-td>
      <md-td>红色</md-td>
      <md-td>#c43936</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>14</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f2f3f5; border:1px solid #f2f3f5;"></span></md-td>
      <md-td>浅灰色</md-td>
      <md-td>#f2f3f5</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>15</md-td> 
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#000000; border:1px solid #000000;"></span></md-td>
      <md-td>灰色</md-td>
      <md-td>#bbbfc4</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>16</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#f3e2d3; border:1px solid #f3e2d3;"></span></md-td>
      <md-td>浅橙色</md-td>
      <md-td>#f3e2d3</md-td>
    </md-tr> 
      <md-tr> 
      <md-td>17</md-td>
        <md-td><span style="display:inline-block; width:20px; height:20px; background-color:#c67134; border:1px solid #c67134;"></span></md-td>
      <md-td>橙色</md-td>
      <md-td>#c67134</md-td>
    </md-tr>
  </md-body>
</md-table>
:::
####  