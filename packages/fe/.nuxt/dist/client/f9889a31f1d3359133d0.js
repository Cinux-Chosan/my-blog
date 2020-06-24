(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{446:function(e,t,r){"use strict";r(30),r(15),r(10),r(21),r(12),r(13),r(4),r(50);var n=r(18),o=r(2),_=r(0),c=r(31),l=r(46);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=_.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(c.b)("style must be an object",this),data):"string"==typeof data.class?(Object(c.b)("class must be an object",this),data):(Object(l.d)(e)?data.style=f(f({},data.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(data.class=f(f({},data.class),{},Object(o.a)({},e,!0))),data)},setTextColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(c.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(c.b)("class must be an object",this),data;if(Object(l.d)(e))data.style=f(f({},data.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var t=e.toString().trim().split(" ",2),r=Object(n.a)(t,2),_=r[0],d=r[1];data.class=f(f({},data.class),{},Object(o.a)({},_+"--text",!0)),d&&(data.class["text--"+d]=!0)}return data}}})},452:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(2),o=r(0),_=r(31);function c(e,t){return function(){return Object(_.c)("The ".concat(e," component must be used inside a ").concat(t))}}function l(e,t,r){var _=t&&r?{register:c(t,r),unregister:c(t,r)}:null;return o.a.extend({name:"registrable-inject",inject:Object(n.a)({},e,{default:_})})}function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.extend({name:"registrable-provide",methods:t?{}:{register:null,unregister:null},provide:function(){return Object(n.a)({},e,t?this:{register:this.register,unregister:this.unregister})}})}},453:function(e,t,r){"use strict";var n=r(0);function o(e){return function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(t,n)||this.$delete(this.$data[e],n);for(var o in t)this.$set(this.$data[e],o,t[o])}}t.a=n.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",o("attrs$"),{immediate:!0}),this.$watch("$listeners",o("listeners$"),{immediate:!0})}})},455:function(e,t,r){"use strict";r(456);var n=r(0);t.a=n.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},456:function(e,t,r){"use strict";r(167)("small",(function(e){return function(){return e(this,"small","","")}}))},457:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return h})),r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return v}));var n=r(77);function o(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=Array()).concat.apply(e,[t].concat(n))}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render:function(t,r){var _="transition".concat(r.props.group?"-group":""),data={props:{name:e,mode:r.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(data.on.leave=o(data.on.leave,(function(e){return e.style.position="absolute"}))),r.props.hideOnLeave&&(data.on.leave=o(data.on.leave,(function(e){return e.style.display="none"}))),t(_,Object(n.a)(r.data,data),r.children)}}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:r}},render:function(r,o){return r("transition",Object(n.a)(o.data,{props:{name:e},on:t}),o.children)}}}var l=r(2),d=r(3),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?"width":"height",n="offset".concat(Object(d.y)(r));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(l.a)({transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow},r,e.style[r])},enter:function(t){var o=t._initialStyle,_="".concat(t[n],"px");t.style.setProperty("transition","none","important"),t.style.visibility="hidden",t.style.visibility=o.visibility,t.style.overflow="hidden",t.style[r]="0",t.offsetHeight,t.style.transition=o.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[r]=_}))},afterEnter:_,enterCancelled:_,leave:function(e){e._initialStyle=Object(l.a)({transition:"",visibility:"",overflow:e.style.overflow},r,e.style[r]),e.style.overflow="hidden",e.style[r]="".concat(e[n],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[r]="0"}))},afterLeave:o,leaveCancelled:o};function o(t){e&&t._parent&&t._parent.classList.remove(e),_(t)}function _(e){var t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}},m=(_("carousel-transition"),_("carousel-reverse-transition"),_("tab-transition"),_("tab-reverse-transition"),_("menu-transition"),_("fab-transition","center center","out-in"),_("dialog-transition"),_("dialog-bottom-transition"),_("fade-transition")),h=(_("scale-transition"),_("scroll-x-transition"),_("scroll-x-reverse-transition"),_("scroll-y-transition"),_("scroll-y-reverse-transition"),_("slide-x-transition")),O=(_("slide-x-reverse-transition"),_("slide-y-transition"),_("slide-y-reverse-transition"),c("expand-transition",f())),v=c("expand-x-transition",f("",!0))},466:function(e,t,r){"use strict";r(30),r(15),r(10),r(4),r(21);var n,o=r(2),_=(r(166),r(75),r(37),r(48),r(456),r(467),r(453)),c=r(446),l=r(455),d=r(116),f=r(3),m=r(0),h=r(74);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}!function(e){e.xSmall="12px",e.small="16px",e.default="24px",e.medium="28px",e.large="36px",e.xLarge="40px"}(n||(n={}));var y=Object(h.a)(_.a,c.a,l.a,d.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(f.x)(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(f.u)(e).find((function(t){return e[t]}));return t&&n[t]||Object(f.g)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:v({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},applyColors:function(data){data.class=v(v({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(e,t){var r=[],data=this.getDefaultData(),n="material-icons",o=e.indexOf("-"),_=o<=-1;_?r.push(e):function(e){return["fas","far","fal","fab","fad"].some((function(t){return e.includes(t)}))}(n=e.slice(0,o))&&(n=""),data.class[n]=!0,data.class[e]=!_;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),t(this.hasClickListener?"button":this.tag,data,r)},renderSvgIcon:function(e,t){var r=this.getSize(),n=v(v({},this.getDefaultData()),{},{style:r?{fontSize:r,height:r,width:r}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var o={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:r||"24",width:r||"24",role:"img","aria-hidden":!0}};return t(this.hasClickListener?"button":"span",n,[t("svg",o,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var data=this.getDefaultData();data.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(data.style={fontSize:r,height:r,width:r}),this.applyColors(data);var component=e.component;return data.props=e.props,data.nativeOn=data.on,t(component,data)}},render:function(e){var t=this.getIcon();return"string"==typeof t?function(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t.a=m.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(e,t){var data=t.data,r=t.children,n="";return data.domProps&&(n=data.domProps.textContent||data.domProps.innerHTML||n,delete data.domProps.textContent,delete data.domProps.innerHTML),e(y,data,n?[n]:r)}})},467:function(e,t,r){},476:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(50),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(32),core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(38),core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(76),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(18),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(49),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__),_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(6),vue__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),vuex__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(96),_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(483);function ownKeys(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(t){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var tuiEditorContentClass=".tui-editor-contents";__webpack_exports__.a=vue__WEBPACK_IMPORTED_MODULE_13__.a.extend({head:function(){var e=this.post;return{title:e.title,meta:[{hid:"keywords",name:"keywords",content:e.tags.map((function(e){return e.text})).join()},{hid:"description",name:"description",content:e.title}]}},data:function(){return{postNav:[],post:{title:"",content:"",html:"",tags:[],author:""},editorOptions:vue__WEBPACK_IMPORTED_MODULE_13__.a.editorOptions,showViewer:!0}},mounted:function(){this.postNav=Object(_utils__WEBPACK_IMPORTED_MODULE_15__.a)(tuiEditorContentClass)},asyncData:function(e){return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__.a)(regeneratorRuntime.mark((function t(){var r,n,o,_,c,l,d,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,e.query,n=e.app,o=e.store,!(_=r.id)){t.next=15;break}if(c=o.getters,l=c["posts/posts"],d=l[_]){t.next=14;break}return t.next=10,n.$axios.$get("posts/".concat(_));case 10:f=t.sent,m=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.a)(f.posts,1),d=m[0],o.commit("posts/SAVE_POSTS",[d]);case 14:return t.abrupt("return",{post:d});case 15:case"end":return t.stop()}}),t)})))()},computed:_objectSpread(_objectSpread({},Object(vuex__WEBPACK_IMPORTED_MODULE_14__.c)("posts",["posts"])),{},{flattenedNav:function(){return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__.a)(Object(_utils__WEBPACK_IMPORTED_MODULE_15__.c)(this.postNav))},mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp},isOpenAll:function(){return!this.$vuetify.breakpoint.xs}}),methods:{goToElement:function(e){var t=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.a)(e,1)[0],r=this.$vuetify;this.flattenedNav.forEach((function(nav){var e=nav.el;nav.id===t?(e.classList.add("activeTitle"),r.goTo(e,{offset:12})):e.classList.remove("activeTitle")}))},initScript:function initScript(){var post=this.post,initCommonScript=this.initCommonScript,initLinkBlank=this.initLinkBlank;initCommonScript(),initLinkBlank(),eval("!function(){".concat(post.scriptCompiled,"}()"))},initCommonScript:function(){var e=document.querySelectorAll(".J-act");Array.from(e).forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.targets.split("|");e.classList.add("d-none"),t.forEach((function(e){(e=document.querySelector(e)).classList.remove("d-none")}))}))}))},initLinkBlank:function(){var e=document.querySelector(tuiEditorContentClass).querySelectorAll("a");Array.from(e).forEach((function(link){return link.target="_blank"}))}}})},477:function(e,t,r){},483:function(e,t,r){"use strict";r.d(t,"c",(function(){return P})),r.d(t,"a",(function(){return D})),r.d(t,"b",(function(){return w}));r(30),r(15),r(21);var n=r(6),o=r(2),_=(r(117),r(18)),c=(r(95),r(32),r(38),r(10),r(49),r(12),r(13),r(4),r(39),r(76)),l=r(11),d=r(29),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(l.a)(this,e),this._data=Array.from(t)}return Object(d.a)(e,[{key:"push",value:function(){var e,t;(e=this._data).push.apply(e,Object(c.a)((t=[]).concat.apply(t,arguments)))}},{key:"pop",value:function(){return this._data.pop()}},{key:"toArray",value:function(){return this._data}},{key:Symbol.iterator,value:function(){return this._data[Symbol.iterator]()}},{key:"peak",get:function(){var e=this._data;return e[e.length-1]}}]),e}();function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=regeneratorRuntime.mark(P),v=0,y=function(){return null},E=function(e){return"object"===function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}(e)};function j(e){return"string"==typeof e&&(e=document.querySelector(e)),e}function P(e){var t,r,n,o,_,i,c,l,d,f=arguments;return regeneratorRuntime.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:if(t=f.length>1&&void 0!==f[1]?f[1]:{},r=t.childProp,n=void 0===r?"children":r,o=t.beforeNode,_=void 0===o?y:o,!E(e)){m.next=6;break}return m.delegateYield(P([e],t),"t0",4);case 4:m.next=19;break;case 6:if(!Array.isArray(e)){m.next=19;break}i=0,c=e.length;case 8:if(!(i<c)){m.next=19;break}return l=e[i],_(l,e,t),m.next=13,l;case 13:if(!(d=l[n])){m.next=16;break}return m.delegateYield(P(d,t),"t1",16);case 16:i++,m.next=8;break;case 19:case"end":return m.stop()}}),O)}function D(e){if(e=j(e)){var t=[],r=/H([1-6]{1})/,n=new f;return Array.from(e.children).forEach((function(e){var o,c=e.tagName.match(r);if(c){for(var l=Object(_.a)(c,2)[1],d={tagName:e.tagName,level:l,text:e.innerText,children:[],el:e,id:v++};(null===(o=n.peak)||void 0===o?void 0:o.level)>=l;)n.pop();n.peak?(n.peak.children.push(d),n.push(d)):(n.push(d),t.push(d))}})),t}}function w(time,e){var t=new Map;return function(r,o,desc){var _=desc.value;return h(h({},desc),{},{value:function(){for(var r=this,o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return new Promise((function(o,l){var d=e||r,f=t.get(d);f||(f={timeId:null,resolves:[],rejects:[],resolve:function(e){this.resolves.forEach((function(t){return t(e)}))},reject:function(e){this.rejects.forEach((function(t){return t(e)}))}},t.set(d,f)),f.resolves.push(o),f.rejects.push(l),clearTimeout(f.timeId),f.timeId=setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.delete(d),e.prev=1,e.next=4,_.apply(r,c);case 4:n=e.sent,f.resolve(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.reject(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),time)}))}})}}},682:function(e,t,r){"use strict";var n=r(477);r.n(n).a},712:function(e,t,r){"use strict";r.r(t);var n=r(476).a,o=(r(682),r(26)),_=r(33),c=r.n(_),l=r(441),d=r(442),f=r(715),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{cols:12,sm:8,order:"last","order-sm":"first"}},[e.showViewer?r("viewer",{attrs:{initialValue:e.post.content,options:e.editorOptions},on:{load:e.initScript}},[r("section",{staticClass:"d-none"},[r("article",{domProps:{innerHTML:e._s(e.post.html)}})])]):e._e()],1),e._v(" "),r("v-col",{class:e.mdAndUp&&e.flattenedNav.length<=10?"fixedNav":"",attrs:{cols:12,sm:4,order:"first","order-sm":"last"}},[e.flattenedNav.length?r("v-treeview",{attrs:{activatable:"","open-all":e.isOpenAll,"active-class":"activeNav",transition:"",items:e.postNav,"item-text":"text"},on:{"update:active":e.goToElement}}):e._e()],1)],1)}),[],!1,null,"7ab452da",null);t.default=component.exports;c()(component,{VCol:l.a,VRow:d.a,VTreeview:f.a})}}]);