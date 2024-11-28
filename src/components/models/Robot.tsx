import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Robot() {
  const wheelsRef = useRef([]);

  useFrame((state) => {
    // Rotate wheels
    wheelsRef.current.forEach(wheel => {
      if (wheel) {
        wheel.rotation.x += 0.1;
      }
    });
  });

  return (
    <group scale={[0.7, 0.7, 0.7]}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1, 0.8, 1]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      {[-1, 1].map((x, i) => (
        <mesh
          key={i}
          ref={el => wheelsRef.current[i] = el}
          position={[x, 0.4, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      
      {/* Antenna */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
        <meshStandardMaterial color="#cc0000" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}