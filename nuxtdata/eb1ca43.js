(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,11],{326:function(t,o,e){var content=e(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("03e831ee",content,!0,{sourceMap:!1})},328:function(t,o,e){"use strict";e(326)},329:function(t,o,e){var n=e(68)(!1);n.push([t.i,'.common-bottom-box{width:100%;height:1.28rem;background:url("/image/bottom/bg.svg") no-repeat;background-size:100% auto;background-color:#fff;position:fixed;left:0px;bottom:0px}.common-bottom-box .bottom-btn{width:0.84rem;height:0.82667rem;background:url("/image/bottom/btn.svg") no-repeat;background-size:100% auto;position:fixed;right:0.29333rem;bottom:0.24rem}',""]),t.exports=n},332:function(t,o,e){"use strict";e.r(o);var n={name:"CommonBottom",data:function(){return{}},methods:{goTop:function(){this.$emit("gotopbtn")}}},r=(e(328),e(35)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"common-bottom-box"},[t("div",{staticClass:"bottom-btn",on:{click:this.goTop}})])}),[],!1,null,null,null);o.default=component.exports},336:function(t,o,e){var content=e(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("7581e4e4",content,!0,{sourceMap:!1})},362:function(t,o,e){"use strict";e(336)},363:function(t,o,e){var n=e(68)(!1);n.push([t.i,'.detail-top-tit{padding:0.26667rem 0.24rem 0px}.detail-top-tit .bigtit{color:#000;overflow:hidden}.detail-top-tit .bigtit .bigtit-chinese{font-weight:700;font-size:0.48rem;line-height:0.48rem;font-family:"jcyt 700"}.detail-top-tit .bigtit .bigtit-english{font-weight:800;font-size:0.48rem;line-height:0.48rem;white-space:nowrap;font-family:"aotf Heavy"}',""]),t.exports=n},399:function(t,o,e){var content=e(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("68adecb0",content,!0,{sourceMap:!1})},461:function(t,o,e){"use strict";e.r(o);var n={name:"AboutusTopTit",data:function(){return{}},methods:{}},r=(e(362),e(35)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"detail-top-tit"},[o("div",{staticClass:"bigtit"},[o("div",{staticClass:"bigtit-chinese"},[t._v("认识给油所")]),t._v(" "),o("div",{staticClass:"bigtit-english"},[t._v("ABOUT US")])])])}],!1,null,null,null);o.default=component.exports},473:function(t,o,e){"use strict";e(399)},474:function(t,o,e){var n=e(68)(!1);n.push([t.i,".container{width:100vw;height:100vh;padding-top:0.64rem;overflow-y:auto;overflow-x:hidden;padding-bottom:1.28rem}",""]),t.exports=n},551:function(t,o,e){"use strict";e.r(o);e(14),e(25),e(26);var n={name:"AboutusPage",components:{AboutusTopTit:function(){return Promise.resolve().then(e.bind(null,461))},AboutusContent:function(){return Promise.resolve().then(e.bind(null,548))},CommonBottom:function(){return Promise.resolve().then(e.bind(null,332))}},methods:{goTop:function(){this.$refs.container.scrollTo({top:0,behavior:"smooth"})}}},r=(e(473),e(35)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{ref:"container",staticClass:"container"},[o("AboutusTopTit"),t._v(" "),o("AboutusContent"),t._v(" "),o("CommonBottom",{on:{gotopbtn:t.goTop}})],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{AboutusTopTit:e(461).default,AboutusContent:e(548).default,CommonBottom:e(332).default})}}]);