(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20],{347:function(t,e,o){var content=o(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("a15c5e08",content,!0,{sourceMap:!1})},352:function(t,e,o){var content=o(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("7ac6fb54",content,!0,{sourceMap:!1})},354:function(t,e,o){"use strict";o(347)},355:function(t,e,o){var n=o(66)(!1);n.push([t.i,".webglDom[data-v-a9c79e0c]{width:100%;height:100%;position:relative;z-index:1}",""]),t.exports=n},373:function(t,e,o){"use strict";o.r(e);o(30),o(14),o(37);var n=o(338),r=o(340),d=o(339),l=o(341),c={name:"OilContent",props:["glburl"],data:function(){return{object:null,scene:null,camera:null,renderer:null,textloader:null,controls:null,group:null,width:0,height:0,center:null,activeIndex:0,onPointerDownPointerX:null,onPointerDownPointerY:null,logopath:{"云栖盲盒":"","伸爪":"","天猫live":"","天猫国际全球好物课代表":"","天生艺术":"","淘宝回忆":""}}},watch:{},mounted:function(){this.$nextTick(this.init)},methods:{init:function(){var t=this.$refs.webglDom;this.width=t.offsetWidth,this.height=t.offsetHeight,this.scene=new n.gb,this.textloader=new n.pb,this.group=new n.q,this.camera=new n.X(45,this.width/this.height,.01,1e4),this.camera.position.set(0,0,0),console.log("this.camera",this.camera),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.loadModel(),t.addEventListener("mousedown",this.onDocumentMouseDown,!1),document.addEventListener("touchstart",this.onDocumentTouchDown,!1),document.addEventListener("touchend",this.onDocumentTouchUp,!1),document.addEventListener("touchmove",this.onDocumentTouchMove,!1)},onDocumentTouchDown:function(t){this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY,this.onPointerDownPointerX=t.touches[0].pageX,this.onPointerDownPointerY=t.touches[0].pageY},onDocumentTouchMove:function(t){this.onPointerDownPointerX=t.touches[0].pageX,this.onPointerDownPointerY=t.touches[0].pageY,this.endX=t.touches[0].pageX,this.endY=t.touches[0].pageY},onDocumentTouchUp:function(t){},onDocumentMouseDown:function(t){var e=this.getIntersects(t);if(console.log("intersects",e),0!==e.length&&"Mesh"===e[0].object.type){var o=e[0].object;console.log("selectObject",o.name)}else console.log("未选中 Mesh!")},getIntersects:function(t,e){e||t.preventDefault();var o=new n.eb,r=new n.sb;return e?t.clientX?(r.x=t.clientX/window.innerWidth*2-1,r.y=-t.clientY/window.innerHeight*2+1):(r.x=this.onPointerDownPointerX/window.innerWidth*2-1,r.y=-this.onPointerDownPointerY/window.innerHeight*2+1):(r.x=t.clientX/window.innerWidth*2-1,r.y=-t.clientY/window.innerHeight*2+1),o.setFromCamera(r,this.camera),o.intersectObjects(this.group.children,!0)},changeCamera:function(t){var object=t.scene||t.scenes[0],e=(new n.f).setFromObject(object),o=e.getSize(new n.tb(0,0,0)).length(),l=e.getCenter(new n.tb(0,0,0));object.position.x+=object.position.x-l.x,object.position.y+=object.position.y-l.y,object.position.z+=object.position.z-l.z,object.scale.set(.96,.96,.96),object.translateY(.1),this.camera.near=o/100,this.camera.far=100*o,this.camera.position.copy(l),this.camera.position.x+=o/2,this.camera.position.y+=o/5,this.camera.position.z+=o/2,this.camera.lookAt(l),this.camera.up=new n.tb(0,1,0),this.camera.updateProjectionMatrix(),this.object=object,this.group.add(this.object),this.scene.add(this.group),this.printGraph(object),this.renderer=new n.vb({antialias:!0}),this.renderer.outputEncoding=n.wb,this.renderer.toneMapping=n.a,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.V,this.renderer.setClearColor(new n.k("#000000"),0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.$refs.webglDom.appendChild(this.renderer.domElement);var c=new d.a,h=new n.W(this.renderer);this.scene.environment=h.fromScene(c).texture;var m=new r.a(this.camera,this.renderer.domElement);m.enablePan=!1,m.enableZoom=!1,m.minPolarAngle=Math.PI/3,m.maxPolarAngle=Math.PI/2,this.controls=m,this.render()},loadModel:function(){var t=this;(new l.a).load(this.glburl,(function(e){console.log("gltf",e),t.changeCamera(e)}))},printGraph:function(t){var e=this;console.log("node.children.length",t.children.length),console.group(" <"+t.type+"> "+t.name),t.children.forEach((function(t){return e.printGraph(t)})),console.groupEnd()},addLight:function(){var t=1e3,e=new n.b(16777215,.5);this.add(e);var o=new n.l(16777215,.5);o.position.set(0,t,t),this.add(o);var r=new n.l(16777215,.5);r.position.set(-1e3,t,t),this.add(r);var d=new n.l(16777215,.5);d.position.set(t,t,t),this.add(d);var l=new n.l(16777215,.5);l.position.set(0,t,-1e3),this.add(l);var c=new n.l(16777215,.5);c.position.set(0,-1e3,-1e3),this.add(c)},add:function(t){this.scene.add(t)},render:function(){this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}}},h=(o(354),o(34)),component=Object(h.a)(c,(function(){return(0,this._self._c)("div",{ref:"webglDom",staticClass:"webglDom"})}),[],!1,null,"a9c79e0c",null);e.default=component.exports},380:function(t,e,o){"use strict";o(352)},381:function(t,e,o){var n=o(66)(!1);n.push([t.i,'.webgl-container[data-v-5844d11d]{width:calc(100% - 0.61333rem);height:calc(100vh - 0.73333rem);margin:0 auto;position:relative;padding-bottom:0.82667rem;position:relative}.webgl-box[data-v-5844d11d]{width:calc(100% + 0.61333rem);height:100%;margin-left:-0.30667rem;position:relative;z-index:100}.webgl-box .oil_content_box[data-v-5844d11d]{width:100%;height:100%;position:relative;overflow:hidden}.webgl-box .oil_content_box .absolute_box[data-v-5844d11d]{width:400%;height:100%;position:absolute;top:0px;left:0px;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@keyframes showLeftItem-5844d11d{from{margin-left:0}to{margin-left:-100%}}@-webkit-keyframes showLeftItem-5844d11d{from{margin-left:0}to{margin-left:-100%}}@keyframes showRightItem-5844d11d{from{margin-left:-100%}to{margin-left:0}}@-webkit-keyframes showRightItem-5844d11d{from{margin-left:-100%}to{margin-left:0}}.webgl-box .oil_content_box .absolute_box.d_left[data-v-5844d11d]{margin-left:0;animation:showRightItem-5844d11d 1s ease;-moz-animation:showRightItem-5844d11d 1s ease;-webkit-animation:showRightItem-5844d11d 1s ease;-o-animation:showRightItem-5844d11d 1s ease}.webgl-box .oil_content_box .absolute_box.d_right[data-v-5844d11d]{margin-left:-100%;animation:showLeftItem-5844d11d 1s ease;-moz-animation:showLeftItem-5844d11d 1s ease;-webkit-animation:showLeftItem-5844d11d 1s ease;-o-animation:showLeftItem-5844d11d 1s ease}.webgl-box .oil_content_box .absolute_box .oil_content[data-v-5844d11d]{width:25%;height:100%}.webgl-box .oil_content_box .absolute_box.start_right[data-v-5844d11d]{margin-left:-100%}.webgl-box .oil_content_box .absolute_box.start_left[data-v-5844d11d]{margin-left:0px}.webgl-box .oil_content_box .absolute_box.notfirst[data-v-5844d11d]{width:200%}.webgl-box .oil_content_box .absolute_box.notfirst .oil_content[data-v-5844d11d]{width:50%}.webgl-box .top_bg[data-v-5844d11d]{width:4.4rem;height:1.64rem;background:var(--4a1a3206);background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:0.26667rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.webgl-box .center_bg[data-v-5844d11d]{display:none;width:4.41333rem;height:4.38667rem;position:absolute;z-index:0;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.webgl-box .bottom_bg[data-v-5844d11d]{width:4.4rem;height:0.96rem;background:var(--0da7e22a);background-repeat:no-repeat;background-size:100% auto;position:absolute;bottom:0.4rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.oilbox_arrow[data-v-5844d11d]{width:3.4rem;height:1.30667rem;background:var(--0da7e228);background-repeat:no-repeat;background-position:center;background-size:100%;position:absolute;bottom:0.2rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:0}.oilbox_nav[data-v-5844d11d]{height:0.50667rem;width:100%;background:var(--0da7e226);background-repeat:no-repeat;background-position:center;background-size:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.02667rem;padding-top:1px}.oilbox_nav .oilbox_item[data-v-5844d11d]{width:1.13333rem;height:0.48rem;font-family:"jcyt 700";font-size:0.18333rem;color:#d0d0d0;text-align:center;line-height:0.48rem}.oilbox_nav .oilbox_item.active[data-v-5844d11d]{color:#fff;background:var(--0da7e224);background-repeat:no-repeat;background-position:center;background-size:100% 100%}.oilbox_nav .oilbox_divider[data-v-5844d11d]{width:0.04rem;height:100%;background:var(--0da7e222);background-repeat:no-repeat;background-position:center;background-size:100% auto;margin-right:0.04rem}.blank_space[data-v-5844d11d]{width:100%;height:0.82667rem}',""]),t.exports=n},510:function(t,e,o){"use strict";o.r(e);o(14),o(24),o(25),o(68);var n=o(1),r={name:"OilBox",data:function(){return{url1:"./caseimg/01.glb",url2:"./caseimg/02.glb",url3:"./caseimg/03.glb",url4:"./caseimg/04.glb",prevIndex:0,activeIndex:0,notfirst:!1,clickable:!0,direction:null,startLocation:"left",prevDis:"0px",activeDis:"0px",timer:null,back_ground:"url("+this.$store.state.sourcRoot+"/image/caselist/top_bg.png)",back_ground1:"url("+this.$store.state.sourcRoot+"/image/caselist/bottom_bg.png)",back_ground2:"url("+this.$store.state.sourcRoot+"/image/caselist/arrow.png)",back_ground3:"url("+this.$store.state.sourcRoot+"/image/caselist/option_bg.png)",back_ground4:"url("+this.$store.state.sourcRoot+"/image/caselist/checked.png)",back_ground5:"url("+this.$store.state.sourcRoot+"/image/caselist/divider.png)"}},watch:{},components:{OilContent:function(){return Promise.resolve().then(o.bind(null,373))}},mounted:function(){},methods:{loadModel:function(t){var e=this;if(t!=this.activeIndex&&this.clickable){this.notfirst=!0;var o=this.activeIndex;this.prevIndex=o,this.activeIndex=t;this.direction;this.direction=null,this.clickable=!1,this.prevIndex>this.activeIndex?(this.startLocation="left",this.timer=setTimeout((function(){e.direction="left",e.clickable=!0,clearTimeout(e.timer)}),0)):(this.startLocation="right",setTimeout((function(){e.direction="right",e.clickable=!0,clearTimeout(e.timer)}),0))}}}},d=function(){Object(n.b)((function(t,e){return{"4a1a3206":t.back_ground,"0da7e22a":t.back_ground1,"0da7e228":t.back_ground2,"0da7e226":t.back_ground3,"0da7e224":t.back_ground4,"0da7e222":t.back_ground5}}))},l=r.setup;r.setup=l?function(t,e){return d(),l(t,e)}:d;var c=r,h=(o(380),o(34)),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"webgl-container"},[e("div",{staticClass:"webgl-box"},[e("div",{staticClass:"top_bg"}),t._v(" "),e("div",{staticClass:"center_bg"}),t._v(" "),e("div",{staticClass:"bottom_bg"}),t._v(" "),e("div",{staticClass:"oil_content_box"},[e("div",{class:[{notfirst:t.notfirst},{d_left:"left"==t.direction},{d_right:"right"==t.direction},{start_left:"left"==t.startLocation},{start_right:"right"==t.startLocation},"absolute_box"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||0===t.prevIndex||0===t.activeIndex,expression:"!notfirst||prevIndex===0||activeIndex===0"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url1}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||1===t.prevIndex||1===t.activeIndex,expression:"!notfirst||prevIndex===1||activeIndex===1"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url2}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||2===t.prevIndex||2===t.activeIndex,expression:"!notfirst||prevIndex===2||activeIndex===2"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url3}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.notfirst||3===t.prevIndex||3===t.activeIndex,expression:"!notfirst||prevIndex===3||activeIndex===3"}],staticClass:"oil_content"},[e("OilContent",{attrs:{glburl:t.url4}})],1)])]),t._v(" "),e("div",{staticClass:"oilbox_arrow"})]),t._v(" "),e("div",{staticClass:"oilbox_nav"},[e("div",{staticClass:"oilbox_item",class:0==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(0)}}},[t._v("整合营销")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:1==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(1)}}},[t._v("创意表达")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:2==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(2)}}},[t._v("互动体验")]),t._v(" "),e("div",{staticClass:"oilbox_divider"}),t._v(" "),e("div",{staticClass:"oilbox_item",class:3==t.activeIndex?"active":"",on:{click:function(e){return t.loadModel(3)}}},[t._v("独家出品")])]),t._v(" "),e("div",{staticClass:"blank_space"})])}),[],!1,null,"5844d11d",null);e.default=component.exports;installComponents(component,{OilContent:o(373).default})}}]);