import React, { useState } from "react";
import rct from "../img/r1.png";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const selectFile = e.target.files[0];
    if (selectFile) {
      setFile(selectFile);
      uploadImage(selectFile);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPrediction(null);
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data);
      } else {
        console.error("Failed to receive prediction from server.");
      }
    } catch (error) {
      console.error("Error occurred while uploading image:", error);
    }
  };

  return (
    <>
      <div
        className="sm:px-5 sm:flex sm:justify-center sm:items-center sm:flex-col
                   py-16 bg-[#F4C004]
                   lg:flex-row lg:items-start lg:px-8"
      >
        <div
          className="flex-col
                     lg:mr-8"
        >
          <div>
            <h1
              className="sm:text-center font-bold text-[2.5rem]
                         lg:text-start"
            >
              Discover and Learn:
            </h1>
            <p
              className="sm:text-center
                         lg:text-start"
            >
              Upload an image of an insect to identify and explore.
            </p>
          </div>
          <div
            className="w-[550px] h-auto rounded-xl bg-white mt-10 shadow-md border border-slate-300 p-5
                       lg:w-[450px] lg:mt-5
                       xl:w-[600px]"
          >
            <label
              htmlFor="input"
              className="block text-slate-800 text-base font-medium mb-1.5"
            >
              Upload file
            </label>
            <div className="flex items-start w-full">
              {file ? (
                <div className="text-start my-3">
                  <div className="relative inline-block">
                    <div className="w-full h-auto px-3 py-1 bg-gray-100">
                      <span className="text-black text-base font-medium">
                        File Name:{" "}
                      </span>
                      {file.name}
                    </div>
                    <button
                      className="absolute -top-3 -right-2 text-red-500 cursor-pointer rounded-sm"
                      onClick={handleClear}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="dragndrop"
                  className="flex flex-col items-center justify-center w-full h-[30vh] 
                  border-2 border-gray-400 border-dashed rounded-sm cursor-pointer bg-gray-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-cloud-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                      />
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg>
                    <p className="mb-2 dark:text-gray-400">
                      <span className="font-medium">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG OR JPEG (MAX. 800x400px)
                    </p>
                  </div>
                  {}
                  <input
                    id="dragndrop"
                    type="file"
                    className="hidden"
                    onChange={handleDrag}
                  />
                </label>
              )}
            </div>
          </div>
          <div
            className="hidden
                       sm:hidden
                       md:hidden
                       lg:h-auto lg:pt-5 lg:block
                       xl:block"
          >
            <p className="text-center text-gray-800 font-medium pb-2">
              No image? Try one of these:
            </p>
            <div className="flex flex-row justify-center px-20">
              <img src={rct} alt="" className="h-16 w-16 rounded-xl" />
              <img src={rct} alt="" className="h-16 w-16 rounded-xl" />
              <img src={rct} alt="" className="h-16 w-16 rounded-xl" />
              <img src={rct} alt="" className="h-16 w-16 rounded-xl" />
            </div>
          </div>
        </div>
        <div
          className="w-[550px] h-auto bg-white mt-6 rounded-xl p-5 flex flex-row shadow-md
                     lg:flex-col lg:h-[550px] lg:mt-0
                     xl:h-[560px]"
        >
          <div
            className="flex-1
                       lg:flex lg:flex-row"
          >
            <img
              src={prediction ? URL.createObjectURL(file) : ""}
              className="w-[200px] h-[220px] mb-3 rounded-xl"
            />
            {prediction && (
              <p
                className="flex flex-col font-medium text-[1.2rem]
                           lg:ml-4"
              >
                <span>Class: {prediction.class}</span>
                <span>
                  Confidence: {Math.round(prediction.confidence * 100)}%
                </span>
              </p>
            )}
          </div>
          <div className="border rounded-xl p-2 flex-1 max-h-[300px] overflow-auto">
            {prediction && (
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {prediction.class} Pest Removal Tips for Farms
                </h2>
                <p>
                  <span>{prediction.response}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
