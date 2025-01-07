import styled from "@emotion/styled";
import { ChangeEventHandler, forwardRef } from "react";

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
};

const TextFiledLabel = forwardRef<Props>((props, ref) => {
  return;
});

export default TextFiledLabel;

const Input = styled.input``;
