(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(t,e,n){"use strict";var o={props:{error:{type:Object,default:function(){}}}},r=(n(452),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.error.statusCode&&404===t.error.statusCode?e("div",[e("div",{attrs:{id:"home-all"}},[e("img",{attrs:{src:"/siteboss/images/siteboss.svg",alt:"404",id:"jumbologo"}}),t._v(" "),e("div",[e("h1",[t._v(t._s(t.$t("common.error404")))]),t._v(" "),e("p",[t._v("Controleer het adres")])])])]):t.error.config?e("div",[t.error.response.data.file?e("div",[e("h2",[t._v(t._s(t.error.message))]),t._v(" "),e("h3",[t._v(t._s(t.error.response.data.message))]),t._v(" "),e("ul",[e("li",[e("b",[t._v("\n            "+t._s(t.error.response.data.file)+" (line\n            "+t._s(t.error.response.data.line)+")\n          ")])]),t._v(" "),t._l(t.error.response.data.trace,(function(n,o){return e("li",{key:o,staticStyle:{margin:"0"}},[t._v("\n          "+t._s(n.class)+" "),e("em",[t._v(" "+t._s(n.type)+" ")]),t._v(" "),e("b",[t._v(t._s(n.function))]),t._v(" (line "+t._s(n.line)+")\n        ")])}))],2)]):e("div",[e("h2",{staticClass:"header"},[t._v("\n        "+t._s(t.$t("common.error"))+"\n      ")]),t._v(" "),e("p",[t._v(t._s(t.$t("common.error_persist")))])])]):e("div",[t._v("\n    "+t._s(t.error)+"\n    "),e("h1",[t._v("SiteBoss Frontend Error")]),t._v(" "),e("h3",[e("b",[t._v(t._s(t.error.message))])]),t._v(" "),e("p",[t._v("See console for furthur errors")])])])}),[],!1,null,"038f0da0",null);e.a=component.exports},279:function(t,e,n){"use strict";e.a=function(t){var e=t.$axios,n=t.i18n;e.setBaseURL("/siteboss/api/".concat(""===n.locale?n.defaultLocale:n.locale,"/"))}},280:function(t,e,n){"use strict";var o=n(9),r=n(281);o.default.use(r.default),o.default.component("ConfirmDialog",r.default.default)},281:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n(397);e.default={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.params=e,t.component(e.componentName||"confirm-dialog",r.default);var n=function(t){if("object"!==Object(o.a)(t)||Array.isArray(t)){var e=Object(o.a)(t);throw Array.isArray(t)&&(e="array"),new Error("Options type must be an object. Caught: ".concat(e,". Expected: object"))}if("object"===Object(o.a)(t)){if("function"!=typeof t.callback){var n=Object(o.a)(t.callback);throw new Error("Callback type must be an function. Caught: ".concat(n,". Expected: function"))}window.$nuxt.$emit("open-confirm-dialog",t)}};n.close=function(){window.$nuxt.$emit("close-confirm-dialog")},t.prototype.$sbConfirm=n,t.$sbConfirm=n}}}},282:function(t,e,n){"use strict";var o=n(9),r=n(283);o.default.use(r.default),o.default.component("SitebossMessage",r.default.default)},283:function(t,e,n){"use strict";n.r(e);var o=n(398);e.default={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.params=e,t.component(e.componentName||"message-window",o.default);var n={};n.error=this.errorToast(t),n.success=this.succesToast(),t.prototype.$sbToast=n,t.$sbToast=n}},errorToast:function(){return function(t){var e={message:t,title:"Probleem",type:"toast",variant:"danger"};(window.$nuxt.$emit("siteboss-show-toast",e),void 0===window.$nuxt.$store.state.preferences||!0!==window.$nuxt.$store.state.preferences.no_sound)&&new Audio(n(533).default).play()}},succesToast:function(){return function(t){var e={message:t,title:"OK",type:"toast",variant:"success"};window.$nuxt.$emit("siteboss-show-toast",e)}}}},334:function(t,e,n){t.exports={}},336:function(t,e,n){t.exports={}},337:function(t,e,n){t.exports={}},338:function(t,e,n){t.exports={primary:"#5b3776"}},339:function(t,e,n){t.exports={}},340:function(t,e,n){t.exports={}},380:function(t,e,n){t.exports={}},393:function(t,e,n){"use strict";n(50),n(403),n(28),n(54),n(13),n(10),n(91),n(114);var o={name:"layoutDefault",data:function(){return{expandedMenu:!1,showMenu:!1,loaded:!1,error:null}},fetch:function(){var t=this;this.$axios.get("/info/").then((function(e){"error"===e.data.result?(t.$store.commit("setLoginError",{id:"ve",message:e.data.message,link:e.data.link,buttonText:e.data.buttonText}),t.$router.push({path:t.localePath("/login/"),query:{error:"ve"}})):(t.setLocales(e.data.locales.siteLocales),t.setMenu(e.data.menu),t.setActiveAppLocale(e.data.locales.defaultLocale),t.setAvailableAppLocales(e.data.locales.availableLocales),t.setSettings(e.data.settings),t.setPreferences(e.data.preferences),t.loaded=!0)})).catch((function(e){var n;401===(null===(n=e.response)||void 0===n?void 0:n.status)?t.$auth.loggedIn?(t.$auth.logout(),t.error="Je bent mogelijk niet meer ingelogd, probeer de pagina te herladen."):t.$router.replace(t.localePath("/login/")):t.error="Probleem bij het laden van de website, probeer de pagina te herladen."}))},computed:{home:function(){var t;return null===(t=this.$store.state.menuItems[0])||void 0===t?void 0:t.path},productName:function(){return this.$store.state.settings.productName},productLogo:function(){return this.$store.state.settings.productLogo},availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale&&t.$store.state.appLocales.includes(i.code)}))}},methods:{setLocales:function(t){for(var e=[],n="",i=0;i<t.length;i+=1){var o=t[i];1!==o.default&&"1"!==o.default||(n=o.flag),e.push(o)}this.$store.commit("setLocales",{list:e,default:n})},setSettings:function(t){this.$store.commit("setSettings",t)},setPreferences:function(t){this.$store.commit("setPreferences",t)},setMenu:function(t){this.$store.commit("setMenu",t)},setActiveAppLocale:function(t){this.$i18n.setLocale(t),this.$axios.defaults.baseURL="/siteboss/api/".concat(t,"/")},setAvailableAppLocales:function(t){this.$store.commit("setAppLocales",t)},logout:function(){this.$auth.logout()}},watch:{$route:function(){this.showMenu=!1}}},r=n(63),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:{"no-animation":void 0!==t.$store.state.preferences&&!0===t.$store.state.preferences.no_animation}},[t.loaded?e("div",[e("b-navbar",{class:{"show-menu":t.showMenu},attrs:{toggleable:"lg",type:"dark",sticky:!0,variant:"primary"}},[e("b-navbar-brand",[e("NuxtLink",{staticClass:"logo",attrs:{to:t.localePath(t.home)}},[e("img",{attrs:{src:t.productLogo}}),t._v("\n          "+t._s(t.productName)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"nav-search-and-collapse"},[t._v("\n        TODO: show search box\n        "),e("div",{staticClass:"nav-search"},[e("div",{staticClass:"position-relative"},[e("input",{staticClass:"form-control",attrs:{id:"",type:"text",placeholder:t.$t("search"),tabindex:"0"}}),t._v(" "),e("b-button",{attrs:{size:"sm"}},[e("Icon",{attrs:{icon:"magnifying-glass"}})],1)],1)]),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-dropdown",{staticClass:"ml-1",attrs:{id:"dropdown-1",variant:"primary",size:"sm",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("Icon",{attrs:{icon:"user",title:t.$t("common.user"),"aria-hidden":"true"}})]},proxy:!0}],null,!1,4239015886)},[t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/app/about/")}},[t._v("\n              "+t._s(t.$t("menu.about"))+" "+t._s(t.productName)+"\n            ")]),t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/app/preferences/")}},[t._v("\n              "+t._s(t.$t("menu.preferences"))+"\n            ")]),t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/app/support/")}},[t._v("\n              "+t._s(t.productName)+" "+t._s(t.$t("menu.support"))+"\n            ")]),t._v(" "),e("b-dropdown-item",{on:{click:t.logout}},[t._v("\n              "+t._s(t.$t("logout"))+"\n            ")])],1),t._v(" "),t.availableLocales.length>0?e("b-dropdown",{attrs:{variant:"primary",size:"sm",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("Icon",{attrs:{icon:"globe","aria-hidden":"true"}})]},proxy:!0}],null,!1,1435019465)},[t._v(" "),t._l(t.availableLocales,(function(n){return e("b-dropdown-item",{key:n.code,on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.setActiveAppLocale(n.code)}}},[t._v("\n              "+t._s(n.name)+"\n            ")])}))],2):t._e(),t._v(" "),e("li",[e("button",{staticClass:"navbar-toggler collapsed",staticStyle:{"overflow-anchor":"none"},attrs:{type:"button","aria-label":"Toggle navigation","aria-expanded":"false","aria-controls":"nav-collapse"},on:{click:function(e){t.showMenu=!t.showMenu}}},[e("span",{staticClass:"navbar-toggler-icon"})])])],1)],1)],1),t._v(" "),e("div",{attrs:{id:"wrapper"}},[e("CommonMenu",{attrs:{minify:t.expandedMenu,"show-menu":t.showMenu}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("Nuxt")],1)],1),t._v(" "),e("confirm-dialog"),t._v(" "),e("message-window")],1):t.error?e("div",[e("h1",[t._v(t._s(t.productName)+" Backend Error")]),t._v(" "),e("p",[t._v(t._s(t.error))])]):e("CommonLoading")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{CommonMenu:n(534).default,CommonLoading:n(411).default})},394:function(t,e,n){"use strict";var o={},r=n(63),component=Object(r.a)(o,(function(){return(0,this._self._c)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},395:function(t,e,n){"use strict";n.r(e);n(28),n(146),n(238);var o={name:"MenuList",components:{MenuLink:n(396).default},props:{items:{type:Array,required:!0},level:{type:Number,required:!1,default:0},search:{type:String,required:!0}},data:function(){return{open:!0,openedItems:[]}},methods:{collapseItem:function(t,e){e.submenu&&(this.openedItems[t]=!this.openedItems[t],this.$forceUpdate())}}},r=(n(456),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:{"nav-menu":0==t.level,subMenu:t.level>0}},[0==t.items.length&&0==t.level?e("li",{staticClass:"no-results"},[t._v("\n    "+t._s(t.$t("no_results"))+"\n  ")]):t._l(t.items,(function(menuitem,n){return e("li",{key:menuitem.id,class:{"nav-title":!menuitem.path,expanded:menuitem.submenu&&(t.openedItems[n]||""!=t.search)}},[menuitem.submenu?e("a",{class:{folder:menuitem.submenu,menuItem:!0},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.collapseItem(n,menuitem)}}},[e("MenuLink",{attrs:{item:menuitem,open:t.openedItems[n],search:t.search}})],1):e("span",["/"!==menuitem.path.substring(0,1)?e("a",{attrs:{target:"_blank",href:menuitem.path}},[e("MenuLink",{attrs:{item:menuitem,search:t.search}})],1):e("NuxtLink",{attrs:{to:t.localePath(menuitem.path)}},[e("MenuLink",{attrs:{item:menuitem,search:t.search}})],1)],1),t._v(" "),menuitem.submenu?e("transition",{attrs:{name:"slide"}},[t.openedItems[n]||""!=t.search?e("MenuList",{attrs:{items:menuitem.submenu,level:t.level+1,search:t.search}}):t._e()],1):t._e()],1)}))],2)}),[],!1,null,"a846182e",null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);n(28),n(146);var o={props:{item:{type:Object,required:!0},open:{type:Boolean,required:!1},search:{type:String,required:!0}}},r=(n(455),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[e("div",{staticClass:"menu-item"},[e("span",{staticClass:"icon"},[e("Icon",{attrs:{icon:t.item.icon,"font-scale":"1"}})],1),t._v(" "),e("span",{staticClass:"nav-link-text"},[t._v(t._s(t.item.title))]),t._v(" "),"/"===t.item.path.substring(0,1)||t.item.submenu?t._e():e("Icon",{staticClass:"subtle",attrs:{icon:"up-right-from-square"}}),t._v(" "),t.item.submenu?e("b",{staticClass:"collapse-sign",class:{"upside-down":t.open||""!=t.search}},[e("Icon",{attrs:{icon:"chevron-down"}})],1):t._e()],1)])}),[],!1,null,"5c704a78",null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var o=n(36);n(10),n(14),n(175);n(9).default.directive("focus",{inserted:function(t){t.focus()}});var r={name:"ConfirmDialog",data:function(){return{isShow:!1,dialog:{title:"",message:"",button:{}},defaultTitle:"Weet je het zeker?",params:{}}},mounted:function(){var t=this;document&&(this.$nuxt.$on("open-confirm-dialog",this.open),this.$nuxt.$on("close-confirm-dialog",(function(){t.handleClickOverlay({target:{id:"vueConfirm"}})})),document.addEventListener("keyup",this.handleKeyUp))},beforeDestroy:function(){document.removeEventListener("keyup",this.handleKeyUp)},methods:{resetState:function(){this.dialog={title:"",message:"",button:{},callback:function(){}}},handleClickButton:function(t,e){"vueConfirm"!==t.target.id&&(this.isShow=!1,this.params.callback&&this.params.callback(e))},handleClickOverlay:function(t){"vueConfirm"===t.target.id&&(this.isShow=!1,this.params.callback&&this.params.callback(!1))},handleKeyUp:function(t){var e=t.keyCode;this.isShow&&(27===e&&this.handleClickOverlay({target:{id:"vueConfirm"}}),13===e&&this.handleClickButton({target:{id:""}},!0))},open:function(t){var e=this;this.resetState(),this.params=t,this.isShow=!0,Object.entries(t).forEach((function(param){Object(o.a)(param[1])===Object(o.a)(e.dialog[param[0]])&&(e.dialog[param[0]]=param[1])}))}}},c=(n(532),n(63)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return t.isShow?e("div",{staticClass:"modal show",staticStyle:{display:"block"},attrs:{id:"vueConfirm",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[""!=t.dialog.title?e("h5",{staticClass:"modal-title"},[t._v("\n          "+t._s(t.dialog.title)+"\n        ")]):e("h5",{staticClass:"modal-title"},[t._v(t._s(t.defaultTitle))]),t._v(" "),e("button",{staticClass:"close cross",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.stopPropagation(),function(e){return t.handleClickButton(e,!1)}.apply(null,arguments)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n        "+t._s(t.dialog.message)+"\n      ")]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),function(e){return t.handleClickButton(e,!1)}.apply(null,arguments)}}},[t._v("\n          "+t._s(null==t.dialog.button.no?"Annuleren":t.dialog.button.no)+"\n        ")]),t._v(" "),t._t("btnConfirm",(function(){return[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),function(e){return t.handleClickButton(e,!0)}.apply(null,arguments)}}},[t._v("\n            "+t._s(null==t.dialog.button.yes?"Ja":t.dialog.button.yes)+"\n          ")])]}))],2)])])]):t._e()}),[],!1,null,"24ec484c",null);e.default=component.exports},398:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}},mounted:function(){document&&this.$nuxt.$on("siteboss-show-toast",this.showToast)},beforeDestroy:function(){this.$nuxt.$off("siteboss-show-toast",this.showToast)},methods:{showToast:function(t){var e;this.$bvToast.toast(t.message,{autoHideDelay:5e3,title:null!==(e=t.title)&&void 0!==e?e:"",appendToast:!1,variant:t.variant})}}},r=n(63),component=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n(459);var o=n(63),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"background"},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[e("b-navbar-brand",[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},[e("img",{attrs:{src:"/siteboss/images/logo.svg"}}),t._v("\n        SiteBoss\n      ")])],1)],1),t._v(" "),e("b-container",[e("b-jumbotron",{staticClass:"jumbotop"},[e("Nuxt")],1),t._v(" "),e("p",[t._v("\n      For support, please read\n      "),e("a",{attrs:{href:"https://docs.siteboss.nl/"}},[t._v("our documentation")]),t._v(".\n    ")])],1)],1)}),[],!1,null,"5b5d64ad",null);e.a=component.exports},400:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(10),n(224);var o=n(61),r=n(60),c=n(166),l=n(112),d=n(130),f=n(76),m=(n(33),n(135)),v=n(38);n(98);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var _=function(t){Object(l.a)(c,t);var e,n=h(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"request",value:(e=Object(v.a)(regeneratorRuntime.mark((function t(){var e,n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((c=null===(e=this.scheme.$auth.ctx)||void 0===e||null===(n=e.nuxtState)||void 0===n||null===(o=n.$auth)||void 0===o||null===(r=o.openIDConnect)||void 0===r?void 0:r.configurationDocument)&&this.set(c),this.get()){t.next=8;break}return t.next=5,this.scheme.requestHandler.axios.$get("/oidc/").catch((function(t){return Promise.reject(t)}));case 5:l=t.sent,this.set(l);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setSchemeEndpoints",value:function(){var t=this.get();this.scheme.options.endpoints={authorization:t.authorization_endpoint,token:t.token_endpoint,userInfo:t.userinfo_endpoint,logout:t.end_session_endpoint},this.scheme.options.clientId=t.siteboss_client_id,this.scheme.options.logoutRedirectUri=t.siteboss_logout_redirect_uri}}]),c}(m.b);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var w=function(t){Object(l.a)(n,t);var e=y(n);function n(t,o){var l;Object(r.a)(this,n);for(var d=arguments.length,f=new Array(d>2?d-2:0),m=2;m<d;m++)f[m-2]=arguments[m];return(l=e.call.apply(e,[this,t,o].concat(f))).configurationDocument=new _(Object(c.a)(l),l.$auth.$storage),l}return Object(o.a)(n)}(m.d)},411:function(t,e,n){"use strict";n.r(e);n(458);var o=n(63),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loader"},[t("div",{staticClass:"sk-circle"},[t("img",{attrs:{src:"/siteboss/images/siteboss.svg",alt:"Loading..."}})])])}],!1,null,"50b6444e",null);e.default=component.exports},412:function(t,e,n){n(413),t.exports=n(414)},452:function(t,e,n){"use strict";n(334)},454:function(t,e,n){t.exports={primary:"#5b3776"}},455:function(t,e,n){"use strict";n(336)},456:function(t,e,n){"use strict";n(337)},457:function(t,e,n){"use strict";n(338)},458:function(t,e,n){"use strict";n(339)},459:function(t,e,n){"use strict";n(340)},460:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"strict",(function(){return c}));var o=function(){return{selectedLocale:null,locales:{default:{},available:[]},version:"1.10.1",appLocales:[],breadcrumb:[],preferences:{},settings:{},menuItems:[{id:0,icon:"home",title:"Loading menu...",path:"/",submenu:[]}],loginError:{id:0,message:"",link:null,buttonText:null}}},r={setLoginError:function(t,e){t.loginError=e},unSetLoginError:function(t){t.loginError={id:"",message:""}},setLocales:function(t,e){t.locales=e},setAppLocales:function(t,e){t.appLocales=e},setSelectedLocale:function(t,e){t.selectedLocale=e},setMenu:function(t,e){t.menuItems=e},setSettings:function(t,e){t.settings=e},setPreferences:function(t,e){t.preferences=e},setBreadcrumb:function(t,e){e.unshift({text:"Home",to:"/"}),t.breadcrumb=e}},c=!1},461:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"strict",(function(){return c}));var o=function(){return{activeField:null,activeForm:{locales:[],temporaryId:1e4},fieldProperties:[],mobileView:!1,fields:[]}},r={setActiveField:function(t,e){t.activeField=e},setMobileView:function(t,e){t.mobileView=e},incrementTemporaryId:function(t){t.activeForm.temporaryId+=1},setFieldProperties:function(t,e){t.fieldProperties=e},setFields:function(t,e){t.fields=e},setLocales:function(t,e){t.activeForm.locales=e}},c=!1},532:function(t,e,n){"use strict";n(380)},533:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/error.mp3"},534:function(t,e,n){"use strict";n.r(e);var o=n(2);n(28),n(54),n(100),n(43),n(13),n(10),n(91),n(114),n(17),n(16),n(18),n(14),n(19);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={components:{MenuList:n(395).default},props:{minify:{type:Boolean,default:!1},showMenu:{type:Boolean,required:!0}},data:function(){return{showSearch:!1,menuSearch:""}},computed:{productName:function(){return this.$store.state.settings.productName},version:function(){return this.$store.state.version.replace(/"/g,"")},menuitems:function(){var t=this.menuSearch.toLowerCase().trim(),e=this.$store.state.menuItems.map((function(menuitem){if(!menuitem.submenu)return menuitem;var e=menuitem.submenu.filter((function(e){return e.title.toLowerCase().includes(t)})),n=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},menuitem);return 0===e.length?(delete n.submenu,n):(n.submenu=e,n)}));return e.filter((function(menuitem){return!!menuitem.title.toLowerCase().includes(t)||!!menuitem.submenu}))}},methods:{toggleSearch:function(){this.showSearch=!this.showSearch,this.menuSearch=""}}},l=c,d=(n(457),n(63)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("aside",{class:{"show-menu":t.showMenu,"list-filter-active":t.showSearch,filteredlist:""!=t.menuSearch,minified:t.minify},attrs:{id:"nav-collapse","is-nav":""}},[e("nav",{class:{filteredlist:""!=t.menuSearch,"sticky-menu":!0},attrs:{role:"navigation"}},[e("div",{staticClass:"nav-filter"},[e("div",{staticClass:"position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.menuSearch,expression:"menuSearch"}],staticClass:"form-control",attrs:{id:"nav_filter_input",type:"text",placeholder:t.$t("search_menu"),tabindex:"0"},domProps:{value:t.menuSearch},on:{input:function(e){e.target.composing||(t.menuSearch=e.target.value)}}}),t._v(" "),""!=t.menuSearch?e("b-button",{staticClass:"btn-search-close",on:{click:function(e){t.menuSearch=""}}},[e("Icon",{attrs:{icon:"x","font-scale":"1"}})],1):t._e()],1)]),t._v(" "),e("MenuList",{attrs:{items:t.menuitems,search:t.menuSearch}}),t._v(" "),e("div",{staticClass:"separator"},[t._v(t._s(t.productName)+" "+t._s(t.version))])],1)])}),[],!1,null,null,null);e.default=component.exports}},[[412,117,12,118]]]);