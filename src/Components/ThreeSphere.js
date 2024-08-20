import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Créer la scène
    const scene = new THREE.Scene();

    // Créer une caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    camera.position.z = 5;

    // Créer un rendu avec un fond transparent
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Créer une géométrie de sphère
    const geometry = new THREE.SphereGeometry(2.7, 16, 16);

    // Créer un matériau en mode wireframe (fils de fer) et de couleur rouge
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    // Créer un mesh en combinant la géométrie et le matériau
    const sphere = new THREE.Mesh(geometry, material);

    // Ajouter la sphère à la scène
    scene.add(sphere);

    // Ajouter les contrôles d'orbite pour permettre la rotation manuelle de la sphère
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Inertie pour un mouvement plus fluide
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Permettre le zoom
    controls.rotateSpeed = 0.5; // Vitesse de rotation
    controls.minDistance = 3; // Limite minimale de zoom
    controls.maxDistance = 10; // Limite maximale de zoom

    // Fonction de rendu
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      controls.update(); // Mettre à jour les contrôles à chaque frame
      renderer.render(scene, camera);
    };
    animate();

    // Nettoyage lors du démontage du composant
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, []);

  return <div className='sphere' ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeSphere;

