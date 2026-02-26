import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

test('renders cell content', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell content="Test Cell" />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText('Test Cell')).toBeVisible();
});