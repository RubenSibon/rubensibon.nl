(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{338:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"hours_ago":"hour ago | hours ago","days_ago":"day ago | days ago"},"nl":{"hours_ago":"uur geleden | uren geleden","days_ago":"dag geleden | dagen geleden"}}'),delete t.options._Ctor}},347:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("3495635d",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(347)},372:function(t,e,n){var o=n(66)((function(i){return i[1]}));o.push([t.i,".post-date[data-v-4c55cc16]{display:flex;align-items:center;gap:0.25rem;}.post-date svg[data-v-4c55cc16]{height:1rem}.post-date svg[data-v-4c55cc16]{width:1rem}.post-date svg[data-v-4c55cc16]{fill:currentColor}",""]),t.exports=o},373:function(t,e,n){"use strict";var o=n(338),r=n.n(o);e.default=r.a},394:function(t,e,n){"use strict";n.r(e);n(10),n(16),n(19),n(50);var o=n(82),r=n(389),c=Object(o.a)({components:{SvgIconCalendar:function(){return n.e(24).then(n.t.bind(null,439,7))}},props:{isoDate:{type:String,default:(new Date).toISOString()},label:{type:String,default:""},showLabel:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0}},computed:{formattedDate:function(){var t=r.DateTime.fromISO(this.isoDate),e=r.DateTime.now(),n={};if(t.day===e.day){var o=Math.ceil(r.Interval.fromDateTimes(t,e).length("hours")),c=isNaN(o)?1:o;return"".concat(c," ").concat(this.$i18n.tc("hours_ago",c))}if(n.day="numeric",t.daysInYear<e.daysInYear&&t.daysInYear>=e.daysInYear-7){var l=Math.round(r.Interval.fromDateTimes(t,e).length("days")),d=isNaN(l)?1:l;return"".concat(d," ").concat(this.$i18n.tc("days_ago",d))}return n.month="long",t.year!==e.year&&(n.year="numeric"),t.setLocale(this.$i18n.locale).toLocaleString(n)}}}),l=(n(371),n(57)),d=n(373),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-date ie-gap-horizontal-xs",attrs:{title:(t.label?t.label+": ":"")+t.formattedDate}},[t.showIcon?n("SvgIconCalendar",{attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),n("span",{class:t.showLabel?"":"sr-only"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.formattedDate)+"\n  ")])],1)}),[],!1,null,"4c55cc16",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports}}]);