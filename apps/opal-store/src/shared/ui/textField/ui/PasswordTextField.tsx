import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { DefaultTextField, DefaultTextFieldProps } from "./DefaultTextField";
import icViewOff from "../asset/icViewOff.svg";
import icViewOn from "../asset/icViewOn.svg";
import TextFieldFieldset, { TextFieldFieldsetProps } from "./TextFieldFieldset";

type Props = InputHTMLAttributes<HTMLInputElement> &
  DefaultTextFieldProps &
  TextFieldFieldsetProps;

const PasswordTextField = forwardRef<HTMLInputElement, Props>(
  ({ label, state, message, ...props }, ref) => {
    const [view, setView] = useState<boolean>(false);

    return (
      <TextFieldFieldset label={label} state={state} message={message}>
        <Warper>
          <DefaultTextField
            ref={ref}
            {...props}
            inputWidth={"100%"}
            type={view ? "text" : "password"}
          />
          <ViewPasswordButton
            type="button"
            onClick={() => setView((prev) => !prev)}
          >
            <Checkmark src={view ? icViewOff : icViewOn} />
          </ViewPasswordButton>
        </Warper>
      </TextFieldFieldset>
    );
  }
);

export default PasswordTextField;

const Warper = styled.div`
  position: relative;
`;

const ViewPasswordButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  border: 0px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Checkmark = styled.img`
  width: 100%;
`;
