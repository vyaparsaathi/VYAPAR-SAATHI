"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const CosmicLighting: React.FC = () => {
  const cursorLightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!cursorLightRef.current) return;
    const targetX = (state.pointer.x * viewport.width) / 2;
    const targetY = (state.pointer.y * viewport.height) / 2;

    // Small subtle local light that follows cursor at z = 1
    cursorLightRef.current.position.x = THREE.MathUtils.lerp(
      cursorLightRef.current.position.x,
      targetX,
      0.15
    );
    cursorLightRef.current.position.y = THREE.MathUtils.lerp(
      cursorLightRef.current.position.y,
      targetY,
      0.15
    );
  });

  return (
    <>
      {/* Deep Space Ambient Lighting */}
      <ambientLight intensity={0.4} color="#0A1D3D" />

      {/* Luxury Metallic Gold Main Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={1.2}
        color="#F4C86A"
      />

      {/* Cosmic Purple Rim Lighting */}
      <pointLight
        position={[-7, -4, -3]}
        intensity={2.2}
        color="#7557FF"
        distance={18}
      />

      {/* Electric Cyan Fill Light */}
      <pointLight
        position={[7, -5, -2]}
        intensity={1.8}
        color="#00D9FF"
        distance={16}
      />

      {/* Localized Subtle Cursor Light */}
      <pointLight
        ref={cursorLightRef}
        position={[0, 0, 1.2]}
        intensity={1.6}
        color="#F4C86A"
        distance={3.5}
        decay={2}
      />
    </>
  );
};
