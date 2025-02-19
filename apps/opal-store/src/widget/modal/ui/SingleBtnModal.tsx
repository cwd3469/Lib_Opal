import Button from "../../../shared/styles/ui/Button";
import { ModalPortal } from "./ModalPortal";
import { SingleBtnModalProps } from "../config/modalInfo";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./ModalUiKit";

const SingleBtnModal = ({
  width,
  isOpen,
  header,
  body,
  palette,
  zIndex,
  onClose,
  leftBtnTitle,
  leftBtnDisabled,
  leftBtnOnClick,
}: SingleBtnModalProps) => {
  if (!isOpen) return <></>;
  return (
    <ModalPortal>
      <Mask onClick={onClose} />
      <MaskBody zIndex={zIndex}>
        <MaskBodyContent width={width}>
          {typeof header === "string" ? (
            <ModalHeader>{header}</ModalHeader>
          ) : (
            header
          )}
          {typeof body === "string" ? <ModalBody>{body}</ModalBody> : body}
          <ModalFooter>
            <Button
              onClick={leftBtnOnClick ? leftBtnOnClick : onClose}
              disabled={leftBtnDisabled}
              size={"md"}
              palette={palette ?? "primary"}
              variant={"contained"}
            >
              {leftBtnTitle ? leftBtnTitle : "확인"}
            </Button>
          </ModalFooter>
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
export default SingleBtnModal;
