(window.webpackJsonp=window.webpackJsonp||[]).push([[74,57],{544:function(t,n,e){t.exports={}},546:function(t,n,e){"use strict";e.r(n);var o={},l=(e(567),e(63)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"modal show",staticStyle:{display:"block"},attrs:{tabindex:"-1",role:"dialog"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.$emit("cancel")}}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._t("title")],2),t._v(" "),n("button",{staticClass:"close cross",attrs:{type:"button","aria-label":"Close"},on:{click:function(n){return t.$emit("cancel")}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-full"},[t._t("full")],2),t._v(" "),t.$slots.full?t._e():n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.full?t._e():n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.$emit("cancel")}}},[t._t("btnCancel",(function(){return[t._v("Cancel")]}))],2),t._v(" "),t._t("btnConfirm",(function(){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.$emit("confirm")}}},[t._v("\n            REPLACE ME: Slot=btnConfirm\n          ")])]}))],2)])])])}),[],!1,null,"762284e4",null);n.default=component.exports},567:function(t,n,e){"use strict";e(544)},782:function(t,n,e){"use strict";e.r(n);e(50),e(238);var o=e(721),l=e(722),r={props:{id:{type:Number,required:!0},type:{type:String,required:!0}},setup:function(){return{v$:Object(o.a)()}},data:function(){return{name:""}},validations:function(){return{name:{required:l.d,minLength:Object(l.c)(4)}}},methods:{confirm:function(){var t=this;this.v$.$touch(),this.v$.$invalid||this.$axios.post("/forms/".concat(this.id,"/clone/"),{name:this.name}).then((function(){t.$emit("done")})).catch((function(t){alert(t)}))}}},c=e(63),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("CommonModalsModal",{on:{confirm:t.confirm,cancel:function(n){return t.$emit("cancel")}}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("Kopieer formulier")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Naam formulier")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"Naam formulier"},domProps:{value:t.name},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.confirm.apply(null,arguments)},input:function(n){n.target.composing||(t.name=n.target.value)}}})]),t._v(" "),t._l(t.v$.name.$errors,(function(e){return n("div",{key:e.$uid,staticClass:"is-invalid"},["required"===e.$validator?n("div",{staticClass:"invalid-feedback",staticStyle:{display:"block"}},[t._v("\n        "+t._s(t.$t("common.required"))+"\n      ")]):t._e(),t._v(" "),"minLength"===e.$validator?n("div",{staticClass:"invalid-feedback",staticStyle:{display:"block"}},[t._v("\n        Een naam moet minimaal "+t._s(t.v$.name.minLength.$params.min)+" tekens lang\n        zijn.\n      ")]):t._e()])}))],2),t._v(" "),n("div",{attrs:{slot:"btnConfirm"},slot:"btnConfirm"},[n("button",{staticClass:"btn btn-primary",on:{click:t.confirm}},[t._v("Clone")])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CommonModalsModal:e(546).default})}}]);