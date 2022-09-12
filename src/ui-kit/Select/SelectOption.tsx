import { JSX } from '@redneckz/uni-jsx';

export interface SelectOptionProps {
  className?: string;
  value?: string;
  selected?: boolean;
}

export const SelectOption = JSX<SelectOptionProps>(
  ({ className = '', value, selected, children }) => {
    return (
      <option className={className} value={`${value}`} selected={selected}>
        {children}
      </option>
    );
  },
);
