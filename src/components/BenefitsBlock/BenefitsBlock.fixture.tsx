import { context } from '../../react/setup-fixture';

import { BenefitsBlock } from './BenefitsBlock';

const itemsList = [
  'Комиссия за выдачу',
  'кредита не взимается',
  'Допускается полное или',
  'частичное погашение кредита',
];

export default {
  description: (
    <div className="container grid grid-cols-12">
      <BenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        benefitList={[
          {
            label: 'Без комиссии',
            description: {
              name: 'Комиссия за выдачу кредита не взимается. Допускается полное или частичное погашение кредита',
              benefitType: 'text',
            },
            icon: { icon: 'ClockIcon' },
          },
          {
            label: 'Оформление по паспорту',
            description: {
              name: 'Обеспечение не требуется. Кредит можно получить на любые цели',
              benefitType: 'text',
            },
            icon: { icon: 'SignDocsIcon' },
          },
          {
            label: 'Без залога и поручительства',
            description: {
              name: 'Единовременное перечисление суммы кредита в полном объёме на текущий счет в Банке',
              benefitType: 'text',
            },
            icon: { icon: 'ComfortableCompIcon' },
          },
          {
            label: 'Деньги за 3 дня',
            description: {
              name: 'Рассмотрение заявки с момента предоставления полного комплекта документов',
              benefitType: 'text',
            },
            icon: { icon: 'ActualBalanceIcon' },
          },
        ]}
      />
    </div>
  ),
  list: (
    <div className="container grid grid-cols-12">
      <BenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        benefitList={[
          {
            label: 'Без комиссии',
            icon: { icon: 'ClockIcon' },
            description: {
              bullets: true,
              items: itemsList,
              benefitType: 'list',
            },
          },
          {
            label: 'Оформление по паспорту',
            description: {
              bullets: true,
              items: itemsList,
              benefitType: 'list',
            },
            icon: { icon: 'SignDocsIcon' },
          },
          {
            label: 'Без залога и поручительства',
            description: {
              bullets: true,
              items: itemsList,
              benefitType: 'list',
            },
            icon: { icon: 'ComfortableCompIcon' },
          },
          {
            label: 'Деньги за 3 дня',
            description: {
              bullets: true,
              items: itemsList,
              benefitType: 'list',
            },
            icon: { icon: 'ActualBalanceIcon' },
          },
        ]}
      />
    </div>
  ),
};
