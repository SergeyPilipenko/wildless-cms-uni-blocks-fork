import { JSX } from '@redneckz/uni-jsx';
import type { Branch } from './SafeDepositRentalContent';
import { Region } from './useGetRegions';
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
      <div className="flex justify-between mb-6">
        <div className="w-full mr-4">
          <WrapperSelect
            data={regions}
            fieldValue="code"
            fieldLabel="name"
            selected={selectedRegion}
            setSelected={onSelectedRegion}
            label="Город"
          />
        </div>
        <div className="w-full">
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
