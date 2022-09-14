import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS } from './constants';
import { renderRealEstateValue } from './renderRealEstateValue';
import { renderInitialFeeInput } from './renderInitialFeeInput';
import { getCreditRate } from './getCreditRate';
import { getCalculatorParams } from './getCalculatorParams';
import { getDefaultSum } from './getDefaultSum';
import { getDefaultMonths } from './getDefaultMonths';
import { renderMonthsInput } from './renderMonthsInput';
import { renderButtonSection } from './renderButtonSection';
import { renderProposalMortgage } from './renderProposalMortgage';
import { renderRate } from './renderRate';
import { CommonCalculatorProps, MortgageCalculatorParams } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';

export interface MortgageCalculatorProp
  extends MortgageCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const MortgageCalculatorForm = JSX<MortgageCalculatorProp>(
  ({ context, className = '', buttons }) => {
    const [moneyValue, setMoneyValue] = context.useState<number | undefined>(undefined);
    const [monthsValue, setMonthsValue] = context.useState<number | undefined>(undefined);
    const [isInsurance, toggleIsInsurance] = context.useState(false);
    const [isFullInsurance, toggleIsFullInsurance] = context.useState(false);

    const tableRows = useCreditCalculatorData(context.useAsyncData, 'directoryName').rows;
    const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isInsurance });

    const defaultSum = getDefaultSum(calculatorParams);
    const defaultMonths = getDefaultMonths(calculatorParams);

    const minMonths = calculatorParams?.minMonths || DEFAULT_MIN_MONTHS;
    const maxMonths = calculatorParams?.maxMonths || DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsurance });

    const monthlyPayment = 777777; // TODO: hardcode
    const proposalMortgageValue = { credit: 3892000, period: 15, taxRefund: 650000 }; // TODO: hardcode

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderRealEstateValue({ calculatorParams, moneyValue, defaultSum, setMoneyValue })}
          {renderInitialFeeInput({
            calculatorParams,
            moneyValue,
            defaultSum,
            setMoneyValue,
          })}
          {renderMonthsInput({
            title: 'Срок ипотеки, месяцев',
            minMonths,
            maxMonths,
            monthsValue,
            defaultMonths,
            setMonthsValue,
          })}
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
          <div>
            {rate
              ? renderRate({ rate: rate, title: 'Ставка', sup: '%', className: 'tracking-[-25px]' })
              : null}
          </div>
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
