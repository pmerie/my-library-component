import styled from 'styled-components';
import type { FC } from 'react';
import type { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead`
  background-color: #f0f0f0;
`;

const StyledCell = styled.th`
  padding: 8px 12px;
  text-align: left;
  border: 1px solid #ccc;
`;

export const TableHeader: FC<TableHeaderProps> = ({ headers }) => {
  return (
    <StyledHeader>
      <tr>
        {headers.map((header, idx) => (
          <StyledCell key={idx}>{header}</StyledCell>
        ))}
      </tr>
    </StyledHeader>
  );
};