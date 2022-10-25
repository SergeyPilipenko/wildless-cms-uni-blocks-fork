import { JSX } from '@redneckz/uni-jsx';

export interface SelectProps {
  className?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
}

const selectStyle = {
  background: `url('/icons/ArrowDownIcon.svg') no-repeat right 16px top 50%`,
};

export const Select = JSX<SelectProps>(
  ({ className = '', id, name, children, value, onChange }) => {
    return (
      <select
        className={`appearance-none pl-0.5 ${className}`}
        style={selectStyle}
        id={id}
        name={name || id}
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        placeholder=""
      >
        {children}
      </select>
    );
  },
);
