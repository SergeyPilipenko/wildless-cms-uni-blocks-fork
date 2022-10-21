import { CalculatorValueBlock } from './CalculatorValueBlock';

type porposalMortgage = {
  credit: number;
  period: number;
  taxRefund: number;
};

const monthlyPayment = 777777; // TODO: hardcode

export function renderProposalMortgage({ credit, period, taxRefund }: porposalMortgage) {
  return (
    <div>
      <div className="flex justify-between">
        {<CalculatorValueBlock title="Сумма кредита" value={credit} postfix="₽" />}
        {<CalculatorValueBlock title="Срок" value={period} postfix="лет" className="w-[120px]" />}
      </div>
      {<CalculatorValueBlock title="Ежемесячный платеж" value={monthlyPayment} postfix="₽" />}
      {<CalculatorValueBlock title="Налоговый вычет" value={taxRefund} postfix="₽" />}
    </div>
  );
}
