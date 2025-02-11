import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type JoinInfo = {
  userId: string;
  passWord: string;
  passWordCheck: string;
};

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinInfo>({
    resolver: yupResolver(loginErrorScheme),
  });
  return <div></div>;
};

export default JoinForm;
