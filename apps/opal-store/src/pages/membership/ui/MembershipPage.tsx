import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";

import Table from "@/shared/ui/table/ui/Table";
import TableBody from "@/shared/ui/table/ui/TableBody";
import { HeaderCell, TableHeader } from "@/shared/ui/table/ui/TableHeader";
import NonBtnModal from "@/shared/ui/modal/ui/NonBtnModal";
import useModal from "@/shared/ui/modal/model/useModal";

import Button from "@/shared/styles/ui/Button";
// import Path from "@/shared/config/path";

type ModalText = "create" | "modify";

const TABLE_INFO = {
  no: "10%",
  name: "20%",
  term: "10%",
  birthday: "20%",
  shell: "20%",
  state: "20%",
};

const MembershipPage = () => {
  const { isOpen, openModal, closeModal } = useModal<ModalText>();

  const handleClose = () => closeModal("create");

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
            <HeaderCell width={TABLE_INFO.term}>{"기수"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.name}>{"이름"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.birthday}>{"생일"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.shell}>{"셀"}</HeaderCell>
            <HeaderCell width={TABLE_INFO.state}>{"상태"}</HeaderCell>
          </TableHeader>
          <TableBody>
            {/* {data && data.length !== 0 ? (
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
            )} */}
          </TableBody>
        </Table>
      </PageBody>
      <NonBtnModal
        isOpen={isOpen("create")}
        width="500px"
        header={"수련회 개설"}
        body={<></>}
        onClose={handleClose}
      />
    </Wrapper>
  );
};

export default MembershipPage;

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
