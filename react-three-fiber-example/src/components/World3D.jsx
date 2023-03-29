import {Physics, useBox} from "@react-three/cannon";
import {OrbitControls, Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import "../styles.css";
import {Box} from "./Box";
import {Plane} from "./Plane";
import {Cilynder} from "./Cilynder";

export function World3D() {

    return (
        <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Physics>
                <Box />
                <Cilynder />
                <Plane />
            </Physics>
        </Canvas>
    );
}
