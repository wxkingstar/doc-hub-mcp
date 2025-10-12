---
title: "setI18n"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/api/seti18n
---
最后更新于 2023-08-01

# setI18n
国际化文案。需要结合t函数使用。

## 输入
```js
setI18n({
  defaultLocale: 'en-US',
  messages: {
      'zh-CN': zhCN,
      'en-US': enUS,
  },
})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
defaultLocale | string | 否 | 默认语言环境，格式为lng-REGION如zh-CN、en-US等。值必须为message中的某个key。
messages | {  
&nbsp;&nbsp;[lang:string]: {  
&nbsp;&nbsp;&nbsp;&nbsp;[key:string]: string,  
&nbsp;&nbsp;},  
} | 否 | 本地化的语言环境信息，lang的格式为lng-REGION，例如zh-CN、en-US。

## 示例代码
```js
import { basekit, t } from '@lark-opdev/block-basekit-server-api';

const zhCN = {
    source_text: "源文本",
    result: "转换结果",
};
const enUS = {
    source_text: "Source Text",
    result: "Conversion Result"
};

basekit.setI18n({
  defaultLocale: 'en-US',
  messages: {
      'zh-CN': zhCN,
      'en-US': enUS,
  },
});
basekit.addAction({
    formItems: [
        {
            label: t('source_text'),
            itemId: 'text',
            required: true,
            component: Component.Input,
            componentProps: {
              mode: 'textarea',
              placeholder: '请输入源文本或选择引用列',
            }
        },
    ],
    resultType: {
        type: ParamType.Object,
        properties: {
            text: {
                type: ParamType.String,
                label: t('result')，
            }，
        }，
    }，
});
export default basekit;
