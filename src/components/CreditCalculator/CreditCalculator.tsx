import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { clamp } from '../../utils/clamp';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS, MONTHS_IN_YEAR } from './constants';
import type { CreditCalculatorContent } from './CreditCalculatorContent';
import { getCalculatorParams } from './getCalculatorParams';
import { getCreditRate } from './getCreditRate';
import { getCreditTermYears } from './getCreditTermYears';
import { getDefaultMonths } from './getDefaultMonths';
import { getDefaultSum } from './getDefaultSum';
import { getMonthlyPayment } from './getMonthlyPayment';
import { renderButton } from './renderButton';
import { renderMonthsInput } from './renderMonthsInput';
import { renderProposal } from './renderProposal';
import { renderTermsButton } from './renderTermsButton';
import { renderWantedSumInput } from './renderWantedSumInput';

export interface CreditCalculatorProps extends CreditCalculatorContent, UniBlockProps {}

const DEFAULT_PAYMENT_TYPE = 'annuity';

const borderStyle = 'border-solid border-[3px] border-primary-main rounded-md';

export const CreditCalculator = JSX<CreditCalculatorProps>(
  ({ context, className = '', directoryName }) => {
    const [moneyValue, setMoneyValue] = context.useState<number | undefined>(undefined);
    const [monthsValue, setMonthsValue] = context.useState<number | undefined>(undefined);
    const [isAnnuityChecked, setIsAnnuityChecked] = context.useState(true);
    const [isInsuranceChecked, setIsInsuranceChecked] = context.useState(true);

    const tableRows = useCreditCalculatorData(context.useAsyncData, directoryName).rows;
    const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isAnnuityChecked });

    const defaultSum = getDefaultSum(calculatorParams);
    const defaultMonths = getDefaultMonths(calculatorParams);

    const minMonths = calculatorParams?.minMonths || DEFAULT_MIN_MONTHS;
    const maxMonths = calculatorParams?.maxMonths || DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsuranceChecked });

    const monthlyPayment = getMonthlyPayment({
      calculatorParams,
      paymentType: DEFAULT_PAYMENT_TYPE,
      rate,
      sum: moneyValue || defaultSum,
      months: monthsValue || defaultMonths,
    });

    const creditTermYears = getCreditTermYears(minMonths, maxMonths);

    function handleButtonClick(value: number) {
      setMonthsValue(clamp(value * MONTHS_IN_YEAR, minMonths, maxMonths));
    }

    return (
      <section className={`font-sans text-primary-text p-10 bg-white ${className}`}>
        <div className={`box-border p-[49px] pr-[56px] mx-auto w-max ${borderStyle}`}>
          <div className="flex justify-between">
            <div className="mr-[42px]">
              {renderWantedSumInput({ calculatorParams, moneyValue, defaultSum, setMoneyValue })}
              {renderMonthsInput({
                minMonths,
                maxMonths,
                monthsValue,
                defaultMonths,
                setMonthsValue,
              })}
              <div className="flex mb-7">
                {creditTermYears.map((number, i) => renderButton(number, i, handleButtonClick))}
              </div>
              <Checkbox
                text="Получаю пенсию на карту Россельхозбанка"
                checked={isAnnuityChecked}
                onChange={setIsAnnuityChecked}
              />
              <Checkbox
                className="mt-3 mb-7"
                text="Комплексная страховая защита"
                checked={isInsuranceChecked}
                onChange={setIsInsuranceChecked}
              />
            </div>
            {renderProposal(monthlyPayment, rate)}
          </div>
          {renderTermsButton()}
        </div>
      </section>
    );
  },
);
