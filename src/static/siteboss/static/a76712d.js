(window.webpackJsonp=window.webpackJsonp||[]).push([[21,54],{541:function(e,t,n){"use strict";n.r(t);n(16),n(80),n(238);var l={props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},cols:{type:Number,default:12},description:{type:String,default:""},internal:{type:String,required:!0}},setup:function(){}},o=n(63),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"col-".concat(e.cols)},[t("b-form-group",{attrs:{id:"input-group-".concat(e.internal),description:e.description}},[t("label",{attrs:{"label-for":"input-".concat(e.internal)}},[e._v("\n      "+e._s(e.label)),e.required?t("span",{staticClass:"required-star"},[e._v(" *")]):e._e()]),e._v(" "),e._t("default")],2)],1)}),[],!1,null,null,null);t.default=component.exports},568:function(e,t,n){"use strict";var l=n(20),o=n(149).findIndex,r=n(176),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),l({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(c)},569:function(e,t,n){e.exports={primary:"#5b3776"}},659:function(e,t,n){"use strict";n(569)},666:function(e,t,n){"use strict";n.r(t);n(16),n(80),n(91),n(114),n(50);var l=n(47),o=(n(10),n(66),n(68),n(56),n(206),n(43),n(14),n(568),n(175),n(147),n(33),n(9)),r=n(542),c={components:{draggable:n.n(r).a,AutoLayout:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(128)]).then(n.bind(null,700))}},fetch:function(){var e,t,n,l,o=this,r=Array.isArray(null===(e=this.properties)||void 0===e?void 0:e.allowedBlocks)?null===(t=this.properties)||void 0===t||null===(n=t.allowedBlocks)||void 0===n?void 0:n.join(","):null===(l=this.properties)||void 0===l?void 0:l.allowedBlocks;this.$axios.get("/contentblocks/".concat(r)).then((function(e){o.availableBlocks=e.data}))},props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:o.default,required:!0}},data:function(){return{availableBlocks:[],minimizedBlocks:[],blockTemplates:[],files:[]}},mounted:function(){var e;null!==(e=this.data)&&void 0!==e&&e.value&&(this.blockTemplates=this.data.value)},methods:{toggleExpanded:function(e){this.minimizedBlocks.includes(e)?this.minimizedBlocks.splice(this.minimizedBlocks.indexOf(e),1):this.minimizedBlocks.push(e)},toggleAllExpanded:function(e){this.minimizedBlocks.includes(e)?this.minimizedBlocks=[]:this.minimizedBlocks=this.blockTemplates.map((function(e,i){return i}))},updateValues:function(e,t){var n=this;this.blockTemplates[t].values||(this.blockTemplates[t].values={}),this.$set(this.blockTemplates[t].values,e.field,e),void 0!==(null==e?void 0:e.files)&&e.files.length>0&&e.files.forEach((function(e){var t=n.files.findIndex((function(t){return t.id===e.id}));-1===t?n.files.push(e):n.files.splice(t,1,e)})),this.triggerUpdate()},triggerUpdate:function(){var e=!0,t=this.blockTemplates.map((function(t,n){var o,r={};return t.values&&Object.entries(t.values).forEach((function(n){var o=Object(l.a)(n,2),c=(o[0],o[1]);t.deleted&&(e=!0),c.valid||!0===t.deleted||(e=!1),r[c.field]=c.value})),{items:r,tableId:t.table_id,recordId:t.record_id,deleted:null!==(o=t.deleted)&&void 0!==o&&o,order:n+1}}));this.$emit("updateValues",{field:this.internal,valid:e,value:t,files:this.files})},getNewBlockItems:function(e){var t=this.availableBlocks.find((function(t){return t.name===e})),n=JSON.parse(JSON.stringify(t));n.table_id=t.id,n.record_id="new".concat(this.blockTemplates.length),this.blockTemplates.push(n)},getTableName:function(e){var table=this.availableBlocks.find((function(t){return t.id===parseInt(e,10)}));return null==table?void 0:table.name},remove:function(e){var t=!this.blockTemplates[e].deleted;this.$set(this.blockTemplates[e],"deleted",t),this.triggerUpdate()},getUniqueBlockId:function(e){return"".concat(e.record_id,"_").concat(e.table_id)}}},d=(n(659),n(63)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("CommonAutolayoutLabelWrapper",{staticClass:"c-a",attrs:{label:e.properties.title,description:e.properties.description,required:e.properties.required,internal:e.internal}},[t("draggable",{attrs:{handle:".drag-handle"},on:{change:e.triggerUpdate},model:{value:e.blockTemplates,callback:function(t){e.blockTemplates=t},expression:"blockTemplates"}},e._l(e.blockTemplates,(function(n,l){return t("div",{key:e.getUniqueBlockId(n),staticClass:"contentblock",class:{deleted:n.deleted,"collapsed-content-block":e.minimizedBlocks.includes(l)}},[t("div",{staticClass:"badges left"},[t("b-badge",{staticClass:"name",attrs:{variant:"primary"}},[e._v("\n          "+e._s(e.getTableName(n.table_id))+"\n        ")])],1),e._v(" "),t("div",{staticClass:"badges right"},[e.minimizedBlocks.includes(l)?e._e():t("b-badge",{staticClass:"click badge-trash-icon",attrs:{id:"expander-badge"},on:{click:function(t){return e.remove(l)}}},[n.deleted?t("Icon",{attrs:{icon:"arrow-rotate-left"}}):t("Icon",{attrs:{icon:"trash"}})],1),e._v(" "),n.deleted?e._e():t("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"click",attrs:{title:"Hold shift to toggle all"},on:{click:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.toggleExpanded(l))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:t.shiftKey?"button"in t&&0!==t.button||t.ctrlKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.toggleAllExpanded(l)):null}]}},[e.minimizedBlocks.includes(l)?t("Icon",{attrs:{icon:"expand"}}):t("Icon",{attrs:{icon:"window-minimize"}})],1),e._v(" "),n.deleted?e._e():t("b-badge",{staticClass:"click drag-handle"},[t("Icon",{attrs:{icon:"up-down-left-right"}})],1)],1),e._v(" "),t("AutoLayout",{attrs:{elements:n.items,bus:e.bus},on:{updateValues:function(t){return e.updateValues(t,l)}}})],1)})),0),e._v(" "),t("b-row",[t("b-col",[e.availableBlocks.length>1?t("b-button-group",{attrs:{size:"sm"}},[t("b-dropdown",{attrs:{right:"",text:e.$t("common.addNew"),size:"sm"}},e._l(e.availableBlocks,(function(n,l){return t("b-dropdown-item",{key:l,on:{click:function(t){return e.getNewBlockItems(n.name)}}},[e._v("\n            "+e._s(n.name)+"\n          ")])})),1)],1):t("b-button-group",{attrs:{size:"sm"}},e._l(e.availableBlocks,(function(n,l){return t("b-button",{key:l,attrs:{variant:"secondary"},on:{click:function(t){return e.getNewBlockItems(n.name)}}},[t("Icon",{attrs:{icon:"plus",size:"sm"}}),e._v(" "+e._s(n.name)+"\n        ")],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonAutolayoutLabelWrapper:n(541).default})}}]);