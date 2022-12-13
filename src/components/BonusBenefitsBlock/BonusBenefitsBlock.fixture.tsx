import '../../react/setup-fixture';

import { BonusBenefitsBlock } from './BonusBenefitsBlock';
import { BonusBenefit } from './BonusBenefitsBlockContent';

const bonusBenefits: BonusBenefit[] = [
  {
    label: 'Более 5000 товаров',
    icon: { icon: 'WateringCanIcon' },
  },
  {
    label: '750 авиакомпаний, 1,2 млн отелей, билеты РЖД',
    icon: { icon: 'AirPlaneIcon' },
  },
  {
    label: 'Аренда автомобилей',
    icon: { icon: 'CarIcon' },
  },
  {
    label: 'Болеее 1000 развлечений',
    icon: { icon: 'CinemaIcon' },
  },
  {
    label: 'Платежные гаджеты Pay Ring',
    icon: { icon: 'SoundIcon' },
  },
  {
    label: 'Цифровые сервисы',
    icon: { icon: 'DocsIcon' },
  },
  {
    label: 'Фермерские продукты',
    icon: { icon: 'PumpkinIcon' },
  },
  {
    label: 'Страхование',
    icon: { icon: 'PowerIcon' },
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <BonusBenefitsBlock
        className="col-span-12"
        title="Преимущества кредита"
        subtitle="Удобный каталог с большим ассортиментом товаров и сервисов"
        bonusBenefits={bonusBenefits}
      />
    </div>
  ),
  '5-cols': (
    <div className="container grid grid-cols-12">
      <BonusBenefitsBlock
        className="col-span-12"
        title="Преимущества кредита"
        subtitle="Удобный каталог с большим ассортиментом товаров и сервисов"
        bonusBenefits={bonusBenefits}
        columnsCount="5"
      />
    </div>
  ),
};
