import styled from "@emotion/styled";

import useModal from "../../../widget/modal/model/useModal";
import Button from "../../../shared/styles/ui/Button";
import NonBtnModal from "../../../widget/modal/ui/NonBtnModal";
import RetreatCreateForm from "./RetreatCreateForm";

type ModalText = "create" | "modify";

const RetreatPage = () => {
  const { isOpen, openModal, closeModal } = useModal<ModalText>();

  const handleClose = () => closeModal("create");
  return (
    <Wrapper>
      RetreatPage{" "}
      <Button
        size={"sm"}
        variant="outlined"
        palette="gray"
        onClick={() => openModal("create")}
      >
        수련회 개설
      </Button>
      <NonBtnModal
        isOpen={isOpen("create")}
        width="500px"
        header={"수련회 개설"}
        body={<RetreatCreateForm onClose={handleClose} />}
        onClose={handleClose}
      />
    </Wrapper>
  );
};

export default RetreatPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => props.theme.padding.lg};
  background-color: ${(props) => props.theme.palette.white[100]};
`;
