(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{420:function(t,e,n){var content=n(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("30d7f5e4",content,!0,{sourceMap:!1})},430:function(t,e,n){"use strict";n(420)},431:function(t,e,n){var r=n(83)((function(i){return i[1]}));r.push([t.i,".slide-screen[data-v-7af6d086]{-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow-x:hidden;transform:translateX(calc(0*1%));transform:translateX(calc(var(--x, 0)*1%));scroll-behavior:smooth}",""]),r.locals={},t.exports=r},457:function(t,e,n){"use strict";n.r(e);n(417),n(11),n(69);var r=n(104),o=n(460),l=n(411),c=Object(r.a)({props:{tag:{type:String,default:"main"},adjacent:{type:Object,default:function(){return{top:null,right:null,bottom:null,left:null}}},dragFactor:{type:Number,default:.5,validator:function(t){return t>0&&t<=1}}},data:function(){return{currentOffset:0}},computed:{overflowRatio:function(){return this.$refs.slideScreen.scrollWidth/this.$refs.slideScreen.offsetWidth}},methods:{onPan:function(t){var e=this,n=t.deltaX,r=t.deltaY,c=t.isFinal,f=window.innerWidth<=640?window.innerWidth:640,d=100*n/window.innerWidth,h=this.currentOffset+d,w=this.currentOffset,v=function(){o.a.fromTo(e.$refs.slideScreen,.4,{"--x":e.currentOffset},{"--x":w,ease:l.a.easeOut.config(1,.8),onComplete:function(){e.currentOffset=w}})};if(Math.abs(r)>Math.abs(n))v();else if(this.$refs.slideScreen.style.setProperty("--x",h.toString()),c){this.currentOffset=h;var m=100-100*this.overflowRatio;this.currentOffset<=m?w=m:this.currentOffset>=0&&(w=0),Math.abs(n)>f*this.dragFactor&&(this.adjacent.left&&n>50&&this.$router.push(this.localePath(this.adjacent.left)),this.adjacent.right&&n<-50&&this.$router.push(this.localePath(this.adjacent.right))),v()}}}}),f=(n(430),n(68)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(t.tag,{directives:[{name:"pan",rawName:"v-pan",value:t.onPan,expression:"onPan"}],ref:"slideScreen",tag:"component",staticClass:"slide-screen"},[t._t("default")],2)}),[],!1,null,"7af6d086",null);e.default=component.exports}}]);