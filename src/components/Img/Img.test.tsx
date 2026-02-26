import { render, screen } from '@testing-library/react';
import { Img } from './Img';

test('image is visible', () => {
  render(<Img src="test.jpg" alt="test image" />);
  expect(screen.getByAltText('test image')).toBeVisible();
});

test('image changes opacity when disabled', () => {
  render(<Img src="test.jpg" alt="disabled image" disabled />);
  const img = screen.getByAltText('disabled image');
  expect(img).toHaveStyle('opacity: 0.5');
});