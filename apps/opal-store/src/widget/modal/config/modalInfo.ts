import { ButtonProps } from "../../../shared/styles/ui/Button";

export type ModalViewType = "alarm" | "alert" | "confirm";

export interface AlarmModalProps {
  width?: string;
  header: JSX.Element | string;
  body: JSX.Element | string;
  onClose: () => void;
}

export interface AlertModalProps extends AlarmModalProps {
  leftBtn?: BtnType;
}

export interface ConfirmModalProps extends AlarmModalProps {
  leftBtn?: BtnType;
  rightBtn?: BtnType;
}

type BtnType = {
  onClick?: () => void;
  title?: string;
  btnInfo?: ButtonProps;
  disabled?: boolean;
};
