import React, { useState } from "react";

const DragAndDrop = ({ onEvidencesChange }) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...files, ...e.dataTransfer.files];
    setFiles(newFiles);
    onEvidencesChange(newFiles);
  };

  return (
    <div
      className="drag-drop-area"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <p>Arrastre y suelte los archivos aquí</p>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;
