import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const ProjectCard = ({ position, rotation, title, color }: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.002;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
};

const ProjectsGallery = () => {
  const projects = [
    { title: "Project 1", color: "#00ffff" },
    { title: "Project 2", color: "#ff00ff" },
    { title: "Project 3", color: "#00ff00" },
    { title: "Project 4", color: "#ff1b6b" },
  ];

  return (
    <group position={[0, 0, -5]}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const radius = 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <ProjectCard
            key={project.title}
            position={[x, 0, z]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            title={project.title}
            color={project.color}
          />
        );
      })}
    </group>
  );
};

export default ProjectsGallery; 