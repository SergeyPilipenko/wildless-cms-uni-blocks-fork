import { JSX } from '@redneckz/uni-jsx';

export interface SelectOptionProps {
  className?: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
}

export const SelectOption = JSX<SelectOptionProps>(
  ({ className = '', value, selected, disabled = false, children }) => {
    return (
      <option className={className} value={`${value}`} selected={selected} disabled={disabled}>
        {children}
      </option>
    );
  },
);
