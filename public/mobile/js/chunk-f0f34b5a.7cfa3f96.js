(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0f34b5a"],{"20a3":function(t,e,a){},"3f9c":function(t,e,a){"use strict";var n=a("20a3"),s=a.n(n);s.a},"89ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui-review-list"},t._l(t.list,(function(e,n){return a("div",{staticClass:"list"},[a("div",{staticClass:"content"},[a("span",[t._v("\n\t\t\t\t\t"+t._s(t.utils.replaceStr(e.author.username))+"\n\t\t\t\t\t"),a("span",{class:{"good-review":3==e.grade,"medium-review":2==e.grade,"bad-review":1==e.grade}},[t._v(t._s(t.getGrade(e.grade)))])]),a("span",[t._v(t._s(t.getTime(e.created_at)))])]),e.content?a("p",[t._v(t._s(e.content))]):t._e(),e.content?t._e():a("p",[t._v("无评价信息")]),e.geval_explain?a("div",{staticClass:"explain"},[a("div",{staticClass:"title"},[t._v("掌柜回复")]),a("div",{staticClass:"mt-5"},[t._v(t._s(e.geval_explain))])]):t._e()])})),0)},s=[],i={data:function(){return{}},props:["list"],created:function(){},methods:{getGrade:function(t){return 1==t?"差评":2==t?"中评":"好评"},getTime:function(t){var e=new Date(1e3*t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate();return a+"-"+n+"-"+s}}},r=i,c=(a("3f9c"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,null,null);e["default"]=l.exports}}]);