(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6cbf4515"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navigation"),n("v-main",[n("router-view"),n("Footer")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-toolbar-title",[t._v("Jack Dou")])],1),n("v-spacer"),n("div",{staticClass:"hidden-sm-and-down mx-5"},[n("router-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{text:""}},[t._v("Home")])],1),n("router-link",{attrs:{to:"/about"}},[n("v-btn",{attrs:{text:""}},[t._v("Posts")])],1)],1),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-app-bar-nav-icon",t._g(t._b({staticClass:"hidden-md-and-up"},"v-app-bar-nav-icon",r,!1),a))]}}])},[n("v-list",[n("v-list-item",[n("router-link",{attrs:{to:"/"}},[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",[n("router-link",{attrs:{to:"/about"}},[n("v-list-item-title",[t._v("About")])],1)],1)],1)],1)],1)},i=[],l=n("2877"),c=n("6544"),u=n.n(c),p=n("40dc"),f=n("5bc1"),d=n("8336"),v=n("adda"),m=n("8860"),h=n("da13"),g=n("5d23"),b=n("e449"),y=n("2fa4"),_=n("2a7f"),w={},V=Object(l["a"])(w,s,i,!1,null,null,null),j=V.exports;u()(V,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:d["a"],VImg:v["a"],VList:m["a"],VListItem:h["a"],VListItemTitle:g["a"],VMenu:b["a"],VSpacer:y["a"],VToolbarTitle:_["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),n("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Vuetify")])])],2)],1)},k=[],x={data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},P=x,O=n("62ad"),S=n("553a"),A=n("0fd9"),E=Object(l["a"])(P,C,k,!1,null,null,null),T=E.exports;u()(E,{VBtn:d["a"],VCol:O["a"],VFooter:S["a"],VRow:A["a"]});var F={name:"App",components:{Navigation:j,Footer:T},data:function(){return{}}},I=F,M=n("7496"),$=n("f6c4"),B=Object(l["a"])(I,r,o,!1,null,null,null),H=B.exports;u()(B,{VApp:M["a"],VMain:$["a"]});var L=n("f309");a["a"].use(L["a"]);var D=new L["a"]({theme:{themes:{light:{primary:"#607d8b",secondary:"#009688",accent:"#4caf50",error:"#ff5722",warning:"#f44336",info:"#795548",success:"#8bc34a"}}}}),J=(n("d3b7"),n("8c4f")),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("Carousels",{attrs:{url:"http://vip-test.chelun.com/V2/index"}}),n("PostsCards")],1)},R=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-carousel",{attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,a){return n("v-carousel-item",{key:a,attrs:{src:e.src}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[t._v(t._s(e.content))])])],1)})),1)],1)],1)},q=[],z={data:function(){return{slides:[]}},name:"Carousels",props:{url:String},mounted:function(){console.log(this.url);var t=n("af95");this.slides=[{src:t,content:"jackdou"},{src:t,content:"jackdou"},{src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",content:"milly"}]}},G=z,Y=n("5e66"),K=n("3e35"),Q=Object(l["a"])(G,U,q,!1,null,null,null),W=Q.exports;u()(Q,{VCarousel:Y["a"],VCarouselItem:K["a"],VCol:O["a"],VRow:A["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t._l(t.items,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12"}},[n("v-card",{attrs:{color:"#1F7087",dark:"","min-height":"200"}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.article_title)}}),n("v-card-subtitle",{domProps:{textContent:t._s(e.sub_title)}})],1),n("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",href:"http://blog.jackdou.top/"+e.id+"/show"}},[t._v("查 看")])],1)],1)],1)})),n("v-col",{attrs:{cols:"12"}},[n("v-pagination",{attrs:{length:t.length,circle:""},on:{input:t.getPosts},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)},Z=[],tt=(n("99af"),n("bc3a")),et=n.n(tt),nt={data:function(){return{page:1,length:1,limit:10,url:"http://api.jackdou.top/api/home/posts",items:[{color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Supermodel",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"}]}},mounted:function(){this.getPosts()},methods:{getPosts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=null===t?this.page:t;console.log(this.url);var n=this;et.a.get(this.url+"?page=".concat(e,"&limit=").concat(this.limit)).then((function(t){console.log(t.data);var e=t.data.list,a=parseInt(t.data.count);n.length=Math.ceil(a/n.limit),n.items=e})).catch((function(t){console.log(t)}))}}},at=nt,rt=(n("968f"),n("8212")),ot=n("b0af"),st=n("99d9"),it=n("891e"),lt=Object(l["a"])(at,X,Z,!1,null,null,null),ct=lt.exports;u()(lt,{VAvatar:rt["a"],VBtn:d["a"],VCard:ot["a"],VCardActions:st["a"],VCardSubtitle:st["b"],VCardTitle:st["c"],VCol:O["a"],VImg:v["a"],VPagination:it["a"],VRow:A["a"]});var ut={name:"Home",components:{Carousels:W,PostsCards:ct},data:function(){return{}}},pt=ut,ft=n("a523"),dt=Object(l["a"])(pt,N,R,!1,null,null,null),vt=dt.exports;u()(dt,{VContainer:ft["a"]}),a["a"].use(J["a"]);var mt=[{path:"/",name:"Home",component:vt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ht=new J["a"]({routes:mt}),gt=ht;a["a"].config.productionTip=!1,new a["a"]({vuetify:D,router:gt,render:function(t){return t(H)}}).$mount("#app")},"5ed1":function(t,e,n){},"968f":function(t,e,n){"use strict";var a=n("5ed1"),r=n.n(a);r.a},af95:function(t,e,n){t.exports=n.p+"img/22695.50fc01bf.jpg"}});
//# sourceMappingURL=app.6d119c92.js.map