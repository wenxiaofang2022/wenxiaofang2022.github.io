(window.webpackJsonp=window.webpackJsonp||[]).push([[17,21,22,23],{497:function(e,t,n){"use strict";n.r(t);t.default="\n\nuniform sampler2D uMap;\n\nvarying vec2 vUv;\nvarying float vDiff;\n\nvoid main() {\n\tgl_FragColor = texture2D(uMap, vUv);\n}"},498:function(e,t,n){"use strict";n.r(t);t.default="\n\nuniform float uTime;\nuniform vec3 uDragStart;\nuniform vec3 uDragTarget;\nuniform float uReleaseDecay;\nuniform float uReleaseFrequency;\nuniform float uDragReleaseTime;\nuniform float uDragRelease;\n\nvarying vec2 vUv;\nvarying float vDiff;\n\n\nvoid main() {\n    float startToTarget = distance(uDragTarget, uDragStart);\n    float distanceToStart = distance(position, uDragStart);\n    float influence = distanceToStart / (0.2 + 0.4 * startToTarget);\n    float distortion = exp(pow(clamp(influence, 0.,1.), 3.2) * -6.);\n\n    if (uDragRelease > 0.) {\n        float timeSinceRelease = uTime - uDragReleaseTime;\n        distortion *= exp(-uReleaseDecay * timeSinceRelease * max(distortion, 1.) / ( 6.));\n        distortion *= cos(timeSinceRelease * uReleaseFrequency / ( 6.28));\n    }\n\n    vec3 stretch = (uDragTarget - uDragStart) * distortion;\n    stretch += (uDragStart - position) * distortion * 0.72;\n\n    vec3 pos = position;\n    pos += stretch;\n    pos.z += abs(distortion) * 0.2;\n\n    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.);\n\n    gl_Position = projectionMatrix * viewPosition;\n\n    vUv = uv;\n    vDiff = length(pos - position) * uDragRelease;\n}"},499:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),o=n(1),l=n(2),h=n(188),c=n(497),d=n(498),m=function(){function e(){Object(r.a)(this,e),this.gltfLoader=new h.a,this.textureLoader=new l.Kb,this.backgroundColor="linear-gradient(0deg, rgb(68 99 49) 0%, rgb(163 174 255) 100%)",this.setMaterial(),this.setShape()}return Object(o.a)(e,[{key:"setMaterial",value:function(){var map=this.textureLoader.load("/caseimg/snorlax_texture.png");map.flipY=!1,this.material=new l.Bb({vertexShader:d.default,fragmentShader:c.default,uniforms:{uTime:{value:0},uDragStart:{value:new l.Pb},uDragTarget:{value:new l.Pb},uDragReleaseTime:{value:0},uDragRelease:{value:1},uReleaseDecay:{value:10},uReleaseFrequency:{value:55},uMap:{value:map}},transparent:!0})}},{key:"setShape",value:function(){var e=this;this.gltfLoader.load("assets/snorlax_210.glb",(function(t){console.log("gltf",t),e.shape=t.scene.children[0],e.shape.material=e.material}))}},{key:"onMouseDown",value:function(e){this.material.uniforms.uDragStart.value.copy(e),this.material.uniforms.uDragTarget.value.copy(e),this.material.uniforms.uDragRelease.value=!1}},{key:"onMouseMove",value:function(e){this.material.uniforms.uDragTarget.value.copy(e)}},{key:"onMouseUp",value:function(time){this.material.uniforms.uDragReleaseTime.value=time,this.material.uniforms.uDragRelease.value=!0}},{key:"update",value:function(time){this.material.uniforms.uTime.value=time}},{key:"setConfig",value:function(e){e.addInput(this.material.uniforms.uReleaseDecay,"value",{min:.5,max:30,label:"releaseDecay"}),e.addInput(this.material.uniforms.uReleaseFrequency,"value",{min:1,max:100,label:"releaseFrequency"})}}]),e}()},541:function(e,t,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("0124a992",content,!0,{sourceMap:!1})},591:function(e,t,n){"use strict";n(541)},592:function(e,t,n){var r=n(52)(!1);r.push([e.i,".home-cloud-box[data-v-161a521a]{width:100%;height:280PX;position:relative;z-index:10;background:var(--eb18b6f2);background-repeat:no-repeat;background-position:center center;background-size:110% auto}.home-cloud-box #webglDom_home[data-v-161a521a]{width:390PX;height:370PX;margin-top:-55PX;position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}",""]),e.exports=r},637:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(189),l=n(188),h=n(509),c=n(508),d=(n(499),n(497)),m=n(498),f=n(8),v={name:"HomeCloudNew",data:function(){return{isDragging:!1,mouse:null,raycaster:null,time:0,active:{backgroundColor:"linear-gradient(0deg, rgb(68 99 49) 0%, rgb(163 174 255) 100%)",gltfLoader:null,material:null,shape:null,textureLoader:null},material:null,meshList:[],touchTarget:null,scene:null,camera:null,renderer:null,textloader:null,width:0,height:0,mao:null,clock:null,group:null,morphTargetInfluences:null,morphTargetDictionary:null,onPointerDownPointerX:null,onPointerDownPointerY:null,startX:null,startY:null,endX:null,endY:null,outsideModel:!0,timer:null,direction:null,strength:0,back_ground:"url("+this.$store.state.sourcRoot+"/image/index/text-bg.png)"}},watch:{},mounted:function(){this.$nextTick(this.init)},methods:{init:function(){var e=this.$refs.webglDom_home;this.width=e.offsetWidth,this.height=e.offsetHeight,this.scene=new r.Ab,this.textloader=new r.Kb,this.camera=new r.bb(this.width/-2,this.width/2,this.height/2,this.height/-2,1,1e3),this.camera.position.set(600,100,100),this.add(this.camera),this.camera.lookAt(this.scene.position),this.group=new r.v,this.clock=new r.k,this.mouse=new r.Ob,this.raycaster=new r.xb,this.renderer=new r.Rb({antialias:!0}),this.touchTarget=new r.R(new r.fb(5e3,5e3),new r.S({opacity:0,transparent:!0,depthWrite:!1})),this.renderer.outputEncoding=r.Sb,this.renderer.toneMapping=r.a,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.cb,this.renderer.setClearColor(new r.l("#ffffff"),.1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),document.getElementById("webglDom_home").appendChild(this.renderer.domElement);var t=new o.a,n=new r.db(this.renderer);this.scene.environment=n.fromScene(t).texture,document.getElementById("webglDom_home").addEventListener("touchstart",this.onMouseDown,!1),document.getElementById("webglDom_home").addEventListener("touchmove",this.onMouseMove,!1),document.getElementById("webglDom_home").addEventListener("touchend",this.onMouseUp,!1),this.loadModel(),this.render()},inner_onMouseDown:function(e){this.material.uniforms.uDragStart.value.copy(e),this.material.uniforms.uDragTarget.value.copy(e),this.material.uniforms.uDragRelease.value=!1},inner_onMouseMove:function(e){this.material.uniforms.uDragTarget.value.copy(e)},inner_onMouseUp:function(time){this.material.uniforms.uDragReleaseTime.value=time,this.material.uniforms.uDragRelease.value=!0},onMouseDown:function(e){var t=window.innerWidth,n=window.innerHeight,r=(t-390)/2;this.mouse.x=(e.touches[0].pageX-r)/t*2-1,this.mouse.y=-(e.touches[0].pageY-70)/n*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),console.log("this.scene",this.scene),console.log("this.active.shape",this.active.shape),console.log("this.group",this.group);var o=this.raycaster.intersectObjects(this.meshList,!0);if(console.log("intersect",o),o.length){this.isDragging=!0;var l=o[0].point;this.inner_onMouseDown(l)}},onMouseMove:function(e){var t=window.innerWidth,n=window.innerHeight,r=(t-390)/2;if(this.mouse.x=(e.touches[0].pageX-r)/t*2-1,this.mouse.y=-(e.touches[0].pageY-70)/n*2+1,this.active.shape.rotation.y=.15*this.mouse.x,this.active.shape.rotation.x=.15*this.mouse.y,this.isDragging){this.raycaster.setFromCamera(this.mouse,this.camera);var o=this.raycaster.intersectObject(this.touchTarget);if(o.length){var l=o[0].point;this.inner_onMouseMove(l)}}},onMouseUp:function(){this.isDragging&&(this.isDragging=!1,this.inner_onMouseUp(this.time))},loadModel:function(){var e=this,t=(new h.a).setTranscoderPath("/js/libs/basis/").detectSupport(this.renderer);(new l.a).setCrossOrigin("anonymous").setKTX2Loader(t).setMeshoptDecoder(c.a).load("/caseimg/snorlax.glb",(function(t){console.log("gltf",t),e.mao=t.scene.children[0].children[0],console.log("that.mao",e.mao),e.mao.position.set(0,0,0),e.mao.scale.set(2.8,2.8,2.8),e.mao.rotation.set(0,1.4,0);var map=(new r.Kb).load("/caseimg/snorlax_texture.png");map.flipY=!1;var n=new r.Bb({vertexShader:m.default,fragmentShader:d.default,uniforms:{uTime:{value:0},uDragStart:{value:new r.Pb},uDragTarget:{value:new r.Pb},uDragReleaseTime:{value:0},uDragRelease:{value:1},uReleaseDecay:{value:10},uReleaseFrequency:{value:55},uMap:{value:map}},transparent:!0});e.material=n;var o=e.mao;o.material=e.material,e.active={backgroundColor:"linear-gradient(0deg, rgb(68 99 49) 0%, rgb(163 174 255) 100%)",gltfLoader:new l.a,material:e.material,shape:o,textureLoader:new r.Kb},e.meshList.push(e.active.shape),e.add(e.active.shape)}),(function(t){var n=Math.floor(t.loaded/t.total*100);e.$emit("getrate",n)}))},addLight:function(){var e=new r.p(16777215,.2);e.position.set(0,1e3,1e3),e.castShadow=!0,this.add(e)},add:function(e){this.scene.add(e)},render:function(){this.time+=.001,this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)}}},w=function(){Object(f.b)((function(e,t){return{eb18b6f2:e.back_ground}}))},D=v.setup;v.setup=D?function(e,t){return w(),D(e,t)}:w;var y=v,x=(n(591),n(30)),component=Object(x.a)(y,(function(){var e=this._self._c;return e("div",{staticClass:"home-cloud-box",attrs:{id:"home-cloud-box"}},[e("div",{ref:"webglDom_home",attrs:{id:"webglDom_home"}})])}),[],!1,null,"161a521a",null);t.default=component.exports}}]);