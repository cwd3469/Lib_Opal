import { NonBtnModalProps } from "../config/modalInfo";
import { ModalPortal } from "./ModalPortal";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalHeader,
} from "./ModalUiKit";

const NonBtnModal = ({
  width,
  isOpen,
  header,
  body,
  zIndex,
  onClose,
}: NonBtnModalProps) => {
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
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
export default NonBtnModal;
