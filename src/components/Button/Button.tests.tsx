import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('button is visible', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeVisible();
});

test('button changes color when disabled', () => {
  render(<Button label="Disabled" disabled />);
  const btn = screen.getByText('Disabled');
  expect(btn).toHaveStyle('background-color: #ccc');
});