import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

import PostSelect from "@/widget/postSelect/PostSelect";
import ImageUpload from "@/widget/imageUpload/ui/ImageUpload";
import TextFieldLabel from "@/shared/ui/textField/ui/TextFieldLabel";
import PasswordTextField from "@/shared/ui/textField/ui/PasswordTextField";
import Button from "@/shared/styles/ui/Button";
import useSignUp from "@/pages/signUp/model/useSignUp";

import useChurchCreate from "../model/useChurchCreate";
import useChurchSetUserId from "../model/useChurchSetUserId";
import { CHURCH_CREATE_PAGE_CONTEXT } from "../config/context";
import churchErrorScheme from "../config/churchErrorScheme";
import { ChurchCreateInputInfo } from "../interface";
import { useAlert } from "@/shared/ui/confirm/model/useAlert";

const ChurchCreatePage = () => {
  const { showAlert } = useAlert();

  const createChurchMutation = useChurchCreate();

  const addAdminSignupMutation = useSignUp();

  const updateChurchAdminMutation = useChurchSetUserId();

  const churchForm = useForm<ChurchCreateInputInfo>({
    resolver: yupResolver(churchErrorScheme),
  });

  const valuePlace = churchForm.watch("space");

  const valueLogo = churchForm.watch("logo") ?? null;

  const handlePostSelect = (value: string) => {
    churchForm.setValue("space", value);
  };

  const handleLogoUpload = (url: string) => {
    churchForm.setValue("logo", url);
  };

  const handleCreateChurchSubmit = churchForm.handleSubmit((inputInfo) => {
    const { name, space, logo, adminName, term, email, password } = inputInfo;

    createChurchMutation.mutate(
      {
        name,
        space,
        logo: logo ?? "",
      },
      {
        onSuccess(churchData) {
          addAdminSignupMutation.mutate(
            {
              email,
              password,
              term,
              name: adminName,
            },
            {
              onSuccess(userData) {
                updateChurchAdminMutation.mutate(
                  {
                    churchId: churchData.id,
                    userId: userData.uid,
                    userData: {
                      name: adminName,
                      term,
                      email,
                    },
                  },
                  {
                    onSuccess() {
                      showAlert({
                        type: "success",
                        title: "교회 관리자 등록 성공",
                        content: "교회 관리자 등록 성공했습니다.",
                        rightBtnOnClick: () => window.close(),
                      });
                    },
                    onError(error: Error) {
                      showAlert({
                        type: "error",
                        title: "교회 관리자 등록 오류",
                        content: error.message,
                      });
                    },
                  }
                );
              },
              onError(error: Error) {
                showAlert({
                  type: "error",
                  title: "교회 관리자 가입 오류",
                  content: error.message,
                });
              },
            }
          );
        },
        onError(error: Error) {
          showAlert({
            type: "error",
            title: "교회 등록 오류",
            content: error.message,
          });
        },
      }
    );

    window.close();
  });

  return (
    <Warper>
      <WelcomeText>{CHURCH_CREATE_PAGE_CONTEXT.WELCOME_TEXT}</WelcomeText>
      <SignupForm onSubmit={handleCreateChurchSubmit}>
        <TextFieldLabel
          label={CHURCH_CREATE_PAGE_CONTEXT.NAME_INPUT_LABEL}
          {...churchForm.register("name", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.NAME_PLACEHOLDER}
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.name?.message}
        />
        <PostSelect
          value={valuePlace}
          onSelect={handlePostSelect}
          label={CHURCH_CREATE_PAGE_CONTEXT.SPACE_INPUT_LABEL}
          placeholderText={CHURCH_CREATE_PAGE_CONTEXT.SPACE_PLACEHOLDER}
          message={churchForm.formState.errors.space?.message}
          state="error"
          isRequire
        />
        <ImageUpload
          label={CHURCH_CREATE_PAGE_CONTEXT.LOGO_INPUT_LABEL}
          state="error"
          uploadUrl={valueLogo}
          onUpload={handleLogoUpload}
        />
        <TextFieldLabel
          label={"관리자 이름"}
          {...churchForm.register("adminName", { required: true })}
          placeholder={"관리자 이름를 입력해주세요."}
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.name?.message}
        />
        <TextFieldLabel
          label={"관리자 기수"}
          {...churchForm.register("term", { required: true })}
          placeholder={"관리자 기수를 입력해주세요."}
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.term?.message}
          type="number"
        />
        <TextFieldLabel
          label={CHURCH_CREATE_PAGE_CONTEXT.ID_INPUT_LABEL}
          {...churchForm.register("email", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.ID_PLACEHOLDER}
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.email?.message}
        />
        <PasswordTextField
          label={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_INPUT_LABEL}
          {...churchForm.register("password", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.password?.message}
        />
        <PasswordTextField
          label={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_RECEHCK_INPUT_LABEL}
          {...churchForm.register("passwordReCheck", { required: true })}
          placeholder={CHURCH_CREATE_PAGE_CONTEXT.PASSWORD_RECEHCK_PLACEHOLDER}
          type="password"
          inputSize="md"
          state="error"
          message={churchForm.formState.errors.passwordReCheck?.message}
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
