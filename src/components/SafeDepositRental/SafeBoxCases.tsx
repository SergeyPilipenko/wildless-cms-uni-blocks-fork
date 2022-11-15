import { JSX } from '@redneckz/uni-jsx';
import type { SafeBoxCase, SafeBoxCaseVolume } from '../../hooks/useSafeBoxes';
import { WrapperSelect } from './WrapperSelect';

interface SafeBoxCasesProps {
  caseVolumes?: SafeBoxCaseVolume[];
  selectedCaseVolume: string;
  onSelectedCaseVolume: (value: string) => void;
  safeBoxCases?: SafeBoxCase[];
  selectedBoxSize: string;
  onSelectedBoxSize: (value: string) => void;
}

export const SafeBoxCases = JSX<SafeBoxCasesProps>(
  ({
    caseVolumes = [],
    selectedCaseVolume,
    onSelectedCaseVolume,
    safeBoxCases = [],
    selectedBoxSize,
    onSelectedBoxSize,
  }) => {
    return (
      <div className="flex justify-between mb-6">
        <div className="mr-4 w-full">
          <WrapperSelect
            data={caseVolumes}
            fieldLabel="volume"
            selected={selectedCaseVolume}
            setSelected={onSelectedCaseVolume}
            label="Размер"
            placeholder="Выберите размер"
          />
        </div>
        <div className="w-full">
          <WrapperSelect
            data={safeBoxCases}
            fieldLabel="safeBoxCasesSize"
            selected={selectedBoxSize}
            setSelected={onSelectedBoxSize}
            label="Параметры ячейки, мм (ВхШхД)"
            placeholder="Выберите параметр ячейки"
          />
        </div>
      </div>
    );
  },
);
