import { context } from '../../setup-fixture';

import { BonusBenefitsBlock } from './BonusBenefitsBlock';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <BonusBenefitsBlock
        context={context}
        className="col-span-12"
        title="Преимущества кредита"
        subtitle="Удобный каталог с большим ассортиментом товаров и сервисов"
        bonusBenefits={[
          {
            label: 'Более 5000 товаров',
            icon: { icon: 'WateringCan' },
          },
          {
            label: '750 авиакомпаний, 1,2 млн отелей, билеты РЖД',
            icon: { icon: 'AirPlane' },
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
        ]}
      />
    </div>
  ),
};
