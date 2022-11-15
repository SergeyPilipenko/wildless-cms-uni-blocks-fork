export interface SafeDepositRentalState {
  selectedRegion: string;
  selectedBranch: string;
  selectedCaseVolume: string;
  selectedBoxSize: string;
  days: number;
}

export type HandleChangeState = (state: Partial<SafeDepositRentalState>) => void;
