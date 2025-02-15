import styled from "@emotion/styled";

const ShellPage = () => {
  return <Wrapper>SHELL</Wrapper>;
};

export default ShellPage;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => props.theme.padding.lg};

  background-color: #1d3d75;
`;
