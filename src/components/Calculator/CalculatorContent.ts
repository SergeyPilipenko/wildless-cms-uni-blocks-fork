import type { EmptyOption } from '../../model/EmptyOptionType';
import type { Footnote } from '../../model/Footnote';
import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';
import type { IconProps } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

export type CommonCalculatorProps = Footnote & {
  /** @title Кнопки */
  buttons?: ButtonWithIconProps[];
  /** @title Адрес справочника */
  sourceBookDir?: string;
};

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
export type CalculatorTab = {
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
