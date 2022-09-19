import type { EmptyOption } from '../../model/EmptyOptionType';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

export interface CommonCalculatorProps {
  /** @title Кнопки */
  buttons?: ButtonWithIconProps[];
}

/**
 * TODO: данные из справочника
 **/
export interface CreditCalculatorParams {
  /** @hidden */
  isSalary?: boolean;
  /** @hidden */
  isInsurance?: boolean;
  /** @hidden */
  isAnnuity?: boolean;
  /** @hidden */
  minSum?: number;
  /** @hidden */
  maxSum?: number;
  /** @hidden */
  minMonths?: number;
  /** @hidden */
  maxMonths?: number;
  /** @hidden */
  rateWithInsurance?: number;
  /** @hidden */
  rateWithoutInsurance?: number;
}

/**
 * TODO: данные из справочника
 **/
export interface MortgageCalculatorParams {
  /** @hidden */
  isAnnuity?: boolean;
  /** @hidden */
  minInitialContribution?: number;
  /** @hidden */
  minSum?: number;
  /** @hidden */
  maxSum?: number;
  /** @hidden */
  minMonths?: number;
  /** @hidden */
  maxMonths?: number;
  /** @hidden */
  rateWithInsurance?: number;
  /** @hidden */
  rateWithoutInsurance?: number;
}

/**
 * TODO: данные из справочника
 **/
export interface DepositCalculatorParams {
  /** @hidden */
  minSum?: number;
  /** @hidden */
  maxSum?: number;
  /** @hidden */
  minMonths?: number;
  /** @hidden */
  maxMonths?: number;
  /** @hidden */
  rate?: number;
}

/**
 * TODO: данные из справочника
 **/

export interface BonusCalculatorParams {
  /** @hidden */
  bonus?: number;
  /** @hidden */
  minSumTrip?: number;
  /** @hidden */
  maxSumTrip?: number;
  /** @hidden */
  minSumOther?: number;
  /** @hidden */
  maxSumOther?: number;
}

/**
 * ? Общий интерфейс для всех типов калькуляторов?
 * ? Используется во вложенных функциях. Может быть как то разбить это и вынести отсюда?
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

/**
 * @title Кредитный калькулятор
 * @default {"calcType": "CreditCalculatorForm"}
 */
export type CreditCalculatorParamsDef = CreditCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'CreditCalculatorForm';
  };

/**
 * @title Ипотечный калькулятор
 * @default {"calcType": "MortgageCalculatorForm"}
 */
export type MortgageCalculatorParamsDef = MortgageCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'MortgageCalculatorForm';
  };

/**
 * @title Калькулятор вкладов
 * @default {"calcType": "DepositCalculatorForm"}
 */
export type DepositCalculatorParamsDef = DepositCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'DepositCalculatorForm';
  };

/**
 * @title Калькулятор бонусов
 * @default {"calcType": "BonusCalculatorForm"}
 */
export type BonusCalculatorParamsDef = BonusCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'BonusCalculatorForm';
  };

/**
 * @title Настройки калькулятора
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
  calculatorBlock?: CalculatorBlockDef;
}

/**
 * @title Калькулятор
 */
export interface CalculatorContent {
  /** @title Вкладки */
  calcTabs?: CalculatorTab[];
}
