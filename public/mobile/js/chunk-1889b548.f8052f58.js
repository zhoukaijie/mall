(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1889b548"],{"085e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-article"},[t._m(0),i("ul",{staticClass:"scroll-content",style:{top:t.top}},t._l(t.items,(function(e,n){return i("li",{key:n,on:{click:function(i){return t.goArticleDetail(e)}}},[t._v("\n            "+t._s(e.article_title)+"\n        ")])})),0),i("em",{staticClass:"more",on:{click:function(e){return t.goHomeArticlelist("1")}}},[t._v("更多")])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("em",{staticClass:"title"},[i("span",{staticStyle:{color:"#000"}},[t._v("最新")]),t._v("资讯")])}],r={name:"IndexArticle",data:function(){return{activeIndex:0}},props:["items"],computed:{top:function(){return 2*-this.activeIndex+"rem"}},beforeDestroy:function(){clearInterval(this.time_interval)},mounted:function(){var t=this;this.time_interval=setInterval((function(){t.activeIndex<t.items.length-1?t.activeIndex+=1:t.activeIndex=0}),2e3)},methods:{goHomeArticlelist:function(t){this.$router.push({name:"HomeArticlelist",query:{ac_id:t}})},goArticleDetail:function(t){this.$router.push({name:"HomeArticledetail",query:{article_id:t.article_id}})}}},l=r,s=(i("629d"),i("2877")),a=Object(s["a"])(l,n,c,!1,null,"4bb288ac",null);e["default"]=a.exports},"629d":function(t,e,i){"use strict";var n=i("6655"),c=i.n(n);c.a},6655:function(t,e,i){}}]);