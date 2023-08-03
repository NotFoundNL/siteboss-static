(window.webpackJsonp=window.webpackJsonp||[]).push([[106,79],{738:function(e,t,n){e.exports={primary:"#5b3776"}},754:function(e,t,n){"use strict";n(738)},774:function(e,t,n){e.exports={}},789:function(e,t,n){"use strict";n.r(t);var r=n(38),c=(n(98),n(238),n(13),n(10),{props:{strapiProjectId:{type:Number,required:!0}},data:function(){return{challenge_name:"",challenges:[],idle:!0}},fetch:function(){var e=this;this.$axios.get("/app/site/projects/".concat(this.strapiProjectId,"/challenges/")).then((function(t){e.challenges=t.data})).catch((function(e){alert(e)}))},computed:{moreThanOne:function(){return this.challenges.filter((function(e){return e.enabled})).length>1}},methods:{addChallenge:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.idle=!1,t.next=3,e.$axios.post("/app/site/projects/".concat(e.strapiProjectId,"/challenges/"),{challenge_name:e.challenge_name}).then((function(t){return e.idle=!0,e.challenge_name="",t.data})).catch((function(e){alert(e)}));case 3:e.challenges=t.sent;case 4:case"end":return t.stop()}}),t)})))()},updateChallengeStatus:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.idle=!1,r.next=3,n.$axios.put("/app/site/projects/".concat(n.strapiProjectId,"/challenges/"),{challenge:parseInt(e,10),status:t}).then((function(e){return n.idle=!0,e.data})).catch((function(e){alert(e)}));case 3:n.challenges=r.sent;case 4:case"end":return r.stop()}}),r)})))()}}}),o=(n(754),n(63)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[0==e.challenges.length?t("div",[t("h2",[e._v("Er zijn nog geen challenges, maak er eentje aan.")])]):t("div",[t("h1",[e._v("Dit zijn de challenges")]),e._v(" "),t("p",[e._v("Je moet minimaal één challenge hebben voor dit project.")]),e._v(" "),t("b-list-group",e._l(e.challenges,(function(n){return t("b-list-group-item",{key:n.id},[t("div",{staticClass:"d-flex"},[e.moreThanOne||!n.enabled?t("b-form-checkbox",{attrs:{name:"check-button",value:1,"unchecked-value":0,switch:""},on:{change:function(t){return e.updateChallengeStatus(n.id,n.enabled)}},model:{value:n.enabled,callback:function(t){e.$set(n,"enabled",t)},expression:"challenge.enabled"}}):t("strong",[e._v("ACTIEF: ")]),e._v("\n          "+e._s(n.challenge_name)+"\n        ")],1)])})),1)],1),e._v(" "),e.idle?t("div",[t("label",[e._v("Voeg een nieuwe challenge toe")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.addChallenge()}}},[t("b-input",{staticClass:"mb-3",attrs:{"aria-placeholder":"naam van de challenge",required:""},model:{value:e.challenge_name,callback:function(t){e.challenge_name=t},expression:"challenge_name"}}),e._v(" "),t("b-button",{staticClass:"btn-signin-purple",attrs:{type:"submit"}},[e._v("\n        Maak challenge\n      ")])],1)]):t("div",[t("p",[e._v("Momentje...")])])])}),[],!1,null,null,null);t.default=component.exports},819:function(e,t,n){"use strict";n(774)},845:function(e,t,n){"use strict";n.r(t);n(50);var r=n(2),c=n(38),o=(n(98),n(10),n(17),n(16),n(13),n(18),n(14),n(19),n(730));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{Challenges:n(789).default},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c,o,l,h,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,c=r.project,t.next=4,n.get("/app/site/projects/".concat(c,"/"));case 4:return o=t.sent,l=o.data,t.next=8,fetch("/strapi/projects/".concat(l.strapi_id));case 8:return h=t.sent,data=h.data,t.abrupt("return",{projectSiteboss:l,project:data});case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{project:{},applicationInfo:[]}},methods:{parseDate:function(e){var t=h(h({},o.DateTime.DATE_SHORT),{},{month:"long"});return o.DateTime.fromSeconds(parseInt(e,10)).setLocale("nl").toLocaleString(t)}}},v=(n(819),n(63)),component=Object(v.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-color"},[t("div",{staticClass:"container-custom"},[t("div",{staticClass:"header-signin"},[t("div",{staticClass:"header"},[t("h4",[e._v(e._s(e.projectSiteboss.name))]),e._v(" "),t("p",[e._v("\n          Deadline inschrijving:\n          "),t("b",[e._v(e._s(e.parseDate(e.projectSiteboss.deadline)))])]),e._v(" "),t("p",[e._v("\n          Aantal complete inschrijvingen:\n          "),t("b",[e._v(e._s(e.projectSiteboss.finishedApplicationsCount))])]),e._v(" "),t("p",[e._v("\n          Aantal conceptinschrijvingen:\n          "),t("b",[e._v(e._s(e.projectSiteboss.conceptApplicationsCount))])])]),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"small-width-signin signin-part"},[t("div",{staticClass:"item-inschrijving"},[t("Challenges",{attrs:{"strapi-project-id":parseInt(e.projectSiteboss.strapi_id)}})],1)])])])}),[function(){var e=this._self._c;return e("div",[e("button",{staticClass:"btn-signin-purple locked"},[this._v("Exporteer")])])}],!1,null,"aecf0404",null);t.default=component.exports}}]);