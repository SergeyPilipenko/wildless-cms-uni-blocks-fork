import type { EmptyOption } from '../../model/EmptyOptionType';
import type { IconProps } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';
import type { Footnote } from '../../model/Footnote';

export type CommonCalculatorProps = Footnote & {
  /** @title Кнопки */
  buttons?: ButtonWithIconProps[];
  /** @title Адрес справочника */
  sourceBookDir?: string;
};

/**
 * TODO: данные из справочника
 **/
export interface CreditCalculatorParams {
  /** @hidden */
  isSalaryClient?: boolean;
  /** @hidden */
  isStateEmployee?: boolean;
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
  minSumTravel?: number;
  /** @hidden */
  maxSumTravel?: number;
  /** @hidden */
  minSumOther?: number;
  /** @hidden */
  maxSumOther?: number;
  maxBonus?: number;
  prefMonthsNum?: number;
  prefTravelBonusRate?: number;
  prefRestBonusRate?: number;
  travelBonusRate?: number;
  restBonusRate?: number;
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
export type CreditCalculatorParamsDef = TitleProps &
  CreditCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'CreditCalculatorForm';
  };

/**
 * @title Калькулятор вкладов
 * @default {"calcType": "DepositCalculatorForm"}
 */
export type DepositCalculatorParamsDef = TitleProps &
  DepositCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'DepositCalculatorForm';
  };

/**
 * @title Калькулятор бонусов
 * @default {"calcType": "BonusCalculatorForm"}
 */
export type BonusCalculatorParamsDef = TitleProps &
  BonusCalculatorParams &
  CommonCalculatorProps & {
    calcType: 'BonusCalculatorForm';
  };

/**
 * @title Настройки калькулятора
 */
export type CalculatorBlockDef =
  | EmptyOption
  | CreditCalculatorParamsDef
  | DepositCalculatorParamsDef
  | BonusCalculatorParamsDef;

/**
 * @title Кнопка навигации
 */
export type CalculatorNav = HeadlineCommonProps & IconProps;

/**
 * @title Вкладка
 */
export type CalculatorTab = TitleProps & {
  nav?: CalculatorNav;
  calculatorBlock?: CalculatorBlockDef;
};

/**
 * @title Калькулятор
 */
export interface CalculatorContent {
  /** @title Вкладки */
  calculatorTabs?: CalculatorTab[];
}
