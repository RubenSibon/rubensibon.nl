(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{375:function(n,t,e){"use strict";e.r(t);e(11),e(25),e(26);var o=e(95),r=Object(o.a)({components:{SvgIconHome:function(){return e.e(41).then(e.t.bind(null,496,7))},SvgIconTag:function(){return e.e(44).then(e.t.bind(null,497,7))},SvgIconCalendar:function(){return e.e(31).then(e.t.bind(null,498,7))},SvgIconClock:function(){return e.e(36).then(e.t.bind(null,499,7))},SvgIconChevronUp:function(){return e.e(35).then(e.t.bind(null,500,7))},SvgIconChevronRight:function(){return e.e(34).then(e.t.bind(null,501,7))},SvgIconChevronDown:function(){return e.e(32).then(e.t.bind(null,502,7))},SvgIconChevronLeft:function(){return e.e(33).then(e.t.bind(null,503,7))},SvgIconGitHub:function(){return e.e(39).then(e.t.bind(null,504,7))},SvgIconGitLab:function(){return e.e(40).then(e.t.bind(null,505,7))},SvgIconCodePen:function(){return e.e(37).then(e.t.bind(null,506,7))},SvgIconDevTo:function(){return e.e(38).then(e.t.bind(null,507,7))},SvgIconSO:function(){return e.e(43).then(e.t.bind(null,508,7))},SvgIconLinkedIn:function(){return e.e(42).then(e.t.bind(null,509,7))},SvgIconTwitter:function(){return e.e(45).then(e.t.bind(null,510,7))}},props:{svgIcon:{type:String,default:""},large:{type:Boolean,default:!1}}}),l=e(66),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)(n.svgIcon,{tag:"component",class:["w-4 h-4 fill-current",{"w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12":n.large}]})}),[],!1,null,null,null);t.default=component.exports},385:function(n,t){n.exports=function(n){n.options.__i18n=n.options.__i18n||[],n.options.__i18n.push('{"en":{"hours_ago":"hour ago | hours ago","days_ago":"day ago | days ago"},"nl":{"hours_ago":"uur geleden | uren geleden","days_ago":"dag geleden | dagen geleden"}}'),delete n.options._Ctor}},396:function(n,t,e){var content=e(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(79).default)("30afa446",content,!0,{sourceMap:!1})},424:function(n,t,e){"use strict";e(396)},425:function(n,t,e){var o=e(78)((function(i){return i[1]}));o.push([n.i,".post-date[data-v-02b032d2]{display:flex;align-items:center;gap:0.25rem}",""]),o.locals={},n.exports=o},426:function(n,t,e){"use strict";var o=e(385),r=e.n(o);t.default=r.a},451:function(n,t,e){"use strict";e.r(t);e(41);var o=e(95),r=e(447),l=Object(o.a)({props:{isoDate:{type:String,default:(new Date).toISOString()},label:{type:String,default:""},showLabel:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0}},computed:{formattedDate:function(){var n=r.DateTime.fromISO(this.isoDate),t=r.DateTime.now(),e={};if(n.day===t.day){var o=Math.ceil(r.Interval.fromDateTimes(n,t).length("hours")),l=isNaN(o)?1:o;return"".concat(l," ").concat(this.$i18n.tc("hours_ago",l))}if(e.day="numeric",n.daysInYear<t.daysInYear&&n.daysInYear>=t.daysInYear-7){var c=Math.round(r.Interval.fromDateTimes(n,t).length("days")),d=isNaN(c)?1:c;return"".concat(d," ").concat(this.$i18n.tc("days_ago",d))}return e.month="long",n.year!==t.year&&(e.year="numeric"),n.setLocale(this.$i18n.locale).toLocaleString(e)}}}),c=(e(424),e(66)),d=e(426),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"post-date ie-gap-horizontal-xs",attrs:{title:(n.label?n.label+": ":"")+n.formattedDate}},[n.showIcon?e("Icon",{attrs:{"svg-icon":"SvgIconCalendar","aria-hidden":"true"}}):n._e(),n._v(" "),e("span",{class:n.showLabel?"":"sr-only"},[n._v("\n    "+n._s(n.label)+"\n  ")]),n._v(" "),e("span",[n._v("\n    "+n._s(n.formattedDate)+"\n  ")])],1)}),[],!1,null,"02b032d2",null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports;installComponents(component,{Icon:e(375).default})}}]);