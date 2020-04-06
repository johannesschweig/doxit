(function(e){function t(t){for(var o,a,u=t[0],c=t[1],i=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},s=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"813ba829"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var i=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],a=(n("034f"),n("2877")),u={},c=Object(a["a"])(u,r,s,!1,null,null,null),i=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Doxit")]),"connected"===e.status?n("button",{on:{click:e.disconnect}},[e._v("Disconnect")]):e._e(),"disconnected"===e.status?n("button",{on:{click:e.connect}},[e._v("Connect")]):e._e(),e._v(" "+e._s(e.status)+" "),n("br"),n("br"),"connected"===e.status?n("div",[n("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Send Message")])]),n("ul",{attrs:{id:"logs"}},e._l(e.logs,(function(t){return n("li",{staticClass:"log"},[e._v(" "+e._s(t.event)+": "+e._s(t.data)+" ")])})),0)]):e._e()])},v=[],m={name:"HelloWorld",props:{msg:String},data:function(){return{message:"",logs:[],status:"disconnected",ws:"ws://localhost:8081"}},methods:{connect:function(){var e=this;this.socket=new WebSocket(this.ws),this.socket.onopen=function(){e.status="connected",e.logs.push({event:"Connected to",data:e.ws}),e.socket.onmessage=function(t){var n=t.data;e.logs.push({event:"Recieved message",data:n})}}},disconnect:function(){this.socket.close(),this.status="disconnected",this.logs=[]},sendMessage:function(e){this.socket.send(this.message),this.logs.push({event:"Sent message",data:this.message}),this.message=""}},created:function(){}},h=m,g=Object(a["a"])(h,p,v,!1,null,"883ce862",null),b=g.exports,_={name:"Home",components:{HelloWorld:b}},w=_,y=Object(a["a"])(w,d,f,!1,null,null,null),j=y.exports;o["a"].use(l["a"]);var k=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new l["a"]({routes:k}),x=O,P=n("2f62");o["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:x,store:S,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b4c526b1.js.map