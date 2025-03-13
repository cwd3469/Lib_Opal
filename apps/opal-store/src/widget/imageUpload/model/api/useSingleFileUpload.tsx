import { storage } from "@/shared/firebase";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

const useSingleFileUpload = () => {
  const { showAlert } = useAlert();

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
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

    const storageRef = ref(storage, `uploads/${file.name}`); // 저장 위치 지정
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        showAlert({
          type: "error",
          title: "업로드 실패",
          content: error.message,
        });
      },
      async () => {
        // 업로드 완료 시 다운로드 URL 가져오기
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setPreviewUrl(url);
        alert("파일 업로드 완료!");
      }
    );
  };

  return { file, previewUrl, progress, handleFileChange, handleUpload };
};

export default useSingleFileUpload;
