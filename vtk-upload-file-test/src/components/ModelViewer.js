import React, { useRef, useEffect } from 'react';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkOBJReader from 'vtk.js/Sources/IO/Misc/OBJReader';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';

const ModelViewer = ({ file }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const reader = vtkOBJReader.newInstance();
    reader.parseAsText(file);
    const polydata = reader.getOutputData();

    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      rootContainer: containerRef.current,
      background: [0, 0, 0],
    });
    const renderer = fullScreenRenderer.getRenderer();
    const renderWindow = fullScreenRenderer.getRenderWindow();

    const mapper = vtkMapper.newInstance();
    mapper.setInputData(polydata);

    const actor = vtkActor.newInstance();
    actor.setMapper(mapper);

    renderer.addActor(actor);
    renderer.resetCamera();
    renderWindow.render();
    actor.getProperty().setOpacity(1);

    return () => {
      fullScreenRenderer.delete();
    };
  }, [file]);

  return <div ref={containerRef} style={{ height: '100vh' }} />;
};

export default ModelViewer;
