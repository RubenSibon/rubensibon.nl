(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{374:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("42867636",content,!0,{sourceMap:!1})},379:function(t,e,r){"use strict";r(374)},380:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".articles[data-v-a2f55bf2]{margin-left:auto;margin-right:auto;width:100%;max-width:1920px;padding:1.25rem;min-height:var(--vp-height);}.articles-header[data-v-a2f55bf2]{margin-bottom:1.25rem}.articles .📰[data-v-a2f55bf2]{display:flex}.articles .📰[data-v-a2f55bf2]{flex-direction:column}.articles .📰[data-v-a2f55bf2]{gap:0.75rem}.articles .📰-title[data-v-a2f55bf2]{font-size:1.5rem;line-height:2rem}.articles .📰-list[data-v-a2f55bf2]{display:flex}.articles .📰-list[data-v-a2f55bf2]{align-items:center}.articles .📰-list[data-v-a2f55bf2]{gap:0.75rem}.articles .📰-list[data-v-a2f55bf2]{font-size:0.875rem;line-height:1.25rem}",""]),t.exports=n},417:function(t,e,r){"use strict";r.r(e);r(34),r(25),r(33),r(41),r(29),r(42);var n=r(55),c=r(14),l=r(4),o=(r(49),r(232),r(43),r(16));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(o.a)({nuxtI18n:{paths:{en:"/articles",nl:"/artikelen"}},data:function(){return{articles:[]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").fetch();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:"".concat(this.$t("Articles")," ").concat(this.$t("by")," Ruben Sibon"),htmlAttrs:d({},t.htmlAttrs),meta:Object(n.a)(t.meta),link:Object(n.a)(t.link)}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),m=(r(379),r(6)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SlideScreen",{staticClass:"articles",attrs:{adjacent:{left:"/"}}},[r("h1",{staticClass:"articles-header"},[t._v("\n    "+t._s(t.$t("Articles"))+"\n  ")]),t._v(" "),t.articles.length?t._l(t.articles,(function(article){return r("nuxt-link",{key:article.slug,staticClass:"📰",attrs:{to:t.localePath("/articles/"+article.slug),title:article.title}},[r("h2",{staticClass:"📰-title"},[t._v("\n        "+t._s(article.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"📰-list"},[r("div",{staticClass:"font-semibold"},[t._v("\n          "+t._s(t.formatDate(article.createdAt))+"\n        ")]),t._v(" "),article.tags?r("div",{staticClass:"font-semibold"},[t._v("\n          "+t._s(t.$t("tagList."+article.tags[0]))+"\n        ")]):t._e()]),t._v(" "),r("div",{staticClass:"text-sm"},[r("p",[t._v(t._s(article.description))])]),t._v(" "),article.tags?r("div",{staticClass:"flex gap-1 text-xs"},[r("span",{staticClass:"font-semibold"},[t._v(t._s(t.$t("Tags"))+":")]),t._l(article.tags,(function(e){return r("span",{key:e},[t._v(t._s(t.$t("tagList."+e)))])}))],2):t._e()])})):[t._v("\n    Loading articles...\n  ")]],2)}),[],!1,null,"a2f55bf2",null);e.default=component.exports;installComponents(component,{SlideScreen:r(143).default})}}]);