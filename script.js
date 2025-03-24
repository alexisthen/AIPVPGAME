function createSimplePlayer(scene) {
  // Body (Capsule)
  const body = BABYLON.MeshBuilder.CreateCapsule("body", {
    height: 3,
    radius: 1,
    subdivisions: 16,
  }, scene);
  body.material = new BABYLON.StandardMaterial("bodyMat", scene);
  body.material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red

  // Head (Sphere)
  const head = BABYLON.MeshBuilder.CreateSphere("head", { diameter: 1.5 }, scene);
  head.position.y = 2.5; // Position above the body
  head.parent = body; // Make the head a child of the body
  head.material = body.material; // Use the same material as the body

  // Eyes (Spheres)
  const eyeSize = 0.2;
  const eyeOffset = 0.5;
  const leftEye = BABYLON.MeshBuilder.CreateSphere("leftEye", { diameter: eyeSize }, scene);
  leftEye.position.set(eyeOffset, 2.7, eyeOffset); // Position on head
  leftEye.parent = head;
  leftEye.material = new BABYLON.StandardMaterial("eyeMat", scene);
  leftEye.material.diffuseColor = new BABYLON.Color3(0, 0, 0); // Black

  const rightEye = BABYLON.MeshBuilder.CreateSphere("rightEye", { diameter: eyeSize }, scene);
  rightEye.position.set(-eyeOffset, 2.7, eyeOffset); // Position on head
  rightEye.parent = head;
  rightEye.material = leftEye.material; // Use same material as left eye

  // Legs (Cylinders)
  const legHeight = 1.5;
  const legRadius = 0.4;
  const leftLeg = BABYLON.MeshBuilder.CreateCylinder("leftLeg", { height: legHeight, diameter: legRadius * 2 }, scene);
  leftLeg.position.set(0.5, 0.75, 0);
  leftLeg.parent = body;
  leftLeg.material = body.material;
  leftLeg.rotation.x = Math.PI / 2;

  const rightLeg = BABYLON.MeshBuilder.CreateCylinder("rightLeg", { height: legHeight, diameter: legRadius * 2 }, scene);
  rightLeg.position.set(-0.5, 0.75, 0);
  rightLeg.parent = body;
  rightLeg.material = body.material;
  rightLeg.rotation.x = Math.PI / 2;

  // Arms (Cylinders)
  const armHeight = 1.2;
  const armRadius = 0.3;
  const leftArm = BABYLON.MeshBuilder.CreateCylinder("leftArm", { height: armHeight, diameter: armRadius * 2 }, scene);
  leftArm.position.set(1.5, 2.5, 0); // Position on the body
  leftArm.parent = body;
  leftArm.material = body.material;
  leftArm.rotation.x = Math.PI / 2;

  const rightArm = BABYLON.MeshBuilder.CreateCylinder("rightArm", { height: armHeight, diameter: armRadius * 2 }, scene);
  rightArm.position.set(-1.5, 2.5, 0); // Position on the body
  rightArm.parent = body;
  rightArm.material = body.material;
  rightArm.rotation.x = Math.PI / 2;

  return body; // Return the body mesh as the main player object
}


// ... (In your main Babylon.js scene setup) ...
const player = createSimplePlayer(scene);
