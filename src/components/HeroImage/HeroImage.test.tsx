import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

test('hero image is visible', () => {
  render(<HeroImage src="test.jpg" title="Hero" />);
  expect(screen.getByText('Hero')).toBeVisible();
});

test('hero image changes opacity when disabled', () => {
  const { container } = render(
    <HeroImage src="test.jpg" title="Hero" disabled />
  );
  expect(container.firstChild).toHaveStyle('opacity: 0.5');
});