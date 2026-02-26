import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

test('radio button is visible', () => {
  render(<RadioButton label="Test Radio" name="test" />);
  expect(screen.getByText('Test Radio')).toBeVisible();
});

test('radio button is disabled visually', () => {
  render(<RadioButton label="Disabled" name="test" disabled />);
  const label = screen.getByText('Disabled');
  expect(label).toHaveStyle('opacity: 0.6');
});