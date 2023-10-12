import * as THREE from 'three';

// Sizes
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
camera.position.y = 2;
scene.add(camera);

// Renderer
const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize
window.addEventListener('resize', () => {
  // update sizes
  sizes.height = window.innerHeight;
  sizes.width = window.innerWidth;

  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.lookAt(cube.position);

// Render scene
function animate() {
  cube.rotation.y += 0.005;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();