import { Text3D, Center, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedText3D = () => {
  const textRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  useFrame(({ clock }) => {
    if (textRef.current && glowRef.current) {
      const t = clock.getElapsedTime();
      textRef.current.position.y = Math.sin(t) * 0.1;
      glowRef.current.position.y = textRef.current.position.y;
      
      // Pulse glow intensity
      const material = glowRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 1 + Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <Center position={[0, 0, 0]}>
      <Text3D
        ref={textRef}
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
      >
        Portfolio
        <meshMatcapMaterial
          matcap={matcapTexture}
        />
      </Text3D>
      
      {/* Glow effect */}
      <mesh ref={glowRef} scale={[1.2, 1.2, 1.2]}>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
        >
          Portfolio
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={2}
            transparent
            opacity={0.4}
          />
        </Text3D>
      </mesh>
    </Center>
  );
};

export default AnimatedText3D; 