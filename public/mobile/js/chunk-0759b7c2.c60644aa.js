(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0759b7c2"],{"3c89":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.ad?t("div",{staticClass:"floor-ad"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.ad.adv_code,expression:"ad.adv_code"}],on:{click:function(a){return e.goAdUrl(e.ad)}}})]):e._e()},o=[],d={name:"IndexFloorAds",data:function(){return{}},props:["ad"],methods:{goAdUrl:function(e){switch(e.adv_type){case"goods":this.$router.push({name:"HomeGoodsdetail",query:{goods_id:e.adv_typedate}});break;case"store":this.$router.push({name:"HomeStoredetail",query:{id:e.adv_typedate}});break;case"article":this.$router.push({name:"HomeArticledetail",query:{article_id:e.adv_typedate}});break;case"url":window.location.href=e.adv_typedate;break}}}},n=d,i=(t("af44"),t("2877")),s=Object(i["a"])(n,r,o,!1,null,"68186a06",null);a["default"]=s.exports},af44:function(e,a,t){"use strict";var r=t("f97a"),o=t.n(r);o.a},f97a:function(e,a,t){}}]);