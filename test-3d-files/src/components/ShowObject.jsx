import { useRef, useEffect } from "react";
import * as THREE from "three";

export function ShowObject({ modelData }) {
    const sceneRef = useRef();
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(
        75, // FOV
        window.innerWidth / window.innerHeight, // aspect ratio
        0.1, // near plane
        1000 // far plane
    );
    const scene = new THREE.Scene();

    useEffect(() => {
        // Set up the renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);


        // Load the model data
        const loader = new THREE.ObjectLoader();
        const model = loader.parse(modelData);


        // Add the model to the scene
        scene.add(model);


        // Set up the camera
        camera.position.z = 5;


        // Start rendering the scene
        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();


        return () => {
            // Clean up the scene
            scene.remove(model);
            renderer.dispose();
        };
    }, [modelData, renderer, sceneRef]);


    return <div ref={sceneRef} />;
}