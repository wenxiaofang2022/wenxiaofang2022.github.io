(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7,13],{325:function(t,o,e){var content=e(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("da9619be",content,!0,{sourceMap:!1})},326:function(t,o,e){"use strict";e(325)},327:function(t,o,e){var n=e(66)(!1);n.push([t.i,'.common-bottom-box{width:100%;height:1.42667rem;position:fixed;left:0px;bottom:0px}.common-bottom-box .bottom-bg{width:100%;height:1.42667rem;background:url("/image/bottom/bg.png") no-repeat;background-size:100% auto;position:absolute;z-index:1}.common-bottom-box .bottom-line-bg{width:100%;height:1.28rem;background:url("/image/bg.png") no-repeat 0px 0px;background-size:100% auto;background-color:#fff;position:absolute;z-index:0;bottom:0px;left:0px}.common-bottom-box .bottom-btn{width:0.89333rem;height:0.88rem;background:url("/image/bottom/btn.png") no-repeat;background-size:100% auto;position:fixed;right:0.29333rem;bottom:0.24rem;z-index:2}',""]),t.exports=n},329:function(t,o,e){"use strict";e.r(o);var n={name:"CommonBottom",data:function(){return{}},methods:{goTop:function(){this.$emit("gotopbtn")}}},r=(e(326),e(34)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"common-bottom-box"},[o("div",{staticClass:"bottom-line-bg"}),t._v(" "),o("div",{staticClass:"bottom-bg"}),t._v(" "),o("div",{staticClass:"bottom-btn",on:{click:t.goTop}})])}),[],!1,null,null,null);o.default=component.exports},337:function(t,o,e){var content=e(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("7581e4e4",content,!0,{sourceMap:!1})},369:function(t,o,e){"use strict";e(337)},370:function(t,o,e){var n=e(66)(!1);n.push([t.i,'.detail-top-tit{padding:0.26667rem 0.24rem 0px}.detail-top-tit .bigtit{color:#000;overflow:hidden}.detail-top-tit .bigtit .bigtit-chinese{font-weight:700;font-size:0.48rem;line-height:0.48rem;font-family:"jcyt 700"}.detail-top-tit .bigtit .bigtit-english{font-weight:800;font-size:0.48rem;line-height:0.48rem;white-space:nowrap;font-family:"aotf Heavy"}',""]),t.exports=n},394:function(t,o,e){var content=e(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("1301bfc9",content,!0,{sourceMap:!1})},459:function(t,o,e){"use strict";e.r(o);var n={name:"AboutusTopTit",data:function(){return{}},methods:{}},r=(e(369),e(34)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"detail-top-tit"},[o("div",{staticClass:"bigtit"},[o("div",{staticClass:"bigtit-chinese"},[t._v("认识给油所")]),t._v(" "),o("div",{staticClass:"bigtit-english"},[t._v("ABOUT US")])])])}],!1,null,null,null);o.default=component.exports},467:function(t,o,e){"use strict";e(394)},468:function(t,o,e){var n=e(66)(!1);n.push([t.i,".container{width:100vw;height:100vh;padding-top:0.73333rem;overflow-y:auto;overflow-x:hidden;padding-bottom:1.28rem}",""]),t.exports=n},553:function(t,o,e){"use strict";e.r(o);e(14),e(24),e(25);var n={name:"AboutusPage",components:{AboutusTopTit:function(){return Promise.resolve().then(e.bind(null,459))},AboutusContent:function(){return Promise.resolve().then(e.bind(null,548))},CommonBottom:function(){return Promise.resolve().then(e.bind(null,329))}},methods:{goTop:function(){this.$refs.container.scrollTo({top:0,behavior:"smooth"})}}},r=(e(467),e(34)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{ref:"container",staticClass:"container"},[o("AboutusTopTit"),t._v(" "),o("AboutusContent"),t._v(" "),o("CommonBottom",{on:{gotopbtn:t.goTop}})],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{AboutusTopTit:e(459).default,AboutusContent:e(548).default,CommonBottom:e(329).default})}}]);