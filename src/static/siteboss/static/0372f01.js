(window.webpackJsonp=window.webpackJsonp||[]).push([[26,54],{541:function(e,t,n){"use strict";n.r(t);n(16),n(82),n(238);var r={props:{label:{type:String,required:!0},required:{type:Boolean,default:!1},cols:{type:Number,default:12},description:{type:String,default:""},internal:{type:String,required:!0}},setup:function(){}},l=n(63),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"col-".concat(e.cols)},[t("b-form-group",{attrs:{id:"input-group-".concat(e.internal),description:e.description}},[t("label",{attrs:{"label-for":"input-".concat(e.internal)}},[e._v("\n      "+e._s(e.label)),e.required?t("span",{staticClass:"required-star"},[e._v(" *")]):e._e()]),e._v(" "),e._t("default")],2)],1)}),[],!1,null,null,null);t.default=component.exports},557:function(e,t,n){e.exports={primary:"#5b3776"}},595:function(e,t,n){"use strict";n(557)},613:function(e,t,n){"use strict";n.r(t);n(16),n(82),n(51);var r=n(38),l=(n(36),n(98),n(9)),o={components:{},props:{internal:{type:String,required:!0},properties:{type:Object,default:function(){}},data:{type:Object,default:function(){}},bus:{type:l.default,required:!0}},data:function(){return{value:"",file:null,onTouched:!0,deleted:!1,valid:!this.properties.required||null!==this.file}},computed:{state:function(){return this.onTouched?null:this.valid}},watch:{file:function(e){this.onTouched=!1,this.checkValid(e),this.deleted=!1,this.updateValues()}},beforeMount:function(){this.data&&(this.value=this.data.value)},created:function(){var e=this;this.bus.$on("setStatus",(function(t){e.onTouched=!1}))},mounted:function(){this.updateValues()},methods:{copy:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.properties.downloadUrl);case 3:alert("Copied"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("Cannot copy");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},updateValues:function(){var e="".concat(this._uid).concat(this.internal,"_file"),t={files:this.file?[e]:[],delete:this.deleted};this.$emit("updateValues",{field:this.internal,valid:this.valid,value:t,files:null==this.file?[]:[{id:e,file:this.file}]})},deleteFile:function(){this.deleted=!this.deleted,this.updateValues()},removeNewFile:function(){this.file=null},checkValid:function(e){this.properties.required?this.valid=""!==e&&null!=e:this.valid=!0}}},c=(n(595),n(63)),component=Object(c.a)(o,(function(){var e,t=this,n=t._self._c;return n("CommonAutolayoutLabelWrapper",{attrs:{label:t.properties.title,description:t.properties.description,required:t.properties.required,internal:t.internal}},[t.valid||t.onTouched?t._e():n("div",{staticClass:"input-feedback",attrs:{id:"input-".concat(t.internal,"-feedback")}},[t._v("\n    "+t._s(t.$t("common.required"))+"\n  ")]),t._v(" "),null!==(e=t.value)&&void 0!==e&&e.name&&!t.file?n("p",{class:{filename:!0,deleted:t.deleted}},[n("em",[t._v(" "+t._s(t.value.name))]),t._v(" "),t.value.size?n("span",[t._v(t._s(t.value.size))]):t._e(),t._v(" "),void 0!==t.properties.downloadUrl&&""!==t.properties.downloadUrl?n("span",[n("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){return e.preventDefault(),t.copy.apply(null,arguments)}}},[t._v("\n        "+t._s(t.properties.downloadUrl)+" "),n("Icon",{attrs:{icon:"copy"}})],1)],1):t._e(),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary px-2",on:{click:function(e){return e.preventDefault(),t.deleteFile.apply(null,arguments)}}},[t.deleted?n("Icon",{attrs:{icon:"undo"}}):n("Icon",{attrs:{icon:"trash"}})],1)]):t._e(),t._v(" "),n("b-input-group",{staticClass:"mt-3"},[n("b-form-file",{attrs:{state:Boolean(t.file)||!t.properties.required,placeholder:"Kies een bestand","drop-placeholder":"Sleep hier een bestand..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),t.file?n("b-input-group-append",[n("b-button",{attrs:{variant:"danger"},on:{click:function(e){return e.preventDefault(),t.removeNewFile.apply(null,arguments)}}},[n("Icon",{attrs:{icon:"trash"}})],1)],1):t._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonAutolayoutLabelWrapper:n(541).default})}}]);