(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{768:function(e,t,r){"use strict";r.r(t);r(54);var n=r(7),o={data:function(){return{username:"",password:"",result:""}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.username,n=e.password,o=e.$axios,t.next=3,o.post("auth/login",{username:r,password:n});case 3:c=t.sent,l=c.data.access_token,e.result=l;case 6:case"end":return t.stop()}}),t)})))()}}},c=r(28),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("div",[r("label",[e._v("Username:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("div",[r("label",[e._v("Password:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",[r("input",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}})]),e._v("\n  "+e._s(e.result)+"\n")])}),[],!1,null,null,null);t.default=component.exports}}]);