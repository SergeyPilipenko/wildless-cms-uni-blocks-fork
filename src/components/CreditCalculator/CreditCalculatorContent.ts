import type { Tab } from '../../ui-kit/Tabs/TabsProps';

/**
 * @hidden
 */
export interface CalculatorParams {
  isAnnuity?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithInsurance?: number;
  rateWithoutInsurance?: number;
}

export interface CreditCalculatorData {
  rows?: CalculatorParams[];
}

/**
 * @title Вкладка
 */
export interface CreditCalculatorTab extends Tab {
  /** @title Справочник */
  directoryName?: string;
}

/**
 * @title Кредитный калькулятор
 */
export interface CreditCalculatorContent {
  /** @title Вкладки */
  tabs?: CreditCalculatorTab[];
}
