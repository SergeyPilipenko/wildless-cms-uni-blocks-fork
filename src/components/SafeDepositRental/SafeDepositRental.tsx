import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { SafeDepositRentalContent } from './SafeDepositRentalContent';
import { SafeDepositRentalForm } from './SafeDepositRentalForm';
import { useGetRegions } from './useGetRegions';
import { YandexMap } from './YandexMap';

export interface SafeDepositRentalProps extends SafeDepositRentalContent, UniBlockProps {}

export const SafeDepositRental = JSX<SafeDepositRentalProps>(
  ({ title, footnote, context, className = '', ...rest }) => {
    const [points, setPoints] = useState<number[][]>([]);
    const [showMap, setShowMap] = useState<boolean>(false);

    const regions = useGetRegions();

    const toggleShowMap = () => {
      setShowMap(!showMap);
    };

    return (
      <BlockWrapper context={context} className={className} {...rest}>
        <div className="bg-white px-8 py-12">
          {title ? (
            <Heading title={title} headingType="h3" as="h2" className="mb-2.5 text-center" />
          ) : null}
          <SafeDepositRentalForm
            regions={regions}
            setPoints={setPoints}
            toggleShowMap={toggleShowMap}
          />
          {footnote ? <p className="text-s-light text-secondary-text">{footnote}</p> : null}
        </div>
        {points.length && showMap ? <YandexMap points={points} /> : null}
      </BlockWrapper>
    );
  },
);
