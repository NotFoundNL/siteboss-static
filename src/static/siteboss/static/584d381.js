(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{562:function(t,e,n){t.exports={}},600:function(t,e,n){"use strict";n(562)},619:function(t,e,n){"use strict";n.r(e);var r=n(708),c=n(9),o={components:{BSpinner:r.a},props:{items:{type:Array,default:function(){return[]}},properties:{type:Object,default:function(){}},bus:{type:c.default,required:!0}},data:function(){return{sending:!1,currentTitle:""}},mounted:function(){this.currentTitle=this.properties.title},methods:{setType:function(t,e){this.currentTitle=e,this.$emit("setFormOption","send",t)}},created:function(){var t=this;this.bus.$on("setStatus",(function(e){t.sending=!e.active}))}},l=(n(600),n(63)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:{"col-12 pb-3 pt-3 c-a":!0,"submit-button":t.properties.sticky}},[t.properties.alternatives?e("b-button-group",[e("b-button",{staticClass:"animateSize",attrs:{type:"submit",variant:"primary",disabled:t.sending}},[t.sending?e("b-spinner",{staticClass:"spinner",attrs:{small:""}}):t._e(),t._v(t._s(t.currentTitle)+"\n    ")],1),t._v(" "),e("b-dropdown",{attrs:{right:"",variant:"primary"}},[e("b-dropdown-item",{on:{click:function(e){return t.setType("default",t.properties.title)}}},[t._v(t._s(t.properties.title))]),t._v(" "),t._l(t.properties.alternatives,(function(n,r){return e("b-dropdown-item",{key:r,on:{click:function(e){return t.setType(r,n)}}},[t._v(t._s(n))])}))],2)],1):e("b-button",{staticClass:"animateSize",attrs:{type:"submit",variant:"primary",disabled:t.sending}},[t.sending?e("b-spinner",{staticClass:"spinner",attrs:{small:""}}):t._e(),t._v(t._s(t.properties.title)+"\n  ")],1)],1)}),[],!1,null,"36a02ebe",null);e.default=component.exports},708:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(2),c=(n(239),n(4)),o=n(113),l=n(3),d=n(1),f=n(12),m=n(52),v=n(0),y=Object(v.d)({label:Object(v.c)(d.t),role:Object(v.c)(d.t,"status"),small:Object(v.c)(d.g,!1),tag:Object(v.c)(d.t,"span"),type:Object(v.c)(d.t,"border"),variant:Object(v.c)(d.t)},l.Eb),O=Object(c.c)({name:l.Eb,functional:!0,props:y,render:function(t,e){var n,c=e.props,data=e.data,l=e.slots,d=e.scopedSlots,v=l(),y=d||{},O=Object(m.b)(f.u,{},y,v)||c.label;return O&&(O=t("span",{staticClass:"sr-only"},O)),t(c.tag,Object(o.a)(data,{attrs:{role:O?c.role||"status":null,"aria-hidden":O?null:"true"},class:(n={},Object(r.a)(n,"spinner-".concat(c.type),c.type),Object(r.a)(n,"spinner-".concat(c.type,"-sm"),c.small),Object(r.a)(n,"text-".concat(c.variant),c.variant),n)}),[O||t()])}})}}]);