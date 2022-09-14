import { CalculatorValueBlock } from './CalculatorValueBlock';

type porposalMortgage = {
  credit: number;
  period: number;
  taxRefund: number;
};

export function renderProposalMortgage({ credit, period, taxRefund }: porposalMortgage) {
  return (
    <div>
      {<CalculatorValueBlock title="Сумма кредита" value={credit} postfix="₽" />}
      {<CalculatorValueBlock title="Срок" value={period} postfix="лет" />}
      {<CalculatorValueBlock title="Налоговый вычет" value={taxRefund} postfix="₽" />}
    </div>
  );
}
