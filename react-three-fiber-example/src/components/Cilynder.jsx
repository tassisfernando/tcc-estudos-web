import {useCylinder} from "@react-three/cannon";

export function Cilynder() {
    const [ref, api] = useCylinder(() => ({ mass: 2, position: [0, 2, 0] }));

    return (
        <mesh
            onClick={() => {
                api.velocity.set(-3, 5, 0);
            }}
            ref={ref}
            position={[-10, 2, 0]}
        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="blue" />
        </mesh>
    );
}