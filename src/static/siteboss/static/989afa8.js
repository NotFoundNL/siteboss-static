(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{746:function(e,t,n){e.exports={}},762:function(e,t,n){"use strict";n(746)},798:function(e,t,n){"use strict";n.r(t);n(33),n(10),n(66),n(68),n(545),n(205);var o={props:{value:{type:Object,default:function(){}},field:{type:Object,default:function(){}},seen:{type:Boolean,default:!1}},computed:{title:function(){return this.field.properties.label.nl},filename:function(){return this.value.value[0]?this.value.value[0].filename:""},userInput:function(){return!(!this.value||!this.value.value)}},methods:{downloadPrice:function(){this.actualDownloadFile("/app/site/projects/".concat(this.$route.params.project,"/entry/").concat(this.$route.params.entry,"/price/"))},actualDownloadFile:function(e){var t=this;this.$axios({url:"".concat(e),method:"POST",responseType:"blob",data:{fieldId:this.field.id}}).then((function(e){if(404!==e.status){var n=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=n,o.setAttribute("download",t.filename),document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(o)}else alert("Bestand bestaat mogelijk niet meer.")})).catch((function(e){alert(e)}))}}},l=(n(762),n(63)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("p",[e._v("\n    De prijsinformatie mag pas worden gedownload nadat de beoordeling op\n    kwaliteit is gedaan.\n  ")]),e._v(" "),e.seen?t("p",[e._v("\n    De prijsinformatie is al bekeken en de inschrijver is al per e-mail op de\n    hoogte gebracht.\n  ")]):t("p",[e._v("\n    Weet je zeker dat je deze nu wilt downloaden? De inschrijver wordt per\n    e-mail op de hoogte gebracht.\n  ")]),e._v(" "),t("b-button",{attrs:{type:"primary"},on:{click:e.downloadPrice}},[e._v("Download")])],1)}),[],!1,null,"67b07215",null);t.default=component.exports}}]);