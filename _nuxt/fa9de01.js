(window.webpackJsonp=window.webpackJsonp||[]).push([[26,6,8,10,11,16,18],{374:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("99c6dc4a",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(11),n(25),n(26);var r=n(95),o=Object(r.a)({components:{SvgIconHome:function(){return n.e(41).then(n.t.bind(null,505,7))},SvgIconTag:function(){return n.e(44).then(n.t.bind(null,506,7))},SvgIconCalendar:function(){return n.e(31).then(n.t.bind(null,507,7))},SvgIconClock:function(){return n.e(36).then(n.t.bind(null,508,7))},SvgIconChevronUp:function(){return n.e(35).then(n.t.bind(null,509,7))},SvgIconChevronRight:function(){return n.e(34).then(n.t.bind(null,510,7))},SvgIconChevronDown:function(){return n.e(32).then(n.t.bind(null,511,7))},SvgIconChevronLeft:function(){return n.e(33).then(n.t.bind(null,512,7))},SvgIconGitHub:function(){return n.e(39).then(n.t.bind(null,513,7))},SvgIconGitLab:function(){return n.e(40).then(n.t.bind(null,514,7))},SvgIconCodePen:function(){return n.e(37).then(n.t.bind(null,515,7))},SvgIconDevTo:function(){return n.e(38).then(n.t.bind(null,516,7))},SvgIconSO:function(){return n.e(43).then(n.t.bind(null,517,7))},SvgIconLinkedIn:function(){return n.e(42).then(n.t.bind(null,518,7))},SvgIconTwitter:function(){return n.e(45).then(n.t.bind(null,519,7))}},props:{svgIcon:{type:String,default:""},large:{type:Boolean,default:!1}}}),l=(n(377),n(66)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.svgIcon,{tag:"component",class:["icon",{large:t.large}]})}),[],!1,null,"301b5cc6",null);e.default=component.exports},377:function(t,e,n){"use strict";n(374)},378:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".icon[data-v-301b5cc6]{height:1rem;width:1rem;fill:currentColor}.icon.large[data-v-301b5cc6]{height:2rem;width:2rem}@media (min-width: 640px){.icon.large[data-v-301b5cc6]{height:2.5rem}.icon.large[data-v-301b5cc6]{width:2.5rem}}@media (min-width: 768px){.icon.large[data-v-301b5cc6]{height:3rem}.icon.large[data-v-301b5cc6]{width:3rem}}",""]),r.locals={},t.exports=r},379:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("60c51bac",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n.r(e);var r=n(95),o=Object(r.a)({props:{orientation:{type:String,default:null},onSide:{type:String,default:null}}}),l=(n(381),n(66)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nav",{class:["flex h-max sm:text-3xl md:text-4xl",t.orientation,"horizontal"===t.orientation?"justify-between w-full first:ml-4 md:first:ml-8 first:py-2 last:mr-4 md:last:mr-8 last:py-2":"flex-col items-center my-4","left"===t.onSide?"md:pr-8 first:mr-4 md:first:mr-8":"md:pl-8 first:ml-4 md:first:ml-8"]},[t._t("default")],2)}),[],!1,null,"11e7a404",null);e.default=component.exports;installComponents(component,{Nav:n(380).default})},381:function(t,e,n){"use strict";n(379)},382:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".vertical>a[data-v-11e7a404]{cursor:pointer;flex-direction:column;padding-left:1rem;padding-right:1rem}",""]),r.locals={},t.exports=r},383:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("0febc6e3",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n(383)},387:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".slide-screen[data-v-7af6d086]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:hidden;transform:translateX(calc(0*1%));transform:translateX(calc(var(--x, 0)*1%));scroll-behavior:smooth}",""]),r.locals={},t.exports=r},388:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"Your email":"Your email address","Your message":"Your message","Send":"Send","Hi":"Hi","Im reaching out because":"I\'m reaching out because","All the best":"All the best","Your name":"Your name"},"nl":{"Your email":"Je emailadres","Your message":"Je bericht","Send":"Verstuur","Hi":"Hoi","Im reaching out because":"Ik benader je omdat","All the best":"Groeten","Your name":"Je naam"}}'),delete t.options._Ctor}},393:function(t,e,n){"use strict";n.r(e);n(385),n(11),n(67);var r=n(95),o=n(410),l=n(375),c=Object(r.a)({props:{tag:{type:String,default:"main"},adjacent:{type:Object,default:function(){return{top:null,right:null,bottom:null,left:null}}},dragFactor:{type:Number,default:.5,validator:function(t){return t>0&&t<=1}}},data:function(){return{currentOffset:0}},computed:{overflowRatio:function(){return this.$refs.slideScreen.scrollWidth/this.$refs.slideScreen.offsetWidth}},methods:{onPan:function(t){var e=this,n=t.deltaX,r=t.deltaY,c=t.isFinal,d=window.innerWidth<=640?window.innerWidth:640,f=100*n/window.innerWidth,v=this.currentOffset+f,h=this.currentOffset,m=function(){o.a.fromTo(e.$refs.slideScreen,.4,{"--x":e.currentOffset},{"--x":h,ease:l.a.easeOut.config(1,.8),onComplete:function(){e.currentOffset=h}})};if(Math.abs(r)>Math.abs(n))m();else if(this.$refs.slideScreen.style.setProperty("--x",v.toString()),c){this.currentOffset=v;var _=100-100*this.overflowRatio;this.currentOffset<=_?h=_:this.currentOffset>=0&&(h=0),Math.abs(n)>d*this.dragFactor&&(this.adjacent.left&&n>50&&this.$router.push(this.localePath(this.adjacent.left)),this.adjacent.right&&n<-50&&this.$router.push(this.localePath(this.adjacent.right))),m()}}}}),d=(n(386),n(66)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"pan",rawName:"v-pan",value:t.onPan,expression:"onPan"}],ref:"slideScreen",tag:"component",staticClass:"slide-screen"},[t._t("default")],2)}),[],!1,null,"7af6d086",null);e.default=component.exports},394:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("0bdbecf0",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("d7e9989a",content,!0,{sourceMap:!1})},396:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("5cf69fb3",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n.r(e);var r=n(95),o=Object(r.a)({props:{tag:{type:String,default:"button"},variant:{type:String,default:null},classes:{type:String,default:""}}}),l=n(66),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",class:["inline-flex items-center justify-center gap-2 rounded-full border-2 border-current py-1 px-4 transition duration-500 ease-in-out bg-transparent text-purple-500 no-underline hover:shadow-sm hover:border-solid hover:border-purple-500 dark:hover:border-current hover:bg-purple-500 hover:text-white focus:outline-none focus-visible:shadow-sm focus-visible:border-solid focus-visible:border-purple-500 dark:focus-visible:border-current focus-visible:bg-purple-500 focus-visible:text-white",t.variant&&"border-current hover:border-current hover:text-white focus-visible:border-current focus-visible:text-white",("github"===t.variant||"codepen"===t.variant||"dev-to"===t.variant)&&"text-[#171515] dark:text-white hover:border-white hover:text-white dark:hover:text-[#171515] hover:bg-[#171515] dark:hover:bg-white focus-visible:border-white focus-visible:text-white dark:focus-visible:text-[#171515] focus-visible:bg-[#171515] dark:focus-visible:bg-white","gitlab"===t.variant&&"text-[#e2432a] hover:bg-[#e2432a] focus-visible:bg-[#e2432a]","stack-overflow"===t.variant&&"text-[#f58025] hover:bg-[#f58025] focus-visible:bg-[#f58025]","linkedin"===t.variant&&"text-[#0077b5] hover:bg-[#0077b5] focus-visible:bg-[#0077b5]","twitter"===t.variant&&"text-[#55acee] hover:bg-[#55acee] focus-visible:bg-[#55acee]",t.classes]},[t._t("before"),t._v(" "),t._t("default"),t._v(" "),t._t("after")],2)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"nl":{"Software Developer":"Softwareontwikkelaar","Connect with me":"Verbind met mij","Get in touch":"Start een gesprek","if it pleases you":"als het je pleziert","but really, only if you want to":"maar echt, alleen als je dat wilt","Contact":"Contact","Small print":"De kleine letters","About this site":"Over deze website"},"en":{"Software Developer":"Software Developer","Connect with me":"Connect with me","Get in touch":"Get in touch","if it pleases you":"if it pleases you","but really, only if you want to":"but really, only if you want to","Contact":"Contact","Small print":"Small print","About this site":"About this website"}}'),delete t.options._Ctor}},413:function(t,e,n){"use strict";n(394)},414:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"a[data-v-398b1d62]:active, a[data-v-398b1d62]:link, a[data-v-398b1d62]:visited{border-style:none}",""]),r.locals={},t.exports=r},415:function(t,e,n){"use strict";n(395)},416:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"section[data-v-384579d6]{min-height:100vh;min-height:var(--vp-height,100vh)}",""]),r.locals={},t.exports=r},417:function(t,e,n){"use strict";n(396)},418:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"html[is-ie]{section{height:100vh}}",""]),r.locals={},t.exports=r},419:function(t,e,n){"use strict";var r=n(388),o=n.n(r);e.default=o.a},443:function(t,e,n){t.exports=n.p+"img/ruben_sibon.9fd784e.jpg"},457:function(t,e,n){"use strict";n.r(e);n(385);var r=n(95),o=Object(r.a)({props:{target:{type:String,default:""},tabindex:{type:Number,default:0},title:{type:String,default:""},classes:{type:String,default:""},linkHandler:{type:Function,default:null}}}),l=(n(413),n(66)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{class:["flex items-center border-none",t.classes],attrs:{href:t.target,tabindex:t.tabindex,title:t.title},on:{click:function(e){return t.linkHandler(e,t.target)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.linkHandler(e,t.target)}}},[t._t("default")],2)}),[],!1,null,"398b1d62",null);e.default=component.exports},464:function(t,e,n){"use strict";n.r(e);n(415),n(417);var r=n(66),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col items-center w-screen min-h-screen justify-evenly max-w-screen-2xl"},[t._t("before"),t._v(" "),n("div",{staticClass:"flex flex-col items-center justify-center flex-1 w-full h-full px-4 md:px-8"},[t._t("default")],2),t._v(" "),t._t("after")],2)}),[],!1,null,"384579d6",null);e.default=component.exports},465:function(t,e,n){"use strict";n.r(e);var r=n(66),o=n(419),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"flex flex-col w-full max-w-screen-sm",attrs:{action:"https://formspree.io/f/myylyopp",method:"POST"}},[n("label",{staticClass:"mb-2 text-left"},[n("div",{staticClass:"pl-2 mb-1"},[t._v("\n        "+t._s(t.$t("Your email"))+":\n      ")]),t._v(" "),n("input",{staticClass:"w-full mb-2 resize-none rounded-xl text-gray-950",attrs:{type:"email",name:"_replyto",placeholder:"email@example.com"}})]),t._v(" "),n("label",{staticClass:"mb-2 text-left"},[n("div",{staticClass:"pl-2 mb-1"},[t._v("\n        "+t._s(t.$t("Your message"))+":\n      ")]),t._v(" "),n("textarea",{staticClass:"w-full rounded-xl text-gray-950",attrs:{name:"message",rows:"5",minlength:"10",maxlength:"1000",placeholder:t.$t("Hi")+" Ruben,\n"+t.$t("Im reaching out because")+" ...\n"+t.$t("All the best")+",\n"+t.$t("Your name")+"\n"}})]),t._v(" "),n("Button",{staticClass:"mb-2",attrs:{type:"submit"}},[t._v("\n      "+t._s(t.$t("Send"))+"\n    ")])],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{Button:n(407).default})},471:function(t,e,n){"use strict";var r=n(412),o=n.n(r);e.default=o.a},521:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(41),n(19),n(62),n(49),n(95)),l=n(154),c=n.n(l),d={container:"body",easing:"ease-in",offset:0,force:!0,cancelable:!0},f=Object(o.a)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.i18n,o=r.locale,e.next=4,n("".concat(o,"/about-me")).fetch();case 4:return l=e.sent,e.next=7,n("".concat(o,"/about-this-site")).fetch();case 7:return c=e.sent,e.abrupt("return",{locale:o,aboutMe:l,aboutThisSite:c});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{socials:[{id:"github",dest:"https://github.com/RubenSibon",iconId:"SvgIconGitHub",label:"GitHub"},{id:"gitlab",dest:"https://gitlab.com/RubenSibon",iconId:"SvgIconGitLab",label:"GitLab"},{id:"codepen",dest:"https://codepen.io/RubenSibon",iconId:"SvgIconCodePen",label:"CodePen"},{id:"dev-to",dest:"https://dev.to/rubensibon",iconId:"SvgIconDevTo",label:"Dev.to"},{id:"stack-overflow",dest:"https://stackoverflow.com/story/rubensibon",iconId:"SvgIconSO",label:"StackOverflow"},{id:"linkedin",dest:"https://www.linkedin.com/in/rubensibon",iconId:"SvgIconLinkedIn",label:"LinkedIn"},{id:"twitter",dest:"https://twitter.com/RubenSibon",iconId:"SvgIconTwitter",label:"Twitter"}]}},computed:{copyrightYears:function(){var t=(new Date).getFullYear();return"".concat(2021!==t?"".concat(2021," - "):"").concat(t)}},methods:{nextScreenHandler:function(t,e){t.preventDefault(),this.$router.currentRoute.fullPath!=="".concat(this.localePath("/")).concat(e)&&this.$router.replace("".concat(this.localePath("/")).concat(e)),c.a.scrollTo(e,500,d)}}}),v=n(66),h=n(471),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"🏡 flex flex-col items-center px-4 mx-auto text-center md:px-8"},[r("SlideScreen",{attrs:{adjacent:{}}},[r("SectionFullScreen",{attrs:{id:"about-me"},scopedSlots:t._u([{key:"after",fn:function(){return[r("Nav",{attrs:{orientation:"vertical"}},[r("NavLink",{attrs:{target:"#connect",tabindex:0,title:t.$t("More"),linkHandler:t.nextScreenHandler}},[t._v("\n            "+t._s(t.$t("More"))+"\n\n            "),r("Icon",{attrs:{"svg-icon":"SvgIconChevronDown",large:!0,"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("⬇")])],1)],1)]},proxy:!0}])},[r("figure",{staticClass:"mb-4 overflow-hidden border-4 rounded-full border-gray-950 dark:border-gray-50 sm:mb-6 w-36 h-36"},[r("picture",[r("source",{attrs:{srcset:n(443),type:"image/webp"}}),t._v(" "),r("img",{attrs:{src:n(443),alt:"A photo of this website's author."}})]),t._v(" "),r("figcaption",{staticClass:"sr-only"},[t._v("\n          A photo of this website's author.\n        ")])]),t._v(" "),r("h1",{staticClass:"mb-2"},[t._v("\n        Ruben Sibon\n      ")]),t._v(" "),r("h2",{staticClass:"mb-4 text-2xl font-semibold sm:mb-6"},[t._v("\n        "+t._s(t.$t("Software Developer"))+"\n      ")]),t._v(" "),r("div",{staticClass:"max-w-screen-sm md:max-w-screen-md"},[r("nuxt-content",{attrs:{document:t.aboutMe}})],1)])],1),t._v(" "),r("SectionFullScreen",{attrs:{id:"connect"},scopedSlots:t._u([{key:"after",fn:function(){return[r("Nav",{attrs:{orientation:"vertical"}},[r("NavLink",{attrs:{target:"#contact",tabindex:0,title:t.$t("Contact"),linkHandler:t.nextScreenHandler}},[t._v("\n          "+t._s(t.$t("Contact"))+"\n\n          "),r("Icon",{attrs:{"svg-icon":"SvgIconChevronDown",large:!0,"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("⬇")])],1)],1)]},proxy:!0}])},[r("div",[r("h2",[t._v("\n        "+t._s(t.$t("Connect with me"))+"\n      ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n        ("+t._s(t.$t("if it pleases you"))+")\n      ")]),t._v(" "),r("div",{staticClass:"grid w-full max-w-screen-md grid-cols-1 gap-3 px-4 mx-auto sm:grid-cols-4 md:grid-cols-12 sm:w-auto h-max ie-gap-vertical"},t._l(t.socials,(function(e){return r("Button",{key:e.id,attrs:{tag:"a",href:e.dest,target:"_blank",rel:"noopener noreferrer",variant:e.id,classes:"sm:col-span-2 md:col-span-6 last:odd:sm:col-start-2 sm:last:odd:col-end-4 md:last:odd:col-start-4 md:last:odd:col-end-10"},scopedSlots:t._u([{key:"before",fn:function(){return[r("span",[r("Icon",{attrs:{"svg-icon":e.iconId,"aria-hidden":"true"}})],1)]},proxy:!0}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.label))])])})),1)])]),t._v(" "),r("SectionFullScreen",{attrs:{id:"contact"},scopedSlots:t._u([{key:"after",fn:function(){return[r("Nav",{attrs:{orientation:"vertical"}},[r("NavLink",{attrs:{target:"#about-this-site",tabindex:0,title:t.$t("About this site"),linkHandler:t.nextScreenHandler}},[t._v("\n          "+t._s(t.$t("Small print"))+"\n\n          "),r("Icon",{attrs:{"svg-icon":"SvgIconChevronDown",large:!0,"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("⬇")])],1)],1)]},proxy:!0}])},[r("h2",[t._v("\n      "+t._s(t.$t("Get in touch"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n      ("+t._s(t.$t("but really, only if you want to"))+")\n    ")]),t._v(" "),r("ContactForm")],1),t._v(" "),r("SectionFullScreen",{attrs:{id:"about-this-site"}},[r("div",{staticClass:"max-w-screen-md"},[r("nuxt-content",{attrs:{document:t.aboutThisSite}}),t._v(" "),r("p",[t._v("\n        © Ruben Sibon "+t._s(t.copyrightYears)+".\n      ")])],1)])],1)}),[],!1,null,null,null);"function"==typeof h.default&&Object(h.default)(component);e.default=component.exports;installComponents(component,{Icon:n(376).default,NavLink:n(457).default,Nav:n(380).default,SectionFullScreen:n(464).default,SlideScreen:n(393).default,Button:n(407).default,ContactForm:n(465).default})}}]);