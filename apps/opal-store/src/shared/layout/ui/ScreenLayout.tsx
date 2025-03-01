import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const ScreenLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default ScreenLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.palette.gray[50]};
`;
