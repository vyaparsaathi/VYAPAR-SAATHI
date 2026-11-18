"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface NodeData {
  basePos: THREE.Vector3;
  currentPos: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  baseColor: THREE.Color;
  activeColor: THREE.Color;
  size: number;
}

export const LocalizedNetworkNodes: React.FC<{
  radius?: number;
  count?: number;
  maxDistanceLines?: number;
}> = ({ radius = 3.2, count = 48, maxDistanceLines = 2.8 }) => {
  const { viewport } = useThree();

  // Create nodes positioned in a 3D volume in front of the camera
  const nodes = useMemo(() => {
    const list: NodeData[] = [];
    const goldColor = new THREE.Color("#D9A441");
    const cyanColor = new THREE.Color("#00D9FF");
    const purpleColor = new THREE.Color("#7557FF");
    const silverColor = new THREE.Color("#C7CCD5");

    for (let i = 0; i < count; i++) {
      // Spread across viewport dimensions
      const x = (Math.random() - 0.5) * (viewport.width * 1.3);
      const y = (Math.random() - 0.5) * (viewport.height * 1.3);
      const z = (Math.random() - 0.5) * 4 - 1.5;

      const basePos = new THREE.Vector3(x, y, z);
      const currentPos = basePos.clone();

      const colorVariant = Math.random();
      let baseC = new THREE.Color("#1B2A4A");
      let activeC = goldColor;

      if (colorVariant < 0.4) {
        baseC = new THREE.Color("#1A2E44");
        activeC = goldColor;
      } else if (colorVariant < 0.7) {
        baseC = new THREE.Color("#16233B");
        activeC = cyanColor;
      } else if (colorVariant < 0.9) {
        baseC = new THREE.Color("#21193D");
        activeC = purpleColor;
      } else {
        baseC = new THREE.Color("#1F2833");
        activeC = silverColor;
      }

      list.push({
        basePos,
        currentPos,
        velocity: new THREE.Vector3(),
        color: baseC.clone(),
        baseColor: baseC,
        activeColor: activeC,
        size: Math.random() * 0.08 + 0.04,
      });
    }
    return list;
  }, [count, viewport.width, viewport.height]);

  // Instanced mesh for nodes
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);
  const linesMaterialRef = useRef<THREE.LineBasicMaterial>(null);

  // Reusable dummy object for instance transforms
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mouse3D = useMemo(() => new THREE.Vector3(9999, 9999, 0), []);

  useFrame((state) => {
    // Project 2D normalized mouse coordinates (-1 to 1) into 3D world space at z = 0
    const targetX = (state.pointer.x * viewport.width) / 2;
    const targetY = (state.pointer.y * viewport.height) / 2;

    // Smoothly track mouse in 3D
    mouse3D.x = THREE.MathUtils.lerp(mouse3D.x, targetX, 0.15);
    mouse3D.y = THREE.MathUtils.lerp(mouse3D.y, targetY, 0.15);
    mouse3D.z = 0;

    const time = state.clock.getElapsedTime();

    // Update each node with localized proximity check
    const mesh = instancedMeshRef.current;
    if (!mesh) return;

    const activeConnections: number[] = [];

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Subtle natural cosmic drift
      const driftX = Math.sin(time * 0.4 + i) * 0.12;
      const driftY = Math.cos(time * 0.35 + i * 1.5) * 0.12;
      const targetPos = node.basePos.clone().add(new THREE.Vector3(driftX, driftY, 0));

      // Calculate distance to cursor
      const distToCursor = mouse3D.distanceTo(node.currentPos);

      if (distToCursor < radius) {
        // PROXIMITY ACTIVE: Only objects within configurable radius react
        const proximityFactor = 1 - distToCursor / radius; // 1 at center, 0 at boundary
        const force = Math.pow(proximityFactor, 1.8);

        // Gentle attraction and subtle repulsion vector
        const dir = new THREE.Vector3().subVectors(mouse3D, node.currentPos).normalize();
        const displacement = dir.multiplyScalar(force * 0.45);

        // Interpolate position towards cursor influence
        node.currentPos.lerp(targetPos.clone().add(displacement), 0.12);

        // Brighten node color locally
        node.color.lerpColors(node.baseColor, node.activeColor, force * 0.95);
      } else {
        // OUTSIDE RADIUS: Return smoothly to base position with spring physics
        node.currentPos.lerp(targetPos, 0.06);
        node.color.lerp(node.baseColor, 0.08);
      }

      // Update instance transform
      dummy.position.copy(node.currentPos);
      const scale = node.size * (distToCursor < radius ? 1 + (1 - distToCursor / radius) * 0.8 : 1);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, node.color);

      // Check lines to other nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const otherNode = nodes[j];
        const distBetweenNodes = node.currentPos.distanceTo(otherNode.currentPos);

        if (distBetweenNodes < maxDistanceLines) {
          // If either node is near the cursor, line is prominently drawn & brightened
          const isNearI = distToCursor < radius;
          const isNearJ = mouse3D.distanceTo(otherNode.currentPos) < radius;

          // Connect if both are close enough or if near cursor
          if (distBetweenNodes < maxDistanceLines * 0.75 || isNearI || isNearJ) {
            activeConnections.push(
              node.currentPos.x,
              node.currentPos.y,
              node.currentPos.z,
              otherNode.currentPos.x,
              otherNode.currentPos.y,
              otherNode.currentPos.z
            );
          }
        }
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

    // Update dynamic line segments
    if (linesGeometryRef.current) {
      linesGeometryRef.current.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(activeConnections, 3)
      );
    }
  });

  return (
    <group>
      {/* Node Spheres */}
      <instancedMesh
        ref={instancedMeshRef}
        args={[undefined, undefined, count]}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.8}
          emissive="#102A55"
          emissiveIntensity={0.6}
        />
      </instancedMesh>

      {/* Dynamic Connecting Lines */}
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef} />
        <lineBasicMaterial
          ref={linesMaterialRef}
          color="#3A5075"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};
