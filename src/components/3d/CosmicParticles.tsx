"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const CosmicParticles: React.FC<{ count?: number; radius?: number }> = ({
  count = 200,
  radius = 2.8,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, initialPositions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const init = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const gold = new THREE.Color("#D9A441");
    const cyan = new THREE.Color("#00D9FF");
    const purple = new THREE.Color("#7557FF");
    const white = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8 - 2;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      init[i * 3] = x;
      init[i * 3 + 1] = y;
      init[i * 3 + 2] = z;

      const r = Math.random();
      let c = white;
      if (r < 0.35) c = gold;
      else if (r < 0.65) c = cyan;
      else if (r < 0.85) c = purple;

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, init, col];
  }, [count]);

  const mouse3D = useMemo(() => new THREE.Vector3(9999, 9999, 0), []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    const targetX = (state.pointer.x * viewport.width) / 2;
    const targetY = (state.pointer.y * viewport.height) / 2;
    mouse3D.x = targetX;
    mouse3D.y = targetY;
    mouse3D.z = 0;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const origX = initialPositions[idx];
      const origY = initialPositions[idx + 1];
      const origZ = initialPositions[idx + 2];

      // Ambient subtle drift
      const driftY = Math.sin(time * 0.3 + origX) * 0.08;
      const targetPos = new THREE.Vector3(origX, origY + driftY, origZ);

      const curPos = new THREE.Vector3(array[idx], array[idx + 1], array[idx + 2]);
      const dist = mouse3D.distanceTo(curPos);

      if (dist < radius) {
        // LOCALIZED INTERACTION: Particles within radius respond
        const factor = 1 - dist / radius;
        // Subtle repulsion from cursor
        const repulseDir = new THREE.Vector3().subVectors(curPos, mouse3D).normalize();
        const repulsedPos = targetPos.clone().add(repulseDir.multiplyScalar(factor * 0.5));
        curPos.lerp(repulsedPos, 0.12);
      } else {
        // Smooth return to base orbit
        curPos.lerp(targetPos, 0.04);
      }

      array[idx] = curPos.x;
      array[idx + 1] = curPos.y;
      array[idx + 2] = curPos.z;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
