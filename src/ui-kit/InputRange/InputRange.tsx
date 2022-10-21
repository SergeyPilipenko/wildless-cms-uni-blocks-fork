import { JSX } from '@redneckz/uni-jsx';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { InputRangeProps } from './InputRangeProps';

const DISABLED_INPUT_CLASSES = 'disabled:border-main-stroke disabled:bg-main-divider';

export const InputRange = JSX<InputRangeProps>(
  ({
    className,
    title,
    items = [],
    min = 1,
    max = 100,
    step = 1,
    value = min,
    disabled = false,
    onChange,
  }) => {
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
          {title ? <span className="text-m-light">{title}</span> : null}
          <input
            className={`m-0 mt-2 font-sans text-h3 w-full h-14 border border-solid border-main-stroke rounded-md
                        outline-none p-0 pl-4 box-border text-primary-text hover:border-primary-hover focus:border-primary-focus ${DISABLED_INPUT_CLASSES}`}
            value={addSpacesBetweenNumbers(value)}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value as string)}
            onBlur={handleBlur}
          />
          <div className="absolute inset-x-0 -bottom-1 px-4 leading-[18px]">
            <input
              className="box-border w-full m-0 cursor-pointer slider"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              disabled={disabled}
              onChange={(e) => handleChange(e.target.value as string)}
              style={inputStyle}
            />
          </div>
        </label>
        <div className="flex justify-between my-2">
          {items.map((item, i) => (
            <span key={String(i)} className="text-s-light text-secondary-text">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  },
);
