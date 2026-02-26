import styled from 'styled-components';
import type { FC } from 'react';
import type { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledRadio = styled.input`
  cursor: inherit;
`;

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  checked,
  disabled,
  name,
}) => {
  return (
    <Wrapper disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        readOnly
      />
      {label}
    </Wrapper>
  );
};