import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { SafeDepositRentalContent } from './SafeDepositRentalContent';
import { SafeDepositRentalForm } from './SafeDepositRentalForm';
import { SafeDepositRentalTotal } from './SafeDepositRentalTotal';

export interface SafeDepositRentalProps extends SafeDepositRentalContent, UniBlockProps {}

const DEFAULT_DAYS = 26;

const DATA = {
  cities: [
    {
      city: 'Москва',
      offices: [
        {
          office: 'МоскваОфис1',
          rate: 1,
        },
        {
          office: 'МоскваОфис2',
          rate: 2,
        },
        {
          office: 'МоскваОфис3',
          rate: 3,
        },
      ],
    },
    {
      city: 'Краснодар',
      offices: [
        {
          office: 'КраснодарОфис1',
          rate: 2,
        },
        {
          office: 'КраснодарОфис2',
          rate: 4,
        },
        {
          office: 'КраснодарОфис3',
          rate: 6,
        },
      ],
    },
  ],
  cellDimensions: [
    {
      dimension: 'маленькая',
    },
    {
      dimension: 'средняя',
    },
    {
      dimension: 'большая',
    },
  ],
  cellOptions: [
    {
      option: '125x225x375',
    },
    {
      option: '200x300x400',
    },
    {
      option: '300x400x500',
    },
  ],
};

export const SafeDepositRental = JSX<SafeDepositRentalProps>(
  ({ context, className = '', ...rest }) => {
    const [days, setDays] = context.useState(DEFAULT_DAYS);
    const data = DATA;

    return (
      <BlockWrapper context={context} className={`bg-white px-8 py-12 ${className}`} {...rest}>
        <div className="flex justify-between align-top mb-6">
          {data?.cities?.length ? (
            <SafeDepositRentalForm {...data} days={days} setDays={setDays} context={context} />
          ) : null}
          <SafeDepositRentalTotal days={days} />
        </div>
        <p className="text-s-light text-secondary-text">
          Аренда СЯ, в случае проведения процедуры купли-продажи, с использованием наличных денег
          или процедуры ипотечной сделки
        </p>
      </BlockWrapper>
    );
  },
);
