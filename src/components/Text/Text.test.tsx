import { render, screen } from '@testing-library/react';
import { Text } from './Text';

test('text is visible', () => {
  render(<Text content="Test Text" />);
  expect(screen.getByText('Test Text')).toBeVisible();
});

test('text changes color', () => {
  render(<Text content="Red Text" color="red" />);
  const el = screen.getByText('Red Text');
  expect(el).toHaveStyle('color: red');
});