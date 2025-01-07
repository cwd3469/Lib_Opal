import { SubmitHandler, useForm } from "react-hook-form";
import styled from "@emotion/styled";

import loginBg1 from "../assets/login-bg1.jpg";

type LoginInfo = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>();

  const onSubmit: SubmitHandler<LoginInfo> = (data) => {
    console.log(data);
  };

  return (
    <Warper>
      <Side>
        <input {...register("id", { required: true })} />
        <input {...register("password", { required: true })} />
        {errors.id && <span>This field is required</span>}
        <button onClick={handleSubmit(onSubmit)}>로그인</button>
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
  padding: 10px;
  border-radius: 5px;

  background-color: #fff;
  border: 1px solid #999;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
`;
