<!--
title: 表格单元格引用公式字符串展示方式变更
id: 7424404304817586204
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/display-method-of-cell-reference-formula-string
updatedAt: 1728633449000
source: https://open.feishu.cn/document/platform-notices/breaking-change/display-method-of-cell-reference-formula-string
-->
# 表格公式单元格引用展示方式变更
### 变更事项
为保障产品体验的一致性，提升表格打开流畅性，我们将统一公式展示方式，对接口返回的公式字符串格式进行变更。<br> <br> 
影响接口：
- [读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)
- [读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)
- [获取富文本内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-value/batch_get)（该接口内测中） <br> <br> 

是否跟随客户端版本：不跟版<br> 
预计生效时间：2024-10-28<br> 

### 潜在影响
如果在读取单元格公式后，需要对公式字符串进行解析和判断等操作，请尽快确认更改后的公式字符串格式是否能够满足要求。影响表中的公式包含对**单个单元格**的引用，并且引用字符串为`起始单元格:结束单元格`的形式的公式。变更后，它将被合并为`起始单元格`的形式。例如，变更前读取的公式字符串为“=SUM(A1:A1)”，变更后读取的字符串为“=SUM(A1)”。具体变更逻辑如下：
- 使用[读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)或[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)
    - 新写入的公式，且公式满足上诉条件的公式，读取结果都会发生变更。
    - 如果编辑的区域被公式直接或间接引用，则该路径上满足上诉条件的公式读取结果都会发生变更。
- 使用[获取富文本内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-value/batch_get)接口（该接口内测中），且公式满足上诉条件的公式，读取结果都会发生变更。



### 解决方案
- 如果你对读取到的公式字符串没有任何解析、判断逻辑，则无需关注。
- 如果你对读取到的公式字符串进行了解析或判断，则需要对变更后的字符串格式进行适配。你可以使用正则表达式、增加判断条件等的方式，**同时兼容变更前后**的公式字符串格式。<br>

若你未能及时确认并调整，变更发生后，你的处理逻辑可能发生异常。<br>
我们预计在 **2024年10月28日** 完成升级，请于 **2024年10月28日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请点击右下角，联系技术支持。