import { BonusCalculatorForm, BonusCalculatorProps } from './BonusCalculatorForm';
import { CreditCalculatorForm, CreditCalculatorProp } from './CreditCalculatorForm';
import { DepositCalculatorForm, DepositCalculatorProp } from './DepositCalculatorForm';

export type EmbeddableCalcProps =
  | CreditCalculatorProp
  | DepositCalculatorProp
  | BonusCalculatorProps;

export const EmbeddableCalcBlocks = {
  CreditCalculatorForm,
  DepositCalculatorForm,
  BonusCalculatorForm,
};
