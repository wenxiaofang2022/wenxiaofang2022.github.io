(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(t,o,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("1d45f33f",content,!0,{sourceMap:!1})},371:function(t,o,n){"use strict";n(333)},372:function(t,o,n){var e=n(81)(!1);e.push([t.i,'@-webkit-keyframes topIn{from{margin-top:-5.33333rem;opacity:0}to{margin-top:0px;opacity:1}}@keyframes topIn{from{margin-top:-5.33333rem;opacity:0}to{margin-top:0px;opacity:1}}.push-down-box{padding:0px 0.08rem}.push-down-box .push-down-card{width:100%}.push-down-box .push-down-card img{width:100%;display:block;margin:0 auto}.push-down-box .push-down-card .push-down-text{text-align:center;font-family:"syht Bold";font-size:0.16rem;line-height:0.24rem;color:#757575;margin-top:0.26667rem}.push-down-box .push-down-card .push-down-icon{width:0.28rem;margin:0 auto;margin-top:0.05333rem}.push-down-card-list{-webkit-animation:topIn 1s ease;animation:topIn 1s ease}.push-down-card-list .push-down-card{height:1.33333rem;width:100%;border:1px solid #eee}',""]),t.exports=e},455:function(t,o,n){"use strict";n.r(o);var e={name:"PushDown",data:function(){return{touchStartPagY:0,touchEndPagY:0,showCard:!1,cardList:[{title:"aaa"},{title:"bbb"},{title:"ccc"},{title:"ddd"}]}},methods:{getData:function(){},TouchStart:function(t){console.log("e_start",t),this.touchStartPagY=t.changedTouches[0].pageY},TouchMove:function(t){},TouchEnd:function(t){this.touchEndPagY=t.changedTouches[0].pageY,console.log("e_end",t),this.touchEndPagY-this.touchStartPagY>100&&(this.showCard=!0)}}},d=(n(371),n(47)),component=Object(d.a)(e,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"push-down-box",on:{touchstart:t.TouchStart,touchmove:t.TouchMove,touchend:t.TouchEnd}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showCard,expression:"showCard"}],staticClass:"push-down-card-list"},t._l(t.cardList,(function(n,e){return o("div",{key:"card_"+e,staticClass:"push-down-card"},[o("div",{staticClass:"card-title"},[t._v(t._s(n.title))])])})),0),t._v(" "),t._m(0)])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"push-down-card"},[o("img",{attrs:{src:"/image/daily/card.svg"}}),t._v(" "),o("div",{staticClass:"push-down-text"},[t._v("下拉油票探秘卡卅工作日常")]),t._v(" "),o("div",{staticClass:"push-down-icon"},[o("img",{attrs:{src:"/image/daily/arrow-down.svg"}})])])}],!1,null,null,null);o.default=component.exports}}]);