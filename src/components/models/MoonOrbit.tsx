import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MoonGround } from "./MoonGround";
import { Robot } from "./Robot";
import * as THREE from "three";

export function MoonOrbit() {
  const moonSystemRef = useRef();
  const roversRef = useRef([]);
  const moonRadius = 6;
  const earthMoonDistance = 30;

  // Initialize multiple rovers with different starting positions
  const roverCount = 6;
  const roverOffsets = Array(roverCount)
    .fill(0)
    .map((_, i) => ({
      theta: (2 * Math.PI * i) / roverCount,
      phi: Math.random() * Math.PI * 2,
      speed: 0.1 + Math.random() * 0.2,
    }));

  useFrame(({ clock }) => {
    if (moonSystemRef.current) {
      // Rotate moon around Earth
      const time = clock.getElapsedTime();
      const moonOrbitSpeed = 0.04;
      moonSystemRef.current.position.x =
        Math.cos(time * moonOrbitSpeed) * earthMoonDistance;
      moonSystemRef.current.position.z =
        Math.sin(time * moonOrbitSpeed) * earthMoonDistance;

      // Rotate moon system to always face Earth
      moonSystemRef.current.rotation.y = time * moonOrbitSpeed;
    }

    // Update rovers
    roversRef.current.forEach((rover, index) => {
      if (rover) {
        const time = clock.getElapsedTime();
        const offset = roverOffsets[index];

        const theta = time * offset.speed + offset.theta;
        const phi = time * (offset.speed * 0.5) + offset.phi;

        const x = moonRadius * Math.sin(theta) * Math.cos(phi);
        const y = moonRadius * Math.sin(theta) * Math.sin(phi);
        const z = moonRadius * Math.cos(theta);

        rover.position.set(x, y, z);

        const nextTheta = theta + 0.01;
        const nextPhi = phi + 0.01;
        const nextX = moonRadius * Math.sin(nextTheta) * Math.cos(nextPhi);
        const nextY = moonRadius * Math.sin(nextTheta) * Math.sin(nextPhi);
        const nextZ = moonRadius * Math.cos(nextTheta);

        const lookAtPoint = new THREE.Vector3(nextX, nextY, nextZ);
        rover.lookAt(lookAtPoint);

        const normal = rover.position.clone().normalize();
        const up = new THREE.Vector3(0, 1, 0);
        rover.quaternion.setFromUnitVectors(up, normal);
      }
    });
  });

  return (
    <group ref={moonSystemRef}>
      <MoonGround />
      {Array(roverCount)
        .fill(0)
        .map((_, i) => (
          <group key={i} ref={(el) => (roversRef.current[i] = el)}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <Robot />
            </group>
          </group>
        ))}
    </group>
  );
}

