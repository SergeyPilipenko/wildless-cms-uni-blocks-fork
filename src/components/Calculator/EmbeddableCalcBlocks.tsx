import { CreditCalculatorForm, CreditCalculatorProp } from './CreditCalculatorForm';
import { MortgageCalculatorForm, MortgageCalculatorProp } from './MortgageCalculatorForm';
import { DepositCalculatorForm, DepositCalculatorProp } from './DepositCalculatorForm';
import { BonusCalculatorForm, BonusCalculatorProp } from './BonusCalculatorForm';

export type EmbeddableCalcProps =
  | CreditCalculatorProp
  | MortgageCalculatorProp
  | DepositCalculatorProp
  | BonusCalculatorProp;

export const EmbeddableCalcBlocks = {
  CreditCalculatorForm,
  MortgageCalculatorForm,
  DepositCalculatorForm,
  BonusCalculatorForm,
};
