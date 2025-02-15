import styled from "@emotion/styled";
import {
  ErrorStatusMessage,
  SuccessStatusMessage,
} from "../../../shared/styles/ui/StatusMessage";
import { ReactNode } from "react";

export type TextFieldFieldsetProps = {
  message?: string;
  state?: string;
  label?: string;
};

type Props = TextFieldFieldsetProps & {
  children: ReactNode;
};

const TextFieldFieldset = ({ message, state, label, children }: Props) => {
  return (
    <Fieldset>
      {label && <Label>{label}</Label>}
      {children}
      {message &&
        (state === "error" ? (
          <ErrorStatusMessage>{message}</ErrorStatusMessage>
        ) : (
          <SuccessStatusMessage>{message}</SuccessStatusMessage>
        ))}
    </Fieldset>
  );
};

export default TextFieldFieldset;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.label`
  ${(props) => props.theme.typography.B6_Body_14_SB}
  color:${(props) => props.theme.palette.gray[900]}
`;
