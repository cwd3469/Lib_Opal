import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";

import TextFieldLabel from "../../../widget/textField/ui/TextFieldLabel";
import PostSelect from "../../../widget/postSelect/PostSelect";
import { ModalFooter } from "../../../widget/modal/ui/ModalUiKit";

import Button from "../../../shared/styles/ui/Button";

import { retreatCreateErrorScheme } from "../config/retreatCreateErrorScheme";
import { RetreatInputFormInfo } from "../interface/data";
import useCreateRetreatDoc from "../model/useCreateRetreatDoc";
import DatePickerFieldLabel from "../../../widget/datePicker/ui/DatePickerFieldLabel";
import dayjs from "dayjs";

type Props = {
  onClose: () => void;
  initData?: RetreatInputFormInfo;
};

type RetreatInputFormInfoKey = keyof RetreatInputFormInfo;

const RetreatInputForm = ({ onClose, initData }: Props) => {
  const createRetreatDocMutate = useCreateRetreatDoc();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RetreatInputFormInfo>({
    resolver: yupResolver(retreatCreateErrorScheme),
    defaultValues: initData,
  });

  const valuePlace = watch("retreatPlace");

  const handlePostSelect = (value: string) => {
    setValue("retreatPlace", value);
  };

  const handleRetreatCreate = handleSubmit((value) => {
    createRetreatDocMutate.mutate(value, {
      onSuccess: onClose,
    });
  });

  const formatRetreatDate = (dateString: RetreatInputFormInfoKey): Date => {
    const data = watch(dateString) as string;
    return dayjs(data).toDate();
  };

  const handleRetreatDate = (date: Date, key: RetreatInputFormInfoKey) => {
    const formatAt = dayjs(date).format("YYYY-MM-DD");
    setValue(key, formatAt);
  };

  return (
    <BasicForm onSubmit={handleRetreatCreate}>
      <TextFieldLabel
        {...register("retreatTitle")}
        label="수련회 제목"
        inputSize="sm"
        isRequire
        message={errors.retreatTitle?.message}
        state="error"
      />
      <TextFieldLabel
        {...register("retreatContents")}
        label="수련회 주제"
        inputSize="sm"
        isRequire
        message={errors.retreatContents?.message}
        state="error"
      />
      <DatePickerFieldLabel
        selected={formatRetreatDate("retreatStartAt")}
        setStartDate={(date) => {
          if (date) handleRetreatDate(date, "retreatStartAt");
        }}
        label="수련회 시작날짜"
        isRequire
        message={errors.retreatStartAt?.message}
        state="error"
      />
      <DatePickerFieldLabel
        selected={formatRetreatDate("retreatEndAt")}
        setStartDate={(date) => {
          if (date) handleRetreatDate(date, "retreatEndAt");
        }}
        label="수련회 종료날짜"
        isRequire
        message={errors.retreatEndAt?.message}
        state="error"
      />
      <PostSelect
        label="수련회 장소"
        onSelect={handlePostSelect}
        value={valuePlace}
        isRequire
        message={errors.retreatPlace?.message}
        state="error"
      />
      <TextFieldLabel
        {...register("retreatInstructor")}
        label="초청 강사"
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorEmail")}
        label="초청 강사 이메일"
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorMinistry")}
        label="초청 강사 사역지"
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorPhoneNumber")}
        label="초청 강사 연락처"
        inputSize="sm"
      />
      <ModalFooter>
        <Button
          onClick={onClose}
          size={"sm"}
          palette={"black"}
          variant={"outlined"}
          type="button"
        >
          취소
        </Button>
        <Button size={"sm"} palette={"gray"} variant={"contained"}>
          확인
        </Button>
      </ModalFooter>
    </BasicForm>
  );
};

export default RetreatInputForm;

const BasicForm = styled.form`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  align-content: stretch;
  gap: 20px;
`;
