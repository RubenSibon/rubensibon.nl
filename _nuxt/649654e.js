(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{366:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3edca67d",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r(366)},371:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".articles[data-v-446e4b59]{margin-left:auto;margin-right:auto;width:100%;max-width:768px;padding-left:1rem;padding-right:1rem}@media (min-width: 640px){.articles[data-v-446e4b59]{padding-left:2rem;padding-right:2rem}}.articles .article[data-v-446e4b59]{display:flex}.articles .article[data-v-446e4b59]{flex-direction:column}.articles .article[data-v-446e4b59]{gap:0.75rem}.articles .article-head[data-v-446e4b59]{font-size:1.5rem;line-height:2rem}.articles .article-body[data-v-446e4b59]{display:flex}.articles .article-body[data-v-446e4b59]{align-items:center}.articles .article-body[data-v-446e4b59]{gap:0.75rem}.articles .article-body[data-v-446e4b59]{font-size:0.875rem;line-height:1.25rem}",""]),t.exports=n},406:function(t,e,r){"use strict";r.r(e);r(33),r(22),r(32),r(39),r(27),r(40);var n=r(53),c=r(13),l=r(3),o=(r(48),r(224),r(41),r(25));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(o.a)({asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:"".concat(this.$t("articles")," ").concat(this.$t("by")," Ruben Sibon"),htmlAttrs:f({},t.htmlAttrs),meta:Object(n.a)(t.meta),link:Object(n.a)(t.link)}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),v=(r(370),r(6)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"articles"},[r("h1",[t._v("Articles")]),t._v(" "),t._l(t.articles,(function(article){return r("nuxt-link",{key:article.slug,staticClass:"article",attrs:{to:t.localePath("/articles/"+article.slug),title:article.title}},[r("h2",{staticClass:"article-head"},[t._v("\n      "+t._s(article.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"article-body"},[r("div",{staticClass:"font-semibold"},[t._v("\n        "+t._s(t.formatDate(article.createdAt))+"\n      ")]),t._v(" "),article.tags?r("div",{staticClass:"font-semibold"},[t._v("\n        "+t._s(t.$t("tagList."+article.tags[0]))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"text-sm"},[r("p",[t._v(t._s(article.description))])]),t._v(" "),article.tags?r("div",{staticClass:"flex gap-1 text-xs"},[r("span",{staticClass:"font-semibold"},[t._v(t._s(t.$t("tags"))+":")]),t._l(article.tags,(function(e){return r("span",{key:e},[t._v(t._s(t.$t("tagList."+e)))])}))],2):t._e()])}))],2)}),[],!1,null,"446e4b59",null);e.default=component.exports}}]);