import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';
import { TableCell } from '../TableCell';

test('renders all cells in a row', () => {
  const rowData = ['Alice', '25', 'Toronto'];
  render(<table><tbody><TableRow rowData={rowData} /></tbody></table>);

  rowData.forEach(cell => {
    expect(screen.getByText(cell)).toBeVisible();
  });
});