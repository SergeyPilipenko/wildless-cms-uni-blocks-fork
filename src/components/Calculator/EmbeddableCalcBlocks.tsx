import { BonusCalculatorForm, BonusCalculatorProps } from './BonusCalculatorForm';
import { CreditCalculatorForm, CreditCalculatorProp } from './CreditCalculatorForm';
import { DepositCalculatorForm, DepositCalculatorProp } from './DepositCalculatorForm';
import { MortgageCalculatorForm, MortgageCalculatorProp } from './MortgageCalculatorForm';

export type EmbeddableCalcProps =
  | CreditCalculatorProp
  | MortgageCalculatorProp
  | DepositCalculatorProp
  | BonusCalculatorProps;

export const EmbeddableCalcBlocks = {
  CreditCalculatorForm,
  MortgageCalculatorForm,
  DepositCalculatorForm,
  BonusCalculatorForm,
};
