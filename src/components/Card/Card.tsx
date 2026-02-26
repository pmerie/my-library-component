import styled from 'styled-components';
import type { FC } from 'react';
import type { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; bg?: string }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ disabled, bg }) =>
    disabled ? '#e0e0e0' : bg || '#ffffff'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Title = styled.h3`
  margin-top: 0;
`;

export const Card: FC<CardProps> = ({
  title,
  content,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledCard disabled={disabled} bg={backgroundColor}>
      <Title>{title}</Title>
      <p>{content}</p>
    </StyledCard>
  );
};