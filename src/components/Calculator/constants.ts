import { BonusCalculatorSourceBookParams } from './useBonusCalculatorParams';
import { CreditCalculatorSourceBookParams } from './useCreditCalculatorParams';

export const DEFAULT_MIN_SUM = 60000;
export const DEFAULT_MAX_SUM = 2000000;
export const DEFAULT_SUM = (DEFAULT_MAX_SUM - DEFAULT_MIN_SUM) / 2;
export const DEFAULT_MIN_MONTHS = 13;
export const DEFAULT_MAX_MONTHS = 60;
export const DEFAULT_MONTHS = Math.round((DEFAULT_MAX_MONTHS - DEFAULT_MIN_MONTHS) / 2);

export const MONTHS_IN_YEAR = 12;

export const MONTHLY_INTEREST_RATE = MONTHS_IN_YEAR * 100;

export const DEFAULT_CREDIT_CALCULATOR_PARAMS: CreditCalculatorSourceBookParams = {
  minSum: DEFAULT_MIN_SUM,
  maxSum: DEFAULT_MAX_SUM,
  minMonths: DEFAULT_MIN_MONTHS,
  maxMonths: DEFAULT_MAX_MONTHS,
  rateBottomRange: 10,
  rateTopRange: 7,
  isSalaryClient: true,
  isStateEmployee: true,
  isInsurance: true,
  sumBorder: 999999,
};

export const DEFAULT_TRAVEL_MIN_SUM = 6000;
export const DEFAULT_REST_MIN_SUM = 6000;

export const DEFAULT_BONUS_CALCULATOR_PARAMS: BonusCalculatorSourceBookParams = {
  minSumTravel: 6000,
  maxSumTravel: 200000,
  minSumOther: 6000,
  maxSumOther: 200000,
  maxBonus: 5000,
  prefMonthsNum: 2,
  prefTravelBonusRate: 0.015,
  prefRestBonusRate: 0.01,
  travelBonusRate: 0.015,
  restBonusRate: 0.01,
};

export const CREDIT_CALC_DEFAULT_DIR = 'credit-calculator-data';
export const BONUS_CALC_DEFAULT_DIR = 'bonus-calculator-data';
