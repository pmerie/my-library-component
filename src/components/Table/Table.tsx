import styled from 'styled-components';
import { TableProps } from './Table.types';
import type { FC } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Table: FC<TableProps> = ({ headers, data }) => {
  return (
    <StyledTable>
      <TableHeader headers={headers} />
      <tbody>
        {data.map((rowData, idx) => (
          <TableRow key={idx} rowData={rowData} />
        ))}
      </tbody>
    </StyledTable>
  );
};