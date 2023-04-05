import React, { useState } from 'react';
import vtkOBJReader from 'vtk.js/Sources/IO/Misc/OBJReader';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import { Viewport } from 'react-vtkjs-viewport';

const FileUpload = () => {
  const [model, setModel] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    const objReader = vtkOBJReader.newInstance();
    objReader.setUrl(file.name);

    reader.onload = function(e) {
      objReader.parseAsText(reader.result);
      const mapper = vtkMapper.newInstance();
      const actor = vtkActor.newInstance();

      mapper.setInputConnection(objReader.getOutputPort());
      actor.setMapper(mapper);
      
      setModel(actor);
    }

    reader.readAsText(file);
  }

  const fullScreenRenderWindow = React.useRef();

  React.useEffect(() => {
    if (model) {
      const renderWindow = fullScreenRenderWindow.current.getRenderWindow();
      const renderer = fullScreenRenderWindow.current.getRenderer();
      
      renderer.addActor(model);
      renderer.resetCamera();
      renderWindow.render();
    }
  }, [model]);

  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <Viewport
        ref={fullScreenRenderWindow}
        style={{ width: '100%', height: 'calc(100vh - 50px)' }}
      />
    </>
  );
}

export default FileUpload;
