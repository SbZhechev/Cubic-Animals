import * as THREE from'three';

const stork = new THREE.Group();
stork.position.set(0, 0, 0);

const bodySize = 1;
const bodyGeometry = new THREE.BoxGeometry(bodySize, bodySize, bodySize);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 'linen' });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
stork.add(body);

const beakBaseRadius = 0.1;
const beakHeight = 0.7;
const beakSegments = 15;
const beakGeometry = new THREE.ConeGeometry(beakBaseRadius, beakHeight, beakSegments);
const beakMaterial = new THREE.MeshBasicMaterial({ color: 'red'});
const beak = new THREE.Mesh(beakGeometry, beakMaterial);
beak.position.z = beakHeight;
beak.rotation.x = Math.PI / 2;
stork.add(beak);

const eyeRadius = 0.15;
const eyeGeometry = new THREE.CircleGeometry(eyeRadius);
const eyeMaterial = new THREE.MeshBasicMaterial({ color: 'white' });

const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye.position.z = (bodySize / 2) + 0.01;
rightEye.position.x = -eyeRadius;
rightEye.position.y = eyeRadius;
stork.add(rightEye);

const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye.position.z = (bodySize / 2) + 0.01;
leftEye.position.x = eyeRadius;
leftEye.position.y = eyeRadius;
stork.add(leftEye);

const irisRadius = 0.05;
const irisGeometry = new THREE.CircleGeometry(irisRadius);
const irisMaterial = new THREE.MeshBasicMaterial({ color: 'black' });

const rightIris = new THREE.Mesh(irisGeometry, irisMaterial);
rightIris.position.copy(rightEye.position);
rightIris.position.z += 0.01;
stork.add(rightIris);

const leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
leftIris.position.copy(leftEye.position);
leftIris.position.z += 0.01;
stork.add(leftIris);

const wingsWidth = 0.7;
const wingsHeight = 0.1;
const wingsDepth = 0.7;
const wingsGeometry = new THREE.BoxGeometry(wingsWidth, wingsHeight, wingsDepth);
const wingsMaterial = new THREE.MeshBasicMaterial({ color: 'black' });

const rightWing = new THREE.Mesh(wingsGeometry, wingsMaterial);
rightWing.position.x = (bodySize / 2) + (wingsHeight / 2);
rightWing.position.y -= wingsWidth / 4;
rightWing.rotation.z = Math.PI / 2;
rightWing.rotation.z = -(Math.PI / 4);
stork.add(rightWing);

const leftWing = new THREE.Mesh(wingsGeometry, wingsMaterial);
leftWing.position.x = -(bodySize / 2) - (wingsHeight / 2);
leftWing.position.y -= wingsWidth / 4;
leftWing.rotation.z = Math.PI / 4;
stork.add(leftWing);

const legWidth = 0.2;
const legHeight = 0.7;
const legDepth = 0.2;
const legGeometry = new THREE.BoxGeometry(legWidth, legHeight, legDepth);
const legMaterial = new THREE.MeshBasicMaterial({ color: 'red' });

const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
rightLeg.position.y = -(bodySize / 2) - (legHeight / 2) + (legWidth / 1.5);
rightLeg.position.x = legWidth;
rightLeg.position.z -= legHeight / 2;
rightLeg.rotation.x = Math.PI / 4;
stork.add(rightLeg);

const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
leftLeg.position.y = -(bodySize / 2) - (legHeight / 2) + (legWidth / 1.5);
leftLeg.position.x = -legWidth;
leftLeg.position.z -= legHeight / 2;
leftLeg.rotation.x = Math.PI / 4;
stork.add(leftLeg);

export { stork, leftWing, rightWing };