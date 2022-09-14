import { DEFAULT_SUM } from './constants';
import type { CalculatorParams } from './CalculatorContent';

export const getDefaultSum = (calculatorParams: CalculatorParams) =>
  calculatorParams.maxSum && calculatorParams.minSum
    ? (calculatorParams.maxSum - calculatorParams.minSum) / 2
    : DEFAULT_SUM;
