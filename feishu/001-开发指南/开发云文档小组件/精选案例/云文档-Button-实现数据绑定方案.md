---
title: "云文档 Button 实现数据绑定方案"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/featured-case-studies/cloud-document-button-implements-data-binding-solution
---
最后更新于 2025-05-29

# 云文档 Button 实现数据绑定方案

外部客户业务系统在接入飞书云文档时，有这样一个诉求：在云文档内支持部分**行内文本**关联业务系统数据，并实现实时数据更新，例如：
> **BU811**的销售情况最近比较好，在**成都xxxx1店**做了投放实验。

在此案例中，客户希望每次该文档打开时，**产品** 和对应的 **门店** 数据均能从业务系统实时读取，业务人员无需定期更新对应的文档。

飞书云文档小组件是客户将云文档与业务系统绑定的一大利器，然而使用【正文小组件】绑定业务系统存在一个问题，即小组件设计上只支持独占一行，无法作为行内文本嵌入到正文里。
因此，对于此类场景，云文档提供了一种能够绑定业务数据和小组件的文本元素 Button 以实现该效果。如下图所示：

![20250529142720_rec_.gif](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/845b719afd94effff78c047792a95c43_y6ondEUW2q.gif?height=1178&lazyload=true&width=1760)

## 实现方案

### 插入 Button

Button 并不是一个 Block 类型，而是文本 Block 可内联的其中一类元素。
> 文本 Block 支持哪些元素可参考 [TextBlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/textblockdata/textblockdata)，例如：纯文本、@User、@Doc、公式...

首先要插入一个文本 Block，可以使用[Block.insertBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.insertBlock)或者[Block.appendBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.appendBlock)实现。

#### 数据结构

**Button**
| **字段名**    | **数据类型**    | **是否必填** | **描述**                                                                                                           |
| ---------- | ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| text       | string      | 是        | Button 的默认文本                                                                                                     |
| dataSource | object      | 否        | 绑定远端数据源                                                                                                          |
| ∟url       | string      | 是        | 数据源接口地址                                                                                                          |
| ∟extra     | string      | 否        | 保留字段，暂无意义                                                                                                        |
| actions    | Array       | 是        | 按钮绑定的操作                                                                                                          |
| ∟type      | string      | 是        | 参考下面ButtonActionType说明 |
| ∟value     | json-string | 否        | 部分 Button 类型需要                                                                                                   |
**ButtonActionType**
| **value** | **描述** |
| ------------- | ------ |
| OpenDocVerse  | 打开小组件  |
| OpenLink      | 打开超链接  |
| FollowPage    | 关注文档更新 |
| DuplicatePage | 创建副本   |
**ButtonActionValue**
| **字段名**     | **类型** | **所属action** | **是否必填**                  | **描述** |
| ----------- | ------ | ------------ | ------------------------- | ------ |
| blockTypeID | string | OpenDocVerse | action 为 OpenDocVerse 时必传 | 小组件名称  |

#### 绑定数据源

当你插入 Button 时，指定了 `dataSource` 字段，则可以绑定一个远端数据源。Button 在加载时，会对 `dataSource.url` 发起 **get** 请求。

要求该接口必须按以下格式返回：
| **字段名**        | **类型**  | **必须返回** | **描述**                            |
| -------------- | ------- | -------- | --------------------------------- |
| code           | number  | 是        | 0 表示请求成功，其它值则认为是请求失败              |
| data           | object  | 是        | 返回数据                              |
| ∟text          | string  | 是        | Button 文本，请求成功后，会用 text 替换现有的占位文本 |
| ∟textStyle     | object  | 否        | 文本样式                              |
| ∟color         | string  | 否        | 文本颜色                              |
| ∟background    | string  | 否        | 文本背景                              |
| ∟bold          | boolean | 否        | 是否加粗                              |
| ∟italic        | boolean | 否        | 是否斜体                              |
| ∟underline     | boolean | 否        | 是否添加下划线                           |
| ∟strikethrough | boolean | 否        | 是否添加删除线                           |

#### 代码示例

```js
import { BlockitClient } from 'doc-mini-app-client';
import { BlockType } from 'node_modules/@bdeefe/doc-mini-app-client/dist/types';
const docMiniApp = new BlockitClient().initAPI();
const docRef = await docMiniApp.getActiveDocumentRef();
const rootBlock = await docMiniApp.Document.getRootBlock(docRef);
const data = await docMiniApp.Block.appendBlock(rootBlock.ref, {
  type: BlockType.TEXT,
  data: {
      plain_text: '占位文本',
      text: {
          elements: [{
              button: {
                  text: '占位文本',
                  dataSource: {
                      // 业务后端接口地址
                      url: 'https://bytedance.larkoffice.com/api/datasource',
                      extra: ''
                  }
              }
          }]
      }
  }
});
```

示例中 /api/datasource 接口返回的数据如下：

```js
// GET: https://bytedance.larkoffice.com/api/datasource 
// Response:
{
    code: 0//状态码 0=请求成功
    data: {
        text: '成都宽窄巷子1店' //返回文本
        textStyle: {
            color: '#f00', //文字颜色
            background: '#fff', //文字背景
            bold: false, //加粗
            italic: false, //斜体
            underline: false, //下划线
            strikethrough: true //删除线
        }
    }
}
```

### Button 绑定小组件

实现 Button 数据绑定后，客户又提出另外一个诉求：
> 希望 `hover` 或者 `click` Button 时，能弹窗一个面板展示详细的信息。

要达到这个效果，可以利用 Button 的一个 Action：`OpenDocVerse`。它允许 Button 绑定一个指定的云文档小组件，在用户和 Button 交互时，弹出该小组件，从而实现客户需求。
唤起小组件时，如果想要传递相关参数给小组件，可以将参数补充在 actions 的 **value** 字段里。小组件里利用API `DocMiniApp.Events.onInlineComponentTriggerChange` 添加监听函数 。当 Button hover 事件触发时，监听函数即可接收到 value 值。

#### 代码示例

```js
import { BlockitClient } from 'doc-mini-app-client';
import { BlockType, ButtonActionType } from 'node_modules/@bdeefe/doc-mini-app-client/dist/types';
const docMiniApp = new BlockitClient().initAPI();
const docRef = await docMiniApp.getActiveDocumentRef();
const rootBlock = await docMiniApp.Document.getRootBlock(docRef);
const data = await docMiniApp.Block.appendBlock(rootBlock.ref, {
  type: BlockType.TEXT,
  data: {
      plain_text: '占位文本',
      text: {
          elements: [{
              button: {
                  text: '占位文本',
                  backgroundColor: 'rgb(225,234,255)',
                  dataSource: {
                      // 业务后端接口地址
                      url: 'https://bytedance.larkoffice.com/api/datasource',
                      extra: ''
                  },
                  // 新增以下代码
 actions : [{ 
  // 打开文档小组件
 type : ButtonActionType . OpenDocVerse , 
 value : JSON . stringify ({ 
  // 绑定对应的小组件
 blockTypeID :  'blk_xasdf'  , 
 }), 
 }] 
              },
              style: {}
          }]
      }
  }
});
```

### 控制小组件的显隐

```js

# 云文档小组件监听 Button hover 事件

class Component {
    useEffect(() => {
        DocMiniApp.Events.onInlineComponentTriggerChange(
            (event: InlineComponentTriggerChangeEvent) => {
                const { type, value } = event;
                if (type === 'enter') {
                    // 鼠标 hover 时，将小组件显示出来
                    DocMiniApp.Bridge.updateVisiable(true);
                } else if (type === 'leave') {
                    DocMiniApp.Bridge.updateVisiable(false);
                }
            }
        );
    }, []);
}
interface InlineComponentTriggerChange {
    type: InlineComponentTriggerType;
    rect: {
        x: number;
        y: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: number;
        height: number;
    };
    windowSize: {
        width: number;
        height: number;
    };
    value: any;
}
enum InlineComponentTriggerType {
    Enter = "enter",
    Leave = "leave",
    Click = "click",
    // 暂未支持
    Dblclick = "dblclick",
    // 暂未支持
    Longpress = "longpress"
}
```

## Q & A

### Q：小组件每次都重新加载需要如何处理？

**A**: 可以配置该小组件为后台保活状态。找到 app.json，添加 `isKeepAlive` 配置。
```js
{
  ...
  "appID": "cli_xxxxx",
  "blockTypeID": "blk_xxxxxx",
  "contributes": {
    "topbar": {
      ...
      "view": "index.html",
      "hideHeader": true,
      "isKeepAlive": true
    }
  }
}
```

### Q：如何实现在落光标的位置插入 Button？

**A：** 光标可以落在行首、行末、甚至是文字的中间，场景较多。尤其是落到文字中间时，Button 会把原有的文字分割成两部分。如何处理好这些场景，需要较多的代码逻辑。可以参考以下 demo：
```js
async function addButton() {
  const docRef = await DocMiniApp.getActiveDocumentRef();
  const selection = await DocMiniApp.Selection.getSelection(docRef);
  // 如果选区不在文本类 Block 上，则不处理
  if (selection?.[0]?.type !== 'text') {
    return;
  }
  const button = {
    button: {
      text: 'BA Button',
      backgroundColor: 'rgb(225,234,255)',
      dataSource: {
        url: `https://bytedance.feishu.cn/api/test?uniqueCode=BA000-1807001051995635713`,
        extra: '',
      },
      actions: [{
        type: 'OpenDocVerse',
        value: JSON.stringify({
          blockTypeID: 'xxxxx',
          id: 'BA000-1807001051995635713'
        })
      }]
    },
    style: {}
  };
  // 获取当前选区
  const { range } = selection[0].ref as any;
  const selectedBlocks = await DocMiniApp.Selection.getSelectedBlocks(docRef);
  const currentBlock = await DocMiniApp.Block.getBlock(selectedBlocks[0].ref);
  const { elements } = currentBlock.data.text;
  let totalIndex = 0;
  const newElements = [];
  let inserted = false;
  for (const item of elements) {
    if (!inserted && item.text_run) {
      const contentLength = item.text_run.content.length;
      const start = totalIndex;
      const end = totalIndex + contentLength;
      if (start <= range[0] && end >= range[0]) {
        // 拆分 text_run
        const splitPos = range[0] - start;
        newElements.push({
          text_run: {
            ...item.text_run,
            content: item.text_run.content.slice(0, splitPos)
          }
        });
        // 插入按钮
        newElements.push(button); 
        newElements.push({
          text_run: {
            ...item.text_run,
            content: item.text_run.content.slice(splitPos)
          }
        });
        inserted = true;
        totalIndex += splitPos + 1; // 按钮占1个长度
      } else {
        newElements.push(item);
        totalIndex += contentLength;
      }
    } else if (!inserted && totalIndex === range[0]) {
      // 在非文本元素前插入
      newElements.push(button);
      newElements.push(item);
      inserted = true;
      totalIndex += 2; // 按钮占1，原元素占1
    } else {
      newElements.push(item);
      totalIndex += item.text_run ? item.text_run.content.length : 1;
    }
  }
  // 处理在末尾插入的情况
  if (!inserted) {
    newElements.push(button);
  }
  await DocMiniApp.Block.updateBlock(currentBlock.ref, {
    text: {
      elements: newElements, // 使用新生成的元素数组
    }
  });
}
```

### Q：唤起小组件时，如何给小组件传递参数？

**A：** 唤起小组件时，如果想要传递相关参数给小组件，可以将参数补充在 button.actions 的 **value** 字段里。小组件内部监听`DocMiniApp.Events.onInlineComponentTriggerChange`事件的回调函数会接受到 value 值。
