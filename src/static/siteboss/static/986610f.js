(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{582:function(t,n,e){"use strict";e.r(n);e(28),e(146),e(33),e(100),e(13),e(10),e(91),e(114),e(14);var o=e(709),r=e(579),l=e(707),c=e(542),d=e.n(c),f=e(9),h={components:{draggable:d.a,BFormTags:o.a,BFormTag:r.a,BAlert:l.a},props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:f.default,required:!0}},data:function(){return{options:[],search:"",selectedOptions:[],failed:!1}},fetch:function(){var t=this,n=this.$route.params,e=n.slug,o=n.id;this.$axios.get("/table/".concat(e,"/").concat(o,"/").concat(this.internal,"/").concat(this.$i18n.locale,"/")).then((function(n){t.options=n.data})).catch((function(n){t.failed=!0}))},computed:{criteria:function(){return this.search.trim().toLowerCase()},availableOptions:function(){var t=this,n=this.criteria;return n?this.options.filter((function(t){return t.label.toLowerCase().includes(n)})).filter((function(n){return!t.selectedOptions.includes(n.id)})):this.options.filter((function(n){return!t.selectedOptions.includes(n.id)}))},tagList:function(){var t=this,n=[];return this.selectedOptions.forEach((function(e){n.push(t.options.filter((function(t){return t.id===e}))[0])})),n}},mounted:function(){},methods:{onOptionClick:function(t){this.selectedOptions.push(t),this.search=""},removeTag:function(t){this.selectedOptions=this.selectedOptions.filter((function(n){return n!==t}))}}},v=e(63),component=Object(v.a)(h,(function(){var t=this,n=t._self._c;return n("b-form-group",{attrs:{label:"Tagged input using dropdown","label-for":"tags-with-dropdown"}},[n("b-alert",{attrs:{show:t.failed,variant:"danger"}},[t._v("\n    "+t._s(t.$t("autolayout.tags.fetch"))+"\n  ")]),t._v(" "),t.properties.tagssortable?n("draggable",{staticClass:"list-group",attrs:{list:t.selectedOptions}},t._l(t.tagList,(function(e){return n("div",{key:e.id,staticClass:"list-group-item"},[t._v("\n      "+t._s(e.label)+"\n    ")])})),0):t._e(),t._v(" "),n("b-form-tags",{staticClass:"mb-2",attrs:{id:"tags-with-dropdown","no-outer-focus":""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.disabled;return[t.tagList.length&&!t.properties.tagssortable?n("ul",{staticClass:"list-inline d-inline-block mb-2"},t._l(t.tagList,(function(e){return n("li",{key:e.id,staticClass:"list-inline-item"},[n("b-form-tag",{attrs:{title:e.label,disabled:o,variant:"primary"},on:{remove:function(n){return t.removeTag(e.id)}}})],1)})),0):t._e(),t._v(" "),n("b-dropdown",{attrs:{size:"sm",variant:"outline-secondary",block:"","menu-class":"w-100"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("Icon",{attrs:{icon:"magnifying-glass"}}),t._v(" "+t._s(t.$t("autolayout.tags.select"))+"\n        ")]},proxy:!0}],null,!0)},[t._v(" "),n("b-dropdown-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),function(){}.apply(null,arguments)}}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:t.$t("autolayout.tags.search"),"label-for":"tag-search-input","label-cols-md":"auto","label-size":"sm",disabled:o}},[n("b-form-input",{attrs:{id:"tag-search-input",type:"search",size:"sm",autocomplete:"off"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],1),t._v(" "),n("b-dropdown-divider"),t._v(" "),n("li",{staticClass:"tags-dropdown"},t._l(t.availableOptions,(function(option){return n("b-dropdown-item-button",{key:option.id,on:{click:function(n){return t.onOptionClick(option.id)}}},[t._v("\n            "+t._s(option.label)+"\n          ")])})),1),t._v(" "),0===t.availableOptions.length?n("b-dropdown-text",[t._v("\n          "+t._s(t.$t("autolayout.tags.no_results"))+"\n        ")]):t._e()],1)]}}])})],1)}),[],!1,null,null,null);n.default=component.exports},850:function(t,n,e){"use strict";e.r(n);var o={components:{LayoutTags:e(582).default},data:function(){return{value:"",context:null,selected:null}},methods:{onContext:function(t){this.context=t}},template:"empty"},r=e(63),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("Playground")]),t._v(" "),n("layout-tags"),t._v(" "),n("layout-dropdown")],1)}),[],!1,null,"2ac3a5e4",null);n.default=component.exports}}]);