import * as yup from "yup";

export const loginErrorScheme = yup
  .object({
    memberId: yup.string().required("아이디를 입력해 주세요!"),
    password: yup.string().required("비밀번호를 입력해 주세요!"),
  })
  .required();
