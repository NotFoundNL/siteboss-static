(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{608:function(t,e,n){"use strict";n.r(e);n(16),n(82),n(36);var o=n(9),c={props:{properties:{type:Object,default:function(){}},internal:{type:String,required:!0},data:{type:Object,default:function(){}},bus:{type:o.default,required:!0}},data:function(){return{value:"",valid:!this.properties.required,onTouched:!0,uniqueId:""}},computed:{state:function(){return this.ontouched?null:this.valid}},watch:{value:function(t,e){this.onTouched=!1,this.properties.required?this.valid=1===t||"1"===t:this.valid=!0,this.$emit("updateValues",{field:this.internal,valid:this.valid,value:1===t})}},created:function(){var t=this;this.bus.$on("setStatus",(function(e){t.onTouched=!1})),this.uniqueId="".concat(this._uid).concat(this.internal,"_checkbox")},mounted:function(){this.value=this.data.value?1:0,this.$emit("updateValues",{field:this.internal,valid:this.valid,value:this.value})}},d=n(63),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12"},[e("b-form-group",{attrs:{id:"input-group-".concat(t.uniqueId),description:t.properties.description}},[e("b-form-checkbox",{attrs:{id:"input-".concat(t.uniqueId),name:"input-".concat(t.uniqueId),value:1,"unchecked-value":0},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v("\n      "+t._s(t.properties.title)+"\n    ")]),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"input-".concat(t.uniqueId,"-feedback"),state:t.state}},[t._v("\n      "+t._s(t.$t("common.required"))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);