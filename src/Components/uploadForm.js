import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const allowedTypes = ["image/png", "image/jpeg"];

  const [setFile, onSetFile] = useState(null);
  const [setError, onSetError] = useState(null);

  const onChangeHandler = (e) => {
    let uploadedfile = e.target.files[0];
    if (uploadedfile && allowedTypes.includes(uploadedfile.type)) {
      onSetFile(uploadedfile);
      onSetError("");
    } else {
      onSetFile(null);
      onSetError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
      <input type="file" onChange={onChangeHandler} />
      <span>+</span>
      </label>
      <div className="outcome">
        {setError && <div className="error">{setError}</div>}
        {setFile && <div className="file">{setFile.name}</div>}
        {setFile && <ProgressBar file={setFile} setFile={onSetFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
