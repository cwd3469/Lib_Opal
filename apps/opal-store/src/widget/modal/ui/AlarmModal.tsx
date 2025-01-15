import { AlarmModalProps } from "../config/modalInfo";
import { ModalPortal } from "./ModalPortal";
import {
  Mask,
  MaskBody,
  MaskBodyContent,
  ModalBody,
  ModalHeader,
} from "./ModalUiKit";

export const AlarmModal = ({
  header,
  body,
  width,
  onClose,
}: AlarmModalProps) => {
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
