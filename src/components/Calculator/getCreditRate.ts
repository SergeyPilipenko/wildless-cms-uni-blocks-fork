import type { CalculatorParams } from './CalculatorContent';

const DEFAULT_RATE = 10.2;

interface GetCreditRateParams {
  calculatorParams?: CalculatorParams;
  isInsurance: boolean;
}

export const getCreditRate = (params: GetCreditRateParams) => {
  const { calculatorParams, isInsurance } = params;

  if (!calculatorParams) {
    return DEFAULT_RATE;
  }

  return isInsurance
    ? calculatorParams?.rateWithInsurance || DEFAULT_RATE
    : calculatorParams?.rateWithoutInsurance || DEFAULT_RATE;
};
