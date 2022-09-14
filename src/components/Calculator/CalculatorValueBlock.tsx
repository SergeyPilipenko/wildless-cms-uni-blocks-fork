import { JSX } from '@redneckz/uni-jsx';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';

export interface CalculatorValueBlockProps {
  title?: string;
  value?: number;
  postfix?: string;
  prefix?: string;
  className?: string;
}

export const CalculatorValueBlock = JSX<CalculatorValueBlockProps>(
  ({ title, value, postfix = '', prefix, className = '' }) => {
    return (
      <div className={`mb-5 ${className}`}>
        {title ? <div className="text-base font-light">{title}</div> : null}
        {value ? (
          <div className="text-title font-normal">
            {prefix} {addSpacesBetweenNumbers(Math.round(value))} {postfix}
          </div>
        ) : null}
      </div>
    );
  },
);
