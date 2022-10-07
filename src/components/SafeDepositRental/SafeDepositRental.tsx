import { JSX } from '@redneckz/uni-jsx';
import { useSafeDepositRental } from '../../hooks/useSafeDepositRental';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { SafeDepositRentalContent } from './SafeDepositRentalContent';
import { SafeDepositRentalForm } from './SafeDepositRentalForm';
import { SafeDepositRentalTotal } from './SafeDepositRentalTotal';

export interface SafeDepositRentalProps extends SafeDepositRentalContent, UniBlockProps {}

const DEFAULT_DAYS = 26;

export const SafeDepositRental = JSX<SafeDepositRentalProps>(
  ({ context, className = '', ...rest }) => {
    const [days, setDays] = context.useState(DEFAULT_DAYS);
    const data = useSafeDepositRental(context.useAsyncData);

    return (
      <BlockWrapper context={context} className={`bg-white px-8 py-12 ${className}`} {...rest}>
        <div className="flex justify-between align-top mb-6">
          {data?.cities?.length ? (
            <SafeDepositRentalForm {...data} days={days} setDays={setDays} context={context} />
          ) : null}
          <SafeDepositRentalTotal days={days} />
        </div>
        <p className="text-button font-light text-secondary-text">
          Аренда СЯ, в случае проведения процедуры купли-продажи, с использованием наличных денег
          или процедуры ипотечной сделки
        </p>
      </BlockWrapper>
    );
  },
);
