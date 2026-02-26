// src/components/Table/TableHeader/TableHeader.tests.tsx
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

test('renders all headers', () => {
  const headers = ['Name', 'Age', 'City'];
  render(
    <table>
      <TableHeader headers={headers} />
    </table>
  );

  headers.forEach(header => {
    expect(screen.getByText(header)).toBeVisible();
  });
});