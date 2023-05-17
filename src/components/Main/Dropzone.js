import { useCallback, useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PostContext } from "../../contexts/Context";

const Dropzone = ({ className, onSubmit }) => {
  const { state } = useContext(PostContext);
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [uploadbtnVisible, setUploadBtnVisible] = useState(true);

  useEffect(() => {
    setUploadBtnVisible(true);
  }, [files]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadBtnVisible(false);
    try {
      if (!files?.length) return;

      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));
      formData.append("upload_preset", "socialapp");

      const URL = "https://api.cloudinary.com/v1_1/druttjvrf/image/upload";
      const data = await fetch(URL, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      onSubmit(data?.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {files[0] ? (
        <>
          <div className="flex gap-4">
            <h5 className="title font-semibold mx-2">Preview</h5>
            <ul className="mt-6 preview-img">
              {files.map((file) => (
                <li key={file.name} className="">
                  <img
                    src={file.preview}
                    alt={file.name}
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                    className="h-full w-full object-contain rounded-md"
                  />
                  <button
                    type="button"
                    className="btn btn-danger remove-btn"
                    onClick={() => removeFile(file.name)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                    {file.name}
                  </p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={removeAll}
              className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
            >
              Remove all files
            </button>
            {uploadbtnVisible && (
              <button
                type="submit"
                className="ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-purple-400 rounded-md px-3 hover:bg-purple-400 hover:text-white transition-colors"
              >
                Upload Image
              </button>
            )}
          </div>
        </>
      ) : (
        <div
          {...getRootProps({
            className: className,
          })}
          className="dropzone-place"
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="dz-message">
              <i
                className={
                  state.modelPhotoOrVideo
                    ? "fa-regular fa-image display-3"
                    : "fa-solid fa-video display-3"
                }
              ></i>

              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>
                  Drag here or click to upload{" "}
                  {state.modelPhotoOrVideo ? "photo" : "video"}.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Dropzone;
