(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12],{336:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("2c99e6bc",content,!0,{sourceMap:!1})},341:function(t,e,r){"use strict";r(336)},342:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".slide-screen[data-v-35b5ab4c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:hidden;transform:translateX(calc(0*1%));transform:translateX(calc(var(--x, 0)*1%));scroll-behavior:smooth}",""]),t.exports=n},357:function(t,e,r){"use strict";r.r(e);r(358),r(10),r(68);var n=r(82),c=r(388),o=r(335),l=Object(n.a)({props:{tag:{type:String,default:"main"},adjacent:{type:Object,default:{top:null,right:null,bottom:null,left:null}},dragFactor:{type:Number,default:.5,validator:function(t){return t>0&&t<=1}}},data:function(){return{currentOffset:0}},computed:{overflowRatio:function(){return this.$refs.slideScreen.scrollWidth/this.$refs.slideScreen.offsetWidth}},methods:{onPan:function(t){var e=this,r=t.deltaX,n=t.deltaY,l=t.isFinal,f=window.innerWidth<=640?window.innerWidth:640,d=100*r/window.innerWidth,h=this.currentOffset+d,m=this.currentOffset,v=function(){c.a.fromTo(e.$refs.slideScreen,.4,{"--x":e.currentOffset},{"--x":m,ease:o.a.easeOut.config(1,.8),onComplete:function(){e.currentOffset=m}})};if(Math.abs(n)>Math.abs(r))v();else if(this.$refs.slideScreen.style.setProperty("--x",h.toString()),l){this.currentOffset=h;var j=100-100*this.overflowRatio;this.currentOffset<=j?m=j:this.currentOffset>=0&&(m=0),Math.abs(r)>f*this.dragFactor&&(this.adjacent.left&&r>50&&this.$router.push(this.localePath(this.adjacent.left)),this.adjacent.right&&r<-50&&this.$router.push(this.localePath(this.adjacent.right))),v()}}}}),f=(r(341),r(57)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"pan",rawName:"v-pan",value:t.onPan,expression:"onPan"}],ref:"slideScreen",tag:"component",staticClass:"slide-screen"},[t._t("default")],2)}),[],!1,null,"35b5ab4c",null);e.default=component.exports},393:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("3d393b30",content,!0,{sourceMap:!1})},414:function(t,e,r){"use strict";r(393)},415:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".projects[data-v-6ac4395f]{margin-left:auto;margin-right:auto;width:100%;max-width:1920px;padding:1.25rem;min-height:100vh;min-height:var(--vp-height,100vh);}.projects-header[data-v-6ac4395f]{margin-bottom:1.25rem}.projects-header[data-v-6ac4395f]{display:flex}.projects-header[data-v-6ac4395f]{align-items:center}.projects-header[data-v-6ac4395f]{justify-content:flex-start}.projects-list[data-v-6ac4395f]{display:grid}.projects-list[data-v-6ac4395f]{gap:1.25rem}@media (min-width: 640px){.projects-list[data-v-6ac4395f]{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (min-width: 768px){.projects-list[data-v-6ac4395f]{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1024px){.projects-list[data-v-6ac4395f]{grid-template-columns:repeat(4, minmax(0, 1fr))}}.projects .👷‍♂️ figcaption[data-v-6ac4395f]{width:100%}.projects .👷‍♂️ figcaption[data-v-6ac4395f]{padding-top:1.25rem;padding-bottom:1.25rem}.projects .👷‍♂️ figcaption[data-v-6ac4395f]{text-align:left}",""]),t.exports=n},450:function(t,e,r){"use strict";r.r(e);r(29),r(18),r(28),r(36),r(23),r(37);var n=r(48),c=r(11),o=(r(50),r(207),r(82));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.a)({nuxtI18n:{paths:{en:"/projects",nl:"/projecten"}},head:function(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:"".concat(this.$t("Projects")," ").concat(this.$t("by")," Ruben Sibon"),htmlAttrs:f({},t.htmlAttrs),meta:Object(n.a)(t.meta),link:Object(n.a)(t.link)}},methods:{onPan:function(t){var e=window.innerWidth;Math.abs(t.deltaX)>.75*e&&t.deltaX<0&&this.$router.push(this.localePath("/"))}}}),h=(r(414),r(57)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SlideScreen",{staticClass:"projects",attrs:{adjacent:{right:"/"}}},[r("header",{staticClass:"projects-header"},[r("h1",[t._v(t._s(t.$t("Projects")))])]),t._v(" "),r("div",{staticClass:"projects-list"},t._l(12,(function(e){return r("figure",{key:e,staticClass:"👷‍♂️"},[r("img",{attrs:{src:"https://placeimg.com/640/480/tech",alt:"Stock photo"}}),t._v(" "),r("figcaption",[r("h2",{staticClass:"h3"},[t._v("\n          Een project\n        ")]),t._v(" "),r("p",[t._v("Korte beschrijving van het project.")])])])})),0)])}),[],!1,null,"6ac4395f",null);e.default=component.exports;installComponents(component,{SlideScreen:r(357).default})}}]);