(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{479:function(t,e,o){var content=o(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("f2b2cb2c",content,!0,{sourceMap:!1})},493:function(t,e,o){"use strict";o(479)},494:function(t,e,o){var n=o(52)(!1);n.push([t.i,'.webgl-container[data-v-5b138cfe]{width:calc(100% - 0.61333rem);height:calc(100vh - 0.73333rem);margin:0 auto;position:relative;padding-bottom:0.82667rem;position:relative}.webgl-box[data-v-5b138cfe]{width:calc(100% + 0.61333rem);height:100%;margin-left:-0.30667rem;position:relative;z-index:100}.webgl-box .oil_content_box[data-v-5b138cfe]{width:100%;height:100%;position:relative;overflow:hidden}.webgl-box .oil_content_box .absolute_box[data-v-5b138cfe]{width:400%;height:100%;position:absolute;top:0px;left:0px;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@keyframes showLeftItem-5b138cfe{from{margin-left:0}to{margin-left:-100%}}@-webkit-keyframes showLeftItem-5b138cfe{from{margin-left:0}to{margin-left:-100%}}@keyframes showRightItem-5b138cfe{from{margin-left:-100%}to{margin-left:0}}@-webkit-keyframes showRightItem-5b138cfe{from{margin-left:-100%}to{margin-left:0}}.webgl-box .oil_content_box .absolute_box.d_left[data-v-5b138cfe]{margin-left:0;animation:showRightItem-5b138cfe .5s ease;-moz-animation:showRightItem-5b138cfe .5s ease;-webkit-animation:showRightItem-5b138cfe .5s ease;-o-animation:showRightItem-5b138cfe .5s ease}.webgl-box .oil_content_box .absolute_box.d_right[data-v-5b138cfe]{margin-left:-100%;animation:showLeftItem-5b138cfe .5s ease;-moz-animation:showLeftItem-5b138cfe .5s ease;-webkit-animation:showLeftItem-5b138cfe .5s ease;-o-animation:showLeftItem-5b138cfe .5s ease}.webgl-box .oil_content_box .absolute_box .oil_content[data-v-5b138cfe]{width:25%;height:100%}.webgl-box .oil_content_box .absolute_box.start_right[data-v-5b138cfe]{margin-left:-100%}.webgl-box .oil_content_box .absolute_box.start_left[data-v-5b138cfe]{margin-left:0px}.webgl-box .oil_content_box .absolute_box.notfirst[data-v-5b138cfe]{width:200%}.webgl-box .oil_content_box .absolute_box.notfirst .oil_content[data-v-5b138cfe]{width:50%}.webgl-box .top_bg[data-v-5b138cfe]{width:4.4rem;height:1.64rem;background:var(--6a3221a0);background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:0.26667rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.webgl-box .center_bg[data-v-5b138cfe]{display:none;width:4.41333rem;height:4.38667rem;position:absolute;z-index:0;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.webgl-box .bottom_bg[data-v-5b138cfe]{width:4.4rem;height:0.96rem;background:var(--dc1211fe);background-repeat:no-repeat;background-size:100% auto;position:absolute;bottom:0.4rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.webgl-box .bottom_tips[data-v-5b138cfe]{width:1.50667rem;height:0.17333rem;background:var(--dc1211f4);background-repeat:no-repeat;background-position:center;background-size:100%;position:absolute;bottom:0.2rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.oilbox_arrow[data-v-5b138cfe]{width:3.4rem;height:1.30667rem;background:var(--dc1211fc);background-repeat:no-repeat;background-position:center;background-size:100%;position:absolute;bottom:0.2rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.oilbox_nav[data-v-5b138cfe]{height:0.50667rem;width:100%;background:var(--dc1211fa);background-repeat:no-repeat;background-position:center;background-size:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.02667rem;padding-top:1px}.oilbox_nav .oilbox_item[data-v-5b138cfe]{width:1.13333rem;height:0.48rem;font-family:"jcyt 700";font-size:0.18333rem;color:#d0d0d0;text-align:center;line-height:0.48rem}.oilbox_nav .oilbox_item.active[data-v-5b138cfe]{color:#fff;background:var(--dc1211f8);background-repeat:no-repeat;background-position:center;background-size:100% 100%}.oilbox_nav .oilbox_divider[data-v-5b138cfe]{width:0.04rem;height:100%;background:var(--dc1211f6);background-repeat:no-repeat;background-position:center;background-size:100% auto;margin-right:0.04rem}.blank_space[data-v-5b138cfe]{width:100%;height:0.82667rem}',""]),t.exports=n},532:function(t,e,o){"use strict";o.r(e);o(26),o(36),o(35),o(215),o(70);var n=o(8),r={name:"OilBox",data:function(){return{url1:this.$store.state.sourcRoot+"/caseimg/01_new.glb",url2:this.$store.state.sourcRoot+"/caseimg/02_new.glb",url3:this.$store.state.sourcRoot+"/caseimg/03_new.glb",url4:this.$store.state.sourcRoot+"/caseimg/04_new.glb",prevIndex:0,activeIndex:0,notfirst:!1,clickable:!0,direction:null,startLocation:"left",prevDis:"0px",activeDis:"0px",timer:null,timer1:null,rateTime:this.$store.state.rateTime,back_ground:"url("+this.$store.state.sourcRoot+"/image/caselist/top_bg.png)",back_ground1:"url("+this.$store.state.sourcRoot+"/image/caselist/bottom_bg.png)",back_ground2:"url("+this.$store.state.sourcRoot+"/image/caselist/arrow.png)",back_ground3:"url("+this.$store.state.sourcRoot+"/image/caselist/option_bg.png)",back_ground4:"url("+this.$store.state.sourcRoot+"/image/caselist/checked.png)",back_ground5:"url("+this.$store.state.sourcRoot+"/image/caselist/divider.png)",back_ground6:"url("+this.$store.state.sourcRoot+"/image/caselist/bottom_tips.png)"}},watch:{},components:{OilContent:function(){return Promise.resolve().then(o.bind(null,529))}},mounted:function(){this.$route.query.activeIndex&&this.loadModel(Number(this.$route.query.activeIndex))},methods:{getRate:function(t){var e=Math.floor(25*this.$store.state.rateTime+t/4);(100==t||t>100)&&this.$store.commit("addratetime"),this.$emit("getrate",e)},loadModel:function(t){var e=this;if(t!=this.activeIndex&&this.clickable){this.notfirst=!0;var o=this.activeIndex;this.prevIndex=o,this.activeIndex=t;this.direction;this.direction=null,this.clickable=!1,clearTimeout(this.timer1),this.prevIndex>this.activeIndex?(this.startLocation="left",this.timer=setTimeout((function(){e.direction="left",clearTimeout(e.timer)}),0)):(this.startLocation="right",this.timer=setTimeout((function(){e.direction="right",clearTimeout(e.timer)}),0)),this.timer1=setTimeout((function(){e.clickable=!0}),500)}}}},c=function(){Object(n.b)((function(t,e){return{"6a3221a0":t.back_ground,dc1211fe:t.back_ground1,dc1211f4:t.back_ground6,dc1211fc:t.back_ground2,dc1211fa:t.back_ground3,dc1211f8:t.back_ground4,dc1211f6:t.back_ground5}}))},l=r.setup;r.setup=l?function(t,e){return c(),l(t,e)}:c;var d=r,f=(o(493),o(30)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"webgl-container"},[e("div",{staticClass:"webgl-box"},[e("div",{staticClass:"top_bg"}),t._v(" "),e("div",{staticClass:"center_bg"}),t._v(" "),e("div",{staticClass:"bottom_bg"}),t._v(" "),e("div",{staticClass:"oil_content_box"},[e("div",{class:[{notfirst:t.notfirst},{d_left:"left"==t.direction},{d_right:"right"==t.direction},{start_left:"left"==t.startLocation},{start_right:"right"==t.startLocation},"absolute_box"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||0===t.prevIndex||0===t.activeIndex,expression:"!notfirst||prevIndex===0||activeIndex===0"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url1},on:{judgerate:t.getRate}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||1===t.prevIndex||1===t.activeIndex,expression:"!notfirst||prevIndex===1||activeIndex===1"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url2},on:{judgerate:t.getRate}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||2===t.prevIndex||2===t.activeIndex,expression:"!notfirst||prevIndex===2||activeIndex===2"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url3},on:{judgerate:t.getRate}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||3===t.prevIndex||3===t.activeIndex,expression:"!notfirst||prevIndex===3||activeIndex===3"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url4},on:{judgerate:t.getRate}})],1)])]),t._v(" "),e("div",{staticClass:"bottom_tips"})]),t._v(" "),e("div",{staticClass:"oilbox_nav"},[e("div",{staticClass:"oilbox_item",class:0==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(0)}}},[t._v("整合营销")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:1==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(1)}}},[t._v("创意表达")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:2==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(2)}}},[t._v("互动体验")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:3==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(3)}}},[t._v("独家出品")])]),t._v(" "),e("div",{staticClass:"blank_space"})])}),[],!1,null,"5b138cfe",null);e.default=component.exports;installComponents(component,{OilContent:o(529).default})}}]);