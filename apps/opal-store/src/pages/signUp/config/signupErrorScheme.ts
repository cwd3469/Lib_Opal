import * as yup from "yup";

export const signupErrorScheme = yup
  .object({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다.")
      .required("이메일은 필수 입력 항목입니다."),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .matches(/[a-z]/, "비밀번호에 최소 하나의 소문자가 포함되어야 합니다.")
      .matches(/[0-9]/, "비밀번호에 최소 하나의 숫자가 포함되어야 합니다.")
      .matches(/[\W_]/, "비밀번호에 최소 하나의 특수문자가 포함되어야 합니다.")
      .required("비밀번호는 필수 입력 항목입니다."),
    passwordReCheck: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 확인은 필수 입력 항목입니다."),
    churchUid: yup.string().required("교회 항목은 필수 입력 항목입니다."),
    name: yup.string().required("교회 항목은 필수 입력 항목입니다."),
    term: yup.number().required("기수는 필수 입력 항목입니다. "),
  })
  .required();
