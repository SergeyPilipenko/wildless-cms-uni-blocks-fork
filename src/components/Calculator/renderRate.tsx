type rateType = {
  rate: number;
  title?: string;
  sup?: string;
  className?: string;
};

export function renderRate({ rate, title, sup, className = '' }: rateType) {
  const rateFormat = String(rate).replace('.', ',');
  return (
    <div>
      <div className="text-sm font-light ml-3">{title}</div>
      <div className="flex justify-start">
        <span
          className={`calc-rate-text font-mohave text-[200px] leading-[250px] pr-4 mt-[-16px] ${className}`}
        >
          {rateFormat}
        </span>
        {sup ? <span className="calc-rate-text text-[65px] leading-[75px]">{sup}</span> : ''}
      </div>
    </div>
  );
}
