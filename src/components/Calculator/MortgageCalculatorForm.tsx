// TEMP
import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { CommonCalculatorProps, MortgageCalculatorParams } from './CalculatorContent';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS } from './constants';
import { getCreditRate } from './getCreditRate';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderInitialFeeInput } from './renderInitialFeeInput';
import { renderMonthsInput } from './renderMonthsInput';
import { renderProposalMortgage } from './renderProposalMortgage';
import { renderRealEstateValue } from './renderRealEstateValue';
import { renderFootnote } from './renderFootnote';

export interface MortgageCalculatorProp
  extends MortgageCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const MortgageCalculatorForm = JSX<MortgageCalculatorProp>(
  ({ context, className = '', buttons, footnote }) => {
    const [moneyValue, setMoneyValue] = useState(1000000);
    const [monthsValue, setMonthsValue] = useState(12);
    const [isInsurance, toggleIsInsurance] = useState(false);
    const [isFullInsurance, toggleIsFullInsurance] = useState(false);

    const calculatorParams = {}; // getCalculatorParams(context, { isAnnuity: isInsurance });

    const minMonths = /*calculatorParams?.minMonths ||*/ DEFAULT_MIN_MONTHS;
    const maxMonths = /* calculatorParams?.maxMonths || */ DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsurance });
    const proposalMortgageValue = { credit: 3892000, period: 15, taxRefund: 650000 }; // TODO: hardcode

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderRealEstateValue('Стоимость недвижимости, ₽', { moneyValue }, setMoneyValue)}
          {renderInitialFeeInput(
            'Первоначальный взнос, ₽',
            {
              moneyValue,
            },
            setMoneyValue,
          )}
          {renderMonthsInput(
            'Срок ипотеки, месяцев',
            {
              minMonths,
              maxMonths,
              monthsValue,
            },
            setMonthsValue,
          )}
          <div className="mt-7">
            <Checkbox text="Страхование жизни" checked={isInsurance} onChange={toggleIsInsurance} />
            <Checkbox
              className="mt-4"
              text="Страхование жизни, здоровья и временной утраты трудоспособности"
              checked={isFullInsurance}
              onChange={toggleIsFullInsurance}
            />
          </div>
        </div>
        <Rate rate={rate} rateBlockClassName="tracking-[-25px]" unit="%" />
        <div className="w-full max-w-[350px]">
          <div>{renderProposalMortgage(proposalMortgageValue)}</div>
          {renderButtonSection(context, buttons)}
          {renderFootnote(footnote)}
        </div>
      </section>
    );
  },
);
