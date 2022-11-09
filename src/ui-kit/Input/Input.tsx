import { JSX } from '@redneckz/uni-jsx';
import { InputProps } from './InputProps';

export const Input = JSX<InputProps>(
  ({ className = '', id, name, type = 'text', placeholder, pattern, value, onChange }) => {
    const handleChange = (e) => {
      const validInputValue = e.target.validity.valid ? (e.target.value as string) : value;
      onChange(validInputValue);
    };

    return (
      <input
        className={`border rounded-md border-main-stroke hover:border-primary-hover active:border-primary-text
        focus:border-primary-text text-primary-text outline-none ${className}`}
        id={id}
        name={name || id}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    );
  },
);
