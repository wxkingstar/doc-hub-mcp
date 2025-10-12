<!--
title: 客服技能及运算符
id: 6934601802344480769
fullPath: /ukTMukTMukTM/ucDOyYjL3gjM24yN4IjN/operator-options
updatedAt: 1672022662000
source: https://open.feishu.cn/document/server-docs/helpdesk-v1/agent-function/agent_skill_rule/operator-options
-->
# 客服技能及运算符
**技能列表**<br> 
|value|名称|value说明|
|--|--|--|
|3|城市|城市名称
|9|来源|工单来源, 0: 客服端 1: 服务端
|10|语言|zh_cn: 中文 en_us: 英文 ja_jp: 日文
|11|姓名/邮箱|用户id
|12|部门|部门id
|14|中文知识库分类|知识库分类id
|15|英文知识库分类|知识库分类id
|16|日文知识库分类|知识库分类id
|17|用户级别|级别数值


**运算符列表**<br> 
|value|名称|说明|
|--|--|--|
|2|大于等于|>=
|3|小于等于|<=
|5|是右侧任一|如果文本是数组的成员，返回true；举例：“abc”是右侧任一[“abc”，“xyz”]？返回true。
|6|不是右侧任一|与5相反。
|7|不是右侧任一|如果数组里任一一个元素都不是右侧数组的成员，返回true。举例：[“ abc”]不是右侧任一[“ cde”，“ xyz”]？返回true。
|8|是右侧任一|如果数组里某一个元素是右侧数组的成员，返回true。举例：[“ abc”，“ cde”]是右侧任一[“ abc”，“ xyz”]？返回true。

注意事项：运算符5/6适用于需要手动输入内容的情况，例如技能“城市”。运算符7/8适用于需要选择下拉列表的情况，例如技能“中文知识库分类”。