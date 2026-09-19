"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface MonolithicRNCanvasProps {
  className?: string;
}

export const MonolithicRNCanvas: React.FC<MonolithicRNCanvasProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    // Check mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL context support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Group for monolithic geometry & lights
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 3. Procedural Monolithic RN Geometry
    // Scale normalized from 800x800 coordinate space down to ~3 units wide centered at origin
    const s = 0.0055;
    const ox = -400 * s;
    const oy = -400 * s;

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.38,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    };

    // Master Titanium Material
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8e0ea,
      metalness: 0.88,
      roughness: 0.22,
    });

    // Illuminated Core Material
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0052ff,
      emissive: 0x0052ff,
      emissiveIntensity: 2.4,
      metalness: 0.5,
      roughness: 0.1,
    });

    const coreMeshGroup = new THREE.Group();

    // 3a. Left Load-Bearing Pillar (R-Stem)
    const shapePillar = new THREE.Shape();
    shapePillar.moveTo(160 * s + ox, 640 * s + oy);
    shapePillar.lineTo(280 * s + ox, 640 * s + oy);
    shapePillar.lineTo(280 * s + ox, 160 * s + oy);
    shapePillar.lineTo(160 * s + ox, 160 * s + oy);
    shapePillar.closePath();
    const geomPillar = new THREE.ExtrudeGeometry(shapePillar, extrudeSettings);
    const meshPillar = new THREE.Mesh(geomPillar, titaniumMaterial);
    coreMeshGroup.add(meshPillar);

    // 3b. Upper R-Bowl with Precision 45° Chamfered Shoulder
    const shapeBowl = new THREE.Shape();
    shapeBowl.moveTo(280 * s + ox, 400 * s + oy);
    shapeBowl.lineTo(440 * s + ox, 400 * s + oy);
    shapeBowl.lineTo(520 * s + ox, 320 * s + oy);
    shapeBowl.lineTo(520 * s + ox, 240 * s + oy);
    shapeBowl.lineTo(440 * s + ox, 160 * s + oy);
    shapeBowl.lineTo(280 * s + ox, 160 * s + oy);
    shapeBowl.closePath();

    // Hole in Bowl
    const holePath = new THREE.Path();
    holePath.moveTo(280 * s + ox, 310 * s + oy);
    holePath.lineTo(400 * s + ox, 310 * s + oy);
    holePath.lineTo(430 * s + ox, 280 * s + oy);
    holePath.lineTo(430 * s + ox, 280 * s + oy);
    holePath.lineTo(400 * s + ox, 250 * s + oy);
    holePath.lineTo(280 * s + ox, 250 * s + oy);
    holePath.closePath();
    shapeBowl.holes.push(holePath);

    const geomBowl = new THREE.ExtrudeGeometry(shapeBowl, extrudeSettings);
    const meshBowl = new THREE.Mesh(geomBowl, titaniumMaterial);
    coreMeshGroup.add(meshBowl);

    // 3c. N-Diagonal / R-Leg Structural Shear Vector
    const shapeLeg = new THREE.Shape();
    shapeLeg.moveTo(280 * s + ox, 400 * s + oy);
    shapeLeg.lineTo(400 * s + ox, 400 * s + oy);
    shapeLeg.lineTo(640 * s + ox, 640 * s + oy);
    shapeLeg.lineTo(520 * s + ox, 640 * s + oy);
    shapeLeg.closePath();
    const geomLeg = new THREE.ExtrudeGeometry(shapeLeg, extrudeSettings);
    const meshLeg = new THREE.Mesh(geomLeg, titaniumMaterial);
    coreMeshGroup.add(meshLeg);

    // 3d. Right Pylon (N-Right Stem)
    const shapeRightStem = new THREE.Shape();
    shapeRightStem.moveTo(520 * s + ox, 360 * s + oy);
    shapeRightStem.lineTo(520 * s + ox, 160 * s + oy);
    shapeRightStem.lineTo(640 * s + ox, 160 * s + oy);
    shapeRightStem.lineTo(640 * s + ox, 480 * s + oy);
    shapeRightStem.closePath();
    const geomRightStem = new THREE.ExtrudeGeometry(shapeRightStem, extrudeSettings);
    const meshRightStem = new THREE.Mesh(geomRightStem, titaniumMaterial);
    coreMeshGroup.add(meshRightStem);

    // 3e. The Nexus Core: High-Tension Convergence Wedge (Illuminated Cobalt)
    const shapeWedge = new THREE.Shape();
    shapeWedge.moveTo(400 * s + ox, 400 * s + oy);
    shapeWedge.lineTo(520 * s + ox, 360 * s + oy);
    shapeWedge.lineTo(480 * s + ox, 480 * s + oy);
    shapeWedge.closePath();
    const geomWedge = new THREE.ExtrudeGeometry(shapeWedge, {
      depth: 0.42,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    const meshWedge = new THREE.Mesh(geomWedge, coreMaterial);
    coreMeshGroup.add(meshWedge);

    // Flip Y to match SVG coordinate system vs WebGL
    coreMeshGroup.rotation.x = Math.PI;
    rootGroup.add(coreMeshGroup);

    // 4. Kinetic Concentric Wave Particle Field
    const particleCount = window.innerWidth < 768 ? 300 : 2800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleOriginalRadii = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);

    const cobaltColor = new THREE.Color(0x0052ff);
    const cyanColor = new THREE.Color(0x00d2ff);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Create concentric ring distribution with slight jitter
      const ring = Math.floor(Math.sqrt(Math.random()) * 28);
      const baseRadius = 0.8 + (ring / 28) * 4.2;
      const angle = Math.random() * Math.PI * 2;
      const radiusJitter = (Math.random() - 0.5) * 0.2;
      const r = baseRadius + radiusJitter;

      particlePositions[i * 3] = Math.cos(angle) * r;
      particlePositions[i * 3 + 1] = Math.sin(angle) * r;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4 - 0.3;

      particleOriginalRadii[i] = r;
      particleAngles[i] = angle;

      // Color gradation from Cobalt (center) -> Cyan (middle) -> Slate/White (outer)
      const t = r / 5.0;
      const mixedColor = new THREE.Color();
      if (t < 0.4) {
        mixedColor.copy(cobaltColor).lerp(cyanColor, t / 0.4);
      } else {
        mixedColor.copy(cyanColor).lerp(whiteColor, (t - 0.4) / 0.6);
      }

      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.05 : 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    rootGroup.add(particleSystem);

    // 5. Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0x0a0d12, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.6);
    dirLight1.position.set(5, 8, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00d2ff, 2.0);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    const coreLight = new THREE.PointLight(0x0052ff, 4.0, 10);
    coreLight.position.set(0, 0, 0.6);
    scene.add(coreLight);

    // 6. Damped Mouse-Tracking Inertia
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTargetX = x * 0.45;
      mouseTargetY = y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Animation Loop with Kinetic Concentric Wave Physics
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Damped mouse inertia: lerp(current, target, 0.05)
      mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.05;
      mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.05;

      // Subtle resting levitation + mouse tilt
      rootGroup.rotation.y = mouseCurrentX * 0.9 + Math.sin(elapsedTime * 0.5) * 0.06;
      rootGroup.rotation.x = -mouseCurrentY * 0.7 + Math.cos(elapsedTime * 0.4) * 0.04;
      rootGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Kinetic Concentric Wave propagation in particle field
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const r = particleOriginalRadii[i];
        const theta = particleAngles[i];

        // Concentric expanding ripple
        const wave = Math.sin(r * 3.5 - elapsedTime * 2.8) * 0.18;
        positions[i * 3 + 2] = wave - 0.15;

        // Slow angular rotation
        const currentAngle = theta + elapsedTime * 0.08 * (1.2 / (r + 0.5));
        positions[i * 3] = Math.cos(currentAngle) * r;
        positions[i * 3 + 1] = Math.sin(currentAngle) * r;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Core pulse
      coreMaterial.emissiveIntensity = 2.0 + Math.sin(elapsedTime * 3.0) * 0.8;
      coreLight.intensity = 3.5 + Math.sin(elapsedTime * 3.0) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geomPillar.dispose();
      geomBowl.dispose();
      geomLeg.dispose();
      geomRightStem.dispose();
      geomWedge.dispose();
      titaniumMaterial.dispose();
      coreMaterial.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Three.js Container */}
      {webglSupported ? (
        <div
          ref={containerRef}
          className="w-full h-full min-h-[420px] md:min-h-[560px] flex items-center justify-center cursor-crosshair"
          aria-label="3D Monolithic RN Kinetic Visualization"
        />
      ) : (
        /* Mobile/WebGL Fallback */
        <div className="relative w-full h-[420px] flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 animate-pulse-slow">
            <img
              src="/assets/rn-mark.svg"
              alt="Ripple Nexus Monogram"
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,82,255,0.4)]"
            />
          </div>
          <div className="mt-4 px-3 py-1 rounded border border-nexus-border bg-nexus-carbon/80 text-[11px] font-mono text-nexus-cyan tracking-wider">
            [ KINETIC ENGINE: ACCELERATED STATIC PROFILE ]
          </div>
        </div>
      )}

      {/* Dynamic HUD Overlays */}
      <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex flex-col items-end gap-1">
        <span className="text-[10px] font-mono tracking-widest text-nexus-cyan">
          GPU_RENDER: ACTIVE
        </span>
        <span className="text-[9px] font-mono tracking-wider text-nexus-slate">
          FPS: 60 // P_COUNT: {isMobile ? "300" : "2,800"}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-nexus-cyan animate-ping" />
        <span className="text-[10px] font-mono tracking-widest text-nexus-slate uppercase">
          KINETIC_CORE: STABLE // POLARIS-V4
        </span>
      </div>
    </div>
  );
};

export default MonolithicRNCanvas;
