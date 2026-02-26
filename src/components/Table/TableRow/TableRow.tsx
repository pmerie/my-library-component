import styled from 'styled-components';
import type { FC } from 'react';
import { TableCell } from '../TableCell';
import type { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr``;

export const TableRow: FC<TableRowProps> = ({ rowData }) => {
  return (
    <StyledRow>
      {rowData.map((cell, idx) => (
        <TableCell key={idx} content={cell} />
      ))}
    </StyledRow>
  );
};