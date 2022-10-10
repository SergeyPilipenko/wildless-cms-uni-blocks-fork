import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';

export type SafeDepositRentalTotalProps = UniBlockProps;

type Days = {
  days: number;
};

export const SafeDepositRentalTotal = ({ days }: Days) => {
  const price = calculatePrice(days);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex">
        {renderTotal('Аренда за', days, 'mr-11')}
        {renderTotal('Цена', price + ' ₽')}
      </div>
      <div className="bg-primary-main px-10 pt-10 pb-4 text-center">
        <Img image={{ icon: 'PackA4' }} width="290" height="257" asSVG />

        <span className="text-s-light text-white opacity-80 mt-2 inline-block">
          На рисунки изображена пачка<br></br> листов формата А4
        </span>
      </div>
    </div>
  );
};

const renderTotal = (label, total, className = '') => {
  return (
    <div className={className}>
      <span className="block text-m-light mb-1">{label}</span>
      <span className="text-h3">{total}</span>
    </div>
  );
};

const calculatePrice = (days: number) => {
  let TariffType = 1;

  switch (true) {
    case days > 30 && days <= 90:
      TariffType = 2;
      break;

    case days > 90 && days <= 180:
      TariffType = 3;
      break;

    case days > 180 && days <= 365:
      TariffType = 4;
      break;
  }

  return days * TariffType;
};
