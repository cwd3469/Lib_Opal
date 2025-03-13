import { ReactNode } from "react";
import ReactDOM from "react-dom";

export const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal");
  const component = el as Element;
  return ReactDOM.createPortal(children, component);
};
