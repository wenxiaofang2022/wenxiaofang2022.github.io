(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10,11,12,13,14],{316:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("b2fb6b7a",content,!0,{sourceMap:!1})},317:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("b19064bc",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";var o=n(10),r=n(5),c=n(3),l=n(113),m=n(18),d=n(12),h=n(203),f=n(43),v=n(87),x=n(204),w=n(4),_=n(86).f,y=n(35).f,C=n(17).f,k=n(324),N=n(319).trim,T="Number",j=r.Number,z=j.prototype,I=r.TypeError,A=c("".slice),E=c("".charCodeAt),M=function(t){var e=x(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,n,o,r,c,l,m,code,d=x(t,"number");if(v(d))throw I("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=N(d),43===(e=E(d,0))||45===e){if(88===(n=E(d,2))||120===n)return NaN}else if(48===e){switch(E(d,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(l=(c=A(d,2)).length,m=0;m<l;m++)if((code=E(c,m))<48||code>r)return NaN;return parseInt(c,o)}return+d};if(l(T,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var O,S=function(t){var e=arguments.length<1?0:j(M(t)),n=this;return f(z,n)&&w((function(){k(n)}))?h(Object(e),n,S):e},$=o?_(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;$.length>B;B++)d(j,O=$[B])&&!d(S,O)&&C(S,O,y(j,O));S.prototype=z,z.constructor=S,m(r,T,S,{constructor:!0})}},319:function(t,e,n){var o=n(3),r=n(24),c=n(13),l=n(320),m=o("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t){return function(e){var n=c(r(e));return 1&t&&(n=m(n,h,"")),2&t&&(n=m(n,f,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},320:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},321:function(t,e,n){"use strict";n(316)},322:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.common-head-nav{width:100%;height:0.64rem;background:#e1e1e1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;left:0px;top:0px;z-index:100;padding:0 0.24rem;-webkit-box-sizing:border-box;box-sizing:border-box}.common-head-nav .head-left{width:1.44rem;height:0.42667rem;border-radius:0.08rem;background:url("/image/head/icon-logo.svg") no-repeat;background-size:100%}.common-head-nav .head-center{width:2.32rem;height:0.37333rem;border-radius:0.08rem;background:#000;font-size:0.2rem;line-height:0.37333rem;color:#ff5c00;text-align:center;font-family:"xszt Regular"}.common-head-nav .head-center .num_span_box{width:0.64rem;display:inline-block;vertical-align:middle;position:relative;height:0.37333rem}.common-head-nav .head-center .num_span{position:absolute;left:0px;top:0.08rem;height:0.2rem;line-height:0.2rem;width:0.64rem;overflow:hidden;font-size:0.2rem}.common-head-nav .head-center .num_span span{float:right;width:0.2rem;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-text-orientation:upright;text-orientation:upright;margin-top:0em;-webkit-transition:margin-top 1.5s ease-out;-o-transition:margin-top 1.5s ease-out;transition:margin-top 1.5s ease-out}.common-head-nav .head-right{width:0.42667rem;height:0.42667rem;border-radius:0.08rem;background:url("/image/head/icon-nav.svg") no-repeat;background-size:100%}.common-head-nav .head-right.active{background:url("/image/head/icon-close.svg") no-repeat;background-size:100%}.common-head-nav .head-nav-poup{position:absolute;width:100%;height:3.45333rem;padding:0.37333rem 0.34667rem 0.29333rem 0.32rem;background:#f1f1f1;background:url("/image/head/head-nav-bg.svg") no-repeat;background-size:100% auto;left:0px;top:0.64rem;border-bottom-left-radius:0.26667rem;border-bottom-right-radius:0.26667rem;-webkit-box-shadow:0 0 0.04rem rgba(0,0,0,.5);box-shadow:0 0 0.04rem rgba(0,0,0,.5)}.common-head-nav .head-nav-poup .btn-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0.26667rem auto}.common-head-nav .head-nav-poup .btn-nav{background:#ff8442;border-radius:0.73333rem;color:#fff;text-align:center;-webkit-box-shadow:0 0 0.04rem rgba(0,0,0,.5);box-shadow:0 0 0.04rem rgba(0,0,0,.5);font-size:0.26667rem;font-family:"aotf Heavy"}.common-head-nav .head-nav-poup .btn-nav>span{position:relative;padding-right:0.37333rem}.common-head-nav .head-nav-poup .btn-nav>span i{font-size:0.16rem;line-height:0.21333rem;position:absolute;font-style:normal;top:0px;right:0px;font-family:"aotf Bold"}.common-head-nav .head-nav-poup .btn-nav.small{height:0.48rem;line-height:0.48rem}.common-head-nav .head-nav-poup .btn-nav.big{height:1.21333rem;line-height:1.21333rem}.common-head-nav .head-nav-poup .btn-nav.short{width:2.05333rem}.common-head-nav .head-nav-poup .btn-nav.long{width:4.32rem;margin:0 auto}',""]),t.exports=o},323:function(t,e,n){"use strict";n.r(e);n(318),n(42),n(143),n(66);var o={name:"HeadNav",data:function(){return{showNavPoup:!1}},computed:{geiyouCount:function(){return this.$store.state.counter}},watch:{geiyouCount:{handler:function(t){t&&this.getNum(t)}}},methods:{animateNum:function(t){var e=document.getElementsByClassName("left_div")[0],n=document.getElementsByClassName("middle_div")[0],o=document.getElementsByClassName("right_div")[0];e.style.marginTop=1-t[0]+"em",n.style.marginTop=-t[1]+"em",o.style.marginTop=-t[2]+"em",Number(t)<10&&(n.style.marginTop="0em",e.style.marginTop="0em"),Number(t)<100&&(e.style.marginTop="0em")},getNum:function(t){var e=this,n=(Array(3).join(0)+t).slice(-3);setTimeout((function(){e.animateNum(n)}),500)},goDaily:function(){this.$store.commit("increment"),this.$router.push({path:"/daily",query:{}})},goCaseList:function(){this.$store.commit("increment"),this.$router.push({path:"/caselist",query:{}})},goAboutus:function(){this.$store.commit("increment"),this.$router.push({path:"/aboutus",query:{}})},goContactus:function(){this.$store.commit("increment"),this.$router.push({path:"/contactus",query:{}})},headNavFn:function(){this.showNavPoup=!this.showNavPoup}}},r=(n(321),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-head-nav"},[e("div",{staticClass:"head-left"}),t._v(" "),t._m(0),t._v(" "),e("div",{class:[{active:t.showNavPoup},"head-right"],on:{click:t.headNavFn}}),t._v(" "),t.showNavPoup?e("div",{staticClass:"head-nav-poup"},[e("div",{staticClass:"btn-nav big long",on:{click:t.goCaseList}},[t._m(1)]),t._v(" "),e("div",{staticClass:"btn-list"},[e("div",{staticClass:"btn-nav small short",on:{click:t.goAboutus}},[t._m(2)]),t._v(" "),e("div",{staticClass:"btn-nav small short",on:{click:t.goContactus}},[t._m(3)])]),t._v(" "),e("div",{staticClass:"btn-nav small long",on:{click:t.goDaily}},[t._m(4)])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"head-center"},[e("span",[t._v("给油量：")]),t._v(" "),e("div",{staticClass:"num_span_box"},[e("div",{staticClass:"num_span"},[e("span",{staticClass:"right right_div"},[t._v("0123456789")]),t._v(" "),e("span",{staticClass:"middle middle_div"},[t._v("0123456789")]),t._v(" "),e("span",{staticClass:"left left_div"},[t._v("0123456789")])])]),t._v("L\n  ")])},function(){var t=this,e=t._self._c;return e("span",[t._v("WORKS"),e("i",[t._v("98#")])])},function(){var t=this,e=t._self._c;return e("span",[t._v("ABOUT"),e("i",[t._v("95#")])])},function(){var t=this,e=t._self._c;return e("span",[t._v("CONTACT"),e("i",[t._v("92#")])])},function(){var t=this,e=t._self._c;return e("span",[t._v("DAILY"),e("i",[t._v("10#")])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){var o=n(3);t.exports=o(1..valueOf)},326:function(t,e,n){"use strict";n(317)},327:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.common-bottom-box{width:100%;height:1.28rem;background:url("/image/bottom/bg.svg") no-repeat;background-size:100% auto;background-color:#fff;position:fixed;left:0px;bottom:0px}.common-bottom-box .bottom-btn{width:0.84rem;height:0.82667rem;background:url("/image/bottom/btn.svg") no-repeat;background-size:100% auto;position:fixed;right:0.29333rem;bottom:0.24rem}',""]),t.exports=o},329:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("1d83fb4c",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n.r(e);var o={name:"CommonBottom",data:function(){return{}},methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},r=(n(326),n(52)),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"common-bottom-box"},[t("div",{staticClass:"bottom-btn",on:{click:this.goTop}})])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("515f94a6",content,!0,{sourceMap:!1})},339:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("245df289",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n(329)},341:function(t,e,n){var o=n(83)(!1);o.push([t.i,"",""]),t.exports=o},359:function(t,e,n){"use strict";n.r(e);var o={props:["type","content","btns"],name:"CommonAlert",data:function(){return{}},methods:{}},r=(n(340),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-alert-box"},[e("div",{staticClass:"common-alert-wrapper"},[e("div",{staticClass:"common-alert-bg"}),t._v(" "),e("div",{staticClass:"common-alert-content"},[e("div",{staticClass:"common-alert-title"},[t._v(t._s(t.content.title))]),t._v(" "),e("div",{staticClass:"common-alert-text"},[t._v(t._s(t.content.text))]),t._v(" "),e("div",{staticClass:"common-alert-btns"},t._l(t.content.btns,(function(n,o){return e("div",{key:"common_alert_btn_"+o,staticClass:"common-alert-btn",on:{click:n.fn}},[t._v("\n        "+t._s(n.text)+"\n        ")])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n(338)},376:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.detail-top-tit{padding:0.26667rem 0.24rem 0px}.detail-top-tit .bigtit{color:#000;overflow:hidden}.detail-top-tit .bigtit .bigtit-chinese{font-weight:700;font-size:0.48rem;line-height:0.48rem;font-family:"jcyt 700"}.detail-top-tit .bigtit .bigtit-english{font-weight:800;font-size:0.48rem;line-height:0.48rem;white-space:nowrap;font-family:"aotf Heavy"}',""]),t.exports=o},377:function(t,e,n){"use strict";n(339)},378:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.contact-us-switch{padding:0.41333rem 0.24rem 0.26667rem;width:100%}.contact-us-switch .switch-btns{width:100%;height:0.58667rem;background:url("/image/contactus/btns-bg.svg") no-repeat;background-size:100% auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.contact-us-switch .switch-btns .btn{width:50%;height:100%;line-height:0.58667rem;text-align:center;font-size:0.24rem;color:#b3b3b3;font-family:"jcyt 700"}.contact-us-switch .switch-btns .btn span{position:relative}.contact-us-switch .switch-btns .btn span i{position:absolute;top:0px;font-size:0.10133rem;line-height:0.13333rem;font-family:"aotf Heavy";font-style:normal}.contact-us-switch .switch-btns .btn.active{background:url("/image/contactus/active-btn.svg") no-repeat rgba(0,0,0,0);background-size:100% 100%;color:#f1eff2}.contact-us-switch .switch-box{margin-top:0.26667rem}.contact-us-switch .switch-box .box-item.give-box .card-box{width:100%;height:1.28rem;background:url("/image/contactus/brief-bg.svg") no-repeat;background-size:100%;font-size:0.22667rem;line-height:0.26667rem;text-align:center;font-family:"jcyt 700";color:#313131;padding-top:0.37333rem}.contact-us-switch .switch-box .box-item.give-box .card-box .stars{position:relative}.contact-us-switch .switch-box .box-item.give-box .card-box .stars .star{width:0.36rem;height:0.36rem;background:url("/image/contactus/star.svg") no-repeat;background-size:100%;position:absolute;top:0.08rem}.contact-us-switch .switch-box .box-item.give-box .card-box .stars .star.left{left:0.22667rem}.contact-us-switch .switch-box .box-item.give-box .card-box .stars .star.right{right:0.22667rem}.contact-us-switch .switch-box .box-item.give-box .info-get{margin-top:0.26667rem}.contact-us-switch .switch-box .box-item.give-box .info-get .company-and-email{height:0.48rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.contact-us-switch .switch-box .box-item.give-box .info-get .company-and-email>div{width:2.21333rem;height:0.48rem;background:#d9d9d9;border-radius:0.06667rem;overflow:hidden;padding-left:0.16rem}.contact-us-switch .switch-box .box-item.give-box .info-get .company-and-email>div input{outline-style:none;width:100%;height:100%;border:none;background:#d9d9d9;font-size:0.21333rem;line-height:0.48rem;font-family:"jcyt 700";color:#b3b3b3}.contact-us-switch .switch-box .box-item.give-box .info-get .brief-box{margin-top:0.13333rem;width:100%;height:4.28rem;background:#d9d9d9;border-radius:0.06667rem}.contact-us-switch .switch-box .box-item.give-box .info-get .brief-box .placeholder-brief{font-family:"jcyt 700";font-size:0.46667rem;line-height:0.54667rem;color:#b3b3b3;text-transform:uppercase;padding:1.41333rem 0.42667rem;text-align:center}.contact-us-switch .switch-box .box-item.give-box .info-get .brief-box textarea{padding:0.26667rem;border-radius:0.06667rem;background:#d9d9d9;outline-style:none;width:100%;height:100%;border:none;font-size:0.21333rem;color:#313131;font-family:"jcyt 700"}.contact-us-switch .switch-box .box-item.give-box .info-get .send-btn{width:2.44rem;height:0.61333rem;margin:0 auto;margin-top:0.26667rem;background:url("/image/contactus/active-btn.svg") no-repeat;background-size:100% 100%;color:#f1eff2;text-align:center;line-height:0.58667rem;font-size:0.24rem;font-family:"jcyt 700"}.contact-us-switch .switch-box .box-item.join-box .card-box{width:100%;background:url("/image/contactus/join-text.svg") no-repeat;height:3.4rem;background-size:100% 3.4rem}',""]),t.exports=o},455:function(t,e,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("64271887",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n.r(e);var o={name:"ContactusTopTit",data:function(){return{}},methods:{}},r=(n(375),n(52)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-top-tit"},[e("div",{staticClass:"bigtit"},[e("div",{staticClass:"bigtit-chinese"},[t._v("联系给油所")]),t._v(" "),e("div",{staticClass:"bigtit-english"},[t._v("CONTACT US")])])])}],!1,null,null,null);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);n(14),n(30),n(31);var o=n(82),r=n.n(o),c={name:"ContactusSwitch",components:{CommonAlert:function(){return Promise.resolve().then(n.bind(null,359))}},data:function(){return{activeIndex:0,showTexArea:!1,subdata:{company:null,email:null,brief:null},alertType:null,alertContent:{title:null,text:null},alertBtns:[{text:null,fn:null}]}},methods:{sendMessage:function(){this.subdata.company&&this.subdata.email&&this.subdata.brief,r()({method:"POST",url:"https://formspree.io/f/mqkjevep",data:this.subdata,params:null,baseURL:"",headers:{},withCredentials:!1}).then((function(t){})).catch((function(t){}))}}},l=(n(377),n(52)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-us-switch"},[e("div",{staticClass:"switch-btns"},[e("div",{class:[{active:0===t.activeIndex},"btn"],on:{click:function(e){t.activeIndex=0}}},[t._m(0)]),t._v(" "),e("div",{class:[{active:1===t.activeIndex},"btn"],on:{click:function(e){t.activeIndex=1}}},[e("span",[t._v("加入给油所")])])]),t._v(" "),e("div",{staticClass:"switch-box"},[0===t.activeIndex?e("div",{staticClass:"box-item give-box"},[t._m(1),t._v(" "),e("div",{staticClass:"info-get"},[e("form",{attrs:{action:"https://formspree.io/f/mqkjevep",method:"POST"}},[e("div",{staticClass:"company-and-email"},[e("div",{staticClass:"company"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.subdata.company,expression:"subdata.company"}],attrs:{placeholder:"公司"},domProps:{value:t.subdata.company},on:{input:function(e){e.target.composing||t.$set(t.subdata,"company",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"email"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.subdata.email,expression:"subdata.email"}],attrs:{placeholder:"邮箱"},domProps:{value:t.subdata.email},on:{input:function(e){e.target.composing||t.$set(t.subdata,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"brief-box"},[t.subdata.brief||t.showTexArea?t._e():e("div",{staticClass:"placeholder-brief",on:{click:function(e){t.showTexArea=!0}}},[t._v("写下需求吧"),e("br"),t._v("Write down your brief")]),t._v(" "),t.subdata.brief||t.showTexArea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subdata.brief,expression:"subdata.brief"}],domProps:{value:t.subdata.brief},on:{input:function(e){e.target.composing||t.$set(t.subdata,"brief",e.target.value)}}}):t._e()]),t._v(" "),e("div",{staticClass:"send-btn",on:{click:t.sendMessage}},[t._v("发送")])])])]):t._e(),t._v(" "),1===t.activeIndex?e("div",{staticClass:"box-item join-box"},[e("div",{staticClass:"card-box"})]):t._e()]),t._v(" "),e("CommonAlert",{attrs:{type:t.alertType,content:t.alertContent,btns:t.alertBtns}})],1)}),[function(){var t=this,e=t._self._c;return e("span",[t._v("一键给油"),e("i",[t._v("+")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-box"},[e("div",{staticClass:"stars"},[e("div",{staticClass:"star left"}),t._v(" "),e("div",{staticClass:"star right"})]),t._v("\n        想做酷酷的东西吗？"),e("br"),t._v("下brief给卡卅给油所吧！\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonAlert:n(359).default})},538:function(t,e,n){"use strict";n(455)},539:function(t,e,n){var o=n(83)(!1);o.push([t.i,'.container{width:100vw;min-height:100vh;padding-top:0.64rem;background:url("/image/bg.png") no-repeat 0px 0px;background-size:100% auto;overflow-x:hidden;padding-bottom:1.28rem}',""]),t.exports=o},551:function(t,e,n){"use strict";n.r(e);n(14),n(30),n(31);var o={name:"ContactusPage",components:{HeadNav:function(){return Promise.resolve().then(n.bind(null,323))},ContactusTopTit:function(){return Promise.resolve().then(n.bind(null,461))},ContactusSwitch:function(){return Promise.resolve().then(n.bind(null,462))},CommonBottom:function(){return Promise.resolve().then(n.bind(null,330))}}},r=(n(538),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HeadNav"),t._v(" "),e("ContactusTopTit"),t._v(" "),e("ContactusSwitch"),t._v(" "),e("CommonBottom")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeadNav:n(323).default,ContactusTopTit:n(461).default,ContactusSwitch:n(462).default,CommonBottom:n(330).default})}}]);