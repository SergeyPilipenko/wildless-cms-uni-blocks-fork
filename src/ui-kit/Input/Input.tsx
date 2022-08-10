import { JSX } from '@redneckz/uni-jsx';
import { InputProps } from './InputProps';

export const Input = JSX<InputProps>(({ className = '', id, name, type = 'text', placeholder }) => {
  return (
    <input
      className={className || ''}
      id={id}
      name={name || id}
      type={type}
      placeholder={placeholder}
    />
  );
});
