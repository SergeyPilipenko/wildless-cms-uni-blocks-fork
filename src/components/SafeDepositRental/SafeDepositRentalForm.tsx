import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks/core';
import { SafeBoxCase, SafeBoxCaseVolume, useFetchSafeBoxes } from '../../hooks/useFetchSafeBoxes';
import { SafeDepositRentalFields } from './SafeDepositRentalFields';
import { SafeDepositRentalTotal } from './SafeDepositRentalTotal';
import type { HandleChangeState, SafeDepositRentalState } from './SafeDepositRentalTypes';
import type { Region } from './useGetRegions';
import { getBranch, getCoordinates } from './utils';

const DEFAULT_DAYS = 26;

export interface SafeDepositRentalFormProps {
  regions?: Region[];
  setPoints: (points: number[][]) => void;
  toggleShowMap: () => void;
}

export const SafeDepositRentalForm = JSX<SafeDepositRentalFormProps>((props) => {
  const [safeDepositState, setStateDepositState] = useState<SafeDepositRentalState>({
    selectedRegion: '',
    selectedBranch: '',
    selectedCaseVolume: '',
    selectedBoxSize: '',
    days: DEFAULT_DAYS,
    branches: [],
  });

  const resultBranches = useFetchSafeBoxes(safeDepositState.selectedRegion);

  const handleChangeSafeDepositState: HandleChangeState = (state) =>
    setStateDepositState((oldState) => ({ ...oldState, ...state }));

  useEffect(
    () =>
      handleChangeSafeDepositState({
        selectedRegion: getInitialValueSelectedRegion(props.regions),
      }),
    [props.regions],
  );

  useEffect(() => {
    if (Array.isArray(resultBranches) && resultBranches.length) {
      handleChangeSafeDepositState({ branches: resultBranches });
      props.setPoints(getCoordinates(resultBranches));
    }
  }, [resultBranches]);

  useEffect(() => {
    handleChangeSafeDepositState({
      selectedBranch: '',
      selectedCaseVolume: '',
      selectedBoxSize: '',
    });
  }, [safeDepositState.selectedRegion]);

  const branch = getBranch(safeDepositState.branches, safeDepositState.selectedBranch);
  const caseVolumes = getCaseVolumes(branch?.safeBoxCaseVolumes);

  const safeBoxCases = getCaseVolume(
    branch?.safeBoxCaseVolumes,
    safeDepositState.selectedCaseVolume,
  )?.safeBoxCases;

  const tariffs = getTariffs(safeBoxCases, safeDepositState.selectedBoxSize);

  return (
    <div className="flex justify-between align-top mb-6">
      <SafeDepositRentalFields
        {...safeDepositState}
        {...props}
        caseVolumes={caseVolumes}
        safeBoxCases={safeBoxCases}
        onChange={handleChangeSafeDepositState}
      />
      <SafeDepositRentalTotal days={safeDepositState.days} tariffs={tariffs} />
    </div>
  );
});

const getInitialValueSelectedRegion = (regions?: Region[]) =>
  regions?.length && regions[0]?.code ? regions[0].code : '';

const getCaseVolumes = (safeBoxCaseVolumes?: SafeBoxCaseVolume[]) =>
  safeBoxCaseVolumes?.length ? safeBoxCaseVolumes?.filter((_) => _?.safeBoxCases?.length) : [];

const getCaseVolume = (caseVolumes?: SafeBoxCaseVolume[], selectedCaseVolume?: string) =>
  caseVolumes?.find((_) => _.volume === selectedCaseVolume);

const getTariffs = (safeBoxCases?: SafeBoxCase[], selectedBoxSize?: string) =>
  safeBoxCases?.find((_) => _.safeBoxCasesSize === selectedBoxSize)?.tariffs;
