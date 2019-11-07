# DSMall
## 关于DSMall

## 安装部署
	本程序依赖Thinkphp5框架，推荐框架版本 ThinkPHP5.0.24完整版
	
## 相关依赖SDK安装
	1.阿里云OSS  composer require aliyuncs/oss-sdk-php   
	介绍地址：https://help.aliyun.com/document_detail/32099.html?spm=5176.87240.400427.47.eaLg1R
	2.phpmailer  composer require phpmailer/phpmailer

## 安装教程
1、将源码解压到服务器空间
2、域名应该指向到public目录，因为应用入口文件位于public/index.php。
比如我的DSMALL项目在  D:\www\dsmall  域名应该指向到 D:\www\dsmall\public
3、进行安装 http://域名/install/install.php
4、后台地址：http://域名/index.php/admin
5、前台地址：http://域名/index.php/home

如果还有什么不懂的到DSMALL论坛(http://bbs.csdeshang.com)进行提问，以及下载最新版本。


## APIDOC 生成API
apidoc -i application/api/controller -o public/apidoc/


V5.0.5
免费版更新 
1. 修复非自营店铺的店铺动态页面报错的问题
2. 新增后台规格名称和规格分类搜索规格的功能
3. 新增规格库存编辑
4. 修复用户在未登录的情况下点击聊天没有反应的问题
5. 时间插件新增中文
6. 修复快递鸟key参数错误的问题
7. 修复系统发生的短信未记录到短信日志中，且未做限制
8. 修复支付宝、微信退款原账号 部分退款、不同店铺退款BUG
9. 新增虚拟代金券
10.修复只有一级分类时发布商品提示未绑定分类的bug
11.语言项重复替换
12.修复户收货地址的city_id和area_id错了
13.因为网站LOGO图过大会影响页面显示，所以限制网站LOGO图最大值为220X46

授权版更新
1. 修复手机端个人信息页面选择日期选项 选择完月份会比选择时少一个月和IOS系统不能选择日期的问题
2. 新增虚拟拼团功能
3. 修复手机端会员中心订单数量气泡不显示的问题
4. 修复手机端支付页面偶尔不出现支付列表的BUG

V5.0.4
免费版更新 
1. 修复手机端充值卡充值失败问题
2. 修复后台搜索举报类型
3. 商品列表，限时折扣以及抢购 图标优化
4. 新增用户首次访问显示悬浮窗
5. 去除重复语言项
6. 修复商品分类图片上传的限制
7. 修复运单模板
8. 更换快递查询接口
9. 新增结算订单显示结单日期
10.新增支付宝/微信订单款项原路退回。


授权版更新
1. 当未添加手机端商品详情时，自动显示PC端商品详细
2. 附近店铺显示已开启的店铺
3. 新增店铺详情信息



V5.0.3
免费版更新 
1. 优化分享图片功能
2. 单店铺新增门店模块，含子门店信息以及门店管理员
3. 优化淘宝CSV文件的商品的导入导出
4. 修复免运费功能缺陷
5. 支付方式优化，让显示更友好
6. 新增实名认证功能，后台开启用户需实名认证才能购买商品。
7. 未登录时加入失败的提示
8. 修复聊天中包含商品时的样式
9. 一系列细节优化，提高用户体验


授权版更新
1. 修复手机端不显示系统消息
2. 优化手机端筛选功能
3. 修复手机端禁止登录账户可正常登录
4. 修复当未添加手机端商品详情时，自动显示PC端商品详细



V5.0.1
免费版更新 
1. 新增可视化模板编辑
2. 新增淘宝导入导出，商品数据包下载和商品图片下载
3. 优化倒计时插件
4. 新增PC端砍价列表
5. 新增广告图加上链接类型
6. 优化推广二维码界面
7. 修复店铺中心店铺名过长的问题

授权版更新
1. 界面美化


V3.2.6
免费版更新 
1. 修复管理员权限菜单bug、美化列表页
2. 美化用户中心侧边栏界面
3. 新增整站推荐功能
4. 新增套餐设置为0元时，店铺可免费使用。
5. 修复html过滤后商品名称过长的提示
6. 新增后台编辑店铺排序
7. 修复店铺已关闭，店铺管理中心未有提示
8. 优化导航管理
9. 修复取消订单时间限制

授权版更新
1. 新增红包、大转盘、刮刮卡、砸金蛋、生肖翻翻看等平台活动
2. 新增砍价活动


V3.2.3
免费版更新 
1. 修复取消微信支付报错
2. 新增初始安装环境监测openssl扩展 以及 BCMath扩展
3. 新增部分API缓存
4. 修复店铺导航显示问题
5. 修复货号退款没有增加库存

授权版更新
1. 微信分享
2. 新增部分API缓存
3. 修复支付密码错误没提示
4. 手机端详情用原图（因为压缩图显示不完整）


V3.2.2
免费版更新 
1. 修复163邮箱乱码问题
2. 修复非自营店铺货到付款地区设置显示错误
3. 修复用户中心通过缓存删除单条浏览记录
4. 修复店铺导航显示问题
5. PC端买家中心/PC端卖家中心界面美化
6. 依据电商法行业规范新增单独的营业执照页
7. 修复微信支付必须开启微信扫码支付
8. 修复图片水印无法正常显示

授权版更新
1. 手机端新增充值卡记录功能
2. 新增签到赠送积分

V3.2.1
授权版更新（ThinkPHP+VUEJS）
1.新增H5端卖家管理
2.优化用户绑定手机流程
3.卖家账户/买家账户同步登录
4.新增手机端查找好友，及时聊天
5.新增举报商品
6.新增商品咨询

免费版更新 
1.优化用户绑定手机流程
2.卖家账户/买家账户同步登录
3.商品界面优化
4.新增发票管理
5.部分界面美化

V3.1.1
1. 新增管理快递公司
2. 优化重复语言包定义
3. 新增通联支付
4. 新增数据导入导出功能
5. 优化开店流程

V3.0.3
1. 新增分销市场功能
2. 微信扫码登录BUG修复
3. 优化闲置语言包以及收藏BUG
4. 店铺结算放入日执行任务中
5. 分销员调整上级的BUG

V3.0.1
1. 优化手机端分类页的体验
2. 后台登陆退出优化
3. 后台界面美化
4. 商家结算优化，管理后台可设置商家结算周期，以及商家可自行申请提现。

V2.5.7
1. 修复微信自动登录没有unionid时需要中断
2. 修复苹果手机小程序支付的小BUG
3. 修复语言包BUG
4. 修复SNS显示错位
5. 去除初始化数据的多余图片
6. 后台界面优化








