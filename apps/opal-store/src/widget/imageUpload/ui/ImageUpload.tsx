import { useState } from "react";
import styled from "@emotion/styled";

import Button from "@/shared/styles/ui/Button";
import DoubleBtnModal from "@/shared/ui/modal/ui/DoubleBtnModal";
import TextFieldLabel from "@/shared/ui/textField/ui/TextFieldLabel";
import TextFieldFieldset, {
  TextFieldFieldsetProps,
} from "@/shared/ui/textField/ui/TextFieldFieldset";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";

import useSingleFileUpload from "../model/api/useSingleFileUpload";

type Props = TextFieldFieldsetProps;

const ImageUpload = ({ ...props }: Props) => {
  const { showAlert } = useAlert();

  const { file, previewUrl, handleFileChange, handleUpload } =
    useSingleFileUpload();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleCompletion = () => {
    handleUpload();
    handleClose();
  };

  const handleConfirmationModalOpen = () => {
    showAlert({
      title: "파일 업로드 하겠습니까?",
      content: "파일 업로드 사용 할 수 있습니다.",
      type: "success",
      rightBtnOnClick: handleCompletion,
    });
  };

  return (
    <>
      <TextFieldFieldset {...props}>
        <Button
          onClick={handleOpen}
          type="button"
          variant="outlined"
          size="sm"
          palette="black"
        >
          파일 업로더 열기
        </Button>
      </TextFieldFieldset>
      <DoubleBtnModal
        width="500px"
        isOpen={isOpen}
        header={"파일 업로더"}
        body={
          <ImageContainer>
            {previewUrl && (
              <ImagePreview src={previewUrl} alt={file?.name ?? "로고"} />
            )}
            <TextFieldLabel
              inputSize="sm"
              type="file"
              onChange={handleFileChange}
              state="success"
            />
          </ImageContainer>
        }
        onClose={handleClose}
        rightBtnOnClick={handleConfirmationModalOpen}
        rightBtnDisabled={!file}
      />
    </>
  );
};

export default ImageUpload;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImagePreview = styled.img`
  display: flex;
  justify-content: space-between;
`;
