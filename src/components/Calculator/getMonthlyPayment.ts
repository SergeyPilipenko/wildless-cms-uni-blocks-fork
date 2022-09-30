/**
 * Формулы расчёта аннуитетных и дифференцированных платежей:
 * https://finuslugi.ru/potrebitelskie_kredity/stat_annuitetnye_i_differentsirovannye_platezhi
 */

import { MONTHLY_INTEREST_RATE, MONTHS_IN_YEAR } from './constants';
import type { CreditCalculatorUserInputParams } from './useCreditCalculatorParams';

export const getMonthlyPayment = (rate: number, params: CreditCalculatorUserInputParams) => {
  const { isAnnuity, moneyValue, monthsValue } = params;

  if (isAnnuity) {
    const i = rate / MONTHLY_INTEREST_RATE; // Используется значение ставки в процентах

    return moneyValue * (i + i / (Math.pow(1 + i, monthsValue) - 1));
  } else {
    return Math.round(moneyValue / monthsValue) + moneyValue * (rate / (MONTHS_IN_YEAR * 100)); // Используется значение ставки (rate) в процентах, делённое на сто.
  }
};
