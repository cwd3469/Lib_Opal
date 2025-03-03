import { forwardRef, SelectHTMLAttributes } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Breakpoint } from "@/shared/styles/interface/pointer";
import TextFieldFieldset, {
  TextFieldFieldsetProps,
} from "@/widget/textField/ui/TextFieldFieldset";
import { OptionInterface } from "../interface";

type SelectProps = {
  selectSize?: Breakpoint;
  selectWidth?: string;
  options?: OptionInterface[];
};

type Props = SelectHTMLAttributes<HTMLSelectElement> &
  SelectProps &
  TextFieldFieldsetProps;

const SelectBox = forwardRef<HTMLSelectElement, Props>(
  ({ label, state, message, isRequire, options, ...props }, ref) => {
    return (
      <TextFieldFieldset
        label={label}
        state={state}
        message={message}
        isRequire={isRequire}
      >
        <Select ref={ref} {...props}>
          {options &&
            options.map((el, index) => {
              return (
                <option key={index} value={el.value}>
                  {el.name}
                </option>
              );
            })}
        </Select>
      </TextFieldFieldset>
    );
  }
);

export default SelectBox;

const Select = styled.select<SelectProps>`
  //layout
  width: ${(props) => props.selectWidth};

  ${(props) =>
    props.selectSize === "lg"
      ? css`
          padding: 10px 8px;
        `
      : props.selectSize === "md"
        ? css`
            padding: 8px 6px;
          `
        : props.selectSize === "sm"
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
