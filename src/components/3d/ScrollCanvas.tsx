"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Futuristic 3D Geometric Objects (Glowing Wireframe Polyhedra)
    
    // Core Icosahedron (Top Right)
    const icoGeometry = new THREE.IcosahedronGeometry(8, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x96b857,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(14, 0, -4);
    scene.add(icosahedron);

    // Torus Knot Core (Mid Left)
    const torusGeometry = new THREE.TorusKnotGeometry(5, 1.3, 120, 16);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xfffdd0,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(-15, -18, -6);
    scene.add(torusKnot);

    // Octahedron Satellite (Lower Right)
    const octaGeometry = new THREE.OctahedronGeometry(6, 1);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x769440,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(12, -38, -4);
    scene.add(octahedron);

    // Outer Cyber Ring / Torus (Mid Depth)
    const ringGeometry = new THREE.TorusGeometry(12, 0.15, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xfffdd0,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const cyberRing = new THREE.Mesh(ringGeometry, ringMaterial);
    cyberRing.position.set(0, -10, -12);
    cyberRing.rotation.x = Math.PI / 3;
    scene.add(cyberRing);

    // 3. Cyber Quantum Particle Cloud (800+ dual-toned stars)
    const particleCount = 850;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const creamColor = new THREE.Color(0xfffdd0);
    const oliveColor = new THREE.Color(0x96b857);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 90;
      positions[i + 1] = (Math.random() - 0.5) * 180;
      positions[i + 2] = (Math.random() - 0.5) * 70;

      const mixedColor = Math.random() > 0.4 ? creamColor : oliveColor;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Scroll & Gyro Mouse Tracking
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 5. High-FPS Render Loop with Scroll Parallax
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      scrollY += (targetScrollY - scrollY) * 0.08;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const totalDocHeight = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const scrollProgress = scrollY / totalDocHeight;

      // Scroll-Driven Camera Motion
      camera.position.y = -scrollProgress * 50 + mouseY * 2;
      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 6 + mouseX * 2.5;
      camera.rotation.y = mouseX * 0.18;
      camera.rotation.x = -mouseY * 0.18;

      // 3D Wireframe Transformations
      icosahedron.rotation.x = elapsedTime * 0.2 + scrollProgress * 5;
      icosahedron.rotation.y = elapsedTime * 0.25 + scrollProgress * 6;
      icosahedron.position.x = 14 + Math.sin(scrollProgress * Math.PI * 3) * 7;

      torusKnot.rotation.x = elapsedTime * 0.28 + scrollProgress * 7;
      torusKnot.rotation.y = elapsedTime * 0.22 + scrollProgress * 5;
      torusKnot.position.x = -15 + Math.cos(scrollProgress * Math.PI * 2) * 8;

      octahedron.rotation.x = elapsedTime * 0.25 + scrollProgress * 6;
      octahedron.rotation.z = elapsedTime * 0.2 + scrollProgress * 4;

      cyberRing.rotation.z = elapsedTime * 0.1 + scrollProgress * 3;
      cyberRing.rotation.x = Math.PI / 3 + scrollProgress * 2;

      // Quantum Particle Cloud Motion
      particleSystem.rotation.y = elapsedTime * 0.04 + scrollProgress * 2;
      particleSystem.rotation.x = scrollProgress * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ willChange: "transform" }}
    />
  );
}
