import { CSSProperties, ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface TableRowProps {
  children: ReactNode;
  onRowClick?: () => void;
  style?: CSSProperties;
  disabled?: boolean;
}

function TableRow({ children, onRowClick, style, disabled = false }: Readonly<TableRowProps>) {
  return (
    <TableRowWrapper onClick={onRowClick} hasPointer={!!onRowClick} style={style} disabled={disabled}>
      {children}
    </TableRowWrapper>
  );
}

const TableRowWrapper = styled.div<{ hasPointer: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  align-self: stretch;
  width: 100%;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: var(--gray-true-500, #b3b3b3);
        background: var(--gray-true-050, #f7f7f7);
      `;
    }
  }}
  border-bottom: 1px solid var(--gray-cool-100, #e6eaec);
  cursor: ${({ hasPointer }) => (hasPointer ? 'pointer' : 'default')};
  &:hover {
    background: ${({ hasPointer }) => (hasPointer ? 'var(--function-blue-background, #f6fbfe)' : '')};
  }
`;

type Alignment = 'center' | 'start' | 'end';

const RowCell = styled.div<{ width: string; alignment?: Alignment; isDynamic?: boolean; disabled?: boolean }>`
  height: 48px;
  display: flex;
  width: ${({ width }) => width};
  overflow: hidden;

  label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;

    ${({ disabled = false }) =>
      disabled &&
      css`
        color: var(--gray-true-500, #b3b3b3);
      `}
  }

  ${({ alignment = 'center' }) => {
    switch (alignment) {
      case 'start':
        return css`
          justify-content: start;
          padding: 0px 16px;
        `;
      case 'center':
        return css`
          justify-content: center;
          padding: 0px;
        `;
      case 'end':
        return css`
          justify-content: end;
          padding-right: 16px;
        `;
    }
  }};

  align-items: center;
  gap: var(--radius-lg, 8px);
  flex: ${({ width }) => (width !== '100%' ? '0 1 auto' : '1 0 0')};
`;

export { TableRow, RowCell };
