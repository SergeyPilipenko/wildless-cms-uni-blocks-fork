import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import type { InputProps } from './InputProps';

export const Input = JSX<InputProps>(
  ({
    className = '',
    inputClassName = '',
    id,
    name,
    type = 'text',
    label,
    value = '',
    valid = true,
    children,
    onChange,
    onBlur,
    ...inputProps
  }) => {
    const handleChange = useCallback(
      (e) => {
        const validInputValue = e.target.validity.valid ? (e.target.value as string) : value;
        onChange(validInputValue);
      },
      [onChange],
    );

    const handleBlur = useCallback(
      (e) => {
        if (!onBlur) {
          return;
        }
        const validInputValue = e.target.validity.valid ? (e.target.value as string) : value;
        onBlur(validInputValue);
      },
      [onBlur],
    );

    const paddingStyle = children ? 'pr-8' : '';
    const validStyle = valid
      ? 'border-main-stroke hover:border-primary-hover active:border-primary-text focus:border-primary-text'
      : 'border-error';

    return (
      <div className={`relative ${className}`}>
        {label ? <label className="block text-m-light mb-2">{label}</label> : null}
        <input
          className={`w-full border rounded-md text-primary-text outline-none p-4 ${paddingStyle} ${validStyle} ${inputClassName}`}
          id={id}
          name={name || id}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...inputProps}
        />
        {children}
      </div>
    );
  },
);
