// src/components/Table/TableFooter/TableFooter.tests.tsx
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

test('renders footer text', () => {
  render(
    <table>
      <TableFooter text="Total: 100" />
    </table>
  );

  expect(screen.getByText('Total: 100')).toBeVisible();
});