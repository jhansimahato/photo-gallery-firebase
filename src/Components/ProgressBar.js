import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { setUrl, setProgress } = useStorage(file);

  useEffect(() => {
    if (setUrl) {
      setFile(null);
    }
  }, [setUrl,setFile]);

  return <div className="progress-bar" style={{ width: setProgress + "%" }} />;
};

export default ProgressBar;
