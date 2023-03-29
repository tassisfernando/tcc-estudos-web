import {useBox} from "@react-three/cannon";

export function Box (){
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

    return (
        <mesh
            onClick={() => {
                api.velocity.set(3, 5, 0);
            }}
            ref={ref}
            position={[0, 2, 0]}
        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
}