import { JSX } from '@redneckz/uni-jsx';
import type { Branch } from '../../hooks/useFetchSafeBoxes';
import type { Region } from './useGetRegions';
import { WrapperSelect } from './WrapperSelect';

interface RegionsAndBranchesProps {
  regions?: Region[];
  selectedRegion: string;
  onSelectedRegion: (value: string) => void;
  branches?: Branch[];
  selectedBranch: string;
  onSelectedBranch: (value: string) => void;
}

export const RegionsAndBranches = JSX<RegionsAndBranchesProps>(
  ({
    regions = [],
    selectedRegion,
    onSelectedRegion: onSelectedRegion,
    branches = [],
    selectedBranch,
    onSelectedBranch,
  }) => {
    return (
      <div className="flex justify-between gap-4 mb-6">
        <div className="max-w-[396px] w-1/2">
          <WrapperSelect
            data={regions}
            fieldValue="code"
            fieldLabel="name"
            selected={selectedRegion}
            setSelected={onSelectedRegion}
            label="Регион"
          />
        </div>
        <div className="max-w-[396px] w-1/2">
          <WrapperSelect
            data={branches}
            fieldValue="branchCode"
            fieldLabel="address"
            selected={selectedBranch}
            setSelected={onSelectedBranch}
            label="Отделение"
            placeholder="Выберите отделение"
          />
        </div>
      </div>
    );
  },
);
