import { useState } from "react";
import axios from "axios";

export const burat = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [prediction, setPrediction] = useState(null);

  function handleUpload() {
    if (!file) {
      setMsg("Please select an image to upload.");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    axios
      .post("http://localhost:8000/predict", fd, {
        onUploadProgress: (ProgressEvent) => {
          setProgress((prevState) => {
            return {
              ...prevState,
              pc: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            };
          });
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setMsg("Prediction received.");
        setPrediction(res.data);
      })
      .catch((err) => {
        setMsg("Error during prediction.");
        console.error(err);
      });
  }

  return (
    <>
      <div className="p-20">
        <h1>Upload Image</h1>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" />
        <button onClick={handleUpload}>Upload</button>

        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span>{msg}</span>}
        {prediction && (
          <div>
            <h2>Prediction</h2>
            <p>Class: {prediction.class}</p>
            <p>Confidence: {prediction.confidence}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default burat;
