import { JSX } from '@redneckz/uni-jsx';
import type { Branch, SafeBoxCase, SafeBoxCaseVolume } from '../../hooks/useFetchSafeBoxes';
import { Button } from '../../ui-kit/Button/Button';
import { RegionsAndBranches } from './RegionsAndBranches';
import { RenderRadioButtons } from './RenderRadioButtons';
import { RentalPeriod } from './RentalPeriod';
import { SafeBoxCases } from './SafeBoxCases';
import type { SafeDepositRentalFormProps } from './SafeDepositRentalForm';
import type { HandleChangeState, SafeDepositRentalState } from './SafeDepositRentalTypes';
import { getBranch, getCoordinates } from './utils';

export interface SafeDepositRentalFieldsProps
  extends SafeDepositRentalState,
    SafeDepositRentalFormProps {
  onChange: HandleChangeState;
  safeBoxCases?: SafeBoxCase[];
  caseVolumes?: SafeBoxCaseVolume[];
}

export const SafeDepositRentalFields = JSX<SafeDepositRentalFieldsProps>(
  ({
    regions,
    selectedRegion,
    branches,
    selectedBranch,
    days,
    selectedCaseVolume,
    selectedBoxSize,
    safeBoxCases,
    caseVolumes,
    setPoints,
    onChange,
    toggleShowMap,
  }) => {
    return (
      <div className="flex-1 mr-9">
        <RegionsAndBranches
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectedRegion={(value) => onChange({ selectedRegion: value })}
          branches={branches}
          selectedBranch={selectedBranch}
          onSelectedBranch={onSelectedBranch(onChange, setPoints, branches)}
        />
        <RentalPeriod days={days} setDays={(value) => onChange({ days: value })} />
        <SafeBoxCases
          caseVolumes={caseVolumes}
          selectedCaseVolume={selectedCaseVolume}
          onSelectedCaseVolume={onSelectedCaseVolume(onChange)}
          safeBoxCases={safeBoxCases}
          selectedBoxSize={selectedBoxSize}
          onSelectedBoxSize={(value) => onChange({ selectedBoxSize: value })}
        />
        <span className="text-secondary-text text-l-light">Тип договора</span>
        <div className="flex justify-between items-center mt-5">
          <RenderRadioButtons />
          <Button text="Офисы на карте" version="primary" onClick={toggleShowMap} />
        </div>
      </div>
    );
  },
);

const onSelectedBranch =
  (
    onChange: HandleChangeState,
    setPoints: SafeDepositRentalFieldsProps['setPoints'],
    branches: Branch[],
  ) =>
  (value: string) => {
    onChange({ selectedBranch: value, selectedCaseVolume: '', selectedBoxSize: '' });
    setPoints(getCoordinates(value ? getBranch(branches, value) : branches));
  };

const onSelectedCaseVolume = (onChange: HandleChangeState) => (value: string) => {
  onChange({ selectedCaseVolume: value, selectedBoxSize: '' });
};
