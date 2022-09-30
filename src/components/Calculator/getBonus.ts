import { MONTHS_IN_YEAR } from './constants';
import type { BonusCalculatorSourceBookParams } from './useBonusCalculatorParams';

export const getBonus = (
  params: BonusCalculatorSourceBookParams,
  bonusTravelValue: number,
  bonusOtherValue: number,
) => {
  const {
    minSumTravel,
    minSumOther,
    maxBonus,
    prefMonthsNum,
    prefTravelBonusRate,
    prefRestBonusRate,
    travelBonusRate,
    restBonusRate,
  } = params;

  if (bonusTravelValue === minSumTravel && bonusOtherValue === minSumOther) {
    return [0, 0];
  }

  const prefBonus = Math.min(
    Math.round(prefTravelBonusRate * bonusTravelValue) +
      Math.round(prefRestBonusRate * bonusOtherValue),
    maxBonus,
  );

  const bonus = Math.min(
    Math.round(travelBonusRate * bonusTravelValue) + Math.round(restBonusRate * bonusOtherValue),
    maxBonus,
  );

  const yearBonus = prefBonus * prefMonthsNum + bonus * (MONTHS_IN_YEAR - prefMonthsNum);

  return [prefBonus, yearBonus];
};
