import { JSX } from '@redneckz/uni-jsx';
import { useEffect } from '@redneckz/uni-jsx/lib/hooks/core';
import { Branch, SafeBoxCase, SafeBoxCaseVolume } from '../../hooks/useSafeBoxes';
import { SafeDepositRentalFields } from './SafeDepositRentalFields';
import { SafeDepositRentalTotal } from './SafeDepositRentalTotal';
import type { SafeDepositRentalState } from './SafeDepositRentalTypes';
import type { Region } from './useGetRegions';
import { getBranch } from './utils';

export interface SafeDepositRentalFormProps {
  regions: Region[];
  branches: Branch[];
  data: SafeDepositRentalState;
  onShowMapToggle: () => void;
  onChange: (data: Partial<SafeDepositRentalState>) => void;
}

export const SafeDepositRentalForm = JSX<SafeDepositRentalFormProps>((props) => {
  const { regions, data, branches, onChange, onShowMapToggle } = props;

  useEffect(() => {
    onChange({
      selectedBranch: '',
      selectedCaseVolume: '',
      selectedBoxSize: '',
    });
  }, [data.selectedRegion, onChange]);

  const branch = getBranch(branches, data.selectedBranch);
  const caseVolumes = getCaseVolumes(branch?.safeBoxCaseVolumes);

  const safeBoxCases = getCaseVolume(
    branch?.safeBoxCaseVolumes,
    data.selectedCaseVolume,
  )?.safeBoxCases;

  const tariffs = getTariffs(safeBoxCases, data.selectedBoxSize);

  return (
    <div className="flex justify-between align-top mb-6">
      <SafeDepositRentalFields
        {...data}
        regions={regions}
        onShowMapToggle={onShowMapToggle}
        branches={branches}
        caseVolumes={caseVolumes}
        safeBoxCases={safeBoxCases}
        onChange={onChange}
      />
      <SafeDepositRentalTotal days={data.days} tariffs={tariffs} />
    </div>
  );
});

const getCaseVolumes = (safeBoxCaseVolumes?: SafeBoxCaseVolume[]) =>
  safeBoxCaseVolumes?.length ? safeBoxCaseVolumes?.filter((_) => _?.safeBoxCases?.length) : [];

const getCaseVolume = (caseVolumes?: SafeBoxCaseVolume[], selectedCaseVolume?: string) =>
  caseVolumes?.find((_) => _.volume === selectedCaseVolume);

const getTariffs = (safeBoxCases?: SafeBoxCase[], selectedBoxSize?: string) =>
  safeBoxCases?.find((_) => _.safeBoxCasesSize === selectedBoxSize)?.tariffs;
