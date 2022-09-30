// TEMP
import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { CommonCalculatorProps, MortgageCalculatorParams } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS } from './constants';
import { getCreditRate } from './getCreditRate';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderInitialFeeInput } from './renderInitialFeeInput';
import { renderMonthsInput } from './renderMonthsInput';
import { renderProposalMortgage } from './renderProposalMortgage';
import { renderRealEstateValue } from './renderRealEstateValue';

export interface MortgageCalculatorProp
  extends MortgageCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const MortgageCalculatorForm = JSX<MortgageCalculatorProp>(
  ({ context, className = '', buttons }) => {
    const [moneyValue, setMoneyValue] = context.useState<number>(1000000);
    const [monthsValue, setMonthsValue] = context.useState<number>(12);
    const [isInsurance, toggleIsInsurance] = context.useState(false);
    const [isFullInsurance, toggleIsFullInsurance] = context.useState(false);

    const calculatorParams = {}; // getCalculatorParams(context, { isAnnuity: isInsurance });

    const minMonths = /*calculatorParams?.minMonths ||*/ DEFAULT_MIN_MONTHS;
    const maxMonths = /* calculatorParams?.maxMonths || */ DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsurance });

    const monthlyPayment = 777777; // TODO: hardcode
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
              text="Страхование жизни, злоровья и временной утраты трудоспособности"
              checked={isFullInsurance}
              onChange={toggleIsFullInsurance}
            />
          </div>
        </div>
        <div>
          <Rate rate={rate} rateBlockClassName="tracking-[-25px]" unit="%" />

          <CalculatorValueBlock title="Ежемесячный платеж" value={monthlyPayment} postfix="₽" />
        </div>
        <div>
          <div className="w-[351px]">{renderProposalMortgage(proposalMortgageValue)}</div>
          {renderButtonSection(context, buttons)}
        </div>
      </section>
    );
  },
);
