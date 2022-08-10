import { JSX } from '@redneckz/uni-jsx';
import { SelectProps } from './SelectProps';

export const Select = JSX<SelectProps>(({ className = '', options, id, name }) => {
  return (
    <select className={className} id={id} name={name || id}>
      {options.map((options) => {
        return <option value={`${options}`}>{options}</option>;
      })}
    </select>
  );
});
