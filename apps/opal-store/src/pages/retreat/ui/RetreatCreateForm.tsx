import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";

import TextFieldLabel from "../../../widget/textField/ui/TextFieldLabel";
import PostSelect from "../../../widget/postSelect/PostSelect";
import { ModalFooter } from "../../../widget/modal/ui/ModalUiKit";

import Button from "../../../shared/styles/ui/Button";

import { retreatCreateErrorScheme } from "../config/retreatCreateErrorScheme";
import { RetreatCreateFormInfo } from "../interface/data";
import useCreateRetreatDoc from "../model/useCreateRetreatDoc";

type Props = {
  onClose: () => void;
};

const RetreatCreateForm = ({ onClose }: Props) => {
  const createRetreatDocMutate = useCreateRetreatDoc();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RetreatCreateFormInfo>({
    resolver: yupResolver(retreatCreateErrorScheme),
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

  return (
    <BasicForm onSubmit={handleRetreatCreate}>
      <TextFieldLabel
        {...register("retreatTitle")}
        label="수련회 주제"
        inputSize="sm"
        isRequire
        message={errors.retreatTitle?.message}
        state="error"
      />
      <TextFieldLabel
        {...register("retreatContents")}
        label="부주제"
        inputSize="sm"
      />

      <TextFieldLabel
        {...register("retreatStartAt")}
        label="수련회 시작날짜"
        inputSize="sm"
        type="date"
        isRequire
        message={errors.retreatStartAt?.message}
        state="error"
      />
      <TextFieldLabel
        {...register("retreatEndAt")}
        label="수련회 종료날짜"
        inputSize="sm"
        type="date"
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
        isRequire
        message={errors.retreatInstructor?.message}
        state="error"
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

export default RetreatCreateForm;

const BasicForm = styled.form`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  align-content: stretch;
  gap: 20px;
`;
