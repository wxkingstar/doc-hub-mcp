---
title: "t"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/api/t
---
最后更新于 2023-07-26

# t
翻译函数。用于设置多语，详情请参考[多维表格自动化插件开发指南](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/base-automation-extension-development-guide)中的国际化。<br>本函数也可以设置表单的帮助、提示文案。

## 输入
```
t(key, param)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
key | string | 是 | 国际化资源中的某种语言的key，详情参考[多维表格自动化插件开发指南](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/base-automation-extension-development-guide)。
param | ```js  
{  
    [key: string]: TLink | TIcon | THighlight;  
} | 否 | 控制文字的链接，图标，高亮。  
         只能用于basekit.addAction入参的description字段、basekit.addAction字段的formItems字段的help，tooltip属性。

```js
type TLink = {
    type: 'link';
    value: string;
    link: string;
};
type TIcon = {
    type: 'icon';
    value?: string;
    /** URL that the hyperlink points to */
    link?: string;
    /** URL of the icon  */
    src: string;
};
type THighlight = {
    type: 'highlight';
    value: string;
    color: string;
};
```

## 输出
国际化的字符串或对象，详情请参考[多维表格自动化插件开发指南](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/base-automation-extension-development-guide)中的国际化。

## 示例代码
```js
import { basekit, Component, ParamType, getBasekitUrl, t } from '@lark-opdev/block-basekit-server-api';

basekit.setI18n({
  messages: {
    'zh-CN': {
      description: "查看{doc}",
      usage: '说明文档',
      help: '这是图标{icon}',
      tooltip_111: '这是{highlight}',
    },
  }
});

basekit.addAction({
  description: t('description', {
    // 将文案中 doc 变量替换成可跳转链接
    doc: {
      type: 'link',
      value: t('usage'),
      link: 'https://your.doc.com',
    },
  }),
  formItems: [
    {
      itemId: 'text',
      label: '测试',
      help: t('help', {
        // 将文案中 icon 变量替换成可跳转的图标
        icon: {
          type: 'icon',
          src: 'https://your.img.com',
          link: 'https://your.link.com'
        }
      }),
      tooltip: t('tooltip_111', {
        // 将文案中的 highlight 变量替换成高亮格式文案
        highlight: {
          type: 'highlight',
          value: '高亮文案',
          color: 'red',
        }
      }),
      required: true,
      component: Component.Input,
      componentProps: {
        mode: 'textarea',
        placeholder: '测试',
      }
    },
    //....
```
