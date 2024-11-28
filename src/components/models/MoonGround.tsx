import { useRef } from "react";
import * as THREE from "three";

export function MoonGround() {
  const moonRef = useRef();

  return (
    <mesh ref={moonRef} castShadow receiveShadow>
      <sphereGeometry args={[6, 64, 64]} />
      <meshStandardMaterial
        color="#FFFFFF"
        roughness={0.8}
        metalness={0.2}
        bumpScale={0.5}
      />
    </mesh>
  );
}

