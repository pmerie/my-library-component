import styled from 'styled-components';
import type { FC } from 'react';
import type { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ height?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '300px'};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const HeroImage: FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height,
  disabled,
}) => {
  return (
    <Wrapper height={height} disabled={disabled}>
      <Image src={src} alt={alt} />
      {(title || subtitle) && (
        <Overlay>
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </Overlay>
      )}
    </Wrapper>
  );
};