(window.webpackJsonp=window.webpackJsonp||[]).push([[36,54],{541:function(t,e,n){"use strict";n.r(e);n(16),n(80),n(238);var l={props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},cols:{type:Number,default:12},description:{type:String,default:""},internal:{type:String,required:!0}},setup:function(){}},r=n(63),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:"col-".concat(t.cols)},[e("b-form-group",{attrs:{id:"input-group-".concat(t.internal),description:t.description}},[e("label",{attrs:{"label-for":"input-".concat(t.internal)}},[t._v("\n      "+t._s(t.label)),t.required?e("span",{staticClass:"required-star"},[t._v(" *")]):t._e()]),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},605:function(t,e,n){"use strict";n.r(e);n(16),n(80);var l=n(9),r={props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:l.default,required:!0}},data:function(){return{value:null,onTouched:!0,valid:!0}},computed:{state:function(){return this.onTouched?null:this.valid}},watch:{value:function(t,e){null!==e&&(this.onTouched=!1),this.checkValid(t),this.$emit("updateValues",{field:this.internal,valid:this.valid,value:t})}},beforeMount:function(){this.data&&(this.value=this.data.value)},created:function(){var t=this;this.bus.$on("setStatus",(function(e){t.onTouched=!1}))},mounted:function(){this.$emit("updateValues",{field:this.internal,valid:this.valid,value:this.value})},methods:{checkValid:function(t){this.properties.required?this.valid=""!==t&&null!=t:this.valid=!0}}},o=n(63),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("CommonAutolayoutLabelWrapper",{attrs:{label:t.properties.title,description:t.properties.description,required:t.properties.required,internal:t.internal}},[t.valid||t.onTouched?t._e():e("div",{staticClass:"input-feedback",attrs:{id:"input-".concat(t.internal,"-feedback")}},[t._v("\n    "+t._s(t.$t("common.required"))+"\n  ")]),t._v(" "),e("b-textarea",{attrs:{state:t.state,rows:"8","max-rows":"30"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonAutolayoutLabelWrapper:n(541).default})}}]);