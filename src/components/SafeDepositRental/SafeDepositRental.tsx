import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import { useSafeBoxes } from '../../hooks/useSafeBoxes';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { SafeDepositRentalContent } from './SafeDepositRentalContent';
import { SafeDepositRentalForm } from './SafeDepositRentalForm';
import { HandleChangeState, SafeDepositRentalState } from './SafeDepositRentalTypes';
import { Region, useGetRegions } from './useGetRegions';
import { getBranch, getCoordinates } from './utils';
import { YandexMap } from '../../ui-kit/YandexMap/YandexMap';

export interface SafeDepositRentalProps extends SafeDepositRentalContent, UniBlockProps {}

const DEFAULT_DAYS = 26;

export const SafeDepositRental = JSX<SafeDepositRentalProps>(
  ({ title, footnote, context, className = '', ...rest }) => {
    const [showMap, setShowMap] = useState<boolean>(false);
    const [safeDepositState, setStateDepositState] = useState<SafeDepositRentalState>({
      selectedRegion: '',
      selectedBranch: '',
      selectedCaseVolume: '',
      selectedBoxSize: '',
      days: DEFAULT_DAYS,
    });

    const regions = useGetRegions();

    const selectedRegion = normalizeSelectedRegion(safeDepositState.selectedRegion, regions);

    const branches = useSafeBoxes(selectedRegion);

    const handleChangeSafeDepositState: HandleChangeState = useCallback(
      (state) => setStateDepositState((oldState) => ({ ...oldState, ...state })),
      [setStateDepositState],
    );

    const onShowMapToggle = () => {
      setShowMap(!showMap);
    };

    const points = getCoordinates(getBranch(branches, safeDepositState.selectedBranch) || branches);

    return (
      <BlockWrapper context={context} className={className} {...rest}>
        <div className="font-sans bg-white px-8 py-12">
          {title ? (
            <Heading
              title={title}
              headingType="h3"
              as="h2"
              className="text-primary-text mb-2.5 text-center"
            />
          ) : null}
          <SafeDepositRentalForm
            regions={regions}
            branches={branches}
            data={{ ...safeDepositState, selectedRegion }}
            onShowMapToggle={onShowMapToggle}
            onChange={handleChangeSafeDepositState}
          />
          {footnote ? <p className="text-s-light text-secondary-text">{footnote}</p> : null}
        </div>
        {points.length && showMap ? <YandexMap points={points} className="h-[640px]" /> : null}
      </BlockWrapper>
    );
  },
);

const normalizeSelectedRegion = (selectedRegion: string, regions?: Region[]) =>
  !selectedRegion && regions?.length && regions[0]?.code ? regions[0].code : selectedRegion;
