/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / https://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

THREE.OrbitControls = function (object, domElement) {

  this.object = object;

  this.domElement = domElement !== undefined ? domElement : document;

  // Set to false to disable this control
  this.enabled = true;

  // "target" sets the location of focus, where the object orbits around
  this.target = new THREE.Vector3();

  // How far you can dolly in and out ( PerspectiveCamera only )
  this.minDistance = 0;
  this.maxDistance = Infinity;

  // How far you can zoom in and out ( OrthographicCamera only )
  this.minZoom = 0;
  this.maxZoom = Infinity;

  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  this.minPolarAngle = 0; // radians
  this.maxPolarAngle = Math.PI; // radians

  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  this.minAzimuthAngle = -Infinity; // radians
  this.maxAzimuthAngle = Infinity; // radians

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  this.enableDamping = false;
  this.dampingFactor = 0.25;

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  this.enableZoom = true;
  this.zoomSpeed = 1.0;

  // Set to false to disable rotating
  this.enableRotate = true;
  this.rotateSpeed = 1.0;

  // Set to false to disable panning
  this.enablePan = true;
  this.keyPanSpeed = 7.0; // pixels moved per arrow key push

  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

  // Set to false to disable use of the keys
  this.enableKeys = true;

  // The four arrow keys
  this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

  // Mouse buttons
  this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

  // for reset
  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom;

  //
  // public methods
  //

  this.getPolarAngle = function () {

    return spherical.phi;

  };

  this.getAzimuthalAngle = function () {

    return spherical.theta;

  };

  this.reset = function () {

    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;

    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);

    scope.update();

    state = STATE.NONE;

  };

  // this method is exposed, but perhaps it would be better if we can make it private...
  this.update = function () {

    var offset = new THREE.Vector3();

    // so camera.up is the orbit axis
    var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
    var quatInverse = quat.clone().inverse();

    var lastPosition = new THREE.Vector3();
    var lastQuaternion = new THREE.Quaternion();

    return function update() {

      var position = scope.object.position;

      offset.copy(position).sub(scope.target);

      // rotate offset to "y-axis-is-up" space
      offset.applyQuaternion(quat);

      // angle from z-axis around y-axis
      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {

        rotateLeft(getAutoRotationAngle());

      }

      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi;

      // restrict theta to be between desired limits
      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

      // restrict phi to be between desired limits
      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

      spherical.makeSafe();


      spherical.radius *= scale;

      // restrict radius to be between desired limits
      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

      // move target to panned location
      scope.target.add(panOffset);

      offset.setFromSpherical(spherical);

      // rotate offset back to "camera-up-vector-is-up" space
      offset.applyQuaternion(quatInverse);

      position.copy(scope.target).add(offset);

      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {

        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;

      } else {

        sphericalDelta.set(0, 0, 0);

      }

      scale = 1;
      panOffset.set(0, 0, 0);

      // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged ||
      lastPosition.distanceToSquared(scope.object.position) > EPS ||
      8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

        scope.dispatchEvent(changeEvent);

        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;

        return true;

      }

      return false;

    };

  }();

  this.dispose = function () {

    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);

    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);

    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);

    window.removeEventListener('keydown', onKeyDown, false);

    //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

  };

  //
  // internals
  //

  var scope = this;

  var changeEvent = { type: 'change' };
  var startEvent = { type: 'start' };
  var endEvent = { type: 'end' };

  var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

  var state = STATE.NONE;

  var EPS = 0.000001;

  // current position in spherical coordinates
  var spherical = new THREE.Spherical();
  var sphericalDelta = new THREE.Spherical();

  var scale = 1;
  var panOffset = new THREE.Vector3();
  var zoomChanged = false;

  var rotateStart = new THREE.Vector2();
  var rotateEnd = new THREE.Vector2();
  var rotateDelta = new THREE.Vector2();

  var panStart = new THREE.Vector2();
  var panEnd = new THREE.Vector2();
  var panDelta = new THREE.Vector2();

  var dollyStart = new THREE.Vector2();
  var dollyEnd = new THREE.Vector2();
  var dollyDelta = new THREE.Vector2();

  function getAutoRotationAngle() {

    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

  }

  function getZoomScale() {

    return Math.pow(0.95, scope.zoomSpeed);

  }

  function rotateLeft(angle) {

    sphericalDelta.theta -= angle;

  }

  function rotateUp(angle) {

    sphericalDelta.phi -= angle;

  }

  var panLeft = function () {

    var v = new THREE.Vector3();

    return function panLeft(distance, objectMatrix) {

      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
      v.multiplyScalar(-distance);

      panOffset.add(v);

    };

  }();

  var panUp = function () {

    var v = new THREE.Vector3();

    return function panUp(distance, objectMatrix) {

      v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
      v.multiplyScalar(distance);

      panOffset.add(v);

    };

  }();

  // deltaX and deltaY are in pixels; right and down are positive
  var pan = function () {

    var offset = new THREE.Vector3();

    return function pan(deltaX, deltaY) {

      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (scope.object instanceof THREE.PerspectiveCamera) {

        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length();

        // half of the fov is center to top of screen
        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

        // we actually don't use screenWidth, since perspective camera is fixed to screen height
        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);

      } else if (scope.object instanceof THREE.OrthographicCamera) {

        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);

      } else {

        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;

      }

    };

  }();

  function dollyIn(dollyScale) {

    if (scope.object instanceof THREE.PerspectiveCamera) {

      scale /= dollyScale;

    } else if (scope.object instanceof THREE.OrthographicCamera) {

      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;

    } else {

      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;

    }

  }

  function dollyOut(dollyScale) {

    if (scope.object instanceof THREE.PerspectiveCamera) {

      scale *= dollyScale;

    } else if (scope.object instanceof THREE.OrthographicCamera) {

      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;

    } else {

      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;

    }

  }

  //
  // event callbacks - update the object state
  //

  function handleMouseDownRotate(event) {

    //console.log( 'handleMouseDownRotate' );

    rotateStart.set(event.clientX, event.clientY);

  }

  function handleMouseDownDolly(event) {

    //console.log( 'handleMouseDownDolly' );

    dollyStart.set(event.clientX, event.clientY);

  }

  function handleMouseDownPan(event) {

    //console.log( 'handleMouseDownPan' );

    panStart.set(event.clientX, event.clientY);

  }

  function handleMouseMoveRotate(event) {

    //console.log( 'handleMouseMoveRotate' );

    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart);

    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

    // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

    // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

    rotateStart.copy(rotateEnd);

    scope.update();

  }

  function handleMouseMoveDolly(event) {

    //console.log( 'handleMouseMoveDolly' );

    dollyEnd.set(event.clientX, event.clientY);

    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {

      dollyIn(getZoomScale());

    } else if (dollyDelta.y < 0) {

      dollyOut(getZoomScale());

    }

    dollyStart.copy(dollyEnd);

    scope.update();

  }

  function handleMouseMovePan(event) {

    //console.log( 'handleMouseMovePan' );

    panEnd.set(event.clientX, event.clientY);

    panDelta.subVectors(panEnd, panStart);

    pan(panDelta.x, panDelta.y);

    panStart.copy(panEnd);

    scope.update();

  }

  function handleMouseUp(event) {

    // console.log( 'handleMouseUp' );

  }

  function handleMouseWheel(event) {

    // console.log( 'handleMouseWheel' );

    if (event.deltaY < 0) {

      dollyOut(getZoomScale());

    } else if (event.deltaY > 0) {

      dollyIn(getZoomScale());

    }

    scope.update();

  }

  function handleKeyDown(event) {

    //console.log( 'handleKeyDown' );

    switch (event.keyCode) {

      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        scope.update();
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        scope.update();
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        scope.update();
        break;}



  }

  function handleTouchStartRotate(event) {

    //console.log( 'handleTouchStartRotate' );

    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);

  }

  function handleTouchStartDolly(event) {

    //console.log( 'handleTouchStartDolly' );

    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    dollyStart.set(0, distance);

  }

  function handleTouchStartPan(event) {

    //console.log( 'handleTouchStartPan' );

    panStart.set(event.touches[0].pageX, event.touches[0].pageY);

  }

  function handleTouchMoveRotate(event) {

    //console.log( 'handleTouchMoveRotate' );

    rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    rotateDelta.subVectors(rotateEnd, rotateStart);

    var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

    // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

    // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

    rotateStart.copy(rotateEnd);

    scope.update();

  }

  function handleTouchMoveDolly(event) {

    //console.log( 'handleTouchMoveDolly' );

    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;

    var distance = Math.sqrt(dx * dx + dy * dy);

    dollyEnd.set(0, distance);

    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {

      dollyOut(getZoomScale());

    } else if (dollyDelta.y < 0) {

      dollyIn(getZoomScale());

    }

    dollyStart.copy(dollyEnd);

    scope.update();

  }

  function handleTouchMovePan(event) {

    //console.log( 'handleTouchMovePan' );

    panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

    panDelta.subVectors(panEnd, panStart);

    pan(panDelta.x, panDelta.y);

    panStart.copy(panEnd);

    scope.update();

  }

  function handleTouchEnd(event) {

    //console.log( 'handleTouchEnd' );

  }

  //
  // event handlers - FSM: listen for events and reset state
  //

  function onMouseDown(event) {

    if (scope.enabled === false) return;

    event.preventDefault();

    if (event.button === scope.mouseButtons.ORBIT) {

      if (scope.enableRotate === false) return;

      handleMouseDownRotate(event);

      state = STATE.ROTATE;

    } else if (event.button === scope.mouseButtons.ZOOM) {

      if (scope.enableZoom === false) return;

      handleMouseDownDolly(event);

      state = STATE.DOLLY;

    } else if (event.button === scope.mouseButtons.PAN) {

      if (scope.enablePan === false) return;

      handleMouseDownPan(event);

      state = STATE.PAN;

    }

    if (state !== STATE.NONE) {

      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);

      scope.dispatchEvent(startEvent);

    }

  }

  function onMouseMove(event) {

    if (scope.enabled === false) return;

    event.preventDefault();

    if (state === STATE.ROTATE) {

      if (scope.enableRotate === false) return;

      handleMouseMoveRotate(event);

    } else if (state === STATE.DOLLY) {

      if (scope.enableZoom === false) return;

      handleMouseMoveDolly(event);

    } else if (state === STATE.PAN) {

      if (scope.enablePan === false) return;

      handleMouseMovePan(event);

    }

  }

  function onMouseUp(event) {

    if (scope.enabled === false) return;

    handleMouseUp(event);

    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);

    scope.dispatchEvent(endEvent);

    state = STATE.NONE;

  }

  function onMouseWheel(event) {

    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

    event.preventDefault();
    event.stopPropagation();

    handleMouseWheel(event);

    scope.dispatchEvent(startEvent); // not sure why these are here...
    scope.dispatchEvent(endEvent);

  }

  function onKeyDown(event) {

    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

    handleKeyDown(event);

  }

  function onTouchStart(event) {

    if (scope.enabled === false) return;

    switch (event.touches.length) {

      case 1: // one-fingered touch: rotate

        if (scope.enableRotate === false) return;

        handleTouchStartRotate(event);

        state = STATE.TOUCH_ROTATE;

        break;

      case 2: // two-fingered touch: dolly

        if (scope.enableZoom === false) return;

        handleTouchStartDolly(event);

        state = STATE.TOUCH_DOLLY;

        break;

      case 3: // three-fingered touch: pan

        if (scope.enablePan === false) return;

        handleTouchStartPan(event);

        state = STATE.TOUCH_PAN;

        break;

      default:

        state = STATE.NONE;}



    if (state !== STATE.NONE) {

      scope.dispatchEvent(startEvent);

    }

  }

  function onTouchMove(event) {

    if (scope.enabled === false) return;

    event.preventDefault();
    event.stopPropagation();

    switch (event.touches.length) {

      case 1: // one-fingered touch: rotate

        if (scope.enableRotate === false) return;
        if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

        handleTouchMoveRotate(event);

        break;

      case 2: // two-fingered touch: dolly

        if (scope.enableZoom === false) return;
        if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

        handleTouchMoveDolly(event);

        break;

      case 3: // three-fingered touch: pan

        if (scope.enablePan === false) return;
        if (state !== STATE.TOUCH_PAN) return; // is this needed?...

        handleTouchMovePan(event);

        break;

      default:

        state = STATE.NONE;}



  }

  function onTouchEnd(event) {

    if (scope.enabled === false) return;

    handleTouchEnd(event);

    scope.dispatchEvent(endEvent);

    state = STATE.NONE;

  }

  function onContextMenu(event) {

    event.preventDefault();

  }

  //

  scope.domElement.addEventListener('contextmenu', onContextMenu, false);

  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);

  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);

  window.addEventListener('keydown', onKeyDown, false);

  // force an update at start

  this.update();

};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties(THREE.OrbitControls.prototype, {

  center: {

    get: function () {

      console.warn('THREE.OrbitControls: .center has been renamed to .target');
      return this.target;

    } },



  // backward compatibility

  noZoom: {

    get: function () {

      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;

    } },



  noRotate: {

    get: function () {

      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;

    } },



  noPan: {

    get: function () {

      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;

    } },



  noKeys: {

    get: function () {

      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;

    } },



  staticMoving: {

    get: function () {

      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;

    } },



  dynamicDampingFactor: {

    get: function () {

      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;

    },

    set: function (value) {

      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;

    } } });




// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
// Created by L.Zampetti (C) 2017 

let scene,camera,controls,fov,ratio,near,far,shadow,back,light,renderer,
container,particles,width,height,w2,h2,mouse = { x: 0, y: 0 };

let params = function GalaxyParameters() {
  function GalaxyParameters() {
    this.arms = 2,
    this.stops = 5000,
    this.revolutions = 1.7,
    this.radius = 400,
    this.sparse = 0.4,
    this.dispersion = 0.6, // more 0 - less 1
    this.bulge = 0.6,
    this.vortex = 0.0,
    this.randomize = function () {
      // console.log('gui', gui);
      for (let i = 0; i < gui.__controllers.length; i++) {
        let c = gui.__controllers[i];
        if (c.__min) {
          let value = c.__min + (c.__max - c.__min) * Math.random();
          // console.log(value, c);
          this[c.property] = value;
          c.updateDisplay();
        }
      }
      onChange(this);
    },
    this.exportPCD = function () {
      let geometry = particles.geometry;
      let results = PCDExporter(geometry.vertices);
      downloadFile(results, 'galaxy.pcd');
    },
    this.exportXYZ = function () {
      let geometry = particles.geometry;
      let results = XYZExporter(geometry.vertices);
      downloadFile(results, 'galaxy.xyz');
    };
    this.exportPLY = function () {
      let geometry = particles.geometry;
      let results = PLYExporter(geometry.vertices);
      downloadFile(results, 'galaxy.ply');
    },
    this.exportOBJ = function () {
      let exporter = new THREE.OBJExporter();
      let results = exporter.parse(scene);
      downloadFile(results, 'galaxy.obj');
    },
    this.exportSTL = function () {
      let exporter = new THREE.STLExporter(); // new THREE.OBJExporter();
      let results = exporter.parse(scene);
      downloadFile(results, 'galaxy.stl');
    };
    this.armTheta = function () {
      return Math.PI * 2 / this.arms;
    };
    this.modulus = function () {
      return Math.pow(2, 31);
    };
  }
  return new GalaxyParameters();
}();

function createLights() {
  light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);
  shadow = new THREE.DirectionalLight(0xffffff, .8);
  shadow.position.set(200, 200, 200);
  shadow.castShadow = true;
  // shadow.shadowDarkness = .2;
  back = new THREE.DirectionalLight(0xffffff, .4);
  back.position.set(-100, 200, 50);
  // back.shadowDarkness = .2;
  back.castShadow = true;
  scene.add(light);
  scene.add(shadow);
  scene.add(back);
}
function createScene() {
  width = window.innerWidth;
  height = window.innerHeight;
  ratio = width / height;
  w2 = width / 2;
  h2 = height / 2;
  fov = 60;
  near = 1;
  far = 20000;
  scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(0x363d3d, -1, 3000 );
  camera = new THREE.PerspectiveCamera(fov, ratio, near, far);
  camera.position.z = 100;
  camera.position.y = -300;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true });

  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  container = document.getElementById('scene');
  container.appendChild(renderer.domElement);
  addListeners();
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}
function addListeners() {
  function handleMouseMove(event) {
    mouse = { x: event.clientX, y: event.clientY };
  }
  function handleMouseDown(event) {
    //
  }
  function handleMouseUp(event) {
    //
  }
  function handleTouchStart(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
      mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
    }
  }
  function handleTouchEnd(event) {
    mousePos = { x: windowHalfX, y: windowHalfY };
  }
  function handleTouchMove(event) {
    if (event.touches.length == 1) {
      event.preventDefault();
      mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
    }
  }
  function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    w2 = width / 2;
    h2 = height / 2;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mouseup', handleMouseUp, false);
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  document.addEventListener('touchmove', handleTouchMove, false);
}
let tick = 0;
let axis = new THREE.Vector3(0, 0, 1);
function vortex() {
  if (tick % 2 === 0 && params && params.vortex !== 0) {
    for (let i = 0; i < particles.geometry.vertices.length; i++) {
      let vertex = particles.geometry.vertices[i];
      let angle = -Math.PI / 180;
      if (params.vortex > 0) {
        angle *= (1 - vertex.length() / params.radius) * params.vortex;
      } else {
        angle *= vertex.length() / params.radius * Math.abs(params.vortex);
      }
      vertex.applyAxisAngle(axis, angle);
    }
    particles.geometry.verticesNeedUpdate = true;
  }
  tick++;
}
function loop(time) {
  vortex();
  particles.rotation.z -= 0.0025;
  render();
  requestAnimationFrame(loop);
}
function render() {
  if (controls) {
    controls.update();
  }
  renderer.render(scene, camera);
}
function sprite() {
  let canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  let ctx = canvas.getContext('2d');
  let gradient = ctx.createRadialGradient(
  canvas.width / 2,
  canvas.height / 2,
  0,
  canvas.width / 2,
  canvas.height / 2,
  canvas.width / 2);

  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(240,255,240,1)');
  gradient.addColorStop(0.22, 'rgba(0,150,255,.2)');
  gradient.addColorStop(1, 'rgba(0,50,255,0)');
  ctx.fillStyle = gradient; // "#FFFFFF"; // gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
}
function bufferGeometry() {
  var geometry = new THREE.BufferGeometry();
  // create a simple square shape. We duplicate the top left and bottom right
  // vertices because each vertex needs to appear once per triangle.
  var vertices = new Float32Array([
  -1.0, -1.0, 1.0,
  1.0, -1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  -1.0, 1.0, 1.0,
  -1.0, -1.0, 1.0]);

  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
}
function createObjects() {
  let texture = new THREE.CanvasTexture(sprite());
  let geometry = new THREE.Geometry();
  let material = new THREE.PointsMaterial({
    size: 8,
    map: texture,
    vertexColors: THREE.VertexColors,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

createScene();
createObjects();
// createLights();
loop();

let GPoint = function () {
  var unit = {
    x: 0.09,
    y: 0.09,
    z: 0.3 };

  function GPoint(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  GPoint.prototype = {
    randomize: function () {
      this.x = Math.random() * 1000;
      this.y = Math.random() * 1000;
      this.z = Math.random() * 1000;
      return this;
    },
    toGrid: function () {
      this.x = Math.round(this.x / unit.x) * unit.x;
      this.y = Math.round(this.y / unit.y) * unit.y;
      this.z = Math.round(this.z / unit.z) * unit.z;
      return this;
    },
    toFixed: function () {
      this.x = +this.x.toFixed(2);
      this.y = +this.y.toFixed(2);
      this.z = +this.z.toFixed(2);
      return this;
    } };

  GPoint.grid = function (points) {
    for (var i = 0; i < points.length; i++) {
      points[i].toGrid().toFixed();
    }
    GPoint.sort(points);
  };
  GPoint.sort = function (points) {
    points.sort(function (a, b) {
      if (a.z === b.z) {
        if (a.x === b.x) {
          if (a.y === b.y) {
            return 0;
          } else {
            return a.y > b.y ? 1 : -1;
          }
        } else {
          return a.x > b.x ? 1 : -1;
        }
      } else {
        return a.z > b.z ? 1 : -1;
      }
    });
  };
  return GPoint;
}();
function spiral(params) {
  function lcg(value, modulus = Math.pow(2, 31), multiplier = 1103515245, increment = 12345) {
    return (value * multiplier + increment) % modulus;
  }
  return {
    toArray: function (now = 0) {
      const time = now / -60000,
      modulus = params.modulus(),
      theta = params.armTheta();
      let points = [];
      let value = 0;
      for (let arm = 0; arm < params.arms; arm++) {
        for (let stop = 0; stop < params.stops; stop++) {
          value = lcg(value, modulus);
          const pow = stop / params.stops,
          c = 1 - pow + 1 - params.dispersion,
          r = value / modulus,
          cr = (r - .5) * 2,
          angle = pow * Math.PI * 2 * params.revolutions + theta * arm,
          radians = time + angle + Math.PI * c * cr * params.sparse,
          distance = Math.sqrt(pow) * params.radius,
          x = Math.cos(radians) * distance,
          y = Math.sin(radians) * distance,
          z = 0,
          size = (r - .5) * 2 + Math.pow(1.125, (1 - pow) * 8),
          alpha = (Math.sin((r + time + pow) * Math.PI * 2) + 1) * 0.5;
          points.push({
            x: x, y: y, z: z,
            size: size, alpha: alpha });

        }
      }
      return points;
    } };

}
function onChange(params) {
  /*
  var points = [
    new GPoint().randomize(),
    new GPoint().randomize(),
    new GPoint().randomize(),
    new GPoint().randomize(),
    new GPoint().randomize(),
  ];
  GPoint.grid(points);
  */
  // alert('onChange', data);
  let dx = 10 - 10 * params.dispersion * (1 - params.bulge);
  let dy = 10 - 10 * params.dispersion * (1 - params.bulge);
  let dz = 40 - 40 * params.dispersion * (1 - params.bulge);
  // let geometry = particles.geometry;
  let geometry = new THREE.Geometry();
  // geometry.vertices.splice(0, geometry.vertices.length);
  let points = spiral(params).toArray();
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let distance = Math.pow(Math.pow(point.x, 2) + Math.pow(point.y, 2), 0.5);
    let pow = Math.max(0, (params.radius * .8 - distance) / (params.radius * .8));
    pow = (1 - Math.cos(pow * Math.PI)) * params.bulge;
    // console.log(distance);
    let vertex = new THREE.Vector3();
    vertex.x = point.x;
    vertex.y = point.y;
    vertex.z = (-dz + dz * 2 * Math.random()) * pow; // (Math.random() * 180 - 90) * (pow * pow * pow);
    geometry.vertices.push(vertex);
    geometry.colors.push(new THREE.Color(pow, pow, 1));
    let t = Math.round(pow * 5),n = 0;
    while (n < t) {
      let vertex = new THREE.Vector3();
      vertex.x = point.x - dx + Math.random() * (dx * 2);
      vertex.y = point.y - dy + Math.random() * (dy * 2);
      vertex.z = (-dz + dz * 2 * Math.random()) * pow;
      geometry.vertices.push(vertex);
      geometry.colors.push(new THREE.Color(pow, pow, 1));
      n++;
    }
  }
  geometry.mergeVertices();
  geometry.verticesNeedUpdate = true;
  particles.geometry = geometry;
}

let gui = function datgui() {
  let gui = new dat.GUI();
  gui.closed = true;
  gui.add(params, 'arms', 1, 10).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'stops', 1000, 10000).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'revolutions', 1.1, 3.1).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'radius', 300, 1000).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'sparse', 0.1, 1).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'dispersion', 0.01, 1).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'bulge', 0.01, 1).onChange(function (newValue) {
    onChange(params);
  });
  gui.add(params, 'vortex', -1, 1, 0.01).onChange(function (newValue) {
    onChange(params);
  });
  // gui.add(text, 'displayOutline');
  gui.add(params, 'randomize');
  gui.add(params, 'exportXYZ').name('EXPORT *.XYZ');
  return gui;
}();

onChange(params);

let downloadFile = function () {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (data, fileName, json) {
    data = json ? JSON.stringify(data) : data;
    let blob = new Blob([data], { type: "octet/stream" }),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
}();
function string2ArrayBuffer(string, callback) {
  let blob = new Blob([string]);
  var fr = new FileReader();
  fr.onload = function (e) {
    callback(e.target.result);
  };
  fr.readAsArrayBuffer(blob);
}
function PCDExporter(vertices) {
  let data = '# .PCD v.7 - Point Cloud Data file format' + '\r\n';
  data += 'VERSION .7' + '\r\n';
  data += 'FIELDS x y z rgb' + '\r\n';
  data += 'SIZE 4 4 4 4' + '\r\n';
  data += 'TYPE F F F F' + '\r\n';
  data += 'COUNT 1 1 1 1' + '\r\n';
  data += 'WIDTH ' + vertices.length + '\r\n';
  data += 'HEIGHT 1' + '\r\n';
  data += 'VIEWPOINT 0 0 0 1 0 0 0' + '\r\n';
  data += 'POINTS ' + vertices.length + '\r\n';
  data += 'DATA ascii' + '\r\n';
  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    let x = v.x.toFixed(5);
    let y = v.y.toFixed(5);
    let z = v.z.toFixed(5);
    data += x + ' ' + y + ' ' + z + ' 4.2108e+06';
    if (i < vertices.length - 1) {
      data += '\r\n';
    }
  }
  /*
  console.log('data', data);
  var loader = new THREE.PCDLoader();
  string2ArrayBuffer(data, function(arrayBuffer) {
    var check = loader.parse(arrayBuffer);
    console.log('check', check);
  });
  */
  return data;
}
// https://cdn.rawgit.com/mikolalysenko/write-ply/master/write-ply.js
function PLYExporter(vertices) {
  let model = {
    vertex: {
      x: [],
      y: [],
      z: [] },

    face: {
      vertex_index: [] } };


  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    model.vertex.x.push(v.x);
    model.vertex.y.push(v.y);
    model.vertex.z.push(v.z);
  }
  let data = writePLY(model);
  return data;
}
function XYZExporter(vertices) {
  let data = '';
  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    let x = v.x.toFixed(6);
    let y = v.y.toFixed(6);
    let z = v.z.toFixed(6);
    data += x + ' ' + y + ' ' + z + '\r\n';
  }
  return data;
}