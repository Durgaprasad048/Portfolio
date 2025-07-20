import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const FloatingGrid = () => {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      gridRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.2}
        emissive="#00ffff"
        emissiveIntensity={2}
      />
    </mesh>
  );
};

export default FloatingGrid; 