(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{747:function(e,n,t){e.exports={}},763:function(e,n,t){"use strict";t(747)},801:function(e,n,t){"use strict";t.r(n);var l={components:{},props:{field:{type:Object,required:!0}},data:function(){return{fieldId:null,newValue:""}},computed:{},mounted:function(){this.newValue=this.field.value},methods:{getValue:function(){return this.newValue}}},r=(t(763),t(63)),component=Object(r.a)(l,(function(){var e=this,n=e._self._c;return n("b-form-group",{attrs:{id:"fieldset-1",label:"Nieuwe waarde","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"Nieuwe waarde",trim:""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.$emit("submit")}},model:{value:e.newValue,callback:function(n){e.newValue=n},expression:"newValue"}})],1)}),[],!1,null,"efecc34c",null);n.default=component.exports}}]);