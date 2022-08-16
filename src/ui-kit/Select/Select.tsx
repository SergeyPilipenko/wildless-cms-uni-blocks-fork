import { JSX } from '@redneckz/uni-jsx';

export interface SelectProps {
  className?: string;
  id?: string;
  name?: string;
}

export const Select = JSX<SelectProps>(({ className = '', id, name, children }) => {
  return (
    <select className={className} id={id} name={name || id}>
      {children}
    </select>
  );
});
