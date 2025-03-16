import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

import TextFieldLabel from "@/shared/ui/textField/ui/TextFieldLabel";
import PasswordTextField from "@/shared/ui/textField/ui/PasswordTextField";
import SelectBox from "@/shared/ui/dropDownBox/ui/SelectBox";

import { useAlert } from "@/shared/ui/confirm/model/useAlert";
import Button from "@/shared/styles/ui/Button";
import formatOption from "@/shared/func/formatOption";

import {
  SIGNUP_FAIL_MSG,
  SIGNUP_PAGE_TEXT,
  SIGNUP_SUCCESS_MSG,
} from "../config/signupPageText";
import { signupErrorScheme } from "../config/signupErrorScheme";
import useGetChurchDoc from "../model/useGetChurchDoc";
import useSignUp from "../model/useSignUp";
import { ChurchGetReq, SignUpInputInfo } from "../interface";

const LoginPage = () => {
  const { data: allChurchList } = useGetChurchDoc();

  const signUpMutation = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputInfo>({
    resolver: yupResolver(signupErrorScheme),
  });

  const { showAlert } = useAlert();

  const onSubmit: SubmitHandler<SignUpInputInfo> = (inputInfo) => {
    if (errors) return;
    signUpMutation.mutate(
      {
        email: inputInfo.email,
        password: inputInfo.password,
      },
      {
        onSuccess: () => {
          showAlert({
            type: "success",
            title: SIGNUP_SUCCESS_MSG.TITLE,
            content: SIGNUP_SUCCESS_MSG.CONTENT,
          });
        },
        onError: (error: Error) => {
          showAlert({
            type: "error",
            title: SIGNUP_FAIL_MSG.TITLE,
            content: error.message,
          });
        },
      }
    );
  };

  return (
    <Warper>
      <WelcomeText>{SIGNUP_PAGE_TEXT.WELCOME_TEXT}</WelcomeText>
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <TextFieldLabel
          label={SIGNUP_PAGE_TEXT.ID_INPUT_LABEL}
          {...register("email", { required: true })}
          placeholder={SIGNUP_PAGE_TEXT.ID_PLACEHOLDER}
          inputSize="md"
          state="error"
          message={errors.email?.message}
        />
        <PasswordTextField
          label={SIGNUP_PAGE_TEXT.PASSWORD_INPUT_LABEL}
          {...register("password", { required: true })}
          placeholder={SIGNUP_PAGE_TEXT.PASSWORD_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={errors.password?.message}
        />
        <PasswordTextField
          label={SIGNUP_PAGE_TEXT.PASSWORD_RECEHCK_INPUT_LABEL}
          {...register("passwordReCheck", { required: true })}
          placeholder={SIGNUP_PAGE_TEXT.PASSWORD_RECEHCK_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={errors.passwordReCheck?.message}
        />
        <SelectBox
          label={SIGNUP_PAGE_TEXT.CHURCH_INPUT_LABEL}
          {...register("churchUid", { required: true })}
          selectSize="md"
          state="error"
          message={errors.churchUid?.message}
          options={formatOption<ChurchGetReq>({
            list: allChurchList,
            name: "name",
            value: "id",
          })}
        />
        <Button type="submit" size="md" palette="secondary">
          {SIGNUP_PAGE_TEXT.SIGNUP_BTN}
        </Button>
      </SignupForm>
    </Warper>
  );
};

export default LoginPage;

const Warper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 450px;
  max-height: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.palette.white[100]};
  border: 1px solid ${(props) => props.theme.palette.gray[500]};

  ${(props) => props.theme.shadow.BOX_SHADOW_BASE}
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

const WelcomeText = styled.h3`
  ${(props) => props.theme.typography.L1_Label_20_B}
  text-align: center;
`;
