(window.webpackJsonp=window.webpackJsonp||[]).push([[37,54],{541:function(t,e,n){"use strict";n.r(e);n(16),n(80),n(238);var l={props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},cols:{type:Number,default:12},description:{type:String,default:""},internal:{type:String,required:!0}},setup:function(){}},r=n(63),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:"col-".concat(t.cols)},[e("b-form-group",{attrs:{id:"input-group-".concat(t.internal),description:t.description}},[e("label",{attrs:{"label-for":"input-".concat(t.internal)}},[t._v("\n      "+t._s(t.label)),t.required?e("span",{staticClass:"required-star"},[t._v(" *")]):t._e()]),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},566:function(t,e,n){"use strict";n.r(e);n(16),n(80),n(51),n(28);var l=n(711),r=n(9),o={components:{BFormTimepicker:l.a},props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:r.default,required:!0}},data:function(){return{value:"",editing:!1,time:"",displayValue:"",onTouched:!0,mounting:!0,valid:!this.properties.required}},computed:{state:function(){return this.onTouched?null:this.valid}},watch:{displayValue:function(t){this.mounting||(this.onTouched=!1),this.editing&&this.checkValid(t)},time:function(t){this.mounting||(this.onTouched=!1),null===t?(this.editing||(this.displayValue=""),this.value=null,this.valid=!this.properties.required):(this.valid=!0,this.editing||(this.displayValue=this.time.slice(0,5))),this.value=this.time,this.updateValues()}},beforeMount:function(){var t=this;if(this.data){var e=""===this.data.value?null:this.data.value;this.displayValue=e?e.slice(0,5):"",this.time=e}this.$nextTick((function(){t.mounting=!1}))},created:function(){var t=this;this.bus.$on("setStatus",(function(e){t.onTouched=!1}))},mounted:function(){this.updateValues()},methods:{setInputMode:function(){this.displayValue=null===this.time?"":this.time.slice(0,5),this.editing=!0},checkValid:function(t){""===t||null==t?this.properties.required?this.valid=!1:(this.valid=!0,this.value=null):this.valid=/^([0-1]{0,1}[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t),this.valid&&!this.editing&&this.updateTimeField()},updateValues:function(){this.$emit("updateValues",{field:this.internal,valid:this.valid,value:this.value})},updateTimeField:function(){4===this.displayValue.length&&(this.displayValue="0".concat(this.displayValue)),this.time="".concat(this.displayValue,":00")},fixInput:function(){if(this.editing=!1,""===this.displayValue)return this.time=null,void(this.valid=!this.properties.required);this.valid?(this.updateTimeField(),this.valid=!0):this.valid=!1,this.updateValues()}}},d=n(63),component=Object(d.a)(o,(function(){var t,e=this,n=e._self._c;return n("CommonAutolayoutLabelWrapper",{attrs:{label:e.properties.title,description:e.properties.description,required:e.properties.required,internal:e.internal,cols:null!==(t=e.properties.cols)&&void 0!==t?t:12}},[e.valid||e.onTouched?e._e():n("div",{staticClass:"input-feedback",attrs:{id:"input-".concat(e.internal,"-feedback")}},[e._v("\n    "+e._s(e.$t("common.required"))+"\n  ")]),e._v(" "),n("b-input-group",{staticClass:"mb-3"},[n("b-input-group-prepend",[n("b-form-timepicker",e._b({attrs:{"button-only":"",left:"",state:e.state,id:"input-".concat(e.internal),locale:this.$i18n.locale,disabled:e.properties.disabled,"no-close-button":""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"b-form-timepicker",e.$t("timepicker"),!1))],1),e._v(" "),n("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"HH:mm",maxlength:"5",state:e.state,disabled:e.properties.disabled},on:{focus:function(t){return e.setInputMode()},blur:function(t){return e.fixInput()}},model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonAutolayoutLabelWrapper:n(541).default})}}]);