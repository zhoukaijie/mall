(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1de7fd2","chunk-4ec82abb","chunk-9af11c66","chunk-0759b7c2","chunk-5367c193","chunk-1889b548","chunk-1fbd47a1","chunk-62a8ebc7","chunk-2d0a47cc"],{"073b":function(t,e,n){t.exports=n.p+"img/default_image_banner.f8bd7680.png"},"085e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-article"},[t._m(0),n("ul",{staticClass:"scroll-content",style:{top:t.top}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.goArticleDetail(e)}}},[t._v("\n            "+t._s(e.article_title)+"\n        ")])})),0),n("em",{staticClass:"more",on:{click:function(e){return t.goHomeArticlelist("1")}}},[t._v("更多")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("em",{staticClass:"title"},[n("span",{staticStyle:{color:"#000"}},[t._v("最新")]),t._v("资讯")])}],o={name:"IndexArticle",data:function(){return{activeIndex:0}},props:["items"],computed:{top:function(){return 2*-this.activeIndex+"rem"}},beforeDestroy:function(){clearInterval(this.time_interval)},mounted:function(){var t=this;this.time_interval=setInterval((function(){t.activeIndex<t.items.length-1?t.activeIndex+=1:t.activeIndex=0}),2e3)},methods:{goHomeArticlelist:function(t){this.$router.push({name:"HomeArticlelist",query:{ac_id:t}})},goArticleDetail:function(t){this.$router.push({name:"HomeArticledetail",query:{article_id:t.article_id}})}}},r=o,a=(n("629d"),n("2877")),c=Object(a["a"])(r,i,s,!1,null,"4bb288ac",null);e["default"]=c.exports},"0e60":function(t,e,n){"use strict";var i=n("2036"),s=n.n(i);s.a},"15d9":function(t,e,n){},"188e":function(t,e,n){t.exports=n.p+"img/home-index-menu5.735f723e.png"},2036:function(t,e,n){},"3c89":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ad?n("div",{staticClass:"floor-ad"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.ad.adv_code,expression:"ad.adv_code"}],on:{click:function(e){return t.goAdUrl(t.ad)}}})]):t._e()},s=[],o={name:"IndexFloorAds",data:function(){return{}},props:["ad"],methods:{goAdUrl:function(t){switch(t.adv_type){case"goods":this.$router.push({name:"HomeGoodsdetail",query:{goods_id:t.adv_typedate}});break;case"store":this.$router.push({name:"HomeStoredetail",query:{id:t.adv_typedate}});break;case"article":this.$router.push({name:"HomeArticledetail",query:{article_id:t.adv_typedate}});break;case"url":window.location.href=t.adv_typedate;break}}}},r=o,a=(n("af44"),n("2877")),c=Object(a["a"])(r,i,s,!1,null,"68186a06",null);e["default"]=c.exports},"491c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("home-common-search",{attrs:{from:"home"}}),t.banners&&t.banners.length>0?n("index-banner",{attrs:{items:t.banners}}):t._e(),n("index-menu",{attrs:{items:t.navs}}),n("index-article",{staticClass:"mb-5",attrs:{items:t.articles}}),t.floorAds?n("index-floor-ads",{attrs:{ad:t.floorAds[0]}}):t._e(),n("index-three-ads",{attrs:{items:t.promotionAds}}),t.goodProducts&&t.goodProducts.length>0?n("index-product-list",{attrs:{items:t.goodProducts,title:"热门推荐",type:t.popular}}):t._e(),t.hotProducts&&t.hotProducts.length>0?n("index-product-list",{attrs:{items:t.hotProducts,title:"销量排行",type:t.sale}}):t._e(),t.floorAds?n("index-floor-ads",{attrs:{ad:t.floorAds[1]}}):t._e(),t.recentlyProducts&&t.recentlyProducts.length>0?n("index-product-list",{attrs:{items:t.recentlyProducts,title:"新品上架",type:t.recently}}):t._e()],1)},s=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=(n("5fc6"),n("5af2")),a=n.n(r),c=n("2f62"),u=n("8a97"),d=n("823c"),l=n("bda7"),m=n("4cbe"),f=n("3c89"),p=n("a155"),h=n("085e");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={name:"HomeIndex",data:function(){return{isshowBacktop:!0,popular:"",sale:"goods_salenum",recently:"goods_addtime"}},components:{IndexProductList:u["default"],HomeCommonSearch:d["default"],IndexBanner:l["default"],IndexMenu:m["default"],IndexFloorAds:f["default"],IndexThreeAds:p["default"],IndexArticle:h["default"]},mounted:function(){},created:function(){this.fetchHomeAd({}).then((function(t){}),(function(t){a()(t.message)})),this.fetchHomeArticle({}).then((function(t){}),(function(t){a()(t.message)})),this.fetchHomeProduct({}).then((function(t){}),(function(t){a()(t.message)})),this.fetchConfig({}).then((function(t){}),(function(t){a()(t.message)}))},computed:g({},Object(c["d"])({config:function(t){return t.config.config},banners:function(t){return t.home.banners},navs:function(t){return t.home.navs},floorAds:function(t){return t.home.floorAds},promotionAds:function(t){return t.home.promotionAds},articles:function(t){return t.home.articles},hotProducts:function(t){return t.home.hotProducts},recentlyProducts:function(t){return t.home.recentlyProducts},goodProducts:function(t){return t.home.goodProducts}})),methods:g({},Object(c["b"])({fetchHomeAd:"fetchHomeAd",fetchHomeArticle:"fetchHomeArticle",fetchHomeProduct:"fetchHomeProduct",fetchConfig:"fetchConfig"}))},b=_,y=n("2877"),C=Object(y["a"])(b,i,s,!1,null,"6748b746",null);e["default"]=C.exports},"4cbe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu clear-fix"},[i("div",{staticClass:"menu-item",on:{click:t.goStoreclass}},[i("img",{staticClass:"menu-item-icon",attrs:{src:n("78d2")}}),i("span",{staticClass:"menu-item-title"},[t._v("店铺分类")])]),i("div",{staticClass:"menu-item",on:{click:t.goBrand}},[i("i",{staticClass:"iconfont bg-4"},[t._v("")]),i("span",{staticClass:"menu-item-title"},[t._v("品牌")])]),i("div",{staticClass:"menu-item",on:{click:t.goPintuan}},[i("img",{staticClass:"menu-item-icon",attrs:{src:n("ce87")}}),i("span",{staticClass:"menu-item-title"},[t._v("拼团")])]),i("div",{staticClass:"menu-item",on:{click:t.goBargain}},[i("i",{staticClass:"iconfont bg-1"},[t._v("")]),i("span",{staticClass:"menu-item-title"},[t._v("砍价")])]),i("div",{staticClass:"menu-item",on:{click:t.goMemberPointSignin}},[i("i",{staticClass:"iconfont bg-4"},[t._v("")]),i("span",{staticClass:"menu-item-title"},[t._v("签到")])]),i("div",{staticClass:"menu-item"},[i("img",{staticClass:"menu-item-icon",attrs:{src:n("a9a7")},on:{click:function(e){return t.$router.push({name:"HomeGoodslist",query:{xianshi:1}})}}}),i("span",{staticClass:"menu-item-title"},[t._v("促销")])]),i("div",{staticClass:"menu-item",on:{click:t.goPointsgoods}},[i("img",{staticClass:"menu-item-icon",attrs:{src:n("188e")}}),i("span",{staticClass:"menu-item-title"},[t._v("积分商城")])]),i("div",{staticClass:"menu-item",on:{click:t.myOrder}},[i("img",{staticClass:"menu-item-icon",attrs:{src:n("a82e")}}),i("span",{staticClass:"menu-item-title"},[t._v("我的订单")])]),i("div",{staticClass:"menu-item",on:{click:t.goArticleclass}},[i("i",{staticClass:"iconfont bg-4"},[t._v("")]),i("span",{staticClass:"menu-item-title"},[t._v("帮助中心")])]),i("div",{staticClass:"menu-item",on:{click:t.goMemberIndex}},[i("i",{staticClass:"iconfont bg-2"},[t._v("")]),i("span",{staticClass:"menu-item-title"},[t._v("个人中心")])]),t._l(t.navs,(function(e,n){return i("div",{key:n,staticClass:"menu-item",on:{click:function(n){return t.goAdUrl(e)}}},[i("img",{staticClass:"menu-item-icon",attrs:{src:e.adv_code}}),i("span",{staticClass:"menu-item-title"},[t._v(t._s(e.adv_title))])])}))],2)},s=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"HomeMenu",props:["items"],computed:c({},Object(r["d"])({isOnline:function(t){return t.member.isOnline},navs:function(t){return t.home.navs}})),methods:{showLogin:function(){this.$router.push({name:"HomeMemberLogin"})},goPointsgoods:function(){this.$router.push({name:"HomePointsgoods"})},goStoreclass:function(){this.$router.push({name:"HomeStoreclass"})},goPintuan:function(){this.$router.push({name:"HomePintuanList"})},goBargain:function(){this.$router.push({name:"HomeBargainlist"})},goBrand:function(){this.$router.push({name:"HomeBrand"})},goArticleclass:function(){this.$router.push({name:"HomeArticleclass"})},goMemberIndex:function(){this.$router.push({name:"MemberIndex"})},goMemberPointSignin:function(){this.$router.push({name:"MemberPointSignin"})},myOrder:function(){this.isOnline?this.$router.push({name:"MemberOrderList"}):this.showLogin()},goAdUrl:function(t){switch(t.adv_type){case"goods":this.$router.push({name:"HomeGoodsdetail",query:{goods_id:t.adv_typedate}});break;case"store":this.$router.push({name:"HomeStoredetail",query:{id:t.adv_typedate}});break;case"article":this.$router.push({name:"HomeArticledetail",query:{article_id:t.adv_typedate}});break;case"url":window.location.href=t.adv_typedate;break}}}},d=u,l=(n("e208"),n("2877")),m=Object(l["a"])(d,i,s,!1,null,"acd524fc",null);e["default"]=m.exports},"4e07":function(t,e,n){},"5a29":function(t,e,n){"use strict";var i=n("15d9"),s=n.n(i);s.a},"629d":function(t,e,n){"use strict";var i=n("6655"),s=n.n(i);s.a},6655:function(t,e,n){},"78d2":function(t,e,n){t.exports=n.p+"img/home-index-menu1.f3aee126.png"},"8a97":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},[n("div",{staticClass:"product-list-header",on:{click:t.productListClick}},[n("div",{staticClass:"header-icon"}),n("span",{staticClass:"header-title"},[t._v(t._s(t.title))]),n("span",{staticClass:"iconfont"},[t._v("")])]),n("div",{staticClass:"product-list-body"},t._l(t.items,(function(t,e){return n("index-product-body",{key:e,attrs:{item:t,index:e}})})),1)])},s=[],o=n("f0aa"),r={name:"IndexProductList",data:function(){return{}},props:["items","title","type"],components:{IndexProductBody:o["default"]},computed:{},methods:{productListClick:function(){this.$router.push({name:"HomeGoodslist",query:{sort_key:this.type}})}}},a=r,c=(n("9833"),n("2877")),u=Object(c["a"])(a,i,s,!1,null,"0e20be1e",null);e["default"]=u.exports},9833:function(t,e,n){"use strict";var i=n("4e07"),s=n.n(i);s.a},a155:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items.length?n("div",{staticClass:"three-ads"},[t.items[0]?n("div",{staticClass:"ad-1"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.items[0].adv_code,expression:"items[0].adv_code"}],on:{click:function(e){return t.goAdUrl(t.items[0])}}})]):t._e(),n("div",{staticClass:"fr"},[t.items[1]?n("div",{staticClass:"ad-2"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.items[1].adv_code,expression:"items[1].adv_code"}],on:{click:function(e){return t.goAdUrl(t.items[1])}}})]):t._e(),t.items[2]?n("div",{staticClass:"ad-3"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.items[2].adv_code,expression:"items[2].adv_code"}],on:{click:function(e){return t.goAdUrl(t.items[2])}}})]):t._e()])]):t._e()},s=[],o={name:"IndexThreeAds",data:function(){return{}},props:["items"],methods:{goAdUrl:function(t){switch(t.adv_type){case"goods":this.$router.push({name:"HomeGoodsdetail",query:{goods_id:t.adv_typedate}});break;case"store":this.$router.push({name:"HomeStoredetail",query:{id:t.adv_typedate}});break;case"article":this.$router.push({name:"HomeArticledetail",query:{article_id:t.adv_typedate}});break;case"url":window.location.href=t.adv_typedate;break}}}},r=o,a=(n("5a29"),n("2877")),c=Object(a["a"])(r,i,s,!1,null,"63d68392",null);e["default"]=c.exports},a82e:function(t,e,n){t.exports=n.p+"img/home-index-menu8.041b336d.png"},a9a7:function(t,e,n){t.exports=n.p+"img/home-index-menu3.83da43ee.png"},af44:function(t,e,n){"use strict";var i=n("f97a"),s=n.n(i);s.a},bda7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mt-swipe",{style:t.getBannerStyle,attrs:{showIndicators:t.isShowIndicators}},t._l(t.items,(function(e,s){return i("mt-swipe-item",{key:s},[e.adv_code?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.adv_code,expression:"item.adv_code"}],style:t.getBannerStyle,on:{click:function(n){return t.goAdUrl(e)}}}):i("img",{style:t.getBannerStyle,attrs:{src:n("073b")}})])})),1)},s=[],o={name:"IndexBanner",data:function(){return{}},props:["items"],computed:{getBannerStyle:function(){var t=window.screen.width,e=t,n=.5*t;return{width:e+"px",height:n+"px"}},isShowIndicators:function(){return!!(this.items&&this.items.length>1)}},methods:{goAdUrl:function(t){switch(t.adv_type){case"goods":this.$router.push({name:"HomeGoodsdetail",query:{goods_id:t.adv_typedate}});break;case"store":this.$router.push({name:"HomeStoredetail",query:{id:t.adv_typedate}});break;case"article":this.$router.push({name:"HomeArticledetail",query:{article_id:t.adv_typedate}});break;case"url":window.location.href=t.adv_typedate;break}}}},r=o,a=n("2877"),c=Object(a["a"])(r,i,s,!1,null,"6d270a48",null);e["default"]=c.exports},ce87:function(t,e,n){t.exports=n.p+"img/home-index-menu2.27df56c7.png"},d679:function(t,e,n){},e208:function(t,e,n){"use strict";var i=n("d679"),s=n.n(i);s.a},f0aa:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-info",class:{border:t.showRightBorder},on:{click:t.productClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.goods_img_480,expression:"item.goods_img_480"}],staticClass:"product-icon"}),n("span",{staticClass:"product-title"},[t._v(t._s(t.item.goods_name))]),n("div",{staticClass:"product-bottom"},[n("span",{staticClass:"product-price"},[t._v("￥"+t._s(t.item.goods_promotion_price))]),n("span",{staticClass:"product-buy"},[t._v(t._s(t.item.goods_salenum)+"人已购买")])])])},s=[],o={name:"IndexProductBody",data:function(){return{itemWidth:0,itemHeight:0,showRightBorder:this.index%2==0}},props:["item","index"],computed:{},methods:{productClick:function(){this.$router.push({name:"HomeGoodsdetail",query:{goods_id:this.item.goods_id}})}}},r=o,a=(n("0e60"),n("2877")),c=Object(a["a"])(r,i,s,!1,null,"2b565ed6",null);e["default"]=c.exports},f97a:function(t,e,n){}}]);