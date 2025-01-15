import { forwardRef, InputHTMLAttributes } from "react";

import { DefaultTextField } from "./DefaultTextField";
import TextFieldFieldset from "./TextFieldFieldset";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  message?: string;
  state?: string;
  label?: string;
};

const TextFieldLabel = forwardRef<HTMLInputElement, Props>(
  ({ label, state, message, ...props }, ref) => {
    return (
      <TextFieldFieldset label={label} state={state} message={message}>
        <DefaultTextField ref={ref} {...props} />
      </TextFieldFieldset>
    );
  }
);

export default TextFieldLabel;
