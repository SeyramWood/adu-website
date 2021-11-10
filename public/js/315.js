(self.webpackChunk=self.webpackChunk||[]).push([[315],{3325:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(4015),n=i.n(s),a=i(3645),o=i.n(a)()(n());o.push([t.id,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{font-feature-settings:"liga";align-items:center;display:inline-flex;font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);transition:opacity .2s cubic-bezier(.4,0,.6,1);width:100%}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',"",{version:3,sources:["webpack://./node_modules/vuetify/src/styles/tools/_theme.sass","webpack://./node_modules/vuetify/src/components/VIcon/VIcon.sass","webpack://./node_modules/vuetify/src/components/VIcon/_variables.scss"],names:[],mappings:"AACE,qBCIA,qBAHF,CAKE,iCACE,WAHJ,CAKE,6CACE,+BAHJ,CDLE,oBCEA,UAOF,CALE,gCACE,WAOJ,CALE,4CACE,kCAOJ,CAHA,eAGE,4BAAA,CAFA,kBAAA,CACA,mBAAA,CAEA,cCjBU,CDkBV,sBAAA,CACA,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,aAAA,CACA,sDAAA,CAEA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CADA,qBAOF,CAJE,qBACE,6BAAA,CACA,iBAAA,CACA,UAAA,CACA,oBAAA,CACA,WAAA,CACA,MAAA,CACA,SAAA,CACA,mBAAA,CACA,iBAAA,CACA,KAAA,CACA,oBAAA,CAEA,8CAAA,CADA,UAOJ,CAJE,sBACE,cAMJ,CAHE,eACE,eAMJ,CALE,cACE,gBAOJ,CALE,4BACE,cAAA,CACA,YAOJ,CALE,kBACE,mBAOJ,CAJI,8CAEE,WAKN,CACE,gCAHE,WChEQ,CDiER,UAUJ,CARE,aAGE,iBAKJ",sourcesContent:["@mixin theme ($component)\n  .theme--light.#{$component}\n    @content($material-light)\n  .theme--dark.#{$component}\n    @content($material-dark)\n","// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-icon) using ($material)\n  color: map-deep-get($material, 'icons', 'active')\n\n  &:focus::after\n    opacity: map-deep-get($material, 'states', 'focus')\n\n  &.v-icon.v-icon--disabled\n    color: map-deep-get($material, 'icons', 'inactive') !important\n\n// Increased specificity to overwrite\n// iconfont css interference\n.v-icon.v-icon\n  align-items: center\n  display: inline-flex\n  font-feature-settings: 'liga'\n  font-size: $icon-size\n  justify-content: center\n  letter-spacing: normal\n  line-height: 1\n  position: relative\n  text-indent: 0\n  transition: $primary-transition, visibility 0s\n  vertical-align: middle\n  user-select: none\n\n  &::after\n    background-color: currentColor\n    border-radius: 50%\n    content: ''\n    display: inline-block\n    height: 100%\n    left: 0\n    opacity: 0\n    pointer-events: none\n    position: absolute\n    top: 0\n    transform: scale(1.3)\n    width: 100%\n    transition: opacity 0.2s map-get($transition, 'ease-in-out')\n\n  &--dense\n    font-size: $icon-size-dense\n\n.v-icon\n  &--right\n    margin-left: map-get($grid-gutters, 'md')\n  &--left\n    margin-right: map-get($grid-gutters, 'md')\n\n  &.v-icon.v-icon--link\n    cursor: pointer\n    outline: none\n\n  &--disabled\n    pointer-events: none\n\n  &--dense\n    &__component,\n    &__svg\n      height: $icon-size-dense\n\n  &__component\n    height: $icon-size\n    width: $icon-size\n\n  &__svg\n    height: $icon-size\n    width: $icon-size\n    fill: currentColor\n","@import '../../styles/styles.sass';\n\n$icon-size: 24px !default;\n$icon-size-dense: 20px !default;\n"],sourceRoot:""}]);const r=o},1900:(t,e,i)=>{"use strict";function s(t,e,i,s,n,a,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=r?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var _=c.render;c.render=function(t,e){return l.call(e),_(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}i.d(e,{Z:()=>s})},2315:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(2603),n=i(6454),a=i(1933),o=i(1547),r=i(8075),l=i(3037),c=i(4155);const _={name:"StudentLife",layout:s.Z,components:{Link:n.rU,Banner:r.Z,SLinks:a.Z,SLink:o.Z,PageArticle:l.Z},data:function(){return{slides:[{title:"Blossoming flower",content:"This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.",image:"".concat(c.env.BASE_URL,"images/flower.jpg"),video:{url:"https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1",props:{autoplay:!0,loop:!0,controls:!1,muted:!0}}},{title:"Blossoming flower",content:"This video is played once, has controls and is reacting to user interactions.",image:"".concat(c.env.BASE_URL,"images/flower.jpg"),video:{webm:"".concat(c.env.BASE_URL,"images/flower.webm"),mp4:"".concat(c.env.BASE_URL,"images/flower.mp4")}}]}}};const d=(0,i(1900).Z)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about"},[i("div",{staticClass:"banner__wrapper"},[i("banner",{attrs:{bg:"images/student-life-1.jpg",title:"Student Life"},scopedSlots:t._u([{key:"description",fn:function(){return[i("p",{staticStyle:{"padding-bottom":"4rem"}},[t._v("\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed\n          recusandae officia, similique quam, accusamus tempore consequuntur\n          dolores sapiente non, omnis blanditiis molestiae tempora aspernatur\n          distinctio a debitis qui quas necessitatibus!\n        ")])]},proxy:!0},{key:"links",fn:function(){return[i("s-links",[i("s-link",{attrs:{href:"#lifeOnCampus"}},[t._v("Life on Campus")]),t._v(" "),i("s-link",{attrs:{href:"#spotlight"}},[t._v("Spotlight")])],1)]},proxy:!0}])})],1),t._v(" "),i("section",{staticClass:"academics__major",attrs:{id:"lifeOnCampus"}},[i("h1",{staticClass:"title"},[t._v("LIFE ON CAMPUS")]),t._v(" "),i("div",{staticClass:"academics__major__links"},[i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("ilimi Student Government")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/ilimi-student-government"}},[t._v("\n            View More")])],1)]),t._v(" "),i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Internship and Career Services")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/internship-and-career-services"}},[t._v("\n            View More")])],1)])]),t._v(" "),i("div",{staticClass:"academics__major__links"},[i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Clubs and Societies")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/clubs-and-societies"}},[t._v("\n            View More")])],1)]),t._v(" "),i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Guest Lecture Series")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/guest-lecture-series"}},[t._v("\n            View More")])],1)])]),t._v(" "),i("div",{staticClass:"academics__major__links"},[i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Health and Well-being")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/health-and-well-being"}},[t._v("\n            View More")])],1)]),t._v(" "),i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Student Success Center")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/student-success-center"}},[t._v("\n            View More")])],1)])]),t._v(" "),i("div",{staticClass:"academics__major__links"},[i("div",{staticClass:"link"},[i("h3",{staticClass:"title"},[t._v("Alumni")]),t._v(" "),i("div",{staticClass:"link__box"},[i("Link",{attrs:{href:"/student-life/life-on-campuse/alumni"}},[t._v("\n            View More")])],1)])])]),t._v(" "),i("div",{staticClass:"home__spotlight",attrs:{id:"spotlight"}},[t._m(0),t._v(" "),i("div",{staticClass:"home__spotlight__container"},[i("div",{staticClass:"image__wrapper content--1"},[i("figure",{staticClass:"image"},[i("Link",{staticClass:"image__link"},[i("img",{attrs:{src:"/storage/images/news-2.jpg",alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"overlay"})]),t._v(" "),i("figcaption",{staticClass:"image__footer"},[i("h5",{staticClass:"title"},[t._v("SPIRIT OF GIVING CROWDFUNDING")]),t._v(" "),t._m(1),t._v(" "),i("Link",[t._v(" Read more ")])],1)],1)]),t._v(" "),i("div",{staticClass:"image__wrapper content--2"},[i("div",{staticClass:"wrapper--1"},[i("figure",{staticClass:"image"},[i("Link",{staticClass:"image__link"},[i("img",{attrs:{src:"/storage/images/business.jpg",alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"overlay"})]),t._v(" "),i("figcaption",{staticClass:"image__footer"},[i("h5",{staticClass:"title"},[t._v("SPIRIT OF GIVING CROWDFUNDING")]),t._v(" "),t._m(2),t._v(" "),i("Link",[t._v(" Read more ")])],1)],1)]),t._v(" "),i("div",{staticClass:"wrapper--1"},[i("figure",{staticClass:"image"},[i("Link",{staticClass:"image__link"},[i("img",{attrs:{src:"/storage/slides/slide-1.jpg",alt:"",srcset:""}}),t._v(" "),i("div",{staticClass:"overlay"})]),t._v(" "),i("figcaption",{staticClass:"image__footer"},[i("h5",{staticClass:"title"},[t._v("SPIRIT OF GIVING CROWDFUNDING")]),t._v(" "),t._m(3),t._v(" "),i("Link",[t._v(" Read more ")])],1)],1)])])])])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header primary mb-4"},[i("div",{staticClass:"line"}),t._v(" "),i("h4",{staticClass:"title"},[t._v("STUDENT SPOTLIGHT")]),t._v(" "),i("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("p",[t._v("Give back and impact current and future generations")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("p",[t._v("Give back and impact current and future generations")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("p",[t._v("Give back and impact current and future generations")])])}],!1,null,"254a33d5",null).exports},2603:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});const s={name:"FrontEndLayout",components:{Link:i(6454).rU},computed:{getLogoClass:function(){return this.logoClass}},mounted:function(){var t=this,e=this.$refs.mainNav;window.addEventListener("scroll",(function(){0===e.getBoundingClientRect().top?t.logoClass="small":t.logoClass="big"}))},data:function(){return{logoClass:"big",toggleMobileNav:!1}}};var n=i(1900),a=i(3453),o=i.n(a),r=i(422),l=(0,n.Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("nav",{staticClass:"page__header__top"},[i("div",{staticClass:"page__header__top__brand"},[i("Link",{attrs:{href:"/"}},[t._v("African Development Universalis")])],1),t._v(" "),i("ul",{staticClass:"page__header__top__navigation"},[t._m(0),t._v(" "),i("li",{staticClass:"page__header__top__navigation__link"},[i("Link",{attrs:{href:"/donate"}},[t._v("Donate")])],1),t._v(" "),t._m(1)])]),t._v(" "),i("nav",{ref:"mainNav",staticClass:"page__header__main"},[i("div",{class:["page__header__logo",t.getLogoClass]},[i("img",{attrs:{src:"/storage/logo.png",alt:"A.D.U LOGO",srcset:""}})]),t._v(" "),i("div",{staticClass:"page__header__main__left"},[i("ul",{staticClass:"page__header__main__navigation"},[i("li",{class:["page__header__main__navigation__link",t.route().current("about")&&"active"]},[i("Link",{attrs:{href:"/about"}},[t._v("About")])],1),t._v(" "),i("li",{class:["page__header__main__navigation__link",t.route().current("admissions")&&"active"]},[i("Link",{attrs:{href:"/admissions"}},[t._v("Admissions")])],1),t._v(" "),i("li",{class:["page__header__main__navigation__link",t.route().current("academics")&&"active"]},[i("Link",{attrs:{href:"/academics"}},[t._v("Academics")])],1)])]),t._v(" "),i("div",{staticClass:"page__header__main__right"},[i("ul",{staticClass:"page__header__main__navigation"},[i("li",{class:["page__header__main__navigation__link",t.route().current("iilab*")&&"active"]},[i("Link",{attrs:{href:"/iilab"}},[t._v("IILab")])],1),t._v(" "),i("li",{class:["page__header__main__navigation__link",t.route().current("studentLife*")&&"active"]},[i("Link",{attrs:{href:"/student-life"}},[t._v("Student Life")])],1),t._v(" "),i("li",{class:["page__header__main__navigation__link",t.route().current("gallery")&&"active"]},[i("Link",{attrs:{href:"/gallery"}},[t._v("Gallery")])],1)])])]),t._v(" "),i("nav",{staticClass:"page__mobile__nav"},[i("div",{staticClass:"page__mobile__nav__content"},[i("div",{staticClass:"page__mobile__nav__content__brand"},[i("div",{staticClass:"logo"},[i("Link",{attrs:{href:"/"}},[i("img",{attrs:{src:"/storage/logo-2.png",alt:"A.D.U LOGO",srcset:""}})])],1),t._v(" "),i("Link",{attrs:{href:"#",as:"button"}},[t._v("Apply")])],1),t._v(" "),i("div",{staticClass:"page__mobile__nav__content__icon",attrs:{role:"button"},on:{click:function(e){t.toggleMobileNav=!t.toggleMobileNav}}},[i("span",{class:["menu",t.toggleMobileNav&&"active"]})])])]),t._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:t.toggleMobileNav,expression:"toggleMobileNav"}],class:["page__mobile__drawer"]},[i("div",{class:["page__mobile__drawer__content",t.toggleMobileNav&&"open"]},[i("ul",{staticClass:"mobile__navigation"},[i("li",{class:["mobile__navigation__link",t.route().current("about")&&"active"]},[i("Link",{attrs:{href:"/about"}},[t._v("About")])],1),t._v(" "),i("li",{class:["mobile__navigation__link",t.route().current("admissions")&&"active"]},[i("Link",{attrs:{href:"/admissions"}},[t._v("Admissions")])],1),t._v(" "),i("li",{class:["mobile__navigation__link",t.route().current("academics")&&"active"]},[i("Link",{attrs:{href:"/academics"}},[t._v("Academics")])],1),t._v(" "),i("li",{staticClass:"mobile__navigation__link"},[i("Link",{attrs:{href:"#"}},[t._v("My Ilimi")])],1),t._v(" "),i("li",{staticClass:"mobile__navigation__link"},[i("Link",{attrs:{href:"#"}},[t._v("Donate")])],1)])])]),t._v(" "),i("main",{staticClass:"page__main"},[t._t("default")],2),t._v(" "),i("section",{staticClass:"page__footer__social"},[i("div",{staticClass:"page__footer__social__line"}),t._v(" "),i("div",{staticClass:"page__footer__social__icons"},[i("v-icon",[t._v("mdi-facebook")]),t._v(" "),i("v-icon",[t._v("mdi-twitter")]),t._v(" "),i("v-icon",[t._v("mdi-whatsapp")]),t._v(" "),i("v-icon",[t._v("mdi-instagram")]),t._v(" "),i("v-icon",[t._v("mdi-snpchat")])],1),t._v(" "),i("div",{staticClass:"page__footer__social__line"})]),t._v(" "),i("footer",{staticClass:"page__footer"},[t._m(2),t._v(" "),i("section",{staticClass:"page__footer__copyright"},[i("span",[t._v("©"+t._s((new Date).getUTCFullYear())+" A.D.U, All Right\n        Reserved")])])])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"page__header__top__navigation__link"},[i("a",{attrs:{href:" https://myilimilms.net/moodle",target:"_blank",rel:"noopener noreferrer"}},[t._v("My Ilimi")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"page__header__top__navigation__link"},[i("a",{staticClass:"button",attrs:{href:"https://applications.eduappgh.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apply")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"page__footer__bottom"},[i("div",{staticClass:"page__footer__bottom__brand"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:"/storage/logo-1.png",alt:"A.D.U LOGO",srcset:""}})])]),t._v(" "),i("div",{staticClass:"page__footer__bottom__links"},[i("h3",{staticClass:"title"},[t._v("Bachelor Admissions")]),t._v(" "),i("div",{staticClass:"address"},[i("p",[t._v("\n            Email:\n            "),i("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),i("p",[t._v("\n            Phone: "),i("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),i("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])]),t._v(" "),i("div",{staticClass:"page__footer__bottom__links"},[i("h3",{staticClass:"title"},[t._v("Artificial Intelligence")]),t._v(" "),i("div",{staticClass:"address"},[i("p",[t._v("\n            Email:\n            "),i("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),i("p",[t._v("\n            Phone: "),i("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),i("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])]),t._v(" "),i("div",{staticClass:"page__footer__bottom__links"},[i("h3",{staticClass:"title"},[t._v("English Program")]),t._v(" "),i("div",{staticClass:"address"},[i("p",[t._v("\n            Email:\n            "),i("a",{attrs:{href:"mailto:admissions@ilimi.edu.ne"}},[t._v("admissions@ilimi.edu.ne")])]),t._v(" "),i("p",[t._v("\n            Phone: "),i("a",{attrs:{href:"tel:+22792396868"}},[t._v("(+227) 92-39-68-68")]),t._v("/"),i("a",{attrs:{href:"tel:+22793396868"}},[t._v("(+227) 93-39-68-68")])])])])])}],!1,null,"030b6fba",null);const c=l.exports;o()(l,{VIcon:r.Z})},8075:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const s={name:"Banner",props:{bg:{type:String,require:!0},title:{type:String,require:!0}},mounted:function(){this.$refs.banner.style='background-image:linear-gradient(\n                to right,\n                rgba(38, 38, 38, 0.8),\n                rgba(38, 38, 38, 0.3),\n                rgba(38, 38, 38, 0.3),\n                rgba(38, 38, 38, 0.8)\n            ), url("/storage/'.concat(this.bg,'");')}};const n=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"banner",staticClass:"banner"},[i("div",{staticClass:"banner__cta"},[i("div",{staticClass:"banner__cta__content"},[i("h1",{staticClass:"banner__cta__content__title"},[t._v(t._s(t.title))]),t._v(" "),i("article",{staticClass:"banner__cta__content__article"},[t._t("description")],2)]),t._v(" "),i("div",{staticClass:"banner__cta__links"},[t._t("links")],2)])])}),[],!1,null,"0dbd20ea",null).exports},3037:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const s={name:"PageArticle",components:{Link:i(6454).rU},props:{image:{type:String,require:!1},imageRround:{type:Boolean,require:!0},title:{type:String,require:!0},btn:{type:Boolean,default:!1},btnText:{type:String,require:!0,default:"button"},ltr:{type:Boolean,default:!1},video:{type:Boolean,default:!1}},mounted:function(){}};const n=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["article",t.ltr&&"ltr"]},[i("div",{staticClass:"article__content"},[i("h1",{staticClass:"article__content__title"},[t._v(t._s(t.title))]),t._v(" "),t.video?i("section",{staticClass:"article__content__video"},[t._t("video")],2):t._e(),t._v(" "),i("article",{staticClass:"article__content__body"},[t._t("article")],2),t._v(" "),i("section",{staticClass:"article__content__leadership"},[t._t("leadership")],2),t._v(" "),i("section",{staticClass:"article__content__links"},[i("div",{staticClass:"article__content__links__left"},[t._t("links")],2),t._v(" "),i("div",{staticClass:"article__content__links__right"},[t._t("linksRight")],2)])]),t._v(" "),t.image?i("div",{staticClass:"article__image"},[i("div",{class:["image",t.imageRround&&"round"]},[i("img",{attrs:{src:"/storage/"+t.image,alt:"article image",srcset:""}})])]):t._e()])}),[],!1,null,"d9215fc6",null).exports},1547:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const s={name:"Slink",components:{Link:i(6454).rU},props:{href:{require:!0,type:String},external:{require:!1,type:Boolean}},inject:["linkClass"]};const n=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{class:[t.linkClass]},["banner__link"===t.linkClass?i("Link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:t.href}},[t._t("default")],2):t.external?i("a",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._t("default")],2):i("Link",{attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,"c3e83274",null).exports},1933:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const s={name:"Slinks",props:{type:{type:String,default:""}},computed:{getParentLinkClass:function(){return"article"===this.type?"article__links":"banner__links"},getChildLinkClass:function(){return"article"===this.type?"article__link":"banner__link"}},provide:function(){return{linkClass:this.getChildLinkClass}}};const n=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{class:[t.getParentLinkClass]},[t._t("default")],2)}),[],!1,null,"738ce0c2",null).exports},3453:t=>{t.exports=function(t,e){var i="function"==typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"==typeof t.exports&&(i.components=t.exports.options.components),i.components=i.components||{},e)i.components[s]=i.components[s]||e[s]}},422:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(3379),n=i.n(s),a=i(3325),o={insert:"head",singleton:!1};n()(a.Z,o);a.Z.locals;var r,l=i(6141),c=i(5836),_=i(2412),d=i(2066),v=i(8131),m=i(538),u=i(5530);!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));const p=(0,u.Z)(l.Z,c.Z,_.Z,d.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:()=>!1,hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,v.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,v.XP)(t).find((e=>t[e]));return e&&r[e]||(0,v.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let n="material-icons";const a=t.indexOf("-"),o=a<=-1;o?i.push(t):(n=t.slice(0,a),function(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}(n)&&(n="")),s.class[n]=!0,s.class[t]=!o;const r=this.getSize();return r&&(s.style={fontSize:r}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render(t){const e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),h=m.default.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,s?[s]:i)}})},6141:(t,e,i)=>{"use strict";function s(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const i in e)this.$set(this.$data[t],i,e[i])}}i.d(e,{Z:()=>n});const n=i(538).default.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},5836:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var s=i(538),n=i(8219),a=i(4771);const o=s.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"==typeof e.style?((0,n.N6)("style must be an object",this),e):"string"==typeof e.class?((0,n.N6)("class must be an object",this),e):((0,a.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"==typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"==typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,a.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},2412:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});const s=i(538).default.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2066:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const s=i(538).default.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),n=s},5530:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(538);function n(...t){return s.default.extend({mixins:t})}}}]);
//# sourceMappingURL=315.js.map?id=1b28153842cff66af23f