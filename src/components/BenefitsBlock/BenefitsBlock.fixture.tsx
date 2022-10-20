import { context } from '../../react/setup-fixture';

import { BenefitsBlock } from './BenefitsBlock';
import type { Picture } from '../../model/Picture';

const itemsList = [
  'Комиссия за выдачу',
  'кредита не взимается',
  'Допускается полное или',
  'частичное погашение кредита',
];

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 70,
    height: 70,
  },
};

export default {
  'desc-img': (
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
            icon: image,
          },
          {
            label: 'Оформление по паспорту',
            description: {
              name: 'Обеспечение не требуется. Кредит можно получить на любые цели',
              benefitType: 'text',
            },
            icon: image,
          },
          {
            label: 'Без залога и поручительства',
            description: {
              name: 'Единовременное перечисление суммы кредита в полном объёме на текущий счет в Банке',
              benefitType: 'text',
            },
            icon: image,
          },
          {
            label: 'Деньги за 3 дня',
            description: {
              name: 'Рассмотрение заявки с момента предоставления полного комплекта документов',
              benefitType: 'text',
            },
            icon: image,
          },
        ]}
        benefitsBlockVersion="primary"
      />
    </div>
  ),
  'desc-icon': (
    <div className="container grid grid-cols-12">
      <BenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        benefitList={[
          {
            label: 'Без комиссии',
            description: {
              name: 'Комиссия за выдачу ',
              benefitType: 'text',
            },
            icon: { icon: 'MoneyIcon' },
          },
          {
            label: 'Оформление',
            description: {
              name: 'Обеспечение ',
              benefitType: 'text',
            },
            icon: { icon: 'PersonalCardIcon' },
          },
          {
            label: 'Без залога ',
            description: {
              name: 'Единовременное перечисление ',
              benefitType: 'text',
            },
            icon: { icon: 'CalendarTickIcon' },
          },
          {
            label: 'Деньги за 3 дня',
            description: {
              name: 'Рассмотрение  ',
              benefitType: 'text',
            },
            icon: { icon: 'GlobalIcon' },
          },
        ]}
        benefitsBlockVersion="primary"
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
  'list-green': (
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
        benefitsBlockVersion="secondary"
      />
    </div>
  ),
  'desc-icon-green': (
    <div className="container grid grid-cols-12">
      <BenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        benefitList={[
          {
            label: 'Без комиссии',
            description: {
              name: 'Комиссия за выдачу ',
              benefitType: 'text',
            },
            icon: { icon: 'MoneyIcon' },
          },
          {
            label: 'Оформление',
            description: {
              name: 'Обеспечение ',
              benefitType: 'text',
            },
            icon: { icon: 'PersonalCardIcon' },
          },
          {
            label: 'Без залога ',
            description: {
              name: 'Единовременное перечисление ',
              benefitType: 'text',
            },
            icon: { icon: 'CalendarTickIcon' },
          },
          {
            label: 'Деньги за 3 дня',
            description: {
              name: 'Рассмотрение  ',
              benefitType: 'text',
            },
            icon: { icon: 'GlobalIcon' },
          },
        ]}
        benefitsBlockVersion="secondary"
      />
    </div>
  ),
};
