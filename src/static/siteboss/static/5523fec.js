(window.webpackJsonp=window.webpackJsonp||[]).push([[31,54],{541:function(e,t,n){"use strict";n.r(t);n(16),n(80),n(238);var r={props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},cols:{type:Number,default:12},description:{type:String,default:""},internal:{type:String,required:!0}},setup:function(){}},l=n(63),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"col-".concat(e.cols)},[t("b-form-group",{attrs:{id:"input-group-".concat(e.internal),description:e.description}},[t("label",{attrs:{"label-for":"input-".concat(e.internal)}},[e._v("\n      "+e._s(e.label)),e.required?t("span",{staticClass:"required-star"},[e._v(" *")]):e._e()]),e._v(" "),e._t("default")],2)],1)}),[],!1,null,null,null);t.default=component.exports},568:function(e,t,n){"use strict";var r=n(20),l=n(149).findIndex,o=n(176),d="findIndex",c=!0;d in[]&&Array(1)[d]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o(d)},570:function(e,t,n){e.exports={primary:"#5b3776"}},660:function(e,t,n){"use strict";n(570)},667:function(e,t,n){"use strict";n.r(t);n(16),n(80),n(18),n(14),n(19);var r=n(2),l=(n(10),n(66),n(68),n(43),n(288),n(17),n(406),n(33),n(568),n(13),n(74),n(9)),o=n(542);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{draggable:n.n(o).a,AutoLayout:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(127)]).then(n.bind(null,700))}},props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:l.default,required:!0}},data:function(){return{value:[],invalids:[],onTouched:!0,valid:!0,currentIndex:0}},created:function(){var e=this;this.bus.$on("setStatus",(function(t){e.onTouched=!1}))},mounted:function(){var e,t=this;null!==(e=this.data)&&void 0!==e&&e.value&&(this.value=this.data.value.map((function(element){return t.currentIndex+=1,element.index=t.currentIndex,element}))),this.triggerUpdate()},methods:{changeOrder:function(e){var t=e.moved;this.invalids=this.invalids.map((function(e){return e.index===t.oldIndex?c(c({},e),{},{index:t.newIndex}):e})),this.triggerUpdate()},elementsWithValue:function(e){var t=this,n=structuredClone(this.properties.template);return this.value[e]?n.map((function(n){return n.data&&!n.data.value&&(n.data.value=t.value[e][n.internal]),n})):this.properties.template},updateValues:function(e,t){if(this.$set(this.value[t],e.field,e.value),e.valid){var n=this.invalids.findIndex((function(n){return n.index===t&&n.field===e.field}));-1!==n&&(this.invalids=this.invalids.filter((function(e,t){return t!==n})))}else this.invalids=this.invalids.concat([{index:t,field:e.field}]);this.value[t]||(this.value[t]={}),this.triggerUpdate()},triggerUpdate:function(){var e=this,t=this.value.filter((function(e){return!e.deleted})),n=this.properties.showDeleted?this.value:t,r=!this.properties.required||t.length>0,l=this.invalids.filter((function(t){return!!e.properties.showDeleted||!e.value[t.index].deleted})).length;this.valid=r,this.$emit("updateValues",{field:this.internal,valid:!l&&r,value:n})},addNewItem:function(){this.currentIndex+=1,this.value.push({deleted:!1,new:!0,index:this.currentIndex}),this.triggerUpdate()},remove:function(e){var t=!this.value[e].deleted;this.$set(this.value[e],"deleted",t),this.triggerUpdate()},getUniqueBlockId:function(e){return Math.random().toString(36).substr(2,9)}}},h=(n(660),n(63)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("CommonAutolayoutLabelWrapper",{staticClass:"c-a",attrs:{label:e.properties.title,description:e.properties.description,required:e.properties.required,internal:e.internal}},[e.valid||e.onTouched?e._e():t("div",{staticClass:"input-feedback",attrs:{id:"input-".concat(e.internal,"-feedback")}},[e._v("\n    "+e._s(e.$t("common.required"))+"\n  ")]),e._v(" "),t("draggable",{class:e.valid||e.onTouched?"":"is-invalid",attrs:{handle:".drag-handle"},on:{change:e.changeOrder},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.value,(function(n,r){return t("div",{key:n.index,staticClass:"repeatable",class:{deleted:n.deleted,"deleted-shown":e.properties.showDeleted}},[t("div",{staticClass:"badges right"},[t("b-badge",{staticClass:"click badge-trash-icon",attrs:{id:"expander-badge"},on:{click:function(t){return e.remove(r)}}},[n.deleted?t("Icon",{attrs:{icon:"arrow-rotate-left"}}):t("Icon",{attrs:{icon:"trash"}})],1),e._v(" "),n.deleted?e._e():t("b-badge",{staticClass:"click drag-handle"},[t("Icon",{attrs:{icon:"up-down-left-right"}})],1)],1),e._v(" "),t("AutoLayout",{attrs:{elements:e.elementsWithValue(r),bus:e.bus},on:{updateValues:function(t){return e.updateValues(t,r)}}})],1)})),0),e._v(" "),t("b-row",[t("b-col",[t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.addNewItem()}}},[t("Icon",{attrs:{icon:"plus",size:"sm"}}),e._v(" Add new item\n        ")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonAutolayoutLabelWrapper:n(541).default})}}]);