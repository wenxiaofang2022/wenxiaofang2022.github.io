const global = {
  scene: null,
  camera: null,
  renderer: null,
  loadManager: null,
  jsonLoader: null,
  jsonData: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/plus-skin.json',
  bodies: [],
  children: [] };


const config = {
  shape: null,
  radius: 6 };


const init = () => {
  initScene();
  initLight();
  initLoader();
  loadModel();
};

const initScene = () => {
  global.scene = new THREE.Scene();

  global.camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  1,
  1000);

  global.camera.position.set(150, 400, 400);
  global.camera.lookAt(global.scene.position);
  global.scene.add(global.camera);

  global.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    logarithmicDepthBuffer: true });

  global.renderer.shadowMap.enabled = true;
  global.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  global.renderer.setSize(window.innerWidth, window.innerHeight);

  document.querySelector("[data-stage]").appendChild(global.renderer.domElement);
};

const initLight = () => {
  const shadowLight = new THREE.SpotLight(0xffffff);
  shadowLight.intensity = 0.05;
  shadowLight.distance = 0;
  shadowLight.angle = Math.PI * 0.35;
  shadowLight.penumbra = 0.2;
  shadowLight.decay = 2.0;
  shadowLight.position.set(0, 200, -30);
  shadowLight.castShadow = true;
  shadowLight.shadow.mapSize.width = 1024;
  shadowLight.shadow.mapSize.height = 1024;
  shadowLight.shadow.camera.near = 0.5;
  shadowLight.shadow.camera.far = shadowLight.position.y * 1.02;
  global.scene.add(shadowLight);

  const sunLight = new THREE.PointLight(0xffffff, 1.4, 150, 2);
  sunLight.position.set(0, 70, 10);
  global.scene.add(sunLight);
  global.light = sunLight;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  global.scene.add(ambientLight);
};

const initLoader = () => {
  global.loadManager = new THREE.LoadingManager();
  global.jsonLoader = new THREE.JSONLoader(global.loadManager);
  global.loadManager.onLoad = function () {
    createMesh();
    createShape(createGround);
    animate();
  };

};

const loadModel = () => {
  global.jsonLoader.load(global.jsonData, function (geometry) {
    global.geometry = geometry;
  });
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const createShape = callback => {

  const dim = 100;
  const pos = [-3, 3];
  const radius = config.radius;

  const p = [
  new THREE.Vector2(-dim, dim),
  new THREE.Vector2(-dim, -dim),
  new THREE.Vector2(dim, -dim),
  new THREE.Vector2(dim, dim)];

  const shape = new THREE.Shape(p);
  shape.autoClose = true;

  for (let i = 0; i < pos.length; i++) {
    const hole = new THREE.Path();
    hole.moveTo(radius * pos[i], 0);
    hole.absarc(radius * pos[i], 0, radius, 0, Math.PI * 2, true);
    hole.autoClose = true;
    shape.holes.push(hole);
  }

  config.shape = shape;

  callback();
};

const createGround = () => {

  var materials = [
  // front
  new THREE.MeshStandardMaterial({
    color: 0x7821ec,
    roughness: 0.7,
    metalness: 0.0,
    shading: THREE.FlatShading }),

  // side
  new THREE.MeshStandardMaterial({
    color: 0x7821ec,
    roughness: 0.7,
    metalness: 0.1,
    shading: THREE.SmoothShading })];




  const props = {
    amount: 4,
    bevelEnabled: false };


  const geometry = new THREE.ExtrudeGeometry(
  config.shape,
  props);


  geometry.computeVertexNormals();

  for (var i = 0; i < geometry.faces.length; i++) {
    var face = geometry.faces[i];
    if (face.materialIndex == 1) {
      for (var j = 0; j < face.vertexNormals.length; j++) {
        face.vertexNormals[j].z = 0;
        face.vertexNormals[j].normalize();
      }
    }
  }


  const bufferGeometry = new THREE.BufferGeometry().fromGeometry(geometry);

  const mesh = new THREE.Mesh(geometry, materials);
  mesh.receiveShadow = true;
  mesh.rotation.set(Math.PI * 0.5, 0, 0);
  global.scene.add(mesh);
};

const createMesh = () => {

  const scale = 1.1;
  const num = 4;
  const colors = [
  0x47debd, 0xf7d514, 0xffffff, 0xf7d514, 0x47debd];


  for (let i = 0; i < colors.length; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: colors[i],
      roughness: 0.2,
      metalness: 0.2,
      side: THREE.DoubleSide,
      emissive: 0x353535 });

    const group = new THREE.Group();
    const mesh = new THREE.Mesh(
    global.geometry,
    material);

    mesh.scale.set(scale, scale, scale);
    mesh.position.set(0, -config.radius * 3, 0);
    mesh.castShadow = true;
    group.add(mesh);
    global.scene.add(group);
    global.bodies.push(group);
    global.children.push(mesh);
  }
};

const animate = () => {
  const time = 3;

  const subTl = new TimelineMax();

  for (let i = 0; i < global.bodies.length; i++) {
    subTl.to(global.bodies[i].rotation, time, {
      z: Math.PI * 2,
      ease: Power0.easeNone },
    `-=${time * 0.8}`);
    subTl.to(global.children[i].rotation, time, {
      y: -Math.PI * getRandomArbitrary(2.0, 4.0),
      ease: Power0.easeNone },
    `-=${time}`);
  }
  subTl.paused(true);

  const tl = new TimelineMax({
    repeat: -1,
    onUpdate: () => {
      render();
    } });


  tl.to(subTl, time, {
    progress: 1,
    ease: SlowMo.ease.config(0.1, 0.7, false) });

};

const render = () => {
  global.renderer.render(global.scene, global.camera);
};



// ------------------ events
window.addEventListener("resize", resizeHandler);

function resizeHandler() {
  global.renderer.setSize(window.innerWidth, window.innerHeight);
  global.camera.aspect = window.innerWidth / window.innerHeight;
  global.camera.updateProjectionMatrix();
}

// ------------------ fire
init();