(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{534:function(t,e,o){},749:function(t,e,o){"use strict";var n=o(534);o.n(n).a},764:function(t,e,o){"use strict";o.r(e);o(22),o(51);var n=o(6),r=o(0).a.extend({layout:"home",data:function(){return{motto:"",author:""}},mounted:function(){this.fetchMotto()},methods:{fetchMotto:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,code,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("index"!==t.$route.name){e.next=8;break}return o=Math.ceil(45*Math.random()),e.next=4,t.$axios.$get("https://v1.alapi.cn/api/mingyan?typeid=".concat(o));case 4:n=e.sent,code=n.code,data=n.data,200===code?(t.motto="".concat(data.content),t.author="— ".concat(data.author)):(t.motto="First, solve the problem. Then, write the code.",t.author="— John Johnson");case 8:setTimeout(t.fetchMotto,15e3);case 9:case"end":return e.stop()}}),e)})))()}}}),c=(o(749),o(27)),h=o(35),l=o.n(h),m=o(494),f=o(495),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("nuxt-link",{staticClass:"noDecoration",attrs:{to:"/posts"}},[e("blockquote",{staticClass:"motto"},[this._v("\n        "+this._s(this.motto)+"\n        "),e("footer",[e("small",[e("em",[this._v(this._s(this.author))])])])])])],1)],1)}),[],!1,null,"5f93e4e4",null);e.default=component.exports;l()(component,{VCol:m.a,VRow:f.a})}}]);