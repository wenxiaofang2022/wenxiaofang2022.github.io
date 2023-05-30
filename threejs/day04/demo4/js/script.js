let time = "123";
let toggle = false;
            

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   10000
);
camera.position.set(-130,-42,130);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a PointLight and turn on shadows for the light
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 300, 300, 300 );
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light



let controls = new THREE.OrbitControls(camera, renderer.domElement);
var TextMaterial = new THREE.MeshBasicMaterial({ color: 0xDC3522 });

var text3dparams;
var text3d_volume;
var text3dItemV;
scene.add(text3dItemV);
var loader = new THREE.FontLoader();

loader.load( 'https://api.myjson.com/bins/flth1', function ( font ) {
 toggle = true;
   text3dparams = {
   size: 30, // size of the text
   height: 2, // thickness to extrude text
   curveSegments: 2, // number of points on the curves
   font: font, // font name
   weight: "normal", // font weight (normal, bold)
   style: "normal" // font style  (normal, italics)
}
   text3d_volume = new THREE.TextGeometry(time, text3dparams);
   text3dItemV = new THREE.Mesh(text3d_volume, TextMaterial);
   scene.add(text3dItemV);
});

let legMaterial = new THREE.MeshStandardMaterial( {
   color: 0x323635,
    metalness: 0.1,   // between 0 and 1
    roughness: 0.1, // between 0 and 1
} );

// let legMaterial = new THREE.MeshBasicMaterial( { color: 0x444444, envMap: camera.renderTarget } );


let clockBody = new THREE.Mesh(
   createBoxWithRoundedEdges(270, 80, 80, 10, 30),
   legMaterial)
clockBody.receiveShadow = true;
clockBody.castShadow = true;
scene.add(clockBody);

let leftButton = new THREE.Mesh(
   createBoxWithRoundedEdges(60, 20, 60, 10, 30),
   legMaterial
);
leftButton.position.set(-60, 38, 0);
scene.add(leftButton);

let rightButton = new THREE.Mesh(
   createBoxWithRoundedEdges(60, 20, 60, 10, 10),
   legMaterial
);
rightButton.position.set(60, 38, 0);
scene.add(rightButton);

var legLeftBack = new THREE.Mesh(
   new THREE.SphereGeometry(10, 32, 32),
   legMaterial
);
legLeftBack.castShadow = true;
legLeftBack.receiveShadow = true;
legLeftBack.position.set(-100, -40, -20);
scene.add(legLeftBack);

var legLeftFront = new THREE.Mesh(
   new THREE.SphereGeometry(10, 32, 32),
   legMaterial
);
legLeftFront.position.set(-100, -40, 20);
scene.add(legLeftFront);

var legRightBack = new THREE.Mesh(
   new THREE.SphereGeometry(10, 32, 32),
   legMaterial
);
legRightBack.position.set(100, -40, -20);
scene.add(legRightBack);

var legRightFront = new THREE.Mesh(
   new THREE.SphereGeometry(10, 32, 32),
   legMaterial
);
legRightFront.position.set(100, -40, 20);
scene.add(legRightFront);

var display = new THREE.Mesh(
createBoxWithRoundedEdges(245, 55, 2, 1, 10),
new THREE.MeshPhongMaterial({ color: 0x000000 }));
display.position.set(0,0,40);
   scene.add(display);

let floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(200000, 200000, 2, 2), new THREE.MeshPhongMaterial({ color: 0xA0522D }));
floor.position.set(0,-50,0);
floor.rotation.x = Math.PI /180 * -90;
scene.add(floor);
function showTime() {
   var date = new Date();
   var h = date.getHours(); // 0 - 23
   var m = date.getMinutes(); // 0 - 59
   var s = date.getSeconds(); // 0 - 59
   var session = "AM";

   if (h == 0) {
      h = 12;
   }

   if (h > 12) {
      h = h - 12;
      session = "PM";
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   time = h + ":" + m + ":" + s + " " + session;

   setTimeout(showTime, 1000);
}

showTime();

function animate() {
   if (toggle){
   scene.remove(text3dItemV);
   text3d_volume = new THREE.TextGeometry(time, text3dparams);
 
 
      
   text3dItemV = new THREE.Mesh(text3d_volume, TextMaterial);
   scene.add(text3dItemV);
      
      
      var box = new THREE.Box3().setFromObject(text3dItemV);
      text3d_volume.translate(box.getSize().x/-2,box.getSize().y/-2,40);
   }
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}
animate();

function createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
   let shape = new THREE.Shape();
   let eps = 0.00001;
   let radius = radius0 - eps;
   shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
   shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
   shape.absarc(
      width - radius * 2,
      height - radius * 2,
      eps,
      Math.PI / 2,
      0,
      true
   );
   shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
   let geometry = new THREE.ExtrudeBufferGeometry(shape, {
      amount: depth - radius0 * 2,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
   });

   geometry.center();

   return geometry;
}


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}