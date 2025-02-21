import styled from "@emotion/styled";

type Alignment = "center" | "start" | "end";

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: stretch;

  color: var(--gray-cool-700, #4e5962);
  ${(props) => props.theme.typography.L3_Label_16_B}
  border-top: 1px solid ${(props) => props.theme.palette.gray[200]};
  border-bottom: 1px solid ${(props) => props.theme.palette.gray[200]};
  background-color: #fff;
`;

const HeaderCell = styled.div<{ width: string; alignment?: Alignment }>`
  display: flex;
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;

  background-color: ${(props) => props.theme.palette.gray[600]};
  color: ${(props) => props.theme.palette.white[100]};

  ${(props) => props.theme.typography.L6_Label_12_M}

  border-left: 1px solid ${(props) => props.theme.palette.gray[200]};
  :last-child {
    border-right: 1px solid ${(props) => props.theme.palette.gray[200]};
  }
`;

export { TableHeader, HeaderCell };
