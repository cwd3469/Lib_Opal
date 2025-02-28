import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import useModal from "@/widget/modal/model/useModal";
import NonBtnModal from "@/widget/modal/ui/NonBtnModal";
import Table from "@/widget/table/ui/Table";
import TableBodyEmpty from "@/widget/table/ui/TableBodyEmpty";
import { HeaderCell, TableHeader } from "@/widget/table/ui/TableHeader";
import TableBody from "@/widget/table/ui/TableBody";
import { RowCell, TableRow } from "@/widget/table/ui/TableRow";
import Button from "@/shared/styles/ui/Button";
import Path from "@/shared/config/path";

import RetreatInputForm from "./RetreatInputForm";
import useGetRetreatDoc from "../model/useGetRetreatDoc";
import useCreateRetreatDoc from "../model/useCreateRetreatDoc";
import { RetreatInputFormInfo } from "../interface/data";

type ModalText = "create" | "modify";

const TABLE_INFO = {
  no: "10%",
  title: "22.5%",
  date: "22.5%",
  place: "22.5%",
  instructor: "22.5%",
};

const RetreatPage = () => {
  const navigate = useNavigate();

  const { isOpen, openModal, closeModal } = useModal<ModalText>();

  const { data } = useGetRetreatDoc();

  const createRetreatDocMutate = useCreateRetreatDoc();

  const handleRowClick = (id: string) => {
    navigate(`${Path.RETREAT_DETAIL}/${id}`);
  };

  const handleClose = () => closeModal("create");

  const handleRetreatCreate = (value: RetreatInputFormInfo) => {
    createRetreatDocMutate.mutate(value, {
      onSuccess: handleClose,
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
          수련회 개설
        </Button>
      </PageHeader>
      <PageBody>
        <Table>
          <TableHeader>
            <HeaderCell width={TABLE_INFO.no}>{"No"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.title}>{"주제"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.date}>{"날짜"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.place}>{"장소"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.instructor}>{"초청 강사"}</HeaderCell>
          </TableHeader>
          <TableBody>
            {data && data.length !== 0 ? (
              data.map((inv, index) => (
                <TableRow
                  key={inv.id}
                  onClick={() => handleRowClick(inv.id)}
                  hasPointer
                >
                  <RowCell width={TABLE_INFO.no}>{index + 1}</RowCell>
                  <RowCell width={TABLE_INFO.title}>
                    <label>{inv.retreatTitle}</label>
                  </RowCell>
                  <RowCell width={TABLE_INFO.date}>
                    <label>{`${inv.retreatStartAt} - ${inv.retreatEndAt}`}</label>
                  </RowCell>
                  <RowCell width={TABLE_INFO.place}>
                    <label>{inv.retreatPlace}</label>
                  </RowCell>
                  <RowCell width={TABLE_INFO.instructor}>
                    <label>{inv.retreatInstructor}</label>
                  </RowCell>
                </TableRow>
              ))
            ) : (
              <TableBodyEmpty>검색 결과가 없습니다.</TableBodyEmpty>
            )}
          </TableBody>
        </Table>
      </PageBody>
      <NonBtnModal
        isOpen={isOpen("create")}
        width="500px"
        header={"수련회 개설"}
        body={
          <RetreatInputForm
            onClose={handleClose}
            onSubmit={handleRetreatCreate}
            rightBtnName="생성"
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
