import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import TextFieldLabel from "@/widget/textField/ui/TextFieldLabel";
import PasswordTextField from "@/widget/textField/ui/PasswordTextField";
import { useAlert } from "@/widget/confirm/model/useAlert";

import Button from "@/shared/styles/ui/Button";

import { LOGIN_PAGE_TEXT } from "../config/loginPageText";
import { loginErrorScheme } from "../config/loginErrorScheme";

type LoginInfo = {
  memberId: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>({
    resolver: yupResolver(loginErrorScheme),
  });

  const { showAlert } = useAlert();

  const onSubmit: SubmitHandler<LoginInfo> = (data) => {
    console.log(data);
    showAlert({
      title: "로그인 성공",
      content: "로그인 성공하셨습니다. \n 해당 로그인 인증합니다.",
      type: "success",
      rightBtnOnClick() {
        navigate("/main");
      },
    });
  };

  return (
    <Warper>
      <Side>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <TextFieldLabel
            label={LOGIN_PAGE_TEXT.ID_INPUT_LABEL}
            {...register("memberId", { required: true })}
            placeholder={LOGIN_PAGE_TEXT.ID_PLACEHOLDER}
            state="error"
            message={errors.memberId?.message}
            inputSize="md"
          />
          <PasswordTextField
            label={LOGIN_PAGE_TEXT.PASSWORD_INPUT_LABEL}
            {...register("password", { required: true })}
            placeholder={LOGIN_PAGE_TEXT.PASSWORD_PLACEHOLDER}
            state="error"
            message={errors.password?.message}
            type="password"
            inputSize="md"
          />
          <Button type="submit" size="md" palette="secondary">
            로그인
          </Button>
        </LoginForm>
      </Side>
      <Side>
        <ImageBox src={"/logo_opal.png"} alt="loginBg" />
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

  background-color: ${(props) => props.theme.palette.white[100]};
  border: 1px solid ${(props) => props.theme.palette.gray[500]};

  ${(props) => props.theme.shadow.BOX_SHADOW_BASE}
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ImageBox = styled.img`
  width: 100%;
`;
