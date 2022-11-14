import { JSX } from '@redneckz/uni-jsx';
import { RadioProps } from './RadioProps';

export const Radio = JSX<RadioProps>(({ name, text, value, checked, onChange, className }) => (
  <div className={className}>
    <label className="flex items-center relative cursor-pointer">
      <input
        className="appearance-none flex justify-center items-center shrink-0 w-5 h-5 border border-gray hover:border-checkbox-hover
        checked:border-2 checked:!border-primary-main focus:checked:border-primary-main focus:border-primary-text active:border-primary-text
        after:block after:w-2.5 after:h-2.5 after:rounded-full checked:after:bg-primary-main outline-none rounded-full cursor-pointer"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {text ? <span className="font-sans ml-3 cursor-pointer">{text}</span> : null}
    </label>
  </div>
));
