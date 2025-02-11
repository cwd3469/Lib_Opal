import { NonBtnModalProps } from "../config/modalInfo";
import { ModalPortal } from "./ModalPortal";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalHeader,
} from "./ModalUiKit";

const NonBtnModal = ({ width, header, body, onClose }: NonBtnModalProps) => {
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
        </MaskBodyContent>
      </MaskBody>
    </ModalPortal>
  );
};
export default NonBtnModal;
