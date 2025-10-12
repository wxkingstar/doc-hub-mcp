<!--
title: 功能配置
id: 7472308462216724508
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-feature-config
updatedAt: 1739789357000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-feature-config
-->
# 功能配置

你可以通过组件功能配置接口来操作组件的表现。


## 使用方式
```js
// 通过render方法渲染组件会返回组件实例
myComponent = window.webComponent.render('DocsComponent', config, node)

// 通过setFeatureConfig方法修改组件的配置属性
myComponent.config.setFeatureConfig({
  // 详细参数请参考 FEATURE & Options
  HEADER: {
    enable: false, // 隐藏头部
  },
});
```

## FEATURE & Options

:::html
<md-dt-table>
  <md-dt-thead>
    <md-dt-tr>
      <md-dt-th>名称</md-dt-th>
      <md-dt-th>类型</md-dt-th>
      <md-dt-th>说明</md-dt-th>
      <md-dt-th>支持移动端</md-dt-th>
    </md-dt-tr>
  </md-dt-thead>
  
  <md-dt-tbody>
	<md-dt-tr level="0">
      <md-dt-td>LIKE</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>点赞</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
	</md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示点赞部分</md-dt-td>
      <md-dt-td> </md-dt-td>
	</md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>IMAGE</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>正文图片</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>viewer</md-dt-td>
      <md-dt-td>- inner
- outer</md-dt-td>
      <md-dt-td>预览方式</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>needBlob</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>预览方式为outer时 是否在onImageView事件中返回blob参数</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>maxWidth</md-dt-td>
      <md-dt-td>number</md-dt-td>
      <md-dt-td>缩放图片时最大宽度</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>SHARE</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>分享</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否开启分享</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>border</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否展示分享权限按钮的border</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>text</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>分享按钮文本</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>visibleConfig</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>分享设置</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>invite</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示邀请</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>shareLink</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示分享链接</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>shareMethod</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示分享方式</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>MODAL</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>模态窗</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>outerMask</md-dt-td>
      <md-dt-td>boolean | object</md-dt-td>
      <md-dt-td>有模态窗时， 组件外是否有遮罩</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>zIndex</md-dt-td>
      <md-dt-td>number</md-dt-td>
      <md-dt-td>组件外遮罩层级</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>HEADER</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>头部</md-dt-td>
      <md-dt-td><md-tag color="orange">部分支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示头部</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>color</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>背景颜色</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>bottomLine</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>header底下的线是否存在</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>height</md-dt-td>
      <md-dt-td>number</md-dt-td>
      <md-dt-td>header高度</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>FOOTER</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>底部</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示底部</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>CONTENT</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>文档内容</md-dt-td>
      <md-dt-td><md-tag color="orange">部分支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>mode</md-dt-td>
      <md-dt-td>- default
- wide(全宽)</md-dt-td>
      <md-dt-td>页宽设置</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>readonly</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否只读模式</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>titleVisible</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示标题</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>padding</md-dt-td>
      <md-dt-td>array</md-dt-td>
      <md-dt-td>文档内边距，例：[10, 0, 10, 0] 为上下增加 10 px 边距</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>maxWidth</md-dt-td>
      <md-dt-td>number</md-dt-td>
      <md-dt-td>内容最大宽度</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>hyperlinkHandler</md-dt-td>
      <md-dt-td>- inner
- outer</md-dt-td>
      <md-dt-td>打开链接方式</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>background</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>背景颜色</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>hideScrollbar</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否隐藏滚动条</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>unscrollable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>云文档组件是否允许滚动</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>borderRadius</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>中间部分是否存在圆角</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>borderRadiusColor</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>中间部分圆角背后的背景颜色</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>toolbox</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>block工具栏</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否开启划词选中工具栏</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>COMMENT</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>评论</md-dt-td>
      <md-dt-td><md-tag color="orange">部分支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>partial</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>局部评论</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>open</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否展开局部评论侧栏 只在初始化设置有效</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>global</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>全文评论</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>SIDEBAR</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>右侧边栏(doc1.0生效)</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>borderSide</md-dt-td>
      <md-dt-td>array</md-dt-td>
      <md-dt-td>侧边栏边框显隐，例：[true, true, false, false] 上、右侧有边框</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>DIRECTORY</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>目录</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>pin</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否展开 只在初始化设置有效</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="0">
      <md-dt-td>MORE_MENU</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>更多菜单</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>items</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>配置</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>findAndReplaceEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示查找替换</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>applyEditPermissionEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示申请编辑权限入口</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>makeCopyEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示创建副本</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>exportEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示导出</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>documentInfoEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示文档详情</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>editHistoryEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示编辑历史</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>commentHistoryEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示评论历史</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>translateEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示翻译</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>printEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示打印</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>deleteEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示删除</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>miniAppEnable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示小组件</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>FULLSCREEN</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>全屏</md-dt-td>
      <md-dt-td><md-tag color="green">支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示全屏按钮</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
    
    <md-dt-tr level="0">
      <md-dt-td>COLLABORATOR</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>协作者列表</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否显示</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="0">
      <md-dt-td>TABS</md-dt-td>
      <md-dt-td>object</md-dt-td>
      <md-dt-td>sheet表格</md-dt-td>
      <md-dt-td><md-tag color="red">不支持</md-tag></md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>enable</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>sheet表格头是否隐藏</md-dt-td>
      <md-dt-td> </md-dt-td>
    </md-dt-tr>
  </md-dt-tbody>
</md-dt-table>
:::

