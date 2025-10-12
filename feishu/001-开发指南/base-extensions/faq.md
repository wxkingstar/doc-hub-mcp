<!--
title: 常见问题
id: 7264506721373093889
fullPath: /uAjLw4CM/uYjL24iN/base-extensions/faq
updatedAt: 1736842229000
source: https://open.feishu.cn/document/base-extensions/faq
-->
# FAQ

### Q：如何添加前端 router

A: 不推荐使用基于 path 的 router，暂时多维表格的静态文件服务不提供 rewrite 能力，
推荐使用 hash router [React HashRouter](https://reactrouter.com/en/main/router-components/hash-router) 。
  

### Q：更新依赖后 VSCode 的类型提示不正常

A: 尝试重启 VSCode，或者删除 `node_modules` 目录后重新安装依赖。
  

### Q：如何修改启动调试时自动打开的文档

A: 修改插件目录下的 `block.json` 中的 `url` 属性。
  

### Q：如何修改本地调试时的小应用名称

A: 注意，线上小应用名称需要在开放平台开发者后台设置。
修改插件目录下的 `block.json` 中的 projectName 属性。
  

### Q：视图插件的页面托管域名是？

A: 在飞书品牌下页面托管域名如下：
:::html
<table cellspacing="0" cellpadding="14px" >
  <thead>
    <th>品牌</th>
    <th>插件域名</th>
    <th>插件宿主域名</th>
  </thead>
  <tr style="border-bottom: 1px solid #dee0e3;">
    <td>飞书</td>
    <td>https://*.feishupkg.com</td>
    <td>https://*.feishu.com</td>
  </tr>
</table>
:::