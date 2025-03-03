import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";

import TextFieldLabel from "@/widget/textField/ui/TextFieldLabel";
import PostSelect from "@/widget/postSelect/PostSelect";
import { ModalFooter } from "@/widget/modal/ui/ModalUiKit";

import Button from "@/shared/styles/ui/Button";

import { retreatCreateErrorScheme } from "../config/retreatCreateErrorScheme";
import { RetreatInputFormInfo } from "../interface/data";
import DatePickerFieldLabel from "@/widget/datePicker/ui/DatePickerFieldLabel";
import { RETREAT_INPUT_FORM } from "../config/constant";

type Props = {
  rightBtnName: string;
  initData?: RetreatInputFormInfo;
  onClose: () => void;
  onSubmit: (value: RetreatInputFormInfo) => void;
};

type RetreatInputFormInfoKey = keyof RetreatInputFormInfo;

const RetreatInputForm = ({
  onClose,
  onSubmit,
  rightBtnName,
  initData,
}: Props) => {
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

  const formatRetreatDate = (dateString: RetreatInputFormInfoKey): Date => {
    const data = watch(dateString) as string;
    return dayjs(data).toDate();
  };

  const handleRetreatDate = (date: Date, key: RetreatInputFormInfoKey) => {
    const formatAt = dayjs(date).format("YYYY-MM-DD");
    setValue(key, formatAt);
  };

  return (
    <BasicForm onSubmit={handleSubmit(onSubmit)}>
      <TextFieldLabel
        {...register("retreatTitle")}
        label={RETREAT_INPUT_FORM.RETREAT_TITLE}
        placeholder={RETREAT_INPUT_FORM.RETREAT_TITLE_PLACEHOLDER}
        message={errors.retreatTitle?.message}
        state="error"
        inputSize="sm"
        isRequire
      />
      <TextFieldLabel
        {...register("retreatContents")}
        label={RETREAT_INPUT_FORM.RETREAT_CONTENTS}
        placeholder={RETREAT_INPUT_FORM.RETREAT_CONTENTS_PLACEHOLDER}
        message={errors.retreatContents?.message}
        state="error"
        inputSize="sm"
        isRequire
      />
      <DatePickerFieldLabel
        selected={formatRetreatDate("retreatStartAt")}
        setStartDate={(date) => {
          if (date) handleRetreatDate(date, "retreatStartAt");
        }}
        label={RETREAT_INPUT_FORM.RETREAT_START_AT}
        placeholderText={RETREAT_INPUT_FORM.RETREAT_START_AT_PLACEHOLDER}
        message={errors.retreatStartAt?.message}
        state="error"
        isRequire
      />
      <DatePickerFieldLabel
        selected={formatRetreatDate("retreatEndAt")}
        setStartDate={(date) => {
          if (date) handleRetreatDate(date, "retreatEndAt");
        }}
        label={RETREAT_INPUT_FORM.RETREAT_END_AT}
        placeholderText={RETREAT_INPUT_FORM.RETREAT_END_AT_PLACEHOLDER}
        message={errors.retreatEndAt?.message}
        state="error"
        isRequire
      />
      <PostSelect
        value={valuePlace}
        onSelect={handlePostSelect}
        label={RETREAT_INPUT_FORM.RETREAT_PLACE}
        placeholderText={RETREAT_INPUT_FORM.RETREAT_PLACE_PLACEHOLDER}
        message={errors.retreatPlace?.message}
        state="error"
        isRequire
      />
      <TextFieldLabel
        {...register("retreatInstructor")}
        label={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR}
        placeholder={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_PLACEHOLDER}
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorEmail")}
        label={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_EMAIL}
        placeholder={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_EMAIL_PLACEHOLDER}
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorMinistry")}
        label={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_MINISTRY}
        placeholder={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_MINISTRY_PLACEHOLDER}
        inputSize="sm"
      />
      <TextFieldLabel
        {...register("retreatInstructorPhoneNumber")}
        label={RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_PHONE_NUMBER}
        placeholder={
          RETREAT_INPUT_FORM.RETREAT_INSTRUCTOR_PHONE_NUMBER_PLACEHOLDER
        }
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
          {RETREAT_INPUT_FORM.CANCEL}
        </Button>
        <Button size={"sm"} palette={"gray"} variant={"contained"}>
          {rightBtnName}
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
