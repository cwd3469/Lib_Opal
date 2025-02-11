import styled from "@emotion/styled";

const MainPage = () => {
  return <Wrapper></Wrapper>;
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => props.theme.padding.lg};

  background-color: #1d3d75;
`;
