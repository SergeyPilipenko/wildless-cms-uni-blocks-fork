import { JSX } from '@redneckz/uni-jsx';
import { RadioProps } from './RadioProps';

export const Radio = JSX<RadioProps>(({ name, text, value, checked, onChange, className }) => (
  <div className={className}>
    <label className="flex items-center relative cursor-pointer">
      <input
        className="appearance-none flex justify-center items-center w-5 h-5 border-2 border-primary-main rounded-full cursor-pointer after:block after:w-2.5 after:h-2.5 after:rounded-full checked:after:bg-primary-main"
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
