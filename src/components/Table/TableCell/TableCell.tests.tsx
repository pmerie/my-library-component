import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

test('renders cell content', () => {
  render(<TableCell content="Test Cell" />);
  expect(screen.getByText('Test Cell')).toBeVisible();
});