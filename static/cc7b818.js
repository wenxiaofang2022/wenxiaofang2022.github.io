(window.webpackJsonp=window.webpackJsonp||[]).push([[25,19],{344:function(t,o,e){var content=e(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("9d720158",content,!0,{sourceMap:!1})},388:function(t,o,e){"use strict";e(344)},389:function(t,o,e){var n=e(66)(!1);n.push([t.i,'.push-down-box{padding:0px 0.08rem;width:100%;height:100%;overflow-y:auto;overflow-x:hidden}.push-down-box .push-down-card{width:100%}.push-down-box .push-down-card img{width:100%;display:block;margin:0 auto}.push-down-box .push-down-card .push-down-text{text-align:center;font-family:"syht Bold";font-size:0.16rem;line-height:0.24rem;color:#757575;margin-top:0.26667rem}.push-down-box .push-down-card .push-down-icon{width:1.92rem;margin:0 auto;margin-top:0.05333rem}@keyframes showLow{0%{height:7.33333rem}10%{height:1.73333rem}100%{height:1.73333rem}}@-webkit-keyframes showLow{0%{height:7.33333rem}10%{height:1.73333rem}100%{height:1.73333rem}}@keyframes showHigh{from{height:1.73333rem}to{height:7.33333rem}}@-webkit-keyframes showHigh{from{height:1.73333rem}to{height:7.33333rem}}@keyframes showLow1{from{height:8.64rem}to{height:2.33333rem}}@-webkit-keyframes showLow1{from{height:8.64rem}to{height:2.33333rem}}@keyframes showHigh1{from{height:2.33333rem}to{height:8.64rem}}@-webkit-keyframes showHigh1{from{height:2.33333rem}to{height:8.64rem}}.push-down-card-list .push-down-card{width:100%;padding:0.29333rem 0.29333rem 0.25333rem;position:relative}.push-down-card-list .push-down-card .click_div{height:2.33333rem;width:calc(100% + 0.58667rem);position:absolute;left:0px;top:0px;z-index:10}.push-down-card-list .push-down-card.active{height:8.64rem;background:url("/image/daily/bg1_new.png") no-repeat;background-size:100% auto;animation:showHigh1 1s ease;-moz-animation:showHigh1 1s ease;-webkit-animation:showHigh1 1s ease;-o-animation:showHigh1 1s ease}.push-down-card-list .push-down-card.active .card-imgs-info{height:7.33333rem;overflow-x:hidden;overflow-y:auto;animation:showHigh 1s ease;-moz-animation:showHigh 1s ease;-webkit-animation:showHigh 1s ease;-o-animation:showHigh 1s ease}.push-down-card-list .push-down-card.unactive{height:2.33333rem;background:url("/image/daily/bg_new.png") no-repeat;background-size:100% auto;animation:showLow1 1s ease;-moz-animation:showLow1 1s ease;-webkit-animation:showLow1 1s ease;-o-animation:showLow1 1s ease}.push-down-card-list .push-down-card.unactive .card-imgs-info{height:1.73333rem;overflow:hidden;animation:showLow 1s ease;-moz-animation:showLow 1s ease;-webkit-animation:showLow 1s ease;-o-animation:showLow 1s ease}.push-down-card-list .push-down-card .card-img-box{width:100%;height:1.73333rem;overflow:hidden;border-radius:0.09733rem}.push-down-card-list .push-down-card .card-img-box img{width:100%;display:block}.push-down-card-list .push-down-card .card-imgs-info{border-radius:0.09733rem;position:relative}.push-down-card-list .push-down-card .card-imgs-info .close_btn{width:0.53333rem;position:fixed;top:1.06667rem;right:0.37333rem}.push-down-card-list .push-down-card .card-imgs-info img{border-radius:0.09733rem;width:100%;display:block}.push-down-card-list .push-down-card .card-text-info{color:#757575;height:0.50667rem;width:100%;margin-top:0.08rem;position:relative}.push-down-card-list .push-down-card .card-text-info .slide{position:absolute;right:0.17333rem;width:0.32rem}.push-down-card-list .push-down-card .card-text-info .slide img{width:0.32rem;display:block}.push-down-card-list .push-down-card .card-text-info .left{float:left;width:1.37333rem}.push-down-card-list .push-down-card .card-text-info .left .subtit{padding-top:0.05333rem;font-family:"jcyt 700";font-size:0.22667rem;line-height:0.22667rem}.push-down-card-list .push-down-card .card-text-info .right{float:left}.push-down-card-list .push-down-card .card-text-info .right .title{font-family:"syht Heavy";font-size:0.21333rem;line-height:0.32rem}.push-down-card-list .push-down-card .card-text-info .right .time{font-family:"syht Normal";font-size:0.16rem;line-height:0.24rem}',""]),t.exports=n},457:function(t,o,e){var content=e(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("709568d5",content,!0,{sourceMap:!1})},465:function(t,o,e){"use strict";e.r(o);e(55);var n={name:"PushDown",data:function(){return{touchStartPagY:0,touchEndPagY:0,activeIndex:null,showCard:!1,cardList:[{title:"还没想好",time:"Jun.16,2022",subtit:"DAILY 04",url:"/image/daily/s4.png",show:!1},{title:"给油厂的秋之回忆！",time:"Jun.16,2022",subtit:"DAILY 03",url:"/image/daily/s3.png",show:!1},{title:"直擊居家日常小秘密！",time:"Jun.16,2022",subtit:"DAILY 02",url:"/image/daily/s2.png",show:!1},{title:"創刊號驚天大爆料！",time:"Mar.14,2022",subtit:"DAILY 01",url:"/image/daily/s1.png",show:!1}]}},mounted:function(){},methods:{getData:function(){},TouchStart:function(t){console.log("e_start",t),this.touchStartPagY=t.changedTouches[0].pageY},TouchMove:function(t){},TouchEnd:function(t){this.touchEndPagY=t.changedTouches[0].pageY,this.touchEndPagY-this.touchStartPagY>50&&(this.showCard=!0)},choseActive:function(t,o){if(t.stopPropagation(),console.log("m",o),this.activeIndex=o,o>-1){["card_imgs_info0","card_imgs_info1","card_imgs_info2","card_imgs_info3"].map((function(t){document.getElementById(t).scrollTop=0}))}var e=document.getElementById("push-down-box");0==o&&(e.scrollTop=0),1==o&&(e.scrollTop=193),2==o&&(e.scrollTop=386),3==o&&(e.scrollTop=579)}}},r=(e(388),e(34)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"push-down-box",attrs:{id:"push-down-box"},on:{touchstart:t.TouchStart,touchmove:t.TouchMove,touchend:t.TouchEnd}},[t.showCard?o("div",{staticClass:"push-down-card-list"},t._l(t.cardList,(function(e,n){return o("div",{key:"card_"+n,staticClass:"push-down-card",class:t.activeIndex==n?"active":"unactive",attrs:{id:"push_down_card"+n}},[t.activeIndex!=n?o("div",{staticClass:"click_div",on:{click:function(o){return t.choseActive(o,n)}}}):t._e(),t._v(" "),0==n?o("div",{staticClass:"card-imgs-info",attrs:{id:"card_imgs_info0"}},[t.activeIndex==n?o("img",{staticClass:"close_btn",attrs:{src:"/image/daily/close.png"},on:{click:function(o){return t.choseActive(o,-1)}}}):t._e(),t._v(" "),o("img",{attrs:{src:"/image/daily/daily4.png"}}),t._v(" "),o("img",{attrs:{src:"/image/daily/4.png"}})]):t._e(),t._v(" "),1==n?o("div",{staticClass:"card-imgs-info",attrs:{id:"card_imgs_info1"}},[t.activeIndex==n?o("img",{staticClass:"close_btn",attrs:{src:"/image/daily/close.png"},on:{click:function(o){return t.choseActive(o,-1)}}}):t._e(),t._v(" "),o("img",{attrs:{src:"/image/daily/daily3.png"}}),t._v(" "),o("img",{attrs:{src:"/image/daily/3.png"}})]):t._e(),t._v(" "),2==n?o("div",{staticClass:"card-imgs-info",attrs:{id:"card_imgs_info2"}},[t.activeIndex==n?o("img",{staticClass:"close_btn",attrs:{src:"/image/daily/close.png"},on:{click:function(o){return t.choseActive(o,-1)}}}):t._e(),t._v(" "),o("img",{attrs:{src:"/image/daily/daily2.png"}}),t._v(" "),o("img",{attrs:{src:"/image/daily/2.png"}})]):t._e(),t._v(" "),3==n?o("div",{staticClass:"card-imgs-info",attrs:{id:"card_imgs_info3"}},[t.activeIndex==n?o("img",{staticClass:"close_btn",attrs:{src:"/image/daily/close.png"},on:{click:function(o){return t.choseActive(o,-1)}}}):t._e(),t._v(" "),o("img",{attrs:{src:"/image/daily/daily1.png"}}),t._v(" "),o("img",{attrs:{src:"/image/daily/1.png"}})]):t._e(),t._v(" "),t.activeIndex==n?o("div",{staticClass:"card-text-info"},[o("div",{staticClass:"left"},[o("div",{staticClass:"subtit"},[t._v(t._s(e.subtit))])]),t._v(" "),o("div",{staticClass:"right"},[o("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"time"},[t._v(t._s(e.time))])]),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e(),t._v(" "),t.showCard?t._e():o("div",{staticClass:"push-down-card"},[o("img",{attrs:{src:"/image/daily/card.png"}}),t._v(" "),t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"slide"},[t("img",{attrs:{src:"/image/daily/slide.png"}})])},function(){var t=this._self._c;return t("div",{staticClass:"push-down-icon"},[t("img",{attrs:{src:"/image/daily/arrow-down.png"}})])}],!1,null,null,null);o.default=component.exports},543:function(t,o,e){"use strict";e(457)},544:function(t,o,e){var n=e(66)(!1);n.push([t.i,".container{width:100vw;height:100vh;padding-top:0.73333rem;overflow-y:auto;overflow-x:hidden}",""]),t.exports=n},563:function(t,o,e){"use strict";e.r(o);e(14),e(24),e(25);var n={name:"DailyPage",components:{PushDown:function(){return Promise.resolve().then(e.bind(null,465))},CommonBottom:function(){return e.e(3).then(e.bind(null,334))}},methods:{goTop:function(){this.$refs.container.scrollTo({top:0,behavior:"smooth"})}}},r=(e(543),e(34)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{ref:"container",staticClass:"container"},[t("PushDown")],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{PushDown:e(465).default})}}]);