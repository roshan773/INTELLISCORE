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
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Futuristic 3D Geometric Objects (Wireframe Polyhedra)
    // Main Icosahedron Core
    const icoGeometry = new THREE.IcosahedronGeometry(7, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x769440,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(12, -2, -5);
    scene.add(icosahedron);

    // Torus Knot Accent Structure
    const torusGeometry = new THREE.TorusKnotGeometry(4.5, 1.2, 100, 16);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xfffdd0,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(-14, -15, -8);
    scene.add(torusKnot);

    // Cyber Octahedron Satellite
    const octaGeometry = new THREE.OctahedronGeometry(5, 1);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x96b857,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(10, -32, -4);
    scene.add(octahedron);

    // 3. Cyber Quantum Particle Cloud
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const creamColor = new THREE.Color(0xfffdd0);
    const oliveColor = new THREE.Color(0x769440);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spread particles across a wide 3D cylindrical space
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 160;
      positions[i + 2] = (Math.random() - 0.5) * 60;

      const mixedColor = Math.random() > 0.5 ? creamColor : oliveColor;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Dynamic Scroll & Mouse State Tracking
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

    // 5. Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 6. Smooth Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp for Scroll & Mouse
      scrollY += (targetScrollY - scrollY) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const totalDocHeight = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const scrollProgress = scrollY / totalDocHeight;

      // Scroll-Driven Camera Motion (Z-depth & Y-traverse)
      camera.position.y = -scrollProgress * 45 + mouseY * 2;
      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 5 + mouseX * 2;
      camera.rotation.y = mouseX * 0.15;
      camera.rotation.x = -mouseY * 0.15;

      // Rotate & Morph 3D Geometries on Scroll + Time
      icosahedron.rotation.x = elapsedTime * 0.15 + scrollProgress * 4;
      icosahedron.rotation.y = elapsedTime * 0.2 + scrollProgress * 5;
      icosahedron.position.x = 12 + Math.sin(scrollProgress * Math.PI * 3) * 6;

      torusKnot.rotation.x = elapsedTime * 0.25 + scrollProgress * 6;
      torusKnot.rotation.y = elapsedTime * 0.18 + scrollProgress * 4;
      torusKnot.position.x = -14 + Math.cos(scrollProgress * Math.PI * 2) * 8;

      octahedron.rotation.x = elapsedTime * 0.2 + scrollProgress * 5;
      octahedron.rotation.z = elapsedTime * 0.15 + scrollProgress * 3;

      // Subtle Particle Drift & Expansion
      particleSystem.rotation.y = elapsedTime * 0.03 + scrollProgress * 1.5;
      particleSystem.rotation.x = scrollProgress * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
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
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-80"
      style={{ willChange: "transform" }}
    />
  );
}
