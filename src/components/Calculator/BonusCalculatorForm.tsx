import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../types';
import { CommonCalculatorProps } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_REST_MIN_SUM, DEFAULT_TRAVEL_MIN_SUM } from './constants';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderWantedSumInput } from './renderWantedSumInput';
import { useBonusCalculatorParams } from './useBonusCalculatorParams';
import { renderFootnote } from './renderFootnote';

export interface BonusCalculatorProps extends CommonCalculatorProps, UniBlockProps {}

export const BonusCalculatorForm = JSX<BonusCalculatorProps>(
  ({ context, className = '', sourceBookDir = '', buttons, footnote }) => {
    const [travelExpenseValue, setTravelExpenseValue] = useState(DEFAULT_TRAVEL_MIN_SUM);
    const [restExpenseValue, setRestExpenseValue] = useState(DEFAULT_REST_MIN_SUM);
    const userInputParams = {
      travelExpenseValue,
      restExpenseValue,
    };
    const { minSumTravel, maxSumTravel, minSumOther, maxSumOther, monthBonus, yearBonus } =
      useBonusCalculatorParams(userInputParams, sourceBookDir);

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput(
            'Сумма покупок в категории путешествия, ₽',
            {
              minSum: minSumTravel,
              maxSum: maxSumTravel,
              moneyValue: travelExpenseValue,
              step: 500,
              isShowItems: false,
            },
            setTravelExpenseValue,
          )}
          {renderWantedSumInput(
            'Сумма покупок в остальных категориях, ₽',
            {
              className: 'mt-7',
              minSum: minSumOther,
              maxSum: maxSumOther,
              moneyValue: restExpenseValue,
              step: 500,
              isShowItems: false,
            },
            setRestExpenseValue,
          )}
        </div>
        <div>
          {monthBonus >= 0 ? (
            <Rate title="Баллов за месяц" rate={monthBonus} rateBlockClassName="tracking-[-14px]" />
          ) : null}
        </div>
        <div className="w-full max-w-[350px]">
          {yearBonus >= 0 ? <CalculatorValueBlock title="Баллов за год" value={yearBonus} /> : null}
          {renderButtonSection(context, buttons)}
          {renderFootnote(footnote)}
        </div>
      </section>
    );
  },
);
