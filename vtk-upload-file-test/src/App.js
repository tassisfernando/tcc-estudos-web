import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ModelViewer from "./components/ModelViewer";
import FileUpload from "./components/FileUpload";

function App() {
  // const [file, setFile] = useState(null);

  // const handleFileUpload = (file) => {
  //   setFile(file);
  //   console.log(file)
  // };

  // if (!file) {
  //   return (
  //     <div>
  //       <h1>Upload e renderização de arquivo 3D</h1>
  //       <UploadForm onFileUpload={handleFileUpload} />
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     <ModelViewer file={file} />
  //   </div>
  // );

  return (
    <div>
      <FileUpload />
    </div>
  );
}

export default App;
