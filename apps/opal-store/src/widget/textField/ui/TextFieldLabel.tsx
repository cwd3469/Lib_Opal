import { forwardRef, InputHTMLAttributes } from "react";

import { DefaultTextField, DefaultTextFieldProps } from "./DefaultTextField";
import TextFieldFieldset, { TextFieldFieldsetProps } from "./TextFieldFieldset";

type Props = InputHTMLAttributes<HTMLInputElement> &
  DefaultTextFieldProps &
  TextFieldFieldsetProps;

const TextFieldLabel = forwardRef<HTMLInputElement, Props>(
  ({ label, state, message, isRequire, ...props }, ref) => {
    return (
      <TextFieldFieldset
        label={label}
        state={state}
        message={message}
        isRequire={isRequire}
      >
        <DefaultTextField ref={ref} {...props} />
      </TextFieldFieldset>
    );
  }
);

export default TextFieldLabel;
