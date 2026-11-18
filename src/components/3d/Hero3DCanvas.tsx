"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CosmicLighting } from "./CosmicLighting";
import { LocalizedNetworkNodes } from "./LocalizedNetworkNodes";
import { FloatingProximityObjects } from "./FloatingProximityObjects";
import { CosmicParticles } from "./CosmicParticles";
import { CosmicGrid } from "./CosmicGrid";
import { CosmicFallback } from "./CosmicFallback";

export const Hero3DCanvas: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL availability safely
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl") ||
        canvas.getContext("webgl2");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (hasWebGL === false) {
    return <CosmicFallback />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Background radial gradient layers */}
      <div className="absolute inset-0 bg-radial-vignette opacity-60" />

      {hasWebGL && (
        <Suspense fallback={<CosmicFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5.8], fov: 50 }}
            dpr={[1, isMobile ? 1.5 : 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            className="w-full h-full pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <CosmicLighting />
            <LocalizedNetworkNodes
              count={isMobile ? 28 : 50}
              radius={isMobile ? 2.4 : 3.4}
              maxDistanceLines={isMobile ? 2.2 : 2.8}
            />
            <FloatingProximityObjects />
            <CosmicParticles count={isMobile ? 100 : 220} radius={isMobile ? 2.2 : 3.0} />
            <CosmicGrid />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
};
