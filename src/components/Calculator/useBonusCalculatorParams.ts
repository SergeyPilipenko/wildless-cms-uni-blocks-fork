import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { BONUS_CALC_DEFAULT_DIR, DEFAULT_BONUS_CALCULATOR_PARAMS } from './constants';
import { getBonus } from './getBonus';
import { useCalculatorParams } from './useCalculatorParams';

export interface BonusCalculatorUserInputParams {
  travelExpenseValue: number;
  restExpenseValue: number;
}

export interface BonusCalculatorSourceBookParams {
  minSumTravel: number;
  maxSumTravel: number;
  minSumOther: number;
  maxSumOther: number;
  maxBonus: number;
  prefMonthsNum: number;
  prefTravelBonusRate: number;
  prefRestBonusRate: number;
  travelBonusRate: number;
  restBonusRate: number;
}

export interface BonusCalculatorParams
  extends BonusCalculatorUserInputParams,
    BonusCalculatorSourceBookParams {
  monthBonus: number;
  yearBonus: number;
}

export const useBonusCalculatorParams = (
  context: ContentPageContext,
  userInputParams: BonusCalculatorUserInputParams,
  sourceBookDir: string,
) => {
  const { travelExpenseValue, restExpenseValue } = userInputParams;
  const bonusCalculatorSourceBookParams =
    useCalculatorParams<BonusCalculatorSourceBookParams>(
      context.useAsyncData,
      sourceBookDir || BONUS_CALC_DEFAULT_DIR,
    ) || DEFAULT_BONUS_CALCULATOR_PARAMS;

  const [monthBonus, yearBonus] = getBonus(
    bonusCalculatorSourceBookParams,
    travelExpenseValue,
    restExpenseValue,
  );

  return {
    ...bonusCalculatorSourceBookParams,
    ...userInputParams,
    monthBonus,
    yearBonus,
  };
};
