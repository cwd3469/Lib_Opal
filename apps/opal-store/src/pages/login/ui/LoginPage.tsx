import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

import loginBg1 from "../assets/login-bg1.jpg";

import { LOGIN_PAGE_TEXT } from "../config/loginPageText";
import { loginErrorScheme } from "../config/loginErrorScheme";

import Button from "../../../shared/styles/ui/Button";
import TextFieldLabel from "../../../widget/textField/ui/TextFieldLabel";
import PasswordTextField from "../../../widget/textField/ui/PasswordTextField";

type LoginInfo = {
  memberId: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>({
    resolver: yupResolver(loginErrorScheme),
  });

  const onSubmit: SubmitHandler<LoginInfo> = (data) => {
    console.log(data);
  };

  return (
    <Warper>
      <Side>
        <TextFieldLabel
          label={LOGIN_PAGE_TEXT.ID_INPUT_LABEL}
          {...register("memberId", { required: true })}
          placeholder={LOGIN_PAGE_TEXT.ID_PLACEHOLDER}
          state="error"
          message={errors.memberId?.message}
        />
        <PasswordTextField
          label={LOGIN_PAGE_TEXT.PASSWORD_INPUT_LABEL}
          {...register("password", { required: true })}
          placeholder={LOGIN_PAGE_TEXT.PASSWORD_PLACEHOLDER}
          state="error"
          message={errors.password?.message}
          type="password"
        />
        <Button onClick={handleSubmit(onSubmit)} size="sm" palette="secondary">
          로그인
        </Button>
      </Side>
      <Side>
        <ImageBox>
          <img src={loginBg1} alt="loginBg" />
        </ImageBox>
      </Side>
    </Warper>
  );
};

export default LoginPage;

const Warper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  width: 750px;
  max-height: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;

  background-color: #fff;
  border: 1px solid #999;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 50%;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
`;
