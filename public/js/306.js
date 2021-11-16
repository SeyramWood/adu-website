(self.webpackChunk=self.webpackChunk||[]).push([[306],{7196:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(3645),s=a.n(i)()((function(t){return t[1]}));s.push([t.id,".modal-fade-enter[data-v-46730c4b],.modal-fade-leave-to[data-v-46730c4b]{opacity:0}.modal-fade-enter-active[data-v-46730c4b],.modal-fade-leave-active[data-v-46730c4b]{transition:opacity .2s ease-in}",""]);const n=s},3325:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(3645),s=a.n(i)()((function(t){return t[1]}));s.push([t.id,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{font-feature-settings:"liga";align-items:center;display:inline-flex;font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);transition:opacity .2s cubic-bezier(.4,0,.6,1);width:100%}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]);const n=s},1900:(t,e,a)=>{"use strict";function i(t,e,a,i,s,n,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var _=c.render;c.render=function(t,e){return l.call(e),_(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}a.d(e,{Z:()=>i})},5306:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var i=a(9086),s=a(6454),n=a(1933),o=a(1547),r=a(8075),l=a(8741),c=a(728);const _={name:"StudentLifeSpotlight",layout:i.Z,components:{Link:s.rU,Banner:r.Z,SLinks:n.Z,SLink:o.Z,PageArticle:l.Z,SModal:c.Z},data:function(){return{eventModal:!1,currentEvent:null,events:[{title:"In collaboration with E-TAKARA",description:"In collaboration with E-Takara, the iiLab of A.D.U held an info session yesterday on the A.D.U campus. We were privileged to have previous laureates of the competition such as Latifa Salissou Hassane (via audio recording), Rafiou Ala Roi Fhad (in person) and Idriss Laouali Abdou (via video-recording) share with ADU Young Leaders about the incredible experience their participation in the competition has been for them. The E-Takara team also shared more about the vision behind the competition, as well as the selection criteria, before encouraging A.D.U Young Leaders to apply massively.",date:"December 25, 2021",image:"/storage/images/event-2.jpg"},{title:"iiLab Open House for the Kagamé cohort",description:"As lifelong members of the ilimi community, the iiLab’s support to the Kagamé cohort (which just graduated) will always be available. Nonetheless, for the upcoming months, the iiLab has an exciting and comprehensive entrepreneurship support program in store, just for the Kagamé Cohort, made up of large-group sessions, one-on-one sessions, some funding, and other activities aiming to equip our Kagame Cohort Young Leaders with tools and resources for them to catalyze their growth as entrepreneurs and that of their ideas, regardless of their current advancement level. The Open House allowed the iiLab to give out more details about the program which will be informed by insights from a currently ongoing needs-assessment process.\nNote: The iiLab also has exciting plans for the Wangari, Johnson and Jean cohorts, once they return to campus.\n",date:"September 14, 2021",image:"/storage/images/event-1.jpeg"}]}},methods:{getEventData:function(t){var e=this;this.currentEvent=t,this.$nextTick((function(){e.eventModal=!e.eventModal}))}}};const d=(0,a(1900).Z)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about"},[a("div",{staticClass:"banner__wrapper"},[a("banner",{attrs:{bg:"images/library-2.jpeg",title:"iiLab events"},scopedSlots:t._u([{key:"description",fn:function(){return[a("p",{staticStyle:{"padding-bottom":"4rem"}},[t._v("\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed\n          recusandae officia, similique quam, accusamus tempore consequuntur\n          dolores sapiente non, omnis blanditiis molestiae tempora aspernatur\n          distinctio a debitis qui quas necessitatibus!\n        ")])]},proxy:!0}])})],1),t._v(" "),a("div",{staticClass:"home__news",attrs:{id:"events"}},[a("div",{staticClass:"s__row"},[a("div",{staticClass:"s__col c--5"},[t._l(t.events,(function(e){return a("div",{key:e.name,staticClass:"iilab__events__link"},[a("span",[t._v(t._s(e.date.split(" ")[0].substr(0,3))+"\n            "+t._s(e.date.split(" ")[1].substr(0,2)))]),t._v(" "),a("a",{attrs:{role:"button"},on:{click:function(a){return t.getEventData(e)}}},[t._v(t._s(e.title.substr(0,50)+" "+(e.title.length>50?"...":"")))])])})),t._v(" "),a("div",{staticClass:"iilab__events__link__more"},[a("Link",{attrs:{href:"/iilab/events"}},[t._v("Load more")]),t._v(" "),a("span",[t._v("→")])],1)],2),t._v(" "),a("div",{staticClass:"s__col c--7"},[a("div",{staticClass:"iilab__events s__row"},t._l(t.events,(function(e){return a("div",{key:e.name,staticClass:"iilab__events__event s__col c--6"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image,alt:"event image",srcset:""}})]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(e.date))]),t._v(" "),a("a",{ref:"javascript:",refInFor:!0,staticClass:"link",attrs:{role:"button"},on:{click:function(a){return t.getEventData(e)}}},[t._v("\n              "+t._s(e.title.substr(0,32)+" "+(e.title.length>32?"...":""))+"\n            ")]),t._v(" "),a("div",{staticClass:"description"},[t._v("\n              "+t._s(e.description.substr(0,70)+" "+(e.description.length>70?"...":"."))+"\n            ")])])})),0)])])]),t._v(" "),a("s-modal",{attrs:{width:"50rem"},model:{value:t.eventModal,callback:function(e){t.eventModal=e},expression:"eventModal"}},[t.currentEvent?a("div",{staticClass:"event-details"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.currentEvent.image,alt:"event image",srcset:""}})]),t._v(" "),a("h1",[t._v(t._s(t.currentEvent.title))]),t._v(" "),a("p",[t._v("\n        "+t._s(t.currentEvent.description)+"\n      ")])]):t._e()])],1)}),[],!1,null,"177136a8",null).exports},9086:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(6454),s=a(9680);const n={name:"FrontEndLayout",components:{Link:i.rU},computed:{getLogoClass:function(){return this.logoClass}},beforeMount:function(){this.setLocale()},mounted:function(){var t=this,e=this.$refs.mainNav;window.addEventListener("scroll",(function(){0===e.getBoundingClientRect().top?t.logoClass="small":t.logoClass="big",window.innerHeight+window.scrollY>=document.body.offsetHeight?t.isTranslateButton=!0:t.isTranslateButton=!1}))},data:function(){return{logoClass:"big",toggleMobileNav:!1,isTranslateButton:!1}},methods:{changeLocale:function(t){var e=this;s.Inertia.visit("/locale/".concat(t),{preserveScroll:!0,onSuccess:function(a){var i=new Date;i.setDate(i.getDate()+7),document.cookie="locale=".concat(t,"; expires=").concat(i.toUTCString(),"; SameSite=Lax; Secure"),e.$lang.setLocale(t)}})},setLocale:function(){document.cookie.split(";").some((function(t){return t.trim().startsWith("locale=")}))?this.$lang.setLocale(document.cookie.split(";").find((function(t){return t.startsWith("locale=")})).split("=")[1]):this.$lang.setLocale(navigator.language.split("-")[0])}}};var o=a(1900),r=a(3453),l=a.n(r),c=a(422),_=(0,o.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("nav",{staticClass:"page__header__top"},[a("div",{staticClass:"page__header__top__brand"},[a("Link",{attrs:{href:"/"}},[t._v("African Development Universalis")])],1),t._v(" "),a("ul",{staticClass:"page__header__top__navigation"},[a("li",{staticClass:"page__header__top__navigation__link"},[a("a",{attrs:{href:" https://myilimilms.net/moodle",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("pages.navigation.8")))])]),t._v(" "),a("li",{staticClass:"page__header__top__navigation__link"},[a("Link",{attrs:{href:"/donate"}},[t._v(t._s(t.$t("pages.navigation.6")))])],1),t._v(" "),a("li",{staticClass:"page__header__top__navigation__link"},[a("a",{staticClass:"button",attrs:{href:"https://applications.eduappgh.com",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("pages.navigation.4")))])])]),t._v(" "),a("div",{staticClass:"locale-btn",attrs:{title:"Translate"}},[a("span",[t._v("\n        "+t._s(t.$t("pages.navigation.9"))+"\n      ")]),t._v(" "),a("div",{staticClass:"btns"},[a("button",{attrs:{type:"button"},on:{click:function(e){return t.changeLocale("en")}}},[t._v("English")]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(e){return t.changeLocale("fr")}}},[t._v("French")])])])]),t._v(" "),a("nav",{ref:"mainNav",staticClass:"page__header__main"},[a("div",{class:["page__header__logo",t.getLogoClass]},[a("img",{attrs:{src:"/storage/logo.png",alt:"A.D.U LOGO",srcset:""}})]),t._v(" "),a("div",{staticClass:"page__header__main__left"},[a("ul",{staticClass:"page__header__main__navigation"},[a("li",{class:["page__header__main__navigation__link",t.route().current("about")&&"active"]},[a("Link",{attrs:{href:"/about"}},[t._v(t._s(t.$t("pages.navigation.1")))])],1),t._v(" "),a("li",{class:["page__header__main__navigation__link",t.route().current("admissions")&&"active"]},[a("Link",{attrs:{href:"/admissions"}},[t._v(t._s(t.$t("pages.navigation.2")))])],1),t._v(" "),a("li",{class:["page__header__main__navigation__link",t.route().current("academics")&&"active"]},[a("Link",{attrs:{href:"/academics"}},[t._v(t._s(t.$t("pages.navigation.3")))])],1)])]),t._v(" "),a("div",{staticClass:"page__header__main__right"},[a("ul",{staticClass:"page__header__main__navigation"},[a("li",{class:["page__header__main__navigation__link",t.route().current("iilab*")&&"active"]},[a("Link",{attrs:{href:"/iilab"}},[t._v("IILab")])],1),t._v(" "),a("li",{class:["page__header__main__navigation__link",t.route().current("studentLife*")&&"active"]},[a("Link",{attrs:{href:"/student-life"}},[t._v(t._s(t.$t("pages.navigation.7")))])],1),t._v(" "),a("li",{class:["page__header__main__navigation__link",t.route().current("gallery")&&"active"]},[a("Link",{attrs:{href:"/gallery"}},[t._v(t._s(t.$t("pages.navigation.5")))])],1)])])]),t._v(" "),a("nav",{staticClass:"page__mobile__nav"},[a("div",{staticClass:"page__mobile__nav__content"},[a("div",{staticClass:"page__mobile__nav__content__brand"},[a("div",{staticClass:"logo"},[a("Link",{attrs:{href:"/"}},[a("img",{attrs:{src:"/storage/logo-2.png",alt:"A.D.U LOGO",srcset:""}})])],1),t._v(" "),a("div",{staticClass:"locale-btn",attrs:{title:"Translate"}},[a("span",[t._v("\n            "+t._s(t.$t("pages.navigation.9"))+"\n          ")]),t._v(" "),a("div",{staticClass:"btns"},[a("button",{attrs:{type:"button"},on:{click:function(e){return t.changeLocale("en")}}},[t._v("English")]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(e){return t.changeLocale("fr")}}},[t._v("French")])])])]),t._v(" "),a("div",{staticClass:"page__mobile__nav__content__icon",attrs:{role:"button"},on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("span",{class:["menu",t.toggleMobileNav&&"active"]})])])]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.toggleMobileNav,expression:"toggleMobileNav"}],class:["page__mobile__drawer"]},[a("div",{class:["page__mobile__drawer__content",t.toggleMobileNav&&"open"]},[a("ul",{staticClass:"mobile__navigation"},[a("li",{class:["mobile__navigation__link",t.route().current("about")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/about"}},[t._v(t._s(t.$t("pages.navigation.1")))])],1),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("admissions")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/admissions"}},[t._v(t._s(t.$t("pages.navigation.2")))])],1),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/academics"}},[t._v(t._s(t.$t("pages.navigation.3")))])],1),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/iilab"}},[t._v("IILab")])],1),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/student-life"}},[t._v(t._s(t.$t("pages.navigation.7")))])],1),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/gallery"}},[t._v(t._s(t.$t("pages.navigation.5")))])],1),t._v(" "),a("li",{staticClass:"mobile__navigation__link",on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("a",{attrs:{href:" https://myilimilms.net/moodle",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("pages.navigation.8")))])]),t._v(" "),a("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("Link",{attrs:{href:"/donate"}},[t._v(t._s(t.$t("pages.navigation.6")))])],1),t._v(" "),a("li",{class:["mobile__navigation__link button",t.route().current("academics")&&"active"],on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[a("a",{staticClass:"button",attrs:{href:"https://applications.eduappgh.com",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("pages.navigation.4")))])])])])]),t._v(" "),a("main",{staticClass:"page__main"},[t._t("default")],2),t._v(" "),a("section",{staticClass:"page__footer__social"},[a("div",{staticClass:"page__footer__social__line"}),t._v(" "),a("div",{staticClass:"page__footer__social__icons"},[a("a",{attrs:{href:"https://www.facebook.com/pg/aduniversalis/about/",target:"_blank",rel:"noopener noreferrer"}},[a("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),a("a",{attrs:{href:"https://twitter.com/ADULeads?s=20",target:"_blank",rel:"noopener noreferrer"}},[a("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),a("a",{attrs:{href:"instagram.com/africandevelopmentuniversalis",target:"_blank",rel:"noopener noreferrer"}},[a("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/school/african-development-university",target:"_blank",rel:"noopener noreferrer"}},[a("v-icon",[t._v("mdi-linkedin")])],1)]),t._v(" "),a("div",{staticClass:"page__footer__social__line"})]),t._v(" "),a("footer",{staticClass:"page__footer"},[a("section",{staticClass:"page__footer__bottom"},[t._m(0),t._v(" "),a("div",{staticClass:"page__footer__bottom__links"},[a("h3",{staticClass:"title"},[t._v(t._s(t.$t("pages.footer.ba")))]),t._v(" "),a("div",{staticClass:"address"},[a("p",[t._v("\n            "+t._s(t.$t("pages.footer.email"))+":\n            "),a("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),a("p",[t._v("\n            "+t._s(t.$t("pages.footer.phone"))+":\n            "),a("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),a("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])]),t._v(" "),a("div",{staticClass:"page__footer__bottom__links"},[a("h3",{staticClass:"title"},[t._v(t._s(t.$t("pages.footer.ai")))]),t._v(" "),a("div",{staticClass:"address"},[a("p",[t._v("\n            "+t._s(t.$t("pages.footer.email"))+":\n            "),a("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),a("p",[t._v("\n            "+t._s(t.$t("pages.footer.phone"))+":\n            "),a("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),a("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])]),t._v(" "),a("div",{staticClass:"page__footer__bottom__links"},[a("h3",{staticClass:"title"},[t._v(t._s(t.$t("pages.footer.ep")))]),t._v(" "),a("div",{staticClass:"address"},[a("p",[t._v("\n            "+t._s(t.$t("pages.footer.email"))+":\n            "),a("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),a("p",[t._v("\n            "+t._s(t.$t("pages.footer.phone"))+":\n            "),a("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),a("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])])]),t._v(" "),a("section",{staticClass:"page__footer__copyright"},[a("span",[t._v("©"+t._s((new Date).getUTCFullYear())+" A.D.U, All Right\n        Reserved")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page__footer__bottom__brand"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/storage/logo-1.png",alt:"A.D.U LOGO",srcset:""}})])])}],!1,null,"06549f42",null);const d=_.exports;l()(_,{VIcon:c.Z})},728:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});const i={name:"SModal",props:["value","width"],created:function(){var t=this;this.$watch((function(){return t.value}),(function(t){if(t){var e=document.documentElement.style.getPropertyValue("--scroll-y");document.body.style.position="fixed",document.body.style.top="-".concat(e)}else{var a=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(a||"0"))}})),window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}))},methods:{close:function(){this.$emit("input",!this.value)},data:function(){return{}}}};var s=a(3379),n=a.n(s),o=a(7196),r={insert:"head",singleton:!1};n()(o.Z,r);o.Z.locals;const l=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal-backdrop"},[a("div",{staticClass:"modal",style:""+(t.width&&"width:"+t.width+";"),attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-header"},[a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[a("span",[t._v("×")])])]),t._v(" "),a("section",{staticClass:"modal-body"},[t._t("default")],2)])])])}),[],!1,null,"46730c4b",null).exports},8075:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i={name:"Banner",props:{bg:{type:String,require:!0},title:{type:String,require:!0}},mounted:function(){this.$refs.banner.style='background-image:linear-gradient(\n                to right,\n                rgba(38, 38, 38, 0.8),\n                rgba(38, 38, 38, 0.3),\n                rgba(38, 38, 38, 0.3),\n                rgba(38, 38, 38, 0.8)\n            ), url("/storage/'.concat(this.bg,'");')}};const s=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"banner",staticClass:"banner"},[a("div",{staticClass:"banner__cta"},[a("div",{staticClass:"banner__cta__content"},[a("h1",{staticClass:"banner__cta__content__title"},[t._v(t._s(t.title))]),t._v(" "),a("article",{staticClass:"banner__cta__content__article"},[t._t("description")],2)]),t._v(" "),a("div",{staticClass:"banner__cta__links"},[t._t("links")],2)])])}),[],!1,null,"0dbd20ea",null).exports},8741:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i={name:"PageArticle",components:{Link:a(6454).rU},props:{image:{type:String,require:!1},imageRround:{type:Boolean,require:!0},title:{type:String,require:!0},btn:{type:Boolean,default:!1},btnText:{type:String,require:!0,default:"button"},ltr:{type:Boolean,default:!1},video:{type:Boolean,default:!1}},mounted:function(){}};const s=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["article",t.ltr&&"ltr"]},[a("div",{staticClass:"article__content"},[a("h1",{staticClass:"article__content__title"},[t._v(t._s(t.title))]),t._v(" "),t.video?a("section",{staticClass:"article__content__video"},[t._t("video")],2):t._e(),t._v(" "),a("article",{staticClass:"article__content__body"},[t._t("article")],2),t._v(" "),a("section",{staticClass:"article__content__leadership"},[t._t("leadership")],2),t._v(" "),a("section",{staticClass:"article__content__links"},[a("div",{staticClass:"article__content__links__left"},[t._t("links")],2),t._v(" "),a("div",{staticClass:"article__content__links__right"},[t._t("linksRight")],2)])]),t._v(" "),t.image?a("div",{staticClass:"article__image"},[a("div",{class:["image",t.imageRround&&"round"]},[a("img",{attrs:{src:"/storage/"+t.image,alt:"article image",srcset:""}})])]):a("div",{staticClass:"article__side__text"},[t._t("sideText")],2)])}),[],!1,null,"7a691788",null).exports},1547:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i={name:"Slink",components:{Link:a(6454).rU},props:{href:{require:!0,type:String},external:{require:!1,type:Boolean}},inject:["linkClass"]};const s=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:[t.linkClass]},["banner__link"===t.linkClass?a("Link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:t.href}},[t._t("default")],2):t.external?a("a",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._t("default")],2):a("Link",{attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,"c3e83274",null).exports},1933:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i={name:"Slinks",props:{type:{type:String,default:""}},computed:{getParentLinkClass:function(){return"article"===this.type?"article__links":"banner__links"},getChildLinkClass:function(){return"article"===this.type?"article__link":"banner__link"}},provide:function(){return{linkClass:this.getChildLinkClass}}};const s=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{class:[t.getParentLinkClass]},[t._t("default")],2)}),[],!1,null,"738ce0c2",null).exports},3453:t=>{t.exports=function(t,e){var a="function"==typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"==typeof t.exports&&(a.components=t.exports.options.components),a.components=a.components||{},e)a.components[i]=a.components[i]||e[i]}},422:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(3379),s=a.n(i),n=a(3325),o={insert:"head",singleton:!1};s()(n.Z,o);n.Z.locals;var r,l=a(6141),c=a(5836),_=a(2412),d=a(2066),v=a(8131),u=a(538),g=a(5530);!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));const h=(0,g.Z)(l.Z,c.Z,_.Z,d.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:()=>!1,hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,v.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,v.XP)(t).find((e=>t[e]));return e&&r[e]||(0,v.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const a=[],i=this.getDefaultData();let s="material-icons";const n=t.indexOf("-"),o=n<=-1;o?a.push(t):(s=t.slice(0,n),function(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}(s)&&(s="")),i.class[s]=!0,i.class[t]=!o;const r=this.getSize();return r&&(i.style={fontSize:r}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,a)},renderSvgIcon(t,e){const a={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(a.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const a={class:{"v-icon__component":!0}},i=this.getSize();i&&(a.style={fontSize:i,height:i,width:i}),this.applyColors(a);const s=t.component;return a.props=t.props,a.nativeOn=a.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,a)])}},render(t){const e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),p=u.default.extend({name:"v-icon",$_wrapperFor:h,functional:!0,render(t,{data:e,children:a}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(h,e,i?[i]:a)}})},6141:(t,e,a)=>{"use strict";function i(t){return function(e,a){for(const i in a)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const a in e)this.$set(this.$data[t],a,e[a])}}a.d(e,{Z:()=>s});const s=a(538).default.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},5836:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(538),s=a(8219),n=a(4771);const o=i.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"==typeof e.style?((0,s.N6)("style must be an object",this),e):"string"==typeof e.class?((0,s.N6)("class must be an object",this),e):((0,n.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"==typeof e.style)return(0,s.N6)("style must be an object",this),e;if("string"==typeof e.class)return(0,s.N6)("class must be an object",this),e;if((0,n.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[a,i]=t.toString().trim().split(" ",2);e.class={...e.class,[a+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},2412:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});const i=a(538).default.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2066:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i=a(538).default.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),s=i},5530:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});var i=a(538);function s(...t){return i.default.extend({mixins:t})}}}]);