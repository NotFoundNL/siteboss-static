(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{790:function(e,t,r){"use strict";r.r(t);r(51);var n=r(38),o=(r(98),r(238),{props:{projectId:{type:Number,required:!0}},data:function(){return{showForms:!0,success:!1,forms:[]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/app/site/projects/".concat(e.projectId,"/forms/")).then((function(e){return e.data})).catch((function(t){e.$sbToast.error("Er ging iets mis. Probeer het opnieuw.")}));case 2:e.forms=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{selectForm:function(e){var t=this;this.showForms=!1,this.$axios.post("/app/site/projects/".concat(this.projectId,"/forms/"),{form:parseInt(e,10)}).then(this.success=!0).catch((function(e){t.$sbToast.error("Error loading")}))}}}),c=r(63),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[0==e.forms.length?t("div",[t("p",[e._v("\n      Om een formulier te kunnen koppelen moet je er eerst eentje aanmaken.\n    ")]),e._v(" "),t("button",[t("router-link",{staticClass:"btn-signin-purple",attrs:{to:"/forms/c/forms"}},[e._v("Maak een formulier")])],1)]):e.showForms?t("div",[t("h1",[e._v("Kies een formulier:")]),e._v(" "),t("ul",e._l(e.forms,(function(form){return t("li",{key:form.id},[t("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.selectForm(form.id)}}},[e._v("\n          "+e._s(form.name)+"\n        ")])])})),0)]):t("div",[e.success?t("div",[e._v("Het is gelukt")]):t("p",[e._v("Momentje")])])])}),[],!1,null,null,null);t.default=component.exports}}]);