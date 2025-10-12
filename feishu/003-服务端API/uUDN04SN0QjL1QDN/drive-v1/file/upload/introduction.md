<!--
title: 上传文件概述
id: 6979562676003799068
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/multipart-upload-file-/introduction
updatedAt: 1725538796000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/upload/multipart-upload-file-/introduction
-->
# 上传文件概述

上传文件指将本地环境的各类文件上传至云空间中。本文档介绍如何选择和调用相关接口上传文件。

## 使用限制
- 云空间整体有容量限制，具体情况如下所示：
	-	若通过应用身份向应用云空间上传文件：该云空间容量由租户整体容量决定。不同企业版本对应的云空间存储空间不同，详情参考[存储空间、导入文件与回收站常见问题](https://www.feishu.cn/hc/zh-CN/articles/610104039880-%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4-%E5%AF%BC%E5%85%A5%E6%96%87%E4%BB%B6%E4%B8%8E%E5%9B%9E%E6%94%B6%E7%AB%99%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)。
	-	若向用户云空间上传文件：用户的云空间容量由租户企业管理员控制。
- 云空间中所有层级的节点总和的上限为 40 万个。
- 云空间中根目录或文件夹的单层节点上限为 1500 个。超过此限制时，接口将返回 1062507 错误码。可通过将文件新建到不同文件夹中解决。
- 上传文件相关接口不支持并发调用，且调用频率上限为 5 QPS，10000 次/天。否则会返回 1061045 错误码，可通过稍后重试解决。



## 相关接口

飞书开放平台提供了多个上传文件接口。你需根据上传文件的大小，选择合适的方式：


- 若当前网络连接稳定且文件大小不超过 20 MB，直接调用[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)接口上传；
- 若当前网络连接不稳定，或文件大小超过 20 MB，你需依次调用以下分片上传文件接口，对文件定长分片上传，减少单次带宽使用，提高上传成功率。该上传方式支持开发者依据分片上传进度展示整体文件的上传进度，且支持一天内恢复上传。
    
   1. [分片上传文件-预上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_prepare)
    	
	  发送初始化请求，以获取上传事务 ID 和分片策略，为上传分片做准备。平台固定以 4MB 的大小对文件进行分片。    
   2. [分片上传文件-上传分片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_part)
    
      根据预上传接口返回的上传事务 ID 和分片策略上传对应的文件分片。
 
  3. [分片上传文件-完成上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_finish)
      
      调用上传分片接口将分片全部上传完毕后，你需调用本接口触发完成上传。否则将上传失败。
      