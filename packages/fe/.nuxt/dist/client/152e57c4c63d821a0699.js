(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{540:function(t,e,o){},753:function(t,e,o){"use strict";var n=o(540);o.n(n).a},769:function(t,e,o){"use strict";o.r(e);o(23),o(54);var n=o(7),r=(o(41),o(0).a.extend({layout:"home",beforeCreate:function(){this.$router.replace({path:"/posts?page=1"})},data:function(){return{motto:"",author:""}},mounted:function(){this.fetchMotto()},methods:{fetchMotto:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,code,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("index"!==t.$route.name){e.next=8;break}return o=Math.ceil(45*Math.random()),e.next=4,t.$axios.$get("https://v1.alapi.cn/api/mingyan?typeid=".concat(o));case 4:n=e.sent,code=n.code,data=n.data,200===code?(t.motto="".concat(data.content),t.author="— ".concat(data.author)):(t.motto="First, solve the problem. Then, write the code.",t.author="— John Johnson");case 8:setTimeout(t.fetchMotto,15e3);case 9:case"end":return e.stop()}}),e)})))()}}})),c=(o(753),o(28)),h=o(37),l=o.n(h),f=o(507),m=o(509),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("nuxt-link",{staticClass:"noDecoration",attrs:{to:"/posts"}},[e("blockquote",{staticClass:"motto"},[this._v("\n        "+this._s(this.motto)+"\n        "),e("footer",[e("small",[e("em",[this._v(this._s(this.author))])])])])])],1)],1)}),[],!1,null,"0f8108f9",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:m.a})}}]);