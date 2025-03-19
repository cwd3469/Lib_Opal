import { useEffect, useState } from "react";

import { storage } from "@/shared/firebase";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

type Props = {
  uploadUrl: string | null;
  onUpload?: (url: string, name?: string) => void;
};

const useSingleFileUpload = ({ uploadUrl, onUpload }: Props) => {
  const { showAlert } = useAlert();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleUseFileReset = () => {
    setPreviewUrl("");
    setProgress(0);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (imageFile: File) => {
    const storageRef = ref(storage, `uploads/${imageFile.name}`); // 저장 위치 지정
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

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
        if (onUpload) onUpload(url);
      }
    );
  };

  useEffect(() => {
    if (uploadUrl) {
      setPreviewUrl(uploadUrl);
    }
  }, [uploadUrl]);

  return {
    file,
    previewUrl,
    progress,
    handleUseFileReset,
    handleUpload,
    handleFileChange,
  };
};

export default useSingleFileUpload;
