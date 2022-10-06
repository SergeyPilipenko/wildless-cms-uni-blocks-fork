import { JSX } from '@redneckz/uni-jsx';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { InputRangeProps } from './InputRangeProps';

export const InputRange = JSX<InputRangeProps>(
  ({ className, title, items = [], min = 1, max = 100, step = 1, value = min, onChange }) => {
    const handleChange = (_: string) => {
      if (!onChange) {
        return;
      }
      const sanitizedValue = Number(_.replace(/\D/g, ''));
      onChange(sanitizedValue);
    };
    const inputStyle = {
      backgroundSize: `${(((value - min) * 100) / (max - min)).toFixed(2)}% 100%`,
    };
    const handleBlur = () => {
      if (!onChange) {
        return;
      }
      if (value < min) {
        onChange(min);
      }
      if (value > max) {
        onChange(max);
      }
    };

    return (
      <div className={className}>
        <label className="block relative">
          {title ? <span className="text-l text-secondary-text pl-4">{title}</span> : null}
          <input
            className={`m-0 mt-[5px] font-sans text-h3 w-full h-14 border border-solid border-main-stroke rounded-md
                        outline-none p-0 pl-4 box-border text-primary-text`}
            value={addSpacesBetweenNumbers(value)}
            onChange={(e) => handleChange(e.target.value as string)}
            onBlur={handleBlur}
          />
          <div className="absolute inset-x-0 bottom-[-4px] px-4 leading-[18px]">
            <input
              className="box-border w-full m-0 cursor-pointer slider"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => handleChange(e.target.value as string)}
              style={inputStyle}
            />
          </div>
        </label>
        <div className="flex justify-between my-3">
          {items.map((item, i) => (
            <span key={String(i)} className="text-sm leading-[14px] text-secondary-text pl-4">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  },
);
