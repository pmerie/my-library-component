import styled from 'styled-components';
import type { FC } from 'react';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Img: FC<ImgProps> = ({ src, alt, disabled, width }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      style={{ width }}
    />
  );
};