import styled from "@emotion/styled";

import Button from "@/shared/styles/ui/Button";
import DoubleBtnModal from "@/shared/ui/modal/ui/DoubleBtnModal";
import TextFieldLabel from "@/shared/ui/textField/ui/TextFieldLabel";
import TextFieldFieldset, {
  TextFieldFieldsetProps,
} from "@/shared/ui/textField/ui/TextFieldFieldset";
import useSingleFileUpload from "../hook/useSingleFileUpload";
import useModal from "@/shared/ui/modal/model/useModal";
import { IMAGE_UPLOAD_CONTEXT } from "../config/context";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";

type Props = TextFieldFieldsetProps & {
  onUpload: (value: string) => void;
  uploadUrl: string | null;
};

type ModalUnit = "upload";

const ImageUpload = ({ onUpload, uploadUrl, ...props }: Props) => {
  const { showAlert } = useAlert();

  const { openModal, closeModal, isOpen } = useModal<ModalUnit>();

  const {
    file,
    previewUrl,
    handleUseFileReset,
    handleFileChange,
    handleUpload,
  } = useSingleFileUpload({ uploadUrl, onUpload });

  const handleOpenUpload = () => {
    openModal("upload");
  };

  const handleCloseUpload = () => {
    closeModal("upload");
    handleUseFileReset();
  };

  const handleCompletion = async () => {
    if (file) await handleUpload(file);

    showAlert({
      type: "success",
      title: "파일 업로드 완료!",
      content: "파일 업로드 완료 되었습니다.",
    });
    handleCloseUpload();
  };

  return (
    <>
      <TextFieldFieldset {...props}>
        <Button
          onClick={handleOpenUpload}
          type="button"
          variant="outlined"
          size="sm"
          palette="black"
        >
          {IMAGE_UPLOAD_CONTEXT.TITLE}
        </Button>
      </TextFieldFieldset>
      {uploadUrl && <ImagePreview src={uploadUrl} alt={file?.name ?? "로고"} />}
      <DoubleBtnModal
        width="500px"
        isOpen={isOpen("upload")}
        header={IMAGE_UPLOAD_CONTEXT.UPLOAD_MODAL_TITLE}
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
        onClose={handleCloseUpload}
        rightBtnOnClick={handleCompletion}
        rightBtnDisabled={!file}
        rightBtnTitle={IMAGE_UPLOAD_CONTEXT.UPLOAD_MODAL_BTN}
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
