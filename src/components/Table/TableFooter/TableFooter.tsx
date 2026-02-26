import styled from 'styled-components';
import type { FC } from 'react';
import type { TableFooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot`
  background-color: #f0f0f0;
  font-weight: bold;
`;

export const TableFooter: FC<TableFooterProps> = ({ text }) => {
  return (
    <StyledFooter>
      <tr>
        <td colSpan={100}>{text}</td>
      </tr>
    </StyledFooter>
  );
};