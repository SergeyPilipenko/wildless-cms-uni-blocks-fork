import { JSX } from '@redneckz/uni-jsx';

export interface SelectProps {
  className?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Select = JSX<SelectProps>(
  ({ className = '', id, name, children, value, onChange }) => {
    return (
      <select
        className={className}
        id={id}
        name={name || id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    );
  },
);
