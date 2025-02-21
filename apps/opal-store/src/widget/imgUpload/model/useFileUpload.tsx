import { useState } from "react";

const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  // 파일 업로드 핸들러
  const handleUpload = async () => {
    if (!file) return alert("파일을 선택하세요!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      //   await axios.post("https://your-server.com/upload", formData, {
      //     headers: { "Content-Type": "multipart/form-data" },
      //     onUploadProgress: (progressEvent) => {
      //       const percentCompleted = Math.round(
      //         (progressEvent.loaded * 100) / (progressEvent.total || 1)
      //       );
      //       setProgress(percentCompleted);
      //     },
      //   });

      alert("파일 업로드 성공!");
    } catch (error) {
      console.error("파일 업로드 오류:", error);
      alert("업로드 중 오류 발생!");
    }
  };

  return { file, previewUrl, progress, handleFileChange, handleUpload };
};

export default useFileUpload;
