// 'use client'; // This directive ensures the component is rendered on the client side

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader

// const ThreeAvatar = () => {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         // Set up scene, camera, and renderer
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ alpha: true }); // Optional: Enable transparency
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);

//         // Add a light
//         const light = new THREE.PointLight(0xffffff, 1, 100);
//         light.position.set(10, 10, 10);
//         scene.add(light);

//         // Load the avatar model
//         const loader = new GLTFLoader();
//         loader.load('path/to/your/avatar.glb', (gltf) => {
//             const avatar = gltf.scene;
//             scene.add(avatar);
//             avatar.position.set(0, 0, 0); // Set the initial position
//         }, undefined, (error) => {
//             console.error('An error occurred loading the avatar model:', error);
//         });

//         // Set camera position
//         camera.position.z = 5;

//         // Animation loop
//         const animate = () => {
//             requestAnimationFrame(animate);
//             // Optional: Add any animation or interactions here
//             renderer.render(scene, camera);
//         };

//         animate();

//         // Cleanup on unmount
//         return () => {
//             mountRef.current.removeChild(renderer.domElement);
//             renderer.dispose();
//         };
//     }, []);

//     return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />; // Style to ensure full container
// };

// export default ThreeAvatar;
