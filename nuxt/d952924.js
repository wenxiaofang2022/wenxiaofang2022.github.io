(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{316:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("b2fb6b7a",content,!0,{sourceMap:!1})},318:function(e,t,n){"use strict";var o=n(10),r=n(5),m=n(3),c=n(113),l=n(18),d=n(12),h=n(203),v=n(43),f=n(87),_=n(204),x=n(4),w=n(86).f,y=n(35).f,N=n(17).f,k=n(324),C=n(319).trim,I="Number",E=r.Number,T=E.prototype,A=r.TypeError,z=m("".slice),$=m("".charCodeAt),j=function(e){var t=_(e,"number");return"bigint"==typeof t?t:F(t)},F=function(e){var t,n,o,r,m,c,l,code,d=_(e,"number");if(f(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(t=$(d,0))||45===t){if(88===(n=$(d,2))||120===n)return NaN}else if(48===t){switch($(d,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(m=z(d,2)).length,l=0;l<c;l++)if((code=$(m,l))<48||code>r)return NaN;return parseInt(m,o)}return+d};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,S=function(e){var t=arguments.length<1?0:E(j(e)),n=this;return v(T,n)&&x((function(){k(n)}))?h(Object(t),n,S):t},L=o?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)d(E,O=L[P])&&!d(S,O)&&N(S,O,y(E,O));S.prototype=T,T.constructor=S,l(r,I,S,{constructor:!0})}},319:function(e,t,n){var o=n(3),r=n(24),m=n(13),c=n(320),l=o("".replace),d="["+c+"]",h=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),f=function(e){return function(t){var n=m(r(t));return 1&e&&(n=l(n,h,"")),2&e&&(n=l(n,v,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},320:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(e,t,n){"use strict";n(316)},322:function(e,t,n){var o=n(83)(!1);o.push([e.i,'.common-head-nav{width:100%;height:0.64rem;background:#e1e1e1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;left:0px;top:0px;z-index:100;padding:0 0.24rem;-webkit-box-sizing:border-box;box-sizing:border-box}.common-head-nav .head-left{width:1.44rem;height:0.42667rem;border-radius:0.08rem;background:url("/image/head/icon-logo.svg") no-repeat;background-size:100%}.common-head-nav .head-center{width:2.32rem;height:0.37333rem;border-radius:0.08rem;background:#000;font-size:0.2rem;line-height:0.37333rem;color:#ff5c00;text-align:center;font-family:"xszt Regular"}.common-head-nav .head-center .num_span_box{width:0.64rem;display:inline-block;vertical-align:middle;position:relative;height:0.37333rem}.common-head-nav .head-center .num_span{position:absolute;left:0px;top:0.08rem;height:0.2rem;line-height:0.2rem;width:0.64rem;overflow:hidden;font-size:0.2rem}.common-head-nav .head-center .num_span span{float:right;width:0.2rem;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-text-orientation:upright;text-orientation:upright;margin-top:0em;-webkit-transition:margin-top 1.5s ease-out;-o-transition:margin-top 1.5s ease-out;transition:margin-top 1.5s ease-out}.common-head-nav .head-right{width:0.42667rem;height:0.42667rem;border-radius:0.08rem;background:url("/image/head/icon-nav.svg") no-repeat;background-size:100%}.common-head-nav .head-right.active{background:url("/image/head/icon-close.svg") no-repeat;background-size:100%}.common-head-nav .head-nav-poup{position:absolute;width:100%;height:3.45333rem;padding:0.37333rem 0.34667rem 0.29333rem 0.32rem;background:#f1f1f1;background:url("/image/head/head-nav-bg.svg") no-repeat;background-size:100% auto;left:0px;top:0.64rem;border-bottom-left-radius:0.26667rem;border-bottom-right-radius:0.26667rem;-webkit-box-shadow:0 0 0.04rem rgba(0,0,0,.5);box-shadow:0 0 0.04rem rgba(0,0,0,.5)}.common-head-nav .head-nav-poup .btn-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0.26667rem auto}.common-head-nav .head-nav-poup .btn-nav{background:#ff8442;border-radius:0.73333rem;color:#fff;text-align:center;-webkit-box-shadow:0 0 0.04rem rgba(0,0,0,.5);box-shadow:0 0 0.04rem rgba(0,0,0,.5);font-size:0.26667rem;font-family:"aotf Heavy"}.common-head-nav .head-nav-poup .btn-nav>span{position:relative;padding-right:0.37333rem}.common-head-nav .head-nav-poup .btn-nav>span i{font-size:0.16rem;line-height:0.21333rem;position:absolute;font-style:normal;top:0px;right:0px;font-family:"aotf Bold"}.common-head-nav .head-nav-poup .btn-nav.small{height:0.48rem;line-height:0.48rem}.common-head-nav .head-nav-poup .btn-nav.big{height:1.21333rem;line-height:1.21333rem}.common-head-nav .head-nav-poup .btn-nav.short{width:2.05333rem}.common-head-nav .head-nav-poup .btn-nav.long{width:4.32rem;margin:0 auto}',""]),e.exports=o},323:function(e,t,n){"use strict";n.r(t);n(318),n(42),n(143),n(66);var o={name:"HeadNav",data:function(){return{showNavPoup:!1}},computed:{geiyouCount:function(){return this.$store.state.counter}},watch:{geiyouCount:{handler:function(e){e&&this.getNum(e)}}},methods:{animateNum:function(e){var t=document.getElementsByClassName("left_div")[0],n=document.getElementsByClassName("middle_div")[0],o=document.getElementsByClassName("right_div")[0];t.style.marginTop=1-e[0]+"em",n.style.marginTop=-e[1]+"em",o.style.marginTop=-e[2]+"em",Number(e)<10&&(n.style.marginTop="0em",t.style.marginTop="0em"),Number(e)<100&&(t.style.marginTop="0em")},getNum:function(e){var t=this,n=(Array(3).join(0)+e).slice(-3);setTimeout((function(){t.animateNum(n)}),500)},goDaily:function(){this.$store.commit("increment"),this.$router.push({path:"/daily",query:{}})},goCaseList:function(){this.$store.commit("increment"),this.$router.push({path:"/caselist",query:{}})},goAboutus:function(){this.$store.commit("increment"),this.$router.push({path:"/aboutus",query:{}})},goContactus:function(){this.$store.commit("increment"),this.$router.push({path:"/contactus",query:{}})},headNavFn:function(){this.showNavPoup=!this.showNavPoup}}},r=(n(321),n(52)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"common-head-nav"},[t("div",{staticClass:"head-left"}),e._v(" "),e._m(0),e._v(" "),t("div",{class:[{active:e.showNavPoup},"head-right"],on:{click:e.headNavFn}}),e._v(" "),e.showNavPoup?t("div",{staticClass:"head-nav-poup"},[t("div",{staticClass:"btn-nav big long",on:{click:e.goCaseList}},[e._m(1)]),e._v(" "),t("div",{staticClass:"btn-list"},[t("div",{staticClass:"btn-nav small short",on:{click:e.goAboutus}},[e._m(2)]),e._v(" "),t("div",{staticClass:"btn-nav small short",on:{click:e.goContactus}},[e._m(3)])]),e._v(" "),t("div",{staticClass:"btn-nav small long",on:{click:e.goDaily}},[e._m(4)])]):e._e()])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"head-center"},[t("span",[e._v("给油量：")]),e._v(" "),t("div",{staticClass:"num_span_box"},[t("div",{staticClass:"num_span"},[t("span",{staticClass:"right right_div"},[e._v("0123456789")]),e._v(" "),t("span",{staticClass:"middle middle_div"},[e._v("0123456789")]),e._v(" "),t("span",{staticClass:"left left_div"},[e._v("0123456789")])])]),e._v("L\n  ")])},function(){var e=this,t=e._self._c;return t("span",[e._v("WORKS"),t("i",[e._v("98#")])])},function(){var e=this,t=e._self._c;return t("span",[e._v("ABOUT"),t("i",[e._v("95#")])])},function(){var e=this,t=e._self._c;return t("span",[e._v("CONTACT"),t("i",[e._v("92#")])])},function(){var e=this,t=e._self._c;return t("span",[e._v("DAILY"),t("i",[e._v("10#")])])}],!1,null,null,null);t.default=component.exports},324:function(e,t,n){var o=n(3);e.exports=o(1..valueOf)}}]);