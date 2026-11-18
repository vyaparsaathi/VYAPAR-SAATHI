"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingObjectProps {
  initialPosition: [number, number, number];
  type: "gold-knot" | "silver-diamond" | "cyan-poly" | "purple-core" | "gold-ring";
  interactionRadius?: number;
}

export const SingleProximityObject: React.FC<FloatingObjectProps> = ({
  initialPosition,
  type,
  interactionRadius = 3.5,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...initialPosition), [initialPosition]);
  const currentPos = useMemo(() => new THREE.Vector3(...initialPosition), [initialPosition]);
  const { viewport } = useThree();

  const mouse3D = useMemo(() => new THREE.Vector3(9999, 9999, 0), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Project cursor to 3D plane
    const targetX = (state.pointer.x * viewport.width) / 2;
    const targetY = (state.pointer.y * viewport.height) / 2;
    mouse3D.x = targetX;
    mouse3D.y = targetY;
    mouse3D.z = 0;

    const time = state.clock.getElapsedTime();

    // Natural cosmic floating idle drift
    const floatY = Math.sin(time * 0.8 + basePos.x) * 0.18;
    const floatX = Math.cos(time * 0.6 + basePos.y) * 0.1;
    const targetBase = basePos.clone().add(new THREE.Vector3(floatX, floatY, 0));

    // Distance to cursor
    const distToCursor = mouse3D.distanceTo(currentPos);

    if (distToCursor < interactionRadius) {
      // PROXIMITY ACTIVE: Only objects within configurable radius respond
      const factor = 1 - distToCursor / interactionRadius;
      const pullForce = Math.pow(factor, 2) * 0.6; // Gentle controlled attraction

      // Vector toward cursor
      const pullDir = new THREE.Vector3().subVectors(mouse3D, currentPos).normalize();
      const attractedTarget = targetBase.clone().add(pullDir.multiplyScalar(pullForce));

      // Smooth spring interpolation
      currentPos.lerp(attractedTarget, 0.08);

      // Tilt object gently towards cursor
      const tiltX = (mouse3D.y - currentPos.y) * 0.18 * factor;
      const tiltY = (mouse3D.x - currentPos.x) * 0.18 * factor;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tiltX, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        time * 0.4 + tiltY,
        0.1
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        Math.sin(time * 0.5) * 0.15,
        0.05
      );

      // Increase material reflection/emissive brightness when cursor is close
      if (meshRef.current && meshRef.current.material) {
        const mat = meshRef.current.material as THREE.MeshStandardMaterial;
        if ("emissiveIntensity" in mat) {
          mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.8, 0.1);
        }
      }
    } else {
      // OUTSIDE INTERACTION RADIUS: Smooth natural return, no snapping
      currentPos.lerp(targetBase, 0.04);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.04);
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        Math.sin(time * 0.3) * 0.1,
        0.04
      );

      if (meshRef.current && meshRef.current.material) {
        const mat = meshRef.current.material as THREE.MeshStandardMaterial;
        if ("emissiveIntensity" in mat) {
          mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, 0.2, 0.05);
        }
      }
    }

    groupRef.current.position.copy(currentPos);
  });

  return (
    <group ref={groupRef}>
      {type === "gold-knot" && (
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[0.55, 0.16, 80, 16]} />
          <meshStandardMaterial
            color="#D9A441"
            metalness={0.92}
            roughness={0.18}
            emissive="#96651E"
            emissiveIntensity={0.2}
          />
        </mesh>
      )}

      {type === "silver-diamond" && (
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial
            color="#C7CCD5"
            metalness={0.98}
            roughness={0.12}
            emissive="#1A2436"
            emissiveIntensity={0.2}
          />
        </mesh>
      )}

      {type === "cyan-poly" && (
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#00D9FF"
            metalness={0.6}
            roughness={0.25}
            emissive="#004466"
            emissiveIntensity={0.25}
            transparent
            opacity={0.88}
            wireframe={false}
          />
        </mesh>
      )}

      {type === "purple-core" && (
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#7557FF"
            metalness={0.85}
            roughness={0.2}
            emissive="#382180"
            emissiveIntensity={0.25}
          />
        </mesh>
      )}

      {type === "gold-ring" && (
        <mesh ref={meshRef}>
          <torusGeometry args={[0.75, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#F4C86A"
            metalness={0.95}
            roughness={0.15}
            emissive="#D9A441"
            emissiveIntensity={0.3}
          />
        </mesh>
      )}
    </group>
  );
};

export const FloatingProximityObjects: React.FC = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  // Curated layout that frames the hero text beautifully without obstructing readability
  const objectConfigs = useMemo(() => {
    if (isMobile) {
      // Fewer objects and pulled outward for mobile screens
      return [
        { initialPosition: [1.6, 1.8, -1] as [number, number, number], type: "gold-knot" as const },
        { initialPosition: [-1.6, -1.8, -1.5] as [number, number, number], type: "cyan-poly" as const },
        { initialPosition: [1.5, -2.2, -1.2] as [number, number, number], type: "silver-diamond" as const },
      ];
    }
    // Desktop layout with dimensional depth framing the center
    return [
      { initialPosition: [3.8, 1.6, -0.8] as [number, number, number], type: "gold-knot" as const },
      { initialPosition: [-3.9, 1.8, -1.2] as [number, number, number], type: "silver-diamond" as const },
      { initialPosition: [4.2, -1.7, -1.5] as [number, number, number], type: "cyan-poly" as const },
      { initialPosition: [-3.8, -1.9, -1] as [number, number, number], type: "purple-core" as const },
      { initialPosition: [0, 2.8, -2.2] as [number, number, number], type: "gold-ring" as const },
    ];
  }, [isMobile]);

  return (
    <group>
      {objectConfigs.map((cfg, idx) => (
        <SingleProximityObject
          key={idx}
          initialPosition={cfg.initialPosition}
          type={cfg.type}
          interactionRadius={isMobile ? 2.2 : 3.4}
        />
      ))}
    </group>
  );
};
