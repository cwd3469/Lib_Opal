import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { useAlert } from "@/shared/ui/confirm/model/useAlert";
import useModal from "@/shared/ui/modal/model/useModal";
import NonBtnModal from "@/shared/ui/modal/ui/NonBtnModal";
import Table from "@/shared/ui/table/ui/Table";
import TableBodyEmpty from "@/shared/ui/table/ui/TableBodyEmpty";
import { HeaderCell, TableHeader } from "@/shared/ui/table/ui/TableHeader";
import TableBody from "@/shared/ui/table/ui/TableBody";
import { RowCell, TableRow } from "@/shared/ui/table/ui/TableRow";
import Button from "@/shared/styles/ui/Button";
import Path from "@/shared/config/path";

import RetreatInputForm from "./RetreatInputForm";
import useGetRetreatDoc from "../model/useGetRetreatDoc";
import useCreateRetreatDoc from "../model/useCreateRetreatDoc";
import { RetreatInputFormInfo } from "../interface/data";

import {
  RETREAT_CREATE_FAIL_MSG,
  RETREAT_CREATE_MODAL_TEXT,
  RETREAT_CREATE_SUCCESS_MSG,
  RETREAT_PAGE_TABLE_INFO,
  RETREAT_PAGE_TABLE_TEXT,
} from "../config/constant";

type ModalText = "create" | "modify";

const RetreatPage = () => {
  const navigate = useNavigate();

  const { isOpen, openModal, closeModal } = useModal<ModalText>();

  const { showAlert } = useAlert();

  const { data } = useGetRetreatDoc();

  const createRetreatDocMutate = useCreateRetreatDoc();

  const handleRowClick = (id: string) => {
    navigate(`${Path.RETREAT_DETAIL}/${id}`);
  };

  const handleClose = () => closeModal("create");

  const handleRetreatCreate = (value: RetreatInputFormInfo) => {
    createRetreatDocMutate.mutate(value, {
      onSuccess: () => {
        showAlert({
          type: "success",
          title: RETREAT_CREATE_SUCCESS_MSG.TITLE,
          content: RETREAT_CREATE_SUCCESS_MSG.CONTENT,
        });
        handleClose();
      },
      onError(error) {
        showAlert({
          type: "error",
          title: RETREAT_CREATE_FAIL_MSG.TITLE,
          content: error.message,
        });
      },
    });
  };

  return (
    <Wrapper>
      <PageHeader>
        <Button
          size={"sm"}
          variant="outlined"
          palette="gray"
          onClick={() => openModal("create")}
        >
          {RETREAT_CREATE_MODAL_TEXT.CREATE_MODAL_BUTTON}
        </Button>
      </PageHeader>
      <PageBody>
        <Table>
          <TableHeader>
            <HeaderCell width={RETREAT_PAGE_TABLE_INFO[0].width}>
              {RETREAT_PAGE_TABLE_INFO[0].title}
            </HeaderCell>
            <HeaderCell width={RETREAT_PAGE_TABLE_INFO[1].width}>
              {RETREAT_PAGE_TABLE_INFO[1].title}
            </HeaderCell>
            <HeaderCell width={RETREAT_PAGE_TABLE_INFO[2].width}>
              {RETREAT_PAGE_TABLE_INFO[2].title}
            </HeaderCell>
            <HeaderCell width={RETREAT_PAGE_TABLE_INFO[3].width}>
              {RETREAT_PAGE_TABLE_INFO[3].title}
            </HeaderCell>
            <HeaderCell width={RETREAT_PAGE_TABLE_INFO[4].width}>
              {RETREAT_PAGE_TABLE_INFO[4].title}
            </HeaderCell>
          </TableHeader>
          <TableBody>
            {data && data.length !== 0 ? (
              data.map((inv, index) => (
                <TableRow
                  key={inv.id}
                  onClick={() => handleRowClick(inv.id)}
                  hasPointer
                >
                  <RowCell width={RETREAT_PAGE_TABLE_INFO[0].width}>
                    {index + 1}
                  </RowCell>
                  <RowCell width={RETREAT_PAGE_TABLE_INFO[1].width}>
                    <label>{inv.retreatTitle}</label>
                  </RowCell>
                  <RowCell width={RETREAT_PAGE_TABLE_INFO[2].width}>
                    <label>{`${inv.retreatStartAt} - ${inv.retreatEndAt}`}</label>
                  </RowCell>
                  <RowCell width={RETREAT_PAGE_TABLE_INFO[3].width}>
                    <label>{inv.retreatPlace}</label>
                  </RowCell>
                  <RowCell width={RETREAT_PAGE_TABLE_INFO[4].width}>
                    <label>{inv.retreatInstructor}</label>
                  </RowCell>
                </TableRow>
              ))
            ) : (
              <TableBodyEmpty>
                {RETREAT_PAGE_TABLE_TEXT.NONE_DATA}
              </TableBodyEmpty>
            )}
          </TableBody>
        </Table>
      </PageBody>
      <NonBtnModal
        isOpen={isOpen("create")}
        width={RETREAT_CREATE_MODAL_TEXT.WIDTH}
        header={RETREAT_CREATE_MODAL_TEXT.CREATE_MODAL_HEADER}
        body={
          <RetreatInputForm
            onClose={handleClose}
            onSubmit={handleRetreatCreate}
            rightBtnName={RETREAT_CREATE_MODAL_TEXT.CREATE_MODAL_RIGHT_BTN}
          />
        }
        onClose={handleClose}
      />
    </Wrapper>
  );
};

export default RetreatPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gap.lg};
  padding: ${(props) => props.theme.padding.lg};

  background-color: ${(props) => props.theme.palette.white[100]};
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: end;

  padding: ${(props) => props.theme.padding.md};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.palette.gray[100]};
`;

const PageBody = styled.div`
  padding: ${(props) => props.theme.padding.md};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.palette.gray[100]};
`;
