//wow, thanks Jack
var _gsScope = (typeof module !== "undefined" && module.exports && typeof global !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var _xyzContexts = "position,scale,rotation".split(","),
        _contexts = {x:"position", y:"position", z:"position"},
        _DEG2RAD = Math.PI / 180,
        _degreesToRadians = function(value) {
            return (typeof(value) === "string" && value.charAt(1) === "=") ? value.substr(0, 2) + (parseFloat(value.substr(2)) * _DEG2RAD) : value * _DEG2RAD;
        }, i, p;
    for (i = 0; i < _xyzContexts.length; i++) {
        p = _xyzContexts[i];
        _contexts[p + "X"] = p;
        _contexts[p + "Y"] = p;
        _contexts[p + "Z"] = p;
    }
    var ThreePlugin = _gsScope._gsDefine.plugin({
        propName: "three",
        priority: 0,
        API: 2,
        version: "0.0.1",
        init: function (target, values, tween, index) {
            var context, axis, value, p, i, m;
            for (p in values) {
                context = _contexts[p];
                value = values[p];
                if (typeof(value) === "function") {
                    value = value(index || 0, target);
                }
                if (context) {
                    i = p.charAt(p.length-1).toLowerCase();
                    axis = (i.indexOf("x") !== -1) ? "x" : (i.indexOf("z") !== -1) ? "z" : "y";
                    this._addTween(target[context], axis, target[context][axis], (p.indexOf("rotation") !== -1) ? _degreesToRadians(value) : value, p);
                } else if (p === "scale") {
                    this._addTween(target[p], "x", target[p].x, value, p + "X");
                    this._addTween(target[p], "y", target[p].y, value, p + "Y");
                    this._addTween(target[p], "z", target[p].z, value, p + "Z");
                } else if (p === "opacity") {
                    m = (target.material.length) ? target.material : [target.material];
                    i = m.length;
                    while (--i > -1) {
                        m[i].transparent = true;
                        this._addTween(m[i], p, m[i][p], value, p);
                    }
                } else {
                    this._addTween(target, p, target[p], value, p);
                }
                this._overwriteProps.push(p);
            }
            return true;
        }
    });

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }
///////////////////////////////////////////////////////////////////
///////////   DOMINOS WITH POSITIONAL COLLISION AUDIO   ///////////
///////////////////////////////////////////////////////////////////


///---Sources---///

//imports physijs_worker.js contents from HTML (necessary in order to use workers in codepen)
var blob = new Blob( [document.querySelector('#physijs_worker').textContent] );
Physijs.scripts.worker = window.URL.createObjectURL(blob);
//imports ammo.js, which physi.js runs on top of
Physijs.scripts.ammo = 'https://chandlerprall.github.io/Physijs/examples/js/ammo.js';


///---Initiation---///

//sets the renderer in the HTML
var loadingImagePage = document.getElementById("loading_image_page"); 
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMapEnabled = true;
// to antialias the shadow
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

//physi.js scene
var scene = new Physijs.Scene;
scene.background = new THREE.Color( 0xe6e6e6 );
scene.setGravity(new THREE.Vector3(0, -50, 0));

//background
renderer.setClearColor (0x111111, 1);

//camera
var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 1, 10000 );
camera.position.set( 0, 15, 100 );
camera.lookAt( scene.position );
scene.add( camera );

//lighting
var lightP1 = new THREE.PointLight(0xFFFFFF, 0.2);
lightP1.position.set(-50,100,50);
lightP1.castShadow = true;
scene.add(lightP1);

var lightA1 = new THREE.AmbientLight(0xFFFFFF, .85);
scene.add(lightA1);


///---Tray---///

//declares a three.js geometry
var trayGeometry = new THREE.BoxGeometry(200, 1, 200);
//declares a physi.js material (threejs_material, friction, restitution)
var trayMaterial = Physijs.createMaterial(new THREE.MeshLambertMaterial({ color: 0xFFFFFF }),0.9,0.3);
var rimMaterial = Physijs.createMaterial(new THREE.MeshLambertMaterial({ color: 0xDDDDDD }),0.9,0.3);
//declares a physi.js box mesh (threejs_geometry, physijs_material, weight)
//(a weight of 0 will cause the mesh to remain fixed and not subject to gravity)
var tray = new Physijs.BoxMesh(trayGeometry, trayMaterial, 0);
tray.name = "tray";
tray.castShadow = true;
tray.receiveShadow = true;

//adds the whole tray to the scene as a single 3D object
scene.add(tray);
var tileGeometry = new THREE.BoxGeometry( 2, 15, 7 );
var ballGeometry = new THREE.SphereGeometry(5, 32, 32);
var ballMaterial = new THREE.MeshLambertMaterial({ color: 0x4149CF });
var ball = new Physijs.BoxMesh(tileGeometry, ballMaterial, undefined, 2);
ball.rotation.z = 90;
ball.__dirtyRotation = true;
ball.castShadow = true;
ball.receiveShadow = true;
ball.position.set(-25,18,3);
scene.add(ball);

///---Tiles---///

//creates an array of tiles positoned across the tray
var tiles = [];
for ( i=0; i<6 ; i++ ) {
  var tileGeometry = new THREE.BoxGeometry( 2, 15, 7 );
  var tileMaterial = Physijs.createMaterial( new THREE.MeshPhongMaterial({ color: 0xffffff}) );
  var tile = new Physijs.BoxMesh(tileGeometry, tileMaterial, 1);
  tile.castShadow = true;
  tile.receiveShadow = true;
  tile.position.set((i * 8) - 10,8,0);
  tile.hitList = ["tray"];
  tile.hasFallenFlat = false;
  tile.name = `tile${i}`;
  tiles.push(tile);
  scene.add(tile);
}








///---Functions---///

function displayLoadingImageIfDocumentNotReady() {
  loadingImagePage.style.visibility = "visible";
  document.onreadystatechange = () => {
    if (document.readyState === "complete") { 
      loadingImagePage.style.visibility = "hidden"; 
    }
  }
}

function removeFromArray(array,value) {  
  for ( i=0; i<array.length; i++ ) { 
    if ( array[i] === value ) {
     array.splice(i, 1); 
    } 
  }
}


///---Rendering---///

function render() {

  //tiles[0].position.x += .25
  //tiles[0].__dirtyPosition = true;
  
  //runs the physi.js physics engine
  scene.simulate();
  //renders the scene (scene, camera)
  renderer.render( scene, camera);
  //updates the scene on each screen repaint
  requestAnimationFrame( render );
};

displayLoadingImageIfDocumentNotReady(); 
render();


var ballPos = {
  x: ball.position.x
};

var tl = new TimelineMax({
  onUpdate: function() {
    ball.position.x = ballPos.x;
    ball.__dirtyPosition = true;
  }
});
tl.to(ballPos, 7, {x: 50, ease:Linear.easeNone})

tl.pause();

var environment = vs(".scrollTarget", tl, {
  condition: 3
});

window.addEventListener( 'resize', function () {
  
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  camera.aspect = width / height;
	camera.updateProjectionMatrix();
  
  renderer.setSize( width, height );
  composer.setSize( width, height );
  
}, false );