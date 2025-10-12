<!--
title: 数据结构
id: 7338460461824393217
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/data-structure
updatedAt: 1758627855000
source: https://open.feishu.cn/document/docs/board-v1/data-structure
-->
#  画板节点的数据结构
本文档主要说明画板中节点的数据结构。

## 节点类型
画板节点类型可分为容器类型与非容器类型，容器类型可作为父节点，在创建节点时可将节点挂载在容器类型下。
画板目前支持的节点类型有：
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>   
      <md-th>描述</md-th> 
      <md-th>是否为容器类型</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>composite_shape</md-td>  
      <md-td>基础图形</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>text_shape</md-td>  
      <md-td>文字图形</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>connector</md-td>  
      <md-td>连线</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>section</md-td>  
      <md-td>分区</md-td>
      <md-td>是</md-td>
    </md-tr>
    <md-tr> 
      <md-td>table</md-td>  
      <md-td>表格</md-td>
      <md-td>是</md-td>
    </md-tr>
    <md-tr> 
      <md-td>group</md-td>  
      <md-td>组合图形</md-td>
      <md-td>是</md-td>
    </md-tr>
     <md-tr> 
      <md-td>table_uml</md-td>  
      <md-td>类图</md-td>
      <md-td>否</md-td>
    </md-tr>
   <md-tr> 
      <md-td>table_er</md-td>  
      <md-td>实体关系图</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>sticky_note</md-td>  
      <md-td>便签</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>paint</md-td>  
      <md-td>画笔</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
    <md-td>image</md-td>  
      <md-td>图片</md-td>
      <md-td>否</md-td> 
     </md-tr> 
    <md-tr> 
      <md-td>svg</md-td>  
      <md-td>svg图形</md-td>
      <md-td>否</md-td>
    </md-tr>
     <md-tr> 
      <md-td>life_line</md-td>  
      <md-td>对象生命线</md-td>
      <md-td>是</md-td>
    </md-tr>
     <md-tr> 
      <md-td>activation</md-td>  
      <md-td>控制焦点</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>combined_fragment</md-td>  
      <md-td>组合片段</md-td>
      <md-td>否</md-td>
    </md-tr>
    <md-tr> 
      <md-td>mind_map</md-td>    
      <md-td>思维导图节点</md-td>
      <md-td>否</md-td>
    </md-tr>
  </md-tbody> 
</md-table>
:::

## 基础图形类型细分
基础图形中的子节点类型可以细分为以下具体形状：
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>   
      <md-th>描述</md-th> 
      <md-th>图示</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>round_rect</md-td>  
      <md-td>圆角矩形</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e89fe4d56c4622797fb87e6e0bc967e4_6QB3LXBKA3.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>round_rect2</md-td>  
      <md-td>全圆角矩形</md-td>
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9b2380734995c7864ece5bc38dfc504f_hpWOfrLP9n.png?height=56&lazyload=true&width=56)</md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>diamond</md-td>  
      <md-td>菱形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4abbe6d46931ec03a7451e1120fcc748_9iBv0pZ32z.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>rect</md-td>  
      <md-td>基础矩形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d01f30fce05b8a3d47e46598e8339d9b_99qYNc3pX6.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>ellipse</md-td>  
      <md-td>圆形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6f4b604fe9cdf05c993db9434c33158d_QOBgE2WUM1.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>cylinder</md-td>  
      <md-td>圆柱体</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f2882c6a8750c3b41f5e4223b9914da2_hGdaXz6vvR.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>step</md-td>  
      <md-td>步骤</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7b2bd10dabdd7b6865bbabc9934ec919_FWKOBSCnT7.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>step2</md-td>  
      <md-td>步骤2</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e83264fb4600d32b7b4c89b03b439696_KmLENhH3hK.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>parallelogram</md-td>  
      <md-td>平行四边形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5228bd4d11e4bbd9c820347234812511_3pPUVi164k.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>trapezoid</md-td>  
      <md-td>梯形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b5f80cf9f9edaa077e83ce83d0119f06_888lvZL50o.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>bubble</md-td>  
      <md-td>气泡</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/133bb9e448221a42bcd94a8d6109b88f_PwuVDwiOoL.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>rect_bubble</md-td>  
      <md-td>矩形气泡</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d8533da9a4a65e5cfbbeb3258da74e8c_JdRBRTBDfd.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>right_triangle</md-td>  
      <md-td>直角三角形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df87c55997c3fdcfb6982bf09d6fd6a7_oYUulBYYy7.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>triangle</md-td>  
      <md-td>三角形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae8fbe8c507e1ce8b2cc7ec1f6ebf3f6_VkoQ7Kj4f6.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>star</md-td>  
      <md-td>五角星</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d3e6816752b7eaec30e4510b564469b6_XTstffzFmP.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>hexagon</md-td>  
      <md-td>六边形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1be5b5e8d40fcafb61ab473d671a6f7f_zcPpy4uC4x.png?height=44&lazyload=true&width=51)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>pentagon</md-td>  
      <md-td>五边形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b9064c3bb4bfad130ddaf5aa2a60b4c0_5ZQABnougy.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>octagon</md-td>  
      <md-td>八边形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a494a503d7ecef27198472f7fdc716d_WDuCTeMiDK.png?height=56&lazyload=true&width=54)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>backward_arrow</md-td>  
      <md-td>反向箭头（左箭头）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/80039dbb3c64e6bdd68aa9df87d86c54_MAEfXZKNMs.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>forward_arrow</md-td>  
      <md-td>单向箭头</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/701cc15422164a77d87b83f624d4c71c_C5P2Bqbp9I.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>double_arrow</md-td>  
      <md-td>双向箭头</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ddde4f2fede9a2848074a455cd53378f_KkPINJ8dH8.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>cloud</md-td>  
      <md-td>云朵</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8af52c54054f64557634547cdeca39f1_c9YwQbm6pR.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
     <md-tr> 
      <md-td>brace_reverse</md-td>  
      <md-td>反向花括号（左括号）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/331086cec5cff6f1afa9dcac37b4f0db_hu2LqhlbIo.png?height=58&lazyload=true&width=58)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>brace</md-td>  
      <md-td>花括号</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9fd68bf5ff611f5ad3b73d122a709522_JsbhRuZ2jI.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>cross</md-td>  
      <md-td>十字形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/59aab2414b0b7e7dd158074a82593871_bdV4EuoSN7.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>circular_ring</md-td>  
      <md-td>圆环</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fef93dc4c240b9a8d90af1935f16497a_ab7koV7cKP.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>pie</md-td>  
      <md-td>扇形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0cdc9f720ce99bf257a836356b5cdd1c_qZiHC15QDj.png?height=62&lazyload=true&width=64)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>cube</md-td>  
      <md-td>立方体</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8bd434d3a0de73b50a0fc03e65b93bbb_yT5rboM17C.png?height=58&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_round_rect</md-td>  
      <md-td>流程图圆角矩形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/020e7158ddb9cbc7c158a5be7d240d38_CoFpKVPIWE.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_round_rect2</md-td>  
      <md-td>流程图全圆角矩形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e30440ce5b94627e4da714fad8524262_kMNvuYTV6z.png?height=38&lazyload=true&width=47)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_diamond</md-td>  
      <md-td>流程图判定</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a918c52f477cf4d603c52c0d78d2c97e_a9bOcxmYWn.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>document_shape</md-td>  
      <md-td>文档图形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f5bf7fcec25bd85c438d79dbebddbb8_u92Qz6x2QY.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_parallelogram</md-td>  
      <md-td>流程图数据</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/05fd068cbd572a5ed0c139274bb695e5_V3Njqte4q2.png?height=38&lazyload=true&width=50)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_cylinder</md-td>  
      <md-td>流程图数据库</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/576a1779a27254f3c3c8cf5e2ff64940_38zCSCpIVM.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>horiz_cylinder</md-td>  
      <md-td>水平方向圆柱体</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/276f1a03e661995b6d8ec97f69668986_g4KXt50PpF.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>predefined_process</md-td>  
      <md-td>预定义流程</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3753b198d89ddd7d3cf52a73c01c5899_X8ux8jkuLr.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>manual_input</md-td>  
      <md-td>手动输入图形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f707ede301dccc0c21a50e611193e3d8_81xZqCBcs8.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_trapezoid</md-td>  
      <md-td>流程图手动操作</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/92ffb9cbe307947ab9985550917ffb59_qzGu1yOVJ3.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>delay_shape</md-td>  
      <md-td>延迟图形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d3ef866544c0027e965a86d53da6c0fe_PgeYyktvJI.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_hexagon</md-td>  
      <md-td>流程图准备</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/942ae87876d045820c749577fb25c9ec_62mUwW13hi.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>off_page_connector</md-td>  
      <md-td>跨页引用</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/01f6092f7aa535c4bcef242b29c61775_VFLfc7TCLL.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>flow_chart_mq</md-td>  
      <md-td>消息队列</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57773fa9f00fca3d84f67823793fca5e_rakxFvTTsb.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>class_interface</md-td>  
      <md-td>类图，接口</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ae742676cb550f0bc4cfd4708f9b200_GhSjzsx0wx.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>classifier</md-td>  
      <md-td>类图，类目</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3753b198d89ddd7d3cf52a73c01c5899_nIv4bKpXw1.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>note_shape</md-td>  
      <md-td>注释图形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/77f97c7e425787f27761acc02ee65b13_hErOoYWGwm.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>actor</md-td>  
      <md-td>角色小人</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bfb91f6fadb1232959fd97cab43c706b_Iw8Ozq0VQ7.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>condition_shape</md-td>  
      <md-td>组合片段</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8283a34b913a60f469f393b209668ff_z7KoFzOHCQ.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>condition_shape2</md-td>  
      <md-td>组合片段2</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0d99c670660443f29bf3b9ae7bb7959a_Bm7G7LJ9Xs.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_flow_round_rect</md-td>  
      <md-td>数据流外部实体</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ae742676cb550f0bc4cfd4708f9b200_k5qzdJo82g.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_process</md-td>  
      <md-td>数据处理</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2eb70a65bd30bc533bb94cdf7041389_zmWR5QERIp.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_flow_ellipse</md-td>  
      <md-td>数据处理（圆形）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7d761ef50af557afa74e0fec8a498d0_mYuT79HkTc.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_flow_round_rect3</md-td>  
      <md-td>数据处理（正方圆角矩形）</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b8bf530cae5494962cf49820d352b682_3EFJdV3r1X.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_store</md-td>  
      <md-td>数据存储</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7a25142c74d6bff23b0c1d3861ab93e_UYVPz16JUy.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_store2</md-td>  
      <md-td>数据存储2</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cd6b2f5daeb81f1cc0f1fb8823896445_VqD9BKjE92.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>data_store3</md-td>  
      <md-td>数据存储3</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/87dfcbb078c973109ad73f8ca92876bd_4bCLzGa0X8.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>component_shape</md-td>  
      <md-td>组件</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c261db8d68d236af4e13a67fb95c9825_Eetr6f2vIv.png?height=48&lazyload=true&width=52)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>component_shape2</md-td>  
      <md-td>组件2</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/daf528c8a8ead5ecb118cf46a3bad2d3_EohdvHJN59.png?height=46&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>component_interface</md-td>  
      <md-td>组件，接口</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4f4683b703f54b62773d5e62bcfca402_WYXXntXLYz.png?height=52&lazyload=true&width=54)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>component_required_interface</md-td>  
      <md-td>组件，需求接口</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d1dcda843cea906f4d59e45d6a73dfa8_50RuHxwemr.png?height=50&lazyload=true&width=44)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>component_assembly</md-td>  
      <md-td>组件，组装</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/374e8f0dabcee0a0d98f1fdc0f430947_TrBkUPr3DH.png?height=50&lazyload=true&width=58)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>state_start</md-td>  
      <md-td>状态图，开始</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8957de2d692f5501e9bde341fb36b248_KeQexO93vP.png?height=52&lazyload=true&width=52)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>state_end</md-td>  
      <md-td>状态图，结束</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d7df40d7501c751acf7004b74dfd751b_5qf2Pd6bAa.png?height=54&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>state_concurrence</md-td>  
      <md-td>状态图，并发</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5c37c12898159dd9e2ba4c82500fe167_36LDgy2s51.png?height=56&lazyload=true&width=58)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>star3</md-td>  
      <md-td>四角形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2aaf9e4ba53bc1b34c0412e8cb2913fb_by2c250juN.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
     <md-tr> 
      <md-td>star4</md-td>  
      <md-td>六角形</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/943a7fa46ef913c1e4cd7cee9faa286d_g8gsfRs0Gl.png?height=56&lazyload=true&width=56)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>star2</md-td>  
      <md-td>爆炸星型</md-td>
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/569baa2d341cc9c274bd06a55f9da713_1MaMNjRjFi.png?height=72&lazyload=true&width=72)</md-td>
    </md-tr> 
  </md-tbody> 
</md-table>
:::

## 节点属性
节点属性可以分基础属性及特有节点属性。

### 基础属性
#### Text
节点的文字属性（目前文本内容不支持混排。文字颜色、背景颜色不支持自定义，具体支持的颜色值见主题描述）。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>text</md-td>  
      <md-td>string</md-td>  
      <md-td>文字内容</md-td> 
      <md-td>optional</md-td>
    </md-tr>  
   <md-tr> 
      <md-td>font_weight</md-td>  
      <md-td>string</md-td>  
      <md-td>
       文字字重<br>
<md-enum>
<md-enum-item key="regular" >常规</md-enum-item>
<md-enum-item key="bold" >加粗</md-enum-item>
</md-enum>
      </md-td> 
     <md-td>optional，默认值 regular</md-td>
    </md-tr> 
     <md-tr> 
      <md-td>font_size</md-td>  
      <md-td>int</md-td>  
      <md-td>文字大小</md-td> 
      <md-td>optional，默认值 14</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>horizontal_align</md-td>  
      <md-td>string</md-td>  
      <md-td>
       水平对齐<br>
<md-enum>
<md-enum-item key="left" >向左对齐</md-enum-item>
<md-enum-item key="center" >居中对齐</md-enum-item>
<md-enum-item key="right" >向右对齐</md-enum-item>
</md-enum>
      </md-td> 
      <md-td>optional，默认值 center</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>vertical_align</md-td>  
      <md-td>string</md-td>  
      <md-td>
       垂直对齐<br>
<md-enum>
<md-enum-item key="top" >顶部对齐</md-enum-item>
<md-enum-item key="mid" >垂直居中</md-enum-item>
  <md-enum-item key="bottom" >底部对齐</md-enum-item>
</md-enum>
      </md-td> 
      <md-td>optional，默认值 mid</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>text_color</md-td>  
      <md-td>string</md-td>  
      <md-td>文字颜色</md-td> 
      <md-td>16 进制 RGB 值，文字颜色不支持自定义，具体颜色值可以查看画板[主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction) </md-td>
    </md-tr> 
    <md-tr> 
      <md-td>text_background_color</md-td>  
      <md-td>string</md-td>  
      <md-td>文字背景颜色</md-td> 
      <md-td>16 进制 RGB 值，文字背景颜色不支持自定义，具体颜色值可以查看画板[主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction) </md-td>
    </md-tr>
     <md-tr> 
      <md-td>line_through</md-td>  
      <md-td>bool</md-td>  
      <md-td>
       是否存在删除线<br>
<md-enum>
<md-enum-item key="true" >文本内容存在删除线</md-enum-item>
<md-enum-item key="false" >文本内容不存在删除线</md-enum-item>
</md-enum>
      </md-td>
      <md-td>optional，默认 false </md-td>
    </md-tr>
    <md-tr> 
      <md-td>under_line</md-td>  
      <md-td>bool</md-td>  
      <md-td>
       是否存在下划线<br>
<md-enum>
<md-enum-item key="true" >文本内容存在下划线</md-enum-item>
<md-enum-item key="false" >文本内容不存在下划线</md-enum-item>
</md-enum>
      </md-td>
      <md-td>optional，默认 false </md-td>
    </md-tr>
    <md-tr> 
      <md-td>italic</md-td>  
      <md-td>bool</md-td>  
      <md-td>
       是否斜体<br>
<md-enum>
<md-enum-item key="true" >文本内容为斜体</md-enum-item>
<md-enum-item key="false" >文本内容不是斜体</md-enum-item>
</md-enum>
      </md-td>
      <md-td>optional，默认 false </md-td>
    </md-tr>
    <md-tr> 
      <md-td>angle</md-td>  
      <md-td>int</md-td>  
      <md-td>
       文字旋转角度
      </md-td>
      <md-td>支持的角度有: 0、90、180、270 度</md-td>
    </md-tr>
     <md-tr> 
      <md-td>theme_text_color_code</md-td>  
      <md-td>int</md-td>  
      <md-td>
       主题色表盘下文字颜色 code 值
      </md-td>
      <md-td>code 对应主题下文字颜色色表盘上颜色的下标值，同一个 code 值，对于不同主题会有不同的颜色，可以做到文字颜色随主题切换功能，具体可参考 [主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction)。与 text_color 作用相同，推荐使用此字段。同时设置时 text_color 生效。</md-td>
    </md-tr>
    <md-tr> 
      <md-td>theme_text_background_color_code</md-td>  
      <md-td>int</md-td>  
      <md-td>
       主题色表盘下文字背景颜色 code 值
      </md-td>
      <md-td>code 对应主题下文字背景颜色色表盘上颜色的下标值，同一个 code 值，对于不同主题会有不同的颜色，可以做到文字背景颜色随主题切换功能，具体可参考 [主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction)。与 text_background_color 作用相同，推荐使用此字段。同时设置时 text_background_color 生效</md-td>
    </md-tr>
  </md-tbody> 
</md-table>
:::

#### Style
节点的样式属性，包含边框样式、填充样式。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th>
      <md-th>属性</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>fill_color</md-td>  
      <md-td>string</md-td>  
      <md-td>填充颜色，16 进制 RGB 值</md-td>
      <md-td>optional，不设置时跟随主题配色</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>fill_opacity</md-td>  
      <md-td>float</md-td>  
      <md-td>填充透明度</md-td> 
      <md-td>optional，默认值 100<br>范围 0～100</md-td> 
    </md-tr>  
   <md-tr> 
      <md-td>border_style</md-td>  
      <md-td>string</md-td>  
      <md-td>
       边框样式<br>
<md-enum>
<md-enum-item key="none" >无边框</md-enum-item>
<md-enum-item key="solid" >实线</md-enum-item>
<md-enum-item key="dash" >虚线</md-enum-item>
<md-enum-item key="dot" >点状虚线</md-enum-item>
</md-enum>
      </md-td> 
     <md-td>optional，默认值solid</md-td> 
    </md-tr> 
     <md-tr> 
      <md-td>border_width</md-td>  
      <md-td>string</md-td>  
      <md-td>边框宽度<br>
<md-enum>
<md-enum-item key="extra_narrow" >极细</md-enum-item>
<md-enum-item key="narrow" >细</md-enum-item>
<md-enum-item key="medium" >中</md-enum-item>
<md-enum-item key="bold" >粗</md-enum-item>
</md-enum></md-td> 
    <md-td>optional，默认值narrow</md-td>
    </md-tr> 
   
    <md-tr> 
      <md-td>border_opacity</md-td>  
      <md-td>float</md-td>  
      <md-td>边框透明度<br>范围 0～100 <br>默认值100</md-td> 
      <md-td>optional，默认值100<br>范围 0～100 </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>h_flip</md-td>  
      <md-td>bool</md-td>  
      <md-td>水平翻折</md-td> 
      <md-td>optional，默认值 false</md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>v_flip</md-td>  
      <md-td>bool</md-td>  
      <md-td>垂直翻折</md-td> 
      <md-td>optional，默认值 false</md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>border_color</md-td>  
      <md-td>string</md-td>  
      <md-td>边框颜色，16 进制 RGB 值</md-td>
      <md-td>optional，不设置时跟随主题配色</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>theme_fill_color_code</md-td>  
      <md-td>int</md-td>  
      <md-td>主题色表盘下填充颜色 code 值</md-td>
      <md-td>code 对应主题下填充颜色色表盘上颜色的下标值，同一个 code 值，对于不同主题会有不同的填充颜色，可以做到图形填充颜色随主题切换功能，具体可参考 [主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction)。fill_color 字段用于设置图形的自定义填充颜色（不会随主题切换），theme_fill_color_code 指定填充颜色使用色表盘上 code 值对应的填充色。两者都设置时，fill_color 优先级高。</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>theme_border_color_code</md-td>  
      <md-td>int</md-td>  
      <md-td>主题色表盘下边框颜色 code 值</md-td>
      <md-td>code 对应主题下边框颜色色表盘上颜色的下标值，同一个 code 值，对于不同主题会有不同的边框颜色，可以做到图形边框颜色随主题切换功能，具体可参考 [主题简介](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/theme-introduction)。border_color 字段用于设置图形的自定义边框颜色（不会随主题切换），theme_border_color_code 指定边框颜色使用色表盘上 code 值对应的颜色。两者都设置时，border_color 优先级高。</md-td>
    </md-tr> 
  </md-tbody> 
</md-table>
:::

### 特殊节点属性
#### Image
图片图形节点属性。（图片类型没有填充样式）
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th>
      <md-th>属性</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>token</md-td>  
      <md-td>string</md-td>  
      <md-td>图片token，通过云文档下的素材上传接口 [上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all) 上传图片后返回的 token</md-td> 
      <md-td>required</md-td> 
    </md-tr>
  </md-tbody> 
</md-table>
:::

#### CompositeShape
基础图形节点属性。
:::html
<md-dt-table> 
  <md-dt-thead> 
    <md-dt-tr>
      <md-dt-th>名称</md-dt-th>
      <md-dt-th>数据类型</md-dt-th>
      <md-dt-th>描述</md-dt-th>
      <md-dt-th>属性</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>  
  <md-dt-tbody>
    
<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >基础图形的具体类型（见基础图形细分）</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >pie</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >饼图属性</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >start_radial_line_angle</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >饼图开始径向边角度，x轴正向水平向右为0度，角度增长方向为顺时针方向</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >central_angle</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >饼图圆心角角度，角度方向为开始径向边逆时针方向</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >radius</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >饼图半径长度</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >sector_ratio</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >饼图扇区占比，范围[0,1]，0表示一个圆周线，1表示一个圆盘</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
  </md-dt-tbody> 
</md-dt-table>
:::

#### Connector
连线图形节点属性。（连线类型没有填充样式）
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th>名称</md-dt-th>
      <md-dt-th>数据类型</md-dt-th>
      <md-dt-th>描述</md-dt-th>
      <md-dt-th>属性</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
    
<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >start_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线开始端点连接的图形，只读属性，使用下文中的 「start」，可以表示连接附着在图形上或连线没有附着图形时的坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional, read_only</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的 id </md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的方向</md-text><br>
<md-enum>
<md-enum-item key="top" >连接图形的上边</md-enum-item>
<md-enum-item key="right" >连接图形的右边</md-enum-item>
<md-enum-item key="bottom" >连接图形的下边</md-enum-item>
<md-enum-item key="left" >连接图形的左边</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的相对坐标比例，x=0，y=0 表示图形的左上角，x=1，y=1 表示图形的右下角</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 x 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 y 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >end_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线结束端点连接的图形，只读属性，使用下文中的 「end」，可以表示连接附着在图形或连线没有附着图形时的位置坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional, read_only</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的 id </md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的方向</md-text><br>
<md-enum>
<md-enum-item key="top" >连接图形的上边</md-enum-item>
<md-enum-item key="right" >连接图形的右边</md-enum-item>
<md-enum-item key="bottom" >连接图形的下边</md-enum-item>
<md-enum-item key="left" >连接图形的左边</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的相对坐标比例，x=0，y=0 表示图形的左上角，x=1，y=1 表示图形的右下角</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 x 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 y 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.info</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线开始端点</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形信息</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的 id </md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，position 与 attched_object 二选一</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的方向</md-text><br>
<md-enum>
<md-enum-item key="top" >连接图形的上边</md-enum-item>
<md-enum-item key="right" >连接图形的右边</md-enum-item>
<md-enum-item key="bottom" >连接图形的下边</md-enum-item>
<md-enum-item key="left" >连接图形的左边</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的相对坐标比例，x=0，y=0 表示图形的左上角，x=1，y=1 表示图形的右下角</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 x 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 y 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线端点在画板内的位置</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，position 与 attached_object 二选一</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点位置 x 坐标</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点位置 y 坐标</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >arrow_style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线端点箭头样式</md-text><br>
<md-enum>
<md-enum-item key="none" >无箭头</md-enum-item>
<md-enum-item key="line_arrow" >线性箭头</md-enum-item>
<md-enum-item key="triangle_arrow" >三角形箭头</md-enum-item>
<md-enum-item key="empty_triangle_arrow" >空心三角形箭头</md-enum-item>
<md-enum-item key="circle_arrow" >圆形箭头</md-enum-item>
<md-enum-item key="empty_circle_arrow" >空心圆形箭头</md-enum-item>
<md-enum-item key="diamond_arrow" >菱形箭头</md-enum-item>
<md-enum-item key="empty_diamond_arrow" >空心菱形箭头</md-enum-item>
<md-enum-item key="single_arrow" >单箭头</md-enum-item>
<md-enum-item key="multi_arrow" >多箭头</md-enum-item>
<md-enum-item key="exact_single_arrow" >精确箭头</md-enum-item>
<md-enum-item key="zero_or_multi_arrow" >零个或多个箭头</md-enum-item>
<md-enum-item key="zero_or_single_arrow" >零个或单个箭头</md-enum-item>
<md-enum-item key="single_or_multi_arrow" >单个或多个箭头</md-enum-item>
<md-enum-item key="x_arrow" >x 型箭头</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，默认无箭头</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.info</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线结束端点</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.attached_object</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形信息</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的 id </md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，position 与 attached_object 二选一</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >snap_to</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连接图形的方向</md-text><br>
<md-enum>
<md-enum-item key="top" >连接图形的上边</md-enum-item>
<md-enum-item key="right" >连接图形的右边</md-enum-item>
<md-enum-item key="bottom" >连接图形的下边</md-enum-item>
<md-enum-item key="left" >连接图形的左边</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的相对坐标比例，x=0，y=0 表示图形的左上角，x=1，y=1 表示图形的右下角</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 x 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线连接图形的 y 相对坐标比例</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线端点在画板内的位置</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，position 与 attached_object 二选一</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点位置 x 坐标</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点位置 y 坐标</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >arrow_style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线端点箭头样式</md-text><br>
<md-enum>
<md-enum-item key="none" >无箭头</md-enum-item>
<md-enum-item key="line_arrow" >线性箭头</md-enum-item>
<md-enum-item key="triangle_arrow" >三角形箭头</md-enum-item>
<md-enum-item key="empty_triangle_arrow" >空心三角形箭头</md-enum-item>
<md-enum-item key="circle_arrow" >圆形箭头</md-enum-item>
<md-enum-item key="empty_circle_arrow" >空心圆形箭头</md-enum-item>
<md-enum-item key="diamond_arrow" >菱形箭头</md-enum-item>
<md-enum-item key="empty_diamond_arrow" >空心菱形箭头</md-enum-item>
<md-enum-item key="single_arrow" >单箭头</md-enum-item>
<md-enum-item key="multi_arrow" >多箭头</md-enum-item>
<md-enum-item key="exact_single_arrow" >精确箭头</md-enum-item>
<md-enum-item key="zero_or_multi_arrow" >零个或多个箭头</md-enum-item>
<md-enum-item key="zero_or_single_arrow" >零个或单个箭头</md-enum-item>
<md-enum-item key="single_or_multi_arrow" >单个或多个箭头</md-enum-item>
<md-enum-item key="x_arrow" >x 型箭头</md-enum-item>
</md-enum>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，默认无箭头</md-text>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >captions</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >connector.caption</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线的文本</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >Text[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >文本</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >shape</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线样式</md-text><br>
<md-enum>
<md-enum-item key="straight" >直线</md-enum-item>
<md-enum-item key="polyline" >折线</md-enum-item>
<md-enum-item key="curve" >曲线</md-enum-item>
<md-enum-item key="right_angled_polyline" >直角折线</md-enum-item>
</md-enum>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional，默认为直线</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >turning_point</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线转向点列表</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线转向点 x 坐标，相对于连线起始位置的 x 坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >连线转向点 y 坐标，相对于连线起始位置的 y 坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
</md-dt-tbody>
</md-dt-table>
:::

#### Section
分区图形节点属性。（分区图形不能设置文本内容，分区图形不能设置边框颜色，边框颜色是跟随填充颜色的。填充颜色也不支持自定义，具体支持的颜色值见主题描述）
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>title</md-td>  
      <md-td>string</md-td>  
      <md-td>分区标题</md-td> 
      <md-td>required</md-td>
    </md-tr>
  </md-tbody> 
</md-table>
:::

#### Table
表格图形节点属性，当节点类型为 table、table_er、table_uml、combined_fragment 时含有表格属性。（可以对整个表格设置边框、填充、文本等样式，对单元格只能设置填充、文本样式）
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th>名称</md-dt-th>
      <md-dt-th>数据类型</md-dt-th>
      <md-dt-th>描述</md-dt-th>
      <md-dt-th>属性</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >表格标题</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
   <md-dt-td>
	<md-text type="field-name" >meta</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >table.meta</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >表格元信息</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >row_sizes</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >行高</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >col_sizes</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >列高</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >row_num</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >行数</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >read_only</md-text>
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >col_num</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >列数</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >read_only</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name"> style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >整个表格的样式，不单独设置单元格样式时复用表格样式，整个表格可以设置边框、填充样式，单元格内只能设置填充相关样式</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，不设置时跟随主题配置</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name"> text</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >整个表格的文字样式，不单独设置单元格文字样式时复用表格文字样式</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，不设置时跟随主题配置</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >cells</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >table.cell[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >表格单元格数据</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >row_index</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >行下标，从1开始</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >col_index</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >列下标，从1开始</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >merge_info</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >table.cell.merge_info</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >单元格合并信息</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >row_span</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >从当前行索引起被合并的连续行数</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="2">
    <md-dt-td>
	<md-text type="field-name" >col_span</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >从当前列索引起被合并的连续列数</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >children</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >单元格包含的子节点 id</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >单元格内填充样式，单元格只能设置填充颜色、透明度，不能设置边框相关属性</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional，不设置时跟随表格样式</md-text>
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >Text</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >单元格内文字内容及样式</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

#### Lifeline
生命线图形属性。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>size</md-td>  
      <md-td>float</md-td>  
      <md-td>生命线长度</md-td> 
      <md-td>optional，默认 360 </md-td>  
    </md-tr>
    <md-tr> 
      <md-td>type</md-td>  
      <md-td>string</md-td>  
      <md-td>生命线类型<br>
<md-enum>
<md-enum-item key="boundary" >边界生命线</md-enum-item>
<md-enum-item key="control" >控制生命线</md-enum-item>
<md-enum-item key="entity" >实体生命线</md-enum-item>
<md-enum-item key="data_base" >数据库生命线</md-enum-item>
<md-enum-item key="queue" >队列生命线</md-enum-item>
<md-enum-item key="collection" >集合生命线</md-enum-item>
<md-enum-item key="actor_lifeline" >角色生命线</md-enum-item>
<md-enum-item key="object_lifeline" >对象生命线</md-enum-item>
</md-enum></md-td>
      <md-td>optional</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::


#### Paint
画笔图形属性。（画笔类型没有填充样式）
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th>名称</md-dt-th>
      <md-dt-th>数据类型</md-dt-th>
      <md-dt-th>描述</md-dt-th>
      <md-dt-th>属性</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

  <md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >画笔类型</md-text><br>
<md-enum>
<md-enum-item key="highlight" >高亮笔</md-enum-item>
<md-enum-item key="marker" >马克笔</md-enum-item>
</md-enum>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional，默认 highlgiht</md-text>
	</md-dt-td>
  </md-dt-tr>
  
  <md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >lines</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >point[]</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >画笔图形线段列表，由系列点坐标组成</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
  </md-dt-tr>
    
  <md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >x</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点 x 坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
  </md-dt-tr>
  <md-dt-tr level="1">
    <md-dt-td>
	<md-text type="field-name" >y</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >float</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >点 y 坐标</md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >required</md-text>
	</md-dt-td>
  </md-dt-tr>
  
  <md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >int</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >画笔宽度，单位 px，范围 1-43 </md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional，默认 7</md-text>
	</md-dt-td>
  </md-dt-tr>
  <md-dt-tr level="0">
    <md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >string</md-text>
	</md-dt-td>
    <md-dt-td>
	<md-text type="field-name" >画笔颜色，不设置时跟随主题配色 </md-text>
	</md-dt-td>
  	<md-dt-td>
	<md-text type="field-name" >optional</md-text>
	</md-dt-td>
  </md-dt-tr>
  </md-dt-tbody>
:::

####  StickyNote
便签节点属性。（便签节点没有边框样式）
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>user_id</md-td>  
      <md-td>string</md-td>  
      <md-td>用户 id</md-td> 
      <md-td>required</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>show_author_info</md-td>  
      <md-td> boolean </md-td>  
      <md-td>是否展示用户信息</md-td>
      <md-td>optional，默认为 true</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::

####  Svg
画笔图形属性。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>svg_code</md-td>  
      <md-td>string</md-td>  
      <md-td>svg 代码</md-td> 
      <md-td>required</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::
  
#### MindMapRoot
思维导图根节点图形节点属性，思维导图根节点可以设置子节点的布局样式。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>layout</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图节点布局方式<br>
<md-enum>
<md-enum-item key="left_right" >左右布局</md-enum-item>
<md-enum-item key="up_down" >上下布局</md-enum-item>
<md-enum-item key="tree_left" >左树布局</md-enum-item>
<md-enum-item key="tree_right" >右树布局</md-enum-item>
<md-enum-item key="tree_balance" >右树布局</md-enum-item>
<md-enum-item key="horizontal_time_line" >水平时间线布局</md-enum-item>
<md-enum-item key="vertical_time_line" >垂直时间线布局</md-enum-item>
</md-enum>
      </md-td> 
      <md-td>optional，默认左右布局</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>type</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图节点类型<br>
<md-enum>
<md-enum-item key="mind_map_text" >文本节点</md-enum-item>
<md-enum-item key="mind_map_full_round_rect" >全圆角矩形节点</md-enum-item>
<md-enum-item key="mind_map_round_rect" >圆角矩形节点</md-enum-item>
</md-enum></md-td>
     
      <md-td>optional，默认圆角矩形</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>line_style</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图节点分支连接线样式<br>
<md-enum>
<md-enum-item key="curve" >曲线</md-enum-item>
<md-enum-item key="right_angle" >直角折线</md-enum-item>
<md-enum-item key="round_angle" >圆角折线</md-enum-item>
</md-enum></md-td>
      <md-td>optional，默认圆角折线</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>up_children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>在根节点上方的子节点列表</md-td> 
      <md-td>read only，只读属性，在 up_down 布局方式时可以设置子节点在根节点的上方</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>down_children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>在根节点下方的子节点列表</md-td> 
      <md-td>read only，只读属性<br>在上下布局方式时可以设置子节点在根节点的下方<br>对于 tree_left, tree_right, tree_balance, vertical_time_line 这些布局方式，都认为子节点还是 down_children</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>left_children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>在根节点左边的子节点列表</md-td> 
      <md-td>read only，只读属性，在 left_right 布局方式时可以设置子节点在根节点的左边</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>right_children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>在根节点右边的子节点列表</md-td> 
      <md-td>read only，只读属性，在 left_right 布局方式时可以设置子节点在根节点的右边<br>对于 horizontal_time_line 布局，认为子节点是 right_children</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::
  
布局方式图示如下：
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>   
      <md-th>描述</md-th> 
      <md-th>图示</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>left_right</md-td>  
      <md-td>左右布局</md-td>
      <md-td>
![3.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c425387ef43a6908b4168091a10112e_TWq9m2cG4P.png?height=134&lazyload=true&width=174)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>up_down</md-td>  
      <md-td>上下布局</md-td>
      <md-td>
![9.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/221d85549c6aa6bfe18efb3e50a5ad83_cLSyOiSCeC.png?height=126&lazyload=true&width=178)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>tree_left</md-td>  
      <md-td>左树布局</md-td>
      <md-td>
![5.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e4bc74dec730189b1020543225a2602f_DARtx5Fm0v.png?height=128&lazyload=true&width=178)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>tree_right</md-td>  
      <md-td>右树布局</md-td>
      <md-td>
![11.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da433dbf92920cd7e658ab38012fd36a_tVVQFaqHKv.png?height=124&lazyload=true&width=174)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>tree_balance</md-td>  
      <md-td>平衡树布局</md-td>
      <md-td>
![12.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d99af606188d1e24cb370ce15b4baef9_crW5ErwJfW.png?height=134&lazyload=true&width=180)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>horizontal_time_line</md-td>  
      <md-td>水平时间线布局</md-td>
      <md-td>
![13.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2041b5c7a961fd46d64e4c0d7b5a0dad_xXapP1mcn6.png?height=112&lazyload=true&width=180)</md-td>
    </md-tr>
    <md-tr> 
      <md-td>vertical_time_line</md-td>  
      <md-td>垂直时间线布局</md-td>
      <md-td>
![14.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20a28a92efd1d9aa67ac5024ae5718db_Mpus8icDtb.png?height=128&lazyload=true&width=170)</md-td>
    </md-tr>
    </md-table>
:::
    

#### MindMapNode
思维导图非根节点图形节点属性。作为根节点的一级子节点时，可以在上下布局/左右布局时指定节点在上/下/左/右方向。其它层级子节点设置方向不生效。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>parent_id</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图父节点 id</md-td> 
      <md-td>require</md-td>  
    </md-tr>
    <md-tr> 
      <md-td>type</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图节点类型<br>
<md-enum>
<md-enum-item key="mind_map_text" >文本节点</md-enum-item>
<md-enum-item key="mind_map_full_round_rect" >全圆角矩形节点</md-enum-item>
<md-enum-item key="mind_map_round_rect" >圆角矩形节点</md-enum-item>
</md-enum></md-td>
      <md-td>optional，默认文本节点</md-td>  
    </md-tr>
    <md-tr> 
    <md-td>z_index</md-td>  
      <md-td>int</md-td>  
      <md-td>思维导图节点在兄弟节点中的位置，按照从小到大排列展示</md-td> 
      <md-td>optional，默认为在兄弟节点列表队尾</md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>layout_position</md-td>  
      <md-td>string</md-td>  
      <md-td>根节点下的子节点设置相对于根节点的位置方向，对于 up_down、left_right 布局时可以指定方向<br>
<md-enum>
<md-enum-item key="up" >位于根节点上方</md-enum-item>
<md-enum-item key="down" >位于根节点下方</md-enum-item>
<md-enum-item key="left" >位于根节点左边</md-enum-item>
<md-enum-item key="right" >位于根节点右边</md-enum-item>
</md-enum></md-td>
      <md-td>optional，left_right 布局时默认 right, up_down 布局时默认 down</md-td> 
     </md-tr>
      <md-tr> 
      <md-td>children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>思维导图子节点 id</md-td> 
      <md-td>optional</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::
  
#### MindMap
思维导图属性，不再使用，只读，使用 MindMapRoot 或 MindMapNode 属性表示。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>parent_id</md-td>  
      <md-td>string</md-td>  
      <md-td>思维导图父节点 id</md-td> 
      <md-td>optional</md-td>  
    </md-tr>
  </md-tbody> 
</md-table>
:::

## 节点数据结构
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>名称</md-th>  
      <md-th>数据类型</md-th>  
      <md-th>描述</md-th> 
      <md-th>属性</md-th>
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>id</md-td>  
      <md-td>string</md-td>  
      <md-td>节点 id</md-td> 
      <md-td>optional，在批量创建含父子关系的节点时，可用于标识父节点，保证在批量创建中 id 唯一，仅用于标识作用</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>type</md-td>  
      <md-td>string</md-td>  
      <md-td>节点类型，见上文节点类型</md-td> 
      <md-td>required</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>parent_id</md-td>  
      <md-td>string</md-td>  
      <md-td>父节点 id</md-td> 
      <md-td>optional</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>children</md-td>  
      <md-td>[]string</md-td>  
      <md-td>子节点 id</md-td> 
      <md-td>read_only</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>x</md-td>  
      <md-td>float</md-td>  
      <md-td>图形相对画布的 x 轴位置信息（存在父容器时为相对父容器的坐标），单位为 px</md-td> 
      <md-td>optional，默认为 100</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>y</md-td>  
      <md-td>float</md-td>  
      <md-td>图形相对画布的 y 轴位置信息（存在父容器时为相对父容器的坐标），单位为 px</md-td> 
      <md-td>optional，默认为 100</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>angle</md-td>  
      <md-td>float</md-td>  
      <md-td>旋转角度</md-td>
      <md-td>optional，默认值 0</md-td> 
    </md-tr>
    <md-tr> 
      <md-td>width</md-td>  
      <md-td>float</md-td>  
      <md-td>图形宽度，单位为 px</md-td> 
      <md-td>required</md-td>
    </md-tr>
    <md-tr> 
      <md-td>height</md-td>  
      <md-td>float</md-td>  
      <md-td>图形高度，单位为 px</md-td> 
      <md-td>required</md-td>
    </md-tr>
    <md-tr> 
      <md-td>locked</md-td>  
      <md-td>bool</md-td>  
      <md-td>图形是否锁定，锁定后无法编辑</md-td> 
      <md-td>optional，默认为 false</md-td>
    </md-tr>
    <md-tr> 
      <md-td>z_index</md-td>  
      <md-td>int</md-td>  
      <md-td>在父节点下的层级大小，节点图形存在重叠时，层级小的会被覆盖</md-td> 
      <md-td>optional，默认 0</md-td>
    </md-tr>
    <md-tr> 
      <md-td>text</md-td>  
      <md-td>Text</md-td>  
      <md-td>图形文字，基础属性</md-td> 
      <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>style</md-td>  
      <md-td>Style</md-td>  
      <md-td>图形样式，基础属性</md-td> 
      <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>image</md-td>  
      <md-td>Image</md-td>  
      <md-td>图片属性，对应type=image</md-td> 
      <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>composite_shape</md-td>  
      <md-td>CompositeShape</md-td>  
      <md-td>基础图形属性，对应type=composite_shape</md-td> 
      <md-td>optional</md-td>
    </md-tr>
     <md-tr> 
      <md-td>connector</md-td>  
      <md-td>Connector</md-td>  
      <md-td>连线图形属性，type=connector</md-td> 
      <md-td>optional</md-td>
    </md-tr>
     <md-tr> 
      <md-td>section</md-td>  
      <md-td>Section</md-td>  
      <md-td>分区图形属性，对应type=section</md-td> 
      <md-td>optional</md-td>
    </md-tr>
     <md-tr> 
      <md-td>table</md-td>  
      <md-td>Table</md-td>  
      <md-td>表格属性，对应type=table，table_er，table_uml，combined_fragment</md-td> 
      <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>paint</md-td>  
      <md-td>Paint</md-td>  
      <md-td>画笔属性，对应type=paint</md-td> 
       <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>lifeline</md-td>  
      <md-td>Lifeline</md-td>  
      <md-td>生命线属性，对应type=lifeline</md-td> 
       <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>sticky_note</md-td>  
      <md-td>StickyNote</md-td>  
      <md-td>便签属性，对应type=sticky_note</md-td> 
       <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>svg</md-td>  
      <md-td>Svg</md-td>  
      <md-td>svg属性，对应type=svg</md-td> 
       <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>mind_map</md-td>  
      <md-td>MindMap</md-td>  
      <md-td>思维导图属性，对应type=mind_map，不再使用</md-td> 
       <md-td>read_only</md-td>
    </md-tr>
    <md-tr> 
      <md-td>mind_map_root</md-td>  
      <md-td>MindMapRoot</md-td>  
      <md-td>思维导图根节点属性，对应type=mind_map</md-td> 
       <md-td>optional</md-td>
    </md-tr>
    <md-tr> 
      <md-td>mind_map_node</md-td>  
      <md-td>MindMapNode</md-td>  
      <md-td>思维导图子节点属性，对应type=mind_map</md-td> 
       <md-td>optional</md-td>
    </md-tr>
  </md-tbody> 
</md-table>
:::