import Button from "@/shared/styles/ui/Button";

import { DoubleBtnModalProps } from "../config/modalInfo";
import { ModalPortal } from "./ModalPortal";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./ModalUiKit";

const DoubleBtnModal = ({
  width,
  zIndex,
  isOpen,
  header,
  body,
  palette,
  onClose,
  leftBtnTitle,
  leftBtnDisabled,
  leftBtnOnClick,
  rightBtnTitle,
  rightBtnDisabled,
  rightBtnOnClick,
}: DoubleBtnModalProps) => {
  if (!isOpen) return <></>;
  return (
    <ModalPortal>
      <Mask onClick={onClose} zIndex={zIndex} />
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
              size={"sm"}
              palette={"black"}
              variant={"outlined"}
            >
              {leftBtnTitle ? leftBtnTitle : "취소"}
            </Button>
            <Button
              onClick={rightBtnOnClick ? rightBtnOnClick : onClose}
              disabled={rightBtnDisabled}
              size={"sm"}
              palette={palette ?? "gray"}
              variant={"contained"}
            >
              {rightBtnTitle ? rightBtnTitle : "확인"}
            </Button>
          </ModalFooter>
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
export default DoubleBtnModal;
