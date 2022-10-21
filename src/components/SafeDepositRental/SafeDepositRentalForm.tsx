import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks/core';
import { Button } from '../../ui-kit/Button/Button';
import { fetchBranches } from './fetchBranches';
import { RegionsAndBranches } from './RegionsAndBranches';
import { RenderRadioButtons } from './RenderRadioButtons';
import { RentalPeriod } from './RentalPeriod';
import { SafeBoxCases } from './SafeBoxCases';
import { Branch, SafeBoxCase, SafeBoxCaseVolume } from './SafeDepositRentalContent';
import { SafeDepositRentalTotal } from './SafeDepositRentalTotal';
import type { Region } from './useGetRegions';

export interface SafeDepositRentalFormProps {
  regions?: Region[];
}

const DEFAULT_DAYS = 26;

export const SafeDepositRentalForm = JSX<SafeDepositRentalFormProps>(({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedCaseVolume, setSelectedCaseVolume] = useState<string>('');
  const [selectedBoxSize, setSelectedBoxSize] = useState<string>('');
  const [days, setDays] = useState<number>(DEFAULT_DAYS);

  useEffect(() => {
    setSelectedRegion(getInitialValueSelectedRegion(regions));
  }, [regions]);

  useEffect(() => {
    if (selectedRegion) {
      fetchBranches(selectedRegion).then((result) => {
        setBranches(result);
      });
    } else {
      setBranches([]);
    }

    setSelectedBranch('');
    setSelectedCaseVolume('');
    setSelectedBoxSize('');
  }, [regions, selectedRegion]);

  const onSelectedBranch = (value: string) => {
    setSelectedBranch(value);
    setSelectedCaseVolume('');
    setSelectedBoxSize('');
  };

  const onSelectedCaseVolume = (value: string) => {
    setSelectedCaseVolume(value);
    setSelectedBoxSize('');
  };

  const branch = getBranch(branches, selectedBranch);
  const caseVolumes = getCaseVolumes(branch?.safeBoxCaseVolumes);

  const safeBoxCases = getCaseVolume(branch?.safeBoxCaseVolumes, selectedCaseVolume)?.safeBoxCases;

  const tariffs = getTariffs(safeBoxCases, selectedBoxSize);

  return (
    <div className="flex justify-between align-top mb-6">
      <div className="flex-1 mr-9">
        <RegionsAndBranches
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectedRegion={setSelectedRegion}
          branches={branches}
          selectedBranch={selectedBranch}
          onSelectedBranch={onSelectedBranch}
        />
        <RentalPeriod days={days} setDays={setDays} />
        <SafeBoxCases
          caseVolumes={caseVolumes}
          selectedCaseVolume={selectedCaseVolume}
          onSelectedCaseVolume={onSelectedCaseVolume}
          safeBoxCases={safeBoxCases}
          selectedBoxSize={selectedBoxSize}
          onSelectedBoxSize={setSelectedBoxSize}
        />
        <span className="text-secondary-text text-l-light">Тип договора</span>
        <div className="flex justify-between items-center mt-5">
          <RenderRadioButtons />
          <Button text="Офисы на карте" version="primary" />
        </div>
      </div>
      <SafeDepositRentalTotal days={days} tariffs={tariffs} />
    </div>
  );
});

const getInitialValueSelectedRegion = (regions?: Region[]) =>
  regions?.find((_) => _.name === 'Москва')?.code || '';

const getBranch = (branches: Branch[], selectedBranch: string) =>
  branches.find((_) => _.branchCode === selectedBranch);

const getCaseVolumes = (safeBoxCaseVolumes?: SafeBoxCaseVolume[]) =>
  safeBoxCaseVolumes?.length ? safeBoxCaseVolumes?.filter((_) => _?.safeBoxCases?.length) : [];

const getCaseVolume = (caseVolumes?: SafeBoxCaseVolume[], selectedCaseVolume?: string) =>
  caseVolumes?.find((_) => _.volume === selectedCaseVolume);

const getTariffs = (safeBoxCases?: SafeBoxCase[], selectedBoxSize?: string) =>
  safeBoxCases?.find((_) => _.safeBoxCasesSize === selectedBoxSize)?.tariffs;
