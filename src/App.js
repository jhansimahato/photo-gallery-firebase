import React, { useState } from "react";
import Title from "./Components/Title";
import UploadForm from "./Components/uploadForm";
import ImageGrid from "./Components/imageGrid";
import Modal from "./Components/Modal";


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
