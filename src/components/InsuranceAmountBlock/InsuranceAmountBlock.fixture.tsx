import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { InsuranceAmountBlock } from './InsuranceAmountBlock';

const buttonPrimary: ButtonWithIconProps = {
  href: '/insurance',
  text: 'Выбрать программу',
  target: '_blank',
  version: 'primary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <InsuranceAmountBlock
        className="col-span-12"
        context={context}
        title="Выбор страховой суммы"
        button={buttonPrimary}
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
                href: '/insurance1',
              },
              {
                sum: 200000,
                fee: 2100,
                icon: { icon: 'ActualBalanceIcon' },
                href: '/insurance2',
              },
              {
                sum: 200000,
                fee: 2100,
                icon: { icon: 'ActualBalanceIcon' },
                href: '/insurance3',
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
                href: '/insurance4',
              },
            ],
          },
        ]}
      />
    </div>
  ),
};
