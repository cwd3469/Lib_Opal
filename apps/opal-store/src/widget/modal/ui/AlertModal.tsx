import Button from "../../../shared/styles/ui/Button";
import { ModalPortal } from "./ModalPortal";
import { AlertModalProps } from "../config/modalInfo";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./ModalUiKit";

export const AlertModal = ({
  header,
  body,
  width,
  leftBtn,
  onClose,
}: AlertModalProps) => {
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
          </ModalFooter>
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
