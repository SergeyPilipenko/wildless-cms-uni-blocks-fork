import { JSX } from '@redneckz/uni-jsx';
import type { Tariff } from '../../hooks/useSafeBoxes';
import { Img } from '../../ui-kit/Img/Img';

export interface SafeDepositRentalTotalProps {
  days: number;
  tariffs?: Tariff[];
}

export const SafeDepositRentalTotal = JSX<SafeDepositRentalTotalProps>(({ days, tariffs = [] }) => {
  const price = calculatePrice(days, tariffs);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex">
        {renderTotal('Аренда за', days, 'mr-11')}
        {renderTotal('Цена', price + ' ₽')}
      </div>
      <div className="bg-primary-main px-10 pt-10 pb-4 text-center">
        <Img image={{ icon: 'PackA4Icon' }} width="290" height="257" asSVG />

        <span className="text-s-light text-white opacity-80 mt-2 inline-block">
          На рисунки изображена пачка<br></br> листов формата А4
        </span>
      </div>
    </div>
  );
});

const renderTotal = (label: string, total: string | number, className = '') => {
  return (
    <div className={className}>
      <div className="text-m-light text-secondary-text mb-1">{label}</div>
      <span className="text-h3 text-primary-text">{total}</span>
    </div>
  );
};

const calculatePrice = (days: number, tariffs: Tariff[]) => {
  const tariffType = getTariffType(days);

  const tariffValue = tariffs?.find((_) => _.tariffType === String(tariffType))?.tariffValue || 0;

  return days * tariffValue;
};

const getTariffType = (days: number) => {
  let tariffType = 1;

  switch (true) {
    case days > 30 && days <= 90:
      tariffType = 2;
      break;

    case days > 90 && days <= 180:
      tariffType = 3;
      break;

    case days > 180 && days <= 365:
      tariffType = 4;
      break;
  }

  return tariffType;
};
