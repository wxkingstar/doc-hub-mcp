<!--
title: 资源介绍
id: 7124195547444543516
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/export-overview
updatedAt: 1719994237000
source: https://open.feishu.cn/document/server-docs/vc-v1/export/export-overview
-->
#  资源介绍
##  资源定义
用于导出一段时间内租户的会议数据，包括：[导出会议明细](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/meeting_list)、[导出参会人明细](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/participant_list)、[导出参会人会议质量数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/participant_quality_list)。


##  使用流程
导出需要使用三个接口。

【创建导出任务】传递指定参数创建导出任务获得导出任务id

【查询导出任务结果】根据导出任务id获取导出结果

【下载导出文件】根据导出结果中的fileToken，下载导出文件

	curl命令举例：

>  **curl -o xxx.xlsx https://open.feishu.cn/open-apis/vc/v1/exports/download?file_token=xxxxx --header 'Authorization: Bearer t-xxxx'**


##  权限说明
导出权限需要和用户飞书管理后台上的保持一致。

当使用tenant-access-token时，需要这个应用的创建者具有飞书管理后台 > 视频会议与直播 > 会议管理的权限，最后获得的下载地址也会校验权限，只有当前应用的创建者能够访问。

（推荐）当使用user-access-token时，需要使用这个应用的用户具有飞书管理后台 > 视频会议与直播 > 会议管理的权限，最后获得的下载地址也会校验权限，只有当前用户能够访问。

##  资源：会议明细

###  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议ID</md-text>
        </md-td>

        <md-td>
        9位会议号

**示例值**："123456789"       

        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >会议主题</md-text>
        </md-td>

        <md-td>
        会议主题

**示例值**："xx的视频会议"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议组织者</md-text>
        </md-td>

        <md-td>
- 日程会议：会议组织者
- 即时会议（包含1v1通话）：会议/通话 发起人/会议室；
- 面试会议：面试官
- 开放平台的预约会议：会议预约者

**示例值**："xx"

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >部门</md-text>
        </md-td>

        <md-td>
        部门名称

**示例值**："人事部"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >用户ID</md-text>
        </md-td>

        <md-td>
        内部员工ID

**示例值**："1a2b3c4d"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >工号</md-text>
        </md-td>

        <md-td>
        工号

**示例值**："12345670000"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >邮箱</md-text>
        </md-td>

        <md-td>
        邮箱
          
**示例值**："xx@email.com"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >手机</md-text>
        </md-td>

        <md-td>
        手机号
          
**示例值**："+86123****8910"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议开始时间</md-text>
        </md-td>

        <md-td>
        会议开始时间
          
**示例值**："2022.07.21 11:01:40 (GMT+08:00)"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议结束时间</md-text>
        </md-td>

        <md-td>
        会议结束时间
          
**示例值**："2022.07.21 12:01:40 (GMT+08:00)"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议持续时间</md-text>
        </md-td>

        <md-td>
        会议持续时间
          
**示例值**："01:00:00"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >参会人数量</md-text>
        </md-td>

        <md-td>
        参会人数量
          
**示例值**："2"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频</md-text>
        </md-td>

        <md-td>
        会中是否使用过麦克风/扬声器
          
**示例值**："是"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >视频</md-text>
        </md-td>

        <md-td>
        会中是否使用过摄像头
          
**示例值**："是"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享</md-text>
        </md-td>

        <md-td>
        会中是否使用过共享屏幕/magic-share
          
**示例值**："否"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >录制</md-text>
        </md-td>

        <md-td>
        会中是否开启过录制
          
**示例值**："是"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >电话</md-text>
        </md-td>

        <md-td>
        会中是否使用过pstn
          
**示例值**："否"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

##  资源：参会人明细

###  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >参会人</md-text>
        </md-td>

        <md-td>
        参会人名称

**示例值**："xx"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >部门</md-text>
        </md-td>

        <md-td>
        部门名称

**示例值**："人事部"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >用户ID</md-text>
        </md-td>

        <md-td>
        内部员工ID

**示例值**："1a2b3c4d"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >工号</md-text>
        </md-td>

        <md-td>
        工号

**示例值**："12345670000"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >电话</md-text>
        </md-td>

        <md-td>
        手机号
          
**示例值**："+86123****8910"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >邮箱</md-text>
        </md-td>

        <md-td>
        邮箱
          
**示例值**："xx@email.com"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >设备</md-text>
        </md-td>

        <md-td>
        设备类型
          
**示例值**："WINDOWS"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >客户端版本</md-text>
        </md-td>

        <md-td>
        应用版本
          
**示例值**："5.18.0"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >公网IP</md-text>
        </md-td>

        <md-td>
        公网IP地址
          
**示例值**："170.40.80.80"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >内网IP</md-text>
        </md-td>

        <md-td>
        内网IP地址
          
**示例值**："192.168.1.1"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >代理服务</md-text>
        </md-td>

        <md-td>
        参会人是否开启代理服务设置
          
**示例值**："否"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >位置</md-text>
        </md-td>

        <md-td>
        参会人所在地理位置
          
**示例值**："中国大陆"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >网络类型</md-text>
        </md-td>

        <md-td>
        包括LAN、wifi等
          
**示例值**："wifi"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >麦克风</md-text>
        </md-td>

        <md-td>
        麦克风设备名
          
**示例值**："与系统一致"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >扬声器</md-text>
        </md-td>

        <md-td>
        扬声器设备名
          
**示例值**："与系统一致"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >摄像头</md-text>
        </md-td>

        <md-td>
        摄像头设备名
          
**示例值**："Integrated Camera"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >音频</md-text>
        </md-td>

        <md-td>
        参会人是否使用过麦克风/扬声器
          
**示例值**："是"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >视频</md-text>
        </md-td>

        <md-td>
        参会人是否使用过摄像头
          
**示例值**："是"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >共享</md-text>
        </md-td>

        <md-td>
        参会人是否使用过共享屏幕/magic-share
          
**示例值**："否"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >入会时间</md-text>
        </md-td>

        <md-td>
        参会人首次入会时间
          
**示例值**："2022.07.21 11:04:52 (GMT+08:00)"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >离会时间</md-text>
        </md-td>

        <md-td>
        参会人最后一次离会时间
          
**示例值**："2022.07.21 12:04:52 (GMT+08:00)"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >参会时长</md-text>
        </md-td>

        <md-td>
        参会人在会议中的累计时长
          
**示例值**："00:01:58"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >离会原因</md-text>
        </md-td>

        <md-td>
        离会原因说明
          
**示例值**："主持人结束会议"
          

        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

##  资源：参会人会议质量数据

###  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >时间</md-text>
        </md-td>

        <md-td>
        时间点，按分钟统计

**示例值**："2022.07.21 11:30:00 (GMT+08:00)"       

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-码率（接收）</md-text>
        </md-td>

        <md-td>
        接收端的音频码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-延迟（接收）</md-text>
        </md-td>

        <md-td>
        接收端的音频延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-抖动（接收）</md-text>
        </md-td>

        <md-td>
        接收端的音频抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-丢包平均（接收）</md-text>
        </md-td>

        <md-td>
接收端的音频丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >音频-丢包最大（接收）</md-text>
        </md-td>

        <md-td>
接收端的音频丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >音频-码率（发送）</md-text>
        </md-td>

        <md-td>
        发送端的音频码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-延迟（发送）</md-text>
        </md-td>

        <md-td>
        发送端的音频延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-抖动（发送）</md-text>
        </md-td>

        <md-td>
        发送端的音频抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >音频-丢包平均（发送）</md-text>
        </md-td>

        <md-td>
发送端的音频丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >音频-丢包最大（发送）</md-text>
        </md-td>

        <md-td>
发送端的音频丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-码率（接收）</md-text>
        </md-td>

        <md-td>
        接收端的视频码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-延迟（接收）</md-text>
        </md-td>

        <md-td>
        接收端的视频延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-抖动（接收）</md-text>
        </md-td>

        <md-td>
        接收端的视频抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-丢包平均（接收）</md-text>
        </md-td>

        <md-td>
接收端的视频丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >视频-丢包最大（接收）</md-text>
        </md-td>

        <md-td>
接收端的视频丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >视频-码率（发送）</md-text>
        </md-td>

        <md-td>
        发送端的视频码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-延迟（发送）</md-text>
        </md-td>

        <md-td>
        发送端的视频延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-抖动（发送）</md-text>
        </md-td>

        <md-td>
        发送端的视频抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >视频-丢包平均（发送）</md-text>
        </md-td>

        <md-td>
发送端的视频丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >视频-丢包最大（发送）</md-text>
        </md-td>

        <md-td>
发送端的视频丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-码率（接收）</md-text>
        </md-td>

        <md-td>
        接收端的共享屏幕码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-延迟（接收）</md-text>
        </md-td>

        <md-td>
        接收端的共享屏幕延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-抖动（接收）</md-text>
        </md-td>

        <md-td>
        接收端的共享屏幕抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-丢包平均（接收）</md-text>
        </md-td>

        <md-td>
接收端的共享屏幕丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-丢包最大（接收）</md-text>
        </md-td>

        <md-td>
接收端的共享屏幕丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-码率（发送）</md-text>
        </md-td>

        <md-td>
        发送端的共享屏幕码率

**示例值**："50kbps"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-延迟（发送）</md-text>
        </md-td>

        <md-td>
        发送端的共享屏幕延迟

**示例值**："5ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-抖动（发送）</md-text>
        </md-td>

        <md-td>
        发送端的共享屏幕抖动

**示例值**："1ms"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-丢包平均（发送）</md-text>
        </md-td>

        <md-td>
发送端的共享屏幕丢包平均值

**示例值**："2%"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >共享屏幕-丢包最大（发送）</md-text>
        </md-td>

        <md-td>
发送端的共享屏幕丢包最大值
          
**示例值**："5%"
          
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >客户端最小 CPU 占用</md-text>
        </md-td>

        <md-td>
客户端最小 CPU 占用

**示例值**："2%"       

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >客户端平均 CPU 占用</md-text>
        </md-td>

        <md-td>
客户端平均 CPU 占用

**示例值**："5%"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >客户端最大 CPU 占用</md-text>
        </md-td>

        <md-td>
客户端最大 CPU 占用

**示例值**："10%"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >系统最大 CPU 占用</md-text>
        </md-td>

        <md-td>
系统最大 CPU 占用

**示例值**："20%"
          

        </md-td>
</md-tr>


  </md-tbody>
</md-table>
:::
##  资源：会议室预定数据

###  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议室名称</md-text>
        </md-td>

        <md-td>
        会议室名称

**示例值**："测试专用rooms"       

        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >会议主题</md-text>
        </md-td>

        <md-td>
        会议主题

**示例值**："xx的视频会议"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >预定人</md-text>
        </md-td>

        <md-td>
会议室预定人

**示例值**："xx"

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >预定人所属部门</md-text>
        </md-td>

        <md-td>
        部门名称

**示例值**："人事部"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >邀请人数</md-text>
        </md-td>

        <md-td>
        邀请参加该会议的人数

**示例值**："10"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >接受人数</md-text>
        </md-td>

        <md-td>
        接受该会议邀请的人数

**示例值**："8"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >会议开始时间</md-text>
        </md-td>

        <md-td>
        会议开始时间
          
**示例值**："2022.07.21 11:01:40 (GMT+08:00)"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >会议结束时间</md-text>
        </md-td>

        <md-td>
        会议结束时间
          
**示例值**："2022.07.21 12:01:40 (GMT+08:00)"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >会议时长</md-text>
        </md-td>

        <md-td>
        会议时长
          
**示例值**："01:00:00"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >会议室预定状态</md-text>
        </md-td>

        <md-td>
        会议室预定状态
          
 可选值：
- 审批中
- 预定成功
- 已释放（手动释放） 
- 已释放（会议结束后自动释放）
- 已释放（未签到被释放）
- 已释放（传感器自动释放）
          
**示例值**："预定成功"
          

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        <md-text type="field-name" >签到设备</md-text>
        </md-td>

        <md-td>
        签到设备
          
 可选值：
- 签到板
- 签到二维码
- 控制器
- 触屏板
- 设备离线，自动签到          
          
          
**示例值**："签到板"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >会议室签到状态</md-text>
        </md-td>

        <md-td>
        会议室签到状态
          
可选值：
- 无需签到（即时预定）
- 无需签到（未开启签到设置）
- 无需签到
- 超时未签到
- 签到时间未结束
- 无需签到（未安装签到设备）
- 已签到
- 待签到
- 不可签到（会议室被禁用）
          
**示例值**："无需签到"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >会议室签到时间</md-text>
        </md-td>

        <md-td>
        会议室签到时间
          
**示例值**："2022.07.04 21:00:00 (GMT+08:00)"
          

        </md-td>
</md-tr>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >释放人</md-text>
        </md-td>

        <md-td>
        释放人
          
**示例值**："xx"
          

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >释放时间</md-text>
        </md-td>

        <md-td>
        释放时间
          
**示例值**："2022.07.04 21:00:00 (GMT+08:00)"
          

        </md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

