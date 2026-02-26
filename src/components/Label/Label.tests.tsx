import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('label renders text', () => {
  render(<Label text="Name" />);
  expect(screen.getByText('Name')).toBeVisible();
});

test('label changes color', () => {
  render(<Label text="Error" color="red" />);
  const el = screen.getByText('Error');
  expect(el).toHaveStyle('color: red');
});