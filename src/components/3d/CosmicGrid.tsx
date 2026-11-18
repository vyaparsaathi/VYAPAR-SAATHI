"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const CosmicGrid: React.FC = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 0.4) % 1;
    }
  });

  return (
    <group position={[0, -3.2, -1]} rotation={[0.2, 0, 0]}>
      <gridHelper
        ref={gridRef}
        args={[28, 28, "#D9A441", "#152642"]}
      />
    </group>
  );
};
