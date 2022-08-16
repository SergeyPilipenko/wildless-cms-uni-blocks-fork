import { JSX } from '@redneckz/uni-jsx';

export interface SelectOptionProps {
  className?: string;
  value?: string;
}

export const SelectOption = JSX<SelectOptionProps>(({ className = '', value, children }) => {
  return (
    <option className={className} value={`${value}`}>
      {children}
    </option>
  );
});
