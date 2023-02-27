(window.webpackJsonp=window.webpackJsonp||[]).push([[56,8,10,16,17,20,21],{500:function(e,t,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("6e987d42",content,!0,{sourceMap:!1})},501:function(e,t,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("17d9f247",content,!0,{sourceMap:!1})},502:function(e,t,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("4ce0a7e5",content,!0,{sourceMap:!1})},503:function(e,t,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("b09a79e2",content,!0,{sourceMap:!1})},504:function(e,t,n){"use strict";n.r(t);t.default="\n\nuniform sampler2D uMap;\n\nvarying vec2 vUv;\nvarying float vDiff;\n\nvoid main() {\n\tgl_FragColor = texture2D(uMap, vUv);\n}"},505:function(e,t,n){"use strict";n.r(t);t.default="\n\nuniform float uTime;\nuniform vec3 uDragStart;\nuniform vec3 uDragTarget;\nuniform float uReleaseDecay;\nuniform float uReleaseFrequency;\nuniform float uDragReleaseTime;\nuniform float uDragRelease;\n\nvarying vec2 vUv;\nvarying float vDiff;\n\n\nvoid main() {\n    float startToTarget = distance(uDragTarget, uDragStart);\n    float distanceToStart = distance(position, uDragStart);\n    float influence = distanceToStart / (0.2 + 0.4 * startToTarget);\n    float distortion = exp(pow(clamp(influence, 0.,1.), 3.2) * -6.);\n\n    if (uDragRelease > 0.) {\n        float timeSinceRelease = uTime - uDragReleaseTime;\n        distortion *= exp(-uReleaseDecay * timeSinceRelease * max(distortion, 1.) / ( 6.));\n        distortion *= cos(timeSinceRelease * uReleaseFrequency / ( 2.28));\n    }\n\n    vec3 stretch = (uDragTarget - uDragStart) * distortion;\n    stretch += (uDragStart - position) * distortion * 0.72;\n\n    vec3 pos = position;\n    pos += stretch;\n    pos.z += abs(distortion) * 0.2;\n\n    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.);\n\n    gl_Position = projectionMatrix * viewPosition;\n\n    vUv = uv;\n    vDiff = length(pos - position) * uDragRelease;\n}"},512:function(e,t,n){"use strict";n(500)},513:function(e,t,n){var o=n(40)(!1);o.push([e.i,'.index-top-text{padding-top:70PX;text-align:center;color:#000}.index-top-text .art-text{width:4.52rem;height:1.28rem;background:var(--5f8f2ee6);background-repeat:no-repeat;background-size:100%;margin:0 auto;position:relative}.index-top-text .website-link{font-weight:900;font-size:0.12rem;line-height:0.24rem;margin-top:-0.12rem}.index-top-text .marquee-box{width:3.26667rem;height:0.53333rem;line-height:0.53333rem;background:#1c1c1c;-webkit-box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;box-shadow:inset -0.04rem -0.04rem 0.09333rem #000,inset 0.06667rem 0.06667rem 0.10667rem #000;border-radius:0.06667rem;color:#ff5c00;text-shadow:0px 0px 1px #ff5c00;font-family:"xszt Regular";font-size:0.29333rem;margin:0 auto;overflow:hidden}.index-top-text .marquee-inner-wrapper{white-space:nowrap;position:relative}.index-top-text .marquee-inner-wrapper span{position:absolute;top:0;left:100%;height:100%}.index-top-text .first-marquee{-webkit-animation:20s first-marquee linear infinite normal;animation:20s first-marquee linear infinite normal}@-webkit-keyframes first-marquee{0%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}100%{-webkit-transform:translate3d(-200%, 0, 0);transform:translate3d(-200%, 0, 0);display:none}}@keyframes first-marquee{0%{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}100%{-webkit-transform:translate3d(-200%, 0, 0);transform:translate3d(-200%, 0, 0);display:none}}.index-top-text .second-marquee{-webkit-animation:20s first-marquee linear 10.5s infinite normal;animation:20s first-marquee linear 10.5s infinite normal}@-webkit-keyframes second-marquee{0%{-webkit-transform:translate3d(0%, 0, 0);transform:translate3d(0%, 0, 0)}100%{-webkit-transform:translate3d(-200%, 0, 0);transform:translate3d(-200%, 0, 0);display:none}}@keyframes second-marquee{0%{-webkit-transform:translate3d(0%, 0, 0);transform:translate3d(0%, 0, 0)}100%{-webkit-transform:translate3d(-200%, 0, 0);transform:translate3d(-200%, 0, 0);display:none}}.index-top-text .chinese-desc{font-family:"jcyt 700";font-size:0.28rem;line-height:0.32rem;margin-top:0.16rem}.index-top-text .english-desc{font-family:"syht Heavy";font-size:0.22667rem;line-height:0.29333rem}',""]),e.exports=o},514:function(e,t,n){"use strict";n(501)},515:function(e,t,n){var o=n(40)(!1);o.push([e.i,".home-cloud-box{width:100%;height:280PX;position:relative;z-index:10;background:var(--96610930);background-repeat:no-repeat;background-position:center center;background-size:110% auto}.home-cloud-box #webglDom_home{width:100%;height:1000PX;margin-top:-356PX;position:fixed;z-index:1000;z-index:10;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}",""]),e.exports=o},516:function(e,t,n){"use strict";n(502)},517:function(e,t,n){var o=n(40)(!1);o.push([e.i,".index-bottom-text img{width:4.01333rem;display:block;margin:0 auto}",""]),e.exports=o},518:function(e,t,n){"use strict";n(503)},519:function(e,t,n){var o=n(40)(!1);o.push([e.i,".index-bottom-bg{position:absolute;bottom:0px;left:0px;width:100%}.index-bottom-bg img{width:100%;display:block;margin:0 auto}",""]),e.exports=o},527:function(e,t,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("0773d241",content,!0,{sourceMap:!1})},539:function(e,t,n){"use strict";n.r(t);n(85),n(46),n(157),n(93);var o=n(8),r={name:"IndexTopText",data:function(){return{marqueeTxt:"# 欢迎光临卡卅给油所 # Welcome to KASAKII Creative Supply Station # カサキイガソリンスタンドへようこそ",timer:null,back_ground:"url("+this.$store.state.sourcRoot+"/image/index/title.png)"}},mounted:function(){},beforeDestrioy:function(){},methods:{runText:function(){var e=this;this.timer||(this.timer=setInterval((function(){var t=e.marqueeTxt.split("");t.push(t.shift()),e.marqueeTxt=t.join("")}),150))},stopText:function(){clearInterval(this.timer),this.timer=null}}},l=function(){Object(o.b)((function(e,t){return{"5f8f2ee6":e.back_ground}}))},d=r.setup;r.setup=d?function(e,t){return l(),d(e,t)}:l;var c=r,m=(n(512),n(22)),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"index-top-text"},[t("div",{staticClass:"art-text"}),e._v(" "),t("div",{staticClass:"marquee-outer-wrapper marquee-box"},[t("div",{staticClass:"marquee-inner-wrapper"},[t("span",{staticClass:"first-marquee"},[e._v(e._s(e.marqueeTxt))]),e._v(" "),t("span",{staticClass:"second-marquee"},[e._v(e._s(e.marqueeTxt))])])])])}),[],!1,null,null,null);t.default=component.exports},540:function(e,t,n){"use strict";n.r(t);n(46),n(157);var o,r,l,d=n(0),c=n(52),m=n(543),h=n(529),f=n(504),v=n(505),w=n(8),x={name:"HomeCloudNew",data:function(){return{sourcRootUrl:this.$store.state.sourcRoot,isDragging:!1,mouse:null,raycaster:null,time:0,active:{backgroundColor:"linear-gradient(0deg, rgb(68 99 49) 0%, rgb(163 174 255) 100%)",gltfLoader:null,material:null,shape:null,textureLoader:null},material:null,meshList:[],touchTarget:null,startPosition:null,textloader:null,width:0,height:0,mao:null,clock:null,group:null,morphTargetInfluences:null,morphTargetDictionary:null,onPointerDownPointerX:null,onPointerDownPointerY:null,startX:null,startY:null,endX:null,endY:null,outsideModel:!0,timer:null,direction:null,strength:0,back_ground:"url("+this.$store.state.sourcRoot+"/image/index/text-bg.png)"}},watch:{},mounted:function(){this.$nextTick(this.init)},methods:{init:function(){this.$refs.webglDom_home;this.width=window.innerWidth,this.height=1e3,o=new d.Ab,this.textloader=new d.Kb,(r=new d.bb(this.width/-2,this.width/2,this.height/2,this.height/-2,1,1e3)).position.set(400,200,400),this.add(r),r.lookAt(o.position),this.group=new d.v,this.clock=new d.k,this.mouse=new d.Ob,this.raycaster=new d.xb,this.addLight(),l=new d.Rb({antialias:!0}),this.touchTarget=new d.R(new d.fb(1e3,2e3),new d.S({opacity:0,transparent:!0,depthWrite:!1})),l.physicallyCorrectLights=!0,l.outputEncoding=d.Sb,l.toneMapping=d.a,l.toneMappingExposure=1.2,l.shadowMap.enabled=!0,l.shadowMap.type=d.cb,l.setClearColor(new d.l("#ffffff"),0),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(this.width,this.height),document.getElementById("webglDom_home").appendChild(l.domElement),document.getElementById("webglDom_home").addEventListener("touchstart",this.onMouseDown,!1),document.getElementById("webglDom_home").addEventListener("touchmove",this.onMouseMove,!1),document.getElementById("webglDom_home").addEventListener("touchend",this.onMouseUp,!1),this.loadModel(),this.render()},inner_onMouseDown:function(e){this.material.uniforms.uDragStart.value.copy(e),this.material.uniforms.uDragTarget.value.copy(e),this.material.uniforms.uDragRelease.value=!1},inner_onMouseMove:function(e){this.material.uniforms.uDragTarget.value.copy(e)},inner_onMouseUp:function(time){this.material.uniforms.uDragReleaseTime.value=time,this.material.uniforms.uDragRelease.value=!0},onMouseDown:function(e){var t=window.innerWidth,n=window.innerHeight;this.mouse.x=(e.touches[0].pageX-0)/t*2-1,this.mouse.y=-(e.touches[0].pageY-0)/n*2+1,this.raycaster.setFromCamera(this.mouse,r);var o=this.raycaster.intersectObjects(this.meshList,!0);if(o.length){this.isDragging=!0;var l=o[0].point;this.inner_onMouseDown(l)}},onMouseMove:function(e){var t=window.innerWidth,n=window.innerHeight;this.mouse.x=(e.touches[0].pageX-0)/t*2-1,this.mouse.y=-(e.touches[0].pageY-0)/n*2+1,this.raycaster.setFromCamera(this.mouse,r);var o=this.raycaster.intersectObject(this.touchTarget);if(o.length){var l=o[0].point;this.inner_onMouseMove(l)}},onMouseUp:function(){this.isDragging&&(this.isDragging=!1,this.inner_onMouseUp(this.time))},loadModel:function(){var e=this,t=this,path=this.sourcRootUrl+"/js/libs/basis/",n=(new m.a).setTranscoderPath(path).detectSupport(l),o=(new c.a).setCrossOrigin("anonymous").setKTX2Loader(n).setMeshoptDecoder(h.a),r=this.$store.state.sourcRoot+"/caseimg/snorlax_222.glb";o.load(r,(function(n){t.mao=n.scene.children[0],t.mao.position.set(0,0,0),t.mao.scale.set(2.6,2.6,2.6);var o=new d.Kb;o.textureEncoding=d.Sb;e.$store.state.sourcRoot;var r=e.$store.state.sourcRoot+"/caseimg/sk-uv-new.png",l=(location.href.split("?v=")[1],r),map=o.load(l);map.flipY=!1;var m=new d.Bb({vertexShader:v.default,fragmentShader:f.default,uniforms:{uTime:{value:0},uDragStart:{value:new d.Pb},uDragTarget:{value:new d.Pb},uDragReleaseTime:{value:0},uDragRelease:{value:1},uReleaseDecay:{value:10},uReleaseFrequency:{value:55},uMap:{value:map}},transparent:!0});t.material=m;var h=t.mao;h.material=t.material,t.active={backgroundColor:"linear-gradient(0deg, rgb(68 99 49) 0%, rgb(163 174 255) 100%)",gltfLoader:new c.a,material:t.material,shape:h,textureLoader:new d.Kb},t.meshList.push(t.active.shape),t.add(t.active.shape)}),(function(e){var n=Math.floor(e.loaded/e.total*100);100==n&&t.$emit("getrate",n)}))},addLight:function(){var e=1e3,t=new d.b(16777215,1);this.add(t);var n=new d.p(16777215,1);n.position.set(0,e,e),this.add(n);var o=new d.p(16777215,1);o.position.set(-1e3,e,e),this.add(o);var r=new d.p(16777215,1);r.position.set(e,e,e),this.add(r);var l=new d.p(16777215,1);l.position.set(0,e,-1e3),this.add(l);var c=new d.p(16777215,1);c.position.set(0,-1e3,-1e3),this.add(c)},add:function(e){o.add(e)},update:function(time){this.material.uniforms.uTime.value=time},render:function(){this.time+=.01633,this.material&&this.update(this.time),l.render(o,r),requestAnimationFrame(this.render)}}},y=function(){Object(w.b)((function(e,t){return{96610930:e.back_ground}}))},_=x.setup;x.setup=_?function(e,t){return y(),_(e,t)}:y;var D=x,k=(n(514),n(22)),component=Object(k.a)(D,(function(){var e=this._self._c;return e("div",{staticClass:"home-cloud-box",attrs:{id:"home-cloud-box"}},[e("div",{ref:"webglDom_home",attrs:{id:"webglDom_home"}})])}),[],!1,null,null,null);t.default=component.exports},541:function(e,t,n){"use strict";n.r(t);var o=n(8),r={name:"BottomBox",data:function(){return{sourceUrl:this.$store.state.sourcRoot,back_ground1:"url("+this.$store.state.sourcRoot+"/image/index/copyright.png)",back_ground2:"url("+this.$store.state.sourcRoot+"/image/index/logo.png)"}},methods:{}},l=function(){Object(o.b)((function(e,t){return{d7e61b08:e.back_ground2,d7e61b0a:e.back_ground1,"04c69c76":e.back_ground}}))},d=r.setup;r.setup=d?function(e,t){return l(),d(e,t)}:l;var c=r,m=(n(516),n(22)),component=Object(m.a)(c,(function(){var e=this._self._c;return e("div",{staticClass:"index-bottom-text"},[e("img",{attrs:{src:this.sourceUrl+"/image/index/bottom.png"}})])}),[],!1,null,null,null);t.default=component.exports},542:function(e,t,n){"use strict";n.r(t);var o={name:"BottomBg",data:function(){return{sourceUrl:this.$store.state.sourcRoot,showBottomBg:!1}},mounted:function(){var e=window.innerHeight-70-280-410;this.showBottomBg=e>0},methods:{}},r=(n(518),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.showBottomBg,expression:"showBottomBg"}],staticClass:"index-bottom-bg"},[t("img",{attrs:{src:e.sourceUrl+"/image/index/absolutebottom1.png"}})])}),[],!1,null,null,null);t.default=component.exports},560:function(e,t,n){"use strict";n(527)},561:function(e,t,n){var o=n(40)(!1);o.push([e.i,".container[data-v-5b6ea87f]{width:100vw;height:100vh;overflow-x:hidden;overflow-y:hidden;position:relative}",""]),e.exports=o},617:function(e,t,n){"use strict";n.r(t);n(20),n(33),n(34);var o={layout:"loading",name:"IndexPage",components:{IndexTopText:function(){return Promise.resolve().then(n.bind(null,539))},HomeCloudNew:function(){return Promise.resolve().then(n.bind(null,540))},BottomBox:function(){return Promise.resolve().then(n.bind(null,541))},BottomBg:function(){return Promise.resolve().then(n.bind(null,542))}},methods:{getRate:function(e){console.log("rate",e),this.$store.state.loadRate=e}}},r=(n(560),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("IndexTopText"),e._v(" "),t("HomeCloudNew",{on:{getrate:e.getRate}}),e._v(" "),t("BottomBox"),e._v(" "),t("BottomBg")],1)}),[],!1,null,"5b6ea87f",null);t.default=component.exports;installComponents(component,{IndexTopText:n(539).default,HomeCloudNew:n(540).default,BottomBox:n(541).default,BottomBg:n(542).default})}}]);