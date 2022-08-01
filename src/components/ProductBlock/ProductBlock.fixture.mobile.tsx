import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { ProductBlock } from './ProductBlock';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 280,
    height: 280,
  },
};

export default {
  primary: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title={'Кредит до 5 000 000 Р\nбез залога и поручителей'}
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={[
          {
            label: 'До 5 млн ₽',
            description: 'Кредитный лимит',
            icon: 'EmptyWalletIcon',
          },
          {
            label: 'От 16,9%',
            description: 'Ставка по кредиту',
            icon: 'PercentageSquareIcon',
          },
          {
            label: 'До 5 лет',
            description: 'Срок кредитования',
            icon: 'CalendarIcon',
          },
        ]}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Оформить карту',
            target: '_blank',
            version: 'primary',
          },
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
        image={image}
      />
    </div>
  ),
};
