(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(e,t,n){e.exports=n.p+"img/1.e2d79af.png"},452:function(e,t,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("3885d6c6",content,!0,{sourceMap:!1})},534:function(e,t,n){"use strict";n(452)},535:function(e,t,n){var o=n(66)(!1);o.push([e.i,'.webgl-container{width:calc(100% - 0.61333rem);height:calc(100vh - 0.73333rem);background:url("/image/caselist/oilbox_bg.png") no-repeat center 0.4rem;background-size:100%;margin:0 auto;position:relative;padding-bottom:0.82667rem}.webgl-box{width:calc(100% + 0.61333rem);height:8.14667rem;margin-left:-0.30667rem;position:relative;z-index:100}#webglDom{width:100%;height:100%}.oilbox_arrow{width:3.4rem;height:1.30667rem;background:url("/image/caselist/arrow.png") no-repeat center;background-size:100%;position:absolute;bottom:0.2rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:10}.oilbox_nav{height:0.50667rem;width:100%;background:url("/image/caselist/option_bg.svg") no-repeat center;background-size:auto 100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.05333rem}.oilbox_nav .oilbox_item{width:1.08rem;height:0.50667rem;font-family:"jcyt 700";font-size:0.17534rem;color:#d0d0d0;text-align:center;line-height:0.50667rem}.oilbox_nav .oilbox_item.active{color:#fff;background:url("/image/caselist/checked.svg") no-repeat center;background-size:100% 100%}.oilbox_nav .oilbox_divider{width:0.04rem;height:100%;background:url("/image/caselist/divider.svg") no-repeat center;background-size:100% auto;margin-right:0.05333rem}.blank_space{width:100%;height:0.82667rem}',""]),e.exports=o},550:function(e,t,n){"use strict";n.r(t);n(55),n(37),n(14),n(38);var o=n(336),r=n(364),c=n(365),l=(n(334),{name:"OilBox",data:function(){return{object:null,scene:null,camera:null,renderer:null,textloader:null,controls:null,group:null,width:0,height:0,center:null,activeIndex:0,onPointerDownPointerX:null,onPointerDownPointerY:null}},watch:{skyType:function(){this.addSkeyBox()}},mounted:function(){this.$nextTick(this.init)},methods:{init:function(){var e=this.$refs.webglDom;this.width=e.offsetWidth,this.height=e.offsetHeight,this.scene=new o.eb,this.textloader=new o.nb,this.group=new o.p,this.camera=new o.V(45,this.width/this.height,.01,1e4),this.camera.position.set(0,0,0),console.log("this.camera",this.camera),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.loadModel(),e.addEventListener("mousedown",this.onDocumentMouseDown,!1),document.addEventListener("touchstart",this.onDocumentTouchDown,!1),document.addEventListener("touchend",this.onDocumentTouchUp,!1),document.addEventListener("touchmove",this.onDocumentTouchMove,!1)},onDocumentTouchDown:function(e){this.onPointerDownPointerX=e.touches[0].pageX,this.onPointerDownPointerY=e.touches[0].pageY},onDocumentTouchMove:function(e){this.onPointerDownPointerX=e.touches[0].pageX,this.onPointerDownPointerY=e.touches[0].pageY},gethowIntersects:function(){var e=this;console.log("this.object",this.object.children[0].children),this.object.children[0].children.map((function(t){var n=(new o.o).setFromProjectionMatrix(e.camera.projectionMatrix);t.isMesh&&(n.containsPoint(t.position)||n.intersectsObject(t))&&console.log("node.name",t.name)}))},onDocumentTouchUp:function(e){var t=this,n=this.getIntersects(e,"moveup"),o=[];n.map((function(e){o.push(e.object.name)})),console.log("logo_names",o);["伸爪","天猫live"].map((function(e){o.indexOf(e)>-1&&(t.activeIndex=0)})),["发发奇","飞猪2","001","天猫","HEY_DESIGN","hey"].map((function(e){o.indexOf(e)>-1&&(t.activeIndex=1)})),["城市","飞猪","乐高","盲盒","长江","alibaba"].map((function(e){o.indexOf(e)>-1&&(t.activeIndex=2)})),["节日","金玉满堂"].map((function(e){o.indexOf(e)>-1&&(t.activeIndex=3)}))},onDocumentMouseDown:function(e){var t=this.getIntersects(e);if(console.log("intersects",t),0!==t.length&&"Mesh"===t[0].object.type){var n=t[0].object;console.log("selectObject",n.name),this.$router.push({path:"/caselist/city"})}else console.log("未选中 Mesh!")},changeNav:function(e){e!=this.activeIndex&&(this.activeIndex=e,0==e?this.group.rotation.set(0,2*Math.PI,0):1==e?this.group.rotation.set(0,Math.PI/2,0):2==e?this.group.rotation.set(0,Math.PI,0):3==e&&this.group.rotation.set(0,3*Math.PI/2,0))},getIntersects:function(e,t){t||e.preventDefault();var n=new o.cb,r=new o.qb;return t?e.clientX?(r.x=e.clientX/window.innerWidth*2-1,r.y=-e.clientY/window.innerHeight*2+1):(r.x=this.onPointerDownPointerX/window.innerWidth*2-1,r.y=-this.onPointerDownPointerY/window.innerHeight*2+1):(r.x=e.clientX/window.innerWidth*2-1,r.y=-e.clientY/window.innerHeight*2+1),n.setFromCamera(r,this.camera),n.intersectObjects(this.group.children,!0)},rotateAroundWorldAxis:function(object,e,t){var n=new o.I;n.makeRotationAxis(e.normalize(),t),n.multiply(object.matrix),object.matrix=n,object.rotation.setFromRotationMatrix(object.matrix)},addBox:function(){var e=new o.e(300,300,300),t=new o.L({color:16711680}),n=new o.J(e,t);this.add(n)},changeCamera:function(e){var object=e.scene||e.scenes[0],t=(new o.d).setFromObject(object),n=t.getSize(new o.rb(0,0,0)).length(),c=t.getCenter(new o.rb(0,0,0));console.log("box",t),console.log("size",n),console.log("center",c),object.position.x+=object.position.x-c.x,object.position.y+=object.position.y-c.y,object.position.z+=object.position.z-c.z,object.scale.set(.8,.8,.8),object.translateY(.2),this.camera.near=n/100,this.camera.far=100*n,this.camera.position.copy(c),this.camera.position.x+=n/2,this.camera.position.y+=n/5,this.camera.position.z+=n/2,this.camera.lookAt(c),this.camera.updateProjectionMatrix(),console.log("this.camera.position",this.camera.position),console.log("object.position",object.position),console.log("this.scene",this.scene),this.object=object,console.log("object",object),this.group.add(this.object),this.scene.add(this.group),object.traverse((function(e){e.isMesh&&(e.material.depthWrite=!e.material.transparent,e.castShadow=!0,e.material.metalness=1,e.material.roughness=0,e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),this.printGraph(object),this.renderer=new o.tb({antialias:!0}),this.renderer.outputEncoding=o.ub,this.textureEncoding=o.ub,this.renderer.setClearColor(new o.i("#ffffff"),0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),document.getElementById("webglDom").appendChild(this.renderer.domElement);var l=new r.a(this.camera,this.renderer.domElement);l.enableZoom=!1,l.minPolarAngle=Math.PI/2,l.maxPolarAngle=Math.PI/2,this.controls=l,this.render()},changeCamera_bak:function(e){var object=e.scene||e.scenes[0],t=(new o.d).setFromObject(object);t.getSize(new o.rb(0,0,0)).length(),t.getCenter(new o.rb(0,0,0));console.log("object.position",object.position),console.log("this.camera.position",this.camera.position),object.scale.set(.8,.8,.8),object.position.y=-1,this.object=object,console.log("object",object),this.group.add(this.object),this.scene.add(this.group),object.traverse((function(e){e.isMesh&&(e.material.depthWrite=!e.material.transparent,e.castShadow=!0,e.material.metalness=1,e.material.roughness=0,e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),this.renderer=new o.tb({antialias:!0}),this.renderer.outputEncoding=o.ub,this.textureEncoding=o.ub,this.renderer.setClearColor(new o.i("#ffffff"),0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),document.getElementById("webglDom").appendChild(this.renderer.domElement);var n=new r.a(this.camera,this.renderer.domElement);n.enableZoom=!1,n.minPolarAngle=Math.PI/2,n.maxPolarAngle=Math.PI/2,this.controls=n,this.render()},loadModel:function(){var e=this;(new c.a).load("./caseimg/oilbox_01.glb",(function(t){console.log("gltf",t),e.changeCamera(t)}))},printGraph:function(e){var t=this;console.group(" <"+e.type+"> "+e.name),e.children.forEach((function(e){return t.printGraph(e)})),console.groupEnd()},addLight:function(){},add:function(e){this.scene.add(e)},render:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}}}),h=(n(534),n(34)),component=Object(h.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"webgl-container"},[t("div",{staticClass:"webgl-box"},[t("div",{ref:"webglDom",attrs:{id:"webglDom"}})]),e._v(" "),t("div",{staticClass:"oilbox_arrow"}),e._v(" "),t("div",{staticClass:"oilbox_nav"},[t("div",{staticClass:"oilbox_item",class:0==e.activeIndex?"active":"",on:{click:function(t){return e.changeNav(0)}}},[e._v("整合营销")]),e._v(" "),t("div",{staticClass:"oilbox_divider"}),e._v(" "),t("div",{staticClass:"oilbox_item",class:1==e.activeIndex?"active":"",on:{click:function(t){return e.changeNav(1)}}},[e._v("视觉业务")]),e._v(" "),t("div",{staticClass:"oilbox_divider"}),e._v(" "),t("div",{staticClass:"oilbox_item",class:2==e.activeIndex?"active":"",on:{click:function(t){return e.changeNav(2)}}},[e._v("互动业务")]),e._v(" "),t("div",{staticClass:"oilbox_divider"}),e._v(" "),t("div",{staticClass:"oilbox_item",class:3==e.activeIndex?"active":"",on:{click:function(t){return e.changeNav(3)}}},[e._v("自主品牌")])]),e._v(" "),t("div",{staticClass:"blank_space"})])}),[],!1,null,null,null);t.default=component.exports}}]);