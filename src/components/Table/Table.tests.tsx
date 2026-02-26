import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders table headers', () => {
  render(<Table headers={['A','B']} data={[['1','2']]} />);
  expect(screen.getByText('A')).toBeVisible();
  expect(screen.getByText('B')).toBeVisible();
});

test('renders table cell data', () => {
  render(<Table headers={['H']} data={[['Data']]} />);
  expect(screen.getByText('Data')).toBeVisible();
});