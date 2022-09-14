import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { getDefaultSum } from './getDefaultSum';
import { renderWantedSumInput } from './renderWantedSumInput';
import { renderRate } from './renderRate';
import { renderButtonSection } from './renderButtonSection';
import { BonusCalculatorParams, CommonCalculatorProps } from './CalculatorContent';

export interface BonusCalculatorProp
  extends BonusCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const BonusCalculatorForm = JSX<BonusCalculatorProp>(
  ({
    context,
    className = '',
    buttons,
    bonus,
    minSumTrip,
    maxSumTrip,
    minSumOther,
    maxSumOther,
  }) => {
    const [bonusTripValue, setBonusTripValue] = context.useState<number | undefined>(undefined);
    const [bonusOtherValue, setBonusOtherValue] = context.useState<number | undefined>(undefined);
    const calculatorTripParams = { minSum: minSumTrip, maxSum: maxSumTrip };
    const calculatorOtherParams = { minSum: minSumOther, maxSum: maxSumOther };

    const incomeBonus = 948841;
    const bonusOrDef = bonus || 2528;

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput({
            title: 'Сумма покупок в категории путешествия, ₽',
            calculatorParams: calculatorTripParams,
            moneyValue: bonusTripValue,
            defaultSum: getDefaultSum(calculatorTripParams),
            setMoneyValue: setBonusTripValue,
            isShowItems: false,
          })}
          {renderWantedSumInput({
            className: 'mt-6',
            title: 'Сумма покупок в остальных категориях, ₽',
            calculatorParams: calculatorOtherParams,
            moneyValue: bonusOtherValue,
            defaultSum: getDefaultSum(calculatorOtherParams),
            setMoneyValue: setBonusOtherValue,
            isShowItems: false,
          })}
        </div>
        <div>
          {bonusOrDef
            ? renderRate({
                rate: bonusOrDef,
                title: 'Баллов за месяц',
                className: 'tracking-[-14px]',
              })
            : null}
        </div>
        <div className="w-[240px]">
          {incomeBonus ? <CalculatorValueBlock title="Баллов за год" value={incomeBonus} /> : null}
          {renderButtonSection(context, buttons)}
        </div>
      </section>
    );
  },
);
