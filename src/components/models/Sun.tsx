import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Sun() {
  const sunRef = useRef();

  useFrame(({ clock }) => {
    if (sunRef.current) {
      // Gentle pulsing effect
      const scale = 1.1 + Math.sin(clock.getElapsedTime()) * 0.02;
      sunRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={sunRef} position={[-120, -140, -90]}>
      <sphereGeometry args={[60, 62, 62]} />
      <meshBasicMaterial color="#FDB813">
        <color attach="color" args={["#FDB813"]} />
      </meshBasicMaterial>
      <pointLight intensity={1.5} distance={1000} decay={2} />
    </mesh>
  );
}
