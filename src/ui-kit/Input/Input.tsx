import { JSX } from '@redneckz/uni-jsx';
import { InputProps } from './InputProps';
import { ChangeEvent } from 'react';

export const Input = JSX<InputProps>(
  ({ className = '', id, name, type = 'text', placeholder, pattern, value, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const validInputValue = e.target.validity.valid ? e.target.value : value;
      onChange(validInputValue);
    };

    return (
      <input
        className={className}
        id={id}
        name={name || id}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    );
  },
);
