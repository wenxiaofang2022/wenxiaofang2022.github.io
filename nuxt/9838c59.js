(window.webpackJsonp=window.webpackJsonp||[]).push([[23,7,14,15],{351:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("711898ca",content,!0,{sourceMap:!1})},352:function(t,e,o){var content=o(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("4110db28",content,!0,{sourceMap:!1})},353:function(t,e,o){var content=o(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("608c050f",content,!0,{sourceMap:!1})},396:function(t,e,o){"use strict";o(351)},397:function(t,e,o){var n=o(54)(!1);n.push([t.i,'.index-top-text{padding-top:0.6rem;text-align:center;color:#000}.index-top-text .art-text{width:4.52rem;height:1.28rem;background:url("/image/index/icon-text-new.svg") no-repeat;background-size:100%;margin:0 auto;position:relative}.index-top-text .art-text .icon-star{position:absolute;width:0.37333rem;height:0.37333rem;bottom:-0.33333rem;background:url("/image/index/icon-star.svg") no-repeat;background-size:100%}.index-top-text .art-text .icon-star.star-left{left:-0.33333rem}.index-top-text .art-text .icon-star.star-right{right:-0.33333rem}.index-top-text .website-link{font-weight:900;font-size:0.12rem;line-height:0.24rem;margin-top:-0.12rem}.index-top-text .marquee-box{width:3.04rem;height:0.61333rem;background:#1c1c1c;-webkit-box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;border-radius:0.06667rem;color:#ff5c00;text-shadow:0px 0px 1px #ff5c00;font-family:"xszt Regular";font-size:0.29333rem;line-height:0.61333rem;margin:0 auto;overflow:hidden}.index-top-text .chinese-desc{font-family:"jcyt 700";font-size:0.28rem;line-height:0.32rem;margin-top:0.16rem}.index-top-text .english-desc{font-family:"syht Heavy";font-size:0.22667rem;line-height:0.29333rem}',""]),t.exports=n},398:function(t,e,o){"use strict";o(352)},399:function(t,e,o){var n=o(54)(!1);n.push([t.i,".inter-action-box{width:4.86667rem;height:4.12rem;margin:0 auto}.inter-action-box img{display:block;width:100%}",""]),t.exports=n},400:function(t,e,o){"use strict";o(353)},401:function(t,e,o){var n=o(54)(!1);n.push([t.i,'.bottom-box{width:100%;height:1.04rem}.bottom-box .orange-line-mogu{height:0.05333rem;background:#ff5c00;position:relative}.bottom-box .orange-line-mogu .circle-mogu{width:0.76rem;height:0.76rem;border-radius:50%;background:#ff5c00;position:absolute;top:-0.33333rem;right:0.21333rem}.bottom-box .orange-line-mogu .circle-mogu img{width:0.49333rem;margin:0.16rem auto;display:block}.bottom-box .black-box{width:100%;height:0.45333rem;background:#313131;color:#fff;padding:0 1.01333rem;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"syht Heavy";font-size:0.18667rem;line-height:0.37333rem;letter-spacing:.08em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-box .black-box .center{padding-top:0.10667rem;background:url("/image/index/icon-arrow.svg") no-repeat 0px 0px;background-size:100% auto}.bottom-box .black-box .center img{display:block;width:100%}.bottom-box .copy-right{background:url("/image/index/icon-copyright.svg") no-repeat center center;background-size:100% auto;height:0.30667rem;width:1.72rem;margin:0 auto}',""]),t.exports=n},463:function(t,e,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("2173a5da",content,!0,{sourceMap:!1})},472:function(t,e,o){"use strict";o.r(e);o(60),o(28),o(147),o(115);var n={name:"IndexTopText",data:function(){return{marqueeTxt:"# 欢迎光临卡卅给油所 # Welcome to KASAKII Creative Supply Station # カサキイガソリンスタンドへようこそ",timer:null}},mounted:function(){this.runText()},beforeDestrioy:function(){this.stopText()},methods:{runText:function(){var t=this;this.timer||(this.timer=setInterval((function(){var e=t.marqueeTxt.split("");e.push(e.shift()),t.marqueeTxt=e.join("")}),150))},stopText:function(){clearInterval(this.timer),this.timer=null}}},r=(o(396),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"index-top-text"},[e("div",{staticClass:"art-text"}),t._v(" "),e("div",{staticClass:"marquee-box"},[t._v(t._s(t.marqueeTxt))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"chinese-desc"},[t._v("无奇不有的灵感补给站"),e("br"),t._v("有求必应很少打烊")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"english-desc"},[t._v("OMNIPOTENT CREATIVE STATION"),e("br"),t._v("OPENS ALL YEAR ROUND.")])}],!1,null,null,null);e.default=component.exports},473:function(t,e,o){"use strict";o.r(e);var n={name:"InteractionBox",data:function(){return{}},methods:{}},r=(o(398),o(35)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"inter-action-box"},[t("img",{attrs:{src:"/image/index/img-mogu.svg"}})])}],!1,null,null,null);e.default=component.exports},474:function(t,e,o){"use strict";o.r(e);var n={name:"BottomBox",data:function(){return{}},methods:{}},r=(o(400),o(35)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bottom-box"},[e("div",{staticClass:"orange-line-mogu"},[e("div",{staticClass:"circle-mogu"},[e("img",{attrs:{src:"/image/index/icon-mogu.svg"}})])]),t._v(" "),e("div",{staticClass:"black-box"},[e("span",[t._v("*蹂躏蘑菇")]),t._v(" "),e("span",{staticClass:"center"},[e("img",{attrs:{src:"/image/index/TOUCH FOR JOY.svg"}})]),t._v(" "),e("span",[t._v("可获得开心")])]),t._v(" "),e("div",{staticClass:"copy-right"})])}],!1,null,null,null);e.default=component.exports},549:function(t,e,o){"use strict";o(463)},550:function(t,e,o){var n=o(54)(!1);n.push([t.i,".container{width:100vw;min-height:100vh;padding-top:0.64rem;overflow-x:hidden}",""]),t.exports=n},559:function(t,e,o){"use strict";o.r(e);o(14),o(25),o(26);var n={name:"IndexPage",components:{IndexTopText:function(){return Promise.resolve().then(o.bind(null,472))},InteractionBox:function(){return Promise.resolve().then(o.bind(null,473))},BottomBox:function(){return Promise.resolve().then(o.bind(null,474))}}},r=(o(549),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("IndexTopText"),t._v(" "),e("InteractionBox"),t._v(" "),e("BottomBox")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexTopText:o(472).default,InteractionBox:o(473).default,BottomBox:o(474).default})}}]);