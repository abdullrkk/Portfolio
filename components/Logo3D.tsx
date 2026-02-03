'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function LogoModel() {
  const { scene } = useGLTF('/models/character.glb');

  return (
    <primitive
      object={scene}
      scale={0.7}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/models/character.glb');

export default function Logo3D() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 2] }}
      dpr={[1, 1.5]} // Limit pixel ratio for performance
      frameloop="demand" // Only render when needed
      gl={{ 
        antialias: true, 
        powerPreference: 'high-performance' 
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={10}
        />
        <LogoModel />
      </Suspense>
    </Canvas>
  );
}
