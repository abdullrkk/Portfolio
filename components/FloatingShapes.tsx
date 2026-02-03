'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

function Shape({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
          <pointLight position={[10, 10, 5]} intensity={0.5} color="#a855f7" />
          
          <Shape position={[-3, 2, 0]} color="#3b82f6" />
          <Shape position={[3, -2, -2]} color="#a855f7" />
          <Shape position={[0, 3, -3]} color="#ec4899" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
