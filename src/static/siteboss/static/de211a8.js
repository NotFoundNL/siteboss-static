(window.webpackJsonp=window.webpackJsonp||[]).push([[100,62,63,64],{769:function(t,e,n){t.exports={}},785:function(t,e,n){"use strict";n.r(e);var o={props:["value","type"]},r=n(63),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("span",[t._v(t._s(t.value)+" ")])}),[],!1,null,null,null);e.default=component.exports},786:function(t,e,n){"use strict";n.r(e);var o={props:["value"],data:function(){return{}}},r=n(63),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("a",{attrs:{href:"mailto:"+t.value}},[t._v(t._s(t.value))])])}),[],!1,null,null,null);e.default=component.exports},787:function(t,e,n){"use strict";n.r(e);n(17),n(10),n(68),n(71),n(545),n(239);var o={props:["value"],computed:{jsonValue:function(){return JSON.parse(this.value)}},methods:{click:function(t){var e=this;this.$axios.get(t.url).then((function(n){(n.data||window.confirm("Het bestand dat geüpload is komt niet overeen met de gekozen bestand types. Weet je zeker dat je dit bestand wil downloaden?"))&&e.actualDownloadFile(t)})).catch((function(t){e.$sbToast.error("Error loading")}))},actualDownloadFile:function(t){var e=this;this.$axios({url:"".concat(t.url,"download"),method:"GET",responseType:"blob"}).then((function(e){if(404!==e.status){var n=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=n,o.setAttribute("download",t.filename),document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(o)}else alert("Bestand bestaat mogelijk niet meer.")})).catch((function(t){e.$sbToast.error("Error loading")}))}}},r=n(63),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.jsonValue,(function(n,o){return e("div",{key:o},[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.click(n)}}},[t._v("\n      "+t._s(n.filename)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},813:function(t,e,n){var map={"./Default.vue":785,"./Email.vue":786,"./File.vue":787};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=813},814:function(t,e,n){"use strict";n(769)},839:function(t,e,n){"use strict";n.r(e);var o=n(38),r=(n(98),n(44),n(10),n(71),n(30),n(171),n(240),n(36),n(68),n(545),n(239),n(9)),l=n(813);l.keys().map((function(t){var e=t.toLowerCase().match(/\w+/)[0];return r.default.component(e,l(t).default)}));var c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,e.abrupt("return",n.get("/forms/".concat(o.id,"/data/")).then((function(t){return{status:"ok",headerArray:t.data[0],contentArray:t.data.splice(1,t.data.length-1)}})).catch((function(t){var e;return 403===(null===(e=t.response)||void 0===e?void 0:e.status)?{status:"unauth"}:{status:"error"}})));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{showModal:!1,showModalDownload:!1,modalObj:null,editTable:!1}},methods:{showEditModal:function(t,e){this.modalObj={field:t,rowId:e},this.showModal=!0},HideEditModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.showModal=!1,t&&this.$nuxt.refresh()},deleteRow:function(t){var e=this;this.$sbConfirm({title:"confirm",message:"Weet je zeker dat je deze data wilt verwijderen?",callback:function(n){n&&e.$axios.delete("/forms/".concat(e.formId,"/data/").concat(t,"/")).catch((function(t){var n;e.$sbAlert({title:"error",message:null!==(n=t.response.data.message)&&void 0!==n?n:"Er ging iets mis"})})).then((function(n){if(n.status)for(var i=0;i<e.contentArray.length;i+=1)e.contentArray[i].id===t&&e.contentArray.splice(i,1)}))}})},downloadReport:function(){this.$axios.get(this.downloadUrl).then((function(t){return t.blob()})).then((function(t){var e=window.URL.createObjectURL(t),a=document.createElement("a");a.style.display="none",a.href=e,a.download="report.csv",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(e)})).catch((function(){return alert("Er is iets mis gegaan, probeer her opnieuw!")}))},typeThing:function(t){return r.default.options.components[t]?t:"default"},isCellEditable:function(t){return!!this.editTable&&!(!t.editable||!t.editable.edit)}}},d=c,f=(n(814),n(63)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",["unauth"===t.status?e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"mt-4 d-flex justify-content-between"},[t._v("\n      "+t._s(t.$t("forms.data.unauth"))+"\n    ")])]):"error"===t.status?e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"mt-4 d-flex justify-content-between"},[t._v("\n      "+t._s(t.$t("forms.data.error"))+"\n    ")])]):e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"mb-4 d-flex justify-content-between align-items-center"},[e("b-form-checkbox",{attrs:{name:"check-button",switch:""},model:{value:t.editTable,callback:function(e){t.editTable=e},expression:"editTable"}},[t._v("\n        "+t._s(t.$t("forms.export.edit"))+"\n      ")]),t._v(" "),e("b-button",{attrs:{variant:"primary"},on:{click:function(e){t.showModalDownload=!0}}},[t._v("\n        "+t._s(t.$t("forms.data.download"))+"\n      ")])],1),t._v(" "),e("b-table-simple",{attrs:{small:"","caption-top":"",responsive:""}},[e("b-thead",[e("b-tr",[t._l(t.headerArray,(function(header,n){return e("b-th",{key:n},[t._v("\n            "+t._s(header)+"\n          ")])})),t._v(" "),e("b-th")],2)],1),t._v(" "),e("b-tbody",t._l(t.contentArray,(function(n,o){return e("b-tr",{key:o},[t._l(n.value,(function(o,r){return e("b-td",{key:r},[t.isCellEditable(o)?e("span",{on:{click:function(e){return t.showEditModal(o,n.id)}}},[e("Icon",{attrs:{icon:"pen"}})],1):t._e(),t._v(" "),e(t.typeThing(o.type),t._b({tag:"component"},"component",o,!1))],1)})),t._v(" "),e("b-td",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{cursor:"pointer",color:"red"},on:{click:function(e){return t.deleteRow(n.id)}}},[e("Icon",{attrs:{icon:"trash"}})],1)],2)})),1)],1),t._v(" "),t.showModal?e("LazyFormbuilderModalsDataviewerEditField",t._b({on:{cancel:t.HideEditModal,done:function(e){return t.HideEditModal(!0)}}},"LazyFormbuilderModalsDataviewerEditField",t.modalObj,!1)):t._e(),t._v(" "),t.showModalDownload?e("LazyFormbuilderModalsDataviewerDownloadCSV",t._b({on:{cancel:function(e){t.showModalDownload=!1},done:function(e){return t.HideEditModal(!0)}}},"LazyFormbuilderModalsDataviewerDownloadCSV",t.modalObj,!1)):t._e()],1)],1)}),[],!1,null,"40405409",null);e.default=component.exports}}]);