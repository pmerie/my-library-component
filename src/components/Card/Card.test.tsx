import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('card is visible', () => {
  render(<Card title="Test Card" content="Hello" />);
  expect(screen.getByText('Test Card')).toBeVisible();
});

test('card changes background when disabled', () => {
  const { container } = render(
    <Card title="Disabled" content="Test" disabled />
  );
  expect(container.firstChild).toHaveStyle('background-color: #e0e0e0');
});