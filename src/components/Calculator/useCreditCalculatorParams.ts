import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { CREDIT_CALC_DEFAULT_DIR, DEFAULT_CREDIT_CALCULATOR_PARAMS } from './constants';
import { getMonthlyPayment } from './getMonthlyPayment';
import { useCalculatorParams } from './useCalculatorParams';

export interface CommonCreditParams {
  isInsurance: boolean;
  isSalaryClient: boolean;
  isStateEmployee: boolean;
}
export interface CreditCalculatorSourceBookParams extends CommonCreditParams {
  minSum: number;
  maxSum: number;
  minMonths: number;
  maxMonths: number;
  rateBottomRange: number;
  rateTopRange: number;
  sumBorder: number;
}

export interface CreditCalculatorUserInputParams extends CommonCreditParams {
  isAnnuity: boolean;
  moneyValue: number;
  monthsValue: number;
}

export interface CreditCalculatorParams
  extends CreditCalculatorSourceBookParams,
    CreditCalculatorUserInputParams {
  monthlyPayment: number;
  finalRate: number;
}

export type CreditCalculatorData = {
  rows: CreditCalculatorSourceBookParams[];
};

export const getCreditCalculatorParams = (
  context: ContentPageContext,
  userInputParams: CreditCalculatorUserInputParams,
  sourceBookDir?: string,
): CreditCalculatorParams => {
  const { isInsurance, isSalaryClient, isStateEmployee, moneyValue } = userInputParams;

  const data = useCalculatorParams<CreditCalculatorData>(
    context.useAsyncData,
    sourceBookDir || CREDIT_CALC_DEFAULT_DIR,
  );
  const creditCalculatorSourceBookParams =
    data?.rows.find((_) => {
      return (
        isInsurance === _.isInsurance &&
        isSalaryClient === _.isSalaryClient &&
        isStateEmployee === _.isStateEmployee
      );
    }) || DEFAULT_CREDIT_CALCULATOR_PARAMS;

  const { rateBottomRange, rateTopRange, sumBorder } = creditCalculatorSourceBookParams;
  const finalRate = moneyValue <= sumBorder ? rateBottomRange : rateTopRange;
  const monthlyPayment = getMonthlyPayment(finalRate, userInputParams);

  const extendedCalculatorParams = {
    ...creditCalculatorSourceBookParams,
    ...userInputParams,
    finalRate,
    monthlyPayment,
  };

  return extendedCalculatorParams;
};
