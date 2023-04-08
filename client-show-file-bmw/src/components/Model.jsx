import { useGLTF } from "@react-three/drei";

export function Model() {
  const { scene } = useGLTF('/bmw.glb');
  return (
    <primitive object={scene} scale={0.01} />
  );
}
