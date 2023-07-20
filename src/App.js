import React from "react";
import Title from "./Components/Title";
import UploadForm from "./Components/uploadForm";
import ImageGrid from "./Components/imageGrid";


function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid/>
    </div>
  );
}

export default App;
