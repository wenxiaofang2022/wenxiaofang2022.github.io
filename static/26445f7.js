(window.webpackJsonp=window.webpackJsonp||[]).push([[57,7,18],{320:function(t,o,e){var content=e(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("285bec2d",content,!0,{sourceMap:!1})},323:function(t,o,e){"use strict";e(320)},324:function(t,o,e){var n=e(66)(!1);n.push([t.i,".common-bottom-box{width:100%;height:1.42667rem;position:fixed;left:0px;bottom:0px;z-index:1}.common-bottom-box .bottom-bg{width:100%;height:1.42667rem;background:var(--52dec7c2);background-repeat:no-repeat;background-size:100% auto;position:absolute;z-index:1}.common-bottom-box .bottom-line-bg{width:100%;height:1.28rem;background:var(--08fa30af);background-repeat:no-repeat;background-position:0px 0px;background-size:100% auto;background-color:#fff;position:absolute;z-index:0;bottom:0px;left:0px}.common-bottom-box .bottom-btn{width:0.89333rem;height:0.88rem;background:var(--08fa30b0);background-repeat:no-repeat;background-size:100% auto;position:fixed;right:0.29333rem;bottom:0.24rem;z-index:2}",""]),t.exports=n},325:function(t,o,e){"use strict";e.r(o);var n=e(1),r={name:"CommonBottom",data:function(){return{back_ground:"url("+this.$store.state.sourcRoot+"/image/bottom/bg.png)",back_ground1:"url("+this.$store.state.sourcRoot+"/image/bg.png)",back_ground2:"url("+this.$store.state.sourcRoot+"/image/bottom/btn.png)"}},methods:{goTop:function(){this.$emit("gotopbtn")}}},c=function(){Object(n.b)((function(t,o){return{"52dec7c2":t.back_ground,"08fa30af":t.back_ground1,"08fa30b0":t.back_ground2}}))},l=r.setup;r.setup=l?function(t,o){return c(),l(t,o)}:c;var d=r,f=(e(323),e(34)),component=Object(f.a)(d,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"common-bottom-box"},[o("div",{staticClass:"bottom-line-bg"}),t._v(" "),o("div",{staticClass:"bottom-bg"}),t._v(" "),o("div",{staticClass:"bottom-btn",on:{click:t.goTop}})])}),[],!1,null,null,null);o.default=component.exports},384:function(t,o,e){var content=e(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("e116daf2",content,!0,{sourceMap:!1})},417:function(t,o,e){"use strict";e(384)},418:function(t,o,e){var n=e(66)(!1);n.push([t.i,'.detail-top-tit[data-v-4fc610a3]{padding:0.26667rem 0.24rem 0px}.detail-top-tit .bigtit[data-v-4fc610a3]{color:#000;overflow:hidden}.detail-top-tit .bigtit .bigtit-chinese[data-v-4fc610a3]{font-weight:700;font-size:0.48rem;line-height:0.48rem;font-family:"jcyt 700"}.detail-top-tit .bigtit .bigtit-english[data-v-4fc610a3]{font-weight:800;font-size:0.48rem;line-height:0.48rem;white-space:nowrap;font-family:"aotf Heavy"}',""]),t.exports=n},476:function(t,o,e){var content=e(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("32f5593e",content,!0,{sourceMap:!1})},521:function(t,o,e){"use strict";e.r(o);var n={name:"ContactusTopTit",data:function(){return{}},methods:{}},r=(e(417),e(34)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"detail-top-tit"},[o("div",{staticClass:"bigtit"},[o("div",{staticClass:"bigtit-chinese"},[t._v("联系给油所")]),t._v(" "),o("div",{staticClass:"bigtit-english"},[t._v("CONTACT US")])])])}],!1,null,"4fc610a3",null);o.default=component.exports},576:function(t,o,e){"use strict";e(476)},577:function(t,o,e){var n=e(66)(!1);n.push([t.i,".container[data-v-449319ee]{width:100vw;height:100vh;padding-top:0.73333rem;overflow-y:auto;overflow-x:hidden;padding-bottom:1.28rem}",""]),t.exports=n},671:function(t,o,e){"use strict";e.r(o);e(14),e(25),e(24);var n={name:"ContactusPage",components:{ContactusTopTit:function(){return Promise.resolve().then(e.bind(null,521))},ContactusSwitch:function(){return Promise.resolve().then(e.bind(null,664))},CommonBottom:function(){return Promise.resolve().then(e.bind(null,325))}},methods:{goTop:function(){this.$refs.container.scrollTo({top:0,behavior:"smooth"})}}},r=(e(576),e(34)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{ref:"container",staticClass:"container"},[o("ContactusTopTit"),t._v(" "),o("ContactusSwitch"),t._v(" "),o("CommonBottom",{on:{gotopbtn:t.goTop}})],1)}),[],!1,null,"449319ee",null);o.default=component.exports;installComponents(component,{ContactusTopTit:e(521).default,ContactusSwitch:e(664).default,CommonBottom:e(325).default})}}]);