import styled from "@emotion/styled";

const TableRow = styled.div<{ hasPointer?: boolean }>`
  display: flex;
  align-items: stretch;

  width: 100%;

  cursor: ${({ hasPointer }) => (hasPointer ? "pointer" : "default")};

  background-color: #fff;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray[200]};
  &:hover {
    background: ${({ hasPointer }) => (hasPointer ? `#f6fbfe` : "")};
  }
`;

type Alignment = "center" | "start" | "end";

const RowCell = styled.div<{
  width: string;
  alignment?: Alignment;
  isDynamic?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  width: ${({ width }) => width};
  overflow: hidden;
  justify-content: center;
  padding: 4px;

  align-items: center;
  gap: var(--radius-lg, 8px);

  ${(props) => props.theme.typography.L6_Label_12_M}

  border-left: 1px solid ${(props) => props.theme.palette.gray[200]};
  :last-child {
    border-right: 1px solid ${(props) => props.theme.palette.gray[200]};
  }
  label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
  }
`;

export { TableRow, RowCell };
