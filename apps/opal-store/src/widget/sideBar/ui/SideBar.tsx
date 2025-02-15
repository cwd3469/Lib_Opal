import styled from "@emotion/styled";
import { Permissions } from "../../../pages/main/config/interface";
import { FaArrowCircleLeft } from "react-icons/fa";
import getMenu from "../config/getMenu";
import SideBarBtn from "./SideBarBtn";
import { FaCross } from "react-icons/fa";
import { Link } from "react-router-dom";

// 일반 , 리더 권한 , 수련회 리더 권한 , 운전자 사역 권한 ,임원 권한 , 사역자 권한

type Props = {
  logo: string;
  name: string;
  permissions: Permissions;
};

const SideBar = ({ logo, name }: Props) => {
  return (
    <Wrapper>
      <LogoComponent>
        <Link to={"/"}>
          <Logo src={logo} alt="" />
        </Link>
      </LogoComponent>
      <UserSection>
        <FaCross />
        <span>{`${name} 님`}</span>
      </UserSection>
      <MenuList>
        <SectionName>------------ 일반 ------------</SectionName>
        {getMenu.map((el) => {
          return <SideBarBtn key={el.path} {...el} />;
        })}
      </MenuList>
      <Footer>ⓒ Copyright © 2025 jY. All rights reserved.</Footer>
      <CloseBtn>
        <FaArrowCircleLeft />
      </CloseBtn>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: span 2;
  width: 200px;
  padding: 0 ${(props) => props.theme.padding.sm};

  background-color: ${(props) => props.theme.palette.gray[100]};
  border-right: 1px solid ${(props) => props.theme.palette.gray[100]};

  @media (max-width: 1020px) {
    width: 50px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 50px;
  gap: 15px;

  text-align: center;
  ${(props) => props.theme.typography.B7_Body_14_M}

  padding: ${(props) => props.theme.padding.lg};
  border-top: solid 1px ${(props) => props.theme.palette.gray[300]};
`;

const MenuList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: ${(props) => props.theme.padding.lg} 0;
  border-top: solid 1px ${(props) => props.theme.palette.gray[300]};
`;

const SectionName = styled.h5`
  text-align: center;
  ${(props) => props.theme.typography.B6_Body_14_SB}
  color:${(props) => props.theme.palette.gray[700]}
`;

const Logo = styled.img`
  height: 44px;
  margin: 0 auto;
  display: block;
`;

const LogoComponent = styled.div`
  padding: ${(props) => props.theme.padding.sm} 0;
  border-top: solid 1px ${(props) => props.theme.palette.gray[300]};
`;

const Footer = styled.div`
  margin-top: auto;

  ${(props) => props.theme.typography.B9_Body_12_M}
  line-height: 14px;
  color: ${(props) => props.theme.palette.gray[700]};

  padding: ${(props) => props.theme.padding.lg};
  border-top: solid 1px ${(props) => props.theme.palette.gray[300]};
`;

const CloseBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: end;

  border: 0px;
  border-top: solid 1px ${(props) => props.theme.palette.gray[300]};
  padding: ${(props) => props.theme.padding.lg};
  background-color: transparent;

  cursor: pointer;
`;
