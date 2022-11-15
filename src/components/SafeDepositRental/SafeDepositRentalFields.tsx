import { JSX } from '@redneckz/uni-jsx';
import type { Branch, SafeBoxCase, SafeBoxCaseVolume } from '../../hooks/useSafeBoxes';
import { Button } from '../../ui-kit/Button/Button';
import { RegionsAndBranches } from './RegionsAndBranches';
import { RenderRadioButtons } from './RenderRadioButtons';
import { RentalPeriod } from './RentalPeriod';
import { SafeBoxCases } from './SafeBoxCases';
import type { HandleChangeState, SafeDepositRentalState } from './SafeDepositRentalTypes';
import { Region } from './useGetRegions';

export interface SafeDepositRentalFieldsProps extends SafeDepositRentalState {
  regions?: Region[];
  safeBoxCases?: SafeBoxCase[];
  caseVolumes?: SafeBoxCaseVolume[];
  branches?: Branch[];
  onShowMapToggle: () => void;
  onChange: HandleChangeState;
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
    onChange,
    onShowMapToggle,
  }) => {
    return (
      <div className="flex-1 mr-9">
        <RegionsAndBranches
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectedRegion={(value) => onChange({ selectedRegion: value })}
          branches={branches}
          selectedBranch={selectedBranch}
          onSelectedBranch={onSelectedBranch(onChange)}
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
          <Button text="Офисы на карте" version="primary" onClick={onShowMapToggle} />
        </div>
      </div>
    );
  },
);

const onSelectedBranch = (onChange: HandleChangeState) => (value: string) => {
  onChange({ selectedBranch: value, selectedCaseVolume: '', selectedBoxSize: '' });
};

const onSelectedCaseVolume = (onChange: HandleChangeState) => (value: string) => {
  onChange({ selectedCaseVolume: value, selectedBoxSize: '' });
};
