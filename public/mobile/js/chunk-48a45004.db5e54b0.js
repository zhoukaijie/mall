(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48a45004"],{"2f21":function(t,e,r){"use strict";var s=r("79e5");t.exports=function(t,e){return!!t&&s((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"34eb":function(t,e,r){},"41a2":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"common-goods-list"},[r("div",{staticClass:"ui-goodslist-filter"},[r("ul",{staticClass:"filter-list"},t._l(t.sortkey,(function(e,s){return r("li",{key:e.id,staticClass:"item",class:{sortactive:e.id==t.currentSortKey.id,sortnormal:e.id!=t.currentSortKey.id},on:{click:function(r){return t.setActiveSortkey(e,s)}}},[e.isMore?r("a",[t._v(t._s(t.sort.name))]):r("a",[t._v(t._s(e.name))]),e.isMore?r("span",{staticClass:"iconfont",class:t.isShowMore?"active":""},[t._v("")]):t._e()])})),0),t.isShowMore?r("div",{staticClass:"sort-model"},t._l(t.childSort,(function(e,s){return r("div",{key:e.id,class:{active:e.id==t.sort.id},on:{click:function(r){return t.getSortChild(e)}}},[r("a",[t._v(t._s(e.name))]),e.id==t.sort.id?r("span",{staticClass:"iconfont"},[t._v("")]):t._e()])})),0):t._e()]),r("div",{staticClass:"goodslist-body show-goods-list"},[r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getMore,expression:"getMore"}],staticClass:"flex-wrapper",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[t._l(t.goodsList,(function(e,s){return r("div",{key:s,staticClass:"ui-product-body"},[r("div",{staticClass:"list",on:{click:function(r){return t.goDetail(e.goods_id)}}},[r("div",{staticClass:"ui-image-wrapper"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goods_image_url,expression:"item.goods_image_url"}],staticClass:"product-img"})]),r("div",{staticClass:"flex-right"},[r("div",{staticClass:"product-header"},[r("h3",{staticClass:"title clear-bottom",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.goods_name))])]),r("div",{staticClass:"p-price",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v("\n                            "+t._s(e.goods_price)+"\n                        ")]),r("div",{staticClass:"p-info"},[r("span",{staticClass:"platform_store"},[t._v("自营")]),r("span",{staticClass:"goods_salenum"},[t._v("销量:"+t._s(e.goods_salenum))])]),t._m(0,!0)])])])})),t.goodsList.length>0?r("div",{staticClass:"loading-wrapper"},[t.isMore?t._e():r("p",{staticClass:"common-no-more"},[t._v("没有更多了")]),t.isMore?r("mt-spinner",{attrs:{type:"triple-bounce",color:"#e93b3d"}}):t._e()],1):t._e(),t.goodsList.length<=0&&!t.isMore?r("empty-record"):t._e()],2)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-cart"},[r("i",{staticClass:"iconfont"},[t._v("")])])}],i=(r("8e6e"),r("ac6a"),r("456d"),r("55dd"),r("bd86")),n=r("ee53"),a=r("2f62"),c=r("e283");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"CommonGoodsList",props:[],components:{EmptyRecord:n["a"]},data:function(){return{sortkey:[{key:"",order:"",name:"综合排序",isMore:!0,id:0,child:[{key:"5",order:"",name:"综合排序",isMore:!1,id:3},{key:"4",order:"",name:"人气最高",isMore:!1,id:4},{key:"2",order:"",name:"价格高到低",isMore:!1,id:5},{key:"2",order:"1",name:"价格低到高",isMore:!1,id:6}]},{key:"3",order:"",name:"销量排序",isMore:!1,id:1},{key:"1",order:"",name:"新品",isMore:!1,id:2}],currentSortKey:{},childSort:[],sort:{},isShowMore:!1,params:{store_id:this.$route.query.id?this.$route.query.id:"",gc_id:this.$route.query.gc_id?this.$route.query.gc_id:"",is_exchange:0,is_hot:0,activity:null,sort_key:this.$route.query.sort_key?this.$route.query.sort_key:"",sort_order:this.$route.query.sort_order?this.$route.query.sort_order:"",page:0,keyword:this.$route.query.keyword?this.$route.query.keyword:""},goodsList:[],loading:!1,isMore:!0}},computed:u({},Object(a["d"])({})),created:function(){this.currentSortKey=this.sortkey[0],this.childSort=this.currentSortKey.child,this.sort=this.childSort[0]},methods:{closeFiler:function(){this.isShowMore=!1},isShowDroupMenu:function(){var t=this.currentSortKey;t.isMore?this.isShowMore=!0:this.isShowMore=!1},setActiveSortkey:function(t,e){this.currentSortKey=t,t.isMore?this.isShowMore=!this.isShowMore:(this.closeFiler(),this.getValue())},getValue:function(){var t=this.getSortValue(),e=t;this.params.page=1,this.goodsList=[],this.loading=!1,this.params=this.setParamsByData(e),this.getGoodsList()},getSortValue:function(){var t=this.currentSortKey,e={sort_key:"",sort_order:""};return t.isMore?(e.sort_key=this.sort.key,e.sort_order=this.sort.order):(e.sort_key=t.key,e.sort_order=t.order),e},getSortChild:function(t){this.sort=t,this.isShowMore=!this.isShowMore,this.getValue()},getMore:function(){this.loading=!0,this.params.page=++this.params.page,this.isMore&&(this.loading=!1,this.getGoodsList(!0))},getGoodsList:function(t){var e=this;Object(c["b"])(this.params).then((function(r){e.buildData(t,r)}))},buildData:function(t,e){e&&(this.goodsList=t?this.goodsList.concat(e.result.goods_list):e.result.goods_list,this.isMore=e.result.hasmore)},setParamsByData:function(t){var e=this.params;for(var r in e)for(var s in t)r===s&&(e[r]=t[s]);return e},goDetail:function(t){this.$router.push({name:"HomeGoodsdetail",query:{goods_id:t}})}}},h=l,_=(r("a021"),r("2877")),f=Object(_["a"])(h,s,o,!1,null,"0542824a",null);e["default"]=f.exports},"55dd":function(t,e,r){"use strict";var s=r("5ca1"),o=r("d8e8"),i=r("4bf8"),n=r("79e5"),a=[].sort,c=[1,2,3];s(s.P+s.F*(n((function(){c.sort(void 0)}))||!n((function(){c.sort(null)}))||!r("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(i(this)):a.call(i(this),o(t))}})},a021:function(t,e,r){"use strict";var s=r("34eb"),o=r.n(s);o.a},e283:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var s=r("366f"),o=function(t){return Object(s["a"])("/Membervoucher/voucher_point","POST",{tid:t},"member")},i=function(t,e){return Object(s["a"])("/Store/store_info","POST",{store_id:t,key:e})},n=function(t){return Object(s["a"])("/Store/store_goods_class","POST",{store_id:t})},a=function(t){return Object(s["a"])("/Store/store_goods","POST",{page:t.page,per_page:t.per_page,storegc_id:t.gc_id,keyword:t.keyword,store_id:t.store_id,sort_order:t.sort_order,sort_key:t.sort_key})}},ee53:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"common-empty-record"},[r("i",{staticClass:"iconfont"},[t._v("")]),r("p",[t._v("没有找到相关记录")])])}],i={name:"EmptyRecord",data:function(){return{}},props:{},methods:{}},n=i,a=r("2877"),c=Object(a["a"])(n,s,o,!1,null,null,null);e["a"]=c.exports}}]);