import * as THREE from 'three';
import React, { useState } from 'react';
import './styles.css';
import {ShowObject} from "../ShowObject";
export function ObjectInput() {
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsArrayBuffer(file);
    }

    function handleFileLoad(event) {
        console.log(event);
        const arrayBuffer = event.target.result;
        const loader = new THREE.BufferGeometryLoader();
        const bufferGeometry = loader.parse(arrayBuffer);
        console.log(bufferGeometry);
        setFile(bufferGeometry);
    }

    if (file) {
        return <ShowObject modelData={file} />
    }


    return (
        <div>
            <h1>Escolha um arquivo: </h1>

            <form onSubmit={handleFileChange}>
                <label>Informe o arquivo (.obj):</label>
                <input type="file" onChange={handleFileChange} />

                <button>Confirmar</button>
            </form>
        </div>
    );
}