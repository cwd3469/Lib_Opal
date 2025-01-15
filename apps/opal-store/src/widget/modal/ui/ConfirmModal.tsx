import Button from "../../../shared/styles/ui/Button";
import { ConfirmModalProps } from "../config/modalInfo";
import { ModalPortal } from "./ModalPortal";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./ModalUiKit";

export const ConfirmModal = ({
  header,
  body,
  width,
  leftBtn,
  rightBtn,
  onClose,
}: ConfirmModalProps) => {
  return (
    <ModalPortal>
      <Mask onClick={onClose} />
      <MaskBody>
        <MaskBodyContent width={width}>
          {typeof header === "string" ? (
            <ModalHeader>{header}</ModalHeader>
          ) : (
            header
          )}
          {typeof body === "string" ? <ModalBody>{body}</ModalBody> : body}
          <ModalFooter>
            <Button
              onClick={leftBtn?.onClick ? leftBtn?.onClick : onClose}
              disabled={leftBtn?.disabled}
              size={leftBtn?.btnInfo?.size ?? "sm"}
              palette={leftBtn?.btnInfo?.palette ?? "primary"}
              variant={leftBtn?.btnInfo?.variant ?? "contained"}
            >
              {leftBtn?.title ? leftBtn.title : "확인"}
            </Button>
            <Button
              onClick={rightBtn?.onClick ? rightBtn.onClick : onClose}
              disabled={rightBtn?.disabled}
              size={rightBtn?.btnInfo?.size ?? "sm"}
              palette={rightBtn?.btnInfo?.palette ?? "primary"}
              variant={rightBtn?.btnInfo?.variant ?? "outlined"}
            >
              {rightBtn?.title ? rightBtn?.title : "취소"}
            </Button>
          </ModalFooter>
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
