import React from "react";

const UploadForm = ({ onFileUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  return (
    <form>
      <label>
        Selecione um arquivo 3D (.obj):
        <input type="file" onChange={handleFileUpload} />
      </label>
    </form>
  );
};

export default UploadForm;
