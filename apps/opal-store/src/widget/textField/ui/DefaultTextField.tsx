import styled from "@emotion/styled";
import { Breakpoint } from "../../../shared/styles/interface/pointer";

import { css } from "@emotion/react";

export type DefaultTextFieldProps = {
  inputSize?: Breakpoint;
  inputWidth?: string;
};

export const DefaultTextField = styled.input<DefaultTextFieldProps>`
  //layout
  width: ${(props) => props.inputWidth};

  ${(props) =>
    props.inputSize === "lg"
      ? css`
          padding: 10px 8px;
        `
      : props.inputSize === "md"
        ? css`
            padding: 8px 6px;
          `
        : props.inputSize === "sm"
          ? css`
              padding: 6px 4px;
            `
          : ""}
  ${(props) => props.theme.typography.B9_Body_12_M};
  //style
  border-radius: ${(props) => props.theme.radius.sm};
  border: 1px solid ${(props) => props.theme.palette.gray[500]};
  background-color: ${(props) => props.theme.palette.white[100]};
  box-sizing: border-box;

  &::placeholder {
    color: var(--CoolGray-CoolGray400, #9aa9b7);
    font-weight: 400;
  }
  &:focus-visible {
    outline: 1px solid var(--CoolGray-CoolGray600, #677683);
  }
  &:disabled {
    color: var(--TrueGray-Gray500, #b3b3b3);
    border: 1px solid var(--TrueGray-Gray200, #e1e1e1);
    background-color: var(--TrueGray-Gray025, #fbfbfb);
  }
`;
