import styled from 'styled-components';
import { LabelProps } from './Label.types';
import type { FC } from 'react';

const StyledLabel = styled.span<{ color?: string; size?: string }>`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '14px'};
`;

export const Label: FC<LabelProps> = ({ text, color, size }) => {
  return <StyledLabel color={color} size={size}>{text}</StyledLabel>;
};