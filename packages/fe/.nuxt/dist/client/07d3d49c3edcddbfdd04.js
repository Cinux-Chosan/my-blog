(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{478:function(t,e,n){},480:function(t,e,n){},683:function(t,e,n){"use strict";var o=n(478);n.n(o).a},694:function(t,e,n){"use strict";var o=n(480);n.n(o).a},708:function(t,e,n){"use strict";n.r(e);n(30),n(15),n(21);var o=n(2),r=(n(10),n(4),n(32),n(18)),c=(n(49),n(6)),l=n(0),v={data:function(){return{fab:!1,fling:!1,hover:!0,tabs:null,top:!1,right:!0,bottom:!0,left:!1,transition:"slide-y-reverse-transition"}}},d=(n(683),n(26)),f=n(33),m=n.n(f),h=n(714),_=n(466),x=n(718),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dial"},[n("v-speed-dial",{attrs:{top:t.top,bottom:t.bottom,right:t.right,left:t.left,direction:"top","open-on-hover":t.hover,transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",[t._v("mdi-close")]):n("v-icon",[t._v("mdi-tools")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:function(e){return t.$emit("save")}}},[n("v-icon",[t._v("mdi-content-save")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(e){return t.$emit("extra")}}},[n("v-icon",[t._v("mdi-palette")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:function(e){return t.$emit("del")}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)}),[],!1,null,"337575fa",null),y=component.exports;m()(component,{VBtn:h.a,VIcon:_.a,VSpeedDial:x.a});var w={props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:!1,sound:!0,widgets:!1}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},O=n(628),k=n(716),j=n(713),V=n(638),$=n(629),P=n(475),C=n(631),S=n(448),D=n(442),T=n(706),E=n(639),R=n(626),I=n(461),L=Object(d.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("input",!1)}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Settings")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Save")])],1)],1),t._v(" "),n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-subheader",[t._v("User Controls")]),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Content filtering")]),t._v(" "),n("v-list-item-subtitle",[t._v("Set the content filtering level to restrict apps that can be\n              downloaded")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Password")]),t._v(" "),n("v-list-item-subtitle",[t._v("Require password for purchase or use password to restrict\n              purchase")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-subheader",[t._v("General")]),t._v(" "),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{model:{value:t.notifications,callback:function(e){t.notifications=e},expression:"notifications"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Notifications")]),t._v(" "),n("v-list-item-subtitle",[t._v("Notify me about updates to apps or games that I\n              downloaded")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{model:{value:t.sound,callback:function(e){t.sound=e},expression:"sound"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Sound")]),t._v(" "),n("v-list-item-subtitle",[t._v("Auto-update apps at any time. Data charges may\n              apply")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{model:{value:t.widgets,callback:function(e){t.widgets=e},expression:"widgets"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Auto-add widgets")]),t._v(" "),n("v-list-item-subtitle",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),A=L.exports;m()(L,{VBtn:h.a,VCard:O.a,VCheckbox:k.a,VDialog:j.a,VDivider:V.a,VIcon:_.a,VList:$.a,VListItem:P.a,VListItemAction:C.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRow:D.a,VSpacer:T.a,VSubheader:E.a,VToolbar:R.a,VToolbarItems:I.a,VToolbarTitle:I.b});n(12),n(13);var H={model:{prop:"value",event:"change"},props:{tags:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},data:function(){return{activator:null,attach:null,colors:["green","purple","indigo","cyan","teal","orange"],editing:null,index:-1,nonce:0,menu:!1,model:[],search:null,x:0,y:0}},computed:{proxyTags:function(){var t=this.tags,e=this.colors,n=0;return t.map((function(t){return n%=e.length,{text:t.text,color:e[n++]}}))},proxyModel:{get:function(){return(0,this.setColor)(this.value)},set:function(t){var e=this,n=this.setColor;t=t.map((function(t){if("string"==typeof t){var o=n([{text:t}]);t=Object(r.a)(o,1)[0],e.$emit("add",t)}return t})),this.$emit("change",t)}}},methods:{setColor:function(t){var e=this.getColor;return t.forEach((function(t){return Object.assign(t,{color:t.color||e()})})),t},getColor:function(){var t=this.colors,e=this.nonce;return this.nonce=e%t.length+1,t[e]},edit:function(t,e){this.editing?(this.editing=null,this.index=-1):(this.editing=e,this.index=t)},filter:function(t,e,n){if(t.header)return!1;var o=function(t){return null!=t?t:""},text=o(t.text),r=o(e);return text.toString().toLowerCase().indexOf(r.toString().toLowerCase())>-1}}},B=n(617),M=n(719),J=n(482),F=Object(d.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-combobox",{attrs:{filter:t.filter,"hide-no-data":!t.search,items:t.proxyTags,"search-input":t.search,"hide-selected":"",label:"Search for a tag",multiple:"",dense:"","small-chips":"","solo-inverted":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("span",{staticClass:"subheading mr-2"},[t._v("Create tag:")]),t._v(" "),n("v-chip",{attrs:{color:t.colors[t.nonce-1]+" lighten-3",label:"",small:""}},[t._v(t._s(t.search))]),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("(Press Enter)")])],1)]},proxy:!0},{key:"selection",fn:function(e){var o=e.attrs,r=e.item,c=e.parent,l=e.selected;return[n("v-chip",t._b({attrs:{color:r.color+" lighten-3","input-value":l,label:"",small:""}},"v-chip",o,!1),[n("span",{staticClass:"pr-2"},[t._v(t._s(r.text))]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return c.selectItem(r)}}},[t._v("mdi-close")])],1)]}},{key:"item",fn:function(e){var o=e.index,r=e.item;return[t.editing===r?n("v-text-field",{attrs:{autofocus:"",flat:"","background-color":"transparent","hide-details":"",solo:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.edit(o,r)}},model:{value:t.editing.text,callback:function(e){t.$set(t.editing,"text",e)},expression:"editing.text"}}):n("v-chip",{attrs:{color:r.color+" lighten-3",dark:"",label:"",small:""}},[t._v(t._s(r.text))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-list-item-action",{staticClass:"flex-row",on:{click:function(t){t.stopPropagation()}}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.edit(o,r)}}},[n("v-icon",[t._v(t._s(t.editing!==r?"mdi-pencil":"mdi-check"))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.$emit("del",r)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)]}}]),model:{value:t.proxyModel,callback:function(e){t.proxyModel=e},expression:"proxyModel"}})}),[],!1,null,null,null),G=F.exports;m()(F,{VBtn:h.a,VChip:B.a,VCombobox:M.a,VIcon:_.a,VListItem:P.a,VListItemAction:C.a,VSpacer:T.a,VTextField:J.a});var N=n(96);function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function Y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=l.a.extend({name:"post",props:{post:{type:Object,default:function(){return{}}}},data:function(){return{editorOptions:Y({minHeight:"500px"},l.a.editorOptions)}},computed:{id:function(){var t=this.$route.params.id,e=void 0===t?"":t;return e}},methods:{getPost:function(){return this.$refs.editor.invoke("getMarkdown")},getHtml:function(){return this.$refs.editor.invoke("getHtml")},save:function(){this.post;var t=this.getPost,e=this.getHtml;return{content:t(),html:e()}}}}),K=n(441),Q=Object(d.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{staticClass:"flex-column"},[e("v-col",[e("editor",{ref:"editor",attrs:{height:"auto",options:this.editorOptions,initialValue:this.post.content}})],1)],1)}),[],!1,null,null,null),W=Q.exports;m()(Q,{VCol:K.a,VRow:D.a});var X={name:"topic",components:{post:W},props:{post:{type:Object,default:function(){return{}}}},methods:{save:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.editor.save();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}}},Z=Object(d.a)(X,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{cols:12}},[this._v("\n    自定义区：选择专题子文章\n  ")]),this._v(" "),e("v-col",[e("post",{ref:"editor",attrs:{post:this.post}})],1)],1)}),[],!1,null,null,null),tt=Z.exports;m()(Z,{VCol:K.a,VRow:D.a});var et={name:"topicPost",components:{post:W},props:{post:{type:Object,default:function(){return{}}}},methods:{save:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.editor.save();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}}},nt=Object(d.a)(et,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{cols:12}},[this._v("\n    自定义区：选择属于哪个专题\n  ")]),this._v(" "),e("v-col",[e("post",{ref:"editor",attrs:{post:this.post}})],1)],1)}),[],!1,null,null,null),ot=nt.exports;function at(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function st(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?at(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):at(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}m()(nt,{VCol:K.a,VRow:D.a});var it=l.a.extend({layout:"edit",components:{Dial:y,TagSelector:G,DialogEdit:A,Post:W,Topic:tt,TopicPost:ot},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,v,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,t.$api,t.api,o=t.app,!(c=n.id)){e.next=10;break}return e.next=5,o.$axios.$get("/posts/".concat(c));case 5:return l=e.sent,v=Object(r.a)(l.posts,1),d=v[0],f=void 0===d?{}:d,e.abrupt("return",{post:f});case 10:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,v,d,f,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,o=t.app,c=o.$axios.$get,l=c("/tags"),v=c("/posts/types"),e.next=6,Promise.all([l,v]);case 6:d=e.sent,f=Object(r.a)(d,2),m=f[0],h=f[1],n.commit("tags/SAVE_TAGS",m),n.commit("posts/SAVE_TYPES",h);case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{showDialog:!1,editorOptions:st({minHeight:"500px"},l.a.editorOptions),post:{tags:[],title:"",content:"",html:"",summary:""}}},computed:st(st(st({},Object(N.d)("tags",["tags"])),Object(N.d)("posts",["typeList"])),{},{id:function(){var t=this.$route.params.id,e=void 0===t?"":t;return e}}),methods:st(st({},Object(N.b)("tags",["addTag","delTag","getTags"])),{},{save:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.post,t.getPost,t.getHtml,o=t.id,r=t.$axios,c=t.$router,l=t.$refs,e.next=3,l.editor.save();case 3:return v=e.sent,e.next=6,r.$post("posts/".concat(o),st(st({},n),v));case 6:(d=e.sent)&&c.push({params:{id:d}});case 8:case"end":return e.stop()}}),e)})))()},del:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.title,t.getPost,n=t.id,o=t.$axios,e.next=3,o.$delete("posts/".concat(n));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},openDialog:function(){this.showDialog=!0}})}),ct=(n(694),n(643)),lt=n(707),ut=Object(d.a)(it,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"contentBg flex-column"},[n("v-col",{staticClass:"commonArea",attrs:{cols:10,offset:1}},[n("v-row",[n("v-col",{attrs:{cols:4}},[n("v-select",{attrs:{"hide-details":"",items:t.typeList,label:"文章类型"},model:{value:t.post.type,callback:function(e){t.$set(t.post,"type",e)},expression:"post.type"}})],1),t._v(" "),n("v-col",{attrs:{cols:8}},[n("v-text-field",{attrs:{label:"输入标题","hide-details":""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:4}},[n("v-textarea",{attrs:{counter:"150",outlined:"",label:"文章概要"},model:{value:t.post.summary,callback:function(e){t.$set(t.post,"summary",e)},expression:"post.summary"}})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:10,offset:1}},[n(t.post.type||"post",{ref:"editor",tag:"component",attrs:{post:t.post}})],1),t._v(" "),n("v-col",{attrs:{cols:10,offset:1}},[n("tag-selector",{attrs:{tags:t.tags},on:{add:t.addTag,del:t.delTag},model:{value:t.post.tags,callback:function(e){t.$set(t.post,"tags",e)},expression:"post.tags"}})],1),t._v(" "),n("v-col",{attrs:{cols:10,offset:1}},[n("v-row",[n("v-col",{attrs:{cols:6}},[n("v-textarea",{attrs:{outlined:"",label:"附加 JavaScript"},model:{value:t.post.script,callback:function(e){t.$set(t.post,"script",e)},expression:"post.script"}})],1),t._v(" "),n("v-col",{attrs:{cols:6}},[n("v-textarea",{attrs:{outlined:"",label:"附加 CSS"},model:{value:t.post.css,callback:function(e){t.$set(t.post,"css",e)},expression:"post.css"}})],1)],1)],1),t._v(" "),n("dial",{on:{save:t.save,del:t.del,extra:t.openDialog}}),t._v(" "),n("dialog-edit",{model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,"62039f26",null);e.default=ut.exports;m()(ut,{VCol:K.a,VRow:D.a,VSelect:ct.a,VTextField:J.a,VTextarea:lt.a})}}]);