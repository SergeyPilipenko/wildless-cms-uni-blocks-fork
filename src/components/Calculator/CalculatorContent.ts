import { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

export interface CommonCalculatorProps {
  buttons?: ButtonWithIconProps[];
}

export interface CreditCalculatorParams {
  isSalary?: boolean;
  isInsurance?: boolean;
  isAnnuity?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithInsurance?: number;
  rateWithoutInsurance?: number;
}

export interface MortgageCalculatorParams {
  isAnnuity?: boolean;
  minInitialContribution?: number;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithInsurance?: number;
  rateWithoutInsurance?: number;
}

export interface DepositCalculatorParams {
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rate?: number;
}

export interface BonusCalculatorParams {
  bonus?: number;
  minSumTrip?: number;
  maxSumTrip?: number;
  minSumOther?: number;
  maxSumOther?: number;
}

export interface CalculatorParams {
  isAnnuity?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithInsurance?: number;
  rateWithoutInsurance?: number;
}

/**
 * @title Заголовок
 * @default {"calcType": "CreditCalculatorForm"}
 */
export type CreditCalculatorParamsDef = CreditCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'CreditCalculatorForm';
  };

/**
 * @title Заголовок
 * @default {"calcType": "MortgageCalculatorForm"}
 */
export type MortgageCalculatorParamsDef = MortgageCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'MortgageCalculatorForm';
  };

/**
 * @title Заголовок
 * @default {"calcType": "DepositCalculatorForm"}
 */
export type DepositCalculatorParamsDef = DepositCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'DepositCalculatorForm';
  };

/**
 * @title Заголовок
 * @default {"calcType": "BonusCalculatorForm"}
 */
export type BonusCalculatorParamsDef = BonusCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'BonusCalculatorForm';
  };

/**
 * @title Выберите калькулятор
 */
export type EmptyOption = null;

/**
 * @title Калькулятор
 */
export type CalculatorBlockDef =
  | EmptyOption
  | CreditCalculatorParamsDef
  | MortgageCalculatorParamsDef
  | DepositCalculatorParamsDef
  | BonusCalculatorParamsDef;

/**
 * @title Кнопка навигации
 */
export interface CalculatorNav {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  icon?: Picture;
}

/**
 * @title Вкладка
 */
export interface CalculatorTab {
  nav?: CalculatorNav;
  /** @title Настройки калькулятора */
  calculatorBlock?: CalculatorBlockDef;
}

/**
 * @title Калькулятор
 */
export interface CalculatorContent {
  /** @title Вкладки */
  calcTabs?: CalculatorTab[];
}
