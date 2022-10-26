import type { Branch } from '../../hooks/useFetchSafeBoxes';

export interface SafeDepositRentalState {
  selectedRegion: string;
  selectedBranch: string;
  selectedCaseVolume: string;
  selectedBoxSize: string;
  days: number;
  branches: Branch[];
}

export type HandleChangeState = (state: Partial<SafeDepositRentalState>) => void;
