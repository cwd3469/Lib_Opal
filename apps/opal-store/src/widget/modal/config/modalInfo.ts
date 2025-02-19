import { ReactNode } from "react";

export type ModalViewType = "alarm" | "alert" | "confirm";

// type ModalBreakpoint = "lg" | "md" | "sm";
type ModalPaletteKey = "primary" | "success" | "warning" | "error";

export interface NonBtnModalProps {
  width?: string;
  isOpen: boolean;
  zIndex?: string;
  header: ReactNode;
  body: ReactNode;
  palette?: ModalPaletteKey;
  onClose: () => void;
}

export interface SingleBtnModalProps extends NonBtnModalProps {
  leftBtnOnClick?: () => void;
  leftBtnTitle?: string;
  leftBtnDisabled?: boolean;
}

export interface DoubleBtnModalProps extends NonBtnModalProps {
  leftBtnOnClick?: () => void;
  leftBtnTitle?: string;
  leftBtnDisabled?: boolean;
  rightBtnOnClick?: () => void;
  rightBtnTitle?: string;
  rightBtnDisabled?: boolean;
}
