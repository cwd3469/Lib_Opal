import styled from "@emotion/styled";
import dayjs from "dayjs";

import "swiper/css";

import CustomSwiper from "../../../widget/swiper/ui/CustomSwiper";

import Button from "../../../shared/styles/ui/Button";

import Table from "../../../widget/table/ui/Table";
import { HeaderCell, TableHeader } from "../../../widget/table/ui/TableHeader";
import TableBody from "../../../widget/table/ui/TableBody";

import CustomKakaoLoader from "../../../shared/map/CustomKakaoLoader";
import NonBtnModal from "../../../widget/modal/ui/NonBtnModal";
import RetreatInputForm from "../../retreat/ui/RetreatInputForm";
import useModal from "../../../widget/modal/model/useModal";
import { RetreatInputFormInfo } from "../../retreat/interface/data";

type ModalText = "delete" | "modify";

const TABLE_INFO = {
  date: "30%",
  name: "50%",
  term: "20%",
};

const MODIFY_NAME = "수련회 수정";
const DELETE_NAME = "수련회 삭제";

const data: RetreatInputFormInfo = {
  retreatImage: [
    // "https://cdn.pixabay.com/photo/2020/08/14/16/48/chocolate-5488493_1280.jpg",
    // "https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034_1280.jpg",
  ],
  retreatInstructor: "양진철",
  retreatInstructorEmail: "example@naver.com",
  retreatInstructorMinistry: "양재교회",
  retreatInstructorPhoneNumber: "010-1234-4596",
  retreatTitle: "2025년 여름 수련회",
  retreatContents: "새로운 비전 새로운 삶 (부제 : 새로운 다니엘)",
  retreatPlace: "강원도 고성군 거진읍",
  retreatStartAt: "2025-7-18",
  retreatEndAt: "2025-7-20",
};
const dDaySet = (date: string) => {
  const now = dayjs(); //현재날짜
  const dDay = dayjs(date); //D-day로 설정할 날짜
  const dayDiff = dDay.diff(now, "day", true); //남은 일 수 구하기
  return Math.floor(dayDiff);
};

const RetreatDetailPage = () => {
  // const { id: retreatId } = useParams();
  // const { data } = useGetRetreatDetailDoc(retreatId);
  // const { handleFileChange } = useFileUpload();
  const { isOpen, openModal, closeModal } = useModal<ModalText>();

  return (
    <>
      <Wrapper>
        <Box>
          {typeof data.retreatImage === "undefined" ||
          data.retreatImage.length === 0 ? (
            <NonImage />
          ) : (
            <PostSlideBox>
              {data.retreatImage.length === 1 ? (
                <PostImage src={data.retreatImage[0]} />
              ) : (
                <CustomSwiper>
                  {data.retreatImage.map((el) => {
                    return <PostImage src={el} key={el} />;
                  })}
                </CustomSwiper>
              )}
            </PostSlideBox>
          )}
        </Box>
        <Box>
          <ButtonBox>
            <Button size={"sm"} variant="outlined" palette="gray">
              {DELETE_NAME}
            </Button>
            <Button
              size={"sm"}
              variant="outlined"
              palette="gray"
              onClick={() => openModal("modify")}
            >
              {MODIFY_NAME}
            </Button>
            <Button size={"sm"} variant="outlined" palette="gray">
              수련회 신청서 등록
            </Button>
          </ButtonBox>
          <SubscriberTableContainer>
            <Table>
              <TableHeader>
                <HeaderCell width={TABLE_INFO.date}>{"신청날짜"}</HeaderCell>
                <HeaderCell width={TABLE_INFO.name}>{"이름"}</HeaderCell>
                <HeaderCell width={TABLE_INFO.term}>{"기수"}</HeaderCell>
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
                  </TableRow>
                ))
              ) : (
                <TableBodyEmpty>검색 결과가 없습니다.</TableBodyEmpty>
              )} */}
              </TableBody>
            </Table>
          </SubscriberTableContainer>
        </Box>
        <Box isRow>
          <PageInfo>
            <TitleTypography>{data.retreatTitle}</TitleTypography>
            <ContentsTypography>{data.retreatContents}</ContentsTypography>
            <DateTypography>
              {`[ D-${dDaySet(data.retreatStartAt)} ] ${data.retreatStartAt} - ${data.retreatEndAt}`}
            </DateTypography>
            <DateTypography>{data.retreatPlace}</DateTypography>
            <CustomKakaoLoader place={data.retreatPlace} />
            <SectionLine>강사</SectionLine>
            <InstructorBox>
              <InstructorBoxItem>
                <h6>성함 :</h6>
                <span>{data?.retreatInstructor}</span>
              </InstructorBoxItem>
              <InstructorBoxItem>
                <h6>e-mail :</h6>
                <span>{data?.retreatInstructorEmail}</span>
              </InstructorBoxItem>
              <InstructorBoxItem>
                <h6>사역지 :</h6>
                <span>{data.retreatInstructorMinistry}</span>
              </InstructorBoxItem>
              <InstructorBoxItem>
                <h6>연락처 :</h6>
                <span>{data.retreatInstructorPhoneNumber}</span>
              </InstructorBoxItem>
            </InstructorBox>
          </PageInfo>
        </Box>
      </Wrapper>
      <NonBtnModal
        isOpen={isOpen("modify")}
        width="500px"
        header={MODIFY_NAME}
        body={
          <RetreatInputForm
            onClose={() => closeModal("modify")}
            initData={data}
          />
        }
        onClose={() => closeModal("modify")}
      />
    </>
  );
};

export default RetreatDetailPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  gap: ${(props) => props.theme.gap.lg};
  padding: ${(props) => props.theme.padding.lg};

  background-color: ${(props) => props.theme.palette.white[100]};
  display: grid;
  grid-template-columns: 2fr 1fr; /* 컬럼 크기 설정 */
  grid-template-rows: 300px auto; /* 행 크기 자동 조정 */
`;

const Box = styled.div<{ isRow?: boolean; isJustifyContentEnd?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  padding: ${(props) => props.theme.padding.md};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.palette.gray[50]};
  justify-content: ${(props) => (props.isJustifyContentEnd ? "end" : "start")};
  :nth-child(2) {
    grid-row: span 2;
  }
`;

const InstructorBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InstructorBoxItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  text-align: end;
  ${(props) => props.theme.typography.B8_Body_14_R}
  line-height: 1;
  h6 {
    font-weight: bold;
    width: 35%;
    text-align: start;
  }
`;

const PostSlideBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #000;
`;

const PostImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const PageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: ${(props) => props.theme.padding.md};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.palette.white[100]};
  width: 100%;
`;

const TitleTypography = styled.h5`
  ${(props) => props.theme.typography.H5_Headline_24_B}
`;

const ContentsTypography = styled.h6`
  ${(props) => props.theme.typography.T3_Title_20_M}
  color:${(props) => props.theme.palette.gray[900]}
`;

const DateTypography = styled.p`
  ${(props) => props.theme.typography.L4_Label_16_M}
  color:${(props) => props.theme.palette.gray[900]}
`;

const SectionLine = styled.div`
  ${(props) => props.theme.typography.B7_Body_14_M}
  position: relative;
  text-align: center;
  ::after {
    content: "";
    position: absolute;
    top: 8px;
    right: 0px;
    border-top: 1px solid #000;
    width: calc(50% - 40px);
  }
  ::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0px;
    border-top: 1px solid #000;
    width: calc(50% - 40px);
  }
`;

const NonImage = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%239E9CA5FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='3' stroke-linecap='round'/%3e%3c/svg%3e");
  background-color: ${(props) => props.theme.palette.gray[200]};
  ::after {
    content: "이미지를 업로드 해주세요.";
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  margin-bottom: 10px;
`;

const SubscriberTableContainer = styled.div`
  padding: ${(props) => props.theme.padding.md};
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.palette.white[100]};
`;
