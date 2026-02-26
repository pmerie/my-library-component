import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

test('renders dropdown options', () => {
  render(<Dropdown options={['One', 'Two']} />);
  expect(screen.getByText('One')).toBeVisible();
  expect(screen.getByText('Two')).toBeVisible();
});

test('dropdown can be disabled', () => {
  render(<Dropdown options={['One']} disabled />);
  const select = screen.getByRole('combobox');
  expect(select).toBeDisabled();
});