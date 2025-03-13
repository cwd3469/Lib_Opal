import styled from "@emotion/styled";

const TableBodyEmpty = styled.div`
  display: flex;
  padding: 64px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--radius-xl, 16px);
  align-self: stretch;

  color: var(--gray-cool-300, #b4bfc8);
  ${(props) => props.theme.typography.H3_Headline_28_B}
`;

export default TableBodyEmpty;
