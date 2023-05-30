// Click the button and enjoy!
// The eggs and 'eggs container' are generated as parametric 
// geometry, no 3d model was downloaded here.

let container, camera, controls, scene, artwork, renderer;
let eggGroup, eyeGroup, eyeFront;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
  
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

let isMouseMoved = false;
let isWitch = false;
let masterTL = null;

const button = document.querySelector( "#btn-animate" );

function init() {
  
  container = document.querySelector( "#scene-container" );
  scene = new THREE.Scene();

  createCamera();
  createControls();
  createLights();
  createGeometries();
  createMaterials();
  createMeshes();
  createRenderer();

  document.addEventListener( "mousemove", onDocumentMouseMove, false );
  window.addEventListener( "resize", onWindowResize );
  button.addEventListener( "click", startAnimation, false );
 
  renderer.setAnimationLoop(() => {
    
    update();
    render();
    
  });
  
}

function createCamera() {

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    10000,
  );

  camera.position.set( -25, 15, 20 );

}

function createControls() {

  controls = new THREE.OrbitControls( camera, container );
  controls.enabled = false;

}

function createLights() {

  const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x202020, 5 );

  const mainLight = new THREE.DirectionalLight( 0x8A0A8A, 15 );
  mainLight.position.set( 10, 20, 7 );

  scene.add( ambientLight, mainLight );
  
}


function createGeometries() {
  
  const sphere = new THREE.SphereBufferGeometry( 1.5, 32, 32 );
  const surface = new THREE.ParametricBufferGeometry( surfaceGeometry, 64, 64 );
  const egg = new THREE.LatheBufferGeometry( eggGeometry(), 32 );

  return {
    
    sphere,
    surface,
    egg
    
  };

}

function extraGeometry() {
  
  let distance = 20;
  let geometry = new THREE.Geometry();
  
  for ( var i = 0; i < 6000; i++ ) {

    var vertex = new THREE.Vector3();
    var color = new THREE.Vector3();

    var theta = THREE.Math.randFloatSpread(360); 
    var phi = THREE.Math.randFloatSpread(360); 

    vertex.x = distance * Math.sin(theta) * Math.cos(phi);
    vertex.y = distance * Math.sin(theta) * Math.sin(phi);
    vertex.z = distance * Math.cos(theta);
    
    geometry.vertices.push( vertex );
    
    geometry.colors.push( 
      
      new THREE.Color( 0.25, 0, 1 ),
      new THREE.Color( 0.8, 0, 1 ),
      new THREE.Color( 0.5, 0.2, 1 ),
      new THREE.Color( 1, 0.2, 0 )
      
   	);
    
  }
  
  let particles = new THREE.Points( geometry, new THREE.PointsMaterial({ vertexColors: THREE.VertexColors, size: 0.13 }));
  particles.boundingSphere = 50;
  
  let extraGroup = new THREE.Group();
  extraGroup.add( particles );
  return extraGroup;
  
}

function surfaceGeometry( u, v, target ) {
  
  let x, y, z;

  x = 20 * ( u - 0.5 );  // x and z range from -10 to 10
  z = 20 * ( v - 0.5 );
  y = 1.5 * ( Math.sin( x ) * Math.cos( z ) );
  target.set( x, y, z );
  
}

function eggGeometry() {
  
  let points = [];
  
  for ( let deg = 0; deg <= 180; deg += 6 ) {

    let rad = Math.PI * deg / 180;
    let point = new THREE.Vector2( ( 0.72 + .08 * Math.cos( rad ) ) * Math.sin( rad ), - Math.cos( rad ) ); 
    points.push( point );

  }
  
  return points;
  
}

function createMaterials() {

  const beige = new THREE.MeshStandardMaterial({
    
    color: 0xc2c2ae,
		roughness: 0.1,
	  metalness: 0.6,
		flatShading: true
    
	});
  
  beige.color.convertSRGBToLinear();
  beige.side = THREE.DoubleSide;
  
  const eggshell = new THREE.MeshStandardMaterial({
    
    color: 0xf1b168,
		roughness: 0.2,
	  metalness: 0.7,
		flatShading: true
    
	});
  
  eggshell.color.convertSRGBToLinear();
  
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/911157/eyeColor.png' );
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 16;

	const uniforms = {
    
		"texture": { type: "t", value: texture }	
    
	};

  const eye = new THREE.ShaderMaterial({
    
		uniforms: uniforms,
		vertexShader: document.getElementById('vertex_shader').textContent,
		fragmentShader: document.getElementById('fragment_shader').textContent
    
	});
  
  return {

    beige,
    eggshell,
    eye,

  };

}

function createMeshes() {
  
  eggGroup = new THREE.Group();
  eyeGroup = new THREE.Group();

  const geometries = createGeometries();
  const materials = createMaterials();
  
  const surface = new THREE.Mesh( geometries.surface, materials.beige );
  surface.position.set( 0, -0.1, 0 );
  
  const coords = [

    { x: -1.5, y: 1, z: -6.25 },
    { x: 1.625, y: 1, z: -3.125 },
    { x: 5, y: 1, z: 0 },
    { x: -7.5, y: 1, z: -6.5 },
    { x: -4.625, y: 1, z: -3.125 },
    { x: -1.5, y: 1, z: 0 },
    { x: 1.775, y: 1, z: 3.125 },
    { x: 4.75, y: 1, z: 6.25 },
    { x: -7.75, y: 1, z: 0 },
    { x: -4.625, y: 1, z: 3.125 },
    { x: -1.5, y: 1, z: 6.25 }
    
  ];
  
  eye = new THREE.Mesh( geometries.sphere, materials.eye );
  eye.scale.setScalar( 1.2 );

  eyeFront = eye.clone();
  eyeFront.rotation.set( -0.35 * Math.PI, 1.5 * Math.PI / 2, 0 );
  eyeFront.scale.setScalar( 1.15 );
  eyeFront.position.set( -7.7, 20, 6.5 );
  
  egg = new THREE.Mesh( geometries.egg, materials.eggshell );
  egg.scale.set( 2.25, 2.25, 2.25 );
  
  const eggMesh = [];
  const eyeMesh = [];
  
  for ( i = 0; i < coords.length; i++ ) {
    
    eggMesh[i] = egg.clone();
    eggMesh[i].position.x = coords[i].x;
    eggMesh[i].position.y = coords[i].y;
    eggMesh[i].position.z = coords[i].z;
    eggGroup.add( eggMesh[i] );
    
  }
  
  for ( i = 0; i < coords.length; i++ ) {
    
    eyeMesh[i] = eye.clone();
    eyeMesh[i].position.x = coords[i].x;
    eyeMesh[i].position.y = coords[i].y + 20;
    eyeMesh[i].position.z = coords[i].z;
    eyeGroup.add( eyeMesh[i] );
    
  }
  
  const sparklyBall = extraGeometry();
  sparklyBall.scale.set(0.8, 0.8, 0.8);
  
  artwork = new THREE.Group();
  artwork.position.y = -0.5;
  
  artwork.add(
    
    surface,
    eyeFront,
    eggGroup,
    eyeGroup,
    sparklyBall
    
  );
  
  scene.add( artwork );
  
}

function animate() {
  
	requestAnimationFrame(animate);
  
  let eyes = eyeGroup;
  let value1 = mouseX * 0.015;
  let value2 = mouseY * 0.015;
  
    if ( eyes && isWitch && isMouseMoved ) {
      
      eyes.children[0].rotation.set( value1, value1, value1 );
      eyes.children[1].rotation.set( 0, 0, value1 );
      eyes.children[2].rotation.set( 0.3 * value1, 0, 0 );
      eyes.children[3].rotation.set( 0, 3 * value1, 0 );
      eyes.children[4].rotation.set( value1, 0, 0 );
      eyes.children[5].rotation.set( 0, value1, value1 );
      eyes.children[6].rotation.set( 0, 0.3 * value1, 0 );
      eyes.children[7].rotation.set( value1, 0, 0 );
      eyes.children[8].rotation.set( 0, 0, value1 );
      eyes.children[9].rotation.set( 0, value1, value1 );
      eyes.children[10].rotation.set( 0, 0, -value1 );
      eyeFront.rotation.set( 1.5 * value1, Math.PI / 4, 1.5 * value1 );
    }
  
    else {
      console.log( '' );
    }

}

requestAnimationFrame(animate);

function createRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  
  renderer.physicallyCorrectLights = true;

  container.appendChild( renderer.domElement );

}

function update() {
  // animate();
}

function render() {
  
  targetX = -mouseX * .001;
  targetY = -mouseY * .0005;
  
  if ( artwork ) {
    
    artwork.rotation.y += 0.1 * ( targetX - artwork.rotation.y );
	  artwork.rotation.x += 0.05 * ( targetY - artwork.rotation.x );
    
	}
  
  renderer.render( scene, camera );
  
}

init();

function onDocumentMouseMove( event ) {
  
  isMouseMoved = true;
	mouseX = ( event.clientX - windowHalfX );
	mouseY = ( event.clientY - windowHalfY );
  
}

function onWindowResize() {
  
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( container.clientWidth, container.clientHeight );
  
}

function startAnimation() {
  
  isWitch = !isWitch;
  toggleText();
  toggleAnimation();
  
}

function toggleText() {
  
  if ( !isWitch ) {
    button.textContent = "";
    button.style.background = "linear-gradient(#6e5b4f, #302313) padding-box" + "," + "linear-gradient(#302313, #6e5b4f) border-box";
  }
  else {
    button.textContent = "";
    button.style.background = "linear-gradient(#633b73, #211b20) padding-box" + "," + "linear-gradient(#211b20, #633b73) border-box";
  }
  
}


button.addEventListener( "mouseover", function() {
    if ( !isWitch ) {
      button.style.background = "linear-gradient(#633b73, #211b20) padding-box" + "," + "linear-gradient(#211b20, #633b73) border-box";
    }
  else {
     button.style.background = "linear-gradient(#6e5b4f, #302313) padding-box" + "," + "linear-gradient(#302313, #6e5b4f) border-box"
  }
});

masterTimeline();

function masterTimeline() {
  
  let eggs = eggGroup;
  let eggsPositions = [];
  
  let eyes = eyeGroup;
  let eyesPositions = [];
  
  // get x, y, z position of every egg mesh
  for ( i = 0; i < eggs.children.length; i++ ) {
    
    eggsPositions[i] = eggs.children[i].position;
    
  }
  
  // get x, y, z position of every eye mesh
  for ( i = 0; i < eyes.children.length; i++ ) {
    
    eyesPositions[i] = eyes.children[i].position;
    
  }
  
  masterTL = gsap.timeline({ paused: true });
  
  masterTL
    .add("eggs")
    .to(eggsPositions, { duration: 1.3, stagger: 0.25, y: 8, ease: "elastic" })
    .to(eggGroup.position, 1.75, { y: 10, ease: "elastic.inOut" }, "eggs+=2.5")
    .to(eyeFront.position, 0.8, { y: 1.1, ease: "bounce" }, "eggs+=3.6")
    .to(eyesPositions, { duration: 0.8, stagger: 0.15, y: 1.1, ease: "bounce" })
  ;
  
  masterTL.play();
  masterTL.reversed( true );
    
  return masterTL;
  
}

function toggleAnimation() {
  
  masterTL.reversed( !masterTL.reversed() );
  
}

window.addEventListener("load", function () {

  setTimeout(showButton, 200);
  
}, false);

function showButton() {
  
  let showTL = gsap.timeline();
  
  showTL
    .add("show")
    .to(button, { duration: 0.25, autoAlpha: 1, ease: "sine" }, "show")
    .to(button, { duration: 0.25, y: -1.25, ease: "elastic" }, "show")
  ;

}