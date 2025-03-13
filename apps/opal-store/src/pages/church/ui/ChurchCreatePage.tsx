import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

import TextFieldLabel from "@/shared/ui/textField/ui/TextFieldLabel";
import PasswordTextField from "@/shared/ui/textField/ui/PasswordTextField";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";

import Button from "@/shared/styles/ui/Button";
import churchErrorScheme from "../config/churchErrorScheme";

import {
  CHURCH_CREATE_FAIL_MSG,
  CHURCH_CREATE_PAGE_CONTEXT,
  CHURCH_CREATE_SUCCESS_MSG,
} from "../config/context";
import { ChurchCreateInputInfo } from "../interface";
import PostSelect from "@/widget/postSelect/PostSelect";
import useChurchCreate from "../model/useChurchCreate";
import ImageUpload from "@/widget/imageUpload/ui/ImageUpload";

const ChurchCreatePage = () => {
  const createMutaionChurch = useChurchCreate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ChurchCreateInputInfo>({
    resolver: yupResolver(churchErrorScheme),
  });

  const { showAlert } = useAlert();

  const valuePlace = watch("space");

  const handlePostSelect = (value: string) => {
    setValue("space", value);
  };

  const onSubmit: SubmitHandler<ChurchCreateInputInfo> = (inputInfo) => {
    createMutaionChurch.mutate(
      { dto: inputInfo },
      {
        onSuccess: () => {
          showAlert({
            type: "success",
            title: CHURCH_CREATE_SUCCESS_MSG.TITLE,
            content: CHURCH_CREATE_SUCCESS_MSG.CONTENT,
          });
        },
        onError: (error: Error) => {
          showAlert({
            type: "error",
            title: CHURCH_CREATE_FAIL_MSG.TITLE,
            content: error.message,
          });
        },
      }
    );
  };

  return (
    <Warper>
      <WelcomeText>{CHURCH_CREATE_PAGE_CONTEXT.WELCOME_TEXT}</WelcomeText>
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <TextFieldLabel
          label={CHURCH_CREATE_PAGE_CONTEXT.NAME_INPUT_LABEL}
          {...register("name", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.NAME_PLACEHOLDER}
          inputSize="md"
          state="error"
          message={errors.email?.message}
        />
        <PostSelect
          value={valuePlace}
          onSelect={handlePostSelect}
          label={CHURCH_CREATE_PAGE_CONTEXT.SPACE_INPUT_LABEL}
          placeholderText={CHURCH_CREATE_PAGE_CONTEXT.SPACE_PLACEHOLDER}
          message={errors.space?.message}
          state="error"
          isRequire
        />
        <ImageUpload
          label={CHURCH_CREATE_PAGE_CONTEXT.LOGO_INPUT_LABEL}
          state="error"
          message={errors.email?.message}
        />
        <TextFieldLabel
          label={CHURCH_CREATE_PAGE_CONTEXT.ID_INPUT_LABEL}
          {...register("email", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.ID_PLACEHOLDER}
          inputSize="md"
          state="error"
          message={errors.email?.message}
        />
        <PasswordTextField
          label={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_INPUT_LABEL}
          {...register("password", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={errors.password?.message}
        />
        <PasswordTextField
          label={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_RECEHCK_INPUT_LABEL}
          {...register("passwordReCheck", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_RECEHCK_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={errors.passwordReCheck?.message}
        />

        <Button type="submit" size="md" palette="secondary">
          {CHURCH_CREATE_PAGE_CONTEXT.FINISH_BTN}
        </Button>
      </SignupForm>
    </Warper>
  );
};

export default ChurchCreatePage;

const Warper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 450px;
  max-height: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;

  background-color: ${(props) => props.theme.palette.white[100]};
  border: 1px solid ${(props) => props.theme.palette.gray[500]};

  ${(props) => props.theme.shadow.BOX_SHADOW_BASE}
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

const WelcomeText = styled.h3`
  ${(props) => props.theme.typography.L1_Label_20_B}
  text-align: center;
`;
