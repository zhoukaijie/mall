(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411ba493"],{"30d6":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mt-popup",{attrs:{position:"bottom"},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[n("mt-picker",{ref:"picker",staticClass:"picker",attrs:{slots:e.buildItems,valueKey:"area_name",showToolbar:"",itemHeight:44},on:{change:e.onValuesChange}},[n("div",{staticClass:"toolbar"},[n("button",{staticClass:"toolbar-item cancel-item",on:{click:e.cancel}},[e._v("取消")]),n("div",{staticClass:"picker-header"},[e._v("请选择地区")]),n("button",{staticClass:"toolbar-item confirm-item",on:{click:e.confirm}},[e._v("确定")])])])],1)},i=[],r=(n("5fc6"),n("5af2")),a=n.n(r),o=n("366f"),d=function(){return Object(o["a"])("/Area/area_app","POST",{})},c={name:"RegionPicker",props:{modal:{default:!0},modalFade:{default:!1},lockScroll:{default:!1},closeOnClickModal:{default:!0}},data:function(){return{currentValue:!1,items:!1}},created:function(){var e=this;d().then((function(t){e.items=t.result.area_list})).catch((function(e){a()(e.message)}))},computed:{buildItems:function(){if(!this.items)return[];var e=new Array;return this.getDefaultItems(this.items,e),e}},methods:{getDefaultItems:function(e,t){if(e[0].child&&e[0].child.length>0){t&&0==t.length?(t.push({flex:1,values:e,textAlign:"center"}),this.getDefaultItems(e,t)):t&&t.length>0&&(t.push({flex:1,values:e[0].child,textAlign:"center"}),this.getDefaultItems(e[0].child,t))}},onValuesChange:function(e,t){e.setSlotValues(1,t[0]?t[0].child:[]),e.setSlotValues(2,t[1]?t[1].child:[]),e.setSlotValues(3,t[2]?t[2].child:[])},onclickMask:function(){this.currentValue=!1},cancel:function(){this.currentValue=!1},confirm:function(){this.currentValue=!1;var e=this.$refs.picker.getValues();this.$emit("onConfirm",e)}}},l=c,u=(n("c2dc"),n("2877")),f=Object(u["a"])(l,s,i,!1,null,"7f4d8173",null);t["a"]=f.exports},"4e16":function(e,t,n){"use strict";var s=n("8d15"),i=n.n(s);i.a},"5af2":function(e,t,n){e.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=242)}({0:function(e,t){e.exports=function(e,t,n,s,i){var r,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,a=e.default);var d,c="function"===typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),s&&(c._scopeId=s),i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):n&&(d=n),d){var l=c.functional,u=l?c.render:c.beforeCreate;l?c.render=function(e,t){return d.call(t),u(e,t)}:c.beforeCreate=u?[].concat(u,d):[d]}return{esModule:r,exports:a,options:c}}},1:function(e,t){e.exports=n("2b0e")},101:function(e,t){},164:function(e,t,n){function s(e){n(101)}var i=n(0)(n(86),n(170),s,null,null);e.exports=i.exports},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"mint-toast-pop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mint-toast",class:e.customClass,style:{padding:""===e.iconClass?"10px":"20px"}},[""!==e.iconClass?n("i",{staticClass:"mint-toast-icon",class:e.iconClass}):e._e(),e._v(" "),n("span",{staticClass:"mint-toast-text",style:{"padding-top":""===e.iconClass?"0":"10px"}},[e._v(e._s(e.message))])])])},staticRenderFns:[]}},242:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";var s=n(94);Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",(function(){return s["a"]}))},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var e=[];switch(this.position){case"top":e.push("is-placetop");break;case"bottom":e.push("is-placebottom");break;default:e.push("is-placemiddle")}return e.push(this.className),e.join(" ")}}}},94:function(e,t,n){"use strict";var s=n(1),i=n.n(s),r=i.a.extend(n(164)),a=[],o=function(){if(a.length>0){var e=a[0];return a.splice(0,1),e}return new r({el:document.createElement("div")})},d=function(e){e&&a.push(e)},c=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};r.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",c),this.closed=!0,d(this)};var l=function(e){void 0===e&&(e={});var t=e.duration||3e3,n=o();return n.closed=!1,clearTimeout(n.timer),n.message="string"===typeof e?e:e.message,n.position=e.position||"middle",n.className=e.className||"",n.iconClass=e.iconClass||"",document.body.appendChild(n.$el),i.a.nextTick((function(){n.visible=!0,n.$el.removeEventListener("transitionend",c),~t&&(n.timer=setTimeout((function(){n.closed||n.close()}),t))})),n};t["a"]=l}})},"5fc6":function(e,t,n){},"8d15":function(e,t,n){},"96a5":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var s=n("366f"),i=function(){return Object(s["a"])("/Selleraddress/address_list","POST",{},"seller")},r=function(e){return Object(s["a"])("/Selleraddress/address_info","POST",{address_id:e},"seller")},a=function(e,t){return Object(s["a"])("/Selleraddress/address_add","POST",{address_id:t,seller_name:e.seller_name,area_id:e.area_id,city_id:e.city_id,area_info:e.area_info,address:e.daddress_detail,telphone:e.daddress_telphone,is_default:e.daddress_isdefault},"seller")},o=function(e){return Object(s["a"])("/Selleraddress/address_del","POST",{address_id:e},"seller")}},b2fb:function(e,t,n){e.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=221)}({0:function(e,t){e.exports=function(e,t,n,s,i){var r,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,a=e.default);var d,c="function"===typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),s&&(c._scopeId=s),i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):n&&(d=n),d){var l=c.functional,u=l?c.render:c.beforeCreate;l?c.render=function(e,t){return d.call(t),u(e,t)}:c.beforeCreate=u?[].concat(u,d):[d]}return{esModule:r,exports:a,options:c}}},1:function(e,t){e.exports=n("2b0e")},122:function(e,t){},141:function(e,t,n){function s(e){n(122)}var i=n(0)(n(63),n(192),s,null,null);e.exports=i.exports},192:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"mint-indicator"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mint-indicator"},[n("div",{staticClass:"mint-indicator-wrapper",style:{padding:e.text?"20px":"15px"}},[n("spinner",{staticClass:"mint-indicator-spin",attrs:{type:e.convertedSpinnerType,size:32}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.text,expression:"text"}],staticClass:"mint-indicator-text"},[e._v(e._s(e.text))])],1),e._v(" "),n("div",{staticClass:"mint-indicator-mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault()}}})])])},staticRenderFns:[]}},205:function(e,t){e.exports=n("e8c9")},206:function(e,t){e.exports=n("c6f8")},221:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=n(1),r=n.n(i),a=r.a.extend(n(141));t["default"]={open:function(e){void 0===e&&(e={}),s||(s=new a({el:document.createElement("div")})),s.visible||(s.text="string"===typeof e?e:e.text||"",s.spinnerType=e.spinnerType||"snake",document.body.appendChild(s.$el),r.a.nextTick((function(){s.visible=!0})))},close:function(){s&&(s.visible=!1)}}},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(205),i=n.n(s);n(206),t["default"]={data:function(){return{visible:!1}},components:{Spinner:i.a},computed:{convertedSpinnerType:function(){switch(this.spinnerType){case"double-bounce":return 1;case"triple-bounce":return 2;case"fading-circle":return 3;default:return 0}}},props:{text:String,spinnerType:{type:String,default:"snake"}}}}})},be59:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"common-header-wrap"},[n("mt-header",{staticClass:"common-header",attrs:{title:e.getTitle}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.goBack},slot:"left"})],1)],1),n("mt-field",{attrs:{label:"联系人"},model:{value:e.address_info.seller_name,callback:function(t){e.$set(e.address_info,"seller_name",t)},expression:"address_info.seller_name"}}),n("mt-field",{attrs:{label:"手机"},model:{value:e.address_info.daddress_telphone,callback:function(t){e.$set(e.address_info,"daddress_telphone",t)},expression:"address_info.daddress_telphone"}}),n("mt-cell",{attrs:{title:"地区"}},[n("div",{on:{click:e.onRegion}},[n("span",[e._v(e._s(e.address_info.area_info))]),n("span",{staticClass:"iconfont right-arrow"},[e._v("")])])]),n("mt-field",{attrs:{label:"地址"},model:{value:e.address_info.daddress_detail,callback:function(t){e.$set(e.address_info,"daddress_detail",t)},expression:"address_info.daddress_detail"}}),n("mt-cell",{attrs:{title:"默认地址"}},[n("mt-switch",{model:{value:e.address_info.daddress_isdefault,callback:function(t){e.$set(e.address_info,"daddress_isdefault",t)},expression:"address_info.daddress_isdefault"}})],1),n("mt-button",{staticClass:"ds-button-large",attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.getSumitTitle))]),n("region-picker",{ref:"picker",on:{onConfirm:e.onPickerConfirm}})],1)},i=[],r=(n("ceaa"),n("b2fb")),a=n.n(r),o=(n("5fc6"),n("5af2")),d=n.n(o),c=n("30d6"),l=n("96a5"),u={components:{RegionPicker:c["a"]},computed:{isAddMode:function(){var e=this.$route.query.action;return"add"===e},getTitle:function(){return this.isAddMode?"新增地址":"修改发货地址"},getSumitTitle:function(){var e=this.$route.query.isFromCheckout;return e?"保存并使用":"保存"}},data:function(){return{popMap:!1,address_id:0,address_info:{seller_name:"",daddress_telphone:"",daddress_detail:"",daddress_isdefault:!0,area_info:"请选择地区",city_id:0,area_id:0}}},created:function(){var e=this;this.isAddMode||(this.address_id=this.$route.query.address_id,Object(l["c"])(this.address_id).then((function(t){e.address_info=t.result.address_info,"1"===t.result.address_info.daddress_isdefault?e.address_info.daddress_isdefault=!0:e.address_info.daddress_isdefault=!1})).catch((function(e){d()(e.message)})))},methods:{goBack:function(){this.$router.go(-1)},submit:function(){var e=this;""!==this.address_info.seller_name?this.address_info.seller_name.length<2||this.address_info.seller_name.length>15?d()("2-15个字符限制"):""!==this.address_info.daddress_telphone?0!==this.address_info.area_id&&void 0!==this.address_info.area_id?""!==this.address_info.daddress_detail?(a.a.open(),Object(l["b"])(this.address_info,this.isAddMode?0:this.address_id).then((function(t){a.a.close(),e.updateSelectedAddress()}),(function(e){a.a.close(),d()(e.message)}))):d()("请填写详细地址"):d()("请选择所在地区"):d()("请填写手机号码"):d()("请填写联系人姓名")},onRegion:function(e,t){this.$refs.picker.currentValue=!0},onPickerConfirm:function(e){this.address_info.area_info=this.getRegionStr(e),this.address_info.area_id=e[2].area_id,this.address_info.city_id=e[1].area_id},getRegionStr:function(e){for(var t="",n=0;n<e.length;n++){var s=e[n];0!==n?t=t+" "+s.area_name:t+=s.area_name}return t},updateSelectedAddress:function(){var e=this.$route.query.isFromCheckout,t=this.$route.query.goBackLevel?this.$route.query.goBackLevel:-1;e?this.$router.go(t):this.goBack()}}},f=u,p=(n("4e16"),n("2877")),_=Object(p["a"])(f,s,i,!1,null,"1e3e19b6",null);t["default"]=_.exports},c2dc:function(e,t,n){"use strict";var s=n("eb38"),i=n.n(s);i.a},ceaa:function(e,t,n){},eb38:function(e,t,n){}}]);