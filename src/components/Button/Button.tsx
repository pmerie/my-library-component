import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import type { FC } from 'react';

const StyledButton = styled.button<{ disabled?: boolean; bg?: string }>`
  padding: 10px 16px;
  background-color: ${({ disabled, bg }) =>
    disabled ? '#ccc' : bg || '#007bff'};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Button: FC<ButtonProps> = ({
  label,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledButton disabled={disabled} bg={backgroundColor}>
      {label}
    </StyledButton>
  );
};