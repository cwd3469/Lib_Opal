import styled from "@emotion/styled";

import { ReactNode } from "react";

import {
  ErrorStatusMessage,
  SuccessStatusMessage,
} from "@/shared/styles/ui/StatusMessage";

export type TextFieldFieldsetProps = {
  message?: string;
  state?: string;
  label?: string;
  isRequire?: boolean;
};

type Props = TextFieldFieldsetProps & {
  children: ReactNode;
};

const TextFieldFieldset = ({
  message,
  state,
  label,
  isRequire,
  children,
}: Props) => {
  return (
    <Fieldset>
      {label && (
        <Label>
          {label}
          {isRequire && <Require> *</Require>}
        </Label>
      )}
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
  gap: 4px;
  padding: 0;
`;

const Label = styled.label`
  ${(props) => props.theme.typography.B9_Body_12_M}
  line-height: 1;
  color: ${(props) => props.theme.palette.gray[900]};
`;

const Require = styled.span`
  color: ${(props) => props.theme.palette.warning[500]};
  font-size: 13px;
`;
