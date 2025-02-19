import { CSSProperties, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TableHeaderProps {
  children: ReactNode;
  rowStyle?: CSSProperties;
}

type Alignment = "center" | "start" | "end";

function TableHeader({ children, rowStyle }: Readonly<TableHeaderProps>) {
  return (
    <TableHeaderWrapper>
      <TableHeaderRow style={rowStyle}>{children}</TableHeaderRow>
    </TableHeaderWrapper>
  );
}

const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  border-bottom: 1px solid var(--gray-cool-100, #e6eaec);
`;

const TableHeaderRow = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  align-self: stretch;

  color: var(--gray-cool-700, #4e5962);
  ${(props) => props.theme.typography.L3_Label_16_B}
`;

const HeaderCell = styled.div<{ width: string; alignment?: Alignment }>`
  display: flex;
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
  gap: var(--radius-lg, 8px);

  ${({ alignment = "center" }) => {
    switch (alignment) {
      case "start":
        return css`
          padding: 0px 8px;
        `;
      case "center":
        return css`
          padding: 0px;
        `;
      case "end":
        return css`
          padding-right: 16px;
        `;
    }
  }};
  flex: ${({ width }) => (width !== "100%" ? "0 1 auto" : "1 0 0")};
`;

export { TableHeader, HeaderCell };
