import styled from 'styled-components';
import type { FC } from 'react';
import type { TableCellProps } from './TableCell.types';

const StyledCell = styled.td`
  padding: 8px 12px;
  border: 1px solid #ccc;
`;

export const TableCell: FC<TableCellProps> = ({ content }) => {
  return <StyledCell>{content}</StyledCell>;
};