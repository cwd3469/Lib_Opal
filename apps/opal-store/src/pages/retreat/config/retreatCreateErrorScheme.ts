import * as yup from "yup";

export const retreatCreateErrorScheme = yup
  .object({
    retreatTitle: yup.string().required("수련회 주제를 입력해 주세요!"),
    retreatPlace: yup.string().required("장소를 입력해 주세요!"),
    retreatInstructor: yup.string().required("초청 강사를 입력해 주세요!"),
    retreatStartAt: yup.string().required("시작날짜를 입력해 주세요!"),
    retreatEndAt: yup.string().required("날짜를 입력해 주세요!"),
  })
  .required();
