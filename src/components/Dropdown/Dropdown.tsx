import styled from 'styled-components';
import type { FC, ChangeEvent } from 'react';
import type { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  disabled,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <StyledSelect value={value} disabled={disabled} onChange={handleChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};