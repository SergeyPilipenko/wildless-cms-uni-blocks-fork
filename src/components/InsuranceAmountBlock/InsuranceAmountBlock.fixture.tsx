import { context } from '../../react/setup-fixture';
import { InsuranceAmountBlock } from './InsuranceAmountBlock';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <InsuranceAmountBlock
        className="col-span-12"
        context={context}
        title="Выбор страховой суммы"
        insuranceTabs={[
          {
            title: 'Индивидуальный',
            cards: [
              {
                sum: 200000,
                fee: 2100,
                icon: {
                  icon: 'ActualBalanceIcon',
                },
                href: '',
              },
              {
                sum: 200000,
                fee: 2100,
                icon: { icon: 'ActualBalanceIcon' },
                href: '',
              },
              {
                sum: 200000,
                fee: 2100,
                icon: { icon: 'ActualBalanceIcon' },
                href: ']',
              },
            ],
          },
          {
            title: 'Семейный',
            cards: [
              {
                sum: 400000,
                fee: 3600,
                icon: { icon: 'ActualBalanceIcon' },
                href: '',
              },
            ],
          },
        ]}
      />
    </div>
  ),
};
