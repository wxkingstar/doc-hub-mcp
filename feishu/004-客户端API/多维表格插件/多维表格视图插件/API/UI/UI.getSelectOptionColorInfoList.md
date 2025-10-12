---
title: "UI.getSelectOptionColorInfoList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/ui/ui_getselectoptioncolorinfolist
last_remote_update: 2023-09-15
last_remote_update_timestamp: 1694758503000
---
最后更新于 2023-09-15

# ui.getSelectOptionColorInfoList
返回单选/多选选项的配色方案，该配色方案会跟随当前主题变化

## 输出
Promise 对象数组：
```js
getSelectOptionColorInfoList(): Promise<ISelectOptionColor[]>;

interface ISelectOptionColor {
    /** 颜色方案id，可用范围为0 - 54 */
    id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54;
    /** 同css 16进制颜色值，选项的背景色
     * @example '#ff0000' 纯红色
     */
    bgColor: string;
    /** 同css 16进制颜色值，文字的颜色
     * @example '#ff0000' 纯红色
     */
    textColor: string;
    /** 同css 16进制颜色值，表格中删除选项时的x图标的颜色
     * @example '#ff0000' 纯红色
     */
    iconColor: string;
    /** 同css 16进制颜色值，表格中删除选项时的x图标hover时候的颜色
     * @example '#ff0000' 纯红色
     */
    iconAltColor: string;
}
type TableId = string;
type BlockId = TableId;

```
## 示例代码
### 调用示例

```js
const res = await bitable.ui.getSelectOptionColorInfoList();
```
