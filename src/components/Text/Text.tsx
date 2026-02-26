import styled from 'styled-components';
import { TextProps } from './Text.types';
import type { FC } from 'react';

const StyledText = styled.p<{ color?: string; size?: string }>`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '16px'};
`;

export const Text: FC<TextProps> = ({ content, color, size }) => {
  return <StyledText color={color} size={size}>{content}</StyledText>;
};