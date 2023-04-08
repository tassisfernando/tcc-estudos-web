import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { Model } from './components/Model'

function App() {
  return (
   <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}} >
    <color attach="background" args={["#101010"]} />
    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
      <Stage environment={null}>
        <Model />
      </Stage>
    </PresentationControls>
   </Canvas>
  );
}

export default App;
