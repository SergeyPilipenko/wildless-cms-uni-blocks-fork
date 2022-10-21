export interface Tariff {
  tariffType?: string;
  tariffValue?: number;
}

export interface SafeBoxCase {
  safeBoxCasesSize?: string;
  tariffs?: Tariff[];
}

export interface SafeBoxCaseVolume {
  volume?: string;
  safeBoxCases?: SafeBoxCase[];
}

export interface Branch {
  branchCode?: string;
  address?: string;
  safeBoxCaseVolumes?: SafeBoxCaseVolume[];
}

/**
 * @title Аренда сейфовых ячеек
 */
export interface SafeDepositRentalContent {
  /** @title Заголовок */
  title?: string;
}
