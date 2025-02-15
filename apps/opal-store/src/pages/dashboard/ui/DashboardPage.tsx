import styled from "@emotion/styled";

const DashboardPage = () => {
  return <Wrapper>DashboardPage</Wrapper>;
};

export default DashboardPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => props.theme.padding.lg};

  background-color: #1d3d75;
`;
