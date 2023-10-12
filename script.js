import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import StorkMesh from './animals/stork';

// Sizes
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('lightskyblue');

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 6;
camera.position.y = 2;
scene.add(camera);

// Renderer
const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

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

// Ground
const geometry = new THREE.BoxGeometry( 3, 0.2, 3 );
const material = new THREE.MeshBasicMaterial( { color: 'limegreen' } );
const ground = new THREE.Mesh( geometry, material );
scene.add( ground );

// Add animals
StorkMesh.position.y = 1.2;
scene.add(StorkMesh);

// Clock
const clock = new THREE.Clock();

// Render scene
function animate() {
  const elapsedTime = clock.getElapsedTime();

  StorkMesh.position.y += Math.sin(elapsedTime) * 0.01;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();