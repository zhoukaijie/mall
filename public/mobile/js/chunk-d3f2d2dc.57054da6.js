(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3f2d2dc"],{2706:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"common-header-wrap"},[n("mt-header",{staticClass:"common-header",attrs:{title:t.getTitle}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(e){return t.$router.go(-1)}},slot:"left"}),t.isAddMode?t._e():n("mt-button",{attrs:{slot:"right"},on:{click:t.onDelete},slot:"right"},[t._v("删除")])],1)],1),t.isAddMode?n("div",[n("div",{on:{click:function(e){t.popupSelect=!0}}},[n("mt-cell",{attrs:{title:t.getSelecedTitle}},[n("i",{staticClass:"iconfont"},[t._v("")])])],1),n("mt-popup",{staticClass:"common-popup-wrapper",attrs:{position:"right",modal:!1},model:{value:t.popupSelect,callback:function(e){t.popupSelect=e},expression:"popupSelect"}},[n("div",{staticClass:"common-header-wrap"},[n("mt-header",{staticClass:"common-header",attrs:{title:"选择商品"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){t.popupSelect=!1}},slot:"left"})],1)],1),n("div",{staticClass:"select-goods mt-5"},[n("ul",t._l(t.selectGoodsList,(function(e){return n("li",{key:e.goods_commonid,on:{click:function(n){return t.selectedGoods(e)}}},[n("div",{staticClass:"p-img"},[n("img",{attrs:{src:e.goods_image}})]),n("div",{staticClass:"p-info"},[n("p",{staticClass:"name"},[t._v(t._s(e.goods_name))]),n("p",{staticClass:"price"},[t._v(t._s(e.goods_price))])])])})),0)])])],1):n("div",[n("mt-cell",{attrs:{title:t.getSelecedTitle}})],1),n("mt-field",{attrs:{label:"1级佣金比例"},model:{value:t.goods.inviter_ratio_1,callback:function(e){t.$set(t.goods,"inviter_ratio_1",e)},expression:"goods.inviter_ratio_1"}}),n("mt-field",{attrs:{label:"2级佣金比例"},model:{value:t.goods.inviter_ratio_2,callback:function(e){t.$set(t.goods,"inviter_ratio_2",e)},expression:"goods.inviter_ratio_2"}}),n("mt-field",{attrs:{label:"3级佣金比例"},model:{value:t.goods.inviter_ratio_3,callback:function(e){t.$set(t.goods,"inviter_ratio_3",e)},expression:"goods.inviter_ratio_3"}}),n("mt-button",{staticClass:"ds-button-large",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)},i=[],s=(n("ceaa"),n("b2fb")),r=n.n(s),a=(n("b6ce"),n("5441")),c=n.n(a),l=(n("5fc6"),n("5af2")),d=n.n(l),u=n("2cb1"),p={name:"GoodsForm",data:function(){return{popupSelect:!1,selectGoodsList:[],selectGoodsName:"",goods:{goods_commonid:0,goods_name:"",inviter_ratio_1:"",inviter_ratio_2:"",inviter_ratio_3:""}}},created:function(){var t=this;this.isAddMode?this.getSelectGoodsList():(this.goods.goods_commonid=this.$route.query.goods_commonid,Object(u["d"])(this.goods.goods_commonid).then((function(e){t.goods=e.result.info})).catch((function(t){d()(t.message)})))},computed:{isAddMode:function(){var t=this.$route.query.action;return"add"===t},getTitle:function(){return this.isAddMode?"新增分销商品":"修改分销商品"},getSelecedTitle:function(){return this.goods.goods_commonid?this.goods.goods_name:"选择商品"}},methods:{onDelete:function(){var t=this;c.a.confirm("确定要取消该商品佣金设置吗？").then((function(e){Object(u["b"])(t.goods.goods_commonid).then((function(e){t.$router.push({name:"SellerInviterGoodsList"})}),(function(t){d()(t.message)}))}))},submit:function(){var t=this;this.isAddMode?(r.a.open(),Object(u["a"])(this.goods).then((function(e){r.a.close(),d()(e.message),t.$router.push({name:"SellerInviterGoodsList"})}),(function(t){r.a.close(),d()(t.message)}))):(r.a.open(),Object(u["c"])(this.goods).then((function(e){r.a.close(),d()(e.message),t.$router.push({name:"SellerInviterGoodsList"})}),(function(t){r.a.close(),d()(t.message)})))},getSelectGoodsList:function(){var t=this;Object(u["g"])(this.selectGoodsName).then((function(e){t.selectGoodsList=e.result.goods_list})).catch((function(t){d()(t.message)}))},selectedGoods:function(t){this.goods.goods_name=t.goods_name,this.goods.goods_commonid=t.goods_commonid,this.popupSelect=!1}}},f=p,_=(n("f7f0"),n("2877")),m=Object(_["a"])(f,o,i,!1,null,"13ff862e",null);e["default"]=m.exports},"2cb1":function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return d}));var o=n("366f"),i=function(t){return Object(o["a"])("/Sellerinviter/search_goods","POST",{goods_name:t,client_type:"wap"},"seller")},s=function(){return Object(o["a"])("/Sellerinviter/goods_list","POST",{},"seller")},r=function(t){return Object(o["a"])("/Sellerinviter/goods_add","POST",{inviter_goods_commonid:t.goods_commonid,inviter_ratio_1:t.inviter_ratio_1,inviter_ratio_2:t.inviter_ratio_2,inviter_ratio_3:t.inviter_ratio_3},"seller")},a=function(t){return Object(o["a"])("/Sellerinviter/goods_edit","POST",{inviter_goods_commonid:t.goods_commonid,inviter_ratio_1:t.inviter_ratio_1,inviter_ratio_2:t.inviter_ratio_2,inviter_ratio_3:t.inviter_ratio_3,client_type:"wap"},"seller")},c=function(t){return Object(o["a"])("/Sellerinviter/goods_info","POST",{goods_commonid:t,client_type:"wap"},"seller")},l=function(t){return Object(o["a"])("/Sellerinviter/goods_del","POST",{goods_commonid:t,client_type:"wap"},"seller")},d=function(t){return Object(o["a"])("/Sellerinviter/order_list","POST",{page:t.page,per_page:t.per_page,client_type:"wap"},"seller")}},"5af2":function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=242)}({0:function(t,e){t.exports=function(t,e,n,o,i){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var c,l="function"===typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o),i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(t,e){return c.call(e),u(t,e)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:s,exports:r,options:l}}},1:function(t,e){t.exports=n("2b0e")},101:function(t,e){},164:function(t,e,n){function o(t){n(101)}var i=n(0)(n(86),n(170),o,null,null);t.exports=i.exports},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"mint-toast-pop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"mint-toast",class:t.customClass,style:{padding:""===t.iconClass?"10px":"20px"}},[""!==t.iconClass?n("i",{staticClass:"mint-toast-icon",class:t.iconClass}):t._e(),t._v(" "),n("span",{staticClass:"mint-toast-text",style:{"padding-top":""===t.iconClass?"0":"10px"}},[t._v(t._s(t.message))])])])},staticRenderFns:[]}},242:function(t,e,n){t.exports=n(50)},50:function(t,e,n){"use strict";var o=n(94);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",(function(){return o["a"]}))},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var t=[];switch(this.position){case"top":t.push("is-placetop");break;case"bottom":t.push("is-placebottom");break;default:t.push("is-placemiddle")}return t.push(this.className),t.join(" ")}}}},94:function(t,e,n){"use strict";var o=n(1),i=n.n(o),s=i.a.extend(n(164)),r=[],a=function(){if(r.length>0){var t=r[0];return r.splice(0,1),t}return new s({el:document.createElement("div")})},c=function(t){t&&r.push(t)},l=function(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)};s.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",l),this.closed=!0,c(this)};var d=function(t){void 0===t&&(t={});var e=t.duration||3e3,n=a();return n.closed=!1,clearTimeout(n.timer),n.message="string"===typeof t?t:t.message,n.position=t.position||"middle",n.className=t.className||"",n.iconClass=t.iconClass||"",document.body.appendChild(n.$el),i.a.nextTick((function(){n.visible=!0,n.$el.removeEventListener("transitionend",l),~e&&(n.timer=setTimeout((function(){n.closed||n.close()}),e))})),n};e["a"]=d}})},"5fc6":function(t,e,n){},"9bef":function(t,e,n){},b2fb:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=221)}({0:function(t,e){t.exports=function(t,e,n,o,i){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var c,l="function"===typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o),i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(t,e){return c.call(e),u(t,e)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:s,exports:r,options:l}}},1:function(t,e){t.exports=n("2b0e")},122:function(t,e){},141:function(t,e,n){function o(t){n(122)}var i=n(0)(n(63),n(192),o,null,null);t.exports=i.exports},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"mint-indicator"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"mint-indicator"},[n("div",{staticClass:"mint-indicator-wrapper",style:{padding:t.text?"20px":"15px"}},[n("spinner",{staticClass:"mint-indicator-spin",attrs:{type:t.convertedSpinnerType,size:32}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.text,expression:"text"}],staticClass:"mint-indicator-text"},[t._v(t._s(t.text))])],1),t._v(" "),n("div",{staticClass:"mint-indicator-mask",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}})])])},staticRenderFns:[]}},205:function(t,e){t.exports=n("e8c9")},206:function(t,e){t.exports=n("c6f8")},221:function(t,e,n){t.exports=n(29)},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(1),s=n.n(i),r=s.a.extend(n(141));e["default"]={open:function(t){void 0===t&&(t={}),o||(o=new r({el:document.createElement("div")})),o.visible||(o.text="string"===typeof t?t:t.text||"",o.spinnerType=t.spinnerType||"snake",document.body.appendChild(o.$el),s.a.nextTick((function(){o.visible=!0})))},close:function(){o&&(o.visible=!1)}}},63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(205),i=n.n(o);n(206),e["default"]={data:function(){return{visible:!1}},components:{Spinner:i.a},computed:{convertedSpinnerType:function(){switch(this.spinnerType){case"double-bounce":return 1;case"triple-bounce":return 2;case"fading-circle":return 3;default:return 0}}},props:{text:String,spinnerType:{type:String,default:"snake"}}}}})},ceaa:function(t,e,n){},f7f0:function(t,e,n){"use strict";var o=n("9bef"),i=n.n(o);i.a}}]);