import styled from "@emotion/styled";
import SideBar from "../../../widget/sideBar/ui/SideBar";
import { AuthInterface } from "../../../pages/main/config/interface";
import { Outlet } from "react-router-dom";

type Props = {
  data: AuthInterface;
};

const PrivateLayout = ({ data }: Props) => {
  return (
    <Wrapper>
      <SideBar
        logo={data.logo}
        permissions={data.permission}
        name={data.name}
      />
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default PrivateLayout;

// 320 최소모바일
// 768 태블릿
// 1024 태블릿
// 1280 노트북
// 1920 PC

const Wrapper = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-columns: auto 1fr; /* 왼쪽 크기(auto)에 따라 오른쪽 자동 조절 */
  grid-template-rows: auto 1fr; /* 위쪽 자동 높이, 아래쪽 가변 높이 */

  background-color: #cecece;

  @media (max-width: 1920px) {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 30px;

  background-color: antiquewhite;
`;
