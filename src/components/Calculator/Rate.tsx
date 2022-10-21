import { JSX } from '@redneckz/uni-jsx';

export interface RateProps {
  rate: number;
  title?: string;
  unit?: string;
  rateBlockClassName?: string;
}

export const Rate = JSX<RateProps>(({ rate, title = 'Ставка', unit, rateBlockClassName }) => (
  <div>
    <div className="text-l-light text-secondary-text">{title}</div>
    <div className="flex justify-start">
      <span
        className={`block gradient-color-text font-mohave text-title-huge pr-6 -mt-4 ${rateBlockClassName}`}
      >
        {String(rate).replace('.', ',')}
      </span>
      {unit ? <span className="gradient-color-text text-[65px] leading-[75px]">{unit}</span> : ''}
    </div>
  </div>
));
