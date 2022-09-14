import type { CalculatorParams } from './CalculatorContent';

interface GetCalculatorParamsParams {
  tableRows?: CalculatorParams[];
  isAnnuity?: boolean;
}

export const getCalculatorParams = (params: GetCalculatorParamsParams) => {
  const { tableRows, isAnnuity = false } = params;

  if (!tableRows) return {};

  const calculatorParams = tableRows.find((row) => row.isAnnuity === isAnnuity);

  return calculatorParams || {};
};
