import { context } from '../../react/setup-fixture';

import { BenefitsBlock } from './BenefitsBlock';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <BenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        benefits={[
          {
            label: 'Без комиссии',
            description:
              'Комиссия за выдачу кредита не взимается. Допускается полное или частичное погашение кредита',
            icon: { icon: 'ClockIcon' },
          },
          {
            label: 'Оформление по паспорту',
            description: 'Обеспечение не требуется. Кредит можно получить на любые цели',
            icon: { icon: 'SignDocsIcon' },
          },
          {
            label: 'Без залога и поручительства',
            description:
              'Единовременное перечисление суммы кредита в полном объёме на текущий счет в Банке',
            icon: { icon: 'ComfortableCompIcon' },
          },
          {
            label: 'Деньги за 3 дня',
            description:
              'Рассмотрение заявки с момента предоставления полного комплекта документов',
            icon: { icon: 'ActualBalanceIcon' },
          },
        ]}
      />
    </div>
  ),
};
