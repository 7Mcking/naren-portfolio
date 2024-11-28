import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Earth() {
  const earthRef = useRef();

  useFrame(({ clock }) => {
    if (earthRef.current) {
      // Rotate Earth on its axis
      earthRef.current.rotation.y *= 0.01;
    }
  });

  return (
    <mesh ref={earthRef} castShadow receiveShadow>
      <sphereGeometry args={[18, 74, 74]} />
      <meshStandardMaterial
        color="#4D7FFF"
        roughness={0.7}
        metalness={0.3}
        bumpScale={0.5}
      >
        <color attach="color" args={["#4B6CB7"]} />
      </meshStandardMaterial>
    </mesh>
  );
}
7;

