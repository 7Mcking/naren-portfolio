import { useRef } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Earth } from "./models/Earth";
import { MoonOrbit } from "./models/MoonOrbit";
import { Particles } from "./models/Particles";
import { Stars } from "./models/Stars";
import { Sun } from "./models/Sun";
import { Robot } from "./models/Robot";

export function Scene() {
  const cameraRef = useRef();

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 100, 150]} />
      <OrbitControls
        enableZoom={true}
        autoRotate={true}
        reverseHorizontalOrbit={true}
        reverseVerticalOrbit={true}
        enablePan={true}
        enableRotate={true}
        maxDistance={500}
        minDistance={10}
      />

      <ambientLight intensity={1.5} />

      <group>
        <Earth />
        <MoonOrbit />
        <Robot />
      </group>

      <Particles />
      <Stars />
      <Sun />

      <fog attach="fog" args={["#000000", 50, 500]} />
    </>
  );
}
