(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27ed7444"],{"5af2":function(e,i,n){e.exports=function(e){var i={};function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=i,n.i=function(e){return e},n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=242)}({0:function(e,i){e.exports=function(e,i,n,t,o){var c,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(c=e,r=e.default);var a,v="function"===typeof r?r.options:r;if(i&&(v.render=i.render,v.staticRenderFns=i.staticRenderFns),t&&(v._scopeId=t),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},v._ssrRegister=a):n&&(a=n),a){var u=v.functional,l=u?v.render:v.beforeCreate;u?v.render=function(e,i){return a.call(i),l(e,i)}:v.beforeCreate=l?[].concat(l,a):[a]}return{esModule:c,exports:r,options:v}}},1:function(e,i){e.exports=n("2b0e")},101:function(e,i){},164:function(e,i,n){function t(e){n(101)}var o=n(0)(n(86),n(170),t,null,null);e.exports=o.exports},170:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("transition",{attrs:{name:"mint-toast-pop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mint-toast",class:e.customClass,style:{padding:""===e.iconClass?"10px":"20px"}},[""!==e.iconClass?n("i",{staticClass:"mint-toast-icon",class:e.iconClass}):e._e(),e._v(" "),n("span",{staticClass:"mint-toast-text",style:{"padding-top":""===e.iconClass?"0":"10px"}},[e._v(e._s(e.message))])])])},staticRenderFns:[]}},242:function(e,i,n){e.exports=n(50)},50:function(e,i,n){"use strict";var t=n(94);Object.defineProperty(i,"__esModule",{value:!0}),n.d(i,"default",(function(){return t["a"]}))},86:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var e=[];switch(this.position){case"top":e.push("is-placetop");break;case"bottom":e.push("is-placebottom");break;default:e.push("is-placemiddle")}return e.push(this.className),e.join(" ")}}}},94:function(e,i,n){"use strict";var t=n(1),o=n.n(t),c=o.a.extend(n(164)),r=[],s=function(){if(r.length>0){var e=r[0];return r.splice(0,1),e}return new c({el:document.createElement("div")})},a=function(e){e&&r.push(e)},v=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};c.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",v),this.closed=!0,a(this)};var u=function(e){void 0===e&&(e={});var i=e.duration||3e3,n=s();return n.closed=!1,clearTimeout(n.timer),n.message="string"===typeof e?e:e.message,n.position=e.position||"middle",n.className=e.className||"",n.iconClass=e.iconClass||"",document.body.appendChild(n.$el),o.a.nextTick((function(){n.visible=!0,n.$el.removeEventListener("transitionend",v),~i&&(n.timer=setTimeout((function(){n.closed||n.close()}),i))})),n};i["a"]=u}})},"5d53":function(e,i,n){"use strict";var t=n("6895"),o=n.n(t);o.a},"5fc6":function(e,i,n){},6895:function(e,i,n){},b2fb:function(e,i,n){e.exports=function(e){var i={};function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=i,n.i=function(e){return e},n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=221)}({0:function(e,i){e.exports=function(e,i,n,t,o){var c,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(c=e,r=e.default);var a,v="function"===typeof r?r.options:r;if(i&&(v.render=i.render,v.staticRenderFns=i.staticRenderFns),t&&(v._scopeId=t),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},v._ssrRegister=a):n&&(a=n),a){var u=v.functional,l=u?v.render:v.beforeCreate;u?v.render=function(e,i){return a.call(i),l(e,i)}:v.beforeCreate=l?[].concat(l,a):[a]}return{esModule:c,exports:r,options:v}}},1:function(e,i){e.exports=n("2b0e")},122:function(e,i){},141:function(e,i,n){function t(e){n(122)}var o=n(0)(n(63),n(192),t,null,null);e.exports=o.exports},192:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("transition",{attrs:{name:"mint-indicator"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mint-indicator"},[n("div",{staticClass:"mint-indicator-wrapper",style:{padding:e.text?"20px":"15px"}},[n("spinner",{staticClass:"mint-indicator-spin",attrs:{type:e.convertedSpinnerType,size:32}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.text,expression:"text"}],staticClass:"mint-indicator-text"},[e._v(e._s(e.text))])],1),e._v(" "),n("div",{staticClass:"mint-indicator-mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault()}}})])])},staticRenderFns:[]}},205:function(e,i){e.exports=n("e8c9")},206:function(e,i){e.exports=n("c6f8")},221:function(e,i,n){e.exports=n(29)},29:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,o=n(1),c=n.n(o),r=c.a.extend(n(141));i["default"]={open:function(e){void 0===e&&(e={}),t||(t=new r({el:document.createElement("div")})),t.visible||(t.text="string"===typeof e?e:e.text||"",t.spinnerType=e.spinnerType||"snake",document.body.appendChild(t.$el),c.a.nextTick((function(){t.visible=!0})))},close:function(){t&&(t.visible=!1)}}},63:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=n(205),o=n.n(t);n(206),i["default"]={data:function(){return{visible:!1}},components:{Spinner:o.a},computed:{convertedSpinnerType:function(){switch(this.spinnerType){case"double-bounce":return 1;case"triple-bounce":return 2;case"fading-circle":return 3;default:return 0}}},props:{text:String,spinnerType:{type:String,default:"snake"}}}}})},ceaa:function(e,i,n){},eed3:function(e,i,n){"use strict";n.d(i,"e",(function(){return o})),n.d(i,"d",(function(){return c})),n.d(i,"a",(function(){return r})),n.d(i,"c",(function(){return s})),n.d(i,"b",(function(){return a}));var t=n("366f"),o=function(){return Object(t["a"])("/Memberinvoice/invoice_list","POST",{},"member")},c=function(e){return Object(t["a"])("/Memberinvoice/invoice_info","POST",{invoice_id:e},"member")},r=function(e){return Object(t["a"])("/Memberinvoice/invoice_add","POST",{invoice_state:e.invoice_state,invoice_title:e.invoice_title,invoice_code:e.invoice_code,invoice_content:e.invoice_content,invoice_company:e.invoice_company,invoice_company_code:e.invoice_company_code,invoice_reg_addr:e.invoice_reg_addr,invoice_reg_phone:e.invoice_reg_phone,invoice_reg_bname:e.invoice_reg_bname,invoice_reg_baccount:e.invoice_reg_baccount},"member")},s=function(e,i){return Object(t["a"])("/Memberinvoice/invoice_edit","POST",{invoice_id:i,invoice_state:e.invoice_state,invoice_title:e.invoice_title,invoice_code:e.invoice_code,invoice_content:e.invoice_content,invoice_company:e.invoice_company,invoice_company_code:e.invoice_company_code,invoice_reg_addr:e.invoice_reg_addr,invoice_reg_phone:e.invoice_reg_phone,invoice_reg_bname:e.invoice_reg_bname,invoice_reg_baccount:e.invoice_reg_baccount},"member")},a=function(e){return Object(t["a"])("/Memberinvoice/invoice_del","POST",{invoice_id:e},"member")}},f4c7:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"container"},[n("div",{staticClass:"common-header-wrap"},[n("mt-header",{staticClass:"common-header",attrs:{title:e.getTitle}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(i){return e.$router.go(-1)}},slot:"left"})],1)],1),n("mt-cell",{attrs:{title:"发票类型"}},[n("mt-radio",{staticClass:"page-part",attrs:{align:"left",options:e.invoice_state_options},model:{value:e.invoice.invoice_state,callback:function(i){e.$set(e.invoice,"invoice_state",i)},expression:"invoice.invoice_state"}})],1),n("mt-tab-container",{model:{value:e.invoice.invoice_state,callback:function(i){e.$set(e.invoice,"invoice_state",i)},expression:"invoice.invoice_state"}},[n("mt-tab-container-item",{attrs:{id:"1"}},[n("mt-field",{attrs:{label:"发票抬头"},model:{value:e.invoice.invoice_title,callback:function(i){e.$set(e.invoice,"invoice_title",i)},expression:"invoice.invoice_title"}}),n("mt-field",{attrs:{label:"纳税人识别号"},model:{value:e.invoice.invoice_code,callback:function(i){e.$set(e.invoice,"invoice_code",i)},expression:"invoice.invoice_code"}}),n("mt-field",{attrs:{label:"发票内容"},model:{value:e.invoice.invoice_content,callback:function(i){e.$set(e.invoice,"invoice_content",i)},expression:"invoice.invoice_content"}})],1),n("mt-tab-container-item",{attrs:{id:"2"}},[n("mt-field",{attrs:{label:"单位名称"},model:{value:e.invoice.invoice_company,callback:function(i){e.$set(e.invoice,"invoice_company",i)},expression:"invoice.invoice_company"}}),n("mt-field",{attrs:{label:"纳税人识别号"},model:{value:e.invoice.invoice_company_code,callback:function(i){e.$set(e.invoice,"invoice_company_code",i)},expression:"invoice.invoice_company_code"}}),n("mt-field",{attrs:{label:"注册地址"},model:{value:e.invoice.invoice_reg_addr,callback:function(i){e.$set(e.invoice,"invoice_reg_addr",i)},expression:"invoice.invoice_reg_addr"}}),n("mt-field",{attrs:{label:"注册电话"},model:{value:e.invoice.invoice_reg_phone,callback:function(i){e.$set(e.invoice,"invoice_reg_phone",i)},expression:"invoice.invoice_reg_phone"}}),n("mt-field",{attrs:{label:"开户银行"},model:{value:e.invoice.invoice_reg_bname,callback:function(i){e.$set(e.invoice,"invoice_reg_bname",i)},expression:"invoice.invoice_reg_bname"}}),n("mt-field",{attrs:{label:"银行帐户"},model:{value:e.invoice.invoice_reg_baccount,callback:function(i){e.$set(e.invoice,"invoice_reg_baccount",i)},expression:"invoice.invoice_reg_baccount"}})],1)],1),n("mt-button",{staticClass:"ds-button-large",attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.getSumitTitle))])],1)},o=[],c=(n("ceaa"),n("b2fb")),r=n.n(c),s=(n("5fc6"),n("5af2")),a=n.n(s),v=n("eed3"),u={name:"InvoiceForm",data:function(){return{invoice_state_options:[{label:"普通发票",value:"1"},{label:"增值税专用发票",value:"2"}],invoice_id:0,invoice:{invoice_state:"1",invoice_title:"",invoice_code:"",invoice_content:"",invoice_company:"",invoice_company_code:"",invoice_reg_addr:"",invoice_reg_phone:"",invoice_reg_bname:"",invoice_reg_baccount:""}}},created:function(){var e=this;this.isAddMode||(this.invoice_id=this.$route.query.invoice_id,Object(v["d"])(this.invoice_id).then((function(i){e.invoice.invoice_state=i.result.invoice_state,e.invoice.invoice_title=i.result.invoice_title,e.invoice.invoice_code=i.result.invoice_code,e.invoice.invoice_content=i.result.invoice_content,e.invoice.invoice_company=i.result.invoice_company,e.invoice.invoice_company_code=i.result.invoice_company_code,e.invoice.invoice_reg_addr=i.result.invoice_reg_addr,e.invoice.invoice_reg_phone=i.result.invoice_reg_phone,e.invoice.invoice_reg_bname=i.result.invoice_reg_bname,e.invoice.invoice_reg_baccount=i.result.invoice_reg_baccount})).catch((function(e){a()(e.message)})))},computed:{isAddMode:function(){var e=this.$route.query.action;return"add"===e},getTitle:function(){return this.isAddMode?"新增发票":"修改发票"},getSumitTitle:function(){var e=this.$route.query.isFromCheckout;return e?"保存并使用":"保存"}},methods:{goBack:function(){this.$router.go(-1)},submit:function(){var e=this;if("1"===this.invoice.invoice_state){if(""===this.invoice.invoice_title)return void a()("请填写发票抬头");if(""===this.invoice.invoice_code)return void a()("请填写纳税人识别号");if(""===this.invoice.invoice_content)return void a()("请填写发票内容")}if("2"===this.invoice.invoice_state){if(""===this.invoice.invoice_company)return void a()("请填写单位名称");if(""===this.invoice.invoice_company_code)return void a()("请填写纳税人识别号");if(""===this.invoice.invoice_reg_addr)return void a()("请填写注册地址");if(""===this.invoice.invoice_reg_phone)return void a()("请填写注册电话");if(""===this.invoice.invoice_reg_bname)return void a()("请填写开户银行");if(""===this.invoice.invoice_reg_baccount)return void a()("请填写银行帐户")}this.isAddMode?(r.a.open(),Object(v["a"])(this.invoice).then((function(i){r.a.close(),e.updateSelectedInvoice()}),(function(e){r.a.close(),a()(e.message)}))):(r.a.open(),Object(v["c"])(this.invoice,this.invoice_id).then((function(i){r.a.close(),e.updateSelectedInvoice()}),(function(e){r.a.close(),a()(e.message)})))},updateSelectedInvoice:function(){var e=this.$route.query.isFromCheckout,i=this.$route.query.goBackLevel?this.$route.query.goBackLevel:-1;e?this.$router.go(i):this.goBack()}}},l=u,d=(n("5d53"),n("2877")),_=Object(d["a"])(l,t,o,!1,null,"465c056d",null);i["default"]=_.exports}}]);