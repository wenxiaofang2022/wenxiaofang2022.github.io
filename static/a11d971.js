(window.webpackJsonp=window.webpackJsonp||[]).push([[58,14,15,20,21],{385:function(t,e,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("448736a6",content,!0,{sourceMap:!1})},386:function(t,e,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("72cdab47",content,!0,{sourceMap:!1})},387:function(t,e,o){var content=o(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("4eb1106c",content,!0,{sourceMap:!1})},388:function(t,e,o){var content=o(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("5c07645d",content,!0,{sourceMap:!1})},420:function(t,e,o){"use strict";o(385)},421:function(t,e,o){var n=o(66)(!1);n.push([t.i,'.index-top-text{padding-top:70PX;text-align:center;color:#000}.index-top-text .art-text{width:4.52rem;height:1.28rem;background:var(--980370fc);background-repeat:no-repeat;background-size:100%;margin:0 auto;position:relative}.index-top-text .art-text .icon-star{position:absolute;width:0.37333rem;height:0.37333rem;bottom:-0.33333rem;background:var(--686aae22);background-repeat:no-repeat;background-size:100%}.index-top-text .art-text .icon-star.star-left{left:-0.33333rem}.index-top-text .art-text .icon-star.star-right{right:-0.33333rem}.index-top-text .website-link{font-weight:900;font-size:0.12rem;line-height:0.24rem;margin-top:-0.12rem}.index-top-text .marquee-box{width:3.04rem;height:0.61333rem;background:#1c1c1c;-webkit-box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;border-radius:0.06667rem;color:#ff5c00;text-shadow:0px 0px 1px #ff5c00;font-family:"xszt Regular";font-size:0.29333rem;line-height:0.61333rem;margin:0 auto;overflow:hidden}.index-top-text .chinese-desc{font-family:"jcyt 700";font-size:0.28rem;line-height:0.32rem;margin-top:0.16rem}.index-top-text .english-desc{font-family:"syht Heavy";font-size:0.22667rem;line-height:0.29333rem}',""]),t.exports=n},423:function(t,e,o){"use strict";o(386)},424:function(t,e,o){var n=o(66)(!1);n.push([t.i,".home-cloud-box{width:100%;height:280PX;position:relative;z-index:10;background:var(--226ad06c);background-repeat:no-repeat;background-position:center center;background-size:110% auto}.home-cloud-box #webglDom_home{width:390PX;height:320PX;margin-top:-30PX;position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}",""]),t.exports=n},425:function(t,e,o){"use strict";o(387)},426:function(t,e,o){var n=o(66)(!1);n.push([t.i,".index-bottom-text img{width:4.01333rem;display:block;margin:0 auto}",""]),t.exports=n},427:function(t,e,o){"use strict";o(388)},428:function(t,e,o){var n=o(66)(!1);n.push([t.i,".index-bottom-bg{position:absolute;bottom:0px;left:0px;width:100%}.index-bottom-bg img{width:100%;display:block;margin:0 auto}",""]),t.exports=n},511:function(t,e,o){var content=o(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("6d0b6336",content,!0,{sourceMap:!1})},522:function(t,e,o){"use strict";o.r(e);o(68),o(27),o(149),o(114);var n=o(1),r={name:"IndexTopText",data:function(){return{marqueeTxt:"# 欢迎光临卡卅给油所 # Welcome to KASAKII Creative Supply Station # カサキイガソリンスタンドへようこそ",timer:null,back_ground:"url("+this.$store.state.sourcRoot+"/image/index/title.png)",back_ground1:"url("+this.$store.state.sourcRoot+"/image/index/icon-star.svg)"}},mounted:function(){this.runText()},beforeDestrioy:function(){this.stopText()},methods:{runText:function(){var t=this;this.timer||(this.timer=setInterval((function(){var e=t.marqueeTxt.split("");e.push(e.shift()),t.marqueeTxt=e.join("")}),150))},stopText:function(){clearInterval(this.timer),this.timer=null}}},h=function(){Object(n.b)((function(t,e){return{"980370fc":t.back_ground,"686aae22":t.back_ground1}}))},c=r.setup;r.setup=c?function(t,e){return h(),c(t,e)}:h;var l=r,d=(o(420),o(34)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"index-top-text"},[e("div",{staticClass:"art-text"}),t._v(" "),e("div",{staticClass:"marquee-box"},[t._v(t._s(t.marqueeTxt))])])}),[],!1,null,null,null);e.default=component.exports},523:function(t,e,o){"use strict";o.r(e);o(30),o(68),o(512),o(395);var n=o(337),r=o(422),h=o(338),c=o(339),l=o(526),d=o(514),m=o(1),f={name:"HomeCloud",data:function(){return{scene:null,camera:null,renderer:null,textloader:null,controls:null,width:0,height:0,mao:null,clock:null,group:null,morphTargetInfluences:null,morphTargetDictionary:null,onPointerDownPointerX:null,onPointerDownPointerY:null,startX:null,startY:null,endX:null,endY:null,outsideModel:!0,timer:null,direction:null,strength:0,back_ground:"url("+this.$store.state.sourcRoot+"/image/index/text-bg.png)"}},watch:{},mounted:function(){this.$nextTick(this.init)},methods:{init:function(){var t=this.$refs.webglDom_home;this.width=t.offsetWidth,this.height=t.offsetHeight,this.scene=new n.zb,this.textloader=new n.Ib,this.camera=new n.bb(this.width/-2,this.width/2,this.height/2,this.height/-2,1,1e3),this.camera.position.set(600,100,100),this.add(this.camera),this.camera.lookAt(this.scene.position),this.group=new n.v,this.clock=new n.k,this.renderer=new n.Pb({antialias:!0}),this.renderer.outputEncoding=n.Qb,this.renderer.toneMapping=n.a,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.cb,this.renderer.setClearColor(new n.l("#ffffff"),.1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),document.getElementById("webglDom_home").appendChild(this.renderer.domElement);var e=new h.a,o=new n.db(this.renderer);this.scene.environment=o.fromScene(e).texture,document.getElementById("webglDom_home").addEventListener("mousedown",this.onDocumentMouseDown,!1),document.getElementById("webglDom_home").addEventListener("touchstart",this.onDocumentTouchDown,!1),document.getElementById("webglDom_home").addEventListener("touchmove",this.onDocumentTouchMove,!1),document.getElementById("webglDom_home").addEventListener("touchend",this.onDocumentTouchUp,!1);var c=new r.a(this.camera,this.renderer.domElement);c.noRotate=!0,c.noZoom=!0,c.noPan=!0,c.dynamicDampingFactor=.1,this.controls=c,this.loadModel(),this.render()},onDocumentTouchDown:function(t){this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY,this.onPointerDownPointerX=t.touches[0].pageX,this.onPointerDownPointerY=t.touches[0].pageY;var e=this.getIntersects(t);console.log("intersects",e),e&&e.length>0&&"身体"==e[0].object.name?this.outsideModel=!1:this.outsideModel=!0},getIntersects:function(t){t.preventDefault();var e=new n.wb,o=new n.Mb;return t.clientX?(o.x=t.clientX/window.innerWidth*2-1,o.y=-t.clientY/window.innerHeight*2+1):(o.x=this.onPointerDownPointerX/window.innerWidth*2-1,o.y=-this.onPointerDownPointerY/window.innerHeight*2+1),e.setFromCamera(o,this.camera),e.intersectObjects(this.mao.children,!0)},onDocumentTouchMove:function(t){this.onPointerDownPointerX=t.touches[0].pageX,this.onPointerDownPointerY=t.touches[0].pageY,this.endX=t.touches[0].pageX,this.endY=t.touches[0].pageY,this.mainLogic(this.startX,this.startY,this.endX,this.endY)},onDocumentTouchUp:function(t){var e=this,o=this.morphTargetInfluences,n=this.morphTargetDictionary[this.direction],r=this.strength;o[n]=r,this.morphTargetInfluences=o;var h=r/10;console.log("this.strength",this.strength),this.timer=setInterval((function(){r=(r=Number(r-h).toFixed(2))<0?r=0:r,console.log("strength",r),o[n]=r,e.morphTargetInfluences=o,0==r&&clearInterval(e.timer)}),10)},onDocumentMouseDown:function(t){},loadModel:function(){var t=this,e=(new l.a).setTranscoderPath("/js/libs/basis/").detectSupport(this.renderer);(new c.a).setCrossOrigin("anonymous").setKTX2Loader(e).setMeshoptDecoder(d.a).load("./caseimg/home_1.glb",(function(e){t.mao=e.scene.children[0],t.mao.position.set(0,0,0),t.mao.scale.set(2.8,2.8,2.8),t.mao.rotation.set(0,1.4,0),t.group.add(t.mao),t.add(t.group);var head=t.mao.getObjectByName("身体");t.morphTargetInfluences=head.morphTargetInfluences,t.morphTargetDictionary=head.morphTargetDictionary}))},mainLogic:function(t,e,o,n){var r=this.width/2,h=this.height/2,c=t-r,l=e-h,d=o-r,m=n-h,f=c>d,x=c<d,w=l>m,v=l<m,_=r,y=Math.sqrt(Math.abs(t-o)*Math.abs(t-o)+Math.abs(e-n)*Math.abs(e-n)),M=Number(y/_).toFixed(2);Number(Math.abs(e-n)/_).toFixed(2),Number(Math.abs(t-o)/_).toFixed(2);console.log("strength",M),this.outsideModel?f&&w?this.extrusion(M,"youxia-li"):f&&v?this.extrusion(M,"youshang-li"):x&&w?this.extrusion(M,"zuoxia-li"):x&&v?this.extrusion(M,"zuoshang-li"):c==d?(M=Number(Math.abs(l-m)/_).toFixed(2),w&&this.extrusion(M,"xia-li"),v&&this.extrusion(M,"shang-li")):l==m&&(M=Number(Math.abs(c-d)/_).toFixed(2),f&&this.extrusion(M,"you-li"),x&&this.extrusion(M,"zuo-li")):this.outsideModel||(f&&w?this.extrusion(M,"zuoshang"):f&&v?this.extrusion(M,"zuoxia"):x&&w?this.extrusion(M,"youshang"):x&&v?this.extrusion(M,"youxia"):c==d?(M=Number(Math.abs(l-m)/_).toFixed(2),w&&this.extrusion(M,"shang"),v&&this.extrusion(M,"xia")):l==m&&(M=Number(Math.abs(c-d)/_).toFixed(2),f&&this.extrusion(M,"zuo"),x&&this.extrusion(M,"you")))},extrusion:function(t,e){console.log("strength",t);var o=this.morphTargetInfluences;o[this.morphTargetDictionary[e]]=t,this.morphTargetInfluences=o,this.direction=e,this.strength=t},addLight:function(){var t=new n.p(16777215,.2);t.position.set(0,1e3,1e3),t.castShadow=!0,this.add(t)},add:function(t){this.scene.add(t)},render:function(){this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}}},x=function(){Object(m.b)((function(t,e){return{"226ad06c":t.back_ground}}))},w=f.setup;f.setup=w?function(t,e){return x(),w(t,e)}:x;var v=f,_=(o(423),o(34)),component=Object(_.a)(v,(function(){var t=this._self._c;return t("div",{staticClass:"home-cloud-box",attrs:{id:"home-cloud-box"}},[t("div",{ref:"webglDom_home",attrs:{id:"webglDom_home"}})])}),[],!1,null,null,null);e.default=component.exports},524:function(t,e,o){"use strict";o.r(e);var n=o(1),r={name:"BottomBox",data:function(){return{sourceUrl:this.$store.state.sourcRoot,back_ground1:"url("+this.$store.state.sourcRoot+"/image/index/copyright.png)",back_ground2:"url("+this.$store.state.sourcRoot+"/image/index/logo.png)"}},methods:{}},h=function(){Object(n.b)((function(t,e){return{"62dd3e92":t.back_ground2,"62dd3e94":t.back_ground1,"172dfadb":t.back_ground}}))},c=r.setup;r.setup=c?function(t,e){return h(),c(t,e)}:h;var l=r,d=(o(425),o(34)),component=Object(d.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"index-bottom-text"},[t("img",{attrs:{src:this.sourceUrl+"/image/index/bottom.png"}})])}),[],!1,null,null,null);e.default=component.exports},525:function(t,e,o){"use strict";o.r(e);var n={name:"BottomBg",data:function(){return{sourceUrl:this.$store.state.sourcRoot,showBottomBg:!1}},mounted:function(){console.log(window.innerHeight);var t=window.innerHeight-70-280-410-50;console.log(t),this.showBottomBg=t>0},methods:{}},r=(o(427),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.showBottomBg?e("div",{staticClass:"index-bottom-bg"},[e("img",{attrs:{src:t.sourceUrl+"/image/index/absolutebottom.png"}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},649:function(t,e,o){"use strict";o(511)},650:function(t,e,o){var n=o(66)(!1);n.push([t.i,".container[data-v-1fa3b2cc]{width:100vw;height:100vh;overflow-x:hidden;overflow-y:hidden;position:relative}",""]),t.exports=n},701:function(t,e,o){"use strict";o.r(e);o(14),o(25),o(24);var n={name:"IndexPage",components:{IndexTopText:function(){return Promise.resolve().then(o.bind(null,522))},HomeCloud:function(){return Promise.resolve().then(o.bind(null,523))},BottomBox:function(){return Promise.resolve().then(o.bind(null,524))},BottomBg:function(){return Promise.resolve().then(o.bind(null,525))}}},r=(o(649),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("IndexTopText"),t._v(" "),e("HomeCloud"),t._v(" "),e("BottomBox"),t._v(" "),e("BottomBg")],1)}),[],!1,null,"1fa3b2cc",null);e.default=component.exports;installComponents(component,{IndexTopText:o(522).default,HomeCloud:o(523).default,BottomBox:o(524).default,BottomBg:o(525).default})}}]);