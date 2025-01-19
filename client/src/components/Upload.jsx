import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const { signature, expire, token } = await response.json();

    if (!signature || !expire || !token) {
      throw new Error("Missing required authentication fields.");
    }

    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData, setFileName }) => {
  const ref = useRef(null);

  const onError = (err) => {
    console.error("Upload Error:", err);
    toast.error(`Upload failed: ${err.message || "Please try again."}`);
  };

  const onSuccess = (res) => {
    console.log("Upload Success:", res);
    setData(res);
    setFileName(res.name);
    toast.success("File uploaded successfully!");
  };

  const onUploadProgress = (progress) => {
    console.log("Upload Progress:", progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
