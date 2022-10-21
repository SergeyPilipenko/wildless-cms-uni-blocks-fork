import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { SafeDepositRentalContent } from './SafeDepositRentalContent';
import { SafeDepositRentalForm } from './SafeDepositRentalForm';
import { useGetRegions } from './useGetRegions';

export interface SafeDepositRentalProps extends SafeDepositRentalContent, UniBlockProps {}

export const SafeDepositRental = JSX<SafeDepositRentalProps>(
  ({ title, context, className = '', ...rest }) => {
    const regions = useGetRegions();

    return (
      <BlockWrapper context={context} className={`bg-white px-8 py-12 ${className}`} {...rest}>
        {title ? (
          <Heading title={title} headingType="h3" as="h2" className="mb-2.5 text-center" />
        ) : null}
        <SafeDepositRentalForm regions={regions} />
        <p className="text-s-light text-secondary-text">
          Аренда СЯ, в случае проведения процедуры купли-продажи, с использованием наличных денег
          или процедуры ипотечной сделки
        </p>
      </BlockWrapper>
    );
  },
);
